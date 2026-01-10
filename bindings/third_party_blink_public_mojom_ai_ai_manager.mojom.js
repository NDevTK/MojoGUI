// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Enum: ModelAvailabilityCheckResult
blink.mojom.mojom.ModelAvailabilityCheckResult = {
  kAvailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kUnavailableServiceNotRunning: 3,
  kUnavailableUnsupportedLanguage: 4,
  kUnavailableUnknown: 5,
  kUnavailableFeatureNotEnabled: 6,
  kUnavailableConfigNotAvailableForFeature: 7,
  kUnavailableGpuBlocked: 8,
  kUnavailableTooManyRecentCrashes: 9,
  kUnavailableSafetyModelNotAvailable: 10,
  kUnavailableSafetyConfigNotAvailableForFeature: 11,
  kUnavailableLanguageDetectionModelNotAvailable: 12,
  kUnavailableFeatureExecutionNotEnabled: 13,
  kUnavailableModelAdaptationNotAvailable: 14,
  kUnavailableValidationPending: 15,
  kUnavailableValidationFailed: 16,
  kUnavailableModelNotEligible: 17,
  kUnavailableInsufficientDiskSpace: 18,
  kUnavailableTranslationNotEligible: 19,
  kUnavailableEnterprisePolicyDisabled: 20,
};
blink.mojom.mojom.ModelAvailabilityCheckResultSpec = { $: mojo.internal.Enum() };

// Interface: AIManagerCreateWriterClient
blink.mojom.mojom.AIManagerCreateWriterClient = {};

blink.mojom.mojom.AIManagerCreateWriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIManagerCreateWriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateWriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIManagerCreateWriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIManagerCreateWriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIManagerCreateWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(writer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec,
      null,
      [writer]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.mojom.AIManagerCreateWriterClient.getRemote = function() {
  let remote = new blink.mojom.mojom.AIManagerCreateWriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateWriterClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnResult
blink.mojom.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateWriterClient.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'writer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateWriterClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIManagerCreateClientErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota_error_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.QuotaErrorInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIManagerCreateWriterClientPtr = blink.mojom.mojom.AIManagerCreateWriterClientRemote;
blink.mojom.mojom.AIManagerCreateWriterClientRequest = blink.mojom.mojom.AIManagerCreateWriterClientPendingReceiver;


// Interface: AIManagerCreateRewriterClient
blink.mojom.mojom.AIManagerCreateRewriterClient = {};

blink.mojom.mojom.AIManagerCreateRewriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIManagerCreateRewriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateRewriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIManagerCreateRewriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIManagerCreateRewriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIManagerCreateRewriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(rewriter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec,
      null,
      [rewriter]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.mojom.AIManagerCreateRewriterClient.getRemote = function() {
  let remote = new blink.mojom.mojom.AIManagerCreateRewriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateRewriterClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnResult
blink.mojom.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateRewriterClient.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'rewriter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateRewriterClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIManagerCreateClientErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota_error_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.QuotaErrorInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIManagerCreateRewriterClientPtr = blink.mojom.mojom.AIManagerCreateRewriterClientRemote;
blink.mojom.mojom.AIManagerCreateRewriterClientRequest = blink.mojom.mojom.AIManagerCreateRewriterClientPendingReceiver;


// Interface: AIManagerCreateSummarizerClient
blink.mojom.mojom.AIManagerCreateSummarizerClient = {};

blink.mojom.mojom.AIManagerCreateSummarizerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIManagerCreateSummarizerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateSummarizerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIManagerCreateSummarizerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIManagerCreateSummarizerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIManagerCreateSummarizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(summarizer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec,
      null,
      [summarizer]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.mojom.AIManagerCreateSummarizerClient.getRemote = function() {
  let remote = new blink.mojom.mojom.AIManagerCreateSummarizerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateSummarizerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnResult
blink.mojom.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateSummarizerClient.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'summarizer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateSummarizerClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIManagerCreateClientErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota_error_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.QuotaErrorInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIManagerCreateSummarizerClientPtr = blink.mojom.mojom.AIManagerCreateSummarizerClientRemote;
blink.mojom.mojom.AIManagerCreateSummarizerClientRequest = blink.mojom.mojom.AIManagerCreateSummarizerClientPendingReceiver;


// Interface: AIManagerCreateProofreaderClient
blink.mojom.mojom.AIManagerCreateProofreaderClient = {};

blink.mojom.mojom.AIManagerCreateProofreaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIManagerCreateProofreaderClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateProofreaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIManagerCreateProofreaderClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIManagerCreateProofreaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIManagerCreateProofreaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(proofreader) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec,
      null,
      [proofreader]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.mojom.AIManagerCreateProofreaderClient.getRemote = function() {
  let remote = new blink.mojom.mojom.AIManagerCreateProofreaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateProofreaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnResult
blink.mojom.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateProofreaderClient.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'proofreader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManagerCreateProofreaderClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIManagerCreateClientErrorSpec, nullable: false, minVersion: 0 },
        { name: 'quota_error_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.QuotaErrorInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIManagerCreateProofreaderClientPtr = blink.mojom.mojom.AIManagerCreateProofreaderClientRemote;
blink.mojom.mojom.AIManagerCreateProofreaderClientRequest = blink.mojom.mojom.AIManagerCreateProofreaderClientPendingReceiver;


// Interface: AIManager
blink.mojom.mojom.AIManager = {};

blink.mojom.mojom.AIManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canCreateLanguageModel(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIManager_CanCreateLanguageModel_ParamsSpec,
      blink.mojom.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec,
      [options]);
  }

  createLanguageModel(client, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIManager_CreateLanguageModel_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateSummarizer(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.AIManager_CanCreateSummarizer_ParamsSpec,
      blink.mojom.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec,
      [options]);
  }

  createSummarizer(client, options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.AIManager_CreateSummarizer_ParamsSpec,
      null,
      [client, options]);
  }

  getLanguageModelParams() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.AIManager_GetLanguageModelParams_ParamsSpec,
      blink.mojom.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec,
      []);
  }

  canCreateWriter(options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.AIManager_CanCreateWriter_ParamsSpec,
      blink.mojom.mojom.AIManager_CanCreateWriter_ResponseParamsSpec,
      [options]);
  }

  createWriter(client, options) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.AIManager_CreateWriter_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateRewriter(options) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.AIManager_CanCreateRewriter_ParamsSpec,
      blink.mojom.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec,
      [options]);
  }

  createRewriter(client, options) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.AIManager_CreateRewriter_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateProofreader(options) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.AIManager_CanCreateProofreader_ParamsSpec,
      blink.mojom.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec,
      [options]);
  }

  createProofreader(client, options) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.AIManager_CreateProofreader_ParamsSpec,
      null,
      [client, options]);
  }

  addModelDownloadProgressObserver(observer_remote) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec,
      null,
      [observer_remote]);
  }

};

