// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/product_specifications.mojom
// Module: commerce.product_specifications.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.product_specifications = commerce.product_specifications || {};
commerce.product_specifications.mojom = commerce.product_specifications.mojom || {};
var url = url || {};
var components = components || {};

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
      mojo.internal.StructField('version', 0, 0, commerce.product_specifications.mojom.DisclosureVersionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParams', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
      mojo.internal.StructField('in_new_tab', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_Params', [
      mojo.internal.StructField('uuids', 0, 0, mojo.internal.Array(mojo_base.mojom.UuidSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('disposition', 8, 0, commerce.product_specifications.mojom.ShowSetDispositionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_Params', [
      mojo.internal.StructField('in_new_tab', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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

commerce.product_specifications.mojom.ProductSpecificationsHandlerPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_Params', [
      mojo.internal.StructField('set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_Params', [
      mojo.internal.StructField('set', 0, 0, commerce.shared.mojom.ProductSpecificationsSetSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
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

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote;
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver;

