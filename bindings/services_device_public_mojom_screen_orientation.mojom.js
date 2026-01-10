// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: ScreenOrientation
device.mojom.mojom.ScreenOrientation = {};

device.mojom.mojom.ScreenOrientationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.ScreenOrientationRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.ScreenOrientationPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.ScreenOrientationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.ScreenOrientationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  lockOrientation(orientation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.ScreenOrientation_LockOrientation_ParamsSpec,
      device.mojom.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec,
      [orientation]);
  }

  unlockOrientation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.ScreenOrientation.getRemote = function() {
  let remote = new device.mojom.mojom.ScreenOrientationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientation',
    'context');
  return remote.$;
};

// ParamsSpec for LockOrientation
device.mojom.mojom.ScreenOrientation_LockOrientation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.LockOrientation_Params',
      packedSize: 16,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: device.mojom.ScreenOrientationLockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.LockOrientation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.ScreenOrientationLockResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnlockOrientation
device.mojom.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.UnlockOrientation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.ScreenOrientationPtr = device.mojom.mojom.ScreenOrientationRemote;
device.mojom.mojom.ScreenOrientationRequest = device.mojom.mojom.ScreenOrientationPendingReceiver;


// Interface: ScreenOrientationListener
device.mojom.mojom.ScreenOrientationListener = {};

device.mojom.mojom.ScreenOrientationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.ScreenOrientationListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.ScreenOrientationListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.ScreenOrientationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.ScreenOrientationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAutoRotateEnabledByUser() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec,
      device.mojom.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec,
      []);
  }

};

device.mojom.mojom.ScreenOrientationListener.getRemote = function() {
  let remote = new device.mojom.mojom.ScreenOrientationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientationListener',
    'context');
  return remote.$;
};

// ParamsSpec for IsAutoRotateEnabledByUser
device.mojom.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientationListener.IsAutoRotateEnabledByUser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientationListener.IsAutoRotateEnabledByUser_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.ScreenOrientationListenerPtr = device.mojom.mojom.ScreenOrientationListenerRemote;
device.mojom.mojom.ScreenOrientationListenerRequest = device.mojom.mojom.ScreenOrientationListenerPendingReceiver;

