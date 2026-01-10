// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
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
      [writer],
      false);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
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

blink.mojom.AIManagerCreateWriterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResult
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnError
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.writer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateWriterClientReceiver = blink.mojom.AIManagerCreateWriterClientReceiver;

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
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
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
      [rewriter],
      false);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
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

blink.mojom.AIManagerCreateRewriterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResult
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnError
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.rewriter);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateRewriterClientReceiver = blink.mojom.AIManagerCreateRewriterClientReceiver;

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
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
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
      [summarizer],
      false);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
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

blink.mojom.AIManagerCreateSummarizerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResult
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnError
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.summarizer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateSummarizerClientReceiver = blink.mojom.AIManagerCreateSummarizerClientReceiver;

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
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
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
      [proofreader],
      false);
  }

  onError(error, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
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

blink.mojom.AIManagerCreateProofreaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResult
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnError
        try {
             decoder.decodeStruct(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.proofreader);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateProofreaderClientReceiver = blink.mojom.AIManagerCreateProofreaderClientReceiver;

blink.mojom.AIManagerCreateProofreaderClientPtr = blink.mojom.AIManagerCreateProofreaderClientRemote;
blink.mojom.AIManagerCreateProofreaderClientRequest = blink.mojom.AIManagerCreateProofreaderClientPendingReceiver;


// Interface: AIManager
mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AILanguageModelCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CreateLanguageModel_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AILanguageModelCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AISummarizerCreateOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CreateSummarizer_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateSummarizerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AISummarizerCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_ResponseParams', [
      mojo.internal.StructField('language_model_params', 0, 0, blink.mojom.AILanguageModelParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIWriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateWriter_ParamsSpec, 'blink.mojom.AIManager_CreateWriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateWriterClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIWriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIRewriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CreateRewriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateRewriterClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIRewriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIProofreaderCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CreateProofreader_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateProofreaderClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIProofreaderCreateOptionsSpec.$, null, false, 0, undefined),
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
      [options],
      false);
  }

  createLanguageModel(client, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIManager_CreateLanguageModel_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateSummarizer(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec,
      blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec,
      [options],
      false);
  }

  createSummarizer(client, options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AIManager_CreateSummarizer_ParamsSpec,
      null,
      [client, options],
      false);
  }

  getLanguageModelParams() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec,
      blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec,
      [],
      false);
  }

  canCreateWriter(options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AIManager_CanCreateWriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec,
      [options],
      false);
  }

  createWriter(client, options) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AIManager_CreateWriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateRewriter(options) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AIManager_CanCreateRewriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec,
      [options],
      false);
  }

  createRewriter(client, options) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AIManager_CreateRewriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateProofreader(options) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AIManager_CanCreateProofreader_ParamsSpec,
      blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec,
      [options],
      false);
  }

  createProofreader(client, options) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.AIManager_CreateProofreader_ParamsSpec,
      null,
      [client, options],
      false);
  }

  addModelDownloadProgressObserver(observer_remote) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec,
      null,
      [observer_remote],
      false);
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

blink.mojom.AIManagerReceiver = class {
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
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CanCreateLanguageModel
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateLanguageModel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: CreateLanguageModel
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLanguageModel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: CanCreateSummarizer
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateSummarizer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: CreateSummarizer
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CreateSummarizer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSummarizer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetLanguageModelParams
        try {
             decoder.decodeStruct(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLanguageModelParams (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: CanCreateWriter
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CanCreateWriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateWriter (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: CreateWriter
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CreateWriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWriter (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: CanCreateRewriter
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateRewriter (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: CreateRewriter
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CreateRewriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRewriter (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: CanCreateProofreader
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateProofreader (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: CreateProofreader
        try {
             decoder.decodeStruct(blink.mojom.AIManager_CreateProofreader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProofreader (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: AddModelDownloadProgressObserver
        try {
             decoder.decodeStruct(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddModelDownloadProgressObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canCreateLanguageModel');
          const result = this.impl.canCreateLanguageModel(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createLanguageModel');
          const result = this.impl.createLanguageModel(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canCreateSummarizer');
          const result = this.impl.canCreateSummarizer(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CreateSummarizer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createSummarizer');
          const result = this.impl.createSummarizer(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getLanguageModelParams');
          const result = this.impl.getLanguageModelParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CanCreateWriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canCreateWriter');
          const result = this.impl.canCreateWriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CreateWriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createWriter');
          const result = this.impl.createWriter(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canCreateRewriter');
          const result = this.impl.canCreateRewriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CreateRewriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createRewriter');
          const result = this.impl.createRewriter(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canCreateProofreader');
          const result = this.impl.canCreateProofreader(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_CreateProofreader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createProofreader');
          const result = this.impl.createProofreader(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addModelDownloadProgressObserver');
          const result = this.impl.addModelDownloadProgressObserver(params.observer_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerReceiver = blink.mojom.AIManagerReceiver;

blink.mojom.AIManagerPtr = blink.mojom.AIManagerRemote;
blink.mojom.AIManagerRequest = blink.mojom.AIManagerPendingReceiver;

