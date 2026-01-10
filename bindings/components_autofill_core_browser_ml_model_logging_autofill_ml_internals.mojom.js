// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/browser/ml_model/logging/autofill_ml_internals.mojom
// Module: autofill_ml_internals.mojom

'use strict';

// Module namespace
var autofill_ml_internals = autofill_ml_internals || {};
autofill_ml_internals.mojom = autofill_ml_internals.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

autofill_ml_internals.mojom.OptimizationTargetSpec = { $: mojo.internal.Enum() };
autofill_ml_internals.mojom.SelectOptionSpec = { $: {} };
autofill_ml_internals.mojom.MlFieldPredictionLogSpec = { $: {} };
autofill_ml_internals.mojom.MlPredictionLogSpec = { $: {} };
autofill_ml_internals.mojom.Page = {};
autofill_ml_internals.mojom.Page.$interfaceName = 'autofill_ml_internals.mojom.Page';
autofill_ml_internals.mojom.Page_OnLogAdded_ParamsSpec = { $: {} };
autofill_ml_internals.mojom.PageHandler = {};
autofill_ml_internals.mojom.PageHandler.$interfaceName = 'autofill_ml_internals.mojom.PageHandler';
autofill_ml_internals.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };

// Enum: OptimizationTarget
autofill_ml_internals.mojom.OptimizationTarget = {
  kUnknown: 0,
  kAutofill: 1,
  kPassword: 2,
};

// Struct: SelectOption
mojo.internal.Struct(
    autofill_ml_internals.mojom.SelectOptionSpec, 'autofill_ml_internals.mojom.SelectOption', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MlFieldPredictionLog
mojo.internal.Struct(
    autofill_ml_internals.mojom.MlFieldPredictionLogSpec, 'autofill_ml_internals.mojom.MlFieldPredictionLog', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('placeholder', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('autocomplete', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('form_control_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('select_options', 48, 0, mojo.internal.Array(autofill_ml_internals.mojom.SelectOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('probabilities', 56, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 0, undefined),
      mojo.internal.StructField('tokenized_field_representation', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: MlPredictionLog
mojo.internal.Struct(
    autofill_ml_internals.mojom.MlPredictionLogSpec, 'autofill_ml_internals.mojom.MlPredictionLog', [
      mojo.internal.StructField('form_signature', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('form_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_output_types', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('field_predictions', 24, 0, mojo.internal.Array(autofill_ml_internals.mojom.MlFieldPredictionLogSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('start_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 48, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('optimization_target', 56, 0, autofill_ml_internals.mojom.OptimizationTargetSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: Page
mojo.internal.Struct(
    autofill_ml_internals.mojom.Page_OnLogAdded_ParamsSpec, 'autofill_ml_internals.mojom.Page_OnLogAdded_Params', [
      mojo.internal.StructField('log', 0, 0, autofill_ml_internals.mojom.MlPredictionLogSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [log],
      false);
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

autofill_ml_internals.mojom.PageReceiver = class {
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
          const params = autofill_ml_internals.mojom.Page_OnLogAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLogAdded(params.log);
          break;
        }
      }
    });
  }
};

autofill_ml_internals.mojom.PageReceiver = autofill_ml_internals.mojom.PageReceiver;

autofill_ml_internals.mojom.PagePtr = autofill_ml_internals.mojom.PageRemote;
autofill_ml_internals.mojom.PageRequest = autofill_ml_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    autofill_ml_internals.mojom.PageHandler_SetPage_ParamsSpec, 'autofill_ml_internals.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(autofill_ml_internals.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [page],
      false);
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

autofill_ml_internals.mojom.PageHandlerReceiver = class {
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
          const params = autofill_ml_internals.mojom.PageHandler_SetPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPage(params.page);
          break;
        }
      }
    });
  }
};

autofill_ml_internals.mojom.PageHandlerReceiver = autofill_ml_internals.mojom.PageHandlerReceiver;

autofill_ml_internals.mojom.PageHandlerPtr = autofill_ml_internals.mojom.PageHandlerRemote;
autofill_ml_internals.mojom.PageHandlerRequest = autofill_ml_internals.mojom.PageHandlerPendingReceiver;

