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

// Enum: SearchResultType
crosapi.mojom.SearchResultType = {
  kOmniboxResult: 0,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

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

// Enum: TextType
crosapi.mojom.TextType = {
  kPositive: 0,
  kNegative: 1,
};

// Enum: PageTransition
crosapi.mojom.PageTransition = {
  kTyped: 0,
  kGenerated: 1,
};

// Interface: SearchResultsPublisher
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

// Legacy compatibility
crosapi.mojom.SearchResultsPublisherPtr = crosapi.mojom.SearchResultsPublisherRemote;
crosapi.mojom.SearchResultsPublisherRequest = crosapi.mojom.SearchResultsPublisherPendingReceiver;


// Interface: SearchController
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

// Legacy compatibility
crosapi.mojom.SearchControllerPtr = crosapi.mojom.SearchControllerRemote;
crosapi.mojom.SearchControllerRequest = crosapi.mojom.SearchControllerPendingReceiver;


// Interface: SearchResultConsumer
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

// Legacy compatibility
crosapi.mojom.SearchResultConsumerPtr = crosapi.mojom.SearchResultConsumerRemote;
crosapi.mojom.SearchResultConsumerRequest = crosapi.mojom.SearchResultConsumerPendingReceiver;

