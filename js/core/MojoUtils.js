/**
 * MojoUtils
 * Core utility functions for object manipulation and serialization.
 */
(function (global) {
  "use strict";

  function safeStringify(value, space) {
    return JSON.stringify(
      value,
      (key, val) => (typeof val === "bigint" ? val.toString() + "n" : val),
      space,
    );
  }

  function safeParse(json) {
    return JSON.parse(json, (key, value) => {
      if (typeof value === "string" && /^-?\d+n$/.test(value)) {
        return BigInt(value.slice(0, -1));
      }
      return value;
    });
  }

  /**
   * Recursively removes 'arg_' prefix from keys for display.
   */
  function sanitizeKeys(obj, seen = new WeakSet()) {
    if (obj === null || typeof obj !== "object") return obj;
    if (seen.has(obj)) return "[Circular]";
    seen.add(obj);

    // Mojo Remote/Handle Detection
    const rawHandle =
      typeof MojoProxy !== "undefined"
        ? MojoProxy.getRawHandleFromMojoObject(obj)
        : null;
    if (rawHandle) {
      const guiId =
        typeof MojoHandleRegistry !== "undefined"
          ? MojoHandleRegistry.register(rawHandle)
          : 0;
      if (obj.$ && obj.proxy) {
        return {
          __mojoType: "Handle",
          interface:
            obj.$.interfaceName ||
            (obj.$.proxy && obj.$.proxy.interfaceName) ||
            "Unknown",
          interfaceId: guiId,
          isReceiver: false,
        };
      } else {
        return {
          __mojoType: "Handle",
          interface: "PendingReceiver",
          interfaceId: guiId,
          isReceiver: true,
        };
      }
    }

    if (Array.isArray(obj)) return obj.map((v) => sanitizeKeys(v, seen));

    // Handle TypedArrays (Uint8Array, etc.)
    if (ArrayBuffer.isView(obj) && !(obj instanceof DataView)) {
      return Array.from(obj).map((v) => sanitizeKeys(v, seen));
    }

    const clean = {};
    for (const key in obj) {
      let cleanKey = key.startsWith("arg_") ? key.substring(4) : key;
      clean[cleanKey] = sanitizeKeys(obj[key], seen);
    }
    return clean;
  }

  /**
   * Decorates a raw MojoHandle with properties that make it look like a
   * Remote/Receiver wrapper for compatibility with MojoJS's internal unbind() calls.
   * This is a non-destructive unified approach.
   */
  function decorateHandle(realHandle, isPendingAssociation = false) {
    if (!realHandle || typeof realHandle !== "object") return realHandle;

    // Check if it's already a wrapper or has the required properties
    if (realHandle.proxy && typeof realHandle.proxy.unbind === 'function') {
      return realHandle;
    }

    const mockEndpoint = {
      releasePipe: () => {
        // Return the clean native handle from the wrapper or self
        if (realHandle.nativeHandle) return realHandle.nativeHandle;
        if (realHandle.handle && typeof realHandle.handle.releasePipe === 'function') {
          return realHandle.handle.releasePipe();
        }
        return realHandle;
      },
      handle: realHandle,
      isPendingAssociation: isPendingAssociation
    };

    // For native handles (those with writeMessage/readMessage), we MUST NOT add properties
    // because it breaks native type validation in some versions of MojoJS/V8.
    if (realHandle.writeMessage && typeof realHandle.writeMessage === 'function') {
      return {
        proxy: { unbind: () => mockEndpoint },
        unbind: () => mockEndpoint,
        handle: mockEndpoint,
        nativeHandle: realHandle,
        // Delegate common methods for convenience
        writeMessage: (...args) => realHandle.writeMessage(...args),
        readMessage: (...args) => realHandle.readMessage(...args),
        close: () => realHandle.close()
      };
    }

    // Fallback: Use defineProperty for objects that aren't native handles (placeholders, etc.)
    if (!realHandle.hasOwnProperty('handle')) {
      Object.defineProperty(realHandle, 'handle', { value: mockEndpoint, configurable: true, enumerable: false });
    }
    
    if (!realHandle.hasOwnProperty('proxy')) {
      const proxy = { unbind: () => mockEndpoint };
      Object.defineProperty(realHandle, 'proxy', { value: proxy, configurable: true, enumerable: false });
    } else if (realHandle.proxy && !realHandle.proxy.unbind) {
      realHandle.proxy.unbind = () => mockEndpoint;
    }

    if (!realHandle.hasOwnProperty('unbind')) {
      Object.defineProperty(realHandle, 'unbind', { value: () => mockEndpoint, configurable: true, enumerable: false });
    }

    return realHandle;
  }

  /**
   * Inflates a string into a String16 struct { arg_data: [charCodes] }.
   */
  function inflateString16(value) {
    if (typeof value !== "string") return value;
    const data = [];
    for (let i = 0; i < value.length; i++) {
      data.push(value.charCodeAt(i));
    }
    return { arg_data: data };
  }

  /**
   * Inflates a string into a BigString/BigString16 struct.
   */
  function inflateBigString(value, is16 = false) {
    if (typeof value !== "string") return value;
    let bytes;
    if (is16) {
      const arr = new Uint16Array(value.length);
      for (let i = 0; i < value.length; i++) arr[i] = value.charCodeAt(i);
      bytes = new Uint8Array(arr.buffer);
    } else {
      bytes = new TextEncoder().encode(value);
    }
    // BigString has field 'data' (union BigBuffer) with tag 'arg_bytes'
    return { arg_data: { arg_bytes: bytes } };
  }

  /**
   * Decodes a BigString/BigString16 struct back into a string.
   */
  function decodeBigString(value, is16 = false) {
    if (!value) return "";
    if (typeof value === "string") return value;

    const data = value.arg_data || value.data;
    if (!data) {
      if (Array.isArray(value)) {
        if (is16) return String.fromCharCode(...value);
        return new TextDecoder().decode(new Uint8Array(value));
      }
      return "";
    }

    const isBig = data.hasOwnProperty('arg_bytes') || data.hasOwnProperty('arg_shared_memory') || data.hasOwnProperty('bytes') || data.hasOwnProperty('shared_memory');
    let arrayData = isBig ? (data.arg_bytes || data.bytes) : data;
    if (!arrayData) return "";

    try {
      const u8 = arrayData instanceof Uint8Array ? arrayData : new Uint8Array(arrayData);
      
      // Heuristic: If it's a byte stream and every other byte is 0, it's almost certainly UTF-16LE
      let looksLikeUTF16 = is16;
      if (!looksLikeUTF16 && u8.length >= 2 && u8.length % 2 === 0) {
        let nulls = 0;
        for (let i = 1; i < u8.length; i += 2) if (u8[i] === 0) nulls++;
        if (nulls > (u8.length / 4)) looksLikeUTF16 = true;
      }

      if (looksLikeUTF16) {
        if (!isBig && Array.isArray(arrayData)) {
          return String.fromCharCode(...arrayData);
        }
        return new TextDecoder("utf-16le").decode(u8);
      }
      return new TextDecoder("utf-8").decode(u8);
    } catch (e) {
      return "[Decoding Error]";
    }
  }

  /**
   * Restores 'arg_' prefixes and processes Handle descriptors.
   */
  function reconcileKeys(edited, original, useHeuristics = true) {
    let handleData = edited;
    if (
      typeof edited === "string" &&
      edited.startsWith('{"__mojoType":"Handle"')
    ) {
      try {
        handleData = JSON.parse(edited);
      } catch (e) {}
    }

    // 1. Resolve Object Registry References ($ref)
    if (handleData && typeof handleData === "object" && handleData.$ref) {
      const entry = window.MojoObjectRegistry.get(handleData.$ref);
      if (entry && entry.remote) {
        const realHandle = window.MojoProxy.getRawHandleFromMojoObject(
          entry.remote,
        );
        if (realHandle) {
          return decorateHandle(realHandle);
        }
      }
      return original;
    }

    if (
      handleData &&
      typeof handleData === "object" &&
      handleData.__mojoType === "Handle"
    ) {
      const action = handleData.action || "preserve";
      if (action === "preserve") return original;
      if (action === "close") return null;
      if (action === "new_pipe") {
        const { handle0, handle1 } = Mojo.createMessagePipe();
        MojoHandleRegistry.register(handle0);
        MojoHandleRegistry.register(handle1);
        return decorateHandle(handle0, true);
      }
      if (action === "use_handle") {
        const handleInput = handleData.customHandle;
        let realHandle = null;

        // Support both raw numeric IDs and registry IDs (obj_N)
        if (typeof handleInput === "string" && handleInput.startsWith("obj_")) {
          const entry = window.MojoObjectRegistry.get(handleInput);
          if (entry)
            realHandle = window.MojoProxy.getRawHandleFromMojoObject(
              entry.remote,
            );
        } else {
          realHandle = MojoHandleRegistry.get(parseInt(handleInput, 10));
        }

        if (!realHandle) return original;
        return decorateHandle(realHandle);
      }
      return original;
    }

    if (edited === null || typeof edited !== "object") return edited;
    if (Array.isArray(edited)) {
      return edited.map((v, i) =>
        reconcileKeys(
          v,
          Array.isArray(original) ? original[i] : null,
          useHeuristics,
        ),
      );
    }

    const restored = {};
    for (const key in edited) {
      let originalKey = key;
      if (original && original.hasOwnProperty("arg_" + key)) {
        originalKey = "arg_" + key;
      } else if (original && original.hasOwnProperty(key)) {
        originalKey = key;
      } else if (
        useHeuristics &&
        !key.startsWith("arg_") &&
        !key.startsWith("$")
      ) {
        originalKey = "arg_" + key;
      }
      restored[originalKey] = reconcileKeys(
        edited[key],
        original && original[originalKey],
        useHeuristics,
      );
    }
    return restored;
  }

  /**
   * Inflates a simple object or value into a full Mojo struct based on a spec.
   * e.g. "C:\foo" -> { arg_path: "C:\foo" } for FilePath
   */
  function inflateStruct(value, spec) {
    if (value === null || value === undefined) return value;
    if (!spec) return value;

    console.log(`[MojoUtils] inflateStruct for ${spec.name}`, { value, spec });

    // Special case: Mojo Base Type inflation from string
    if (typeof value === "string") {
      const name = spec.name || "";
      if (name.includes("String16")) {
        console.log(`[MojoUtils] Inflating string to ${name}`, value);
        return name.includes("Big") ? inflateBigString(value, true) : inflateString16(value);
      }
      if (name.includes("Url") || name === "Url") {
        return { arg_url: value };
      }
      if (name.includes("BigString") && !name.includes("16")) {
        return inflateBigString(value, false);
      }
    }

    // 1. If it's already an object that looks like the struct, just ensure arg_ prefixes
    if (typeof value === "object" && !Array.isArray(value)) {
      const inflated = {};
      for (const field of spec.fields) {
        let val = value[field.name];
        if (val === undefined && field.name.startsWith("arg_")) {
          val = value[field.name.substring(4)];
        }

        if (val !== undefined) {
          inflated[field.name] = inflateType(val, field.type.$ || field.type);
        } else if (field.defaultValue !== null) {
          inflated[field.name] = field.defaultValue;
        } else if (field.nullable) {
          inflated[field.name] = null;
        }
      }
      return inflated;
    }

    // 2. Heuristic: Single-field structs can be inflated from a single value
    if (spec.fields && spec.fields.length === 1) {
      return {
        [spec.fields[0].name]: inflateType(
          value,
          spec.fields[0].type.$ || spec.fields[0].type,
        ),
      };
    }

    return value;
  }

  function inflateType(value, typeInfo) {
    if (value === null || value === undefined) return null;

    // Handle auto-decoration
    if (typeof value === 'number') {
      const handle = typeof MojoHandleRegistry !== 'undefined' ? MojoHandleRegistry.get(value) : null;
      if (handle) return decorateHandle(handle);
    }

    if (!typeInfo) return value;
    if (typeInfo.structSpec) return inflateStruct(value, typeInfo.structSpec);
    if (typeInfo.unionSpec) {
      // For unions, if it's not already a union-wrapped object, we might need a default tag
      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 1
      ) {
        return value;
      }
      // Heuristic: wrap in first tag
      const firstTag = Object.keys(typeInfo.unionSpec.fields)[0];
      return { [firstTag]: value };
    }
    if (typeInfo.arraySpec) {
      if (Array.isArray(value)) {
        return value.map((v) =>
          inflateType(
            v,
            typeInfo.arraySpec.elementType.$ || typeInfo.arraySpec.elementType,
          ),
        );
      }
      // Special Case: String -> uint16 array (for FilePath on Windows)
      if (
        typeof value === "string" &&
        typeInfo.arraySpec.elementType === mojo.internal.Uint16
      ) {
        const arr = [];
        for (let i = 0; i < value.length; i++) arr.push(value.charCodeAt(i));
        return arr;
      }
    }
    return value;
  }

  const MojoUtils = {
    safeStringify,
    safeParse,
    sanitizeKeys,
    reconcileKeys,
    inflateStruct,
    inflateBigString,
    inflateString16,
    decodeBigString,
    decorateHandle
  };

  global.MojoUtils = MojoUtils;
})(this);