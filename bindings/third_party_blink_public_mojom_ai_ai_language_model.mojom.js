// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_language_model.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.AIManagerCreateLanguageModelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(language_model_remote, info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec,
      null,
      [language_model_remote, info],
      false);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onResult(params.language_model_remote, params.info);
          break;
        }
        case 1: {
          const params = blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
    });
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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientSpec), null, false, 0, undefined),
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
};

blink.mojom.AILanguageModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prompt(prompts, constraint, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AILanguageModel_Prompt_ParamsSpec,
      null,
      [prompts, constraint, pending_responder],
      false);
  }

  append(prompts, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AILanguageModel_Append_ParamsSpec,
      null,
      [prompts, client],
      false);
  }

  fork(client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AILanguageModel_Fork_ParamsSpec,
      null,
      [client],
      false);
  }

  destroy() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AILanguageModel_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

  measureInputUsage(input) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AILanguageModel_Prompt_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prompt(params.prompts, params.constraint, params.pending_responder);
          break;
        }
        case 1: {
          const params = blink.mojom.AILanguageModel_Append_ParamsSpec.$.decode(message.payload);
          const result = this.impl.append(params.prompts, params.client);
          break;
        }
        case 2: {
          const params = blink.mojom.AILanguageModel_Fork_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fork(params.client);
          break;
        }
        case 3: {
          const params = blink.mojom.AILanguageModel_Destroy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.destroy();
          break;
        }
        case 4: {
          const params = blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.measureInputUsage(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.AILanguageModelReceiver = blink.mojom.AILanguageModelReceiver;

blink.mojom.AILanguageModelPtr = blink.mojom.AILanguageModelRemote;
blink.mojom.AILanguageModelRequest = blink.mojom.AILanguageModelPendingReceiver;

