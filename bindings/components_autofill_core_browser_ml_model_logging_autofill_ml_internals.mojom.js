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

// Struct: SelectOption
autofill_ml_internals.mojom.SelectOptionSpec = {
  $: {
    structSpec: {
      name: 'autofill_ml_internals.mojom.SelectOption',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MlFieldPredictionLog
autofill_ml_internals.mojom.MlFieldPredictionLogSpec = {
  $: {
    structSpec: {
      name: 'autofill_ml_internals.mojom.MlFieldPredictionLog',
      packedSize: 80,
      fields: [
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'placeholder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'autocomplete', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'form_control_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'select_options', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'probabilities', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'tokenized_field_representation', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MlPredictionLog
autofill_ml_internals.mojom.MlPredictionLogSpec = {
  $: {
    structSpec: {
      name: 'autofill_ml_internals.mojom.MlPredictionLog',
      packedSize: 72,
      fields: [
        { name: 'form_signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'form_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'model_output_types', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'field_predictions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'start_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'duration', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'optimization_target', packedOffset: 64, packedBitOffset: 0, type: autofill_ml_internals.mojom.OptimizationTargetSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
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
        { name: 'log', packedOffset: 8, packedBitOffset: 0, type: autofill_ml_internals.mojom.MlPredictionLogSpec, nullable: false },
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
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill_ml_internals.mojom.PageHandlerPtr = autofill_ml_internals.mojom.PageHandlerRemote;
autofill_ml_internals.mojom.PageHandlerRequest = autofill_ml_internals.mojom.PageHandlerPendingReceiver;

