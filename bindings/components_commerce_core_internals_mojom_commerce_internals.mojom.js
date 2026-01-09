// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/internals/mojom/commerce_internals.mojom
// Module: commerce.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.mojom = commerce.mojom || {};


// Struct: EligibilityDetail
commerce.mojom.EligibilityDetail = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : false;
    this.expected_value = values.expected_value !== undefined ? values.expected_value : false;
  }
};

// Struct: ShoppingEligibilityDetails
commerce.mojom.ShoppingEligibilityDetails = class {
  constructor(values = {}) {
    this.details = values.details !== undefined ? values.details : "";
  }
};

// Struct: Subscription
commerce.mojom.Subscription = class {
  constructor(values = {}) {
    this.product_infos = values.product_infos !== undefined ? values.product_infos : 0;
  }
};

// Struct: ProductSpecificationsSet
commerce.mojom.ProductSpecificationsSet = class {
  constructor(values = {}) {
    this.url_infos = values.url_infos !== undefined ? values.url_infos : "";
  }
};

// Interface: CommerceInternalsHandlerFactory
commerce.mojom.CommerceInternalsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.mojom.CommerceInternalsHandlerFactory';
  }

  createCommerceInternalsHandler(page, handler) {
    // Method: CreateCommerceInternalsHandler
    // Call: CreateCommerceInternalsHandler(page, handler)
  }

};

commerce.mojom.CommerceInternalsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CommerceInternalsHandler
commerce.mojom.CommerceInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.mojom.CommerceInternalsHandler';
  }

  getIsShoppingListEligible() {
    // Method: GetIsShoppingListEligible
    return new Promise((resolve) => {
      // Call: GetIsShoppingListEligible()
      resolve({});
    });
  }

  resetPriceTrackingEmailPref() {
    // Method: ResetPriceTrackingEmailPref
    // Call: ResetPriceTrackingEmailPref()
  }

  getProductInfoForUrl(url) {
    // Method: GetProductInfoForUrl
    return new Promise((resolve) => {
      // Call: GetProductInfoForUrl(url)
      resolve({});
    });
  }

  getSubscriptionDetails() {
    // Method: GetSubscriptionDetails
    return new Promise((resolve) => {
      // Call: GetSubscriptionDetails()
      resolve({});
    });
  }

  getProductSpecificationsDetails() {
    // Method: GetProductSpecificationsDetails
    return new Promise((resolve) => {
      // Call: GetProductSpecificationsDetails()
      resolve({});
    });
  }

  resetProductSpecifications() {
    // Method: ResetProductSpecifications
    // Call: ResetProductSpecifications()
  }

  getShoppingEligibilityDetails() {
    // Method: GetShoppingEligibilityDetails
    return new Promise((resolve) => {
      // Call: GetShoppingEligibilityDetails()
      resolve({});
    });
  }

};

commerce.mojom.CommerceInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CommerceInternalsPage
commerce.mojom.CommerceInternalsPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.mojom.CommerceInternalsPage';
  }

  onShoppingListEligibilityChanged(eligible) {
    // Method: OnShoppingListEligibilityChanged
    // Call: OnShoppingListEligibilityChanged(eligible)
  }

};

commerce.mojom.CommerceInternalsPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
