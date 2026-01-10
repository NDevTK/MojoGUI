// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/device_notifications.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};

audio.mojom.DeviceListener = {};
audio.mojom.DeviceListener.$interfaceName = 'audio.mojom.DeviceListener';
audio.mojom.DeviceListener_DevicesChanged_ParamsSpec = { $: {} };
audio.mojom.DeviceNotifier = {};
audio.mojom.DeviceNotifier.$interfaceName = 'audio.mojom.DeviceNotifier';
audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec = { $: {} };

// Interface: DeviceListener
mojo.internal.Struct(
    audio.mojom.DeviceListener_DevicesChanged_ParamsSpec, 'audio.mojom.DeviceListener_DevicesChanged_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

audio.mojom.DeviceListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = audio.mojom.DeviceListener_DevicesChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.devicesChanged();
          break;
        }
      }
    });
  }
};

audio.mojom.DeviceListenerReceiver = audio.mojom.DeviceListenerReceiver;

audio.mojom.DeviceListenerPtr = audio.mojom.DeviceListenerRemote;
audio.mojom.DeviceListenerRequest = audio.mojom.DeviceListenerPendingReceiver;


// Interface: DeviceNotifier
mojo.internal.Struct(
    audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec, 'audio.mojom.DeviceNotifier_RegisterListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(audio.mojom.DeviceListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [listener],
      false);
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

audio.mojom.DeviceNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerListener(params.listener);
          break;
        }
      }
    });
  }
};

audio.mojom.DeviceNotifierReceiver = audio.mojom.DeviceNotifierReceiver;

audio.mojom.DeviceNotifierPtr = audio.mojom.DeviceNotifierRemote;
audio.mojom.DeviceNotifierRequest = audio.mojom.DeviceNotifierPendingReceiver;

