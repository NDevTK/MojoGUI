// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
// Module: shopping_service.mojom

'use strict';

// Module namespace
var shopping_service = shopping_service || {};
shopping_service.mojom = shopping_service.mojom || {};
var url = url || {};


// Enum: PriceBucket
shopping_service.mojom.mojom.PriceBucket = {
  kUnknown: 0,
  kLow: 1,
  kTypical: 2,
  kHigh: 3,
};
shopping_service.mojom.mojom.PriceBucketSpec = { $: mojo.internal.Enum() };

// Enum: UserFeedback
shopping_service.mojom.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};
shopping_service.mojom.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };

// Struct: PricePoint
shopping_service.mojom.mojom.PricePointSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.PricePoint',
      packedSize: 32,
      fields: [
        { name: 'date', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'price', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'formatted_price', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UrlInfo
shopping_service.mojom.mojom.UrlInfoSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.UrlInfo',
      packedSize: 48,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'favicon_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'thumbnail_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'previewText', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PriceInsightsInfo
shopping_service.mojom.mojom.PriceInsightsInfoSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.PriceInsightsInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProductSpecificationsDescriptionText
shopping_service.mojom.mojom.ProductSpecificationsDescriptionTextSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsDescriptionText',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.UrlInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProductSpecificationsOption
shopping_service.mojom.mojom.ProductSpecificationsOptionSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsOption',
      packedSize: 16,
      fields: [
        { name: 'descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProductSpecificationsDescription
shopping_service.mojom.mojom.ProductSpecificationsDescriptionSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsDescription',
      packedSize: 32,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'alt_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProductSpecificationsValue
shopping_service.mojom.mojom.ProductSpecificationsValueSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsValue',
      packedSize: 24,
      fields: [
        { name: 'specification_descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'summary', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProductSpecificationsProduct
shopping_service.mojom.mojom.ProductSpecificationsProductSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsProduct',
      packedSize: 56,
      fields: [
        { name: 'product_cluster_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'product_dimension_values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, shopping_service.mojom.ProductSpecificationsValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'summary', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec, false), nullable: false, minVersion: 0 },
        { name: 'buying_options_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ProductSpecificationsFeatureState
shopping_service.mojom.mojom.ProductSpecificationsFeatureStateSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsFeatureState',
      packedSize: 16,
      fields: [
        { name: 'is_syncing_tab_compare', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_load_full_page_ui', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_manage_sets', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_fetch_data', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_allowed_for_enterprise', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_quality_logging_allowed', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_signed_in', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProductSpecifications
shopping_service.mojom.mojom.ProductSpecificationsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecifications',
      packedSize: 24,
      fields: [
        { name: 'product_dimension_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'products', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.ProductSpecificationsProductSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ShoppingServiceHandlerFactory
shopping_service.mojom.mojom.ShoppingServiceHandlerFactory = {};

shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryPendingReceiver,
      handle);
    this.$ = new shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createShoppingServiceHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec,
      null,
      [handler]);
  }

};

shopping_service.mojom.mojom.ShoppingServiceHandlerFactory.getRemote = function() {
  let remote = new shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateShoppingServiceHandler
shopping_service.mojom.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandlerFactory.CreateShoppingServiceHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shopping_service.mojom.ShoppingServiceHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryPtr = shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRemote;
shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryRequest = shopping_service.mojom.mojom.ShoppingServiceHandlerFactoryPendingReceiver;


// Interface: ShoppingServiceHandler
shopping_service.mojom.mojom.ShoppingServiceHandler = {};

shopping_service.mojom.mojom.ShoppingServiceHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandlerRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shopping_service.mojom.mojom.ShoppingServiceHandlerPendingReceiver,
      handle);
    this.$ = new shopping_service.mojom.mojom.ShoppingServiceHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProductInfoForCurrentUrl() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec,
      []);
  }

  getProductInfoForUrl(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url]);
  }

  getProductInfoForUrls(urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [urls]);
  }

  getPriceInsightsInfoForCurrentUrl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      []);
  }

  getPriceInsightsInfoForUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [url]);
  }

  getProductSpecificationsForUrls(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [urls]);
  }

  getUrlInfosForProductTabs() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      []);
  }

  getUrlInfosForRecentlyViewedTabs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      []);
  }

  isShoppingListEligible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      []);
  }

  getPriceTrackingStatusForCurrentUrl() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      []);
  }

  openUrlInNewTab(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      [url]);
  }

  switchToOrOpenTab(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      [url]);
  }

  getAllProductSpecificationsSets() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      []);
  }

  getProductSpecificationsSetByUuid(uuid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [uuid]);
  }

  addProductSpecificationsSet(name, urls) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [name, urls]);
  }

  deleteProductSpecificationsSet(uuid) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      [uuid]);
  }

  setNameForProductSpecificationsSet(uuid, name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, name]);
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, urls]);
  }

  setProductSpecificationsUserFeedback(feedback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  getProductSpecificationsFeatureState() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec,
      shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      []);
  }

};

shopping_service.mojom.mojom.ShoppingServiceHandler.getRemote = function() {
  let remote = new shopping_service.mojom.mojom.ShoppingServiceHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetProductInfoForCurrentUrl
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfo', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProductInfoForUrl
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'productInfo', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetProductInfoForUrls
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(commerce.shared.mojom.ProductInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPriceInsightsInfoForCurrentUrl
shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'priceInsightsInfo', packedOffset: 0, packedBitOffset: 0, type: shopping_service.mojom.PriceInsightsInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPriceInsightsInfoForUrl
shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'priceInsightsInfo', packedOffset: 8, packedBitOffset: 0, type: shopping_service.mojom.PriceInsightsInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsForUrls
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsForUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productSpecs', packedOffset: 0, packedBitOffset: 0, type: shopping_service.mojom.ProductSpecificationsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUrlInfosForProductTabs
shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForProductTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForProductTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.UrlInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUrlInfosForRecentlyViewedTabs
shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForRecentlyViewedTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForRecentlyViewedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(shopping_service.mojom.UrlInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsShoppingListEligible
shopping_service.mojom.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.IsShoppingListEligible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.IsShoppingListEligible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPriceTrackingStatusForCurrentUrl
shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceTrackingStatusForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceTrackingStatusForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tracked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenUrlInNewTab
shopping_service.mojom.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.OpenUrlInNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SwitchToOrOpenTab
shopping_service.mojom.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SwitchToOrOpenTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllProductSpecificationsSets
shopping_service.mojom.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetAllProductSpecificationsSets_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetAllProductSpecificationsSets_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(commerce.shared.mojom.ProductSpecificationsSetSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsSetByUuid
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsSetByUuid_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsSetByUuid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddProductSpecificationsSet
shopping_service.mojom.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.AddProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.AddProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'created_set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteProductSpecificationsSet
shopping_service.mojom.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.DeleteProductSpecificationsSet_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNameForProductSpecificationsSet
shopping_service.mojom.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetNameForProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetNameForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUrlsForProductSpecificationsSet
shopping_service.mojom.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetUrlsForProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetUrlsForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetProductSpecificationsUserFeedback
shopping_service.mojom.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetProductSpecificationsUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: shopping_service.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsFeatureState
shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsFeatureState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: shopping_service.mojom.ProductSpecificationsFeatureStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
shopping_service.mojom.mojom.ShoppingServiceHandlerPtr = shopping_service.mojom.mojom.ShoppingServiceHandlerRemote;
shopping_service.mojom.mojom.ShoppingServiceHandlerRequest = shopping_service.mojom.mojom.ShoppingServiceHandlerPendingReceiver;

