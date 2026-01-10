// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/mall/mall_ui.mojom
// Module: ash.mall.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mall = ash.mall || {};
ash.mall.mojom = ash.mall.mojom || {};


// Interface: PageHandler
ash.mall.mojom.PageHandler = {};

ash.mall.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mall.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mall.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mall.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mall.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mall.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMallEmbedUrl(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec,
      ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec,
      [path]);
  }

};

ash.mall.mojom.PageHandler.getRemote = function() {
  let remote = new ash.mall.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mall.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetMallEmbedUrl
ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec = {
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

ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mall.mojom.PageHandlerPtr = ash.mall.mojom.PageHandlerRemote;
ash.mall.mojom.PageHandlerRequest = ash.mall.mojom.PageHandlerPendingReceiver;

