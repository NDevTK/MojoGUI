// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_tracking = commerce.price_tracking || {};
commerce.price_tracking.mojom = commerce.price_tracking.mojom || {};


// Interface: PriceTrackingHandler
commerce.price_tracking.mojom.PriceTrackingHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandler';
  }

  trackPriceForBookmark(bookmark_id) {
    // Method: TrackPriceForBookmark
    // Call: TrackPriceForBookmark(bookmark_id)
  }

  untrackPriceForBookmark(bookmark_id) {
    // Method: UntrackPriceForBookmark
    // Call: UntrackPriceForBookmark(bookmark_id)
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    // Method: SetPriceTrackingStatusForCurrentUrl
    // Call: SetPriceTrackingStatusForCurrentUrl(track)
  }

  getAllShoppingBookmarkProductInfo() {
    // Method: GetAllShoppingBookmarkProductInfo
    return new Promise((resolve) => {
      // Call: GetAllShoppingBookmarkProductInfo()
      resolve({});
    });
  }

  getAllPriceTrackedBookmarkProductInfo() {
    // Method: GetAllPriceTrackedBookmarkProductInfo
    return new Promise((resolve) => {
      // Call: GetAllPriceTrackedBookmarkProductInfo()
      resolve({});
    });
  }

  getShoppingCollectionBookmarkFolderId() {
    // Method: GetShoppingCollectionBookmarkFolderId
    return new Promise((resolve) => {
      // Call: GetShoppingCollectionBookmarkFolderId()
      resolve({});
    });
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    // Method: GetParentBookmarkFolderNameForCurrentUrl
    return new Promise((resolve) => {
      // Call: GetParentBookmarkFolderNameForCurrentUrl()
      resolve({});
    });
  }

  showBookmarkEditorForCurrentUrl() {
    // Method: ShowBookmarkEditorForCurrentUrl
    // Call: ShowBookmarkEditorForCurrentUrl()
  }

};

commerce.price_tracking.mojom.PriceTrackingHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
commerce.price_tracking.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.price_tracking.mojom.Page';
  }

  priceTrackedForBookmark(bookmark_product) {
    // Method: PriceTrackedForBookmark
    // Call: PriceTrackedForBookmark(bookmark_product)
  }

  priceUntrackedForBookmark(bookmark_product) {
    // Method: PriceUntrackedForBookmark
    // Call: PriceUntrackedForBookmark(bookmark_product)
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    // Method: OperationFailedForBookmark
    // Call: OperationFailedForBookmark(bookmark_product, attempted_track)
  }

  onProductBookmarkMoved(bookmark_product) {
    // Method: OnProductBookmarkMoved
    // Call: OnProductBookmarkMoved(bookmark_product)
  }

};

commerce.price_tracking.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PriceTrackingHandlerFactory
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
  }

  createPriceTrackingHandler(page, handler) {
    // Method: CreatePriceTrackingHandler
    // Call: CreatePriceTrackingHandler(page, handler)
  }

};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
