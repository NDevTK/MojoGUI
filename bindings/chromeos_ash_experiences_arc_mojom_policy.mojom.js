// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/policy.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.InstallErrorReasonSpec = { $: mojo.internal.Enum() };
arc.mojom.CommandResultTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.PolicyHost = {};
arc.mojom.PolicyHost.$interfaceName = 'arc.mojom.PolicyHost';
arc.mojom.PolicyHost_GetPolicies_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportCompliance_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec = { $: {} };
arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance = {};
arc.mojom.PolicyInstance.$interfaceName = 'arc.mojom.PolicyInstance';
arc.mojom.PolicyInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec = { $: {} };
arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec = { $: {} };

// Enum: InstallErrorReason
arc.mojom.InstallErrorReason = {
  REASON_UNSPECIFIED: 0,
  TIMEOUT: 1,
  TRANSIENT_ERROR: 2,
  NOT_FOUND: 3,
  NOT_COMPATIBLE_WITH_DEVICE: 4,
  NOT_APPROVED: 5,
  PERMISSIONS_NOT_ACCEPTED: 6,
  NOT_AVAILABLE_IN_COUNTRY: 7,
  NO_LICENSES_REMAINING: 8,
  NOT_ENROLLED: 9,
  USER_INVALID: 10,
};

// Enum: CommandResultType
arc.mojom.CommandResultType = {
  IGNORED: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Interface: PolicyHost
mojo.internal.Struct(
    arc.mojom.PolicyHost_GetPolicies_ParamsSpec, 'arc.mojom.PolicyHost_GetPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec, 'arc.mojom.PolicyHost_GetPolicies_ResponseParams', [
      mojo.internal.StructField('policies', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportCompliance_ParamsSpec, 'arc.mojom.PolicyHost_ReportCompliance_Params', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec, 'arc.mojom.PolicyHost_ReportCompliance_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec, 'arc.mojom.PolicyHost_ReportDPCVersion_Params', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec, 'arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.PolicyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PolicyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPolicies() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PolicyHost_GetPolicies_ParamsSpec,
      arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec,
      [],
      false);
  }

  reportCompliance(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PolicyHost_ReportCompliance_ParamsSpec,
      arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec,
      [request],
      false);
  }

  reportDPCVersion(version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec,
      null,
      [version],
      false);
  }

  reportPlayStoreLocalPolicySet(time, package_names) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec,
      null,
      [time, package_names],
      false);
  }

};

arc.mojom.PolicyHost.getRemote = function() {
  let remote = new arc.mojom.PolicyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyHost',
    'context');
  return remote.$;
};

arc.mojom.PolicyHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(7, 2); // Default ordinal 7 -> Index 2
    this.ordinalMap.set(8, 3); // Default ordinal 8 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyHost_GetPolicies_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPolicies (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReportCompliance
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyHost_ReportCompliance_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportCompliance (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportDPCVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportDPCVersion (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReportPlayStoreLocalPolicySet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportPlayStoreLocalPolicySet (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyHost_GetPolicies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPolicies');
          const result = this.impl.getPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyHost_GetPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyHost_ReportCompliance_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportCompliance');
          const result = this.impl.reportCompliance(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyHost_ReportDPCVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportDPCVersion');
          const result = this.impl.reportDPCVersion(params.version);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportPlayStoreLocalPolicySet');
          const result = this.impl.reportPlayStoreLocalPolicySet(params.time, params.package_names);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.PolicyHostReceiver = arc.mojom.PolicyHostReceiver;

arc.mojom.PolicyHostPtr = arc.mojom.PolicyHostRemote;
arc.mojom.PolicyHostRequest = arc.mojom.PolicyHostPendingReceiver;


// Interface: PolicyInstance
mojo.internal.Struct(
    arc.mojom.PolicyInstance_Init_ParamsSpec, 'arc.mojom.PolicyInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PolicyHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_Init_ResponseParamsSpec, 'arc.mojom.PolicyInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec, 'arc.mojom.PolicyInstance_OnPolicyUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec, 'arc.mojom.PolicyInstance_OnCommandReceived_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec, 'arc.mojom.PolicyInstance_OnCommandReceived_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.CommandResultTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PolicyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PolicyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PolicyInstance_Init_ParamsSpec,
      arc.mojom.PolicyInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onPolicyUpdated() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  onCommandReceived(command) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec,
      arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec,
      [command],
      false);
  }

};

arc.mojom.PolicyInstance.getRemote = function() {
  let remote = new arc.mojom.PolicyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyInstance',
    'context');
  return remote.$;
};

arc.mojom.PolicyInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(2, 0); // Default ordinal 2 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPolicyUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPolicyUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCommandReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCommandReceived (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPolicyUpdated');
          const result = this.impl.onPolicyUpdated();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PolicyInstance_OnCommandReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCommandReceived');
          const result = this.impl.onCommandReceived(params.command);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.PolicyInstanceReceiver = arc.mojom.PolicyInstanceReceiver;

arc.mojom.PolicyInstancePtr = arc.mojom.PolicyInstanceRemote;
arc.mojom.PolicyInstanceRequest = arc.mojom.PolicyInstancePendingReceiver;

