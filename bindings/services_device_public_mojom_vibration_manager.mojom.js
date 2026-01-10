// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/vibration_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: VibrationManager
device.mojom.VibrationManager = {};

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
      null,
      [milliseconds]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.VibrationManager_Cancel_ParamsSpec,
      null,
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

// ParamsSpec for Vibrate
device.mojom.VibrationManager_Vibrate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VibrationManager.Vibrate_Params',
      packedSize: 16,
      fields: [
        { name: 'milliseconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
device.mojom.VibrationManager_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VibrationManager.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.VibrationManagerPtr = device.mojom.VibrationManagerRemote;
device.mojom.VibrationManagerRequest = device.mojom.VibrationManagerPendingReceiver;


// Interface: VibrationManagerListener
device.mojom.VibrationManagerListener = {};

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

// ParamsSpec for OnVibrate
device.mojom.VibrationManagerListener_OnVibrate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VibrationManagerListener.OnVibrate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.VibrationManagerListenerPtr = device.mojom.VibrationManagerListenerRemote;
device.mojom.VibrationManagerListenerRequest = device.mojom.VibrationManagerListenerPendingReceiver;

