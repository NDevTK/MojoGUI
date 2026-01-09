// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/product_specifications.mojom
// Module: commerce.product_specifications.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.product_specifications = commerce.product_specifications || {};
commerce.product_specifications.mojom = commerce.product_specifications.mojom || {};


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
commerce.product_specifications.mojom.ProductSpecificationsHandler = {};

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
      [version]);
  }

  maybeShowDisclosure(urls, name, set_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec,
      [urls, name, set_id]);
  }

  declineDisclosure() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec,
      null,
      []);
  }

  showSyncSetupFlow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec,
      null,
      []);
  }

  getPageTitleFromHistory(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec,
      [url]);
  }

  showProductSpecificationsSetForUuid(uuid, in_new_tab) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec,
      null,
      [uuid, in_new_tab]);
  }

  showProductSpecificationsSetsForUuids(uuids, disposition) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec,
      null,
      [uuids, disposition]);
  }

  showComparePage(in_new_tab) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec,
      null,
      [in_new_tab]);
  }

  getComparisonTableUrlForUuid(uuid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec,
      commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec,
      [uuid]);
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

// ParamsSpec for SetAcceptedDisclosureVersion
commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.SetAcceptedDisclosureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: commerce.product_specifications.mojom.DisclosureVersionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MaybeShowDisclosure
commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.MaybeShowDisclosure_Params',
      packedSize: 32,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'set_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.MaybeShowDisclosure_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'disclosure_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeclineDisclosure
commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.DeclineDisclosure_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowSyncSetupFlow
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.ShowSyncSetupFlow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPageTitleFromHistory
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.GetPageTitleFromHistory_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.GetPageTitleFromHistory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowProductSpecificationsSetForUuid
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.ShowProductSpecificationsSetForUuid_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'in_new_tab', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowProductSpecificationsSetsForUuids
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.ShowProductSpecificationsSetsForUuids_Params',
      packedSize: 24,
      fields: [
        { name: 'uuids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disposition', packedOffset: 8, packedBitOffset: 0, type: commerce.product_specifications.mojom.ShowSetDispositionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowComparePage
commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.ShowComparePage_Params',
      packedSize: 16,
      fields: [
        { name: 'in_new_tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetComparisonTableUrlForUuid
commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.GetComparisonTableUrlForUuid_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandler.GetComparisonTableUrlForUuid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.product_specifications.mojom.ProductSpecificationsHandlerPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver;


// Interface: Page
commerce.product_specifications.mojom.Page = {};

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
      [set]);
  }

  onProductSpecificationsSetUpdated(set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec,
      null,
      [set]);
  }

  onProductSpecificationsSetRemoved(uuid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec,
      null,
      [uuid]);
  }

  onSyncStateChanged() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnProductSpecificationsSetAdded
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.Page.OnProductSpecificationsSetAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProductSpecificationsSetUpdated
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.Page.OnProductSpecificationsSetUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'set', packedOffset: 0, packedBitOffset: 0, type: commerce.shared.mojom.ProductSpecificationsSetSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProductSpecificationsSetRemoved
commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.Page.OnProductSpecificationsSetRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSyncStateChanged
commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.Page.OnSyncStateChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.product_specifications.mojom.PagePtr = commerce.product_specifications.mojom.PageRemote;
commerce.product_specifications.mojom.PageRequest = commerce.product_specifications.mojom.PagePendingReceiver;


// Interface: ProductSpecificationsHandlerFactory
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory = {};

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
      [page, handler]);
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

// ParamsSpec for CreateProductSpecificationsHandler
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory.CreateProductSpecificationsHandler_Params',
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
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver;

