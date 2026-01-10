// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/font_cache_win.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FontCacheWin
content.mojom.mojom.FontCacheWin = {};

content.mojom.mojom.FontCacheWinPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FontCacheWinRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FontCacheWin';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FontCacheWinPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FontCacheWinRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FontCacheWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  preCacheFont(log_font) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FontCacheWin_PreCacheFont_ParamsSpec,
      null,
      [log_font]);
  }

  releaseCachedFonts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.FontCacheWin.getRemote = function() {
  let remote = new content.mojom.mojom.FontCacheWinRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FontCacheWin',
    'context');
  return remote.$;
};

// ParamsSpec for PreCacheFont
content.mojom.mojom.FontCacheWin_PreCacheFont_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FontCacheWin.PreCacheFont_Params',
      packedSize: 16,
      fields: [
        { name: 'log_font', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.LOGFONTSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleaseCachedFonts
content.mojom.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FontCacheWin.ReleaseCachedFonts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FontCacheWinPtr = content.mojom.mojom.FontCacheWinRemote;
content.mojom.mojom.FontCacheWinRequest = content.mojom.mojom.FontCacheWinPendingReceiver;

