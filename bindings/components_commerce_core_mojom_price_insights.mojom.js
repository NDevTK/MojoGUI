// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_insights.mojom
// Module: commerce.price_insights.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_insights = commerce.price_insights || {};
commerce.price_insights.mojom = commerce.price_insights.mojom || {};


// Interface: PriceInsightsHandler
commerce.price_insights.mojom.PriceInsightsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.price_insights.mojom.PriceInsightsHandler';
  }

  showSidePanelUI() {
    // Method: ShowSidePanelUI
    // Call: ShowSidePanelUI()
  }

  showFeedback() {
    // Method: ShowFeedback
    // Call: ShowFeedback()
  }

};

commerce.price_insights.mojom.PriceInsightsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PriceInsightsHandlerFactory
commerce.price_insights.mojom.PriceInsightsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'commerce.price_insights.mojom.PriceInsightsHandlerFactory';
  }

  createPriceInsightsHandler(handler) {
    // Method: CreatePriceInsightsHandler
    // Call: CreatePriceInsightsHandler(handler)
  }

};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
