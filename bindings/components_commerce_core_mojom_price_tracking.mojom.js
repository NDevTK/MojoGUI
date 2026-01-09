// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_tracking = commerce.price_tracking || {};
commerce.price_tracking.mojom = commerce.price_tracking.mojom || {};


// Interface: PriceTrackingHandler
commerce.price_tracking.mojom.PriceTrackingHandler = {};

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
      null,
      [bookmark_id],
      undefined,
      undefined
    );
  }

  untrackPriceForBookmark(bookmark_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec,
      null,
      null,
      [bookmark_id],
      undefined,
      undefined
    );
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      null,
      null,
      [track],
      undefined,
      undefined
    );
  }

  getAllShoppingBookmarkProductInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getAllPriceTrackedBookmarkProductInfo() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getShoppingCollectionBookmarkFolderId() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  showBookmarkEditorForCurrentUrl() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for TrackPriceForBookmark
commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.TrackPriceForBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UntrackPriceForBookmark
commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.UntrackPriceForBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPriceTrackingStatusForCurrentUrl
commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.SetPriceTrackingStatusForCurrentUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'track', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllShoppingBookmarkProductInfo
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetAllShoppingBookmarkProductInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetAllShoppingBookmarkProductInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllPriceTrackedBookmarkProductInfo
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetAllPriceTrackedBookmarkProductInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetAllPriceTrackedBookmarkProductInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'productInfos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetShoppingCollectionBookmarkFolderId
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetShoppingCollectionBookmarkFolderId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetShoppingCollectionBookmarkFolderId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'collectionId', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetParentBookmarkFolderNameForCurrentUrl
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetParentBookmarkFolderNameForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.GetParentBookmarkFolderNameForCurrentUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowBookmarkEditorForCurrentUrl
commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandler.ShowBookmarkEditorForCurrentUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
commerce.price_tracking.mojom.PriceTrackingHandlerPtr = commerce.price_tracking.mojom.PriceTrackingHandlerRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerRequest = commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver;


// Interface: Page
commerce.price_tracking.mojom.Page = {};

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
      null,
      [bookmark_product],
      undefined,
      undefined
    );
  }

  priceUntrackedForBookmark(bookmark_product) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec,
      null,
      null,
      [bookmark_product],
      undefined,
      undefined
    );
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec,
      null,
      null,
      [bookmark_product, attempted_track],
      undefined,
      undefined
    );
  }

  onProductBookmarkMoved(bookmark_product) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec,
      null,
      null,
      [bookmark_product],
      undefined,
      undefined
    );
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

// ParamsSpec for PriceTrackedForBookmark
commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.Page.PriceTrackedForBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_product', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PriceUntrackedForBookmark
commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.Page.PriceUntrackedForBookmark_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_product', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OperationFailedForBookmark
commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.Page.OperationFailedForBookmark_Params',
      packedSize: 24,
      fields: [
        { name: 'bookmark_product', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'attempted_track', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnProductBookmarkMoved
commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.Page.OnProductBookmarkMoved_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_product', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
commerce.price_tracking.mojom.PagePtr = commerce.price_tracking.mojom.PageRemote;
commerce.price_tracking.mojom.PageRequest = commerce.price_tracking.mojom.PagePendingReceiver;


// Interface: PriceTrackingHandlerFactory
commerce.price_tracking.mojom.PriceTrackingHandlerFactory = {};

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
      null,
      [page, handler],
      undefined,
      undefined
    );
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

// ParamsSpec for CreatePriceTrackingHandler
commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory.CreatePriceTrackingHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver;

