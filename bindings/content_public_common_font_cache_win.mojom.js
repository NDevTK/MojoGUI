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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.FontCacheWin_PreCacheFont_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preCacheFont(params.log_font);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.FontCacheWin_PreCacheFont_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = content.mojom.FontCacheWin_ReleaseCachedFonts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.releaseCachedFonts();
          break;
        }
      }
    });
  }
};

content.mojom.FontCacheWinReceiver = content.mojom.FontCacheWinReceiver;

content.mojom.FontCacheWinPtr = content.mojom.FontCacheWinRemote;
content.mojom.FontCacheWinRequest = content.mojom.FontCacheWinPendingReceiver;

