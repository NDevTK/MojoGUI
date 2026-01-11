// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_language_model.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var on_device_model = on_device_model || {};
var skia = skia || {};

blink.mojom.AILanguageModelPromptRoleSpec = { $: mojo.internal.Enum() };
blink.mojom.AILanguageModelPromptTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AILanguageModelPromptContentSpec = { $: {} };
blink.mojom.AILanguageModelSamplingParamsSpec = { $: {} };
blink.mojom.AILanguageModelParamsSpec = { $: {} };
blink.mojom.AILanguageModelInstanceInfoSpec = { $: {} };
blink.mojom.AILanguageModelExpectedSpec = { $: {} };
blink.mojom.AILanguageModelPromptSpec = { $: {} };
blink.mojom.AILanguageModelCreateOptionsSpec = { $: {} };
blink.mojom.AIManagerCreateLanguageModelClient = {};
blink.mojom.AIManagerCreateLanguageModelClient.$interfaceName = 'blink.mojom.AIManagerCreateLanguageModelClient';
blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel = {};
blink.mojom.AILanguageModel.$interfaceName = 'blink.mojom.AILanguageModel';
blink.mojom.AILanguageModel_Prompt_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Append_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Fork_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Destroy_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec = { $: {} };

// Enum: AILanguageModelPromptRole
blink.mojom.AILanguageModelPromptRole = {
  kSystem: 0,
  kUser: 1,
  kAssistant: 2,
  kToolCall: 3,
  kToolResponse: 4,
};

// Enum: AILanguageModelPromptType
blink.mojom.AILanguageModelPromptType = {
  kText: 0,
  kImage: 1,
  kAudio: 2,
  kToolCall: 3,
  kToolResponse: 4,
};

// Union: AILanguageModelPromptContent
mojo.internal.Union(
    blink.mojom.AILanguageModelPromptContentSpec, 'blink.mojom.AILanguageModelPromptContent', {
      'text': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bitmap': {
        'ordinal': 1,
        'type': skia.mojom.BitmapN32Spec.$,
        'nullable': false,
      },
      'audio': {
        'ordinal': 2,
        'type': on_device_model.mojom.AudioDataSpec.$,
        'nullable': false,
      },
    });

