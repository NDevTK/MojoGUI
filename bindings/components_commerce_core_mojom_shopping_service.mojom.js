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
      null,
      [handler],
      undefined,
      undefined
    );
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
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getProductInfoForUrl(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url],
      undefined,
      undefined
    );
  }

  getProductInfoForUrls(urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [urls],
      undefined,
      undefined
    );
  }

  getPriceInsightsInfoForCurrentUrl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getPriceInsightsInfoForUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [url],
      undefined,
      undefined
    );
  }

  getProductSpecificationsForUrls(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [urls],
      undefined,
      undefined
    );
  }

  getUrlInfosForProductTabs() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getUrlInfosForRecentlyViewedTabs() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  isShoppingListEligible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getPriceTrackingStatusForCurrentUrl() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  openUrlInNewTab(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  switchToOrOpenTab(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  getAllProductSpecificationsSets() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getProductSpecificationsSetByUuid(uuid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [uuid],
      undefined,
      undefined
    );
  }

  addProductSpecificationsSet(name, urls) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [name, urls],
      undefined,
      undefined
    );
  }

  deleteProductSpecificationsSet(uuid) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      null,
      [uuid],
      undefined,
      undefined
    );
  }

  setNameForProductSpecificationsSet(uuid, name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, name],
      undefined,
      undefined
    );
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [uuid, urls],
      undefined,
      undefined
    );
  }

  setProductSpecificationsUserFeedback(feedback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      null,
      [feedback],
      undefined,
      undefined
    );
  }

  getProductSpecificationsFeatureState() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'productInfo', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductInfoForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'priceInsightsInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceInsightsInfoForUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priceInsightsInfo', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsForUrls_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productSpecs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForProductTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetUrlInfosForRecentlyViewedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.IsShoppingListEligible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetPriceTrackingStatusForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tracked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetAllProductSpecificationsSets_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsSetByUuid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.AddProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'created_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetNameForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.SetUrlsForProductSpecificationsSet_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'updated_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shopping_service.mojom.ShoppingServiceHandler.GetProductSpecificationsFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
shopping_service.mojom.ShoppingServiceHandlerPtr = shopping_service.mojom.ShoppingServiceHandlerRemote;
shopping_service.mojom.ShoppingServiceHandlerRequest = shopping_service.mojom.ShoppingServiceHandlerPendingReceiver;

