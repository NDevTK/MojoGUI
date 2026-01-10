// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/font_prewarmer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: FontPrewarmer
chrome.mojom.FontPrewarmer = {};

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
      [font_names]);
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

// ParamsSpec for PrewarmFonts
chrome.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FontPrewarmer.PrewarmFonts_Params',
      packedSize: 16,
      fields: [
        { name: 'font_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.FontPrewarmerPtr = chrome.mojom.FontPrewarmerRemote;
chrome.mojom.FontPrewarmerRequest = chrome.mojom.FontPrewarmerPendingReceiver;


// Interface: RenderFrameFontFamilyAccessor
chrome.mojom.RenderFrameFontFamilyAccessor = {};

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
      []);
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

// ParamsSpec for GetFontFamilyNames
chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RenderFrameFontFamilyAccessor.GetFontFamilyNames_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RenderFrameFontFamilyAccessor.GetFontFamilyNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.RenderFrameFontFamilyAccessorPtr = chrome.mojom.RenderFrameFontFamilyAccessorRemote;
chrome.mojom.RenderFrameFontFamilyAccessorRequest = chrome.mojom.RenderFrameFontFamilyAccessorPendingReceiver;

