/**
 * MojoUtils
 * Core utility functions for object manipulation and serialization.
 */
(function (global) {
  "use strict";

  // Shared Application State
  window.MojoGUI_State = window.MojoGUI_State || {
    interfaces: [],
    selectedInterface: null,
    selectedMethod: null,
    paramValues: {},
    mojoAvailable: false,
    panelVisible: false,
    trafficCount: 0,
    interceptResponses: false,
  };

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
   * This version returns a clean wrapper and does NOT pollute the original handle.
   */
  function decorateHandle(
    realHandle,
    isPendingAssociation = false,
    interfaceName = null,
  ) {
    if (!realHandle || typeof realHandle !== "object") return realHandle;

    console.log(`[MojoUtils] decorateHandle for ${interfaceName}`, {
      isPendingAssociation,
      hasLocalPeer: !!realHandle.localPeer_,
      hasRouter: !!realHandle.router_ || !!realHandle.router,
    });

    // 1. Extract the underlying raw handle if it's already wrapped
    let raw = realHandle;
    if (realHandle.nativeHandle) {
      raw = realHandle.nativeHandle;
    } else if (
      realHandle.handle &&
      typeof realHandle.handle.releasePipe === "function"
    ) {
      raw = realHandle.handle.releasePipe();
    } else if (realHandle.router && realHandle.router.pipe) {
      raw = realHandle.router.pipe;
    }

    // 2. Create the mock endpoint that returns the RAW handle
    const mockEndpoint = {
      releasePipe: () => raw,
      handle: raw,
      handle_: raw,
      isPendingAssociation: isPendingAssociation,
      localPeer_: realHandle.localPeer_ || null,
      interfaceId:
        realHandle.interfaceId_ !== undefined ? realHandle.interfaceId_ : 0,
      router: realHandle.router_ || realHandle.router || null,
    };

    // 3. Return a wrapper object.
    // We do NOT use defineProperty on 'raw' to avoid breaking native validation.
    const wrapper = {
      proxy: {
        unbind: () => mockEndpoint,
        handle: mockEndpoint,
        handle_: raw,
        endpoint: mockEndpoint,
        isPendingAssociation: isPendingAssociation,
        localPeer_: realHandle.localPeer_ || null,
      },
      unbind: () => mockEndpoint,
      handle: mockEndpoint,
      endpoint: mockEndpoint,
      handle_: raw,
      nativeHandle: raw,
      isPendingAssociation: isPendingAssociation,
      localPeer_: realHandle.localPeer_ || null,
      // For convenience, forward common handle methods
      writeMessage: raw.writeMessage
        ? (...args) => raw.writeMessage(...args)
        : undefined,
      readMessage: raw.readMessage
        ? (...args) => raw.readMessage(...args)
        : undefined,
      close: raw.close ? () => raw.close() : undefined,
      // Metadata for GUI
      $: { interfaceName: interfaceName || "PendingInterface" },
    };

    console.log(`[MojoUtils] Created wrapper for ${interfaceName}`, {
      wrapperHasEndpoint: !!wrapper.endpoint,
      proxyHasEndpoint: !!wrapper.proxy.endpoint,
      endpointHasLocalPeer: !!wrapper.endpoint.localPeer_,
    });

    return wrapper;
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

    const data = value.arg_data || value.data || value.arg_path || value.path;
    if (!data) {
      if (Array.isArray(value)) {
        if (is16) return String.fromCharCode(...value);
        return new TextDecoder().decode(new Uint8Array(value));
      }
      return "";
    }

    const isBig =
      data.hasOwnProperty("arg_bytes") ||
      data.hasOwnProperty("arg_shared_memory") ||
      data.hasOwnProperty("bytes") ||
      data.hasOwnProperty("shared_memory");
    let arrayData = isBig ? data.arg_bytes || data.bytes : data;
    if (!arrayData) return "";

    try {
      const u8 =
        arrayData instanceof Uint8Array ? arrayData : new Uint8Array(arrayData);

      // Heuristic: If it's a byte stream and every other byte is 0, it's almost certainly UTF-16LE
      let looksLikeUTF16 = is16;
      if (!looksLikeUTF16 && u8.length >= 2 && u8.length % 2 === 0) {
        let nulls = 0;
        for (let i = 1; i < u8.length; i += 2) if (u8[i] === 0) nulls++;
        if (nulls > u8.length / 4) looksLikeUTF16 = true;
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

    // 1. Handle Form Data (JSON with __mojoType="Handle")
    if (
      handleData &&
      typeof handleData === "object" &&
      handleData.__mojoType === "Handle"
    ) {
      const action = handleData.action || "preserve";
      if (action === "preserve") {
        if (handleData.$ref) {
          const entry = window.MojoObjectRegistry.get(handleData.$ref);
          if (entry && entry.remote) {
            const realHandle = window.MojoProxy.getRawHandleFromMojoObject(
              entry.remote,
            );
            if (realHandle) {
              return decorateHandle(realHandle);
            }
          }
        }
        return original;
      }
      if (action === "close") return null;
      if (action === "new_pipe") {
        if (
          handleData.type === "data_pipe_consumer" ||
          handleData.type === "data_pipe_producer"
        ) {
          const { producer, consumer } = Mojo.createDataPipe({
            elementNumBytes: 1,
            capacityNumBytes: 1024 * 1024,
          });
          let handleToPass, handleToWatch;
          if (handleData.type === "data_pipe_producer") {
            handleToPass = producer;
            handleToWatch = consumer;
          } else {
            handleToPass = consumer;
            handleToWatch = producer;
          }

          MojoHandleRegistry.register(handleToPass);
          MojoHandleRegistry.register(handleToWatch);

          // We bridge by watching the end the GUI keeps.
          // If browser wants a producer (to write to), we watch the local consumer to log bytes.
          if (handleData.type === "data_pipe_producer") {
            new MojoDataPipeProxy(handleToWatch, "consumer");
          }

          return decorateHandle(handleToPass, true, handleData.type);
        }

        if (handleData.isAssociated) {
          console.log(
            `[MojoUtils] Creating associated pair for ${handleData.interface}`,
          );
          const { endpoint0, endpoint1 } =
            mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();
          console.log(
            `[MojoUtils] Pair created. endpoint1.localPeer_ exists: ${!!endpoint1.localPeer_}`,
          );
          // endpoint0 is what we keep, endpoint1 is what we pass
          return decorateHandle(endpoint1, true, handleData.interface);
        }

        const { handle0, handle1 } = Mojo.createMessagePipe();
        MojoHandleRegistry.register(handle0);
        MojoHandleRegistry.register(handle1);
        return decorateHandle(handle0, true, handleData.interface);
      }
      if (action === "bind_associated") {
        // Manually bind an associated interface to a master handle
        const masterHandle = MojoHandleRegistry.get(handleData.masterHandleId);
        if (!masterHandle) return original;
        const router = new mojo.internal.interfaceSupport.Router(masterHandle);
        const endpoint = new mojo.internal.interfaceSupport.Endpoint(
          router,
          handleData.interfaceId || 0,
        );
        return decorateHandle(endpoint, true, handleData.interface);
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
      if (action === "bind_listener") {
        return handleData;
      }
      return original;
    }

    // 2. Resolve Object Registry References ($ref)
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

    if (edited === null || typeof edited !== "object") return edited;

    // Detect if it's already a Mojo handle or remote/receiver to avoid corrupting it
    if (
      edited.proxy ||
      edited.unbind ||
      edited.nativeHandle ||
      edited.$ ||
      edited.writeMessage ||
      edited.readMessage
    ) {
      return edited;
    }

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
        return name.includes("Big")
          ? inflateBigString(value, true)
          : inflateString16(value);
      }
      if (name.includes("Url") || name === "Url") {
        return { arg_url: value };
      }
      if (name.includes("FilePath")) {
        return { arg_path: value };
      }
      if (name.includes("BigString") && !name.includes("16")) {
        return inflateBigString(value, false);
      }
    }

    // 1. If it's already an object that looks like the struct/union, just ensure arg_ prefixes
    if (typeof value === "object" && !Array.isArray(value)) {
      const inflated = {};
      const fields = Array.isArray(spec.fields)
        ? spec.fields
        : Object.entries(spec.fields).map(([name, f]) => ({
            name,
            ...f,
          }));

      for (const field of fields) {
        let val = value[field.name];
        if (val === undefined && field.name.startsWith("arg_")) {
          val = value[field.name.substring(4)];
        }

        if (val !== undefined) {
          inflated[field.name] = inflateType(val, field.type.$ || field.type);
          // If it's a union, we only need one field.
          if (!Array.isArray(spec.fields)) return inflated;
        } else if (
          field.defaultValue !== null &&
          field.defaultValue !== undefined
        ) {
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
    if (typeof value === "number") {
      const handle =
        typeof MojoHandleRegistry !== "undefined"
          ? MojoHandleRegistry.get(value)
          : null;
      if (handle) return decorateHandle(handle);
    }

    if (!typeInfo) return value;
    if (typeInfo.structSpec) return inflateStruct(value, typeInfo.structSpec);
    if (typeInfo.unionSpec) {
      // For unions, if it's already a union-wrapped object, we might need a default tag
      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 1
      ) {
        // If the key is one of the union fields, it's already correctly formatted
        const key = Object.keys(value)[0];
        if (
          typeInfo.unionSpec.fields[key] ||
          typeInfo.unionSpec.fields["arg_" + key]
        ) {
          return value;
        }
      }

      // Try to find a matching field by type
      for (const [tag, field] of Object.entries(typeInfo.unionSpec.fields)) {
        const fieldType = field.type.$ || field.type;

        // Match simple types
        if (
          typeof value === "string" &&
          (fieldType === mojo.internal.String ||
            (fieldType.name && fieldType.name.includes("String")))
        ) {
          return { [tag]: value };
        }
        if (
          typeof value === "number" &&
          (fieldType === mojo.internal.Int32 ||
            fieldType === mojo.internal.Uint32 ||
            fieldType === mojo.internal.Int8 ||
            fieldType === mojo.internal.Uint8)
        ) {
          return { [tag]: value };
        }
        if (
          typeof value === "bigint" &&
          (fieldType === mojo.internal.Int64 ||
            fieldType === mojo.internal.Uint64)
        ) {
          return { [tag]: value };
        }
        if (typeof value === "boolean" && fieldType === mojo.internal.Bool) {
          return { [tag]: value };
        }
      }

      // Heuristic fallback: wrap in first tag
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

  // ========================================
  // Trusted Types Helper
  // ========================================
  let trustedPolicy = null;
  if (typeof global.trustedTypes !== "undefined") {
    try {
      if (!trustedPolicy) {
        // Use the safeHTML function for trusted HTML
        trustedPolicy = global.trustedTypes.createPolicy("mojoGUI");
      }
    } catch (e) {
      // Policy might already exist
      if (global.trustedTypes.defaultPolicy) {
        trustedPolicy = global.trustedTypes.defaultPolicy;
      }
      console.warn(
        "MojoUtils: Failed to create Trusted Types policy or it already exists",
        e,
      );
    }
  }

  function safeHTML(html) {
    // Don't want to implement a custom sanitizer or use a library, so return the input as is.
    // Script injection is blocked by our CSP.
    if (trustedPolicy) {
      return trustedPolicy.createHTML(html);
    }
    return html;
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Creates a debounced function that delays invoking func until after wait milliseconds.
   */
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  /**
   * Helper to read all available data from a Mojo data pipe.
   * @param {MojoHandle} handle - The consumer handle.
   * @returns {Uint8Array|null} The data read, or null if no data/error.
   */
  function readDataPipeAvailable(handle) {
    if (!handle || !handle.queryData || !handle.readData) return null;
    try {
      const query = handle.queryData();
      if (query.result !== Mojo.RESULT_OK || query.numBytes === 0) return null;

      const buffer = new Uint8Array(query.numBytes);
      const read = handle.readData(buffer);
      if (read.result !== Mojo.RESULT_OK) return null;

      return buffer.slice(0, read.numBytes);
    } catch (e) {
      console.warn("[MojoUtils] readDataPipeAvailable failed:", e);
      return null;
    }
  }

  /**
   * Helper to write data to a Mojo data pipe.
   * @param {MojoHandle} handle - The producer handle.
   * @param {Uint8Array|string} data - Data to write.
   * @returns {number} Mojo result code.
   */
  function writeDataPipe(handle, data) {
    if (!handle || !handle.writeData) return Mojo.RESULT_INVALID_ARGUMENT;
    try {
      let buffer = data;
      if (typeof data === "string") {
        buffer = new TextEncoder().encode(data);
      }
      return handle.writeData(buffer);
    } catch (e) {
      console.warn("[MojoUtils] writeDataPipe failed:", e);
      return Mojo.RESULT_UNKNOWN;
    }
  }

  const MojoUtils = {
    safeStringify,
    safeParse,
    safeHTML,
    sanitizeKeys,
    reconcileKeys,
    inflateStruct,
    inflateBigString,
    inflateString16,
    decodeBigString,
    decorateHandle,
    escapeHtml,
    readDataPipeAvailable,
    writeDataPipe,
    debounce,
  };

  global.MojoUtils = MojoUtils;
  global.safeHTML = safeHTML;
  global.escapeHtml = escapeHtml;
})(this);
