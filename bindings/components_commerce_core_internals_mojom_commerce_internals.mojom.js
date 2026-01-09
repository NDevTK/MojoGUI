// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/internals/mojom/commerce_internals.mojom
// Module: commerce.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.mojom = commerce.mojom || {};


// Struct: EligibilityDetail
commerce.mojom.EligibilityDetailSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.EligibilityDetail',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'expected_value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ShoppingEligibilityDetails
commerce.mojom.ShoppingEligibilityDetailsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.ShoppingEligibilityDetails',
      packedSize: 32,
      fields: [
        { name: 'country', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Subscription
commerce.mojom.SubscriptionSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.Subscription',
      packedSize: 24,
      fields: [
        { name: 'cluster_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'product_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProductSpecificationsSet
commerce.mojom.ProductSpecificationsSetSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.ProductSpecificationsSet',
      packedSize: 48,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'creation_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'update_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url_infos', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CommerceInternalsHandlerFactory
commerce.mojom.CommerceInternalsHandlerFactory = {};

commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCommerceInternalsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

commerce.mojom.CommerceInternalsHandlerFactory.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCommerceInternalsHandler
commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandlerFactory.CreateCommerceInternalsHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.mojom.CommerceInternalsHandlerFactoryPtr = commerce.mojom.CommerceInternalsHandlerFactoryRemote;
commerce.mojom.CommerceInternalsHandlerFactoryRequest = commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver;


// Interface: CommerceInternalsHandler
commerce.mojom.CommerceInternalsHandler = {};

commerce.mojom.CommerceInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsHandlerPendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIsShoppingListEligible() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec,
      []);
  }

  resetPriceTrackingEmailPref() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec,
      null,
      []);
  }

  getProductInfoForUrl(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url]);
  }

  getSubscriptionDetails() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec,
      []);
  }

  getProductSpecificationsDetails() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec,
      []);
  }

  resetProductSpecifications() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec,
      null,
      []);
  }

  getShoppingEligibilityDetails() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec,
      []);
  }

};

commerce.mojom.CommerceInternalsHandler.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetIsShoppingListEligible
commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetIsShoppingListEligible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetIsShoppingListEligible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetPriceTrackingEmailPref
commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.ResetPriceTrackingEmailPref_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductInfoForUrl
commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetProductInfoForUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetProductInfoForUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSubscriptionDetails
commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetSubscriptionDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetSubscriptionDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'subscriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProductSpecificationsDetails
commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetProductSpecificationsDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetProductSpecificationsDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'product_specifications_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetProductSpecifications
commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.ResetProductSpecifications_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetShoppingEligibilityDetails
commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetShoppingEligibilityDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsHandler.GetShoppingEligibilityDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: commerce.mojom.ShoppingEligibilityDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.mojom.CommerceInternalsHandlerPtr = commerce.mojom.CommerceInternalsHandlerRemote;
commerce.mojom.CommerceInternalsHandlerRequest = commerce.mojom.CommerceInternalsHandlerPendingReceiver;


// Interface: CommerceInternalsPage
commerce.mojom.CommerceInternalsPage = {};

commerce.mojom.CommerceInternalsPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsPageRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsPagePendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShoppingListEligibilityChanged(eligible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec,
      null,
      [eligible]);
  }

};

commerce.mojom.CommerceInternalsPage.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnShoppingListEligibilityChanged
commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.mojom.CommerceInternalsPage.OnShoppingListEligibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.mojom.CommerceInternalsPagePtr = commerce.mojom.CommerceInternalsPageRemote;
commerce.mojom.CommerceInternalsPageRequest = commerce.mojom.CommerceInternalsPagePendingReceiver;

