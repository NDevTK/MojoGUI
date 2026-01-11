// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_manager.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onResult(writer) {
    return this.$.onResult(writer);
  }
  onError(error, quota_error_info) {
    return this.$.onError(error, quota_error_info);
  }
};

blink.mojom.AIManagerCreateWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateWriterClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(writer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec,
      null,
      [writer],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateWriterClient', [
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec.$.structSpec);
          const result = this.impl.onResult(params.writer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {}
    });
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
  onResult(rewriter) {
    return this.$.onResult(rewriter);
  }
  onError(error, quota_error_info) {
    return this.$.onError(error, quota_error_info);
  }
};

blink.mojom.AIManagerCreateRewriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateRewriterClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(rewriter) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec,
      null,
      [rewriter],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateRewriterClient', [
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec.$.structSpec);
          const result = this.impl.onResult(params.rewriter);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {}
    });
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
  onResult(summarizer) {
    return this.$.onResult(summarizer);
  }
  onError(error, quota_error_info) {
    return this.$.onError(error, quota_error_info);
  }
};

blink.mojom.AIManagerCreateSummarizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateSummarizerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(summarizer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec,
      null,
      [summarizer],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateSummarizerClient', [
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec.$.structSpec);
          const result = this.impl.onResult(params.summarizer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {}
    });
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
  onResult(proofreader) {
    return this.$.onResult(proofreader);
  }
  onError(error, quota_error_info) {
    return this.$.onError(error, quota_error_info);
  }
};

blink.mojom.AIManagerCreateProofreaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateProofreaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(proofreader) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec,
      null,
      [proofreader],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateProofreaderClient', [
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec.$.structSpec);
          const result = this.impl.onResult(params.proofreader);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {}
    });
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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateSummarizerClientRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateWriterClientRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateRewriterClientRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateProofreaderClientRemote), null, false, 0, undefined),
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
  canCreateLanguageModel(options) {
    return this.$.canCreateLanguageModel(options);
  }
  createLanguageModel(client, options) {
    return this.$.createLanguageModel(client, options);
  }
  canCreateSummarizer(options) {
    return this.$.canCreateSummarizer(options);
  }
  createSummarizer(client, options) {
    return this.$.createSummarizer(client, options);
  }
  getLanguageModelParams() {
    return this.$.getLanguageModelParams();
  }
  canCreateWriter(options) {
    return this.$.canCreateWriter(options);
  }
  createWriter(client, options) {
    return this.$.createWriter(client, options);
  }
  canCreateRewriter(options) {
    return this.$.canCreateRewriter(options);
  }
  createRewriter(client, options) {
    return this.$.createRewriter(client, options);
  }
  canCreateProofreader(options) {
    return this.$.canCreateProofreader(options);
  }
  createProofreader(client, options) {
    return this.$.createProofreader(client, options);
  }
  addModelDownloadProgressObserver(observer_remote) {
    return this.$.addModelDownloadProgressObserver(observer_remote);
  }
};

blink.mojom.AIManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  canCreateLanguageModel(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec,
      blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec,
      [options],
      false);
  }

  createLanguageModel(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManager_CreateLanguageModel_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateSummarizer(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec,
      blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec,
      [options],
      false);
  }

  createSummarizer(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AIManager_CreateSummarizer_ParamsSpec,
      null,
      [client, options],
      false);
  }

  getLanguageModelParams() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec,
      blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec,
      [],
      false);
  }

  canCreateWriter(options) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.AIManager_CanCreateWriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec,
      [options],
      false);
  }

  createWriter(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.AIManager_CreateWriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateRewriter(options) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.AIManager_CanCreateRewriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec,
      [options],
      false);
  }

  createRewriter(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.AIManager_CreateRewriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateProofreader(options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.AIManager_CanCreateProofreader_ParamsSpec,
      blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec,
      [options],
      false);
  }

  createProofreader(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.AIManager_CreateProofreader_ParamsSpec,
      null,
      [client, options],
      false);
  }

  addModelDownloadProgressObserver(observer_remote) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AIManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateSummarizer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateWriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateWriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateRewriter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateProofreader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec.$.structSpec);
          const result = this.impl.canCreateLanguageModel(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec.$.structSpec);
          const result = this.impl.createLanguageModel(params.client, params.options);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec.$.structSpec);
          const result = this.impl.canCreateSummarizer(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateSummarizer_ParamsSpec.$.structSpec);
          const result = this.impl.createSummarizer(params.client, params.options);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec.$.structSpec);
          const result = this.impl.getLanguageModelParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateWriter_ParamsSpec.$.structSpec);
          const result = this.impl.canCreateWriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateWriter_ParamsSpec.$.structSpec);
          const result = this.impl.createWriter(params.client, params.options);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec.$.structSpec);
          const result = this.impl.canCreateRewriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateRewriter_ParamsSpec.$.structSpec);
          const result = this.impl.createRewriter(params.client, params.options);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec.$.structSpec);
          const result = this.impl.canCreateProofreader(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateProofreader_ParamsSpec.$.structSpec);
          const result = this.impl.createProofreader(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addModelDownloadProgressObserver(params.observer_remote);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.AIManagerReceiver = blink.mojom.AIManagerReceiver;

blink.mojom.AIManagerPtr = blink.mojom.AIManagerRemote;
blink.mojom.AIManagerRequest = blink.mojom.AIManagerPendingReceiver;

