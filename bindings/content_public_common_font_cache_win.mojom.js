// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/font_cache_win.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.FontCacheWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  preCacheFont(log_font) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FontCacheWin_PreCacheFont_ParamsSpec,
      content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec,
      [log_font],
      false);
  }

  releaseCachedFonts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PreCacheFont
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FontCacheWin_PreCacheFont_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreCacheFont (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReleaseCachedFonts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseCachedFonts (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FontCacheWin_PreCacheFont_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.preCacheFont');
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
          const params = decoder.decodeStructInline(content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.releaseCachedFonts');
          const result = this.impl.releaseCachedFonts();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FontCacheWinReceiver = content.mojom.FontCacheWinReceiver;

content.mojom.FontCacheWinPtr = content.mojom.FontCacheWinRemote;
content.mojom.FontCacheWinRequest = content.mojom.FontCacheWinPendingReceiver;

