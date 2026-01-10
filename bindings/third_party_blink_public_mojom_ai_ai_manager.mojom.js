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

blink.mojom.ModelAvailabilityCheckResultSpec = { $: mojo.internal.Enum() };
blink.mojom.AIManagerCreateWriterClient = {};
blink.mojom.AIManagerCreateWriterClient.$interfaceName = 'blink.mojom.AIManagerCreateWriterClient';
blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateRewriterClient = {};
blink.mojom.AIManagerCreateRewriterClient.$interfaceName = 'blink.mojom.AIManagerCreateRewriterClient';
blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateSummarizerClient = {};
blink.mojom.AIManagerCreateSummarizerClient.$interfaceName = 'blink.mojom.AIManagerCreateSummarizerClient';
blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateProofreaderClient = {};
blink.mojom.AIManagerCreateProofreaderClient.$interfaceName = 'blink.mojom.AIManagerCreateProofreaderClient';
blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManager = {};
blink.mojom.AIManager.$interfaceName = 'blink.mojom.AIManager';
blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateLanguageModel_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateSummarizer_ParamsSpec = { $: {} };
blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec = { $: {} };
blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateWriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateWriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateRewriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateRewriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateProofreader_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateProofreader_ParamsSpec = { $: {} };
blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec = { $: {} };

// Enum: ModelAvailabilityCheckResult
blink.mojom.ModelAvailabilityCheckResult = {
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

// Interface: AIManagerCreateWriterClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateWriterClient_OnResult_Params', [
      mojo.internal.StructField('writer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIWriterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateWriterClient_OnError_Params', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.AIManagerCreateClientErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 0, 0, blink.mojom.QuotaErrorInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateWriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateWriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateWriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateWriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateWriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(writer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec,
      null,
      [writer]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.AIManagerCreateWriterClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateWriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateWriterClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateWriterClientPtr = blink.mojom.AIManagerCreateWriterClientRemote;
blink.mojom.AIManagerCreateWriterClientRequest = blink.mojom.AIManagerCreateWriterClientPendingReceiver;


// Interface: AIManagerCreateRewriterClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateRewriterClient_OnResult_Params', [
      mojo.internal.StructField('rewriter', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIRewriterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateRewriterClient_OnError_Params', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.AIManagerCreateClientErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 0, 0, blink.mojom.QuotaErrorInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateRewriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateRewriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateRewriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateRewriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateRewriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateRewriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(rewriter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec,
      null,
      [rewriter]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.AIManagerCreateRewriterClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateRewriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateRewriterClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateRewriterClientPtr = blink.mojom.AIManagerCreateRewriterClientRemote;
blink.mojom.AIManagerCreateRewriterClientRequest = blink.mojom.AIManagerCreateRewriterClientPendingReceiver;


// Interface: AIManagerCreateSummarizerClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateSummarizerClient_OnResult_Params', [
      mojo.internal.StructField('summarizer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AISummarizerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateSummarizerClient_OnError_Params', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.AIManagerCreateClientErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 0, 0, blink.mojom.QuotaErrorInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateSummarizerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateSummarizerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateSummarizerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateSummarizerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateSummarizerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateSummarizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(summarizer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec,
      null,
      [summarizer]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.AIManagerCreateSummarizerClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateSummarizerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateSummarizerClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateSummarizerClientPtr = blink.mojom.AIManagerCreateSummarizerClientRemote;
blink.mojom.AIManagerCreateSummarizerClientRequest = blink.mojom.AIManagerCreateSummarizerClientPendingReceiver;


// Interface: AIManagerCreateProofreaderClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateProofreaderClient_OnResult_Params', [
      mojo.internal.StructField('proofreader', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIProofreaderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateProofreaderClient_OnError_Params', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.AIManagerCreateClientErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 0, 0, blink.mojom.QuotaErrorInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateProofreaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateProofreaderClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateProofreaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateProofreaderClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateProofreaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateProofreaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResult(proofreader) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec,
      null,
      [proofreader]);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info]);
  }

};

blink.mojom.AIManagerCreateProofreaderClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateProofreaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateProofreaderClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateProofreaderClientPtr = blink.mojom.AIManagerCreateProofreaderClientRemote;
blink.mojom.AIManagerCreateProofreaderClientRequest = blink.mojom.AIManagerCreateProofreaderClientPendingReceiver;


// Interface: AIManager
mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AILanguageModelCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CreateLanguageModel_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AILanguageModelCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AISummarizerCreateOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CreateSummarizer_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateSummarizerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AISummarizerCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_ResponseParams', [
      mojo.internal.StructField('language_model_params', 0, 0, blink.mojom.AILanguageModelParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIWriterCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateWriter_ParamsSpec, 'blink.mojom.AIManager_CreateWriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateWriterClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIWriterCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIRewriterCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CreateRewriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateRewriterClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIRewriterCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIProofreaderCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CreateProofreader_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateProofreaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIProofreaderCreateOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec, 'blink.mojom.AIManager_AddModelDownloadProgressObserver_Params', [
      mojo.internal.StructField('observer_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelDownloadProgressObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AIManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canCreateLanguageModel(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec,
      blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec,
      [options]);
  }

  createLanguageModel(client, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManager_CreateLanguageModel_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateSummarizer(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec,
      blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec,
      [options]);
  }

  createSummarizer(client, options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AIManager_CreateSummarizer_ParamsSpec,
      null,
      [client, options]);
  }

  getLanguageModelParams() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec,
      blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec,
      []);
  }

  canCreateWriter(options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AIManager_CanCreateWriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec,
      [options]);
  }

  createWriter(client, options) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AIManager_CreateWriter_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateRewriter(options) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AIManager_CanCreateRewriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec,
      [options]);
  }

  createRewriter(client, options) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AIManager_CreateRewriter_ParamsSpec,
      null,
      [client, options]);
  }

  canCreateProofreader(options) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AIManager_CanCreateProofreader_ParamsSpec,
      blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec,
      [options]);
  }

  createProofreader(client, options) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.AIManager_CreateProofreader_ParamsSpec,
      null,
      [client, options]);
  }

  addModelDownloadProgressObserver(observer_remote) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec,
      null,
      [observer_remote]);
  }

};

blink.mojom.AIManager.getRemote = function() {
  let remote = new blink.mojom.AIManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManager',
    'context');
  return remote.$;
};

blink.mojom.AIManagerPtr = blink.mojom.AIManagerRemote;
blink.mojom.AIManagerRequest = blink.mojom.AIManagerPendingReceiver;

