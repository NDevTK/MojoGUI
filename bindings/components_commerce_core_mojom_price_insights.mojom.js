// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_insights.mojom
// Module: commerce.price_insights.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_insights = commerce.price_insights || {};
commerce.price_insights.mojom = commerce.price_insights.mojom || {};

commerce.price_insights.mojom.PriceInsightsHandler = {};
commerce.price_insights.mojom.PriceInsightsHandler.$interfaceName = 'commerce.price_insights.mojom.PriceInsightsHandler';
commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec = { $: {} };
commerce.price_insights.mojom.PriceInsightsHandlerFactory = {};
commerce.price_insights.mojom.PriceInsightsHandlerFactory.$interfaceName = 'commerce.price_insights.mojom.PriceInsightsHandlerFactory';
commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec = { $: {} };

// Interface: PriceInsightsHandler
mojo.internal.Struct(
    commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec, 'commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec, 'commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  showFeedback() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec,
      null,
      [],
      false);
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

commerce.price_insights.mojom.PriceInsightsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 1: {
          const params = commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showFeedback();
          break;
        }
      }
    });
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerReceiver = commerce.price_insights.mojom.PriceInsightsHandlerReceiver;

commerce.price_insights.mojom.PriceInsightsHandlerPtr = commerce.price_insights.mojom.PriceInsightsHandlerRemote;
commerce.price_insights.mojom.PriceInsightsHandlerRequest = commerce.price_insights.mojom.PriceInsightsHandlerPendingReceiver;


// Interface: PriceInsightsHandlerFactory
mojo.internal.Struct(
    commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec, 'commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(commerce.price_insights.mojom.PriceInsightsHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

commerce.price_insights.mojom.PriceInsightsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPriceInsightsHandler(params.handler);
          break;
        }
      }
    });
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryReceiver = commerce.price_insights.mojom.PriceInsightsHandlerFactoryReceiver;

commerce.price_insights.mojom.PriceInsightsHandlerFactoryPtr = commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemote;
commerce.price_insights.mojom.PriceInsightsHandlerFactoryRequest = commerce.price_insights.mojom.PriceInsightsHandlerFactoryPendingReceiver;

