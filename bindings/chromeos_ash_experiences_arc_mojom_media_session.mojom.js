// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/media_session.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var media_session = media_session || {};

arc.mojom.MediaSessionInstance = {};
arc.mojom.MediaSessionInstance.$interfaceName = 'arc.mojom.MediaSessionInstance';
arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec = { $: {} };
arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec = { $: {} };

// Interface: MediaSessionInstance
mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_EnableAudioFocus_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_DisableAudioFocus_Params', [
    ],
    [[0, 8]]);

arc.mojom.MediaSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MediaSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MediaSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MediaSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MediaSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableAudioFocus(service) {
    return this.$.enableAudioFocus(service);
  }
  disableAudioFocus() {
    return this.$.disableAudioFocus();
  }
};

arc.mojom.MediaSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaSessionInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  enableAudioFocus(service) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec,
      null,
      [service],
      false);
  }

  disableAudioFocus() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.MediaSessionInstance.getRemote = function() {
  let remote = new arc.mojom.MediaSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MediaSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.MediaSessionInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaSessionInstance', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec.$.structSpec);
          const result = this.impl.enableAudioFocus(params.service);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec.$.structSpec);
          const result = this.impl.disableAudioFocus();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.MediaSessionInstanceReceiver = arc.mojom.MediaSessionInstanceReceiver;

arc.mojom.MediaSessionInstancePtr = arc.mojom.MediaSessionInstanceRemote;
arc.mojom.MediaSessionInstanceRequest = arc.mojom.MediaSessionInstancePendingReceiver;

