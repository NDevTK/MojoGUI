// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_language_model.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: AIManagerCreateLanguageModelClient
blink.mojom.AIManagerCreateLanguageModelClient = {};

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
      [language_model_remote, info]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
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

// ParamsSpec for OnResult
blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateLanguageModelClient.OnResult_Params',
      packedSize: 24,
      fields: [
        { name: 'language_model_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateLanguageModelClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'quota_error_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIManagerCreateLanguageModelClientPtr = blink.mojom.AIManagerCreateLanguageModelClientRemote;
blink.mojom.AIManagerCreateLanguageModelClientRequest = blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver;


// Interface: AILanguageModel
blink.mojom.AILanguageModel = {};

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
      [prompts, constraint, pending_responder]);
  }

  append(prompts, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AILanguageModel_Append_ParamsSpec,
      null,
      [prompts, client]);
  }

  fork(client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AILanguageModel_Fork_ParamsSpec,
      null,
      [client]);
  }

  destroy() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AILanguageModel_Destroy_ParamsSpec,
      null,
      []);
  }

  measureInputUsage(input) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec,
      blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec,
      [input]);
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

// ParamsSpec for Prompt
blink.mojom.AILanguageModel_Prompt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.Prompt_Params',
      packedSize: 32,
      fields: [
        { name: 'prompts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'constraint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Append
blink.mojom.AILanguageModel_Append_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.Append_Params',
      packedSize: 24,
      fields: [
        { name: 'prompts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Fork
blink.mojom.AILanguageModel_Fork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.Fork_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Destroy
blink.mojom.AILanguageModel_Destroy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.Destroy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MeasureInputUsage
blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.MeasureInputUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageModel.MeasureInputUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AILanguageModelPtr = blink.mojom.AILanguageModelRemote;
blink.mojom.AILanguageModelRequest = blink.mojom.AILanguageModelPendingReceiver;

