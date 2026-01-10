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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prewarmFonts(params.font_names);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

chrome.mojom.RenderFrameFontFamilyAccessorReceiver = chrome.mojom.RenderFrameFontFamilyAccessorReceiver;

chrome.mojom.RenderFrameFontFamilyAccessorPtr = chrome.mojom.RenderFrameFontFamilyAccessorRemote;
chrome.mojom.RenderFrameFontFamilyAccessorRequest = chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver;

