// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
// Module: shopping_service.mojom

'use strict';

// Module namespace
var shopping_service = shopping_service || {};
shopping_service.mojom = shopping_service.mojom || {};


// Enum: PriceBucket
shopping_service.mojom.PriceBucket = {
  kUnknown: 0,
  kLow: 1,
  kTypical: 2,
  kHigh: 3,
};

// Enum: UserFeedback
shopping_service.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};

// Struct: PricePoint
shopping_service.mojom.PricePointSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.PricePoint',
      packedSize: 32,
      fields: [
        { name: 'date', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'price', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'formatted_price', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UrlInfo
shopping_service.mojom.UrlInfoSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.UrlInfo',
      packedSize: 48,
      fields: [
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'favicon_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'thumbnail_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'previewText', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PriceInsightsInfo
shopping_service.mojom.PriceInsightsInfoSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.PriceInsightsInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsDescriptionText
shopping_service.mojom.ProductSpecificationsDescriptionTextSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsDescriptionText',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsOption
shopping_service.mojom.ProductSpecificationsOptionSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsOption',
      packedSize: 16,
      fields: [
        { name: 'descriptions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsDescription
shopping_service.mojom.ProductSpecificationsDescriptionSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsDescription',
      packedSize: 32,
      fields: [
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alt_text', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsValue
shopping_service.mojom.ProductSpecificationsValueSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsValue',
      packedSize: 24,
      fields: [
        { name: 'specification_descriptions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'summary', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsProduct
shopping_service.mojom.ProductSpecificationsProductSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsProduct',
      packedSize: 56,
      fields: [
        { name: 'product_cluster_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'image_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'product_dimension_values', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'summary', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'buying_options_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsFeatureState
shopping_service.mojom.ProductSpecificationsFeatureStateSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecificationsFeatureState',
      packedSize: 16,
      fields: [
        { name: 'is_syncing_tab_compare', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'can_load_full_page_ui', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'can_manage_sets', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'can_fetch_data', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_allowed_for_enterprise', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'is_quality_logging_allowed', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_signed_in', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecifications
shopping_service.mojom.ProductSpecificationsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ProductSpecifications',
      packedSize: 24,
      fields: [
        { name: 'product_dimension_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'products', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ShoppingServiceHandlerFactory
shopping_service.mojom.ShoppingServiceHandlerFactory = {};

shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shopping_service.mojom.ShoppingServiceHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver,
      handle);
    this.$ = new shopping_service.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shopping_service.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createShoppingServiceHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec,
      null,
      [handler]);
  }

};

shopping_service.mojom.ShoppingServiceHandlerFactory.getRemote = function() {
  let remote = new shopping_service.mojom.ShoppingServiceHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateShoppingServiceHandler
shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandlerFactory.CreateShoppingServiceHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shopping_service.mojom.ShoppingServiceHandlerFactoryPtr = shopping_service.mojom.ShoppingServiceHandlerFactoryRemote;
shopping_service.mojom.ShoppingServiceHandlerFactoryRequest = shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver;


// Interface: ShoppingServiceHandler
shopping_service.mojom.ShoppingServiceHandler = {};

shopping_service.mojom.ShoppingServiceHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shopping_service.mojom.ShoppingServiceHandlerRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shopping_service.mojom.ShoppingServiceHandlerPendingReceiver,
      handle);
    this.$ = new shopping_service.mojom.ShoppingServiceHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shopping_service.mojom.ShoppingServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProductInfoForCurrentUrl() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec,
      []);
  }

  getProductInfoForUrl(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url]);
  }

  getProductInfoForUrls(urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [urls]);
  }

  getPriceInsightsInfoForCurrentUrl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      []);
  }

  getPriceInsightsInfoForUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [url]);
  }

  getProductSpecificationsForUrls(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [urls]);
  }

  getUrlInfosForProductTabs() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      []);
  }

  getUrlInfosForRecentlyViewedTabs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      []);
  }

  isShoppingListEligible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      []);
  }

  getPriceTrackingStatusForCurrentUrl() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      []);
  }

  openUrlInNewTab(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      [url]);
  }

  switchToOrOpenTab(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      [url]);
  }

  getAllProductSpecificationsSets() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      []);
  }

  getProductSpecificationsSetByUuid(uuid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [uuid]);
  }

  addProductSpecificationsSet(name, urls) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [name, urls]);
  }

  deleteProductSpecificationsSet(uuid) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      [uuid]);
  }

  setNameForProductSpecificationsSet(uuid, name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, name]);
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, urls]);
  }

  setProductSpecificationsUserFeedback(feedback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  getProductSpecificationsFeatureState() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      []);
  }

};

shopping_service.mojom.ShoppingServiceHandler.getRemote = function() {
  let remote = new shopping_service.mojom.ShoppingServiceHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetProductInfoForCurrentUrl
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfo', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductInfoForUrl
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'productInfo', packedOffset: 16, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductInfoForUrls
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPriceInsightsInfoForCurrentUrl
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'priceInsightsInfo', packedOffset: 8, packedBitOffset: 0, type: shopping_service.mojom.PriceInsightsInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPriceInsightsInfoForUrl
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'priceInsightsInfo', packedOffset: 16, packedBitOffset: 0, type: shopping_service.mojom.PriceInsightsInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsForUrls
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsForUrls_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productSpecs', packedOffset: 8, packedBitOffset: 0, type: shopping_service.mojom.ProductSpecificationsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUrlInfosForProductTabs
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForProductTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForProductTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUrlInfosForRecentlyViewedTabs
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForRecentlyViewedTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForRecentlyViewedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsShoppingListEligible
shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.IsShoppingListEligible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.IsShoppingListEligible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPriceTrackingStatusForCurrentUrl
shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceTrackingStatusForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceTrackingStatusForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tracked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenUrlInNewTab
shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.OpenUrlInNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SwitchToOrOpenTab
shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SwitchToOrOpenTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllProductSpecificationsSets
shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetAllProductSpecificationsSets_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetAllProductSpecificationsSets_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sets', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsSetByUuid
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsSetByUuid_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsSetByUuid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddProductSpecificationsSet
shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.AddProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.AddProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'created_set', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteProductSpecificationsSet
shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.DeleteProductSpecificationsSet_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNameForProductSpecificationsSet
shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetNameForProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetNameForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUrlsForProductSpecificationsSet
shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetUrlsForProductSpecificationsSet_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetUrlsForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 8, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProductSpecificationsUserFeedback
shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetProductSpecificationsUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 8, packedBitOffset: 0, type: shopping_service.mojom.UserFeedbackSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsFeatureState
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsFeatureState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: shopping_service.mojom.ProductSpecificationsFeatureStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shopping_service.mojom.ShoppingServiceHandlerPtr = shopping_service.mojom.ShoppingServiceHandlerRemote;
shopping_service.mojom.ShoppingServiceHandlerRequest = shopping_service.mojom.ShoppingServiceHandlerPendingReceiver;

