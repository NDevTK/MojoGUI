// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: ScreenOrientation
device.mojom.ScreenOrientationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ScreenOrientationRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ScreenOrientationPendingReceiver,
      handle);
    this.$ = new device.mojom.ScreenOrientationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.ScreenOrientationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  lockOrientation(orientation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.ScreenOrientation_LockOrientation_ParamsSpec.$,
      device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec.$,
      [orientation]);
  }

  unlockOrientation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec.$,
      null,
      []);
  }

};

device.mojom.ScreenOrientation.getRemote = function() {
  let remote = new device.mojom.ScreenOrientationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientation',
    'context');
  return remote.$;
};

// ParamsSpec for LockOrientation
device.mojom.ScreenOrientation_LockOrientation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.LockOrientation_Params',
      packedSize: 16,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.LockOrientation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnlockOrientation
device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientation.UnlockOrientation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.ScreenOrientationPtr = device.mojom.ScreenOrientationRemote;
device.mojom.ScreenOrientationRequest = device.mojom.ScreenOrientationPendingReceiver;


// Interface: ScreenOrientationListener
device.mojom.ScreenOrientationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ScreenOrientationListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ScreenOrientationListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.ScreenOrientationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.ScreenOrientationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAutoRotateEnabledByUser() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec.$,
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec.$,
      []);
  }

};

device.mojom.ScreenOrientationListener.getRemote = function() {
  let remote = new device.mojom.ScreenOrientationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientationListener',
    'context');
  return remote.$;
};

// ParamsSpec for IsAutoRotateEnabledByUser
device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientationListener.IsAutoRotateEnabledByUser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.ScreenOrientationListener.IsAutoRotateEnabledByUser_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.ScreenOrientationListenerPtr = device.mojom.ScreenOrientationListenerRemote;
device.mojom.ScreenOrientationListenerRequest = device.mojom.ScreenOrientationListenerPendingReceiver;

