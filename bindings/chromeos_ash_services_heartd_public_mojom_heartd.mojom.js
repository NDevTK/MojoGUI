// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/heartd/public/mojom/heartd.mojom
// Module: ash.heartd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.heartd = ash.heartd || {};
ash.heartd.mojom = ash.heartd.mojom || {};

ash.heartd.mojom.HeartbeatResponseSpec = { $: mojo.internal.Enum() };
ash.heartd.mojom.ServiceNameSpec = { $: mojo.internal.Enum() };
ash.heartd.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };
ash.heartd.mojom.HeartbeatServiceArgumentSpec = { $: {} };
ash.heartd.mojom.ActionSpec = { $: {} };
ash.heartd.mojom.HeartdControl = {};
ash.heartd.mojom.HeartdControl.$interfaceName = 'ash.heartd.mojom.HeartdControl';
ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec = { $: {} };
ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec = { $: {} };
ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec = { $: {} };
ash.heartd.mojom.HeartdControl_RunAction_ResponseParamsSpec = { $: {} };
ash.heartd.mojom.HeartbeatService = {};
ash.heartd.mojom.HeartbeatService.$interfaceName = 'ash.heartd.mojom.HeartbeatService';
ash.heartd.mojom.HeartbeatService_Register_ParamsSpec = { $: {} };
ash.heartd.mojom.HeartbeatService_Register_ResponseParamsSpec = { $: {} };
ash.heartd.mojom.Pacemaker = {};
ash.heartd.mojom.Pacemaker.$interfaceName = 'ash.heartd.mojom.Pacemaker';
ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec = { $: {} };
ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec = { $: {} };
ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec = { $: {} };
ash.heartd.mojom.Pacemaker_StopMonitor_ResponseParamsSpec = { $: {} };

// Enum: HeartbeatResponse
ash.heartd.mojom.HeartbeatResponse = {
  kSuccess: 0,
  kRateLimit: 1,
  kNotAllowed: 2,
};

// Enum: ServiceName
ash.heartd.mojom.ServiceName = {
  kUnmappedEnumField: 0,
  kKiosk: 1,
};

// Enum: ActionType
ash.heartd.mojom.ActionType = {
  kUnmappedEnumField: 0,
  kNoOperation: 1,
  kNormalReboot: 2,
  kForceReboot: 3,
  kSyncData: 4,
};

