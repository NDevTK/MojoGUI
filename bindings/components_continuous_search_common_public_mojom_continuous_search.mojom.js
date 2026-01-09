// Auto-generated MojoJS binding
// Source: chromium_src/components/continuous_search/common/public/mojom/continuous_search.mojom
// Module: continuous_search.mojom

'use strict';

// Module namespace
var continuous_search = continuous_search || {};
continuous_search.mojom = continuous_search.mojom || {};


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
continuous_search.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'continuous_search.mojom.SearchResult',
      packedSize: 24,
      fields: [
        { name: 'link', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResultGroup
continuous_search.mojom.ResultGroupSpec = {
  $: {
    structSpec: {
      name: 'continuous_search.mojom.ResultGroup',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: continuous_search.mojom.ResultTypeSpec, nullable: false },
        { name: 'results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CategoryResults
continuous_search.mojom.CategoryResultsSpec = {
  $: {
    structSpec: {
      name: 'continuous_search.mojom.CategoryResults',
      packedSize: 32,
      fields: [
        { name: 'document_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'category_type', packedOffset: 16, packedBitOffset: 0, type: continuous_search.mojom.CategorySpec, nullable: false },
        { name: 'groups', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SearchResultExtractor
continuous_search.mojom.SearchResultExtractor = {};

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
      [result_types]);
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

// ParamsSpec for ExtractCurrentSearchResults
continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'continuous_search.mojom.SearchResultExtractor.ExtractCurrentSearchResults_Params',
      packedSize: 16,
      fields: [
        { name: 'result_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

continuous_search.mojom.SearchResultExtractor_ExtractCurrentSearchResults_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'continuous_search.mojom.SearchResultExtractor.ExtractCurrentSearchResults_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: continuous_search.mojom.StatusSpec, nullable: false },
        { name: 'results', packedOffset: 16, packedBitOffset: 0, type: continuous_search.mojom.CategoryResultsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
continuous_search.mojom.SearchResultExtractorPtr = continuous_search.mojom.SearchResultExtractorRemote;
continuous_search.mojom.SearchResultExtractorRequest = continuous_search.mojom.SearchResultExtractorPendingReceiver;

