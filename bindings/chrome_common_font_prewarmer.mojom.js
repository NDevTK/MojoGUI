// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/font_prewarmer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: FontPrewarmer
chrome.mojom.mojom.FontPrewarmer = {};

chrome.mojom.mojom.FontPrewarmerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.FontPrewarmerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.FontPrewarmer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.FontPrewarmerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.FontPrewarmerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.FontPrewarmerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prewarmFonts(font_names) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec,
      null,
      [font_names]);
  }

};

chrome.mojom.mojom.FontPrewarmer.getRemote = function() {
  let remote = new chrome.mojom.mojom.FontPrewarmerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.FontPrewarmer',
    'context');
  return remote.$;
};

// ParamsSpec for PrewarmFonts
chrome.mojom.mojom.FontPrewarmer_PrewarmFonts_ParamsSpec = {
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
chrome.mojom.mojom.FontPrewarmerPtr = chrome.mojom.mojom.FontPrewarmerRemote;
chrome.mojom.mojom.FontPrewarmerRequest = chrome.mojom.mojom.FontPrewarmerPendingReceiver;


// Interface: RenderFrameFontFamilyAccessor
chrome.mojom.mojom.RenderFrameFontFamilyAccessor = {};

chrome.mojom.mojom.RenderFrameFontFamilyAccessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.RenderFrameFontFamilyAccessorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RenderFrameFontFamilyAccessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.RenderFrameFontFamilyAccessorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.RenderFrameFontFamilyAccessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.RenderFrameFontFamilyAccessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFontFamilyNames() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec,
      chrome.mojom.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec,
      []);
  }

};

chrome.mojom.mojom.RenderFrameFontFamilyAccessor.getRemote = function() {
  let remote = new chrome.mojom.mojom.RenderFrameFontFamilyAccessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RenderFrameFontFamilyAccessor',
    'context');
  return remote.$;
};

// ParamsSpec for GetFontFamilyNames
chrome.mojom.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ParamsSpec = {
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

chrome.mojom.mojom.RenderFrameFontFamilyAccessor_GetFontFamilyNames_ResponseParamsSpec = {
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
chrome.mojom.mojom.RenderFrameFontFamilyAccessorPtr = chrome.mojom.mojom.RenderFrameFontFamilyAccessorRemote;
chrome.mojom.mojom.RenderFrameFontFamilyAccessorRequest = chrome.mojom.mojom.RenderFrameFontFamilyAccessorPendingReceiver;

