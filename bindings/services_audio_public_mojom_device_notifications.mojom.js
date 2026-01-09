// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/device_notifications.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: DeviceListener
audio.mojom.DeviceListener = {};

audio.mojom.DeviceListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.DeviceListenerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DeviceListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.DeviceListenerPendingReceiver,
      handle);
    this.$ = new audio.mojom.DeviceListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.DeviceListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  devicesChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.DeviceListener_DevicesChanged_ParamsSpec,
      null,
      []);
  }

};

audio.mojom.DeviceListener.getRemote = function() {
  let remote = new audio.mojom.DeviceListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DeviceListener',
    'context');
  return remote.$;
};

// ParamsSpec for DevicesChanged
audio.mojom.DeviceListener_DevicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DeviceListener.DevicesChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
audio.mojom.DeviceListenerPtr = audio.mojom.DeviceListenerRemote;
audio.mojom.DeviceListenerRequest = audio.mojom.DeviceListenerPendingReceiver;


// Interface: DeviceNotifier
audio.mojom.DeviceNotifier = {};

audio.mojom.DeviceNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.DeviceNotifierRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DeviceNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.DeviceNotifierPendingReceiver,
      handle);
    this.$ = new audio.mojom.DeviceNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.DeviceNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerListener(listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec,
      null,
      [listener]);
  }

};

audio.mojom.DeviceNotifier.getRemote = function() {
  let remote = new audio.mojom.DeviceNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DeviceNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterListener
audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DeviceNotifier.RegisterListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
audio.mojom.DeviceNotifierPtr = audio.mojom.DeviceNotifierRemote;
audio.mojom.DeviceNotifierRequest = audio.mojom.DeviceNotifierPendingReceiver;

