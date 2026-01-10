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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = commerce.price_insights.mojom.PriceInsightsHandler_ShowSidePanelUI_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.showSidePanelUI');
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 1: {
          const params = commerce.price_insights.mojom.PriceInsightsHandler_ShowFeedback_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.showFeedback');
          const result = this.impl.showFeedback();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = commerce.price_insights.mojom.PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createPriceInsightsHandler');
          const result = this.impl.createPriceInsightsHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_insights.mojom.PriceInsightsHandlerFactoryReceiver = commerce.price_insights.mojom.PriceInsightsHandlerFactoryReceiver;

commerce.price_insights.mojom.PriceInsightsHandlerFactoryPtr = commerce.price_insights.mojom.PriceInsightsHandlerFactoryRemote;
commerce.price_insights.mojom.PriceInsightsHandlerFactoryRequest = commerce.price_insights.mojom.PriceInsightsHandlerFactoryPendingReceiver;