// Struct: AILanguageModelSamplingParams
mojo.internal.Struct(
    blink.mojom.AILanguageModelSamplingParamsSpec, 'blink.mojom.AILanguageModelSamplingParams', [
      mojo.internal.StructField('top_k', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('temperature', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AILanguageModelParams
mojo.internal.Struct(
    blink.mojom.AILanguageModelParamsSpec, 'blink.mojom.AILanguageModelParams', [
      mojo.internal.StructField('default_sampling_params', 0, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_sampling_params', 8, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AILanguageModelInstanceInfo
mojo.internal.Struct(
    blink.mojom.AILanguageModelInstanceInfoSpec, 'blink.mojom.AILanguageModelInstanceInfo', [
      mojo.internal.StructField('input_quota', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('input_usage', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sampling_params', 16, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_types', 24, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AILanguageModelExpected
mojo.internal.Struct(
    blink.mojom.AILanguageModelExpectedSpec, 'blink.mojom.AILanguageModelExpected', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AILanguageModelPromptTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('languages', 8, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AILanguageModelPrompt
mojo.internal.Struct(
    blink.mojom.AILanguageModelPromptSpec, 'blink.mojom.AILanguageModelPrompt', [
      mojo.internal.StructField('role', 0, 0, blink.mojom.AILanguageModelPromptRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_prefix', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AILanguageModelCreateOptions
mojo.internal.Struct(
    blink.mojom.AILanguageModelCreateOptionsSpec, 'blink.mojom.AILanguageModelCreateOptions', [
      mojo.internal.StructField('sampling_params', 0, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_prompts', 8, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_inputs', 16, 0, mojo.internal.Array(blink.mojom.AILanguageModelExpectedSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('expected_outputs', 24, 0, mojo.internal.Array(blink.mojom.AILanguageModelExpectedSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AIManagerCreateLanguageModelClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateLanguageModelClient_OnResult_Params', [
      mojo.internal.StructField('language_model_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AILanguageModelRemote), null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, blink.mojom.AILanguageModelInstanceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateLanguageModelClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateLanguageModelClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateLanguageModelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateLanguageModelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResult(language_model_remote, info) {
    return this.$.onResult(language_model_remote, info);
  }
  onError(error, quota_error_info) {
    return this.$.onError(error, quota_error_info);
  }
};

blink.mojom.AIManagerCreateLanguageModelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateLanguageModelClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(language_model_remote, info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec,
      null,
      [language_model_remote, info],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateLanguageModelClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateLanguageModelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateLanguageModelClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateLanguageModelClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateLanguageModelClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec.$.structSpec);
          const result = this.impl.onResult(params.language_model_remote, params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AIManagerCreateLanguageModelClientReceiver = blink.mojom.AIManagerCreateLanguageModelClientReceiver;

blink.mojom.AIManagerCreateLanguageModelClientPtr = blink.mojom.AIManagerCreateLanguageModelClientRemote;
blink.mojom.AIManagerCreateLanguageModelClientRequest = blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver;


// Interface: AILanguageModel
mojo.internal.Struct(
    blink.mojom.AILanguageModel_Prompt_ParamsSpec, 'blink.mojom.AILanguageModel_Prompt_Params', [
      mojo.internal.StructField('prompts', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('constraint', 8, 0, on_device_model.mojom.ResponseConstraintSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pending_responder', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Append_ParamsSpec, 'blink.mojom.AILanguageModel_Append_Params', [
      mojo.internal.StructField('prompts', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Fork_ParamsSpec, 'blink.mojom.AILanguageModel_Fork_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Destroy_ParamsSpec, 'blink.mojom.AILanguageModel_Destroy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec, 'blink.mojom.AILanguageModel_MeasureInputUsage_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec, 'blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParams', [
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
    ],
    [[0, 16]]);

blink.mojom.AILanguageModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AILanguageModelRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AILanguageModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AILanguageModelPendingReceiver,
      handle);
    this.$ = new blink.mojom.AILanguageModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  prompt(prompts, constraint, pending_responder) {
    return this.$.prompt(prompts, constraint, pending_responder);
  }
  append(prompts, client) {
    return this.$.append(prompts, client);
  }
  fork(client) {
    return this.$.fork(client);
  }
  destroy() {
    return this.$.destroy();
  }
  measureInputUsage(input) {
    return this.$.measureInputUsage(input);
  }
};

blink.mojom.AILanguageModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AILanguageModel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  prompt(prompts, constraint, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AILanguageModel_Prompt_ParamsSpec,
      null,
      [prompts, constraint, pending_responder],
      false);
  }

  append(prompts, client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AILanguageModel_Append_ParamsSpec,
      null,
      [prompts, client],
      false);
  }

  fork(client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AILanguageModel_Fork_ParamsSpec,
      null,
      [client],
      false);
  }

  destroy() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AILanguageModel_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

  measureInputUsage(input) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec,
      blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec,
      [input],
      false);
  }

};

blink.mojom.AILanguageModel.getRemote = function() {
  let remote = new blink.mojom.AILanguageModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AILanguageModel',
    'context');
  return remote.$;
};

blink.mojom.AILanguageModelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AILanguageModel', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Prompt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Append_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Fork_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Destroy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Prompt_ParamsSpec.$.structSpec);
          const result = this.impl.prompt(params.prompts, params.constraint, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Append_ParamsSpec.$.structSpec);
          const result = this.impl.append(params.prompts, params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Fork_ParamsSpec.$.structSpec);
          const result = this.impl.fork(params.client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Destroy_ParamsSpec.$.structSpec);
          const result = this.impl.destroy();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec.$.structSpec);
          const result = this.impl.measureInputUsage(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AILanguageModelReceiver = blink.mojom.AILanguageModelReceiver;

blink.mojom.AILanguageModelPtr = blink.mojom.AILanguageModelRemote;
blink.mojom.AILanguageModelRequest = blink.mojom.AILanguageModelPendingReceiver;

