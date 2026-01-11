// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/product_specifications.mojom
// Module: commerce.product_specifications.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var commerce = commerce || {};
commerce.product_specifications = commerce.product_specifications || {};
commerce.product_specifications.mojom = commerce.product_specifications.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

commerce.product_specifications.mojom.DisclosureVersionSpec = { $: mojo.internal.Enum() };
commerce.product_specifications.mojom.ShowSetDispositionSpec = { $: mojo.internal.Enum() };
commerce.product_specifications.mojom.ProductSpecificationsHandler = {};
commerce.product_specifications.mojom.ProductSpecificationsHandler.$interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandler';
commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec = { $: {} };
commerce.product_specifications.mojom.Page = {};
commerce.product_specifications.mojom.Page.$interfaceName = 'commerce.product_specifications.mojom.Page';
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec = { $: {} };
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory = {};
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory.$interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory';
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec = { $: {} };

// Enum: DisclosureVersion
commerce.product_specifications.mojom.DisclosureVersion = {
  kUnknown: 0,
  kV1: 1,
};

// Enum: ShowSetDisposition
commerce.product_specifications.mojom.ShowSetDisposition = {
  kInNewTabs: 0,
  kInNewWindow: 1,
};

// Interface: ProductSpecificationsHandler
mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_Params', [
      mojo.internal.StructField('version', 0, 0, commerce.product_specifications.mojom.DisclosureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('set_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParams', [
      mojo.internal.StructField('disclosure_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParams', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('in_new_tab', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_Params', [
      mojo.internal.StructField('uuids', 0, 0, mojo.internal.Array(mojo_base.mojom.UuidSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('disposition', 8, 0, commerce.product_specifications.mojom.ShowSetDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_Params', [
      mojo.internal.StructField('in_new_tab', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.ProductSpecificationsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver,
      handle);
    this.$ = new commerce.product_specifications.mojom.ProductSpecificationsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setAcceptedDisclosureVersion(version) {
    return this.$.setAcceptedDisclosureVersion(version);
  }
  maybeShowDisclosure(urls, name, set_id) {
    return this.$.maybeShowDisclosure(urls, name, set_id);
  }
  declineDisclosure() {
    return this.$.declineDisclosure();
  }
  showSyncSetupFlow() {
    return this.$.showSyncSetupFlow();
  }
  getPageTitleFromHistory(url) {
    return this.$.getPageTitleFromHistory(url);
  }
  showProductSpecificationsSetForUuid(uuid, in_new_tab) {
    return this.$.showProductSpecificationsSetForUuid(uuid, in_new_tab);
  }
  showProductSpecificationsSetsForUuids(uuids, disposition) {
    return this.$.showProductSpecificationsSetsForUuids(uuids, disposition);
  }
  showComparePage(in_new_tab) {
    return this.$.showComparePage(in_new_tab);
  }
  getComparisonTableUrlForUuid(uuid) {
    return this.$.getComparisonTableUrlForUuid(uuid);
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProductSpecificationsHandler', [
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

  setAcceptedDisclosureVersion(version) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec,
      null,
      [version],
      false);
  }

  maybeShowDisclosure(urls, name, set_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec,
      [urls, name, set_id],
      false);
  }

  declineDisclosure() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec,
      null,
      [],
      false);
  }

  showSyncSetupFlow() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec,
      null,
      [],
      false);
  }

  getPageTitleFromHistory(url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec,
      [url],
      false);
  }

  showProductSpecificationsSetForUuid(uuid, in_new_tab) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec,
      null,
      [uuid, in_new_tab],
      false);
  }

  showProductSpecificationsSetsForUuids(uuids, disposition) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec,
      null,
      [uuids, disposition],
      false);
  }

  showComparePage(in_new_tab) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec,
      null,
      [in_new_tab],
      false);
  }

  getComparisonTableUrlForUuid(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec,
      [uuid],
      false);
  }

};

commerce.product_specifications.mojom.ProductSpecificationsHandler.getRemote = function() {
  let remote = new commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.ProductSpecificationsHandler',
    'context');
  return remote.$;
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProductSpecificationsHandler', [
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
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec.$.structSpec);
          const result = this.impl.setAcceptedDisclosureVersion(params.version);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec.$.structSpec);
          const result = this.impl.maybeShowDisclosure(params.urls, params.name, params.set_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec.$.structSpec);
          const result = this.impl.declineDisclosure();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec.$.structSpec);
          const result = this.impl.showSyncSetupFlow();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec.$.structSpec);
          const result = this.impl.getPageTitleFromHistory(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec.$.structSpec);
          const result = this.impl.showProductSpecificationsSetForUuid(params.uuid, params.in_new_tab);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec.$.structSpec);
          const result = this.impl.showProductSpecificationsSetsForUuids(params.uuids, params.disposition);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec.$.structSpec);
          const result = this.impl.showComparePage(params.in_new_tab);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec.$.structSpec);
          const result = this.impl.getComparisonTableUrlForUuid(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver = commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver;

commerce.product_specifications.mojom.ProductSpecificationsHandlerPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_Params', [
      mojo.internal.StructField('set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_Params', [
      mojo.internal.StructField('set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnSyncStateChanged_Params', [
    ],
    [[0, 8]]);

commerce.product_specifications.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.product_specifications.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.product_specifications.mojom.PagePendingReceiver,
      handle);
    this.$ = new commerce.product_specifications.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProductSpecificationsSetAdded(set) {
    return this.$.onProductSpecificationsSetAdded(set);
  }
  onProductSpecificationsSetUpdated(set) {
    return this.$.onProductSpecificationsSetUpdated(set);
  }
  onProductSpecificationsSetRemoved(uuid) {
    return this.$.onProductSpecificationsSetRemoved(uuid);
  }
  onSyncStateChanged() {
    return this.$.onSyncStateChanged();
  }
};

commerce.product_specifications.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProductSpecificationsSetAdded(set) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec,
      null,
      [set],
      false);
  }

  onProductSpecificationsSetUpdated(set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec,
      null,
      [set],
      false);
  }

  onProductSpecificationsSetRemoved(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec,
      null,
      [uuid],
      false);
  }

  onSyncStateChanged() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

commerce.product_specifications.mojom.Page.getRemote = function() {
  let remote = new commerce.product_specifications.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.Page',
    'context');
  return remote.$;
};

commerce.product_specifications.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onProductSpecificationsSetAdded(params.set);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onProductSpecificationsSetUpdated(params.set);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onProductSpecificationsSetRemoved(params.uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSyncStateChanged();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

commerce.product_specifications.mojom.PageReceiver = commerce.product_specifications.mojom.PageReceiver;

commerce.product_specifications.mojom.PagePtr = commerce.product_specifications.mojom.PageRemote;
commerce.product_specifications.mojom.PageRequest = commerce.product_specifications.mojom.PagePendingReceiver;


// Interface: ProductSpecificationsHandlerFactory
mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.product_specifications.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createProductSpecificationsHandler(page, handler) {
    return this.$.createProductSpecificationsHandler(page, handler);
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProductSpecificationsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createProductSpecificationsHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory.getRemote = function() {
  let remote = new commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory',
    'context');
  return remote.$;
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProductSpecificationsHandlerFactory', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createProductSpecificationsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver;

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver;

