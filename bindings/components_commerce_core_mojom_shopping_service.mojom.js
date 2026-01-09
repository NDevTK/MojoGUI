// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
// Module: shopping_service.mojom

'use strict';

// Module namespace
var shopping_service = shopping_service || {};
shopping_service.mojom = shopping_service.mojom || {};


// Enum: PriceBucket
shopping_service.mojom.PriceBucket = {
};

// Enum: UserFeedback
shopping_service.mojom.UserFeedback = {
};

// Struct: PricePoint
shopping_service.mojom.PricePoint = class {
  constructor(values = {}) {
    this.formatted_price = values.formatted_price !== undefined ? values.formatted_price : 0;
  }
};

// Struct: UrlInfo
shopping_service.mojom.UrlInfo = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
    this.favicon_url = values.favicon_url !== undefined ? values.favicon_url : null;
    this.thumbnail_url = values.thumbnail_url !== undefined ? values.thumbnail_url : null;
    this.previewText = values.previewText !== undefined ? values.previewText : "";
  }
};

// Struct: PriceInsightsInfo
shopping_service.mojom.PriceInsightsInfo = class {
  constructor(values = {}) {
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : null;
  }
};

// Struct: ProductSpecificationsDescriptionText
shopping_service.mojom.ProductSpecificationsDescriptionText = class {
  constructor(values = {}) {
    this.urls = values.urls !== undefined ? values.urls : "";
  }
};

// Struct: ProductSpecificationsOption
shopping_service.mojom.ProductSpecificationsOption = class {
  constructor(values = {}) {
    this.descriptions = values.descriptions !== undefined ? values.descriptions : [];
  }
};

// Struct: ProductSpecificationsDescription
shopping_service.mojom.ProductSpecificationsDescription = class {
  constructor(values = {}) {
    this.alt_text = values.alt_text !== undefined ? values.alt_text : "";
  }
};

// Struct: ProductSpecificationsValue
shopping_service.mojom.ProductSpecificationsValue = class {
  constructor(values = {}) {
    this.summary = values.summary !== undefined ? values.summary : [];
  }
};

// Struct: ProductSpecificationsProduct
shopping_service.mojom.ProductSpecificationsProduct = class {
  constructor(values = {}) {
    this.buying_options_url = values.buying_options_url !== undefined ? values.buying_options_url : 0;
  }
};

// Struct: ProductSpecificationsFeatureState
shopping_service.mojom.ProductSpecificationsFeatureState = class {
  constructor(values = {}) {
    this.is_signed_in = values.is_signed_in !== undefined ? values.is_signed_in : false;
  }
};

// Struct: ProductSpecifications
shopping_service.mojom.ProductSpecifications = class {
  constructor(values = {}) {
    this.products = values.products !== undefined ? values.products : 0;
  }
};

// Interface: ShoppingServiceHandlerFactory
shopping_service.mojom.ShoppingServiceHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shopping_service.mojom.ShoppingServiceHandlerFactory';
  }

  createShoppingServiceHandler(handler) {
    // Method: CreateShoppingServiceHandler
    // Call: CreateShoppingServiceHandler(handler)
  }

};

