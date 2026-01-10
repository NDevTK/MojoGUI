// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/aim_eligibility/aim_eligibility.mojom
// Module: aim_eligibility.mojom

'use strict';

// Module namespace
var aim_eligibility = aim_eligibility || {};
aim_eligibility.mojom = aim_eligibility.mojom || {};

aim_eligibility.mojom.EligibilityStateSpec = { $: {} };
aim_eligibility.mojom.Page = {};
aim_eligibility.mojom.Page.$interfaceName = 'aim_eligibility.mojom.Page';
aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler = {};
aim_eligibility.mojom.PageHandler.$interfaceName = 'aim_eligibility.mojom.PageHandler';
aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandlerFactory = {};
aim_eligibility.mojom.PageHandlerFactory.$interfaceName = 'aim_eligibility.mojom.PageHandlerFactory';
aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: EligibilityState
mojo.internal.Struct(
    aim_eligibility.mojom.EligibilityStateSpec, 'aim_eligibility.mojom.EligibilityState', [
      mojo.internal.StructField('is_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_policy', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_dse', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_server', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_server_eligibility_enabled', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('server_response_base64_encoded', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_response_base64_url_encoded', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_response_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_updated', 32, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: Page
mojo.internal.Struct(
    aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec, 'aim_eligibility.mojom.Page_OnEligibilityStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, aim_eligibility.mojom.EligibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [state],
      false);
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

aim_eligibility.mojom.PagePtr = aim_eligibility.mojom.PageRemote;
aim_eligibility.mojom.PageRequest = aim_eligibility.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec, 'aim_eligibility.mojom.PageHandler_GetEligibilityState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec, 'aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, aim_eligibility.mojom.EligibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec, 'aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec, 'aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_Params', [
      mojo.internal.StructField('base64_encoded_response', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec, 'aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  requestServerEligibilityForDebugging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec,
      null,
      [],
      false);
  }

  setEligibilityResponseForDebugging(base64_encoded_response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec,
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec,
      [base64_encoded_response],
      false);
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

aim_eligibility.mojom.PageHandlerPtr = aim_eligibility.mojom.PageHandlerRemote;
aim_eligibility.mojom.PageHandlerRequest = aim_eligibility.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(aim_eligibility.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(aim_eligibility.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

aim_eligibility.mojom.PageHandlerFactoryPtr = aim_eligibility.mojom.PageHandlerFactoryRemote;
aim_eligibility.mojom.PageHandlerFactoryRequest = aim_eligibility.mojom.PageHandlerFactoryPendingReceiver;

