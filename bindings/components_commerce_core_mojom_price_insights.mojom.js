// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_insights.mojom
// Module: commerce.price_insights.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_insights = commerce.price_insights || {};
commerce.price_insights.mojom = commerce.price_insights.mojom || {};


// Interface: PriceInsightsHandler
commerce.price_insights.mojom.PriceInsightsHandler = {};

commerce.price_insights.mojom.PriceInsightsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.price_insights.mojom.PriceInsightsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_insights.mojom.PriceInsightsHandlerPendingReceiver,
      handle);
    this.$ = new commerce.price_insights.mojom.PriceInsightsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showSidePanelUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec,
      null,
      []);
  }

  showFeedback() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec,
      null,
      []);
  }

};

commerce.price_insights.mojom.PriceInsightsHandler.getRemote = function() {
  let remote = new commerce.price_insights.mojom.PriceInsightsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_insights.mojom.PriceInsightsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowSidePanelUI
commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_insights.mojom.PriceInsightsHandler.ShowSidePanelUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowFeedback
commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_insights.mojom.PriceInsightsHandler.ShowFeedback_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.price_insights.mojom.PriceInsightsHandlerPtr = commerce.price_insights.mojom.PriceInsightsHandlerRemote;
commerce.price_insights.mojom.PriceInsightsHandlerRequest = commerce.price_insights.mojom.PriceInsightsHandlerPendingReceiver;


// Interface: PriceInsightsHandlerFactory
commerce.price_insights.mojom.PriceInsightsHandlerFactory = {};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.price_insights.mojom.PriceInsightsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_insights.mojom.PriceInsightsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPriceInsightsHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec,
      null,
      [handler]);
  }

};

commerce.price_insights.mojom.PriceInsightsHandlerFactory.getRemote = function() {
  let remote = new commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_insights.mojom.PriceInsightsHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePriceInsightsHandler
commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce.price_insights.mojom.PriceInsightsHandlerFactory.CreatePriceInsightsHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
commerce.price_insights.mojom.PriceInsightsHandlerFactoryPtr = commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemote;
commerce.price_insights.mojom.PriceInsightsHandlerFactoryRequest = commerce.price_insights.mojom.PriceInsightsHandlerFactoryPendingReceiver;

