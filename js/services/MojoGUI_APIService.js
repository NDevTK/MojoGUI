/**
 * MojoGUI_APIService
 * Extracted from app.js
 * Handles CDP/MCP server communication bridge
 */
(function (global) {
  "use strict";

  const state = window.MojoGUI_State;
  const MojoLoader = window.MojoLoader;
  const MojoProxy = window.MojoProxy;
  const MojoHandleRegistry = window.MojoHandleRegistry;
  const MojoObjectRegistry = window.MojoObjectRegistry;

  const { updateActivityRow, addActivityRow } = global.TrafficUIService || {};
  const { reconcileKeys } = MojoUtils;

  // Internal function redirects
  const getInternal = () => window.__MojoGUI_Internal || {};

  // MCP Server API
  // ========================================
  // Expose internal functions for scriptable MCP server access via CDP
  window.MojoGUI_API = {
    // ---- Interface Browsing ----
    /**
     * Get all loaded interfaces
     * @returns {Array} Array of interface objects
     */
    getInterfaces: async () => {
      if (!state.interfaces || state.interfaces.length === 0) {
        const { loadInterfaces } = getInternal();
        if (loadInterfaces) await loadInterfaces();
      }

      return state.interfaces;
    },
    /**
     * Search interfaces by name or module
     * @param {string} query - Search query
     * @returns {Array} Filtered interfaces
     */
    searchInterfaces: async (query) => {
      const interfaces = await window.MojoGUI_API.getInterfaces();
      const q = (query || "").toLowerCase();
      if (!q) return interfaces;
      return interfaces.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.module.toLowerCase().includes(q),
      );
    },
    /**
     * Get detailed information about an interface including methods
     * @param {string} name - Interface name (simple or fully qualified)
     * @returns {Object} Interface details with methods and parameters
     */
    getInterfaceDetails: async (name) => {
      const interfaces = await window.MojoGUI_API.getInterfaces();
      const isFQN = name.includes(".");
      let iface = interfaces.find(
        (i) =>
          (isFQN && i.module + "." + i.name === name) ||
          (!isFQN && i.name === name),
      );
      if (!iface) return null;
      // Load binding to ensure method params can be resolved
      const fqn = iface.module ? `${iface.module}.${iface.name}` : iface.name;
      try {
        await MojoLoader.ensureBinding(fqn);
      } catch (e) {
        console.warn("[MojoGUI_API] Failed to load binding:", e);
      }
      // Get method details with parameters
      const { getMethodParams, findMethodDefinition } = getInternal();
      const methods = (iface.methods || []).map((m) => {
        const methodName = typeof m === "string" ? m : m.name;
        const params = getMethodParams ? getMethodParams(fqn, methodName) : [];
        const methodDef = findMethodDefinition
          ? findMethodDefinition(fqn, methodName)
          : null;
        return {
          name: methodName,
          parameters: params || [],
          responseParams: methodDef?.responseParams || null,
        };
      });
      return {
        name: iface.name,
        module: iface.module,
        file: iface.file,
        methods,
      };
    },
    // ---- Method Metadata ----
    getMethodParams: (iface, method) =>
      getInternal().getMethodParams?.(iface, method),
    findMethodDefinition: (iface, method) =>
      getInternal().findMethodDefinition?.(iface, method),
    /**
     * Assign discovered interface IDs to their respective interfaces.
     * @param {Object} mapping - Object mapping interface names (FQN) to IDs.
     */
    assignInterfaceIds: (mapping) => {
      const interfaces = state.interfaces;
      let count = 0;
      for (const [name, id] of Object.entries(mapping)) {
        const isFQN = name.includes(".");
        const iface = interfaces.find(
          (i) =>
            (isFQN && i.module + "." + i.name === name) ||
            (!isFQN && i.name === name),
        );
        if (iface) {
          iface.metadata = iface.metadata || {};
          iface.metadata.discoveredId = id;
          // Promote to associated category so it shows up in filtered search
          iface.metadata.category = "associated";
          count++;
        }
      }
      console.log(`[MojoGUI_API] Assigned ${count} interface IDs.`);
      return { success: true, count };
    },
    /**
     * Generate a minimal valid struct based on a struct specification.
     * @param {string} structName - Fully qualified struct name (e.g., "blink.mojom.FetchClientSettingsObject")
     * @returns {Object} A minimal valid struct with default values
     */
    generateDefaultStruct: async (structName) => {
      // Helper to generate defaults for a field based on its type
      const generateDefault = (field, depth = 0) => {
        if (depth > 10) return null; // Prevent infinite recursion

        const type = field.type;
        const rawType = field.rawType?.$ || field.rawType;

        // Use defaultValue if available
        if (field.defaultValue !== null && field.defaultValue !== undefined) {
          return field.defaultValue;
        }

        // Handle by type
        if (
          type === "string" ||
          (rawType && rawType.isValueType === false && !rawType.structSpec)
        ) {
          return "";
        }
        if (type === "bool" || type === "boolean") {
          return false;
        }
        if (
          type === "number" ||
          type === "int32" ||
          type === "uint32" ||
          type === "int64" ||
          type === "uint64" ||
          type === "float" ||
          type === "double"
        ) {
          return 0;
        }
        if (type && type.type === "enum") {
          // Return first enum value (usually 0)
          const options = type.options;
          if (options) {
            const keys = Object.keys(options);
            if (keys.length > 0) return options[keys[0]];
          }
          return 0;
        }
        if (type === "array") {
          return []; // Empty array is usually valid
        }
        if (type === "map") {
          return {}; // Empty map
        }
        if (type === "pending_remote" || type === "pending_receiver") {
          // Return a placeholder that indicates a handle is needed
          if (field.nullable) return null;
          return {
            __mojoType: "Handle",
            action: "new_pipe",
            interface: field.interface || "unknown",
          };
        }
        if (
          type === "pending_associated_remote" ||
          type === "pending_associated_receiver"
        ) {
          if (field.nullable) return null;
          return {
            __mojoType: "Handle",
            action: "new_pipe",
            isAssociated: true,
            interface: field.interface || "unknown",
          };
        }
        if (type === "struct" && rawType?.structSpec) {
          // Recursively generate nested struct
          const nested = {};
          const spec = rawType.structSpec;
          if (spec.fields) {
            for (const subField of spec.fields) {
              nested[subField.name] = generateDefault(subField, depth + 1);
            }
          }
          return nested;
        }
        if (type === "union" && rawType?.unionSpec) {
          // For unions, generate the first variant
          const spec = rawType.unionSpec;
          const fields = spec.fields;
          if (fields) {
            const keys = Object.keys(fields);
            if (keys.length > 0) {
              const firstKey = keys[0];
              return {
                [firstKey]: generateDefault(
                  { type: "any", rawType: fields[firstKey].type },
                  depth + 1,
                ),
              };
            }
          }
          return {};
        }

        // Default fallback
        if (field.nullable) return null;
        return null;
      };

      // Try to find the struct spec in mojo.internal.bindings namespace
      // This is where MojoJS actually stores generated struct specs
      const parts = structName.split(".");
      const typeName = parts[parts.length - 1];
      const specName = typeName + "Spec";

      // First try: mojo.internal.bindings namespace (primary location)
      let moduleNS = mojo?.internal?.bindings;
      for (const part of parts.slice(0, -1)) {
        if (moduleNS && moduleNS[part]) {
          moduleNS = moduleNS[part];
        }
      }

      if (moduleNS && moduleNS[specName] && moduleNS[specName].$) {
        const spec = moduleNS[specName].$;
        if (spec.structSpec && spec.structSpec.fields) {
          const result = {};
          for (const field of spec.structSpec.fields) {
            result[field.name] = generateDefault(field, 0);
          }
          return {
            success: true,
            structName: structName,
            struct: result,
            note: "Generated minimal valid struct. Handle placeholders may need to be replaced.",
          };
        }
      }

      // Fallback: Try window namespace
      moduleNS = window;
      for (const part of parts.slice(0, -1)) {
        if (moduleNS[part]) {
          moduleNS = moduleNS[part];
        }
      }

      if (moduleNS[specName] && moduleNS[specName].$) {
        const spec = moduleNS[specName].$;
        if (spec.structSpec && spec.structSpec.fields) {
          const result = {};
          for (const field of spec.structSpec.fields) {
            result[field.name] = generateDefault(field, 0);
          }
          return {
            success: true,
            structName: structName,
            struct: result,
            note: "Generated minimal valid struct. Handle placeholders may need to be replaced.",
          };
        }
      }

      // Fallback: Try to find via reflection service
      const reflection = window.MojoReflectionService;
      if (reflection && reflection.resolveType) {
        const typeInfo = reflection.resolveType(structName);
        if (typeInfo && typeInfo.structSpec) {
          const result = {};
          for (const field of typeInfo.structSpec.fields) {
            result[field.name] = generateDefault(field, 0);
          }
          return {
            success: true,
            structName: structName,
            struct: result,
            note: "Generated via reflection. Handle placeholders may need to be replaced.",
          };
        }
      }

      return {
        success: false,
        error: `Struct '${structName}' not found or spec not available. Try loading the interface binding first.`,
        suggestion: "Use get_interface_details first to load the binding.",
      };
    },
    // ---- Code Generation ----
    /**
     * Generate MojoJS code for calling a method
     * @param {string} ifaceName - Interface name
     * @param {string} methodName - Method name
     * @param {Object} params - Parameter values
     * @param {Object} options - Association options { isAssociated, masterHandleId, interfaceId }
     * @returns {string} Generated code
     */
    generateCode: async (ifaceName, methodName, params = {}, options = {}) => {
      // Load binding first to ensure params can be resolved
      await MojoLoader.ensureBinding(ifaceName);

      // Temporarily set state for code generation
      const prevIface = state.selectedInterface;
      const prevMethod = state.selectedMethod;
      const prevParams = state.paramValues;
      const prevAssoc = state.isAssociated;
      const prevMaster = state.masterHandleId;
      const prevIfaceId = state.interfaceId;

      const iface = state.interfaces.find(
        (i) => i.name === ifaceName || i.module + "." + i.name === ifaceName,
      );
      if (!iface) return `// Interface not found: ${ifaceName}`;

      state.selectedInterface = iface;
      state.selectedMethod = methodName || null;
      state.paramValues = params || {};
      state.isAssociated = !!options.isAssociated;
      state.masterHandleId = options.masterHandleId || null;
      state.interfaceId = options.interfaceId || 0;

      const { generateCode: genCode } = getInternal();
      const code = genCode ? genCode(false) : "// generateCode unavailable";

      // Restore state
      state.selectedInterface = prevIface;
      state.selectedMethod = prevMethod;
      state.paramValues = prevParams;
      state.isAssociated = prevAssoc;
      state.masterHandleId = prevMaster;
      state.interfaceId = prevIfaceId;
      return code;
    },
    // ---- Execution ----
    /**
     * Execute a Mojo method with parameters
     * Uses existing generateCode and script execution logic
     * @param {string} ifaceName - Interface name
     * @param {string} methodName - Method name
     * @param {Object} params - Object of parameter key-value pairs
     * @param {Object} options - Association options { isAssociated, masterHandleId, interfaceId }
     * @returns {Object} Result or error
     */
    executeMethod: async (ifaceName, methodName, params = {}, options = {}) => {
      if (!state.mojoAvailable) {
        return { error: "MojoJS is not available" };
      }

      return await window.MojoExecutionService.call(
        {
          interface: ifaceName,
          masterHandleId: options.masterHandleId,
        },
        methodName,
        params,
        options,
      );
    },
    // ---- Interceptor Control ----
    startInterceptor: (ifaceName, mode = "INTERCEPT") => {
      if (typeof InterceptorManager === "undefined") return false;
      return InterceptorManager.start(ifaceName, mode);
    },
    stopInterceptor: (ifaceName) => {
      if (typeof InterceptorManager === "undefined") return;
      InterceptorManager.stop(ifaceName);
    },
    toggleInterceptor: (ifaceName) => {
      if (typeof InterceptorManager === "undefined") return false;
      return InterceptorManager.toggle(ifaceName);
    },
    isInterceptorActive: (ifaceName) => {
      if (typeof InterceptorManager === "undefined") return false;
      return InterceptorManager.isActive(ifaceName);
    },
    getInterceptorMode: (ifaceName) => {
      if (typeof InterceptorManager === "undefined") return null;
      return InterceptorManager.getMode(ifaceName);
    },
    listActiveInterceptors: () => {
      if (typeof InterceptorManager === "undefined") return [];
      return Array.from(InterceptorManager.interceptors.keys());
    },
    // ---- Intercepted Calls ----
    /**
     * Log a custom activity to the traffic log
     * @param {Object} data - Activity data (interface, method, params, etc.)
     * @returns {string} The activity ID
     */
    addActivity: (data) => {
      const id = data.id || "act_" + Math.random().toString(36).substr(2, 9);
      const activityData = {
        id,
        timestamp: Date.now(),
        type: "MANUAL",
        status: "Pending",
        ...data,
      };
      addActivityRow(activityData);
      return id;
    },
    /**
     * Log raw data captured from a Data Pipe
     * @param {string|number} handleId - Handle ID
     * @param {Uint8Array} data - Raw byte chunk
     */
    addDataActivity: (handleId, data) => {
      const { addActivityRow } = global.TrafficUIService || {};
      if (addActivityRow) {
        addActivityRow({
          type: "DATA",
          interface: "Data Pipe",
          method: "Stream",
          params: {
            handle: handleId.toString().startsWith("obj_")
              ? handleId
              : "h_" + handleId,
            bytes: data.length,
          },
          result: data, // Store the raw Uint8Array
          status: "Logged",
          objectId: handleId.toString().startsWith("obj_")
            ? handleId
            : "h_" + handleId,
          timestamp: Date.now(),
        });
      }
    },
    /**
     * Update an existing activity in the traffic log
     * @param {string} id - Activity ID
     * @param {string} status - New status
     * @param {Object} result - Result data
     */
    updateActivity: (id, status, result) => {
      updateActivityRow(id, status, result);
    },
    /**
     * Get list of intercepted calls from the activity table
     * @returns {Array} Array of call details
     */
    getInterceptedCalls: () => {
      const tableBody = document.getElementById("interceptorTableBody");
      const rows = tableBody?.querySelectorAll("tr") || [];

      // Local serialization helper to handle BigInt and Mojo objects for CDP
      // without stripping arg_ prefixes like sanitizeKeys does.
      const serializeForCDP = (obj, seen = new WeakSet()) => {
        if (obj === null || typeof obj !== "object") {
          if (typeof obj === "bigint") return obj.toString() + "n";
          return obj;
        }
        if (seen.has(obj)) return "[Circular]";
        seen.add(obj);

        // Detect Mojo objects to avoid CDP serialization errors
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
            const meta = obj.$;
            return {
              __mojoType: "Handle",
              interface:
                meta.interfaceName ||
                (meta.proxy && meta.proxy.interfaceName) ||
                "Unknown",
              interfaceId: guiId,
              namespace: meta.interfaceNameNamespace || "",
              isReceiver: false,
            };
          } else {
            return {
              __mojoType: "Handle",
              interface: "PendingReceiver",
              interfaceId: guiId,
              namespace: "",
              isReceiver: true,
            };
          }
        }

        if (Array.isArray(obj)) return obj.map((v) => serializeForCDP(v, seen));

        const result = {};
        for (const key in obj) {
          try {
            result[key] = serializeForCDP(obj[key], seen);
          } catch (e) {
            result[key] = "[Serialization Error]";
          }
        }
        return result;
      };

      return Array.from(rows).map((row) => {
        const details = row.__details || {};
        return {
          id: row.dataset.id,
          type: row.dataset.type,
          proxyId: row.dataset.proxyId,
          interface: details.interface,
          method: details.method,
          params: serializeForCDP(details.params),
          status: details.status,
          result: serializeForCDP(details.result),
          error: details.error,
          timestamp: details.timestamp,
        };
      });
    },
    /**
     * Resume, modify, or drop an intercepted call
     * @param {string} id - Call ID
     * @param {Array} params - Modified parameters (null to use original)
     * @param {boolean} drop - Whether to drop the call
     * @param {boolean} interceptResponse - Whether to intercept the response
     */
    resumeCall: (id, params, drop = false, interceptResponse = false) => {
      const row = document.getElementById(`row_${id}`);
      if (!row) return { error: `Call not found: ${id}` };

      if (row.__details?.status !== "Pending") {
        return {
          error: `Call ${id} is not in Pending status (current status: ${row.__details?.status})`,
        };
      }

      const proxyId = row.dataset.proxyId;
      const entry = MojoObjectRegistry.get(proxyId);
      if (!entry || !entry.remote)
        return { error: `Proxy not found for call: ${id}` };
      const remote = entry.remote;

      if (drop) {
        remote.resumeCall(id, null, true);
        updateActivityRow(id, "Dropped");
        return { success: true, action: "dropped" };
      }
      // Get original params if not provided
      const originalParams = row.__details?.params;
      const finalParams = params || originalParams;
      // Restore arg_ prefixes if needed
      const restoredParams = reconcileKeys(finalParams, originalParams, false);
      remote.resumeCall(id, restoredParams, false, interceptResponse);
      if (interceptResponse) {
        updateActivityRow(id, "Pending Response");
      } else {
        updateActivityRow(id, "Forwarded");
      }
      return { success: true, action: "resumed", interceptResponse };
    },
    /**
     * Send a modified response for an intercepted call
     * @param {string} id - Call ID
     * @param {Object} result - Modified result
     */
    sendResponse: (id, result) => {
      const row = document.getElementById(`row_${id}`);
      if (!row) return { error: `Call not found: ${id}` };

      if (row.__details?.status !== "Response Edit") {
        return {
          error: `Call ${id} is not in Response Edit status (current status: ${row.__details?.status})`,
        };
      }

      const proxyId = row.dataset.proxyId;
      const entry = MojoObjectRegistry.get(proxyId);
      if (!entry || !entry.remote)
        return { error: `Proxy not found for call: ${id}` };
      const remote = entry.remote;

      const originalResult = row.__details?.result;
      const restoredResult = reconcileKeys(result, originalResult);

      remote.sendResponse(id, restoredResult);
      updateActivityRow(id, "Done", restoredResult);
      return { success: true, action: "sent_response" };
    },
    /**
     * Replay a captured call with optional parameter modifications
     * @param {string} id - Call ID from activity log
     * @param {Object} params - Optional modified parameters
     * @returns {Object} Result of the replay operation
     */
    replayCall: async (id, params = null) => {
      const row =
        document.getElementById(`row_${id}`) ||
        document.querySelector(`tr[data-id="${id}"]`);
      if (!row) return { error: `Call not found: ${id}` };

      const details = row.__details;
      if (!details) return { error: `No details found for call: ${id}` };

      const proxyId = row.dataset.proxyId;
      const entry = MojoObjectRegistry.get(proxyId);
      if (!entry || !entry.remote || !entry.remote.realRemote) {
        return { error: `Proxy not found or invalid for call: ${id}` };
      }
      const remote = entry.remote;

      const method = details.method;
      if (!method || typeof remote.realRemote[method] !== "function") {
        return { error: `Method ${method} not found on remote` };
      }

      try {
        // Use modified params or original
        const originalParams = details.params;
        let finalParams = params || originalParams;

        // Restore keys if needed
        if (params && typeof reconcileKeys === "function") {
          finalParams = reconcileKeys(params, originalParams, false);
        }

        // Execute the call
        const result = await remote.realRemote[method](
          ...(Array.isArray(finalParams) ? finalParams : [finalParams]),
        );
        return { success: true, result };
      } catch (e) {
        return { success: false, error: e.message, stack: e.stack };
      }
    },
    // ---- State Access ----
    getState: () => ({
      mojoAvailable: state.mojoAvailable,
      selectedInterface: state.selectedInterface?.name || null,
      selectedMethod: state.selectedMethod,
      interfaceCount: state.interfaces.length,
      trafficCount: state.trafficCount,
      interceptResponses: state.interceptResponses,
      userActivation: {
        isActive: navigator.userActivation?.isActive,
        hasBeenActive: navigator.userActivation?.hasBeenActive,
      },
      visibilityState: document.visibilityState,
    }),
    // ---- Handle Management ----
    /**
     * Bind a mock listener (sink) for an interface and return a handleId.
     * Incoming calls will be logged to the Interceptor.
     * @param {string} ifaceName - The listener interface name
     * @returns {Object} { handleId, proxyId }
     */
    bindMockListener: async (ifaceName) => {
      const fqn = await MojoLoader.ensureBinding(ifaceName);
      const name = fqn || ifaceName;
      const comps = MojoProxy.getInterfaceComponents(name);
      if (!comps.Receiver) throw new Error("No Receiver found for " + name);

      const { handle0, handle1 } = Mojo.createMessagePipe();
      const proxyImpl = new MojoProxy(name, null, comps); // realRemote is null (Sink)
      proxyImpl.receiver = new comps.Receiver(proxyImpl);
      proxyImpl.receiver.bind(handle0);

      const hId = MojoHandleRegistry.register(handle1);
      return { handleId: hId, proxyId: proxyImpl.id };
    },
    /**
     * Create a new Mojo message pipe
     * @returns {Object} Object containing IDs of handle0 and handle1
     */
    createMessagePipe: () => {
      if (typeof Mojo === "undefined") return { error: "Mojo not available" };
      try {
        const { handle0, handle1 } = Mojo.createMessagePipe();
        const id0 = MojoHandleRegistry.register(handle0);
        const id1 = MojoHandleRegistry.register(handle1);
        console.log(`[MojoGUI_API] Created message pipe: ${id0} <-> ${id1}`);
        return { handle0: id0, handle1: id1 };
      } catch (e) {
        return { error: e.message };
      }
    },
    /**
     * Create a new Mojo data pipe
     * @param {Object} options - Data pipe options { elementNumBytes, capacityNumBytes }
     * @returns {Object} Object containing IDs of producer and consumer handles
     */
    createDataPipe: (options = {}) => {
      if (typeof Mojo === "undefined") return { error: "Mojo not available" };
      // Ensure MojoDataPipeProxy is available (it's global from interceptor.js)
      if (typeof window.MojoDataPipeProxy === "undefined") {
        // Fallback if proxy not found (shouldn't happen in full env)
        try {
          const { producer, consumer } = Mojo.createDataPipe(options);
          const pId = MojoHandleRegistry.register(producer);
          const cId = MojoHandleRegistry.register(consumer);
          return { producer: pId, consumer: cId };
        } catch (e) {
          return { error: e.message };
        }
      }

      try {
        // 1. Create the Real Pipe (User -> Internal)
        const { producer: p_real, consumer: c_real } =
          Mojo.createDataPipe(options);

        // 2. Create the Forwarding Pipe (Internal -> User)
        // We generally match the options (capacity etc)
        const { producer: p_fwd, consumer: c_fwd } =
          Mojo.createDataPipe(options);

        // 3. Create Proxy Bridge (Intersects c_real, forwards to p_fwd)
        const proxy = new window.MojoDataPipeProxy(c_real, "consumer");
        proxy.pair = p_fwd;

        // 4. Register the ends we give to the user
        const pId = MojoHandleRegistry.register(p_real);
        const cId = MojoHandleRegistry.register(c_fwd);

        console.log(
          `[MojoGUI_API] Created bridged data pipe: ${pId} (P) -> [Proxy] -> ${cId} (C)`,
        );
        return { producer: pId, consumer: cId };
      } catch (e) {
        return { error: e.message };
      }
    },
    /**
     * Read data from a Mojo data pipe consumer handle
     * @param {string|number} id - Consumer handle ID
     * @param {string} encoding - Optional encoding ('utf8', 'hex', 'base64')
     * @returns {Object} Object containing result and data
     */
    readDataPipe: (id, encoding = null) => {
      if (typeof MojoHandleRegistry === "undefined")
        return { error: "Registry not available" };
      const handle = MojoHandleRegistry.get(id);
      if (!handle) return { error: "Handle not found" };

      const data = MojoUtils.readDataPipeAvailable(handle);
      if (!data) {
        return {
          result: Mojo.RESULT_OK,
          data: encoding === "utf8" ? "" : [],
        };
      }

      if (encoding === "utf8") {
        return { result: Mojo.RESULT_OK, data: new TextDecoder().decode(data) };
      } else if (encoding === "hex") {
        return {
          result: Mojo.RESULT_OK,
          data: Array.from(data)
            .map((b) => b.toString(16).padStart(2, "0"))
            .join(""),
        };
      } else if (encoding === "base64") {
        return {
          result: Mojo.RESULT_OK,
          data: btoa(String.fromCharCode(...data)),
        };
      }

      return {
        result: Mojo.RESULT_OK,
        data: Array.from(data),
      };
    },
    /**
     * Write data to a Mojo data pipe producer handle
     * @param {string|number} id - Producer handle ID
     * @param {string|Uint8Array} data - Data to write (string or bytes)
     * @returns {Object} Result of the write operation
     */
    writeDataPipe: (id, data) => {
      if (typeof MojoHandleRegistry === "undefined")
        return { error: "Registry not available" };
      const handle = MojoHandleRegistry.get(id);
      if (!handle) return { error: "Handle not found" };

      const result = MojoUtils.writeDataPipe(handle, data);

      // MojoUtils.writeDataPipe handles string encoding internally.
      // We rely on the Proxy Bridge (if active) to handle logging.

      return {
        result: result,
        bytesWritten:
          result === Mojo.RESULT_OK
            ? typeof data === "string"
              ? new TextEncoder().encode(data).length // Estimate length
              : data.length
            : 0,
      };
    },
    /**
     * Inspect a registered object or handle
     * @param {string|number} id - Object ID (obj_N) or Handle ID
     * @returns {Object} Inspection details
     */
    inspectObject: (id) => {
      let target = null;
      let type = "unknown";

      if (typeof id === "string" && id.startsWith("obj_")) {
        const entry = MojoObjectRegistry.get(id);
        if (entry) {
          target = entry.remote;
          type = entry.type;
        }
      } else {
        target = MojoHandleRegistry.get(id);
        type = "MojoHandle";
      }

      if (!target) return { error: "Object not found" };

      const getProps = (obj) => {
        const props = new Set();
        let current = obj;
        // Go up 2 levels of prototype
        for (let i = 0; i < 2 && current; i++) {
          Object.getOwnPropertyNames(current).forEach((p) => props.add(p));
          current = Object.getPrototypeOf(current);
        }
        return Array.from(props).sort();
      };

      return {
        id,
        type,
        constructor: target.constructor?.name,
        properties: getProps(target),
        innerProperties: target.$ ? getProps(target.$) : null,
      };
    },
    /**
     * Get details about a specific handle
     * @param {string|number} id - Handle ID
     * @returns {Object} Handle details
     */
    getHandleDetails: (id) => {
      if (typeof MojoHandleRegistry === "undefined")
        return { error: "Registry not available" };
      const handle = MojoHandleRegistry.get(id);
      if (!handle) return { error: "Handle not found" };
      return {
        id: handle.__mojoGuiId,
        nativeValue: handle.value,
        isClosed: !handle.value && handle.value !== 0 && !handle.watch, // Heuristic check
      };
    },
    /**
     * Close a specific handle
     * @param {string|number} id - Handle ID
     * @returns {Object} Success or error
     */
    closeHandle: (id) => {
      if (typeof MojoHandleRegistry === "undefined")
        return { error: "Registry not available" };
      const handle = MojoHandleRegistry.get(id);
      if (!handle) return { error: "Handle not found" };
      try {
        handle.close();
        console.log(`[MojoGUI_API] Closed handle ${id}`);
        return { success: true };
      } catch (e) {
        return { error: e.message };
      }
    },
    /**
     * List all registered handles
     * @returns {Array} Array of handle IDs
     */
    listHandles: () => {
      if (typeof MojoHandleRegistry === "undefined") return [];
      return Array.from(MojoHandleRegistry.handles.keys());
    },
    /**
     * List all registered high-level objects
     * @returns {Array} Array of object IDs
     */
    listObjects: () => {
      if (typeof MojoObjectRegistry === "undefined") return [];
      return MojoObjectRegistry.list();
    },
    /**
     * Set response interception mode
     * @param {boolean} enabled - Whether to intercept responses
     */
    setInterceptResponses: (enabled) => {
      state.interceptResponses = !!enabled;
      // Update UI toggle if present
      const toggle = document.getElementById("interceptRespToggle");
      if (toggle) {
        toggle.checked = state.interceptResponses;
      }
      return state.interceptResponses;
    },
    // ---- Binding Loading ----
    ensureBinding: (ifaceName) => MojoLoader.ensureBinding(ifaceName),

    // ---- Security Research Shortcuts ----

    /**
     * One-shot research report for an interface.
     * Returns security metadata, method signatures, code search links,
     * and suggested fuzzing targets in a single call.
     * @param {string} name - Interface name (simple or FQN)
     * @returns {Object} Comprehensive research summary
     */
    researchInterface: async (name) => {
      const details = await window.MojoGUI_API.getInterfaceDetails(name);
      if (!details) return { error: `Interface "${name}" not found` };

      const fqn = details.module + "." + details.name;
      const internal = window.__MojoGUI_Internal || {};

      // Security metadata
      const module = details.module || "";
      let boundary = "unknown";
      if (module.startsWith("blink.mojom")) boundary = "renderer → browser";
      else if (module.startsWith("content.mojom")) boundary = "renderer → browser";
      else if (module.startsWith("network.mojom")) boundary = "browser → network";
      else if (module.startsWith("device.mojom")) boundary = "browser → device";
      else if (module.startsWith("media.mojom")) boundary = "renderer → GPU/utility";
      else if (module.startsWith("viz.mojom")) boundary = "renderer → GPU";
      else if (module.startsWith("gpu.mojom")) boundary = "renderer → GPU";
      else if (module.startsWith("storage.mojom")) boundary = "renderer → browser";
      else if (module.includes("mojom")) boundary = "cross-process";

      // Code search links
      const codeSearch = {
        cppImpl: `https://source.chromium.org/search?q=${encodeURIComponent(details.name + "Impl " + module.replace(/\./g, "/"))}&ss=chromium`,
        mojomIdl: `https://source.chromium.org/search?q=${encodeURIComponent("interface " + details.name + " file:" + module.replace(/\./g, "/") + ".mojom")}&ss=chromium`,
      };

      // Identify high-value fuzzing targets (methods that take complex input)
      const fuzzTargets = (details.methods || [])
        .filter((m) => m.parameters && m.parameters.length > 0)
        .map((m) => {
          const complexity = m.parameters.reduce((acc, p) => {
            const t = typeof p.type === "string" ? p.type : (p.type?.type || "any");
            if (t === "struct" || t === "union") return acc + 3;
            if (t === "array" || t === "map") return acc + 2;
            if (t === "string" || t === "Url" || t === "bigstring") return acc + 2;
            if (t === "pending_remote" || t === "pending_receiver") return acc + 1;
            return acc + 1;
          }, 0);
          return { method: m.name, paramCount: m.parameters.length, complexity };
        })
        .sort((a, b) => b.complexity - a.complexity);

      return {
        interface: fqn,
        module: details.module,
        file: details.file,
        security: {
          boundary,
          methodCount: details.methods?.length || 0,
          gates: details.metadata?.gates || [],
        },
        methods: details.methods,
        codeSearch,
        fuzzTargets,
        quickStart: {
          fuzzCommand: `MojoFuzzer.start() // Select "${fqn}" first, or use all_interfaces strategy`,
          raceTestExample: `MojoFuzzer.raceTest("${fqn}", "${fuzzTargets[0]?.method || "methodName"}", 10)`,
          interceptCommand: `MojoGUI_API.startInterceptor("${fqn}", "LOG")`,
        },
      };
    },

    /**
     * Run a race condition test on a method.
     * @param {string} ifaceName - Interface name
     * @param {string} methodName - Method name
     * @param {number} concurrency - Number of concurrent calls
     * @returns {Object} Race test results
     */
    raceTest: async (ifaceName, methodName, concurrency = 10) => {
      if (!window.MojoFuzzer) return { error: "Fuzzer not available" };
      return await window.MojoFuzzer.raceTest(ifaceName, methodName, concurrency);
    },

    /**
     * Run a sequence fuzz test on an interface.
     * @param {string} ifaceName - Interface name
     * @param {Array<string>} methods - Method names in order
     * @param {number} iterations - Number of iterations
     */
    sequenceFuzz: async (ifaceName, methods, iterations = 10) => {
      if (!window.MojoFuzzer) return { error: "Fuzzer not available" };
      return await window.MojoFuzzer.sequenceFuzz(ifaceName, methods, iterations);
    },
  };

  // Signal readiness
  window.dispatchEvent(new CustomEvent("mojo-gui-ready"));
})(this);
