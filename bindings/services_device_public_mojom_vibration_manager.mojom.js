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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    device.mojom.VibrationManager_Cancel_ParamsSpec, 'device.mojom.VibrationManager_Cancel_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    device.mojom.VibrationManager_Cancel_ResponseParamsSpec, 'device.mojom.VibrationManager_Cancel_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      [milliseconds]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.VibrationManager_Cancel_ParamsSpec,
      device.mojom.VibrationManager_Cancel_ResponseParamsSpec,
      []);
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

device.mojom.VibrationManagerPtr = device.mojom.VibrationManagerRemote;
device.mojom.VibrationManagerRequest = device.mojom.VibrationManagerPendingReceiver;


// Interface: VibrationManagerListener
mojo.internal.Struct(
    device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec, 'device.mojom.VibrationManagerListener_OnVibrate_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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
      []);
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

device.mojom.VibrationManagerListenerPtr = device.mojom.VibrationManagerListenerRemote;
device.mojom.VibrationManagerListenerRequest = device.mojom.VibrationManagerListenerPendingReceiver;

