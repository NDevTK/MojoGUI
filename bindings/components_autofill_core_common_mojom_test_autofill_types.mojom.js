// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/common/mojom/test_autofill_types.mojom
// Module: autofill.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var autofill = autofill || {};
autofill.mojom = autofill.mojom || {};

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
  passFormData(s) {
    return this.$.passFormData(s);
  }
  passFormFieldData(s) {
    return this.$.passFormFieldData(s);
  }
  passFormDataPredictions(s) {
    return this.$.passFormDataPredictions(s);
  }
  passFormFieldDataPredictions(s) {
    return this.$.passFormFieldDataPredictions(s);
  }
  passPasswordFormFillData(s) {
    return this.$.passPasswordFormFillData(s);
  }
  passPasswordFormGenerationData(s) {
    return this.$.passPasswordFormGenerationData(s);
  }
  passPasswordGenerationUIData(s) {
    return this.$.passPasswordGenerationUIData(s);
  }
  passPasswordSuggestionRequest(s) {
    return this.$.passPasswordSuggestionRequest(s);
  }
};

autofill.mojom.TypeTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TypeTraitsTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  passFormData(s) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec,
      [s],
      false);
  }

  passFormFieldData(s) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec,
      [s],
      false);
  }

  passFormDataPredictions(s) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec,
      [s],
      false);
  }

  passFormFieldDataPredictions(s) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordFormFillData(s) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordFormGenerationData(s) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordGenerationUIData(s) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec,
      [s],
      false);
  }

  passPasswordSuggestionRequest(s) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec,
      autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec,
      [s],
      false);
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

autofill.mojom.TypeTraitsTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TypeTraitsTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec.$.structSpec);
          const result = this.impl.passFormData(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassFormData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec.$.structSpec);
          const result = this.impl.passFormFieldData(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassFormFieldData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec.$.structSpec);
          const result = this.impl.passFormDataPredictions(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec.$.structSpec);
          const result = this.impl.passFormFieldDataPredictions(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec.$.structSpec);
          const result = this.impl.passPasswordFormFillData(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec.$.structSpec);
          const result = this.impl.passPasswordFormGenerationData(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec.$.structSpec);
          const result = this.impl.passPasswordGenerationUIData(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec.$.structSpec);
          const result = this.impl.passPasswordSuggestionRequest(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

autofill.mojom.TypeTraitsTestReceiver = autofill.mojom.TypeTraitsTestReceiver;

autofill.mojom.TypeTraitsTestPtr = autofill.mojom.TypeTraitsTestRemote;
autofill.mojom.TypeTraitsTestRequest = autofill.mojom.TypeTraitsTestPendingReceiver;

