// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/common/mojom/test_autofill_types.mojom
// Module: autofill.mojom

'use strict';

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};


// Interface: TypeTraitsTest
autofill.mojom.TypeTraitsTest = {};

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
      [s]);
  }

  passFormFieldData(s) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec,
      [s]);
  }

  passFormDataPredictions(s) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec,
      [s]);
  }

  passFormFieldDataPredictions(s) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec,
      [s]);
  }

  passPasswordFormFillData(s) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec,
      [s]);
  }

  passPasswordFormGenerationData(s) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec,
      [s]);
  }

  passPasswordGenerationUIData(s) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec,
      [s]);
  }

  passPasswordSuggestionRequest(s) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec,
      [s]);
  }

};

autofill.mojom.TypeTraitsTest.getRemote = function() {
  let remote = new autofill.mojom.TypeTraitsTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'autofill.mojom.TypeTraitsTest',
    'context');
  return remote.$;
};

// ParamsSpec for PassFormData
autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormData_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassFormFieldData
autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormFieldData_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormFieldDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormFieldData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormFieldDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassFormDataPredictions
autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormDataPredictions_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormDataPredictionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormDataPredictions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormDataPredictionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassFormFieldDataPredictions
autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormFieldDataPredictions_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormFieldDataPredictionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassFormFieldDataPredictions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.FormFieldDataPredictionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassPasswordFormFillData
autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordFormFillData_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordFormFillDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordFormFillData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordFormFillDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassPasswordFormGenerationData
autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordFormGenerationData_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordFormGenerationDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordFormGenerationData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordFormGenerationDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassPasswordGenerationUIData
autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordGenerationUIData_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordGenerationUIDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordGenerationUIData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordGenerationUIDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassPasswordSuggestionRequest
autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordSuggestionRequest_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordSuggestionRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'autofill.mojom.TypeTraitsTest.PassPasswordSuggestionRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passed', packedOffset: 0, packedBitOffset: 0, type: autofill.mojom.PasswordSuggestionRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
autofill.mojom.TypeTraitsTestPtr = autofill.mojom.TypeTraitsTestRemote;
autofill.mojom.TypeTraitsTestRequest = autofill.mojom.TypeTraitsTestPendingReceiver;

