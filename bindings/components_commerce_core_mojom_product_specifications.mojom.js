// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/product_specifications.mojom
// Module: commerce.product_specifications.mojom

'use strict';

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
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAcceptedDisclosureVersion(version) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec,
      null,
      [version],
      false);
  }

  maybeShowDisclosure(urls, name, set_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec,
      [urls, name, set_id],
      false);
  }

  declineDisclosure() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec,
      null,
      [],
      false);
  }

  showSyncSetupFlow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec,
      null,
      [],
      false);
  }

  getPageTitleFromHistory(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec,
      [url],
      false);
  }

  showProductSpecificationsSetForUuid(uuid, in_new_tab) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec,
      null,
      [uuid, in_new_tab],
      false);
  }

  showProductSpecificationsSetsForUuids(uuids, disposition) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec,
      null,
      [uuids, disposition],
      false);
  }

  showComparePage(in_new_tab) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec,
      null,
      [in_new_tab],
      false);
  }

  getComparisonTableUrlForUuid(uuid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetAcceptedDisclosureVersion
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAcceptedDisclosureVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: MaybeShowDisclosure
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowDisclosure (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DeclineDisclosure
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeclineDisclosure (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ShowSyncSetupFlow
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSyncSetupFlow (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetPageTitleFromHistory
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPageTitleFromHistory (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: ShowProductSpecificationsSetForUuid
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowProductSpecificationsSetForUuid (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ShowProductSpecificationsSetsForUuids
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowProductSpecificationsSetsForUuids (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: ShowComparePage
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowComparePage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: GetComparisonTableUrlForUuid
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetComparisonTableUrlForUuid (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAcceptedDisclosureVersion');
          const result = this.impl.setAcceptedDisclosureVersion(params.version);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeShowDisclosure');
          const result = this.impl.maybeShowDisclosure(params.urls, params.name, params.set_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.declineDisclosure');
          const result = this.impl.declineDisclosure();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showSyncSetupFlow');
          const result = this.impl.showSyncSetupFlow();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPageTitleFromHistory');
          const result = this.impl.getPageTitleFromHistory(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showProductSpecificationsSetForUuid');
          const result = this.impl.showProductSpecificationsSetForUuid(params.uuid, params.in_new_tab);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showProductSpecificationsSetsForUuids');
          const result = this.impl.showProductSpecificationsSetsForUuids(params.uuids, params.disposition);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showComparePage');
          const result = this.impl.showComparePage(params.in_new_tab);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getComparisonTableUrlForUuid');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

commerce.product_specifications.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProductSpecificationsSetAdded(set) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec,
      null,
      [set],
      false);
  }

  onProductSpecificationsSetUpdated(set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec,
      null,
      [set],
      false);
  }

  onProductSpecificationsSetRemoved(uuid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec,
      null,
      [uuid],
      false);
  }

  onSyncStateChanged() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnProductSpecificationsSetAdded
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnProductSpecificationsSetUpdated
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnProductSpecificationsSetRemoved
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetRemoved (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnSyncStateChanged
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSyncStateChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetAdded');
          const result = this.impl.onProductSpecificationsSetAdded(params.set);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetUpdated');
          const result = this.impl.onProductSpecificationsSetUpdated(params.set);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetRemoved');
          const result = this.impl.onProductSpecificationsSetRemoved(params.uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSyncStateChanged');
          const result = this.impl.onSyncStateChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.product_specifications.mojom.PageReceiver = commerce.product_specifications.mojom.PageReceiver;

commerce.product_specifications.mojom.PagePtr = commerce.product_specifications.mojom.PageRemote;
commerce.product_specifications.mojom.PageRequest = commerce.product_specifications.mojom.PagePendingReceiver;


// Interface: ProductSpecificationsHandlerFactory
mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.product_specifications.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.product_specifications.mojom.ProductSpecificationsHandlerSpec), null, false, 0, undefined),
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
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createProductSpecificationsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateProductSpecificationsHandler
        try {
             decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProductSpecificationsHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createProductSpecificationsHandler');
          const result = this.impl.createProductSpecificationsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver;

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver;

