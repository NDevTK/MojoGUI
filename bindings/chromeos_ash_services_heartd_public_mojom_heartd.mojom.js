// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/heartd/public/mojom/heartd.mojom
// Module: ash.heartd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.heartd = ash.heartd || {};
ash.heartd.mojom = ash.heartd.mojom || {};


// Enum: HeartbeatResponse
ash.heartd.mojom.HeartbeatResponse = {
  kSuccess: 0,
  kRateLimit: 1,
  kNotAllowed: 2,
};

// Enum: ServiceName
ash.heartd.mojom.ServiceName = {
  kKiosk: 0,
};

// Enum: ActionType
ash.heartd.mojom.ActionType = {
  kNoOperation: 0,
  kNormalReboot: 1,
  kForceReboot: 2,
  kSyncData: 3,
};

// Interface: HeartdControl
ash.heartd.mojom.HeartdControl = {};

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

// Legacy compatibility
ash.heartd.mojom.HeartdControlPtr = ash.heartd.mojom.HeartdControlRemote;
ash.heartd.mojom.HeartdControlRequest = ash.heartd.mojom.HeartdControlPendingReceiver;


// Interface: HeartbeatService
ash.heartd.mojom.HeartbeatService = {};

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

// Legacy compatibility
ash.heartd.mojom.HeartbeatServicePtr = ash.heartd.mojom.HeartbeatServiceRemote;
ash.heartd.mojom.HeartbeatServiceRequest = ash.heartd.mojom.HeartbeatServicePendingReceiver;


// Interface: Pacemaker
ash.heartd.mojom.Pacemaker = {};

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

// Legacy compatibility
ash.heartd.mojom.PacemakerPtr = ash.heartd.mojom.PacemakerRemote;
ash.heartd.mojom.PacemakerRequest = ash.heartd.mojom.PacemakerPendingReceiver;

