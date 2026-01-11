// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/device_notifications.mojom
// Module: audio.mojom

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
  devicesChanged() {
    return this.$.devicesChanged();
  }
};

audio.mojom.DeviceListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceListener', [
      { explicit: null },
    ]);
  }

  devicesChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceListener', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.DeviceListener_DevicesChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.DeviceListener_DevicesChanged_ParamsSpec.$.structSpec);
          const result = this.impl.devicesChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

audio.mojom.DeviceListenerReceiver = audio.mojom.DeviceListenerReceiver;

audio.mojom.DeviceListenerPtr = audio.mojom.DeviceListenerRemote;
audio.mojom.DeviceListenerRequest = audio.mojom.DeviceListenerPendingReceiver;


// Interface: DeviceNotifier
mojo.internal.Struct(
    audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec, 'audio.mojom.DeviceNotifier_RegisterListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(audio.mojom.DeviceListenerRemote), null, false, 0, undefined),
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
  registerListener(listener) {
    return this.$.registerListener(listener);
  }
};

audio.mojom.DeviceNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceNotifier', [
      { explicit: null },
    ]);
  }

  registerListener(listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceNotifier', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.DeviceNotifier_RegisterListener_ParamsSpec.$.structSpec);
          const result = this.impl.registerListener(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

audio.mojom.DeviceNotifierReceiver = audio.mojom.DeviceNotifierReceiver;

audio.mojom.DeviceNotifierPtr = audio.mojom.DeviceNotifierRemote;
audio.mojom.DeviceNotifierRequest = audio.mojom.DeviceNotifierPendingReceiver;

