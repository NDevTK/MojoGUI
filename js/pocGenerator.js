/**
 * PoCGenerator
 * Generates standalone HTML security PoC files from MojoGUI interface/method data.
 *
 * Downloads a complete bundle containing all required Mojo binding files
 * and initialization scripts inlined in the correct order.
 */
(function (global) {
  "use strict";

  // Init scripts that must be embedded inline (from js/core/)
  const INIT_POLYFILLS_CODE = `
// MojoJS Core Polyfills & Initialization
(function () {
  if (typeof mojo !== "undefined") {
    mojo.internal = mojo.internal || {};
    mojo.internal.interfaceSupport = mojo.internal.interfaceSupport || {};
    mojo.internal.Union = function (objectToBlessAsType, name, fields) {
      const unionSpec = { name, fields };
      objectToBlessAsType.$ = {
        unionSpec: unionSpec,
        encode: function (value, encoder, byteOffset, bitOffset, nullable) {
          encoder.encodeUnion(unionSpec, byteOffset, value);
        },
        decode: function (decoder, byteOffset, bitOffset, nullable) {
          return decoder.decodeUnion(unionSpec, byteOffset);
        },
        computeDimensions: function (value, nullable) {
          return mojo.internal.computeUnionDimensions(unionSpec, nullable, value);
        },
        arrayElementSize: (nullable) => (nullable ? 8 : 16),
        encodeNull: function (encoder, byteOffset) {},
        isValidObjectKeyType: false,
      };
    };
  }
})();
`;

  const INIT_ALIASING_CODE = `
// MojoJS Post-Load Aliasing
(function () {
  if (typeof mojo !== "undefined") {
    const b = mojo.internal.bindings && mojo.internal.bindings.mojo;

    // Pipe Control
    if (b && b.pipe_control) {
      mojo.pipeControl = b.pipe_control;
      mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID =
        b.pipe_control.kRunOrClosePipeMessageId || 0xfffffffe;
    } else {
      mojo.pipeControl = mojo.pipeControl || {
        RUN_OR_CLOSE_PIPE_MESSAGE_ID: 0xfffffffe,
      };
    }

    // Interface Control
    if (b && b.interface_control) {
      mojo.interfaceControl = b.interface_control;
      mojo.interfaceControl.RUN_MESSAGE_ID =
        b.interface_control.kRunMessageId || 0xffffffff;
      mojo.interfaceControl.RUN_OUTPUT_MESSAGE_ID =
        b.interface_control.kRunMessageId || 0xffffffff;
    } else {
      mojo.interfaceControl = mojo.interfaceControl || {
        RUN_MESSAGE_ID: 0xffffffff,
        RUN_OUTPUT_MESSAGE_ID: 0xffffffff,
      };
    }
  }
})();
`;

  const PoCGenerator = {
    /**
     * Generate and download a complete standalone PoC bundle.
     * @param {Object} iface - Interface metadata { name, module, file }
     * @param {string} methodName - Method name to call
     * @param {Object} paramValues - Parameter values from form
     * @param {Object} methodDef - Method definition from ReflectionService
     */
    async downloadBundle(iface, methodName, paramValues, methodDef) {
      const rawScope = iface.metadata?.scope || "context";
      // Ensure scope is safe (alphanumeric check)
      const scope = rawScope.replace(/[^a-zA-Z0-9_]/g, "");

      // Resolve all required binding files
      const bindingFiles = await this._resolveBindingFiles(iface.file);

      // Collect all file contents
      const fileContents = await this._fetchBindingContents(bindingFiles);

      // Generate the helpers.js from actual MojoUtils functions (DRY)
      const helpersJs = this._extractHelpers(methodDef);

      // Generate the standalone HTML with correct script order
      const pocHtml = this._generateStandaloneHTML(
        iface,
        methodName,
        paramValues,
        methodDef,
        scope,
        fileContents,
        helpersJs,
      );

      // Download the bundled HTML
      const blob = new Blob([pocHtml], { type: "text/html" });
      this._downloadBlob(
        blob,
        `poc_${iface.name}_${methodName}_standalone.html`,
      );
    },

    /**
     * Resolve all binding files needed for an interface, including dependencies.
     * Returns files in correct load order.
     */
    async _resolveBindingFiles(mainFile) {
      // Core files must be in exact order
      const orderedFiles = [
        "mojo_bindings.js",
        "bindings_lite.js",
        // init_polyfills goes here (inline)
        "mojo_public_interfaces_bindings_pipe_control_messages.mojom.js",
        "mojo_public_interfaces_bindings_interface_control_messages.mojom.js",
        // init_aliasing goes here (inline)
        "interface_support.js",
      ];

      const files = new Set(orderedFiles);

      // Resolve interface-specific dependencies
      await this._resolveImports(mainFile, files);

      // Return ordered: core files first, then dependencies
      return orderedFiles.concat(
        Array.from(files).filter((f) => !orderedFiles.includes(f)),
      );
    },

    /**
     * Recursively resolve imports for a binding file.
     */
    async _resolveImports(filename, files) {
      if (files.has(filename)) return;
      files.add(filename);

      // Get file metadata from MojoLoader
      const index = await MojoLoader.loadIndex();
      const fileEntry = index.files.find((f) => f.filename === filename);

      if (fileEntry && fileEntry.imports && fileEntry.imports.length > 0) {
        for (const importPath of fileEntry.imports) {
          const importFile = index.files.find((f) => {
            if (!f.source) return false;
            const normalized = f.source.replace(/\\/g, "/").toLowerCase();
            const importNormalized = importPath
              .replace(/\\/g, "/")
              .toLowerCase();
            return (
              normalized === importNormalized ||
              normalized.endsWith(importNormalized)
            );
          });

          if (importFile) {
            await this._resolveImports(importFile.filename, files);
          }
        }
      }
    },

    /**
     * Fetch contents of all binding files.
     */
    async _fetchBindingContents(filenames) {
      const contents = {};
      for (const filename of filenames) {
        try {
          const response = await fetch(`bindings/${filename}`);
          if (response.ok) {
            contents[filename] = await response.text();
          } else {
            console.warn(`Failed to fetch ${filename}: ${response.status}`);
            contents[filename] = `// Failed to load: ${filename}`;
          }
        } catch (e) {
          console.warn(`Error fetching ${filename}:`, e);
          contents[filename] = `// Error loading: ${filename}`;
        }
      }
      return contents;
    },

    /**
     * Extract helper functions directly from MojoUtils (DRY - no duplication).
     */
    _extractHelpers(methodDef) {
      const helpers = [];

      helpers.push(
        "// Helpers extracted directly from MojoUtils (DRY with MojoGUI)",
      );
      helpers.push("");

      // Extract the actual function source code
      if (typeof MojoUtils !== "undefined") {
        if (typeof MojoUtils.decodeBigString === "function") {
          helpers.push("// BigString/BigString16 decoder");
          helpers.push(
            `const decodeBigString = ${MojoUtils.decodeBigString.toString()};`,
          );
          helpers.push("");
        }
        if (typeof MojoUtils.inflateString16 === "function") {
          helpers.push("// String16 inflater");
          helpers.push(
            `const inflateString16 = ${MojoUtils.inflateString16.toString()};`,
          );
          helpers.push("");
        }
        if (typeof MojoUtils.inflateBigString === "function") {
          helpers.push("// BigString inflater");
          helpers.push(
            `const inflateBigString = ${MojoUtils.inflateBigString.toString()};`,
          );
          helpers.push("");
        }
      }

      helpers.push(`
// Convenience wrapper for BigString16 decoding
function decodeBigString16(value) {
  return decodeBigString(value, true);
}
`);

      return helpers.join("\n");
    },

    /**
     * Generate enum definitions for parameters.
     */
    _generateEnumDefinitions(methodDef, paramValues) {
      const enums = [];
      const seen = new Set();

      const processParam = (param) => {
        if (!param) return;
        const enumOpts = param.type?.options;
        if (enumOpts && typeof enumOpts === "object") {
          const enumName = this._inferEnumName(param);
          if (enumName && !seen.has(enumName)) {
            seen.add(enumName);
            const entries = Object.entries(enumOpts)
              .filter(
                ([k]) =>
                  !k.startsWith("MIN_") &&
                  !k.startsWith("MAX_") &&
                  k !== "isKnownEnumValue",
              )
              .map(([k, v]) => `  ${k}: ${v}`)
              .join(",\n");
            enums.push(`const ${enumName} = {\n${entries}\n};`);
          }
        }
      };

      if (methodDef?.parameters) {
        methodDef.parameters.forEach(processParam);
      }

      return enums.join("\n\n");
    },

    /**
     * Infer enum name from parameter.
     */
    _inferEnumName(param) {
      const rawName = param.rawType?.$.name || param.rawType?.name || "";
      if (rawName) {
        const parts = rawName.split(".");
        return parts[parts.length - 1].replace("Spec", "");
      }
      const name = param.name.replace(/^arg_/, "");
      return name.charAt(0).toUpperCase() + name.slice(1) + "Type";
    },

    /**
     * Generate standalone HTML with PoC code at TOP for easy review,
     * and generic Mojo runtime at BOTTOM.
     */
    _generateStandaloneHTML(
      iface,
      methodName,
      paramValues,
      methodDef,
      scope,
      fileContents,
      helpersJs,
    ) {
      // 1. Sanitize Inputs for HTML Context
      const fqn = `${iface.module}.${iface.name}`;
      const safeFqn = this._escapeHtml(fqn);
      const safeMethodName = this._escapeHtml(methodName);

      // 2. Sanitize Inputs for JS Context (Identifiers)
      // remoteName is a variable name
      let safeRemoteName =
        iface.name.charAt(0).toLowerCase() + iface.name.slice(1) + "Remote";
      safeRemoteName = this._sanitizeIdentifier(safeRemoteName);

      // methodNameLower is a property name, but safer to sanitize if we access it via dot notation
      let safeMethodNameLower =
        methodName.charAt(0).toLowerCase() + methodName.slice(1);
      safeMethodNameLower = this._sanitizeIdentifier(safeMethodNameLower);

      // Sanitize Module Path for Namespace Access
      // mojo.internal.bindings.${iface.module}
      // We allow dots in module path, but remove other special chars
      const safeModulePath = iface.module.replace(/[^a-zA-Z0-9_.]/g, "");
      const safeInterfaceName = this._sanitizeIdentifier(iface.name);

      const enums = this._generateEnumDefinitions(methodDef, paramValues);
      const paramCode = this._buildParamCode(methodDef, paramValues);
      const callArgs =
        methodDef?.parameters
          ?.map((p) => p.name.replace(/^arg_/, ""))
          .join(", ") || "";
      const decodeCode = this._buildDecodeCode(methodDef);

      // Build runtime script blocks (goes at bottom)
      const runtimeBlocks = [];

      // Core runtime files in order
      if (fileContents["mojo_bindings.js"]) {
        runtimeBlocks.push(
          `// mojo_bindings.js - Creates mojo namespace\n${fileContents["mojo_bindings.js"]}`,
        );
      }
      if (fileContents["bindings_lite.js"]) {
        runtimeBlocks.push(
          `// bindings_lite.js - Message encoding/decoding\n${fileContents["bindings_lite.js"]}`,
        );
      }
      runtimeBlocks.push(
        `// init_polyfills - Creates mojo.internal.interfaceSupport\n${INIT_POLYFILLS_CODE}`,
      );
      if (
        fileContents[
          "mojo_public_interfaces_bindings_pipe_control_messages.mojom.js"
        ]
      ) {
        runtimeBlocks.push(
          `// pipe_control_messages.mojom.js\n${fileContents["mojo_public_interfaces_bindings_pipe_control_messages.mojom.js"]}`,
        );
      }
      if (
        fileContents[
          "mojo_public_interfaces_bindings_interface_control_messages.mojom.js"
        ]
      ) {
        runtimeBlocks.push(
          `// interface_control_messages.mojom.js\n${fileContents["mojo_public_interfaces_bindings_interface_control_messages.mojom.js"]}`,
        );
      }
      runtimeBlocks.push(
        `// init_aliasing - mojo.pipeControl, mojo.interfaceControl\n${INIT_ALIASING_CODE}`,
      );
      if (fileContents["interface_support.js"]) {
        runtimeBlocks.push(
          `// interface_support.js - Remote/Receiver infrastructure\n${fileContents["interface_support.js"]}`,
        );
      }

      // Interface-specific mojom files
      const coreFiles = [
        "mojo_bindings.js",
        "bindings_lite.js",
        "mojo_public_interfaces_bindings_pipe_control_messages.mojom.js",
        "mojo_public_interfaces_bindings_interface_control_messages.mojom.js",
        "interface_support.js",
      ];
      for (const [filename, content] of Object.entries(fileContents)) {
        if (!coreFiles.includes(filename)) {
          runtimeBlocks.push(`// ${filename}\n${content}`);
        }
      }

      // Helpers (decode functions)
      runtimeBlocks.push(`// helpers.js - Decoding utilities\n${helpersJs}`);

      return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PoC: ${safeFqn}.${safeMethodName}</title>
  <style>
    body { font-family: monospace; padding: 20px; background: #1a1a2e; color: #eee; }
    button { padding: 10px 20px; font-size: 16px; cursor: pointer; background: #4a90d9; color: white; border: none; border-radius: 4px; }
    button:hover { background: #357abd; }
    pre { background: #16213e; padding: 15px; border-radius: 4px; overflow: auto; white-space: pre-wrap; }
    h1 { color: #4a90d9; }
    .info { color: #888; font-size: 12px; margin-bottom: 20px; }
    .warn { color: #ffcc00; margin: 10px 0; }
  </style>
</head>
<body>
  <h1>PoC: ${safeMethodName}</h1>
  <div class="info">Interface: ${safeFqn}</div>
  <div class="warn">⚠️ Run Chrome with: --enable-blink-features=MojoJS</div>
  <button id="run">Run PoC</button>
  <pre id="output">Click "Run PoC" to execute...</pre>

<!--
================================================================================
  POC-SPECIFIC CODE (Security-relevant - review this section)
================================================================================
-->
<script id="poc-code">
// ============================================================================
// POC: ${safeFqn}.${safeMethodName}
// ============================================================================
// This is the security-relevant code. The Mojo runtime below is boilerplate.

${enums ? `// Enum definitions\n${enums}\n` : ""}
// Trigger function (runs on button click)
async function runPoC() {
  document.getElementById('output').textContent = 'Running...';
  
  try {
    // Bind to the interface
    const root = mojo.internal.bindings.${safeModulePath};
    let ${safeRemoteName};
    
    if (typeof root.${safeInterfaceName}.getRemote === 'function') {
      ${safeRemoteName} = root.${safeInterfaceName}.getRemote();
    } else {
      ${safeRemoteName} = new root.${safeInterfaceName}Remote();
      const receiver = ${safeRemoteName}.bindNewPipeAndPassReceiver();
      // Use safeFqn in bindInterface string
      Mojo.bindInterface("${safeFqn}", receiver.handle || receiver, "${scope}");
    }

${paramCode}

    // Call the target method
    const result = await ${safeRemoteName}.${safeMethodNameLower}(${callArgs});

${decodeCode}
  } catch (e) {
    document.getElementById('output').textContent = 'Error: ' + e.message + '\\n\\nStack:\\n' + e.stack;
  }
}

document.getElementById('run').onclick = runPoC;
</script>

<!--
================================================================================
  VERSION DETECTION (Required for ordinal scrambling)
================================================================================
-->
<script id="version-detect">
// Detect Chrome version for ordinal scrambling (runs before Mojo runtime)
(async function() {
  if (navigator.userAgentData) {
    try {
      const ua = await navigator.userAgentData.getHighEntropyValues(['fullVersionList']);
      const ver = ua.fullVersionList.find(v => v.brand === 'Google Chrome' || v.brand === 'Chromium');
      if (ver) {
        window.mojoVersion = ver.version;
        console.log('[PoC] Detected Chrome Version:', window.mojoVersion);
      }
    } catch (e) {
      console.warn('[PoC] Failed to get version:', e);
    }
  }
  // Fallback: parse from userAgent (less accurate)
  if (!window.mojoVersion) {
    const match = navigator.userAgent.match(/Chrome\\/([\\d.]+)/);
    if (match) {
      window.mojoVersion = match[1];
      console.log('[PoC] Chrome version from UA:', window.mojoVersion);
    }
  }
})();
</script>

<!--
================================================================================
  MOJO RUNTIME (Generic boilerplate - not security-relevant)
  
  This section contains the Chromium MojoJS binding runtime.
  It is required for the PoC to work but is not specific to this vulnerability.
  You can safely skip reviewing this section.
================================================================================
-->
<script id="mojo-runtime">
${runtimeBlocks.join("\n\n// ----------------------------------------\n\n")}
</script>

</body>
</html>`;
    },

    /**
     * Sanitize HTML special characters to prevent XSS in HTML context.
     */
    _escapeHtml(str) {
      if (!str) return "";
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },

    /**
     * Sanitize JS identifiers to prevent code injection.
     * Allows alphanumeric and underscore.
     */
    _sanitizeIdentifier(str) {
      if (!str) return "";
      return str.replace(/[^a-zA-Z0-9_]/g, "_");
    },

    /**
     * Build parameter initialization code.
     */
    _buildParamCode(methodDef, paramValues) {
      if (!methodDef?.parameters || methodDef.parameters.length === 0) {
        return "    // No parameters";
      }

      const lines = ["    // Parameters"];
      methodDef.parameters.forEach((p) => {
        const cleanName = p.name.replace(/^arg_/, "");
        let value = paramValues[p.name];
        if (value === undefined) value = paramValues[cleanName];

        let valueStr;
        if (typeof value === "bigint") {
          valueStr = value.toString() + "n";
        } else if (typeof value === "string") {
          valueStr = JSON.stringify(value);
        } else if (value === undefined || value === null) {
          valueStr = "null";
        } else {
          valueStr = JSON.stringify(value) || "null";
        }

        lines.push(`    const ${cleanName} = ${valueStr};`);
      });

      return lines.join("\n");
    },

    /**
     * Build response decoding code.
     */
    _buildDecodeCode(methodDef) {
      if (!methodDef?.responseParams || methodDef.responseParams.length === 0) {
        return `    document.getElementById('output').textContent = 'Success:\\n' + JSON.stringify(result, null, 2);`;
      }

      const lines = ["    // Decode result", "    const decoded = {};"];

      methodDef.responseParams.forEach((p) => {
        const cleanName = p.name.replace(/^arg_/, "");
        const typeName = typeof p.type === "string" ? p.type : p.type?.type;

        if (
          typeName === "bigstring16" ||
          p.structSpec?.name?.includes("BigString16")
        ) {
          lines.push(
            `    decoded.${cleanName} = decodeBigString16(result.${p.name});`,
          );
        } else if (
          typeName === "bigstring" ||
          p.structSpec?.name?.includes("BigString")
        ) {
          lines.push(
            `    decoded.${cleanName} = decodeBigString(result.${p.name});`,
          );
        } else {
          lines.push(`    decoded.${cleanName} = result.${p.name};`);
        }
      });

      lines.push("");
      lines.push(
        `    document.getElementById('output').textContent = 'Success:\\n' + JSON.stringify(decoded, null, 2);`,
      );

      return lines.join("\n");
    },

    /**
     * Trigger blob download.
     */
    _downloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
  };

  global.PoCGenerator = PoCGenerator;
})(this);
