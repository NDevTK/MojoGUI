// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/heartd/public/mojom/heartd.mojom
// Module: ash.heartd.mojom

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
  enableNormalRebootAction() {
    return this.$.enableNormalRebootAction();
  }
  enableForceRebootAction() {
    return this.$.enableForceRebootAction();
  }
  runAction(action) {
    return this.$.runAction(action);
  }
};

ash.heartd.mojom.HeartdControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HeartdControl', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  enableNormalRebootAction() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec,
      null,
      [],
      false);
  }

  enableForceRebootAction() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec,
      null,
      [],
      false);
  }

  runAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HeartdControl', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec.$.structSpec);
          const result = this.impl.enableNormalRebootAction();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec.$.structSpec);
          const result = this.impl.enableForceRebootAction();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(ash.heartd.mojom.PacemakerRemote), null, false, 0, undefined),
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
  register(name, argument, receiver) {
    return this.$.register(name, argument, receiver);
  }
};

ash.heartd.mojom.HeartbeatServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HeartbeatService', [
      { explicit: 0 },
    ]);
  }

  register(name, argument, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HeartbeatService', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.HeartbeatService_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.heartd.mojom.HeartbeatService_Register_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  sendHeartbeat() {
    return this.$.sendHeartbeat();
  }
  stopMonitor() {
    return this.$.stopMonitor();
  }
};

ash.heartd.mojom.PacemakerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Pacemaker', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  sendHeartbeat() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec,
      ash.heartd.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec,
      [],
      false);
  }

  stopMonitor() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Pacemaker', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ash.heartd.mojom.PacemakerReceiver = ash.heartd.mojom.PacemakerReceiver;

ash.heartd.mojom.PacemakerPtr = ash.heartd.mojom.PacemakerRemote;
ash.heartd.mojom.PacemakerRequest = ash.heartd.mojom.PacemakerPendingReceiver;

