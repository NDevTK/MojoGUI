// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/font_cache_win.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.FontCacheWin = {};
content.mojom.FontCacheWin.$interfaceName = 'content.mojom.FontCacheWin';
content.mojom.FontCacheWin_PreCacheFont_ParamsSpec = { $: {} };
content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec = { $: {} };
content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec = { $: {} };

// Interface: FontCacheWin
mojo.internal.Struct(
    content.mojom.FontCacheWin_PreCacheFont_ParamsSpec, 'content.mojom.FontCacheWin_PreCacheFont_Params', [
      mojo.internal.StructField('log_font', 0, 0, mojo_base.mojom.LOGFONTSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec, 'content.mojom.FontCacheWin_PreCacheFont_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec, 'content.mojom.FontCacheWin_ReleaseCachedFonts_Params', [
    ],
    [[0, 8]]);

content.mojom.FontCacheWinPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FontCacheWinRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FontCacheWin';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FontCacheWinPendingReceiver,
      handle);
    this.$ = new content.mojom.FontCacheWinRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  preCacheFont(log_font) {
    return this.$.preCacheFont(log_font);
  }
  releaseCachedFonts() {
    return this.$.releaseCachedFonts();
  }
};

content.mojom.FontCacheWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FontCacheWin', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  preCacheFont(log_font) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.FontCacheWin_PreCacheFont_ParamsSpec,
      content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec,
      [log_font],
      false);
  }

  releaseCachedFonts() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec,
      null,
      [],
      false);
  }

};

content.mojom.FontCacheWin.getRemote = function() {
  let remote = new content.mojom.FontCacheWinRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FontCacheWin',
    'context');
  return remote.$;
};

content.mojom.FontCacheWinReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FontCacheWin', [
      { explicit: null },
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
             decoder.decodeStructInline(content.mojom.FontCacheWin_PreCacheFont_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FontCacheWin_PreCacheFont_ParamsSpec.$.structSpec);
          const result = this.impl.preCacheFont(params.log_font);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec.$.structSpec);
          const result = this.impl.releaseCachedFonts();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.FontCacheWinReceiver = content.mojom.FontCacheWinReceiver;

content.mojom.FontCacheWinPtr = content.mojom.FontCacheWinRemote;
content.mojom.FontCacheWinRequest = content.mojom.FontCacheWinPendingReceiver;

