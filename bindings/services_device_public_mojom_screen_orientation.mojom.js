// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.ScreenOrientation = {};
device.mojom.ScreenOrientation.$interfaceName = 'device.mojom.ScreenOrientation';
device.mojom.ScreenOrientation_LockOrientation_ParamsSpec = { $: {} };
device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec = { $: {} };
device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec = { $: {} };
device.mojom.ScreenOrientationListener = {};
device.mojom.ScreenOrientationListener.$interfaceName = 'device.mojom.ScreenOrientationListener';
device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec = { $: {} };
device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec = { $: {} };

// Interface: ScreenOrientation
mojo.internal.Struct(
    device.mojom.ScreenOrientation_LockOrientation_ParamsSpec, 'device.mojom.ScreenOrientation_LockOrientation_Params', [
      mojo.internal.StructField('orientation', 0, 0, device.mojom.ScreenOrientationLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec, 'device.mojom.ScreenOrientation_LockOrientation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.ScreenOrientationLockResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec, 'device.mojom.ScreenOrientation_UnlockOrientation_Params', [
    ],
    [[0, 8]]);

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
      device.mojom.ScreenOrientation_LockOrientation_ParamsSpec,
      device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec,
      [orientation],
      false);
  }

  unlockOrientation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec,
      null,
      [],
      false);
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

device.mojom.ScreenOrientationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.ScreenOrientation_LockOrientation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lockOrientation(params.orientation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unlockOrientation();
          break;
        }
      }
    });
  }
};

device.mojom.ScreenOrientationReceiver = device.mojom.ScreenOrientationReceiver;

device.mojom.ScreenOrientationPtr = device.mojom.ScreenOrientationRemote;
device.mojom.ScreenOrientationRequest = device.mojom.ScreenOrientationPendingReceiver;


// Interface: ScreenOrientationListener
mojo.internal.Struct(
    device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec, 'device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec, 'device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec,
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec,
      [],
      false);
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

device.mojom.ScreenOrientationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isAutoRotateEnabledByUser();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.ScreenOrientationListenerReceiver = device.mojom.ScreenOrientationListenerReceiver;

device.mojom.ScreenOrientationListenerPtr = device.mojom.ScreenOrientationListenerRemote;
device.mojom.ScreenOrientationListenerRequest = device.mojom.ScreenOrientationListenerPendingReceiver;

