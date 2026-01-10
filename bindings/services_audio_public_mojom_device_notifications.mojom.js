// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/device_notifications.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: DeviceListener
audio.mojom.mojom.DeviceListener = {};

audio.mojom.mojom.DeviceListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.mojom.DeviceListenerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DeviceListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.mojom.DeviceListenerPendingReceiver,
      handle);
    this.$ = new audio.mojom.mojom.DeviceListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.mojom.DeviceListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  devicesChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.mojom.DeviceListener_DevicesChanged_ParamsSpec,
      null,
      []);
  }

};

audio.mojom.mojom.DeviceListener.getRemote = function() {
  let remote = new audio.mojom.mojom.DeviceListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DeviceListener',
    'context');
  return remote.$;
};

// ParamsSpec for DevicesChanged
audio.mojom.mojom.DeviceListener_DevicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DeviceListener.DevicesChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
audio.mojom.mojom.DeviceListenerPtr = audio.mojom.mojom.DeviceListenerRemote;
audio.mojom.mojom.DeviceListenerRequest = audio.mojom.mojom.DeviceListenerPendingReceiver;


// Interface: DeviceNotifier
audio.mojom.mojom.DeviceNotifier = {};

audio.mojom.mojom.DeviceNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.mojom.DeviceNotifierRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DeviceNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.mojom.DeviceNotifierPendingReceiver,
      handle);
    this.$ = new audio.mojom.mojom.DeviceNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.mojom.DeviceNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerListener(listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.mojom.DeviceNotifier_RegisterListener_ParamsSpec,
      null,
      [listener]);
  }

};

audio.mojom.mojom.DeviceNotifier.getRemote = function() {
  let remote = new audio.mojom.mojom.DeviceNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DeviceNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterListener
audio.mojom.mojom.DeviceNotifier_RegisterListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DeviceNotifier.RegisterListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
audio.mojom.mojom.DeviceNotifierPtr = audio.mojom.mojom.DeviceNotifierRemote;
audio.mojom.mojom.DeviceNotifierRequest = audio.mojom.mojom.DeviceNotifierPendingReceiver;