// Struct: HeartbeatServiceArgument
mojo.internal.Struct(
    ash.heartd.mojom.HeartbeatServiceArgumentSpec, 'ash.heartd.mojom.HeartbeatServiceArgument', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(ash.heartd.mojom.ActionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('verification_window_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Action
mojo.internal.Struct(
    ash.heartd.mojom.ActionSpec, 'ash.heartd.mojom.Action', [
      mojo.internal.StructField('action', 0, 0, ash.heartd.mojom.ActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failure_count', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: HeartdControl
mojo.internal.Struct(
    ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec, 'ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec, 'ash.heartd.mojom.HeartdControl_EnableForceRebootAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec, 'ash.heartd.mojom.HeartdControl_RunAction_Params', [
      mojo.internal.StructField('action', 0, 0, ash.heartd.mojom.ActionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.heartd.mojom.HeartdControl_RunAction_ResponseParamsSpec, 'ash.heartd.mojom.HeartdControl_RunAction_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.heartd.mojom.HeartdControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.mojom.HeartdControlRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.HeartdControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.mojom.HeartdControlPendingReceiver,
      handle);
    this.$ = new ash.heartd.mojom.HeartdControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.mojom.HeartdControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableNormalRebootAction() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec,
      null,
      [],
      false);
  }

  enableForceRebootAction() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec,
      null,
      [],
      false);
  }

  runAction(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec,
      ash.heartd.mojom.HeartdControl_RunAction_ResponseParamsSpec,
      [action],
      false);
  }

};

ash.heartd.mojom.HeartdControl.getRemote = function() {
  let remote = new ash.heartd.mojom.HeartdControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.HeartdControl',
    'context');
  return remote.$;
};

ash.heartd.mojom.HeartdControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: EnableNormalRebootAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableNormalRebootAction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableForceRebootAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableForceRebootAction (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RunAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAction (2)');
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
          const params = decoder.decodeStruct(ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableNormalRebootAction');
          const result = this.impl.enableNormalRebootAction();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableForceRebootAction');
          const result = this.impl.enableForceRebootAction();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.runAction');
          const result = this.impl.runAction(params.action);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.heartd.mojom.HeartdControl_RunAction_ResponseParamsSpec);
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

ash.heartd.mojom.HeartdControlReceiver = ash.heartd.mojom.HeartdControlReceiver;

ash.heartd.mojom.HeartdControlPtr = ash.heartd.mojom.HeartdControlRemote;
ash.heartd.mojom.HeartdControlRequest = ash.heartd.mojom.HeartdControlPendingReceiver;


// Interface: HeartbeatService
mojo.internal.Struct(
    ash.heartd.mojom.HeartbeatService_Register_ParamsSpec, 'ash.heartd.mojom.HeartbeatService_Register_Params', [
      mojo.internal.StructField('name', 0, 0, ash.heartd.mojom.ServiceNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('argument', 8, 0, ash.heartd.mojom.HeartbeatServiceArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(ash.heartd.mojom.PacemakerSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.heartd.mojom.HeartbeatService_Register_ResponseParamsSpec, 'ash.heartd.mojom.HeartbeatService_Register_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.heartd.mojom.HeartbeatServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.mojom.HeartbeatServiceRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.HeartbeatService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.mojom.HeartbeatServicePendingReceiver,
      handle);
    this.$ = new ash.heartd.mojom.HeartbeatServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.mojom.HeartbeatServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(name, argument, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.mojom.HeartbeatService_Register_ParamsSpec,
      ash.heartd.mojom.HeartbeatService_Register_ResponseParamsSpec,
      [name, argument, receiver],
      false);
  }

};

ash.heartd.mojom.HeartbeatService.getRemote = function() {
  let remote = new ash.heartd.mojom.HeartbeatServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.HeartbeatService',
    'context');
  return remote.$;
};

ash.heartd.mojom.HeartbeatServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: Register
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.HeartbeatService_Register_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.heartd.mojom.HeartbeatService_Register_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.name, params.argument, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.heartd.mojom.HeartbeatService_Register_ResponseParamsSpec);
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

ash.heartd.mojom.HeartbeatServiceReceiver = ash.heartd.mojom.HeartbeatServiceReceiver;

ash.heartd.mojom.HeartbeatServicePtr = ash.heartd.mojom.HeartbeatServiceRemote;
ash.heartd.mojom.HeartbeatServiceRequest = ash.heartd.mojom.HeartbeatServicePendingReceiver;


// Interface: Pacemaker
mojo.internal.Struct(
    ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec, 'ash.heartd.mojom.Pacemaker_SendHeartbeat_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec, 'ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.heartd.mojom.HeartbeatResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec, 'ash.heartd.mojom.Pacemaker_StopMonitor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.heartd.mojom.Pacemaker_StopMonitor_ResponseParamsSpec, 'ash.heartd.mojom.Pacemaker_StopMonitor_ResponseParams', [
    ],
    [[0, 8]]);

ash.heartd.mojom.PacemakerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.mojom.PacemakerRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.Pacemaker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.mojom.PacemakerPendingReceiver,
      handle);
    this.$ = new ash.heartd.mojom.PacemakerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.mojom.PacemakerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendHeartbeat() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec,
      ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec,
      [],
      false);
  }

  stopMonitor() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec,
      ash.heartd.mojom.Pacemaker_StopMonitor_ResponseParamsSpec,
      [],
      false);
  }

};

ash.heartd.mojom.Pacemaker.getRemote = function() {
  let remote = new ash.heartd.mojom.PacemakerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.Pacemaker',
    'context');
  return remote.$;
};

ash.heartd.mojom.PacemakerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: SendHeartbeat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendHeartbeat (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopMonitor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendHeartbeat');
          const result = this.impl.sendHeartbeat();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopMonitor');
          const result = this.impl.stopMonitor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.heartd.mojom.Pacemaker_StopMonitor_ResponseParamsSpec);
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

ash.heartd.mojom.PacemakerReceiver = ash.heartd.mojom.PacemakerReceiver;

ash.heartd.mojom.PacemakerPtr = ash.heartd.mojom.PacemakerRemote;
ash.heartd.mojom.PacemakerRequest = ash.heartd.mojom.PacemakerPendingReceiver;

