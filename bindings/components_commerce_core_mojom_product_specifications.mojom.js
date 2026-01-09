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
commerce.product_specifications.mojom.ProductSpecificationsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandler';
  }

  setAcceptedDisclosureVersion(version) {
    // Method: SetAcceptedDisclosureVersion
    // Call: SetAcceptedDisclosureVersion(version)
  }

  succeeded(shown) {
    // Method: succeeded
    // Call: succeeded(shown)
  }

  maybeShowDisclosure(urls, name, set_id) {
    // Method: MaybeShowDisclosure
    return new Promise((resolve) => {
      // Call: MaybeShowDisclosure(urls, name, set_id)
      resolve({});
    });
  }

  declineDisclosure() {
    // Method: DeclineDisclosure
    // Call: DeclineDisclosure()
  }

  showSyncSetupFlow() {
    // Method: ShowSyncSetupFlow
    // Call: ShowSyncSetupFlow()
  }

  getPageTitleFromHistory(url) {
    // Method: GetPageTitleFromHistory
    return new Promise((resolve) => {
      // Call: GetPageTitleFromHistory(url)
      resolve({});
    });
  }

  showProductSpecificationsSetForUuid(uuid, in_new_tab) {
    // Method: ShowProductSpecificationsSetForUuid
    // Call: ShowProductSpecificationsSetForUuid(uuid, in_new_tab)
  }

  showProductSpecificationsSetsForUuids(uuids, disposition) {
    // Method: ShowProductSpecificationsSetsForUuids
    // Call: ShowProductSpecificationsSetsForUuids(uuids, disposition)
  }

  showComparePage(in_new_tab) {
    // Method: ShowComparePage
    // Call: ShowComparePage(in_new_tab)
  }

  getComparisonTableUrlForUuid(uuid) {
    // Method: GetComparisonTableUrlForUuid
    return new Promise((resolve) => {
      // Call: GetComparisonTableUrlForUuid(uuid)
      resolve({});
    });
  }

};

commerce.product_specifications.mojom.ProductSpecificationsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
commerce.product_specifications.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.product_specifications.mojom.Page';
  }

  onProductSpecificationsSetAdded(set) {
    // Method: OnProductSpecificationsSetAdded
    // Call: OnProductSpecificationsSetAdded(set)
  }

  onProductSpecificationsSetUpdated(set) {
    // Method: OnProductSpecificationsSetUpdated
    // Call: OnProductSpecificationsSetUpdated(set)
  }

  onProductSpecificationsSetRemoved(uuid) {
    // Method: OnProductSpecificationsSetRemoved
    // Call: OnProductSpecificationsSetRemoved(uuid)
  }

  onSyncStateChanged() {
    // Method: OnSyncStateChanged
    // Call: OnSyncStateChanged()
  }

};

commerce.product_specifications.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProductSpecificationsHandlerFactory
commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory';
  }

  createProductSpecificationsHandler(page, handler) {
    // Method: CreateProductSpecificationsHandler
    // Call: CreateProductSpecificationsHandler(page, handler)
  }

};

commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
