// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_tracking = commerce.price_tracking || {};
commerce.price_tracking.mojom = commerce.price_tracking.mojom || {};
var components = components || {};

commerce.price_tracking.mojom.PriceTrackingHandler = {};
commerce.price_tracking.mojom.PriceTrackingHandler.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandler';
commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page = {};
commerce.price_tracking.mojom.Page.$interfaceName = 'commerce.price_tracking.mojom.Page';
commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandlerFactory = {};
commerce.price_tracking.mojom.PriceTrackingHandlerFactory.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec = { $: {} };

// Interface: PriceTrackingHandler
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_Params', [
      mojo.internal.StructField('track', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParams', [
      mojo.internal.StructField('collectionId', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_Params', [
    ],
    [[0, 8]]);

commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  trackPriceForBookmark(bookmark_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id]);
  }

  untrackPriceForBookmark(bookmark_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id]);
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      null,
      [track]);
  }

  getAllShoppingBookmarkProductInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      []);
  }

  getAllPriceTrackedBookmarkProductInfo() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      []);
  }

  getShoppingCollectionBookmarkFolderId() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      []);
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      []);
  }

  showBookmarkEditorForCurrentUrl() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec,
      null,
      []);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandler.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandler',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerPtr = commerce.price_tracking.mojom.PriceTrackingHandlerRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerRequest = commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_OperationFailedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('attempted_track', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec, 'commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.price_tracking.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PagePendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  priceTrackedForBookmark(bookmark_product) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product]);
  }

  priceUntrackedForBookmark(bookmark_product) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product]);
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec,
      null,
      [bookmark_product, attempted_track]);
  }

  onProductBookmarkMoved(bookmark_product) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec,
      null,
      [bookmark_product]);
  }

};

commerce.price_tracking.mojom.Page.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.Page',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PagePtr = commerce.price_tracking.mojom.PageRemote;
commerce.price_tracking.mojom.PageRequest = commerce.price_tracking.mojom.PagePendingReceiver;


// Interface: PriceTrackingHandlerFactory
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.price_tracking.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.price_tracking.mojom.PriceTrackingHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPriceTrackingHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandlerFactory.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandlerFactory',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver;

