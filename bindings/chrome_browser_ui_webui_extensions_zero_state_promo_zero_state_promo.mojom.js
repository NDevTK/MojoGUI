// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/extensions_zero_state_promo/zero_state_promo.mojom
// Module: zero_state_promo.mojom

'use strict';

// Module namespace
var zero_state_promo = zero_state_promo || {};
zero_state_promo.mojom = zero_state_promo.mojom || {};


zero_state_promo.mojom.kDiscoverExtensionWebStoreUrl = "https:
const string kCouponWebStoreUrl = "https:
const string kWritingWebStoreUrl = "https:
const string kProductivityWebStoreUrl = "https:
const string kAiWebStoreUrl = "https:


interface PageHandlerFactory {
  
  CreatePageHandler(pending_receiver<PageHandler> handler);

// Enum: WebStoreLinkClicked
zero_state_promo.mojom.WebStoreLinkClicked = {
  kDiscoverExtension: 0,
  kCoupon: 1,
  kWriting: 2,
  kProductivity: 3,
  kAi: 4,
};
zero_state_promo.mojom.WebStoreLinkClickedSpec = { $: mojo.internal.Enum() };

// Interface: PageHandlerFactory
zero_state_promo.mojom.PageHandlerFactory = {};

zero_state_promo.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

zero_state_promo.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'zero_state_promo.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      zero_state_promo.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new zero_state_promo.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

zero_state_promo.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

zero_state_promo.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new zero_state_promo.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'zero_state_promo.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'zero_state_promo.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
zero_state_promo.mojom.PageHandlerFactoryPtr = zero_state_promo.mojom.PageHandlerFactoryRemote;
zero_state_promo.mojom.PageHandlerFactoryRequest = zero_state_promo.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
zero_state_promo.mojom.PageHandler = {};

zero_state_promo.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

zero_state_promo.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'zero_state_promo.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      zero_state_promo.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new zero_state_promo.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

zero_state_promo.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchWebStoreLink(link) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec,
      null,
      [link]);
  }

};

zero_state_promo.mojom.PageHandler.getRemote = function() {
  let remote = new zero_state_promo.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'zero_state_promo.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LaunchWebStoreLink
zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'zero_state_promo.mojom.PageHandler.LaunchWebStoreLink_Params',
      packedSize: 16,
      fields: [
        { name: 'link', packedOffset: 0, packedBitOffset: 0, type: zero_state_promo.mojom.WebStoreLinkClickedSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
zero_state_promo.mojom.PageHandlerPtr = zero_state_promo.mojom.PageHandlerRemote;
zero_state_promo.mojom.PageHandlerRequest = zero_state_promo.mojom.PageHandlerPendingReceiver;