blink.mojom.mojom.AIManager.getRemote = function() {
  let remote = new blink.mojom.mojom.AIManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManager',
    'context');
  return remote.$;
};

// ParamsSpec for CanCreateLanguageModel
blink.mojom.mojom.AIManager_CanCreateLanguageModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateLanguageModel_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AILanguageModelCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateLanguageModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModelAvailabilityCheckResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateLanguageModel
blink.mojom.mojom.AIManager_CreateLanguageModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CreateLanguageModel_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AILanguageModelCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CanCreateSummarizer
blink.mojom.mojom.AIManager_CanCreateSummarizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateSummarizer_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AISummarizerCreateOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateSummarizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModelAvailabilityCheckResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSummarizer
blink.mojom.mojom.AIManager_CreateSummarizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CreateSummarizer_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AISummarizerCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetLanguageModelParams
blink.mojom.mojom.AIManager_GetLanguageModelParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.GetLanguageModelParams_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.GetLanguageModelParams_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'language_model_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AILanguageModelParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanCreateWriter
blink.mojom.mojom.AIManager_CanCreateWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateWriter_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIWriterCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIManager_CanCreateWriter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateWriter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModelAvailabilityCheckResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateWriter
blink.mojom.mojom.AIManager_CreateWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CreateWriter_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIWriterCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CanCreateRewriter
blink.mojom.mojom.AIManager_CanCreateRewriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateRewriter_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIRewriterCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateRewriter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModelAvailabilityCheckResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateRewriter
blink.mojom.mojom.AIManager_CreateRewriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CreateRewriter_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIRewriterCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CanCreateProofreader
blink.mojom.mojom.AIManager_CanCreateProofreader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateProofreader_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIProofreaderCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CanCreateProofreader_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModelAvailabilityCheckResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateProofreader
blink.mojom.mojom.AIManager_CreateProofreader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.CreateProofreader_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIProofreaderCreateOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddModelDownloadProgressObserver
blink.mojom.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIManager.AddModelDownloadProgressObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIManagerPtr = blink.mojom.mojom.AIManagerRemote;
blink.mojom.mojom.AIManagerRequest = blink.mojom.mojom.AIManagerPendingReceiver;