shopping_service.mojom.ShoppingServiceHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ShoppingServiceHandler
shopping_service.mojom.ShoppingServiceHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'shopping_service.mojom.ShoppingServiceHandler';
  }

  getProductInfoForCurrentUrl() {
    // Method: GetProductInfoForCurrentUrl
    return new Promise((resolve) => {
      // Call: GetProductInfoForCurrentUrl()
      resolve({});
    });
  }

  getProductInfoForUrl(url) {
    // Method: GetProductInfoForUrl
    return new Promise((resolve) => {
      // Call: GetProductInfoForUrl(url)
      resolve({});
    });
  }

  getProductInfoForUrls(urls) {
    // Method: GetProductInfoForUrls
    return new Promise((resolve) => {
      // Call: GetProductInfoForUrls(urls)
      resolve({});
    });
  }

  getPriceInsightsInfoForCurrentUrl() {
    // Method: GetPriceInsightsInfoForCurrentUrl
    return new Promise((resolve) => {
      // Call: GetPriceInsightsInfoForCurrentUrl()
      resolve({});
    });
  }

  getPriceInsightsInfoForUrl(url) {
    // Method: GetPriceInsightsInfoForUrl
    return new Promise((resolve) => {
      // Call: GetPriceInsightsInfoForUrl(url)
      resolve({});
    });
  }

  getProductSpecificationsForUrls(urls) {
    // Method: GetProductSpecificationsForUrls
    return new Promise((resolve) => {
      // Call: GetProductSpecificationsForUrls(urls)
      resolve({});
    });
  }

  getUrlInfosForProductTabs() {
    // Method: GetUrlInfosForProductTabs
    return new Promise((resolve) => {
      // Call: GetUrlInfosForProductTabs()
      resolve({});
    });
  }

  getUrlInfosForRecentlyViewedTabs() {
    // Method: GetUrlInfosForRecentlyViewedTabs
    return new Promise((resolve) => {
      // Call: GetUrlInfosForRecentlyViewedTabs()
      resolve({});
    });
  }

  isShoppingListEligible() {
    // Method: IsShoppingListEligible
    return new Promise((resolve) => {
      // Call: IsShoppingListEligible()
      resolve({});
    });
  }

  getPriceTrackingStatusForCurrentUrl() {
    // Method: GetPriceTrackingStatusForCurrentUrl
    return new Promise((resolve) => {
      // Call: GetPriceTrackingStatusForCurrentUrl()
      resolve({});
    });
  }

  openUrlInNewTab(url) {
    // Method: OpenUrlInNewTab
    // Call: OpenUrlInNewTab(url)
  }

  switchToOrOpenTab(url) {
    // Method: SwitchToOrOpenTab
    // Call: SwitchToOrOpenTab(url)
  }

  getAllProductSpecificationsSets() {
    // Method: GetAllProductSpecificationsSets
    return new Promise((resolve) => {
      // Call: GetAllProductSpecificationsSets()
      resolve({});
    });
  }

  getProductSpecificationsSetByUuid(uuid) {
    // Method: GetProductSpecificationsSetByUuid
    return new Promise((resolve) => {
      // Call: GetProductSpecificationsSetByUuid(uuid)
      resolve({});
    });
  }

  addProductSpecificationsSet(name, urls) {
    // Method: AddProductSpecificationsSet
    return new Promise((resolve) => {
      // Call: AddProductSpecificationsSet(name, urls)
      resolve({});
    });
  }

  deleteProductSpecificationsSet(uuid) {
    // Method: DeleteProductSpecificationsSet
    // Call: DeleteProductSpecificationsSet(uuid)
  }

  setNameForProductSpecificationsSet(uuid, name) {
    // Method: SetNameForProductSpecificationsSet
    return new Promise((resolve) => {
      // Call: SetNameForProductSpecificationsSet(uuid, name)
      resolve({});
    });
  }

  setUrlsForProductSpecificationsSet(uuid, urls) {
    // Method: SetUrlsForProductSpecificationsSet
    return new Promise((resolve) => {
      // Call: SetUrlsForProductSpecificationsSet(uuid, urls)
      resolve({});
    });
  }

  setProductSpecificationsUserFeedback(feedback) {
    // Method: SetProductSpecificationsUserFeedback
    // Call: SetProductSpecificationsUserFeedback(feedback)
  }

  getProductSpecificationsFeatureState() {
    // Method: GetProductSpecificationsFeatureState
    return new Promise((resolve) => {
      // Call: GetProductSpecificationsFeatureState()
      resolve({});
    });
  }

};

shopping_service.mojom.ShoppingServiceHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
