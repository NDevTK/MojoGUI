// Auto-generated MojoJS binding
// Source: chromium_src/components/page_image_service/mojom/page_image_service.mojom
// Module: page_image_service.mojom

'use strict';

// Module namespace
var page_image_service = page_image_service || {};
page_image_service.mojom = page_image_service.mojom || {};
var url = url || {};

page_image_service.mojom.ClientIdSpec = { $: mojo.internal.Enum() };
page_image_service.mojom.OptionsSpec = { $: {} };
page_image_service.mojom.ImageResultSpec = { $: {} };
page_image_service.mojom.PageImageServiceHandler = {};
page_image_service.mojom.PageImageServiceHandler.$interfaceName = 'page_image_service.mojom.PageImageServiceHandler';
page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec = { $: {} };
page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec = { $: {} };

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

// Struct: Options
mojo.internal.Struct(
    page_image_service.mojom.OptionsSpec, 'page_image_service.mojom.Options', [
      mojo.internal.StructField('suggest_images', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('optimization_guide_images', 0, 1, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ImageResult
mojo.internal.Struct(
    page_image_service.mojom.ImageResultSpec, 'page_image_service.mojom.ImageResult', [
      mojo.internal.StructField('image_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageImageServiceHandler
mojo.internal.Struct(
    page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec, 'page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_Params', [
      mojo.internal.StructField('client_id', 0, 0, page_image_service.mojom.ClientIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, page_image_service.mojom.OptionsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec, 'page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, page_image_service.mojom.ImageResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [client_id, page_url, options],
      false);
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

page_image_service.mojom.PageImageServiceHandlerPtr = page_image_service.mojom.PageImageServiceHandlerRemote;
page_image_service.mojom.PageImageServiceHandlerRequest = page_image_service.mojom.PageImageServiceHandlerPendingReceiver;

