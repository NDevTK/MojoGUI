// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/suggest_internals/suggest_internals.mojom
// Module: suggest_internals.mojom

'use strict';

// Module namespace
var suggest_internals = suggest_internals || {};
suggest_internals.mojom = suggest_internals.mojom || {};


// Enum: RequestStatus
suggest_internals.mojom.RequestStatus = {
  kHardcoded: 0,
  kCreated: 1,
  kSent: 2,
  kSucceeded: 3,
  kFailed: 4,
};

// Struct: Request
suggest_internals.mojom.RequestSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.Request',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
suggest_internals.mojom.PageHandler = {};

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

// ParamsSpec for SetPage
suggest_internals.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HardcodeResponse
suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.PageHandler.HardcodeResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'delay', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.PageHandler.HardcodeResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
suggest_internals.mojom.PageHandlerPtr = suggest_internals.mojom.PageHandlerRemote;
suggest_internals.mojom.PageHandlerRequest = suggest_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
suggest_internals.mojom.Page = {};

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

// ParamsSpec for OnRequestCreated
suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.Page.OnRequestCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestStarted
suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.Page.OnRequestStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestCompleted
suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'suggest_internals.mojom.Page.OnRequestCompleted_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
suggest_internals.mojom.PagePtr = suggest_internals.mojom.PageRemote;
suggest_internals.mojom.PageRequest = suggest_internals.mojom.PagePendingReceiver;

