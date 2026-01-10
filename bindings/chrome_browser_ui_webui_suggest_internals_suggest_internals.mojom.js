// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/suggest_internals/suggest_internals.mojom
// Module: suggest_internals.mojom

'use strict';

// Module namespace
var suggest_internals = suggest_internals || {};
suggest_internals.mojom = suggest_internals.mojom || {};
var url = url || {};

suggest_internals.mojom.RequestStatusSpec = { $: mojo.internal.Enum() };
suggest_internals.mojom.RequestSpec = { $: {} };
suggest_internals.mojom.PageHandler = {};
suggest_internals.mojom.PageHandler.$interfaceName = 'suggest_internals.mojom.PageHandler';
suggest_internals.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec = { $: {} };
suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec = { $: {} };
suggest_internals.mojom.Page = {};
suggest_internals.mojom.Page.$interfaceName = 'suggest_internals.mojom.Page';
suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec = { $: {} };
suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec = { $: {} };
suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec = { $: {} };

// Enum: RequestStatus
suggest_internals.mojom.RequestStatus = {
  kHardcoded: 0,
  kCreated: 1,
  kSent: 2,
  kSucceeded: 3,
  kFailed: 4,
};

// Struct: Request
mojo.internal.Struct(
    suggest_internals.mojom.RequestSpec, 'suggest_internals.mojom.Request', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 48, 0, suggest_internals.mojom.RequestStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 24, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 32, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('response', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandler
mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_SetPage_ParamsSpec, 'suggest_internals.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(suggest_internals.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec, 'suggest_internals.mojom.PageHandler_HardcodeResponse_Params', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delay', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec, 'suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParams', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

suggest_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

suggest_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'suggest_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      suggest_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new suggest_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

suggest_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      suggest_internals.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

  hardcodeResponse(response, delay) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec,
      suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec,
      [response, delay]);
  }

};

suggest_internals.mojom.PageHandler.getRemote = function() {
  let remote = new suggest_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'suggest_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

suggest_internals.mojom.PageHandlerPtr = suggest_internals.mojom.PageHandlerRemote;
suggest_internals.mojom.PageHandlerRequest = suggest_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestCreated_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestStarted_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestCompleted_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

suggest_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

suggest_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'suggest_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      suggest_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new suggest_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

suggest_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestCreated(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec,
      null,
      [request]);
  }

  onRequestStarted(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec,
      null,
      [request]);
  }

  onRequestCompleted(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec,
      null,
      [request]);
  }

};

suggest_internals.mojom.Page.getRemote = function() {
  let remote = new suggest_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'suggest_internals.mojom.Page',
    'context');
  return remote.$;
};

suggest_internals.mojom.PagePtr = suggest_internals.mojom.PageRemote;
suggest_internals.mojom.PageRequest = suggest_internals.mojom.PagePendingReceiver;

