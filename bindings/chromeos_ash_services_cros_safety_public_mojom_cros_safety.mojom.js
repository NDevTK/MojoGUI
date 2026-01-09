// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};


// Enum: SafetyClassifierVerdict
ash.cros_safety.mojom.SafetyClassifierVerdict = {
  kPass: 0,
  kFailedText: 1,
  kFailedImage: 2,
};

// Enum: SafetyRuleset
ash.cros_safety.mojom.SafetyRuleset = {
  kMantis: 0,
};

// Interface: CloudSafetySession
ash.cros_safety.mojom.CloudSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.CloudSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CloudSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.CloudSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.CloudSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.mojom.CloudSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_safety.mojom.CloudSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.mojom.CloudSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CloudSafetySession',
    'context');
  return remote.$;
}};

// Legacy compatibility
ash.cros_safety.mojom.CloudSafetySessionPtr = ash.cros_safety.mojom.CloudSafetySessionRemote;
ash.cros_safety.mojom.CloudSafetySessionRequest = ash.cros_safety.mojom.CloudSafetySessionPendingReceiver;


// Interface: OnDeviceSafetySession
ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.OnDeviceSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.OnDeviceSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.OnDeviceSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.mojom.OnDeviceSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_safety.mojom.OnDeviceSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.mojom.OnDeviceSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.OnDeviceSafetySession',
    'context');
  return remote.$;
}};

// Legacy compatibility
ash.cros_safety.mojom.OnDeviceSafetySessionPtr = ash.cros_safety.mojom.OnDeviceSafetySessionRemote;
ash.cros_safety.mojom.OnDeviceSafetySessionRequest = ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver;

