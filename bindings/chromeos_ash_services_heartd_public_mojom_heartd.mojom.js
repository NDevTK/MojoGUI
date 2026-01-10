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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.heartd.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableNormalRebootAction();
          break;
        }
        case 1: {
          const params = ash.heartd.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableForceRebootAction();
          break;
        }
        case 2: {
          const params = ash.heartd.mojom.HeartdControl_RunAction_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.heartd.mojom.HeartbeatService_Register_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.heartd.mojom.Pacemaker_SendHeartbeat_ParamsSpec.$.decode(message.payload);
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
          const params = ash.heartd.mojom.Pacemaker_StopMonitor_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

ash.heartd.mojom.PacemakerReceiver = ash.heartd.mojom.PacemakerReceiver;

ash.heartd.mojom.PacemakerPtr = ash.heartd.mojom.PacemakerRemote;
ash.heartd.mojom.PacemakerRequest = ash.heartd.mojom.PacemakerPendingReceiver;

