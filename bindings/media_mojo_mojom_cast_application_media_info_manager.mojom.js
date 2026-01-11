// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cast_application_media_info_manager.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.CastApplicationMediaInfoSpec = { $: {} };
media.mojom.CastApplicationMediaInfoManager = {};
media.mojom.CastApplicationMediaInfoManager.$interfaceName = 'media.mojom.CastApplicationMediaInfoManager';
media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec = { $: {} };
media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec = { $: {} };

// Struct: CastApplicationMediaInfo
mojo.internal.Struct(
    media.mojom.CastApplicationMediaInfoSpec, 'media.mojom.CastApplicationMediaInfo', [
      mojo.internal.StructField('application_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mixer_audio_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_audio_only_session', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CastApplicationMediaInfoManager
mojo.internal.Struct(
    media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec, 'media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec, 'media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParams', [
      mojo.internal.StructField('cast_application_media_info', 0, 0, media.mojom.CastApplicationMediaInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.CastApplicationMediaInfoManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CastApplicationMediaInfoManagerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CastApplicationMediaInfoManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CastApplicationMediaInfoManagerPendingReceiver,
      handle);
    this.$ = new media.mojom.CastApplicationMediaInfoManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCastApplicationMediaInfo() {
    return this.$.getCastApplicationMediaInfo();
  }
};

media.mojom.CastApplicationMediaInfoManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastApplicationMediaInfoManager', [
      { explicit: null },
    ]);
  }

  getCastApplicationMediaInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec,
      media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.CastApplicationMediaInfoManager.getRemote = function() {
  let remote = new media.mojom.CastApplicationMediaInfoManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CastApplicationMediaInfoManager',
    'context');
  return remote.$;
};

media.mojom.CastApplicationMediaInfoManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastApplicationMediaInfoManager', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getCastApplicationMediaInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CastApplicationMediaInfoManager_GetCastApplicationMediaInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.CastApplicationMediaInfoManagerReceiver = media.mojom.CastApplicationMediaInfoManagerReceiver;

media.mojom.CastApplicationMediaInfoManagerPtr = media.mojom.CastApplicationMediaInfoManagerRemote;
media.mojom.CastApplicationMediaInfoManagerRequest = media.mojom.CastApplicationMediaInfoManagerPendingReceiver;

