// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/browser/ml_model/logging/autofill_ml_internals.mojom
// Module: autofill_ml_internals.mojom

'use strict';

// Module namespace
var autofill_ml_internals = autofill_ml_internals || {};
autofill_ml_internals.mojom = autofill_ml_internals.mojom || {};


// Enum: OptimizationTarget
autofill_ml_internals.mojom.OptimizationTarget = {
  kUnknown: 0,
  kAutofill: 1,
  kPassword: 2,
};

// Interface: Page
autofill_ml_internals.mojom.Page = {};

autofill_ml_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill_ml_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'autofill_ml_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill_ml_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new autofill_ml_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill_ml_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogAdded(log) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill_ml_internals.mojom.Page_OnLogAdded_ParamsSpec,
      null,
      [log]);
  }

};

autofill_ml_internals.mojom.Page.getRemote = function() {
  let remote = new autofill_ml_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill_ml_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogAdded
autofill_ml_internals.mojom.Page_OnLogAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill_ml_internals.mojom.Page.OnLogAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill_ml_internals.mojom.PagePtr = autofill_ml_internals.mojom.PageRemote;
autofill_ml_internals.mojom.PageRequest = autofill_ml_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
autofill_ml_internals.mojom.PageHandler = {};

autofill_ml_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill_ml_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'autofill_ml_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill_ml_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new autofill_ml_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill_ml_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill_ml_internals.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

};

autofill_ml_internals.mojom.PageHandler.getRemote = function() {
  let remote = new autofill_ml_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill_ml_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetPage
autofill_ml_internals.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill_ml_internals.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill_ml_internals.mojom.PageHandlerPtr = autofill_ml_internals.mojom.PageHandlerRemote;
autofill_ml_internals.mojom.PageHandlerRequest = autofill_ml_internals.mojom.PageHandlerPendingReceiver;

