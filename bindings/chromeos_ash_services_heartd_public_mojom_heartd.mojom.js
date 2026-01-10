// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/heartd/public/mojom/heartd.mojom
// Module: ash.heartd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.heartd = ash.heartd || {};
ash.heartd.heartd.mojom = ash.heartd.heartd.mojom || {};


// Enum: HeartbeatResponse
ash.heartd.heartd.mojom.mojom.HeartbeatResponse = {
  kSuccess: 0,
  kRateLimit: 1,
  kNotAllowed: 2,
};
ash.heartd.heartd.mojom.mojom.HeartbeatResponseSpec = { $: mojo.internal.Enum() };

// Enum: ServiceName
ash.heartd.heartd.mojom.mojom.ServiceName = {
  kKiosk: 0,
};
ash.heartd.heartd.mojom.mojom.ServiceNameSpec = { $: mojo.internal.Enum() };

// Enum: ActionType
ash.heartd.heartd.mojom.mojom.ActionType = {
  kNoOperation: 0,
  kNormalReboot: 1,
  kForceReboot: 2,
  kSyncData: 3,
};
ash.heartd.heartd.mojom.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };

// Struct: HeartbeatServiceArgument
ash.heartd.heartd.mojom.mojom.HeartbeatServiceArgumentSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartbeatServiceArgument',
      packedSize: 24,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.heartd.mojom.ActionSpec, false), nullable: false, minVersion: 0 },
        { name: 'verification_window_seconds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Action
ash.heartd.heartd.mojom.mojom.ActionSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.Action',
      packedSize: 16,
      fields: [
        { name: 'failure_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.heartd.mojom.ActionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: HeartdControl
ash.heartd.heartd.mojom.mojom.HeartdControl = {};

ash.heartd.heartd.mojom.mojom.HeartdControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.heartd.mojom.mojom.HeartdControlRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.HeartdControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.heartd.mojom.mojom.HeartdControlPendingReceiver,
      handle);
    this.$ = new ash.heartd.heartd.mojom.mojom.HeartdControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.heartd.mojom.mojom.HeartdControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableNormalRebootAction() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.heartd.mojom.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec,
      null,
      []);
  }

  enableForceRebootAction() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.heartd.heartd.mojom.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec,
      null,
      []);
  }

  runAction(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.heartd.heartd.mojom.mojom.HeartdControl_RunAction_ParamsSpec,
      ash.heartd.heartd.mojom.mojom.HeartdControl_RunAction_ResponseParamsSpec,
      [action]);
  }

};

ash.heartd.heartd.mojom.mojom.HeartdControl.getRemote = function() {
  let remote = new ash.heartd.heartd.mojom.mojom.HeartdControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.HeartdControl',
    'context');
  return remote.$;
};

// ParamsSpec for EnableNormalRebootAction
ash.heartd.heartd.mojom.mojom.HeartdControl_EnableNormalRebootAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartdControl.EnableNormalRebootAction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnableForceRebootAction
ash.heartd.heartd.mojom.mojom.HeartdControl_EnableForceRebootAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartdControl.EnableForceRebootAction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RunAction
ash.heartd.heartd.mojom.mojom.HeartdControl_RunAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartdControl.RunAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.heartd.mojom.ActionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.heartd.heartd.mojom.mojom.HeartdControl_RunAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartdControl.RunAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.heartd.heartd.mojom.mojom.HeartdControlPtr = ash.heartd.heartd.mojom.mojom.HeartdControlRemote;
ash.heartd.heartd.mojom.mojom.HeartdControlRequest = ash.heartd.heartd.mojom.mojom.HeartdControlPendingReceiver;


// Interface: HeartbeatService
ash.heartd.heartd.mojom.mojom.HeartbeatService = {};

ash.heartd.heartd.mojom.mojom.HeartbeatServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.heartd.mojom.mojom.HeartbeatServiceRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.HeartbeatService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.heartd.mojom.mojom.HeartbeatServicePendingReceiver,
      handle);
    this.$ = new ash.heartd.heartd.mojom.mojom.HeartbeatServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.heartd.mojom.mojom.HeartbeatServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(name, argument, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.heartd.mojom.mojom.HeartbeatService_Register_ParamsSpec,
      ash.heartd.heartd.mojom.mojom.HeartbeatService_Register_ResponseParamsSpec,
      [name, argument, receiver]);
  }

};

ash.heartd.heartd.mojom.mojom.HeartbeatService.getRemote = function() {
  let remote = new ash.heartd.heartd.mojom.mojom.HeartbeatServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.HeartbeatService',
    'context');
  return remote.$;
};

// ParamsSpec for Register
ash.heartd.heartd.mojom.mojom.HeartbeatService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartbeatService.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: ash.heartd.mojom.ServiceNameSpec, nullable: false, minVersion: 0 },
        { name: 'argument', packedOffset: 0, packedBitOffset: 0, type: ash.heartd.mojom.HeartbeatServiceArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.heartd.heartd.mojom.mojom.HeartbeatService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.HeartbeatService.Register_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.heartd.heartd.mojom.mojom.HeartbeatServicePtr = ash.heartd.heartd.mojom.mojom.HeartbeatServiceRemote;
ash.heartd.heartd.mojom.mojom.HeartbeatServiceRequest = ash.heartd.heartd.mojom.mojom.HeartbeatServicePendingReceiver;


// Interface: Pacemaker
ash.heartd.heartd.mojom.mojom.Pacemaker = {};

ash.heartd.heartd.mojom.mojom.PacemakerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.heartd.heartd.mojom.mojom.PacemakerRemote = class {
  static get $interfaceName() {
    return 'ash.heartd.mojom.Pacemaker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.heartd.heartd.mojom.mojom.PacemakerPendingReceiver,
      handle);
    this.$ = new ash.heartd.heartd.mojom.mojom.PacemakerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.heartd.heartd.mojom.mojom.PacemakerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendHeartbeat() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.heartd.heartd.mojom.mojom.Pacemaker_SendHeartbeat_ParamsSpec,
      ash.heartd.heartd.mojom.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec,
      []);
  }

  stopMonitor() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.heartd.heartd.mojom.mojom.Pacemaker_StopMonitor_ParamsSpec,
      null,
      []);
  }

};

ash.heartd.heartd.mojom.mojom.Pacemaker.getRemote = function() {
  let remote = new ash.heartd.heartd.mojom.mojom.PacemakerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.heartd.mojom.Pacemaker',
    'context');
  return remote.$;
};

// ParamsSpec for SendHeartbeat
ash.heartd.heartd.mojom.mojom.Pacemaker_SendHeartbeat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.Pacemaker.SendHeartbeat_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.heartd.heartd.mojom.mojom.Pacemaker_SendHeartbeat_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.Pacemaker.SendHeartbeat_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.heartd.mojom.HeartbeatResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopMonitor
ash.heartd.heartd.mojom.mojom.Pacemaker_StopMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.heartd.mojom.Pacemaker.StopMonitor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.heartd.heartd.mojom.mojom.PacemakerPtr = ash.heartd.heartd.mojom.mojom.PacemakerRemote;
ash.heartd.heartd.mojom.mojom.PacemakerRequest = ash.heartd.heartd.mojom.mojom.PacemakerPendingReceiver;

