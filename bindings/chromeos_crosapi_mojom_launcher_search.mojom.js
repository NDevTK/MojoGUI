// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: SearchStatus
crosapi.mojom.mojom.SearchStatus = {
  kDone: 0,
  kInProgress: 1,
  kCancelled: 2,
};
crosapi.mojom.mojom.SearchStatusSpec = { $: mojo.internal.Enum() };

// Enum: SearchResultType
crosapi.mojom.mojom.SearchResultType = {
  kOmniboxResult: 0,
};
crosapi.mojom.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: OptionalBool
crosapi.mojom.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};
crosapi.mojom.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };

// Enum: OmniboxType
crosapi.mojom.mojom.OmniboxType = {
  kRichImageDeprecated: 0,
  kFaviconDeprecated: 1,
  kCalculatorDeprecated: 2,
  kBookmark: 3,
  kDomain: 4,
  kSearch: 5,
  kHistory: 6,
};
crosapi.mojom.mojom.OmniboxTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetricsType
crosapi.mojom.mojom.MetricsType = {
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
crosapi.mojom.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };

// Enum: AnswerType
crosapi.mojom.mojom.AnswerType = {
  kDefaultAnswer: 0,
  kWeather: 1,
  kCurrency: 2,
  kDictionary: 3,
  kFinance: 4,
  kSunrise: 5,
  kTranslation: 6,
  kWhenIs: 7,
};
crosapi.mojom.mojom.AnswerTypeSpec = { $: mojo.internal.Enum() };

// Enum: TextType
crosapi.mojom.mojom.TextType = {
  kPositive: 0,
  kNegative: 1,
};
crosapi.mojom.mojom.TextTypeSpec = { $: mojo.internal.Enum() };

// Enum: PageTransition
crosapi.mojom.mojom.PageTransition = {
  kTyped: 0,
  kGenerated: 1,
};
crosapi.mojom.mojom.PageTransitionSpec = { $: mojo.internal.Enum() };

// Struct: SearchResult
crosapi.mojom.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchResult',
      packedSize: 152,
      fields: [
        { name: 'type', packedOffset: 72, packedBitOffset: 0, type: crosapi.mojom.SearchResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'relevance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'destination_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'is_omnibox_search', packedOffset: 76, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'is_answer', packedOffset: 80, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'omnibox_type', packedOffset: 84, packedBitOffset: 0, type: crosapi.mojom.OmniboxTypeSpec, nullable: false, minVersion: 0 },
        { name: 'answer_type', packedOffset: 88, packedBitOffset: 0, type: crosapi.mojom.AnswerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'favicon', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
        { name: 'contents', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_contents', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'description', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_description', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'additional_description_type', packedOffset: 92, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'kUnset', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'stripped_destination_url', packedOffset: 96, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 2 },
        { name: 'page_transition', packedOffset: 104, packedBitOffset: 0, type: crosapi.mojom.PageTransitionSpec, nullable: false, minVersion: 2 },
        { name: 'contents_type', packedOffset: 108, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'additional_contents_type', packedOffset: 112, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'description_type', packedOffset: 116, packedBitOffset: 0, type: crosapi.mojom.TextTypeSpec, nullable: false, minVersion: 2 },
        { name: 'description_a11y_label', packedOffset: 120, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 3 },
        { name: 'metrics_type', packedOffset: 136, packedBitOffset: 0, type: crosapi.mojom.MetricsTypeSpec, nullable: false, minVersion: 5 },
        { name: 'receiver', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.SearchResultConsumerRemote), nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 104}, {version: 2, packedSize: 128}, {version: 3, packedSize: 136}, {version: 5, packedSize: 152}]
    }
  }
};

// Interface: SearchResultsPublisher
crosapi.mojom.mojom.SearchResultsPublisher = {};

crosapi.mojom.mojom.SearchResultsPublisherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.SearchResultsPublisherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultsPublisher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.SearchResultsPublisherPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.SearchResultsPublisherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.SearchResultsPublisherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsReceived(status, result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec,
      null,
      [status, result]);
  }

};

crosapi.mojom.mojom.SearchResultsPublisher.getRemote = function() {
  let remote = new crosapi.mojom.mojom.SearchResultsPublisherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultsPublisher',
    'context');
  return remote.$;
};

// ParamsSpec for OnSearchResultsReceived
crosapi.mojom.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchResultsPublisher.OnSearchResultsReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.SearchStatusSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.SearchResultSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.SearchResultsPublisherPtr = crosapi.mojom.mojom.SearchResultsPublisherRemote;
crosapi.mojom.mojom.SearchResultsPublisherRequest = crosapi.mojom.mojom.SearchResultsPublisherPendingReceiver;


// Interface: SearchController
crosapi.mojom.mojom.SearchController = {};

crosapi.mojom.mojom.SearchControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.SearchControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.SearchControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.SearchControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.SearchControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.SearchController_Search_ParamsSpec,
      crosapi.mojom.mojom.SearchController_Search_ResponseParamsSpec,
      [query]);
  }

};

crosapi.mojom.mojom.SearchController.getRemote = function() {
  let remote = new crosapi.mojom.mojom.SearchControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchController',
    'context');
  return remote.$;
};

// ParamsSpec for Search
crosapi.mojom.mojom.SearchController_Search_ParamsSpec = {
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

crosapi.mojom.mojom.SearchController_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SearchController.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'publisher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(crosapi.mojom.SearchResultsPublisherRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.SearchControllerPtr = crosapi.mojom.mojom.SearchControllerRemote;
crosapi.mojom.mojom.SearchControllerRequest = crosapi.mojom.mojom.SearchControllerPendingReceiver;


// Interface: SearchResultConsumer
crosapi.mojom.mojom.SearchResultConsumer = {};

crosapi.mojom.mojom.SearchResultConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.SearchResultConsumerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.SearchResultConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.SearchResultConsumerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.SearchResultConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.SearchResultConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFaviconReceived(favicon) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec,
      null,
      [favicon]);
  }

};

crosapi.mojom.mojom.SearchResultConsumer.getRemote = function() {
  let remote = new crosapi.mojom.mojom.SearchResultConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.SearchResultConsumer',
    'context');
  return remote.$;
};

// ParamsSpec for OnFaviconReceived
crosapi.mojom.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec = {
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
crosapi.mojom.mojom.SearchResultConsumerPtr = crosapi.mojom.mojom.SearchResultConsumerRemote;
crosapi.mojom.mojom.SearchResultConsumerRequest = crosapi.mojom.mojom.SearchResultConsumerPendingReceiver;

