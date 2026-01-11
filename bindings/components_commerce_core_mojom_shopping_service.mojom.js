// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
// Module: shopping_service.mojom

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(shopping_service.mojom.ShoppingServiceHandlerRemote), null, false, 0, undefined),
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
  createShoppingServiceHandler(handler) {
    return this.$.createShoppingServiceHandler(handler);
  }
};

shopping_service.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandlerFactory', [
      { explicit: null },
    ]);
  }

  createShoppingServiceHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createShoppingServiceHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getProductInfoForCurrentUrl() {
    return this.$.getProductInfoForCurrentUrl();
  }
  getProductInfoForUrl(url) {
    return this.$.getProductInfoForUrl(url);
  }
  getProductInfoForUrls(urls) {
    return this.$.getProductInfoForUrls(urls);
  }
  getPriceInsightsInfoForCurrentUrl() {
    return this.$.getPriceInsightsInfoForCurrentUrl();
  }
  getPriceInsightsInfoForUrl(url) {
    return this.$.getPriceInsightsInfoForUrl(url);
  }
  getProductSpecificationsForUrls(urls) {
    return this.$.getProductSpecificationsForUrls(urls);
  }
  getUrlInfosForProductTabs() {
    return this.$.getUrlInfosForProductTabs();
  }
  getUrlInfosForRecentlyViewedTabs() {
    return this.$.getUrlInfosForRecentlyViewedTabs();
  }
  isShoppingListEligible() {
    return this.$.isShoppingListEligible();
  }
  getPriceTrackingStatusForCurrentUrl() {
    return this.$.getPriceTrackingStatusForCurrentUrl();
  }
  openUrlInNewTab(url) {
    return this.$.openUrlInNewTab(url);
  }
  switchToOrOpenTab(url) {
    return this.$.switchToOrOpenTab(url);
  }
  getAllProductSpecificationsSets() {
    return this.$.getAllProductSpecificationsSets();
  }
  getProductSpecificationsSetByUuid(uuid) {
    return this.$.getProductSpecificationsSetByUuid(uuid);
  }
  addProductSpecificationsSet(name, urls) {
    return this.$.addProductSpecificationsSet(name, urls);
  }
  deleteProductSpecificationsSet(uuid) {
    return this.$.deleteProductSpecificationsSet(uuid);
  }
  setNameForProductSpecificationsSet(uuid, name) {
    return this.$.setNameForProductSpecificationsSet(uuid, name);
  }
  setUrlsForProductSpecificationsSet(uuid, urls) {
    return this.$.setUrlsForProductSpecificationsSet(uuid, urls);
  }
  setProductSpecificationsUserFeedback(feedback) {
    return this.$.setProductSpecificationsUserFeedback(feedback);
  }
  getProductSpecificationsFeatureState() {
    return this.$.getProductSpecificationsFeatureState();
  }
};

shopping_service.mojom.ShoppingServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProductInfoForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  getProductInfoForUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getProductInfoForUrls(urls) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [urls],
      false);
  }

  getPriceInsightsInfoForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  getPriceInsightsInfoForUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getProductSpecificationsForUrls(urls) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [urls],
      false);
  }

  getUrlInfosForProductTabs() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      [],
      false);
  }

  getUrlInfosForRecentlyViewedTabs() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      [],
      false);
  }

  isShoppingListEligible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      [],
      false);
  }

  getPriceTrackingStatusForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInNewTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      [url],
      false);
  }

  switchToOrOpenTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      [url],
      false);
  }

  getAllProductSpecificationsSets() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      [],
      false);
  }

  getProductSpecificationsSetByUuid(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [uuid],
      false);
  }

  addProductSpecificationsSet(name, urls) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [name, urls],
      false);
  }

  deleteProductSpecificationsSet(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      [uuid],
      false);
  }

  setNameForProductSpecificationsSet(uuid, name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, name],
      false);
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, urls],
      false);
  }

  setProductSpecificationsUserFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  getProductSpecificationsFeatureState() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInNewTab(params.url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec.$.structSpec);
          const result = this.impl.switchToOrOpenTab(params.url);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec.$.structSpec);
          const result = this.impl.deleteProductSpecificationsSet(params.uuid);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.setProductSpecificationsUserFeedback(params.feedback);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

shopping_service.mojom.ShoppingServiceHandlerReceiver = shopping_service.mojom.ShoppingServiceHandlerReceiver;

shopping_service.mojom.ShoppingServiceHandlerPtr = shopping_service.mojom.ShoppingServiceHandlerRemote;
shopping_service.mojom.ShoppingServiceHandlerRequest = shopping_service.mojom.ShoppingServiceHandlerPendingReceiver;

