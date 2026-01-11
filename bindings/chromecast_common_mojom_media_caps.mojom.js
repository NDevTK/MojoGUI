// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/media_caps.mojom
// Module: chromecast.media.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};

chromecast.media.mojom.CodecProfileLevelSpec = { $: {} };
chromecast.media.mojom.MediaCaps = {};
chromecast.media.mojom.MediaCaps.$interfaceName = 'chromecast.media.mojom.MediaCaps';
chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec = { $: {} };
chromecast.media.mojom.MediaCapsObserver = {};
chromecast.media.mojom.MediaCapsObserver.$interfaceName = 'chromecast.media.mojom.MediaCapsObserver';
chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec = { $: {} };

// Struct: CodecProfileLevel
mojo.internal.Struct(
    chromecast.media.mojom.CodecProfileLevelSpec, 'chromecast.media.mojom.CodecProfileLevel', [
      mojo.internal.StructField('codec', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('profile', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('level', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MediaCaps
mojo.internal.Struct(
    chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec, 'chromecast.media.mojom.MediaCaps_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.media.mojom.MediaCapsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.media.mojom.MediaCapsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.MediaCapsRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCaps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.MediaCapsPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.MediaCapsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
};

chromecast.media.mojom.MediaCapsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaCaps', [
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.media.mojom.MediaCaps.getRemote = function() {
  let remote = new chromecast.media.mojom.MediaCapsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCaps',
    'context');
  return remote.$;
};

chromecast.media.mojom.MediaCapsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaCaps', [
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
             decoder.decodeStructInline(chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.media.mojom.MediaCapsReceiver = chromecast.media.mojom.MediaCapsReceiver;

chromecast.media.mojom.MediaCapsPtr = chromecast.media.mojom.MediaCapsRemote;
chromecast.media.mojom.MediaCapsRequest = chromecast.media.mojom.MediaCapsPendingReceiver;


// Interface: MediaCapsObserver
mojo.internal.Struct(
    chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec, 'chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_Params', [
      mojo.internal.StructField('codec_profile_level', 0, 0, chromecast.media.mojom.CodecProfileLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.media.mojom.MediaCapsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.MediaCapsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCapsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.MediaCapsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.MediaCapsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addSupportedCodecProfileLevel(codec_profile_level) {
    return this.$.addSupportedCodecProfileLevel(codec_profile_level);
  }
};

chromecast.media.mojom.MediaCapsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaCapsObserver', [
      { explicit: null },
    ]);
  }

  addSupportedCodecProfileLevel(codec_profile_level) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec,
      null,
      [codec_profile_level],
      false);
  }

};

chromecast.media.mojom.MediaCapsObserver.getRemote = function() {
  let remote = new chromecast.media.mojom.MediaCapsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCapsObserver',
    'context');
  return remote.$;
};

chromecast.media.mojom.MediaCapsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaCapsObserver', [
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
             decoder.decodeStructInline(chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec.$.structSpec);
          const result = this.impl.addSupportedCodecProfileLevel(params.codec_profile_level);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.media.mojom.MediaCapsObserverReceiver = chromecast.media.mojom.MediaCapsObserverReceiver;

chromecast.media.mojom.MediaCapsObserverPtr = chromecast.media.mojom.MediaCapsObserverRemote;
chromecast.media.mojom.MediaCapsObserverRequest = chromecast.media.mojom.MediaCapsObserverPendingReceiver;

