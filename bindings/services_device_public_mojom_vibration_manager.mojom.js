// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/vibration_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.VibrationManager = {};
device.mojom.VibrationManager.$interfaceName = 'device.mojom.VibrationManager';
device.mojom.VibrationManager_Vibrate_ParamsSpec = { $: {} };
device.mojom.VibrationManager_Vibrate_ResponseParamsSpec = { $: {} };
device.mojom.VibrationManager_Cancel_ParamsSpec = { $: {} };
device.mojom.VibrationManager_Cancel_ResponseParamsSpec = { $: {} };
device.mojom.VibrationManagerListener = {};
device.mojom.VibrationManagerListener.$interfaceName = 'device.mojom.VibrationManagerListener';
device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec = { $: {} };

// Interface: VibrationManager
mojo.internal.Struct(
    device.mojom.VibrationManager_Vibrate_ParamsSpec, 'device.mojom.VibrationManager_Vibrate_Params', [
      mojo.internal.StructField('milliseconds', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.VibrationManager_Vibrate_ResponseParamsSpec, 'device.mojom.VibrationManager_Vibrate_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.VibrationManager_Cancel_ParamsSpec, 'device.mojom.VibrationManager_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.VibrationManager_Cancel_ResponseParamsSpec, 'device.mojom.VibrationManager_Cancel_ResponseParams', [
    ],
    [[0, 8]]);

device.mojom.VibrationManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.VibrationManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VibrationManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.VibrationManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.VibrationManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.VibrationManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  vibrate(milliseconds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.VibrationManager_Vibrate_ParamsSpec,
      device.mojom.VibrationManager_Vibrate_ResponseParamsSpec,
      [milliseconds],
      false);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.VibrationManager_Cancel_ParamsSpec,
      device.mojom.VibrationManager_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.VibrationManager.getRemote = function() {
  let remote = new device.mojom.VibrationManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VibrationManager',
    'context');
  return remote.$;
};

device.mojom.VibrationManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.VibrationManager_Vibrate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.vibrate(params.milliseconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VibrationManager_Vibrate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.VibrationManager_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.VibrationManager_Cancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.VibrationManagerReceiver = device.mojom.VibrationManagerReceiver;

device.mojom.VibrationManagerPtr = device.mojom.VibrationManagerRemote;
device.mojom.VibrationManagerRequest = device.mojom.VibrationManagerPendingReceiver;


// Interface: VibrationManagerListener
mojo.internal.Struct(
    device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec, 'device.mojom.VibrationManagerListener_OnVibrate_Params', [
    ],
    [[0, 8]]);

device.mojom.VibrationManagerListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.VibrationManagerListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.VibrationManagerListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.VibrationManagerListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.VibrationManagerListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.VibrationManagerListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVibrate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.VibrationManagerListener.getRemote = function() {
  let remote = new device.mojom.VibrationManagerListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.VibrationManagerListener',
    'context');
  return remote.$;
};

device.mojom.VibrationManagerListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVibrate();
          break;
        }
      }
    });
  }
};

device.mojom.VibrationManagerListenerReceiver = device.mojom.VibrationManagerListenerReceiver;

device.mojom.VibrationManagerListenerPtr = device.mojom.VibrationManagerListenerRemote;
device.mojom.VibrationManagerListenerRequest = device.mojom.VibrationManagerListenerPendingReceiver;

