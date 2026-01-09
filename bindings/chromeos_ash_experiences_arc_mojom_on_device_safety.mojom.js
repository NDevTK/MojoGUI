// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kSafetyServiceNotFound: 1,
  kBindSafetyServiceError: 2,
};

// Interface: OnDeviceSafetyHost
arc.mojom.OnDeviceSafetyHost = {};

arc.mojom.OnDeviceSafetyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.OnDeviceSafetyHost.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.OnDeviceSafetyHostPtr = arc.mojom.OnDeviceSafetyHostRemote;
arc.mojom.OnDeviceSafetyHostRequest = arc.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
arc.mojom.OnDeviceSafetyInstance = {};

arc.mojom.OnDeviceSafetyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.OnDeviceSafetyInstance.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.OnDeviceSafetyInstancePtr = arc.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.OnDeviceSafetyInstancePendingReceiver;

