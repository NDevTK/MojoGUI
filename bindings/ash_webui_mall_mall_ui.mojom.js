// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/mall/mall_ui.mojom
// Module: ash.mall.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mall = ash.mall || {};
ash.mall.mall.mojom = ash.mall.mall.mojom || {};
var url = url || {};


// Interface: PageHandler
ash.mall.mall.mojom.mojom.PageHandler = {};

ash.mall.mall.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mall.mall.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mall.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mall.mall.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mall.mall.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mall.mall.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMallEmbedUrl(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mall.mall.mojom.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec,
      ash.mall.mall.mojom.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec,
      [path]);
  }

};

ash.mall.mall.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.mall.mall.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mall.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetMallEmbedUrl
ash.mall.mall.mojom.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mall.mojom.PageHandler.GetMallEmbedUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mall.mall.mojom.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mall.mojom.PageHandler.GetMallEmbedUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mall.mall.mojom.mojom.PageHandlerPtr = ash.mall.mall.mojom.mojom.PageHandlerRemote;
ash.mall.mall.mojom.mojom.PageHandlerRequest = ash.mall.mall.mojom.mojom.PageHandlerPendingReceiver;

