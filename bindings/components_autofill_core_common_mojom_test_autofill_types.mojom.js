// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/common/mojom/test_autofill_types.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};
var components = components || {};

autofill.mojom.TypeTraitsTest = {};
autofill.mojom.TypeTraitsTest.$interfaceName = 'autofill.mojom.TypeTraitsTest';
autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec = { $: {} };
autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec = { $: {} };

// Interface: TypeTraitsTest
mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormData_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormData_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.FormDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormFieldData_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.FormFieldDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.FormFieldDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormDataPredictions_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.FormDataPredictionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.FormDataPredictionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.FormFieldDataPredictionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.FormFieldDataPredictionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.PasswordFormFillDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.PasswordFormFillDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.PasswordFormGenerationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.PasswordFormGenerationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.PasswordGenerationUIDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.PasswordGenerationUIDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_Params', [
      mojo.internal.StructField('s', 0, 0, autofill.mojom.PasswordSuggestionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec, 'autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParams', [
      mojo.internal.StructField('passed', 0, 0, autofill.mojom.PasswordSuggestionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

autofill.mojom.TypeTraitsTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

autofill.mojom.TypeTraitsTestRemote = class {
  static get $interfaceName() {
    return 'autofill.mojom.TypeTraitsTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      autofill.mojom.TypeTraitsTestPendingReceiver,
      handle);
    this.$ = new autofill.mojom.TypeTraitsTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

autofill.mojom.TypeTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  passFormData(s) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec,
      [s],
      false);
  }

  passFormFieldData(s) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec,
      [s],
      false);
  }

  passFormDataPredictions(s) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec,
      [s],
      false);
  }

  passFormFieldDataPredictions(s) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordFormFillData(s) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordFormGenerationData(s) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordGenerationUIData(s) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordSuggestionRequest(s) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec,
      [s],
      false);
  }

};

autofill.mojom.TypeTraitsTest.getRemote = function() {
  let remote = new autofill.mojom.TypeTraitsTestRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'autofill.mojom.TypeTraitsTest',
    'context');
  return remote.$;
};

autofill.mojom.TypeTraitsTestPtr = autofill.mojom.TypeTraitsTestRemote;
autofill.mojom.TypeTraitsTestRequest = autofill.mojom.TypeTraitsTestPendingReceiver;

