/**
 * MojoGUI Fuzzer
 * Structure-aware Mojo IPC fuzzer for security research.
 */
(function (global) {
  "use strict";

  const safe = global.safeHTML || ((s) => s);
  const escapeHtml = MojoUtils.escapeHtml;

  // ========================================
  // Fuzz Value Generators
  // ========================================
  // ========================================
  // Valid Value Generators (pass validation)
  // ========================================
  const ValidGenerators = {
    _pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    _randomString(len) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let s = "";
      for (let i = 0; i < len; i++)
        s += chars[Math.floor(Math.random() * chars.length)];
      return s;
    },

    number() {
      return this._pick([0, 1, 2, 10, 42, 100, 255, 1000]);
    },

    int64() {
      return this._pick([0n, 1n, 2n, 100n, 1000n]);
    },

    string() {
      return this._pick([
        "test",
        "hello world",
        "Example Title",
        "Some text content",
        "user input",
        this._randomString(16),
      ]);
    },

    bool() {
      return this._pick([true, false]);
    },

    enum(paramDef) {
      const options =
        (paramDef.type && paramDef.type.options) || paramDef.enumOptions;
      if (options && typeof options === "object") {
        const values = Object.values(options).filter(
          (v) => typeof v === "number",
        );
        return values.length > 0 ? this._pick(values) : 0;
      }
      return 0;
    },

    array(paramDef, depth) {
      if (depth > 3) return [];
      const elementSpec = paramDef.elementSpec;
      const length = this._pick([0, 1, 2]);
      const arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(this.generateForType(elementSpec, depth + 1));
      }
      return arr;
    },

    struct(paramDef, depth) {
      if (depth > 5) return null;
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const result = {};
      const fields = Array.isArray(spec.fields)
        ? spec.fields
        : Object.entries(spec.fields).map(([name, f]) => ({ name, ...f }));

      for (const field of fields) {
        if (field.nullable && Math.random() < 0.3) {
          result[field.name] = null;
          continue;
        }
        const fieldType = MojoReflectionService.inferType(
          field.type,
          field.name,
        );
        result[field.name] = this.generate(
          {
            name: field.name,
            type: fieldType,
            rawType: field.type,
            structSpec:
              field.type?.$?.structSpec || field.type?.structSpec,
            elementSpec:
              field.type?.elementType ||
              field.type?.$?.elementType ||
              field.type?.$?.arraySpec?.elementType,
            mapSpec:
              field.type?.keyType || field.type?.$?.mapSpec
                ? {
                    key:
                      field.type?.keyType || field.type?.$?.mapSpec?.keyType,
                    value:
                      field.type?.valueType || field.type?.$?.mapSpec?.valueType,
                  }
                : null,
            optional: !!field.nullable,
            defaultValue: field.defaultValue,
          },
          depth + 1,
        );
      }
      return result;
    },

    union(paramDef, depth) {
      if (depth > 5) return {};
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const fieldEntries =
        typeof spec.fields === "object" && !Array.isArray(spec.fields)
          ? Object.entries(spec.fields)
          : (spec.fields || []).map((f) => [f.name, f]);

      if (fieldEntries.length === 0) return {};
      const [tag, field] = this._pick(fieldEntries);
      const fieldType = MojoReflectionService.inferType(
        field.type || field,
        tag,
      );

      return {
        [tag]: this.generate(
          {
            name: tag,
            type: fieldType,
            rawType: field.type || field,
            structSpec: (field.type || field)?.$?.structSpec,
            optional: false,
          },
          depth + 1,
        ),
      };
    },

    map(paramDef, depth) {
      if (depth > 3) return {};
      const mapSpec = paramDef.mapSpec;
      if (!mapSpec) return {};

      const length = this._pick([0, 1, 2]);
      const result = {};
      for (let i = 0; i < length; i++) {
        const key = this.generateForType(mapSpec.key, depth + 1);
        const value = this.generateForType(mapSpec.value, depth + 1);
        if (key !== null && key !== undefined) {
          result[String(key)] = value;
        }
      }
      return result;
    },

    url() {
      return this._pick([
        "https://example.com",
        "https://example.com/page",
        "https://example.com/path?q=test",
        "http://example.com",
        "https://www.example.org/share",
      ]);
    },

    filepath() {
      return this._pick([
        "/tmp/test.txt",
        "C:\\Users\\test\\file.txt",
        "/home/user/document.pdf",
      ]);
    },

    bigstring() { return this.string(); },
    bigstring16() { return this.string(); },
    string16() { return this.string(); },
    handle() { return null; },
    pending_remote(paramDef) { return null; },
    pending_receiver() { return null; },
    pending_associated_remote() { return null; },
    pending_associated_receiver() { return null; },
    mojo_handle() { return null; },
    "handle<platform>"() { return null; },
    any() { return this._pick([0, "test", true]); },

    generateForType(typeSpec, depth) {
      if (!typeSpec) return this.any();
      const type = MojoReflectionService.inferType(typeSpec);
      return this.generate({ type, rawType: typeSpec }, depth);
    },

    generate(paramDef, depth) {
      if (depth === undefined) depth = 0;
      if (depth > 8) return null;

      const type = paramDef.type;

      if (type && typeof type === "object" && type.type === "enum") {
        return this.enum(paramDef);
      }

      switch (type) {
        case "number": return this.number();
        case "int64": return this.int64();
        case "string": return this.string();
        case "bool": return this.bool();
        case "array": return this.array(paramDef, depth);
        case "struct": return this.struct(paramDef, depth);
        case "union": return this.union(paramDef, depth);
        case "map": return this.map(paramDef, depth);
        case "Url": return this.url();
        case "filepath": return this.filepath();
        case "bigstring": return this.bigstring();
        case "bigstring16": return this.bigstring16();
        case "string16": return this.string16();
        case "pending_remote": return this.pending_remote(paramDef);
        case "pending_receiver": return this.pending_receiver();
        case "pending_associated_remote": return this.pending_associated_remote();
        case "pending_associated_receiver": return this.pending_associated_receiver();
        case "mojo_handle": return this.mojo_handle();
        case "handle<platform>": return this["handle<platform>"]();
        case "enum": return this.enum(paramDef);
        default: return this.any();
      }
    },
  };

  // ========================================
  // Attack Value Generators (fuzz/edge cases)
  // ========================================
  const FuzzGenerators = {
    _pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    _randomString(len) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let s = "";
      for (let i = 0; i < len; i++)
        s += chars[Math.floor(Math.random() * chars.length)];
      return s;
    },

    number() {
      return this._pick([
        0,
        1,
        -1,
        2,
        -2,
        255,
        256,
        65535,
        65536,
        0x7fffffff,
        -0x80000000,
        0xffffffff,
        0x7fff,
        0xffff,
        0xff,
        NaN,
        Infinity,
        -Infinity,
        -0,
        1.7976931348623157e308,
        5e-324,
        // IPC-specific: off-by-one around common buffer/length boundaries
        1023, 1024, 1025,
        4095, 4096, 4097,
        65534, 65537,
        0x7ffffffe, 0x80000001,
        // Signed/unsigned confusion boundaries
        0x80000000, // 2^31 (negative as int32, positive as uint32)
        0xfffffffe, // max uint32 - 1
        -2147483647, // min int32 + 1
        Math.floor(Math.random() * 1000000),
        -Math.floor(Math.random() * 1000000),
        Math.random(),
      ]);
    },

    int64() {
      return this._pick([
        0n,
        1n,
        -1n,
        2n,
        -2n,
        2n ** 63n - 1n,
        -(2n ** 63n),
        2n ** 32n,
        2n ** 32n - 1n,
        2n ** 64n - 1n,
        // IPC-specific: signed/unsigned confusion
        2n ** 31n - 1n,
        2n ** 31n,
        -(2n ** 31n),
        2n ** 63n, // overflows int64 -> wraps
        2n ** 48n - 1n, // common allocation boundary
        BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      ]);
    },

    string() {
      // 70% passable strings (survive validation, reach deeper logic)
      // 30% extreme strings (test boundary/sanitization)
      if (Math.random() < 0.7) {
        return this._pick([
          "",
          " ",
          "   leading whitespace",
          "trailing whitespace   ",
          "A".repeat(256),
          "A".repeat(10000),
          "<b>bold</b>",
          "<img src=x onerror=alert(1)>",
          "<script>alert(1)</script>",
          "{{7*7}}",
          "${7*7}",
          "test\nwith\nnewlines",
          "test\ttabs\there",
          "test\r\nCRLF",
          "\u202Ehello\u202C",
          "\uFEFF",
          "Sch\u00f6n",
          "\u0410\u0411\u0412",
          "\uD83D\uDE00\uD83D\uDE01\uD83D\uDE02",
          "a]b[c",
          "test'quote\"double",
          "a&b<c>d",
          "null",
          "undefined",
          "true",
          "false",
          "-1",
          "0",
          "%s%s%s%s",
          "../../../etc/passwd",
          "..\\..\\..\\windows\\system32",
          "file:///etc/passwd",
          "\\\\server\\share",
          "CON",
          this._randomString(50),
          this._randomString(500),
        ]);
      }
      return this._pick([
        "\x00",
        "\x00".repeat(100),
        "A".repeat(100000),
        "\u0000\u0001\u0002\u0003",
        "\uD800",
        "\uDFFF",
        String.fromCharCode(...Array.from({ length: 128 }, (_, i) => i)),
        "/dev/null",
        "NUL",
        "%n%n%n%n%n%n",
        this._randomString(1000),
      ]);
    },

    bool() {
      return this._pick([true, false]);
    },

    enum(paramDef) {
      const options =
        (paramDef.type && paramDef.type.options) || paramDef.enumOptions;
      if (options && typeof options === "object") {
        const values = Object.values(options).filter(
          (v) => typeof v === "number",
        );
        const candidates = [...values, -1, -2, 9999, values.length, 0xffffffff];
        return this._pick(candidates);
      }
      return this._pick([0, 1, -1, 9999]);
    },

    array(paramDef, depth) {
      if (depth > 3) return [];
      const elementSpec = paramDef.elementSpec;
      // 70% small arrays (pass validation), 30% large (stress test)
      const length = Math.random() < 0.7
        ? this._pick([0, 1, 2, 3])
        : this._pick([5, 50, 100]);
      const arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(this.generateForType(elementSpec, depth + 1));
      }
      return arr;
    },

    struct(paramDef, depth) {
      if (depth > 5) return null;
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const result = {};
      const fields = Array.isArray(spec.fields)
        ? spec.fields
        : Object.entries(spec.fields).map(([name, f]) => ({ name, ...f }));

      for (const field of fields) {
        if (field.nullable && Math.random() < 0.3) {
          result[field.name] = null;
          continue;
        }
        const fieldType = MojoReflectionService.inferType(
          field.type,
          field.name,
        );
        result[field.name] = this.generate(
          {
            name: field.name,
            type: fieldType,
            rawType: field.type,
            structSpec:
              field.type?.$?.structSpec ||
              field.type?.structSpec,
            elementSpec:
              field.type?.elementType ||
              field.type?.$?.elementType ||
              field.type?.$?.arraySpec?.elementType,
            mapSpec:
              field.type?.keyType || field.type?.$?.mapSpec
                ? {
                    key:
                      field.type?.keyType ||
                      field.type?.$?.mapSpec?.keyType,
                    value:
                      field.type?.valueType ||
                      field.type?.$?.mapSpec?.valueType,
                  }
                : null,
            optional: !!field.nullable,
            defaultValue: field.defaultValue,
          },
          depth + 1,
        );
      }
      return result;
    },

    union(paramDef, depth) {
      if (depth > 5) return {};
      const spec = paramDef.structSpec;
      if (!spec || !spec.fields) return {};

      const fieldEntries =
        typeof spec.fields === "object" && !Array.isArray(spec.fields)
          ? Object.entries(spec.fields)
          : (spec.fields || []).map((f) => [f.name, f]);

      if (fieldEntries.length === 0) return {};
      const [tag, field] = this._pick(fieldEntries);
      const fieldType = MojoReflectionService.inferType(
        field.type || field,
        tag,
      );

      return {
        [tag]: this.generate(
          {
            name: tag,
            type: fieldType,
            rawType: field.type || field,
            structSpec: (field.type || field)?.$?.structSpec,
            optional: false,
          },
          depth + 1,
        ),
      };
    },

    map(paramDef, depth) {
      if (depth > 3) return {};
      const mapSpec = paramDef.mapSpec;
      if (!mapSpec) return {};

      const length = this._pick([0, 1, 3, 10]);
      const result = {};
      for (let i = 0; i < length; i++) {
        const key = this.generateForType(mapSpec.key, depth + 1);
        const value = this.generateForType(mapSpec.value, depth + 1);
        if (key !== null && key !== undefined) {
          result[String(key)] = value;
        }
      }
      return result;
    },

    url() {
      // 70% valid-scheme URLs (pass URL validation, reach handler logic)
      // 30% invalid/exotic schemes (test scheme filtering)
      if (Math.random() < 0.7) {
        return this._pick([
          "https://example.com",
          "https://example.com/page",
          "https://example.com/path?q=<script>alert(1)</script>",
          "https://example.com/path?q={{7*7}}",
          "https://example.com/path?redirect=https://evil.com",
          "https://example.com/" + "A".repeat(5000),
          "https://example.com/path/../../../etc/passwd",
          "https://evil.com/path?q=1#frag",
          "http://example.com",
          "http://localhost",
          "http://localhost:8080/admin",
          "http://127.0.0.1",
          "http://[::1]/",
          "http://0x7f000001/",
          "http://169.254.169.254/latest/meta-data/",
          "http://metadata.google.internal/",
          "https://example.com/path?q=" + encodeURIComponent("<script>"),
          "https://example.com/%2e%2e/%2e%2e/etc/passwd",
          "https://example.com/page#<img src=x>",
          "https://user:pass@example.com/",
          "https://example.com:443/",
          "https://example.com:8443/",
        ]);
      }
      return this._pick([
        "",
        "javascript:alert(1)",
        "data:text/html,<h1>test</h1>",
        "file:///etc/passwd",
        "file:///C:/Windows/System32/config/SAM",
        "ftp://ftp.example.com",
        "blob:http://example.com/uuid",
        "about:blank",
        "chrome://settings",
        "chrome-extension://aaaa/manifest.json",
        "://missing-scheme",
        "http://",
        "http:///",
        "http://example.com/\x00evil",
      ]);
    },

    filepath() {
      if (Math.random() < 0.6) {
        return this._pick([
          "/tmp/test.txt",
          "/home/user/document.pdf",
          "C:\\Users\\test\\file.txt",
          "/tmp/" + this._randomString(20) + ".txt",
          "../test.txt",
          "./relative/path.txt",
          "file with spaces.txt",
          "/tmp/" + "A".repeat(200) + ".txt",
        ]);
      }
      return this._pick([
        "",
        "C:\\Windows\\System32\\cmd.exe",
        "/etc/passwd",
        "../../../etc/shadow",
        "..\\..\\..\\windows\\system32\\config\\sam",
        "/dev/null",
        "CON",
        "NUL",
        "/proc/self/exe",
        "A".repeat(1000),
        // Symlink / junction targets
        "/proc/self/fd/0",
        "/proc/self/maps",
        "/proc/self/cmdline",
        // Windows special devices
        "COM1", "LPT1", "AUX", "PRN",
        "C:\\$Recycle.Bin",
        // Null byte injection (test C-string termination)
        "/tmp/safe\x00/etc/passwd",
        "C:\\safe\x00\\..\\Windows\\System32",
        // Unicode normalization attacks
        "\u2025\u2025/etc/passwd", // two-dot leader
        "/tmp/\uFE64script\uFE65", // small form variants
      ]);
    },

    bigstring() {
      return this.string();
    },

    bigstring16() {
      return this.string();
    },

    string16() {
      return this.string();
    },

    handle() {
      return null;
    },

    pending_remote(paramDef) {
      if (paramDef.interface && Math.random() < 0.5) {
        return {
          __mojoType: "Handle",
          action: "bind_listener",
          interface: paramDef.interface,
        };
      }
      return null;
    },

    pending_receiver() {
      return null;
    },

    pending_associated_remote() {
      return null;
    },

    pending_associated_receiver() {
      return null;
    },

    mojo_handle() {
      return null;
    },

    "handle<platform>"() {
      return null;
    },

    any() {
      const gen = this._pick(["number", "string", "bool"]);
      return this[gen]();
    },

    generateForType(typeSpec, depth) {
      if (!typeSpec) return this.any();
      const type = MojoReflectionService.inferType(typeSpec);
      return this.generate({ type, rawType: typeSpec }, depth);
    },

    generate(paramDef, depth) {
      if (depth === undefined) depth = 0;
      if (depth > 8) return null;

      const type = paramDef.type;

      if (type && typeof type === "object" && type.type === "enum") {
        return this.enum(paramDef);
      }

      switch (type) {
        case "number":
          return this.number();
        case "int64":
          return this.int64();
        case "string":
          return this.string();
        case "bool":
          return this.bool();
        case "array":
          return this.array(paramDef, depth);
        case "struct":
          return this.struct(paramDef, depth);
        case "union":
          return this.union(paramDef, depth);
        case "map":
          return this.map(paramDef, depth);
        case "Url":
          return this.url();
        case "filepath":
          return this.filepath();
        case "bigstring":
          return this.bigstring();
        case "bigstring16":
          return this.bigstring16();
        case "string16":
          return this.string16();
        case "pending_remote":
          return this.pending_remote(paramDef);
        case "pending_receiver":
          return this.pending_receiver();
        case "pending_associated_remote":
          return this.pending_associated_remote();
        case "pending_associated_receiver":
          return this.pending_associated_receiver();
        case "mojo_handle":
          return this.mojo_handle();
        case "handle<platform>":
          return this["handle<platform>"]();
        case "enum":
          return this.enum(paramDef);
        default:
          return this.any();
      }
    },
  };

  // ========================================
  // Fuzzing Technique Helpers
  // ========================================

  /**
   * Generates a type-confused value — returns a value of the wrong type
   * for the given parameter to test deserialization and type-checking.
   */
  function typeConfusedValue(paramDef) {
    const type = paramDef.type;
    // Return a type that doesn't match
    const confusions = {
      string: () => FuzzGenerators._pick([0, -1, true, null, {}, [], NaN]),
      number: () => FuzzGenerators._pick(["not_a_number", "", true, null, {}, [], "99999999"]),
      int64: () => FuzzGenerators._pick(["not_a_bigint", 0, null, {}, true]),
      bool: () => FuzzGenerators._pick([0, 1, 2, -1, "true", "false", "", null, "yes"]),
      Url: () => FuzzGenerators._pick([0, null, true, {}, [], { url: "http://x.com" }, 42]),
      enum: () => FuzzGenerators._pick(["invalid", null, true, {}, 99999, -99999, 3.14]),
      array: () => FuzzGenerators._pick(["not_array", 0, true, null, {}, "[]"]),
      struct: () => FuzzGenerators._pick(["not_struct", 0, true, null, [], ""]),
      map: () => FuzzGenerators._pick(["not_map", 0, true, null, [], ""]),
    };
    const gen = confusions[type] || confusions.string;
    return gen();
  }

  /**
   * Available fuzzing techniques, cycled per-iteration.
   * Each returns a params object for the given method definition.
   */
  const FuzzTechniques = {
    /** Fuzz one param, rest valid */
    targeted(methodDef, iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      const fuzzIndex = iteration % paramCount;
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        params[p.name] = i === fuzzIndex
          ? FuzzGenerators.generate(p)
          : ValidGenerators.generate(p);
      }
      return params;
    },

    /** Fuzz 2-3 params simultaneously, rest valid */
    multiField(methodDef, iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      if (paramCount <= 1) return this.targeted(methodDef, iteration);

      const fuzzCount = Math.min(paramCount, FuzzGenerators._pick([2, 3]));
      const indices = new Set();
      while (indices.size < fuzzCount) {
        indices.add(Math.floor(Math.random() * paramCount));
      }
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        params[p.name] = indices.has(i)
          ? FuzzGenerators.generate(p)
          : ValidGenerators.generate(p);
      }
      return params;
    },

    /** Set random params to null or omit them entirely */
    nullOmit(methodDef, _iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      const nullIndex = Math.floor(Math.random() * paramCount);
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        if (i === nullIndex) {
          // 50% null, 50% omit (don't set the key at all)
          if (Math.random() < 0.5) {
            params[p.name] = null;
          }
          // else: key is omitted
        } else {
          params[p.name] = ValidGenerators.generate(p);
        }
      }
      return params;
    },

    /** Send wrong types for one param */
    typeConfuse(methodDef, iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      const confuseIndex = iteration % paramCount;
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        params[p.name] = i === confuseIndex
          ? typeConfusedValue(p)
          : ValidGenerators.generate(p);
      }
      return params;
    },

    /** All valid — baseline to confirm the call actually works */
    baseline(methodDef, _iteration) {
      const params = {};
      for (const p of methodDef.parameters) {
        params[p.name] = ValidGenerators.generate(p);
      }
      return params;
    },

    /** Boundary values only — test integer/string limits */
    boundary(methodDef, iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      const targetIdx = iteration % paramCount;
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        if (i === targetIdx) {
          const t = typeof p.type === "object" ? p.type.type : p.type;
          if (t === "number") {
            params[p.name] = FuzzGenerators._pick([
              0, -1, 1, 0x7fffffff, -0x80000000, 0xffffffff, 0xffff, 0xff,
              Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER,
            ]);
          } else if (t === "int64") {
            params[p.name] = FuzzGenerators._pick([
              0n, -1n, 1n, 2n ** 63n - 1n, -(2n ** 63n), 2n ** 32n - 1n, 2n ** 32n,
            ]);
          } else if (t === "string" || t === "Url" || t === "bigstring" || t === "bigstring16") {
            params[p.name] = FuzzGenerators._pick([
              "", " ", "A".repeat(65536), "A".repeat(1048576), "\x00",
              "\x00".repeat(256), String.fromCharCode(...Array.from({length: 128}, (_, i) => i)),
            ]);
          } else if (t === "array") {
            params[p.name] = FuzzGenerators._pick([
              [], new Array(1000).fill(0), new Array(10000).fill(null),
            ]);
          } else {
            params[p.name] = FuzzGenerators.generate(p);
          }
        } else {
          params[p.name] = ValidGenerators.generate(p);
        }
      }
      return params;
    },

    /** Double-free / use-after pattern — send null/closed handles after valid ones */
    handleReuse(methodDef, _iteration) {
      const params = {};
      for (const p of methodDef.parameters) {
        const t = typeof p.type === "object" ? p.type.type : p.type;
        if (t === "pending_remote" || t === "pending_receiver" ||
            t === "pending_associated_remote" || t === "pending_associated_receiver" ||
            t === "mojo_handle") {
          // Send null to test missing-handle paths
          params[p.name] = null;
        } else {
          params[p.name] = ValidGenerators.generate(p);
        }
      }
      return params;
    },

    /** Deep nested structs/arrays to test recursive deserialization limits */
    depthStress(methodDef, _iteration) {
      const params = {};
      for (const p of methodDef.parameters) {
        const t = typeof p.type === "object" ? p.type.type : p.type;
        if (t === "struct" || t === "union") {
          // Build deeply nested structure to stress the deserializer
          let val = FuzzGenerators.generate(p, 0);
          // Wrap in extra nesting layers
          for (let d = 0; d < 3; d++) {
            const keys = val && typeof val === "object" ? Object.keys(val) : [];
            if (keys.length > 0) {
              const k = keys[Math.floor(Math.random() * keys.length)];
              if (typeof val[k] === "object" && val[k] !== null) {
                val = val; // keep same depth, just ensure deeply fuzzed
                break;
              }
            }
          }
          params[p.name] = val;
        } else if (t === "array") {
          // Nested arrays: [[[[...]]]]
          let arr = [FuzzGenerators.generate(p, 0)];
          params[p.name] = arr;
        } else {
          params[p.name] = FuzzGenerators.generate(p);
        }
      }
      return params;
    },

    /** Cross-parameter dependency — fuzz values that reference other params */
    crossParam(methodDef, _iteration) {
      const params = {};
      const paramCount = methodDef.parameters.length;
      // First pass: generate all valid
      for (const p of methodDef.parameters) {
        params[p.name] = ValidGenerators.generate(p);
      }
      // Second pass: for size/count params, set contradictory values
      for (let i = 0; i < paramCount; i++) {
        const p = methodDef.parameters[i];
        const nameLower = p.name.toLowerCase();
        const t = typeof p.type === "object" ? p.type.type : p.type;
        // If param name suggests a length/size/count, set it to a mismatched value
        if (t === "number" && /(?:size|length|count|num|offset|capacity)/i.test(nameLower)) {
          params[p.name] = FuzzGenerators._pick([
            -1, 0, 1, 0x7fffffff, 0xffffffff,
            // Off-by-one relative to any array params
            ...methodDef.parameters
              .filter(q => (typeof q.type === "object" ? q.type.type : q.type) === "array")
              .flatMap(() => [0, 1, 2, 99999]),
          ]);
        }
      }
      return params;
    },
  };

  // Register feedback-guided as a technique
  FuzzTechniques.feedbackGuided = feedbackGuidedParams;

  /** Ordered list of techniques to cycle through */
  const TECHNIQUE_NAMES = [
    "targeted", "targeted", "targeted",  // Weight toward targeted
    "feedbackGuided", "feedbackGuided",   // Weight toward feedback-guided
    "multiField",
    "nullOmit",
    "typeConfuse",
    "boundary",
    "handleReuse",
    "depthStress",
    "crossParam",
    "baseline",
  ];

  // ========================================
  // Fuzzer Engine & UI
  // ========================================
  // ── Response-guided feedback engine ──────────────────────────────
  //
  // Learns from IPC responses to guide future mutations:
  // 1. Tracks which param values pass/fail validation per method
  // 2. Builds a baseline response fingerprint per method
  // 3. Detects structural anomalies when fuzzed responses differ from baseline
  // 4. Maintains a ring buffer of recent calls for crash correlation

  const FeedbackEngine = {
    /** Per-method knowledge: { "iface.method": { baseline, paramFeedback, ... } } */
    _methodKnowledge: new Map(),

    /** Ring buffer of last N calls for crash correlation */
    _callHistory: [],
    HISTORY_SIZE: 20,

    /** Record a call and its outcome for learning */
    recordCall(interfaceFqn, methodName, params, status, result, errorMsg, durationMs) {
      // 1. Push to ring buffer
      this._callHistory.push({
        interface: interfaceFqn,
        method: methodName,
        params: this._cloneParams(params),
        status,
        error: errorMsg,
        durationMs,
        timestamp: Date.now(),
      });
      if (this._callHistory.length > this.HISTORY_SIZE) {
        this._callHistory.shift();
      }

      const key = interfaceFqn + "." + methodName;
      if (!this._methodKnowledge.has(key)) {
        this._methodKnowledge.set(key, {
          baseline: null,         // First successful response fingerprint
          successCount: 0,
          errorCount: 0,
          paramFeedback: {},      // { paramName: { accepted: [...], rejected: [...] } }
          interestingInputs: [],  // Inputs that produced anomalous responses
          errorPatterns: new Map(), // error message → param values that triggered it
        });
      }

      const mk = this._methodKnowledge.get(key);

      if (status === "success") {
        mk.successCount++;

        // Build baseline fingerprint from first success
        if (!mk.baseline) {
          mk.baseline = this._fingerprint(result);
        } else {
          // Differential analysis: compare to baseline
          const current = this._fingerprint(result);
          if (current !== mk.baseline) {
            // This fuzzed input produced a structurally different response
            mk.interestingInputs.push({
              params: this._cloneParams(params),
              reason: "response_anomaly",
              baselineFingerprint: mk.baseline,
              currentFingerprint: current,
            });
            // Cap stored interesting inputs
            if (mk.interestingInputs.length > 10) mk.interestingInputs.shift();
          }
        }

        // Record which param values were accepted
        this._recordParamOutcome(mk, params, "accepted");
      } else if (status === "error" && errorMsg) {
        mk.errorCount++;

        // Record which param values were rejected
        this._recordParamOutcome(mk, params, "rejected");

        // Track error patterns → param correlations
        const errKey = errorMsg.substring(0, 100);
        if (!mk.errorPatterns.has(errKey)) {
          mk.errorPatterns.set(errKey, []);
        }
        const errList = mk.errorPatterns.get(errKey);
        errList.push(this._cloneParams(params));
        if (errList.length > 5) errList.shift();
      }
    },

    /** Get learned knowledge for biasing mutations */
    getKnowledge(interfaceFqn, methodName) {
      return this._methodKnowledge.get(interfaceFqn + "." + methodName) || null;
    },

    /** Get the full call history for crash correlation */
    getCallHistory() {
      return this._callHistory;
    },

    /** Record per-param accept/reject for learning */
    _recordParamOutcome(mk, params, outcome) {
      for (const [name, value] of Object.entries(params)) {
        if (name === "__technique") continue;
        if (!mk.paramFeedback[name]) {
          mk.paramFeedback[name] = { accepted: [], rejected: [] };
        }
        const fb = mk.paramFeedback[name];
        const serialized = this._serializeValue(value);
        const list = fb[outcome];
        // Avoid duplicates and cap at 15 entries
        if (!list.includes(serialized)) {
          list.push(serialized);
          if (list.length > 15) list.shift();
        }
      }
    },

    /** Create a structural fingerprint of a response (type + keys, not values) */
    _fingerprint(obj) {
      if (obj === null || obj === undefined) return "null";
      if (typeof obj !== "object") return typeof obj;
      if (Array.isArray(obj)) {
        return "array[" + obj.length + ":" + (obj.length > 0 ? this._fingerprint(obj[0]) : "empty") + "]";
      }
      const keys = Object.keys(obj).sort();
      const inner = keys.map((k) => k + ":" + typeof obj[k]).join(",");
      return "{" + inner + "}";
    },

    /** Serialize a param value for comparison (lossy, for dedup) */
    _serializeValue(val) {
      if (val === null) return "null";
      if (val === undefined) return "undefined";
      if (typeof val === "object") {
        try { return JSON.stringify(val).substring(0, 80); } catch { return "[object]"; }
      }
      return String(val).substring(0, 80);
    },

    /** Shallow clone params (avoid holding references to Mojo handles) */
    _cloneParams(params) {
      const clone = {};
      for (const [k, v] of Object.entries(params)) {
        if (k === "__technique") continue;
        if (v === null || typeof v !== "object") {
          clone[k] = v;
        } else {
          try { clone[k] = JSON.parse(JSON.stringify(v)); }
          catch { clone[k] = "[uncloneable]"; }
        }
      }
      return clone;
    },

    /** Reset all learned state */
    reset() {
      this._methodKnowledge.clear();
      this._callHistory = [];
    },

    /** Export learned knowledge for the report */
    exportKnowledge() {
      const data = {};
      for (const [key, mk] of this._methodKnowledge) {
        data[key] = {
          successCount: mk.successCount,
          errorCount: mk.errorCount,
          hasBaseline: !!mk.baseline,
          interestingInputCount: mk.interestingInputs.length,
          interestingInputs: mk.interestingInputs,
          errorPatternCount: mk.errorPatterns.size,
          paramFeedback: mk.paramFeedback,
        };
      }
      return data;
    },
  };

  // ── Feedback-guided technique ──────────────────────────────────
  // Uses FeedbackEngine to bias mutations toward values near
  // the accept/reject boundary for each parameter.

  function feedbackGuidedParams(methodDef, iteration) {
    const params = {};
    const mk = FeedbackEngine.getKnowledge(
      MojoFuzzer._currentInterface || "",
      methodDef.name,
    );

    for (const p of methodDef.parameters) {
      if (!mk || !mk.paramFeedback[p.name]) {
        // No feedback yet — fall back to normal fuzz
        params[p.name] = FuzzGenerators.generate(p);
        continue;
      }

      const fb = mk.paramFeedback[p.name];

      // Strategy: pick a value that was accepted, then mutate it slightly
      // to probe the validation boundary
      if (fb.accepted.length > 0 && Math.random() < 0.7) {
        // Start from an accepted value and mutate
        const baseStr = fb.accepted[Math.floor(Math.random() * fb.accepted.length)];
        params[p.name] = mutateBoundary(baseStr, p);
      } else if (fb.rejected.length > 0 && Math.random() < 0.5) {
        // Replay a rejected value with slight variation
        const baseStr = fb.rejected[Math.floor(Math.random() * fb.rejected.length)];
        params[p.name] = mutateBoundary(baseStr, p);
      } else {
        params[p.name] = FuzzGenerators.generate(p);
      }
    }

    // If we have interesting inputs, occasionally replay one with a twist
    if (mk && mk.interestingInputs.length > 0 && Math.random() < 0.2) {
      const interesting = mk.interestingInputs[
        Math.floor(Math.random() * mk.interestingInputs.length)
      ];
      // Copy the interesting params but mutate one field
      const keys = Object.keys(interesting.params);
      const mutKey = keys[Math.floor(Math.random() * keys.length)];
      for (const k of keys) {
        if (k === mutKey) {
          params[k] = FuzzGenerators.generate(
            methodDef.parameters.find((p) => p.name === k) || { name: k, type: "any" },
          );
        } else {
          params[k] = interesting.params[k];
        }
      }
    }

    return params;
  }

  /** Mutate a serialized value slightly to probe boundaries */
  function mutateBoundary(serializedVal, paramDef) {
    // Try to parse as a number for arithmetic mutations
    const num = Number(serializedVal);
    if (!isNaN(num) && isFinite(num)) {
      const delta = FuzzGenerators._pick([1, -1, 2, -2, 0]);
      const mutated = num + delta;
      const t = typeof paramDef.type === "object" ? paramDef.type.type : paramDef.type;
      if (t === "int64") return BigInt(Math.round(mutated));
      return mutated;
    }

    // String mutations
    if (serializedVal === "null") return null;
    if (serializedVal === "undefined") return undefined;

    // Try to parse as JSON for structural mutations
    try {
      const parsed = JSON.parse(serializedVal);
      if (typeof parsed === "string") {
        // Mutate string: truncate, extend, or flip case
        return FuzzGenerators._pick([
          parsed.substring(0, Math.max(0, parsed.length - 1)),
          parsed + "X",
          parsed + "\x00",
          parsed.toUpperCase(),
          "",
        ]);
      }
      if (Array.isArray(parsed)) {
        // Mutate array: add element, remove element, or empty
        return FuzzGenerators._pick([
          [...parsed, null],
          parsed.slice(0, -1),
          [],
          [...parsed, ...parsed], // double
        ]);
      }
      return parsed;
    } catch {
      // Fall back to generating a fresh fuzz value
      return FuzzGenerators.generate(paramDef);
    }
  }

  const MojoFuzzer = {
    running: false,
    aborted: false,
    stats: { calls: 0, successes: 0, errors: 0, crashes: 0, startTime: 0, slowCalls: 0 },
    results: [],
    uniqueErrors: new Map(),
    _objectCache: {},
    _lastSuccessParams: null,
    _responseTimes: [],
    _currentInterface: null, // Tracked for feedback engine context
    SLOW_CALL_THRESHOLD_MS: 5000, // Flag calls >5s as potential DoS vectors

    INFLIGHT_KEY: "mojofuzzer_inflight",
    SESSION_KEY: "mojofuzzer_session",
    _crashedTargets: new Set(),

    init() {
      this.renderUI();
      this.checkForCrash();
    },

    checkForCrash() {
      try {
        const raw = localStorage.getItem(this.INFLIGHT_KEY);
        if (!raw) return;
        localStorage.removeItem(this.INFLIGHT_KEY);

        const inflight = JSON.parse(raw);

        // Record the crash
        this.stats.crashes++;
        this.stats.calls++;

        const crashKey = inflight.interface + "." + inflight.method;
        const recentCalls = inflight.recentCalls || [];
        const historyNote = recentCalls.length > 0
          ? ` (${recentCalls.length} preceding calls available in export)`
          : "";
        const errorKey = `${crashKey}: CRASH (page reloaded during call)`;
        this.uniqueErrors.set(errorKey, {
          count: 1,
          firstParams: inflight.params,
          firstMethod: inflight.method,
          firstInterface: inflight.interface,
          recentCalls,
          error:
            "Browser or tab crashed - page was reloaded while this call was in flight" + historyNote,
        });

        this.addResult({
          index: 0,
          interface: inflight.interface,
          method: inflight.method,
          params: inflight.params,
          status: "crash",
          result: null,
          error:
            "Browser or tab crashed - page was reloaded while this call was in flight" + historyNote,
          recentCalls,
          timestamp: Date.now(),
        });

        this.updateStats();
        global.showToast(
          `Crash detected! ${crashKey} caused a page reload. Resuming...`,
          "warning",
        );

        // Load session and add the crashing target to the skip list, then resume
        const sessionRaw = localStorage.getItem(this.SESSION_KEY);
        if (sessionRaw) {
          const session = JSON.parse(sessionRaw);

          // Carry forward existing crashed targets + the new one
          this._crashedTargets = new Set(session.crashedTargets || []);
          this._crashedTargets.add(crashKey);

          // Restore stats from session (add to the crash we just recorded)
          this.stats.calls += session.stats.calls || 0;
          this.stats.successes += session.stats.successes || 0;
          this.stats.errors += session.stats.errors || 0;
          this.stats.crashes += session.stats.crashes || 0;

          // Restore unique errors from session
          if (session.uniqueErrors) {
            for (const [key, data] of session.uniqueErrors) {
              if (!this.uniqueErrors.has(key)) {
                this.uniqueErrors.set(key, data);
              }
            }
          }

          // Restore results from session
          if (session.results) {
            for (const r of session.results) {
              this.addResult(r);
            }
          }

          this.updateStats();

          // Auto-resume after a short delay to let the page finish loading
          setTimeout(() => this.resume(session), 2000);
        }
      } catch (e) {
        console.error("[Fuzzer] checkForCrash error:", e);
      }
    },

    async resume(session) {
      // Rebuild the same config and continue from where we left off
      const { strategy, interfaceFqn, methodName, iterations, concurrency: rawConcurrency, delay, callIndex } =
        session.config;
      const concurrency = Math.max(1, rawConcurrency || 1);

      this.running = true;
      this.aborted = false;
      this._objectCache = {};

      document.getElementById("fuzzer-start-btn").disabled = true;
      document.getElementById("fuzzer-stop-btn").disabled = false;
      document.getElementById("fuzzer-progress-card").style.display = "block";

      const indicator = document.getElementById("fuzzer-running-indicator");
      if (indicator) {
        indicator.innerHTML = safe(
          '<span class="pulse-dot"></span><span>Resuming...</span>',
        );
      }

      // Rebuild target list, ordered by category for smart fuzzing:
      // 1. direct interfaces first (most likely to bind successfully)
      // 2. associated interfaces (require master handle + discoveredId)
      // 3. internal interfaces last (may not bind without chaining)
      let targets = [];
      if (strategy === "selected_method") {
        targets = [{ interface: interfaceFqn, method: methodName }];
      } else if (strategy === "all_methods") {
        const iface = (global.MojoGUI_State || {}).interfaces.find(
          (i) => i.module + "." + i.name === interfaceFqn,
        );
        if (iface && iface.methods) {
          targets = iface.methods.map((m) => ({
            interface: interfaceFqn,
            method: typeof m === "string" ? m : m.name,
          }));
        }
      } else if (strategy === "all_interfaces") {
        const interfaces = (global.MojoGUI_State || {}).interfaces || [];
        const order = { direct: 0, associated: 1, internal: 2 };
        const sorted = [...interfaces].sort((a, b) => {
          const ca = order[a.metadata?.category] ?? 2;
          const cb = order[b.metadata?.category] ?? 2;
          return ca - cb;
        });
        for (const iface of sorted) {
          if (!iface.methods) continue;
          const fqn = iface.module + "." + iface.name;
          for (const m of iface.methods) {
            targets.push({
              interface: fqn,
              method: typeof m === "string" ? m : m.name,
            });
          }
        }
      }

      if (targets.length === 0) {
        this.stop();
        return;
      }

      this.stats.startTime = Date.now();
      this._lastSuccessParams = null;
      const outerIterations = strategy === "all_interfaces" ? 1 : iterations;
      const totalCalls = outerIterations * targets.length;
      let currentCallIndex = callIndex || 0;

      try {
        // Build a flat work queue of all calls to make
        const queue = [];
        for (let i = 0; i < outerIterations; i++) {
          // Sequence fuzzing: shuffle copy for some iterations
          const iterTargets = i > 0 && i % 5 === 0 && strategy !== "selected_method"
            ? [...targets].sort(() => Math.random() - 0.5)
            : targets;
          for (const target of iterTargets) {
            queue.push(target);
          }
        }

        // Process queue in concurrent batches
        let qi = callIndex || 0;
        while (qi < queue.length && !this.aborted) {
          const batchEnd = Math.min(qi + concurrency, queue.length);
          const batch = [];

          for (let b = qi; b < batchEnd; b++) {
            const target = queue[b];
            const targetKey = target.interface + "." + target.method;
            if (this._crashedTargets.has(targetKey)) continue;

            batch.push(
              this.fuzzMethod(target.interface, target.method, b),
            );
          }

          if (batch.length > 0) {
            await Promise.allSettled(batch);
          }

          currentCallIndex = batchEnd;

          // Update progress
          const pct = Math.floor((currentCallIndex / totalCalls) * 100);
          const progressBar = document.getElementById("fuzzer-progress-bar");
          const progressText = document.getElementById("fuzzer-progress-text");
          if (progressBar) progressBar.style.width = pct + "%";
          if (progressText)
            progressText.textContent = `${currentCallIndex} / ${totalCalls}`;

          this.persistSession(
            strategy,
            interfaceFqn,
            methodName,
            iterations,
            delay,
            currentCallIndex,
            concurrency,
          );

          // Repeat-after-success on the last target in the batch
          if (this._lastSuccessParams && !this.aborted) {
            await this._repeatMutated(
              { interface: this._lastSuccessParams.interface, method: this._lastSuccessParams.method },
              currentCallIndex,
            );
            this._lastSuccessParams = null;
          }

          qi = batchEnd;

          if (delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } catch (e) {
        console.error("[Fuzzer] Unexpected engine error:", e);
      }

      this.clearSession();
      this.stop();

      const skipped = this._crashedTargets.size;
      global.showToast(
        `Fuzzing complete: ${this.stats.calls} calls, ${this.stats.errors} errors, ${this.stats.crashes} crashes` +
          (skipped > 0 ? ` (${skipped} crashers skipped)` : ""),
        this.stats.crashes > 0 ? "warning" : "success",
      );
    },

    _shuffleInPlace(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },

    /** After a successful call, re-send 2 mutated variants of the same params */
    async _repeatMutated(target, iteration) {
      const saved = this._lastSuccessParams;
      if (!saved || !saved.params) return;

      for (let r = 0; r < 2 && !this.aborted; r++) {
        const mutated = Object.assign({}, saved.params);
        const keys = Object.keys(mutated).filter((k) => k !== "__technique");
        if (keys.length === 0) break;

        // Pick a random key and mutate it
        const mutKey = FuzzGenerators._pick(keys);
        const val = mutated[mutKey];
        if (typeof val === "string") {
          mutated[mutKey] = FuzzGenerators.string();
        } else if (typeof val === "number") {
          mutated[mutKey] = FuzzGenerators.number();
        } else if (typeof val === "boolean") {
          mutated[mutKey] = !val;
        } else {
          mutated[mutKey] = null;
        }

        try {
          const resolved = this.resolveTarget(target.interface);
          if (resolved.skip) continue;
          this.persistInflight(target.interface, target.method, mutated);
          const result = await MojoExecutionService.call(
            resolved.target,
            target.method,
            mutated,
            resolved.options,
          );
          this.clearInflight();
          this.stats.calls++;
          this.stats.successes++;
          this.addResult({
            index: iteration + 0.1 * (r + 1),
            interface: target.interface,
            method: target.method,
            params: mutated,
            status: "success",
            result,
            error: null,
            timestamp: Date.now(),
          });
        } catch (e) {
          this.clearInflight();
          this.stats.calls++;
          this.stats.errors++;
          this.addResult({
            index: iteration + 0.1 * (r + 1),
            interface: target.interface,
            method: target.method,
            params: mutated,
            status: "error",
            result: null,
            error: e.message || String(e),
            timestamp: Date.now(),
          });
        }
        this.updateStats();
      }
    },

    persistInflight(interfaceFqn, methodName, params) {
      try {
        // Store the current call AND recent history for crash correlation
        localStorage.setItem(
          this.INFLIGHT_KEY,
          JSON.stringify({
            interface: interfaceFqn,
            method: methodName,
            params: FeedbackEngine._cloneParams(params),
            recentCalls: FeedbackEngine.getCallHistory().slice(-5),
            timestamp: Date.now(),
          }),
        );
      } catch (e) {
        // Best-effort persistence
      }
    },

    clearInflight() {
      try {
        localStorage.removeItem(this.INFLIGHT_KEY);
      } catch (e) {
        // ignore
      }
    },

    persistSession(strategy, interfaceFqn, methodName, iterations, delay, callIndex, concurrency) {
      try {
        localStorage.setItem(
          this.SESSION_KEY,
          JSON.stringify({
            config: { strategy, interfaceFqn, methodName, iterations, concurrency, delay, callIndex },
            stats: { ...this.stats },
            crashedTargets: Array.from(this._crashedTargets),
            uniqueErrors: Array.from(this.uniqueErrors.entries()),
            results: this.results.slice(-50), // Keep last 50 results to limit storage
          }),
        );
      } catch (e) {
        // Best-effort persistence
      }
    },

    clearSession() {
      try {
        localStorage.removeItem(this.SESSION_KEY);
        localStorage.removeItem(this.INFLIGHT_KEY);
      } catch (e) {
        // ignore
      }
    },

    renderUI() {
      const container = document.querySelector(".fuzzer-container");
      if (!container) return;

      container.innerHTML = safe(
        `
        <div class="fuzzer-card">
          <h4 style="color: var(--accent-primary);">Fuzzer Configuration</h4>
          <div class="fuzzer-controls">
            <label>Interface</label>
            <div id="fuzzer-interface-display" class="fuzzer-interface-display">
              <span class="fuzzer-iface-name" id="fuzzer-iface-name">No interface selected</span>
              <button class="btn btn-secondary btn-small" id="fuzzer-pick-iface-btn" style="margin-left: auto; font-size: 0.7rem; padding: 2px 8px;">Pick</button>
            </div>

            <label>Method</label>
            <select id="fuzzer-method-select" disabled>
              <option value="" disabled selected>Select interface first...</option>
            </select>

            <label>Strategy</label>
            <select id="fuzzer-strategy-select">
              <option value="selected_method">Selected Method</option>
              <option value="all_methods">All Methods on Interface</option>
              <option value="all_interfaces">All Interfaces</option>
            </select>

            <div style="display: flex; gap: var(--space-sm);">
              <div style="flex: 1;">
                <label>Iterations</label>
                <input type="number" id="fuzzer-iterations" value="100" min="1" max="100000">
              </div>
              <div style="flex: 1;">
                <label>Concurrency</label>
                <input type="number" id="fuzzer-concurrency" value="8" min="1" max="50">
              </div>
              <div style="flex: 1;">
                <label>Delay (ms)</label>
                <input type="number" id="fuzzer-delay" value="0" min="0" max="10000">
              </div>
            </div>
          </div>

          <div class="fuzzer-btn-row">
            <button class="btn btn-primary btn-small" id="fuzzer-start-btn" disabled>
              Start Fuzzing
            </button>
            <button class="btn btn-secondary btn-small" id="fuzzer-stop-btn" disabled>
              Stop
            </button>
          </div>
          <div class="fuzzer-btn-row" style="margin-top: 4px;">
            <button class="btn btn-secondary btn-small" id="fuzzer-race-btn" disabled title="Fire N concurrent identical calls to test for race conditions (TOCTOU bugs)">
              Race Test
            </button>
            <button class="btn btn-secondary btn-small" id="fuzzer-sequence-btn" disabled title="Call all methods in sequence to test state-dependent bugs">
              Sequence Fuzz
            </button>
          </div>
        </div>

        <div class="fuzzer-card" id="fuzzer-progress-card" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="fuzzer-running-indicator" id="fuzzer-running-indicator">
              <span class="pulse-dot"></span>
              <span>Fuzzing...</span>
            </div>
            <span id="fuzzer-progress-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">0 / 0</span>
          </div>
          <div class="fuzzer-progress">
            <div class="fuzzer-progress-bar" id="fuzzer-progress-bar" style="width: 0%;"></div>
          </div>
        </div>

        <div class="fuzzer-card">
          <h4>Live Stats</h4>
          <div class="fuzzer-stats">
            <div class="fuzzer-stat">
              <div class="fuzzer-stat-value" id="fuzzer-stat-calls">0</div>
              <div class="fuzzer-stat-label">Calls</div>
            </div>
            <div class="fuzzer-stat stat-success">
              <div class="fuzzer-stat-value" id="fuzzer-stat-success">0</div>
              <div class="fuzzer-stat-label">Success</div>
            </div>
            <div class="fuzzer-stat stat-error">
              <div class="fuzzer-stat-value" id="fuzzer-stat-errors">0</div>
              <div class="fuzzer-stat-label">Errors</div>
            </div>
            <div class="fuzzer-stat stat-crash">
              <div class="fuzzer-stat-value" id="fuzzer-stat-crashes">0</div>
              <div class="fuzzer-stat-label">Crashes</div>
            </div>
            <div class="fuzzer-stat stat-slow">
              <div class="fuzzer-stat-value" id="fuzzer-stat-slow">0</div>
              <div class="fuzzer-stat-label">Slow</div>
            </div>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Rate: <span id="fuzzer-stat-rate">0</span> calls/sec
            | Unique Errors: <span id="fuzzer-stat-unique">0</span>
            | Avg: <span id="fuzzer-stat-avg-time">0</span>ms
          </div>
        </div>

        <div class="fuzzer-card" id="fuzzer-errors-card" style="display: none;">
          <h4>Unique Errors</h4>
          <div class="fuzzer-errors-list" id="fuzzer-errors-list"></div>
        </div>

        <div class="fuzzer-card" style="flex: 1; min-height: 0;">
          <h4>
            Results Log
            <button class="btn btn-secondary btn-small" id="fuzzer-export-btn" style="margin-left: auto; font-size: 0.7rem; padding: 2px 8px;">Export JSON</button>
            <button class="btn btn-secondary btn-small" id="fuzzer-clear-btn" style="font-size: 0.7rem; padding: 2px 8px;">Clear</button>
          </h4>
          <div class="fuzzer-results" id="fuzzer-results-log">
            <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px;">
              Configure and start fuzzing to see results
            </div>
          </div>
        </div>
      `,
      );

      this.syncSelectedInterface();
      this.bindEvents();
    },

    bindEvents() {
      const container = document.querySelector(".fuzzer-container");
      if (!container) return;

      const pickBtn = container.querySelector("#fuzzer-pick-iface-btn");
      if (pickBtn) {
        pickBtn.addEventListener("click", () => {
          // Switch to the Interfaces tab so the user can pick one
          const tab = document.querySelector('[data-tab="interfaces"]');
          if (tab) tab.click();
        });
      }

      const methodSelect = container.querySelector("#fuzzer-method-select");
      if (methodSelect) {
        methodSelect.addEventListener("change", () =>
          this.updateStartButton(),
        );
      }

      const strategySelect = container.querySelector(
        "#fuzzer-strategy-select",
      );
      if (strategySelect) {
        strategySelect.addEventListener("change", () =>
          this.updateStartButton(),
        );
      }

      const startBtn = container.querySelector("#fuzzer-start-btn");
      if (startBtn) {
        startBtn.addEventListener("click", () => this.start());
      }

      const stopBtn = container.querySelector("#fuzzer-stop-btn");
      if (stopBtn) {
        stopBtn.addEventListener("click", () => this.stop());
      }

      const exportBtn = container.querySelector("#fuzzer-export-btn");
      if (exportBtn) {
        exportBtn.addEventListener("click", () => this.exportResults());
      }

      const clearBtn = container.querySelector("#fuzzer-clear-btn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => this.clearResults());
      }

      const raceBtn = container.querySelector("#fuzzer-race-btn");
      if (raceBtn) {
        raceBtn.addEventListener("click", () => {
          const selIface = (global.MojoGUI_State || {}).selectedInterface;
          if (!selIface) return global.showToast("Select an interface first", "warning");
          const methodSelect = document.getElementById("fuzzer-method-select");
          const method = methodSelect?.value;
          if (!method) return global.showToast("Select a method first", "warning");
          const fqn = selIface.module + "." + selIface.name;
          const concurrency = parseInt(document.getElementById("fuzzer-concurrency")?.value) || 10;
          this.raceTest(fqn, method, concurrency);
        });
      }

      const seqBtn = container.querySelector("#fuzzer-sequence-btn");
      if (seqBtn) {
        seqBtn.addEventListener("click", () => {
          const selIface = (global.MojoGUI_State || {}).selectedInterface;
          if (!selIface) return global.showToast("Select an interface first", "warning");
          if (!selIface.methods || selIface.methods.length < 2) {
            return global.showToast("Interface needs at least 2 methods for sequence fuzz", "warning");
          }
          const fqn = selIface.module + "." + selIface.name;
          const methods = selIface.methods.map(m => typeof m === "string" ? m : m.name);
          const iterations = parseInt(document.getElementById("fuzzer-iterations")?.value) || 10;
          this.sequenceFuzz(fqn, methods, iterations);
        });
      }

      const resultsLog = container.querySelector("#fuzzer-results-log");
      if (resultsLog) {
        resultsLog.addEventListener("click", (e) => {
          const replayBtn = e.target.closest("[data-action='replay']");
          if (replayBtn) {
            e.stopPropagation();
            const index = parseInt(replayBtn.dataset.index);
            this.replayCase(index);
            return;
          }

          const entry = e.target.closest(".fuzzer-result-entry");
          if (entry) {
            const index = parseInt(entry.dataset.index);
            this.toggleResultDetail(index, entry);
          }
        });
      }
    },

    syncSelectedInterface() {
      const nameEl = document.getElementById("fuzzer-iface-name");
      if (!nameEl) return;

      const iface = (global.MojoGUI_State || {}).selectedInterface;
      if (iface) {
        const categoryTag = { direct: "[D]", associated: "[A]", internal: "[I]" };
        const tag = categoryTag[iface.metadata?.category] || "[I]";
        const fqn = iface.module + "." + iface.name;
        nameEl.textContent = tag + " " + fqn;
        nameEl.classList.add("has-selection");
        this.populateMethods(fqn);
      } else {
        nameEl.textContent = "No interface selected";
        nameEl.classList.remove("has-selection");
        const methodSelect = document.getElementById("fuzzer-method-select");
        if (methodSelect) {
          methodSelect.disabled = true;
          methodSelect.innerHTML = safe(
            '<option value="" disabled selected>Select interface first...</option>',
          );
        }
      }
      this.updateStartButton();
    },

    // Keep old name as alias for callers in app.js
    populateInterfaces() {
      this.syncSelectedInterface();
    },

    /**
     * Pre-populate fuzzer with a target from Awards or external caller.
     * Selects the interface and optionally the method in the dropdowns.
     */
    preloadTarget(interfaceName, methodName) {
      if (!interfaceName) return;
      const interfaces = (global.MojoGUI_State || {}).interfaces || [];
      const q = interfaceName.toLowerCase();
      const match = interfaces.find((i) => i.name.toLowerCase() === q) ||
        interfaces.find((i) => (i.module + "." + i.name).toLowerCase().includes(q));
      if (match) {
        // Select the interface in the main app (which triggers syncSelectedInterface)
        const internal = global.__MojoGUI_Internal;
        if (internal && internal.selectInterface) {
          internal.selectInterface(match.name, match.module);
        }
        // After methods load, select the target method
        if (methodName) {
          const trySelectMethod = (attempts) => {
            const select = document.getElementById("fuzzer-method-select");
            if (!select || select.disabled) {
              if (attempts > 0) setTimeout(() => trySelectMethod(attempts - 1), 200);
              return;
            }
            for (const opt of select.options) {
              if (opt.value.toLowerCase() === methodName.toLowerCase()) {
                select.value = opt.value;
                this.updateStartButton();
                return;
              }
            }
          };
          setTimeout(() => trySelectMethod(10), 300);
        }
      }
    },

    async populateMethods(interfaceFqn) {
      const select = document.getElementById("fuzzer-method-select");
      if (!select) return;

      select.disabled = true;
      select.innerHTML = safe(
        '<option value="" disabled selected>Loading...</option>',
      );

      try {
        await MojoLoader.ensureBinding(interfaceFqn);

        const iface = (global.MojoGUI_State || {}).interfaces.find(
          (i) =>
            i.module + "." + i.name === interfaceFqn ||
            i.name === interfaceFqn,
        );

        if (iface && iface.methods) {
          const options = iface.methods
            .map((m) => {
              const name = typeof m === "string" ? m : m.name;
              return `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`;
            })
            .join("");

          select.innerHTML = safe(
            '<option value="" disabled selected>Select a method...</option>' +
              options,
          );
          select.disabled = false;
        }
      } catch (e) {
        select.innerHTML = safe(
          '<option value="" disabled selected>Failed to load binding</option>',
        );
        console.error("[Fuzzer] Failed to load binding:", e);
      }
    },

    updateStartButton() {
      const strategySelect = document.getElementById(
        "fuzzer-strategy-select",
      );
      const methodSelect = document.getElementById("fuzzer-method-select");
      const startBtn = document.getElementById("fuzzer-start-btn");
      if (!startBtn) return;

      const strategy = strategySelect?.value;
      const hasInterface = !!(global.MojoGUI_State || {}).selectedInterface;
      const hasMethod = !!methodSelect?.value;

      let enabled = false;
      if (strategy === "all_interfaces") enabled = true;
      else if (strategy === "all_methods") enabled = hasInterface;
      else if (strategy === "selected_method")
        enabled = hasInterface && hasMethod;

      startBtn.disabled =
        !enabled ||
        !(global.MojoGUI_State || {}).mojoAvailable ||
        this.running;

      // Enable race/sequence buttons when interface + method are selected
      const mojoAvailable = !!(global.MojoGUI_State || {}).mojoAvailable;
      const raceBtn = document.getElementById("fuzzer-race-btn");
      const seqBtn = document.getElementById("fuzzer-sequence-btn");
      if (raceBtn) raceBtn.disabled = !(hasInterface && hasMethod && mojoAvailable && !this.running);
      if (seqBtn) seqBtn.disabled = !(hasInterface && mojoAvailable && !this.running);
    },

    async start() {
      if (this.running) return;

      const strategySelect = document.getElementById(
        "fuzzer-strategy-select",
      );
      const methodSelect = document.getElementById("fuzzer-method-select");
      const iterationsInput = document.getElementById("fuzzer-iterations");
      const concurrencyInput = document.getElementById("fuzzer-concurrency");
      const delayInput = document.getElementById("fuzzer-delay");

      const strategy = strategySelect.value;
      const selIface = (global.MojoGUI_State || {}).selectedInterface;
      const interfaceFqn = selIface ? selIface.module + "." + selIface.name : "";
      const methodName = methodSelect.value;
      const iterations = parseInt(iterationsInput.value) || 100;
      const concurrency = Math.max(1, Math.min(50, parseInt(concurrencyInput.value) || 8));
      const delay = parseInt(delayInput.value) || 0;

      if (strategy === "selected_method" && (!interfaceFqn || !methodName)) {
        global.showToast("Select an interface and method", "warning");
        return;
      }
      if (strategy === "all_methods" && !interfaceFqn) {
        global.showToast("Select an interface", "warning");
        return;
      }

      this.running = true;
      this.aborted = false;
      this._objectCache = {};
      this._crashedTargets = new Set();
      this.resetStats();

      // Delegate to the shared run loop
      await this.resume({
        config: { strategy, interfaceFqn, methodName, iterations, concurrency, delay, callIndex: 0 },
      });
    },

    stop(keepSession) {
      this.aborted = true;
      this.running = false;

      // Only clear session if user explicitly stopped (not if we're about to resume)
      if (!keepSession) {
        this.clearSession();
      }

      const startBtn = document.getElementById("fuzzer-start-btn");
      const stopBtn = document.getElementById("fuzzer-stop-btn");
      if (startBtn) startBtn.disabled = false;
      if (stopBtn) stopBtn.disabled = true;

      const indicator = document.getElementById("fuzzer-running-indicator");
      if (indicator) {
        indicator.innerHTML = safe(
          '<span style="color: var(--text-muted);">Stopped</span>',
        );
      }

      this.updateStartButton();
    },

    /**
     * Resolve the interface metadata to determine how to bind it.
     * Returns { category, target, options } for MojoExecutionService.call().
     */
    resolveTarget(interfaceFqn) {
      const iface = ((global.MojoGUI_State || {}).interfaces || []).find(
        (i) =>
          i.module + "." + i.name === interfaceFqn ||
          i.name === interfaceFqn,
      );
      const meta = iface?.metadata;
      const category = meta?.category || "internal";

      // Check cache first
      if (this._objectCache[interfaceFqn]) {
        return {
          category,
          target: {
            objectId: this._objectCache[interfaceFqn],
            interface: interfaceFqn,
          },
          options: {},
        };
      }

      if (category === "associated") {
        const interfaceId = meta?.discoveredId;
        if (interfaceId === undefined || interfaceId === null) {
          return { category, target: null, skip: "no discoveredId assigned (use assignInterfaceIds)" };
        }
        // Find any available master handle from the registry
        const masterHandleId = this.findMasterHandle();
        if (!masterHandleId) {
          return { category, target: null, skip: "no master handle in registry" };
        }
        return {
          category,
          target: { interface: interfaceFqn, masterHandleId },
          options: { isAssociated: true, interfaceId },
        };
      }

      // "direct" and "internal" both use standard Mojo.bindInterface
      // direct interfaces reliably bind; internal ones may or may not work
      return {
        category,
        target: { interface: interfaceFqn },
        options: {},
      };
    },

    /**
     * Find the first available master handle from the HandleRegistry.
     * Master handles are raw message pipe handles used for associated interfaces.
     */
    findMasterHandle() {
      if (typeof MojoHandleRegistry === "undefined") return null;
      const ids = MojoHandleRegistry.list();
      return ids.length > 0 ? ids[0] : null;
    },

    async fuzzMethod(interfaceFqn, methodName, iteration) {
      let params = {};
      let status = "success";
      let resultData = null;
      let errorMsg = null;
      this._currentInterface = interfaceFqn;

      try {
        await MojoLoader.ensureBinding(interfaceFqn);

        const methodDef = MojoReflectionService.findMethodDefinition(
          interfaceFqn,
          methodName,
        );

        if (methodDef && methodDef.parameters && methodDef.parameters.length > 0) {
          // Cycle through fuzzing techniques each iteration
          const techniqueName = TECHNIQUE_NAMES[iteration % TECHNIQUE_NAMES.length];
          const technique = FuzzTechniques[techniqueName];
          params = technique(methodDef, iteration);
          params.__technique = techniqueName;
        }

        const resolved = this.resolveTarget(interfaceFqn);

        if (resolved.skip) {
          // Can't fuzz this interface right now, log as skip
          status = "error";
          errorMsg = `Skipped (${resolved.category}): ${resolved.skip}`;
          this.stats.errors++;

          this.addResult({
            index: iteration,
            interface: interfaceFqn,
            method: methodName,
            params,
            status,
            result: null,
            error: errorMsg,
            timestamp: Date.now(),
          });
          this.updateStats();
          return;
        }

        // Persist before call so we can detect crashes on page reload
        this.persistInflight(interfaceFqn, methodName, params);

        // Strip internal metadata before sending over IPC
        const callParams = Object.assign({}, params);
        delete callParams.__technique;

        const callStartTime = performance.now();
        const callPromise = MojoExecutionService.call(
          resolved.target,
          methodName,
          callParams,
          resolved.options,
        );
        const CALL_TIMEOUT_MS = 30000; // 30s hard timeout for hang detection
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(
            `TIMEOUT after ${CALL_TIMEOUT_MS / 1000}s — possible hang/DoS vector`
          )), CALL_TIMEOUT_MS),
        );
        const result = await Promise.race([callPromise, timeoutPromise]);
        const callDuration = performance.now() - callStartTime;

        this.clearInflight();

        resultData = result;
        status = "success";
        this.stats.successes++;

        // Track response time for anomaly detection
        this._responseTimes.push(callDuration);
        if (callDuration > this.SLOW_CALL_THRESHOLD_MS) {
          this.stats.slowCalls++;
          const slowKey = `${interfaceFqn}.${methodName}: SLOW (${Math.round(callDuration)}ms)`;
          const existing = this.uniqueErrors.get(slowKey);
          if (existing) {
            existing.count++;
          } else {
            this.uniqueErrors.set(slowKey, {
              count: 1,
              firstParams: params,
              firstMethod: methodName,
              firstInterface: interfaceFqn,
              error: `Response took ${Math.round(callDuration)}ms (potential DoS vector)`,
            });
          }
        }

        // Track successful params for repeat-after-success mutations
        this._lastSuccessParams = {
          interface: interfaceFqn,
          method: methodName,
          params: Object.assign({}, params),
        };

        if (result && result.objectId) {
          this._objectCache[interfaceFqn] = result.objectId;
        }
      } catch (e) {
        this.clearInflight();
        errorMsg = e.message || String(e);

        status = "error";
        this.stats.errors++;

        const errorKey = `${interfaceFqn}.${methodName}: ${errorMsg.substring(0, 200)}`;
        const existing = this.uniqueErrors.get(errorKey);
        if (existing) {
          existing.count++;
        } else {
          this.uniqueErrors.set(errorKey, {
            count: 1,
            firstParams: params,
            firstMethod: methodName,
            firstInterface: interfaceFqn,
            error: errorMsg,
          });
        }
      }

      this.stats.calls++;

      // Feed results to the feedback engine for learning
      const callDurationMs = this._responseTimes.length > 0
        ? Math.round(this._responseTimes[this._responseTimes.length - 1]) : null;
      FeedbackEngine.recordCall(
        interfaceFqn, methodName, params, status, resultData, errorMsg, callDurationMs,
      );

      this.addResult({
        index: iteration,
        interface: interfaceFqn,
        method: methodName,
        params,
        status,
        result: resultData,
        error: errorMsg,
        durationMs: callDurationMs,
        timestamp: Date.now(),
      });

      this.updateStats();
    },

    addResult(entry) {
      this.results.push(entry);

      const log = document.getElementById("fuzzer-results-log");
      if (!log) return;

      if (this.results.length === 1) {
        log.innerHTML = safe("");
      }

      const statusClass =
        entry.status === "success"
          ? "result-success"
          : entry.status === "crash"
            ? "result-crash"
            : "result-error";

      const statusLabel =
        entry.status === "success"
          ? "OK"
          : entry.status === "crash"
            ? "CRASH"
            : "ERR";

      const shortMethod =
        entry.method.length > 20
          ? entry.method.substring(0, 20) + "..."
          : entry.method;

      const div = document.createElement("div");
      div.className = `fuzzer-result-entry ${statusClass}`;
      div.dataset.index = entry.index;
      const technique = entry.params?.__technique || "";
      const techBadge = technique
        ? `<span class="result-technique" title="${escapeHtml(technique)}">${escapeHtml(technique.substring(0, 3).toUpperCase())}</span>`
        : "";

      const timingBadge = entry.durationMs != null && entry.durationMs > this.SLOW_CALL_THRESHOLD_MS
        ? `<span class="result-technique" title="Slow response: ${entry.durationMs}ms" style="color: var(--error-color);">${entry.durationMs}ms</span>`
        : (entry.durationMs != null ? `<span class="result-technique" title="Response time">${entry.durationMs}ms</span>` : "");

      div.innerHTML = safe(
        `<span class="result-index">#${entry.index}</span>` +
          techBadge +
          `<span class="result-method" title="${escapeHtml(entry.interface + "." + entry.method)}">${escapeHtml(shortMethod)}</span>` +
          timingBadge +
          `<span class="result-status">${statusLabel}</span>`,
      );

      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    },

    toggleResultDetail(index, entryElement) {
      const existing = entryElement.nextElementSibling;
      if (
        existing &&
        existing.classList.contains("fuzzer-result-detail")
      ) {
        existing.remove();
        return;
      }

      const entry = this.results.find((r) => r.index === index);
      if (!entry) return;

      const detail = document.createElement("div");
      detail.className = "fuzzer-result-detail";

      let detailText = `Interface: ${entry.interface}\n`;
      detailText += `Method: ${entry.method}\n`;
      detailText += `Status: ${entry.status}\n`;
      detailText += `Params: ${MojoUtils.safeStringify(entry.params, 2)}\n`;

      if (entry.error) {
        detailText += `Error: ${entry.error}\n`;
      }
      if (entry.result) {
        detailText += `Result: ${MojoUtils.safeStringify(entry.result, 2)}\n`;
      }

      detail.textContent = detailText;

      const replayBtn = document.createElement("button");
      replayBtn.className = "btn btn-secondary btn-small";
      replayBtn.style.cssText =
        "margin-top: 6px; font-size: 0.7rem;";
      replayBtn.dataset.action = "replay";
      replayBtn.dataset.index = index;
      replayBtn.textContent = "Replay This Case";
      detail.appendChild(replayBtn);

      entryElement.after(detail);
    },

    updateStats() {
      const el = (id) => document.getElementById(id);

      const callsEl = el("fuzzer-stat-calls");
      const successEl = el("fuzzer-stat-success");
      const errorsEl = el("fuzzer-stat-errors");
      const crashesEl = el("fuzzer-stat-crashes");
      const uniqueEl = el("fuzzer-stat-unique");
      const rateEl = el("fuzzer-stat-rate");
      const slowEl = el("fuzzer-stat-slow");
      const avgTimeEl = el("fuzzer-stat-avg-time");

      if (callsEl) callsEl.textContent = this.stats.calls;
      if (successEl) successEl.textContent = this.stats.successes;
      if (errorsEl) errorsEl.textContent = this.stats.errors;
      if (crashesEl) crashesEl.textContent = this.stats.crashes;
      if (uniqueEl) uniqueEl.textContent = this.uniqueErrors.size;
      if (slowEl) slowEl.textContent = this.stats.slowCalls;

      const elapsed = (Date.now() - this.stats.startTime) / 1000;
      const rate = elapsed > 0 ? (this.stats.calls / elapsed).toFixed(1) : "0";
      if (rateEl) rateEl.textContent = rate;

      // Average response time
      if (avgTimeEl && this._responseTimes.length > 0) {
        const avg = this._responseTimes.reduce((a, b) => a + b, 0) / this._responseTimes.length;
        avgTimeEl.textContent = Math.round(avg);
      }

      if (this.uniqueErrors.size > 0) {
        const errorsCard = document.getElementById("fuzzer-errors-card");
        if (errorsCard) errorsCard.style.display = "block";

        const errorsList = document.getElementById("fuzzer-errors-list");
        if (errorsList) {
          let html = "";
          for (const [key, data] of this.uniqueErrors) {
            const shortKey =
              key.length > 80 ? key.substring(0, 80) + "..." : key;
            html +=
              `<div class="fuzzer-error-item">` +
              `<span title="${escapeHtml(key)}">${escapeHtml(shortKey)}</span>` +
              `<span class="fuzzer-error-count">${data.count}x</span>` +
              `</div>`;
          }
          errorsList.innerHTML = safe(html);
        }
      }
    },

    async replayCase(index) {
      const entry = this.results.find((r) => r.index === index);
      if (!entry) return;

      global.showToast(
        `Replaying ${entry.interface}.${entry.method}...`,
        "info",
      );

      try {
        await MojoExecutionService.call(
          { interface: entry.interface },
          entry.method,
          entry.params,
          {},
        );
        global.showToast("Replay succeeded", "success");
      } catch (e) {
        global.showToast("Replay error: " + e.message, "error");
      }
    },

    /**
     * Race condition test: fire N identical calls concurrently to the same method.
     * Useful for finding TOCTOU bugs and race conditions in browser-side handlers.
     * @param {string} interfaceFqn - Fully qualified interface name
     * @param {string} methodName - Method to race
     * @param {number} concurrency - Number of concurrent calls (default 10)
     * @param {Object} params - Optional fixed params (otherwise auto-generated)
     */
    async raceTest(interfaceFqn, methodName, concurrency = 10, params = null) {
      try {
        await MojoLoader.ensureBinding(interfaceFqn);
        const methodDef = MojoReflectionService.findMethodDefinition(interfaceFqn, methodName);

        const callParams = params || (methodDef && methodDef.parameters.length > 0
          ? FuzzTechniques.baseline(methodDef, 0) : {});

        global.showToast(`Race testing ${interfaceFqn}.${methodName} x${concurrency}...`, "info");

        const resolved = this.resolveTarget(interfaceFqn);
        if (resolved.skip) {
          global.showToast(`Cannot race test: ${resolved.skip}`, "warning");
          return { error: resolved.skip };
        }

        const promises = [];
        for (let i = 0; i < concurrency; i++) {
          promises.push(
            MojoExecutionService.call(resolved.target, methodName, callParams, resolved.options)
              .then(r => ({ status: "success", result: r, index: i }))
              .catch(e => ({ status: "error", error: e.message, index: i }))
          );
        }

        const results = await Promise.allSettled(promises);
        const settled = results.map(r => r.value || r.reason);

        const successes = settled.filter(r => r.status === "success").length;
        const errors = settled.filter(r => r.status === "error").length;

        // Log each result
        for (const r of settled) {
          this.addResult({
            index: this.stats.calls + r.index,
            interface: interfaceFqn,
            method: methodName,
            params: { ...callParams, __technique: "race" },
            status: r.status,
            result: r.result || null,
            error: r.error || null,
            timestamp: Date.now(),
          });
        }
        this.stats.calls += concurrency;
        this.stats.successes += successes;
        this.stats.errors += errors;
        this.updateStats();

        global.showToast(
          `Race test done: ${successes} ok, ${errors} errors out of ${concurrency}`,
          errors > 0 ? "warning" : "success"
        );

        return { successes, errors, total: concurrency, results: settled };
      } catch (e) {
        global.showToast(`Race test failed: ${e.message}`, "error");
        return { error: e.message };
      }
    },

    /**
     * Sequence fuzz: call multiple methods on the same interface in a specific order.
     * Tests state-dependent bugs where Method B assumes Method A was called first.
     * @param {string} interfaceFqn - Fully qualified interface name
     * @param {Array<string>} methodSequence - Ordered list of method names to call
     * @param {number} iterations - Number of times to run the sequence
     */
    async sequenceFuzz(interfaceFqn, methodSequence, iterations = 10) {
      if (!methodSequence || methodSequence.length < 2) {
        global.showToast("Sequence fuzz needs at least 2 methods", "warning");
        return;
      }

      try {
        await MojoLoader.ensureBinding(interfaceFqn);

        global.showToast(
          `Sequence fuzzing ${methodSequence.length} methods x${iterations}...`, "info"
        );

        let objectId = null;

        for (let iter = 0; iter < iterations && !this.aborted; iter++) {
          // Optionally shuffle the sequence for some iterations to test order sensitivity
          const sequence = iter > 0 && iter % 3 === 0
            ? [...methodSequence].sort(() => Math.random() - 0.5)
            : methodSequence;

          for (const methodName of sequence) {
            if (this.aborted) break;

            const methodDef = MojoReflectionService.findMethodDefinition(interfaceFqn, methodName);
            const techniqueName = TECHNIQUE_NAMES[this.stats.calls % TECHNIQUE_NAMES.length];
            const technique = FuzzTechniques[techniqueName];
            const params = methodDef && methodDef.parameters.length > 0
              ? technique(methodDef, this.stats.calls)
              : {};

            try {
              const target = objectId
                ? { objectId, interface: interfaceFqn }
                : { interface: interfaceFqn };

              const result = await MojoExecutionService.call(target, methodName, params, {});

              if (result && result.objectId) objectId = result.objectId;

              this.stats.calls++;
              this.stats.successes++;
              this.addResult({
                index: this.stats.calls,
                interface: interfaceFqn,
                method: methodName,
                params: { ...params, __technique: "seq:" + techniqueName },
                status: "success",
                result,
                error: null,
                timestamp: Date.now(),
              });
            } catch (e) {
              this.stats.calls++;
              this.stats.errors++;
              this.addResult({
                index: this.stats.calls,
                interface: interfaceFqn,
                method: methodName,
                params: { ...params, __technique: "seq:" + techniqueName },
                status: "error",
                result: null,
                error: e.message,
                timestamp: Date.now(),
              });
            }
            this.updateStats();
          }
        }

        global.showToast(
          `Sequence fuzz done: ${this.stats.calls} calls, ${this.stats.errors} errors`,
          this.stats.errors > 0 ? "warning" : "success"
        );
      } catch (e) {
        global.showToast(`Sequence fuzz failed: ${e.message}`, "error");
      }
    },

    resetStats() {
      this.stats = {
        calls: 0,
        successes: 0,
        errors: 0,
        crashes: 0,
        slowCalls: 0,
        startTime: 0,
      };
      this.results = [];
      this.uniqueErrors.clear();
      this._responseTimes = [];
      FeedbackEngine.reset();
      this.updateStats();

      const errorsCard = document.getElementById("fuzzer-errors-card");
      if (errorsCard) errorsCard.style.display = "none";
    },

    clearResults() {
      this.results = [];
      const log = document.getElementById("fuzzer-results-log");
      if (log) {
        log.innerHTML = safe(
          '<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px;">Results cleared</div>',
        );
      }
    },

    /**
     * Export all fuzzer results, stats, and unique errors as a downloadable JSON file.
     */
    exportResults() {
      if (this.results.length === 0) {
        global.showToast("No results to export", "warning");
        return;
      }

      const uniqueErrors = [];
      for (const [key, data] of this.uniqueErrors) {
        uniqueErrors.push({ key, ...data });
      }

      // Compute timing statistics for the report
      const timingStats = {};
      if (this._responseTimes.length > 0) {
        const sorted = [...this._responseTimes].sort((a, b) => a - b);
        timingStats.avgMs = Math.round(sorted.reduce((a, b) => a + b, 0) / sorted.length);
        timingStats.medianMs = Math.round(sorted[Math.floor(sorted.length / 2)]);
        timingStats.p95Ms = Math.round(sorted[Math.floor(sorted.length * 0.95)]);
        timingStats.p99Ms = Math.round(sorted[Math.floor(sorted.length * 0.99)]);
        timingStats.maxMs = Math.round(sorted[sorted.length - 1]);
        timingStats.minMs = Math.round(sorted[0]);
        timingStats.slowCallThresholdMs = this.SLOW_CALL_THRESHOLD_MS;
      }

      const report = {
        exported_at: new Date().toISOString(),
        tool: "MojoGUI Fuzzer",
        stats: { ...this.stats },
        timing: timingStats,
        crashedTargets: Array.from(this._crashedTargets),
        uniqueErrorCount: this.uniqueErrors.size,
        uniqueErrors,
        feedback: FeedbackEngine.exportKnowledge(),
        totalResults: this.results.length,
        results: this.results,
      };

      const json = JSON.stringify(report, (key, value) =>
        typeof value === "bigint" ? value.toString() + "n" : value, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `fuzzer_results_${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      global.showToast(`Exported ${this.results.length} results`, "success");
    },
  };

  global.MojoFuzzer = MojoFuzzer;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => MojoFuzzer.init());
  } else {
    MojoFuzzer.init();
  }
})(this);
