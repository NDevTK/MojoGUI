// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/aim_eligibility/aim_eligibility.mojom
// Module: aim_eligibility.mojom

'use strict';

// Module namespace
var aim_eligibility = aim_eligibility || {};
aim_eligibility.mojom = aim_eligibility.mojom || {};


// Struct: EligibilityState
aim_eligibility.mojom.EligibilityStateSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.EligibilityState',
      packedSize: 48,
      fields: [
        { name: 'is_eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_eligible_by_policy', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_eligible_by_dse', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_eligible_by_server', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_server_eligibility_enabled', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'server_response_base64_encoded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'server_response_base64_url_encoded', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'server_response_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_updated', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: Page
aim_eligibility.mojom.Page = {};

aim_eligibility.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PagePendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEligibilityStateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec,
      null,
      [state]);
  }

};

aim_eligibility.mojom.Page.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnEligibilityStateChanged
aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.Page.OnEligibilityStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: aim_eligibility.mojom.EligibilityStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
aim_eligibility.mojom.PagePtr = aim_eligibility.mojom.PageRemote;
aim_eligibility.mojom.PageRequest = aim_eligibility.mojom.PagePendingReceiver;


// Interface: PageHandler
aim_eligibility.mojom.PageHandler = {};

aim_eligibility.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEligibilityState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec,
      aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec,
      []);
  }

  requestServerEligibilityForDebugging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec,
      null,
      []);
  }

  setEligibilityResponseForDebugging(base64_encoded_response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec,
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec,
      [base64_encoded_response]);
  }

};

aim_eligibility.mojom.PageHandler.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetEligibilityState
aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.PageHandler.GetEligibilityState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: aim_eligibility.mojom.EligibilityStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestServerEligibilityForDebugging
aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.PageHandler.RequestServerEligibilityForDebugging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetEligibilityResponseForDebugging
aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.PageHandler.SetEligibilityResponseForDebugging_Params',
      packedSize: 16,
      fields: [
        { name: 'base64_encoded_response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
aim_eligibility.mojom.PageHandlerPtr = aim_eligibility.mojom.PageHandlerRemote;
aim_eligibility.mojom.PageHandlerRequest = aim_eligibility.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
aim_eligibility.mojom.PageHandlerFactory = {};

aim_eligibility.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

aim_eligibility.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'aim_eligibility.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
aim_eligibility.mojom.PageHandlerFactoryPtr = aim_eligibility.mojom.PageHandlerFactoryRemote;
aim_eligibility.mojom.PageHandlerFactoryRequest = aim_eligibility.mojom.PageHandlerFactoryPendingReceiver;

