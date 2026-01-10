// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/common/mojom/test_autofill_types.mojom
// Module: autofill.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PassFormData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassFormData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PassFormFieldData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassFormFieldData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PassFormDataPredictions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassFormDataPredictions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PassFormFieldDataPredictions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassFormFieldDataPredictions (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: PassPasswordFormFillData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassPasswordFormFillData (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PassPasswordFormGenerationData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassPasswordFormGenerationData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PassPasswordGenerationUIData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassPasswordGenerationUIData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PassPasswordSuggestionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassPasswordSuggestionRequest (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passFormData');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passFormFieldData');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormDataPredictions_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passFormDataPredictions');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassFormFieldDataPredictions_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passFormFieldDataPredictions');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormFillData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passPasswordFormFillData');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordFormGenerationData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passPasswordFormGenerationData');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordGenerationUIData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passPasswordGenerationUIData');
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
          const params = decoder.decodeStructInline(autofill.mojom.TypeTraitsTest_PassPasswordSuggestionRequest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.passPasswordSuggestionRequest');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

autofill.mojom.TypeTraitsTestReceiver = autofill.mojom.TypeTraitsTestReceiver;

autofill.mojom.TypeTraitsTestPtr = autofill.mojom.TypeTraitsTestRemote;
autofill.mojom.TypeTraitsTestRequest = autofill.mojom.TypeTraitsTestPendingReceiver;

