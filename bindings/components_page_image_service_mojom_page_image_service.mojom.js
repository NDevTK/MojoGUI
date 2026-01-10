// Auto-generated MojoJS binding
// Source: chromium_src/components/page_image_service/mojom/page_image_service.mojom
// Module: page_image_service.mojom

'use strict';

// Module namespace
var page_image_service = page_image_service || {};
page_image_service.mojom = page_image_service.mojom || {};


// Enum: ClientId
page_image_service.mojom.ClientId = {
  Journeys: 0,
  JourneysSidePanel: 1,
  NtpRealbox: 2,
  NtpQuests: 3,
  Bookmarks: 4,
  NtpTabResumption: 5,
  HistoryEmbeddings: 6,
};
page_image_service.mojom.ClientIdSpec = { $: mojo.internal.Enum() };

// Struct: Options
page_image_service.mojom.OptionsSpec = {
  $: {
    structSpec: {
      name: 'page_image_service.mojom.Options',
      packedSize: 16,
      fields: [
        { name: 'suggest_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'optimization_guide_images', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ImageResult
page_image_service.mojom.ImageResultSpec = {
  $: {
    structSpec: {
      name: 'page_image_service.mojom.ImageResult',
      packedSize: 16,
      fields: [
        { name: 'image_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PageImageServiceHandler
page_image_service.mojom.PageImageServiceHandler = {};

page_image_service.mojom.PageImageServiceHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

page_image_service.mojom.PageImageServiceHandlerRemote = class {
  static get $interfaceName() {
    return 'page_image_service.mojom.PageImageServiceHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      page_image_service.mojom.PageImageServiceHandlerPendingReceiver,
      handle);
    this.$ = new page_image_service.mojom.PageImageServiceHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

page_image_service.mojom.PageImageServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPageImageUrl(client_id, page_url, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec,
      page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec,
      [client_id, page_url, options]);
  }

};

page_image_service.mojom.PageImageServiceHandler.getRemote = function() {
  let remote = new page_image_service.mojom.PageImageServiceHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'page_image_service.mojom.PageImageServiceHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetPageImageUrl
page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_image_service.mojom.PageImageServiceHandler.GetPageImageUrl_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: page_image_service.mojom.ClientIdSpec, nullable: false, minVersion: 0 },
        { name: 'page_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: page_image_service.mojom.OptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: page_image_service.mojom.ImageResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
page_image_service.mojom.PageImageServiceHandlerPtr = page_image_service.mojom.PageImageServiceHandlerRemote;
page_image_service.mojom.PageImageServiceHandlerRequest = page_image_service.mojom.PageImageServiceHandlerPendingReceiver;

