// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/extensions_zero_state_promo/zero_state_promo.mojom
// Module: zero_state_promo.mojom

'use strict';

// Module namespace
var zero_state_promo = zero_state_promo || {};
zero_state_promo.mojom = zero_state_promo.mojom || {};

zero_state_promo.mojom.WebStoreLinkClickedSpec = { $: mojo.internal.Enum() };
zero_state_promo.mojom.PageHandlerFactory = {};
zero_state_promo.mojom.PageHandlerFactory.$interfaceName = 'zero_state_promo.mojom.PageHandlerFactory';
zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
zero_state_promo.mojom.PageHandler = {};
zero_state_promo.mojom.PageHandler.$interfaceName = 'zero_state_promo.mojom.PageHandler';
zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec = { $: {} };

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

// Interface: PageHandlerFactory
mojo.internal.Struct(
    zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(zero_state_promo.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

zero_state_promo.mojom.PageHandlerFactoryPtr = zero_state_promo.mojom.PageHandlerFactoryRemote;
zero_state_promo.mojom.PageHandlerFactoryRequest = zero_state_promo.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec, 'zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_Params', [
      mojo.internal.StructField('link', 0, 0, zero_state_promo.mojom.WebStoreLinkClickedSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [link],
      false);
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

zero_state_promo.mojom.PageHandlerPtr = zero_state_promo.mojom.PageHandlerRemote;
zero_state_promo.mojom.PageHandlerRequest = zero_state_promo.mojom.PageHandlerPendingReceiver;

