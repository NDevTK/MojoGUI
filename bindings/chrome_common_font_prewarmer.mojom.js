// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/font_prewarmer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.FontPrewarmer = {};
chrome.mojom.FontPrewarmer.$interfaceName = 'chrome.mojom.FontPrewarmer';
chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec = { $: {} };
chrome.mojom.RenderFrameFontFamilyAccessor = {};
chrome.mojom.RenderFrameFontFamilyAccessor.$interfaceName = 'chrome.mojom.RenderFrameFontFamilyAccessor';
chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec = { $: {} };
chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec = { $: {} };

// Interface: FontPrewarmer
mojo.internal.Struct(
    chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec, 'chrome.mojom.FontPrewarmer_PrewarmFonts_Params', [
      mojo.internal.StructField('font_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.FontPrewarmerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.FontPrewarmerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.FontPrewarmer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.FontPrewarmerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.FontPrewarmerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.FontPrewarmerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prewarmFonts(font_names) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec,
      null,
      [font_names],
      false);
  }

};

chrome.mojom.FontPrewarmer.getRemote = function() {
  let remote = new chrome.mojom.FontPrewarmerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.FontPrewarmer',
    'context');
  return remote.$;
};

chrome.mojom.FontPrewarmerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PrewarmFonts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrewarmFonts (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prewarmFonts');
          const result = this.impl.prewarmFonts(params.font_names);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.FontPrewarmerReceiver = chrome.mojom.FontPrewarmerReceiver;

chrome.mojom.FontPrewarmerPtr = chrome.mojom.FontPrewarmerRemote;
chrome.mojom.FontPrewarmerRequest = chrome.mojom.FontPrewarmerPendingReceiver;


// Interface: RenderFrameFontFamilyAccessor
mojo.internal.Struct(
    chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec, 'chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec, 'chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParams', [
      mojo.internal.StructField('font_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RenderFrameFontFamilyAccessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.RenderFrameFontFamilyAccessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFontFamilyNames() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec,
      chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec,
      [],
      false);
  }

};

chrome.mojom.RenderFrameFontFamilyAccessor.getRemote = function() {
  let remote = new chrome.mojom.RenderFrameFontFamilyAccessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RenderFrameFontFamilyAccessor',
    'context');
  return remote.$;
};

chrome.mojom.RenderFrameFontFamilyAccessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetFontFamilyNames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFontFamilyNames (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFontFamilyNames');
          const result = this.impl.getFontFamilyNames();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorReceiver = chrome.mojom.RenderFrameFontFamilyAccessorReceiver;

chrome.mojom.RenderFrameFontFamilyAccessorPtr = chrome.mojom.RenderFrameFontFamilyAccessorRemote;
chrome.mojom.RenderFrameFontFamilyAccessorRequest = chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver;

