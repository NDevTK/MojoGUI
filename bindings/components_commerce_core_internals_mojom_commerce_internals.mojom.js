// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/internals/mojom/commerce_internals.mojom
// Module: commerce.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var commerce = commerce || {};
commerce.mojom = commerce.mojom || {};
var shopping_service = shopping_service || {};
var url = url || {};

commerce.mojom.EligibilityDetailSpec = { $: {} };
commerce.mojom.ShoppingEligibilityDetailsSpec = { $: {} };
commerce.mojom.SubscriptionSpec = { $: {} };
commerce.mojom.ProductSpecificationsSetSpec = { $: {} };
commerce.mojom.CommerceInternalsHandlerFactory = {};
commerce.mojom.CommerceInternalsHandlerFactory.$interfaceName = 'commerce.mojom.CommerceInternalsHandlerFactory';
commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler = {};
commerce.mojom.CommerceInternalsHandler.$interfaceName = 'commerce.mojom.CommerceInternalsHandler';
commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsPage = {};
commerce.mojom.CommerceInternalsPage.$interfaceName = 'commerce.mojom.CommerceInternalsPage';
commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec = { $: {} };

// Struct: EligibilityDetail
mojo.internal.Struct(
    commerce.mojom.EligibilityDetailSpec, 'commerce.mojom.EligibilityDetail', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('expected_value', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ShoppingEligibilityDetails
mojo.internal.Struct(
    commerce.mojom.ShoppingEligibilityDetailsSpec, 'commerce.mojom.ShoppingEligibilityDetails', [
      mojo.internal.StructField('country', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.Array(commerce.mojom.EligibilityDetailSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Subscription
mojo.internal.Struct(
    commerce.mojom.SubscriptionSpec, 'commerce.mojom.Subscription', [
      mojo.internal.StructField('cluster_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('product_infos', 8, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsSet
mojo.internal.Struct(
    commerce.mojom.ProductSpecificationsSetSpec, 'commerce.mojom.ProductSpecificationsSet', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url_infos', 32, 0, mojo.internal.Array(shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: CommerceInternalsHandlerFactory
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec, 'commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.mojom.CommerceInternalsPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.mojom.CommerceInternalsHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  createCommerceInternalsHandler(page, handler) {
    return this.$.createCommerceInternalsHandler(page, handler);
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createCommerceInternalsHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec,
      null,
      [page, handler],
      false);
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

commerce.mojom.CommerceInternalsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandlerFactory', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createCommerceInternalsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryReceiver = commerce.mojom.CommerceInternalsHandlerFactoryReceiver;

commerce.mojom.CommerceInternalsHandlerFactoryPtr = commerce.mojom.CommerceInternalsHandlerFactoryRemote;
commerce.mojom.CommerceInternalsHandlerFactoryRequest = commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver;


// Interface: CommerceInternalsHandler
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParams', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParams', [
      mojo.internal.StructField('subscriptions', 0, 0, mojo.internal.Array(commerce.mojom.SubscriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParams', [
      mojo.internal.StructField('product_specifications_set', 0, 0, mojo.internal.Array(commerce.mojom.ProductSpecificationsSetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParams', [
      mojo.internal.StructField('details', 0, 0, commerce.mojom.ShoppingEligibilityDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getIsShoppingListEligible() {
    return this.$.getIsShoppingListEligible();
  }
  resetPriceTrackingEmailPref() {
    return this.$.resetPriceTrackingEmailPref();
  }
  getProductInfoForUrl(url) {
    return this.$.getProductInfoForUrl(url);
  }
  getSubscriptionDetails() {
    return this.$.getSubscriptionDetails();
  }
  getProductSpecificationsDetails() {
    return this.$.getProductSpecificationsDetails();
  }
  resetProductSpecifications() {
    return this.$.resetProductSpecifications();
  }
  getShoppingEligibilityDetails() {
    return this.$.getShoppingEligibilityDetails();
  }
};

commerce.mojom.CommerceInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getIsShoppingListEligible() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec,
      [],
      false);
  }

  resetPriceTrackingEmailPref() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec,
      null,
      [],
      false);
  }

  getProductInfoForUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getSubscriptionDetails() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec,
      [],
      false);
  }

  getProductSpecificationsDetails() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec,
      [],
      false);
  }

  resetProductSpecifications() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec,
      null,
      [],
      false);
  }

  getShoppingEligibilityDetails() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec,
      [],
      false);
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

commerce.mojom.CommerceInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandler', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec.$.structSpec);
          const result = this.impl.getIsShoppingListEligible();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec.$.structSpec);
          const result = this.impl.resetPriceTrackingEmailPref();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getProductInfoForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getSubscriptionDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getProductSpecificationsDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec.$.structSpec);
          const result = this.impl.resetProductSpecifications();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getShoppingEligibilityDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec);
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

commerce.mojom.CommerceInternalsHandlerReceiver = commerce.mojom.CommerceInternalsHandlerReceiver;

commerce.mojom.CommerceInternalsHandlerPtr = commerce.mojom.CommerceInternalsHandlerRemote;
commerce.mojom.CommerceInternalsHandlerRequest = commerce.mojom.CommerceInternalsHandlerPendingReceiver;


// Interface: CommerceInternalsPage
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec, 'commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onShoppingListEligibilityChanged(eligible) {
    return this.$.onShoppingListEligibilityChanged(eligible);
  }
};

commerce.mojom.CommerceInternalsPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsPage', [
      { explicit: null },
    ]);
  }

  onShoppingListEligibilityChanged(eligible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec,
      null,
      [eligible],
      false);
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

commerce.mojom.CommerceInternalsPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsPage', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onShoppingListEligibilityChanged(params.eligible);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

commerce.mojom.CommerceInternalsPageReceiver = commerce.mojom.CommerceInternalsPageReceiver;

commerce.mojom.CommerceInternalsPagePtr = commerce.mojom.CommerceInternalsPageRemote;
commerce.mojom.CommerceInternalsPageRequest = commerce.mojom.CommerceInternalsPagePendingReceiver;

