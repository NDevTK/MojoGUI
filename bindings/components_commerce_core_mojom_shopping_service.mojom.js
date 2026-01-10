// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
// Module: shopping_service.mojom

'use strict';

// Module namespace
var shopping_service = shopping_service || {};
shopping_service.mojom = shopping_service.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var commerce = commerce || {};

shopping_service.mojom.PriceBucketSpec = { $: mojo.internal.Enum() };
shopping_service.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
shopping_service.mojom.PricePointSpec = { $: {} };
shopping_service.mojom.UrlInfoSpec = { $: {} };
shopping_service.mojom.PriceInsightsInfoSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsDescriptionTextSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsOptionSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsDescriptionSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsValueSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsProductSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsFeatureStateSpec = { $: {} };
shopping_service.mojom.ProductSpecificationsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandlerFactory = {};
shopping_service.mojom.ShoppingServiceHandlerFactory.$interfaceName = 'shopping_service.mojom.ShoppingServiceHandlerFactory';
shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler = {};
shopping_service.mojom.ShoppingServiceHandler.$interfaceName = 'shopping_service.mojom.ShoppingServiceHandler';
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec = { $: {} };
shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    shopping_service.mojom.PricePointSpec, 'shopping_service.mojom.PricePoint', [
      mojo.internal.StructField('date', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('formatted_price', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('price', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UrlInfo
mojo.internal.Struct(
    shopping_service.mojom.UrlInfoSpec, 'shopping_service.mojom.UrlInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('previewText', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PriceInsightsInfo
mojo.internal.Struct(
    shopping_service.mojom.PriceInsightsInfoSpec, 'shopping_service.mojom.PriceInsightsInfo', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProductSpecificationsDescriptionText
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsDescriptionTextSpec, 'shopping_service.mojom.ProductSpecificationsDescriptionText', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsOption
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsOptionSpec, 'shopping_service.mojom.ProductSpecificationsOption', [
      mojo.internal.StructField('descriptions', 0, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProductSpecificationsDescription
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsDescriptionSpec, 'shopping_service.mojom.ProductSpecificationsDescription', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alt_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProductSpecificationsValue
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsValueSpec, 'shopping_service.mojom.ProductSpecificationsValue', [
      mojo.internal.StructField('specification_descriptions', 0, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('summary', 8, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsProduct
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsProductSpec, 'shopping_service.mojom.ProductSpecificationsProduct', [
      mojo.internal.StructField('product_cluster_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('product_dimension_values', 24, 0, mojo.internal.Map(mojo.internal.Uint64, shopping_service.mojom.ProductSpecificationsValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('summary', 32, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('buying_options_url', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProductSpecificationsFeatureState
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsFeatureStateSpec, 'shopping_service.mojom.ProductSpecificationsFeatureState', [
      mojo.internal.StructField('is_syncing_tab_compare', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_load_full_page_ui', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_manage_sets', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_fetch_data', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_allowed_for_enterprise', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_quality_logging_allowed', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_signed_in', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProductSpecifications
mojo.internal.Struct(
    shopping_service.mojom.ProductSpecificationsSpec, 'shopping_service.mojom.ProductSpecifications', [
      mojo.internal.StructField('product_dimension_map', 0, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('products', 8, 0, mojo.internal.Array(shopping_service.mojom.ProductSpecificationsProductSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ShoppingServiceHandlerFactory
mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(shopping_service.mojom.ShoppingServiceHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createShoppingServiceHandler(params.handler);
          break;
        }
      }
      }
    }});
  }
};

shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver = shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver;

shopping_service.mojom.ShoppingServiceHandlerFactoryPtr = shopping_service.mojom.ShoppingServiceHandlerFactoryRemote;
shopping_service.mojom.ShoppingServiceHandlerFactoryRequest = shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver;


// Interface: ShoppingServiceHandler
mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('productInfo', 0, 0, commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('productInfo', 8, 0, commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.ProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('priceInsightsInfo', 0, 0, shopping_service.mojom.PriceInsightsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priceInsightsInfo', 8, 0, shopping_service.mojom.PriceInsightsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParams', [
      mojo.internal.StructField('productSpecs', 0, 0, shopping_service.mojom.ProductSpecificationsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParams', [
      mojo.internal.StructField('url_infos', 0, 0, mojo.internal.Array(shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParams', [
      mojo.internal.StructField('url_infos', 0, 0, mojo.internal.Array(shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParams', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('tracked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParams', [
      mojo.internal.StructField('sets', 0, 0, mojo.internal.Array(commerce.shared.mojom.ProductSpecificationsSetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParams', [
      mojo.internal.StructField('set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('created_set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('updated_set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('updated_set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, shopping_service.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, shopping_service.mojom.ProductSpecificationsFeatureStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getProductInfoForUrl(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getProductInfoForUrls(urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [urls],
      false);
  }

  getPriceInsightsInfoForCurrentUrl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  getPriceInsightsInfoForUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getProductSpecificationsForUrls(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [urls],
      false);
  }

  getUrlInfosForProductTabs() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      [],
      false);
  }

  getUrlInfosForRecentlyViewedTabs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      [],
      false);
  }

  isShoppingListEligible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      [],
      false);
  }

  getPriceTrackingStatusForCurrentUrl() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInNewTab(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      [url],
      false);
  }

  switchToOrOpenTab(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      [url],
      false);
  }

  getAllProductSpecificationsSets() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      [],
      false);
  }

  getProductSpecificationsSetByUuid(uuid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [uuid],
      false);
  }

  addProductSpecificationsSet(name, urls) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [name, urls],
      false);
  }

  deleteProductSpecificationsSet(uuid) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      [uuid],
      false);
  }

  setNameForProductSpecificationsSet(uuid, name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, name],
      false);
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, urls],
      false);
  }

  setProductSpecificationsUserFeedback(feedback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  getProductSpecificationsFeatureState() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      [],
      false);
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

shopping_service.mojom.ShoppingServiceHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductInfoForCurrentUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductInfoForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductInfoForUrls(params.urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPriceInsightsInfoForCurrentUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPriceInsightsInfoForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductSpecificationsForUrls(params.urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUrlInfosForProductTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUrlInfosForRecentlyViewedTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isShoppingListEligible();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPriceTrackingStatusForCurrentUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openUrlInNewTab(params.url);
          break;
        }
        case 11: {
          const params = shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.switchToOrOpenTab(params.url);
          break;
        }
        case 12: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllProductSpecificationsSets();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductSpecificationsSetByUuid(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addProductSpecificationsSet(params.name, params.urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteProductSpecificationsSet(params.uuid);
          break;
        }
        case 16: {
          const params = shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setNameForProductSpecificationsSet(params.uuid, params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUrlsForProductSpecificationsSet(params.uuid, params.urls);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const params = shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setProductSpecificationsUserFeedback(params.feedback);
          break;
        }
        case 19: {
          const params = shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getProductSpecificationsFeatureState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

shopping_service.mojom.ShoppingServiceHandlerReceiver = shopping_service.mojom.ShoppingServiceHandlerReceiver;

shopping_service.mojom.ShoppingServiceHandlerPtr = shopping_service.mojom.ShoppingServiceHandlerRemote;
shopping_service.mojom.ShoppingServiceHandlerRequest = shopping_service.mojom.ShoppingServiceHandlerPendingReceiver;

