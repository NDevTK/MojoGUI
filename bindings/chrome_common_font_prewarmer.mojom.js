// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/font_prewarmer.mojom
// Module: chrome.mojom

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
  prewarmFonts(font_names) {
    return this.$.prewarmFonts(font_names);
  }
};

chrome.mojom.FontPrewarmerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FontPrewarmer', [
      { explicit: null },
    ]);
  }

  prewarmFonts(font_names) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FontPrewarmer', [
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
             decoder.decodeStructInline(chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec.$.structSpec);
          const result = this.impl.prewarmFonts(params.font_names);
          break;
        }
      }
      } catch (err) {}
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
  getFontFamilyNames() {
    return this.$.getFontFamilyNames();
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderFrameFontFamilyAccessor', [
      { explicit: null },
    ]);
  }

  getFontFamilyNames() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('RenderFrameFontFamilyAccessor', [
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
             decoder.decodeStructInline(chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorReceiver = chrome.mojom.RenderFrameFontFamilyAccessorReceiver;

chrome.mojom.RenderFrameFontFamilyAccessorPtr = chrome.mojom.RenderFrameFontFamilyAccessorRemote;
chrome.mojom.RenderFrameFontFamilyAccessorRequest = chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver;

