// Auto-generated MojoJS binding
// Source: chromium_src/components/continuous_search/common/public/mojom/continuous_search.mojom
// Module: continuous_search.mojom

'use strict';

// Module namespace
var continuous_search = continuous_search || {};
continuous_search.mojom = continuous_search.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

continuous_search.mojom.ResultTypeSpec = { $: mojo.internal.Enum() };
continuous_search.mojom.CategorySpec = { $: mojo.internal.Enum() };
continuous_search.mojom.StatusSpec = { $: mojo.internal.Enum() };
continuous_search.mojom.SearchResultSpec = { $: {} };
continuous_search.mojom.ResultGroupSpec = { $: {} };
continuous_search.mojom.CategoryResultsSpec = { $: {} };
continuous_search.mojom.SearchResultExtractor = {};
continuous_search.mojom.SearchResultExtractor.$interfaceName = 'continuous_search.mojom.SearchResultExtractor';
continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec = { $: {} };
continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParamsSpec = { $: {} };

// Enum: ResultType
continuous_search.mojom.ResultType = {
  kSearchResults: 0,
  kRelatedSearches: 1,
};

// Enum: Category
continuous_search.mojom.Category = {
  kNone: 0,
  kOrganic: 1,
};

// Enum: Status
continuous_search.mojom.Status = {
  kSuccess: 0,
  kNoResults: 1,
};

// Struct: SearchResult
mojo.internal.Struct(
    continuous_search.mojom.SearchResultSpec, 'continuous_search.mojom.SearchResult', [
      mojo.internal.StructField('link', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResultGroup
mojo.internal.Struct(
    continuous_search.mojom.ResultGroupSpec, 'continuous_search.mojom.ResultGroup', [
      mojo.internal.StructField('type', 0, 0, continuous_search.mojom.ResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(continuous_search.mojom.SearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CategoryResults
mojo.internal.Struct(
    continuous_search.mojom.CategoryResultsSpec, 'continuous_search.mojom.CategoryResults', [
      mojo.internal.StructField('document_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('category_type', 8, 0, continuous_search.mojom.CategorySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('groups', 16, 0, mojo.internal.Array(continuous_search.mojom.ResultGroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SearchResultExtractor
mojo.internal.Struct(
    continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec, 'continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_Params', [
      mojo.internal.StructField('result_types', 0, 0, mojo.internal.Array(continuous_search.mojom.ResultTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParamsSpec, 'continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, continuous_search.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, continuous_search.mojom.CategoryResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

continuous_search.mojom.SearchResultExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

continuous_search.mojom.SearchResultExtractorRemote = class {
  static get $interfaceName() {
    return 'continuous_search.mojom.SearchResultExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      continuous_search.mojom.SearchResultExtractorPendingReceiver,
      handle);
    this.$ = new continuous_search.mojom.SearchResultExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

continuous_search.mojom.SearchResultExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractCurrentSearchResults(result_types) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec,
      continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParamsSpec,
      [result_types],
      false);
  }

};

continuous_search.mojom.SearchResultExtractor.getRemote = function() {
  let remote = new continuous_search.mojom.SearchResultExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'continuous_search.mojom.SearchResultExtractor',
    'context');
  return remote.$;
};

continuous_search.mojom.SearchResultExtractorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ExtractCurrentSearchResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractCurrentSearchResults (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractCurrentSearchResults');
          const result = this.impl.extractCurrentSearchResults(params.result_types);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParamsSpec);
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

continuous_search.mojom.SearchResultExtractorReceiver = continuous_search.mojom.SearchResultExtractorReceiver;

continuous_search.mojom.SearchResultExtractorPtr = continuous_search.mojom.SearchResultExtractorRemote;
continuous_search.mojom.SearchResultExtractorRequest = continuous_search.mojom.SearchResultExtractorPendingReceiver;

