// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: SearchStatus
crosapi.mojom.SearchStatus = {
  kDone: 0,
  kInProgress: 1,
  kCancelled: 2,
};
crosapi.mojom.SearchStatusSpec = { $: mojo.internal.Enum() };

// Enum: SearchResultType
crosapi.mojom.SearchResultType = {
  kOmniboxResult: 0,
};
crosapi.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};
crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };

// Enum: OmniboxType
crosapi.mojom.OmniboxType = {
  kRichImageDeprecated: 0,
  kFaviconDeprecated: 1,
  kCalculatorDeprecated: 2,
  kBookmark: 3,
  kDomain: 4,
  kSearch: 5,
  kHistory: 6,
};
crosapi.mojom.OmniboxTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetricsType
crosapi.mojom.MetricsType = {
  kWhatYouTyped: 0,
  kRecentlyVisitedWebsite: 1,
  kHistoryTitle: 2,
  kSearchWhatYouTyped: 3,
  kSearchHistory: 4,
  kSearchSuggest: 5,
  kSearchSuggestPersonalized: 6,
  kBookmark: 7,
  kSearchSuggestEntity: 8,
  kNavSuggest: 9,
  kCalculator: 10,
};
crosapi.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };

// Enum: AnswerType
crosapi.mojom.AnswerType = {
  kDefaultAnswer: 0,
  kWeather: 1,
  kCurrency: 2,
  kDictionary: 3,
  kFinance: 4,
  kSunrise: 5,
  kTranslation: 6,
  kWhenIs: 7,
};
crosapi.mojom.AnswerTypeSpec = { $: mojo.internal.Enum() };

// Enum: TextType
crosapi.mojom.TextType = {
  kPositive: 0,
  kNegative: 1,
};
crosapi.mojom.TextTypeSpec = { $: mojo.internal.Enum() };

// Enum: PageTransition
crosapi.mojom.PageTransition = {
  kTyped: 0,
  kGenerated: 1,
};
crosapi.mojom.PageTransitionSpec = { $: mojo.internal.Enum() };

// Struct: SearchResult
crosapi.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchResult',
      packedSize: 144,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SearchResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'relevance', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'destination_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'is_omnibox_search', packedOffset: 4, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'is_answer', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'omnibox_type', packedOffset: 28, packedBitOffset: 0, type: crosapi.mojom.OmniboxTypeSpec, nullable: false, minVersion: 0 },
        { name: 'answer_type', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.AnswerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'favicon', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
        { name: 'contents', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_contents', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'description', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_description', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_description_type', packedOffset: 36, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'stripped_destination_url', packedOffset: 88, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 2 },
        { name: 'kUnset', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'page_transition', packedOffset: 104, packedBitOffset: 0, type: crosapi.mojom.PageTransitionSpec, nullable: false, minVersion: 2 },
        { name: 'contents_type', packedOffset: 108, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'additional_contents_type', packedOffset: 112, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'description_type', packedOffset: 116, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'description_a11y_label', packedOffset: 120, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 3 },
        { name: 'metrics_type', packedOffset: 128, packedBitOffset: 0, type: crosapi.mojom.MetricsTypeSpec, nullable: false, minVersion: 5 },
        { name: 'receiver', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 112}, {version: 2, packedSize: 128}, {version: 3, packedSize: 136}, {version: 5, packedSize: 144}]
    }
  }
};

// Interface: SearchResultsPublisher
crosapi.mojom.SearchResultsPublisher = {};

crosapi.mojom.SearchResultsPublisherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.SearchResultsPublisherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultsPublisher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.SearchResultsPublisherPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.SearchResultsPublisherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.SearchResultsPublisherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsReceived(status, result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec,
      null,
      [status, result]);
  }

};

crosapi.mojom.SearchResultsPublisher.getRemote = function() {
  let remote = new crosapi.mojom.SearchResultsPublisherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultsPublisher',
    'context');
  return remote.$;
};

// ParamsSpec for OnSearchResultsReceived
crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchResultsPublisher.OnSearchResultsReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SearchStatusSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.SearchResultSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.SearchResultsPublisherPtr = crosapi.mojom.SearchResultsPublisherRemote;
crosapi.mojom.SearchResultsPublisherRequest = crosapi.mojom.SearchResultsPublisherPendingReceiver;


// Interface: SearchController
crosapi.mojom.SearchController = {};

crosapi.mojom.SearchControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.SearchControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.SearchControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.SearchControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.SearchControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.SearchController_Search_ParamsSpec,
      crosapi.mojom.SearchController_Search_ResponseParamsSpec,
      [query]);
  }

};

crosapi.mojom.SearchController.getRemote = function() {
  let remote = new crosapi.mojom.SearchControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchController',
    'context');
  return remote.$;
};

// ParamsSpec for Search
crosapi.mojom.SearchController_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchController.Search_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.SearchController_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchController.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'publisher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.SearchControllerPtr = crosapi.mojom.SearchControllerRemote;
crosapi.mojom.SearchControllerRequest = crosapi.mojom.SearchControllerPendingReceiver;


// Interface: SearchResultConsumer
crosapi.mojom.SearchResultConsumer = {};

crosapi.mojom.SearchResultConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.SearchResultConsumerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.SearchResultConsumerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.SearchResultConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.SearchResultConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFaviconReceived(favicon) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec,
      null,
      [favicon]);
  }

};

crosapi.mojom.SearchResultConsumer.getRemote = function() {
  let remote = new crosapi.mojom.SearchResultConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultConsumer',
    'context');
  return remote.$;
};

// ParamsSpec for OnFaviconReceived
crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchResultConsumer.OnFaviconReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'favicon', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.SearchResultConsumerPtr = crosapi.mojom.SearchResultConsumerRemote;
crosapi.mojom.SearchResultConsumerRequest = crosapi.mojom.SearchResultConsumerPendingReceiver;

