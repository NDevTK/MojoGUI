// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/launcher_search.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

crosapi.mojom.SearchStatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OmniboxTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.AnswerTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TextTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PageTransitionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SearchResultSpec = { $: {} };
crosapi.mojom.SearchResultsPublisher = {};
crosapi.mojom.SearchResultsPublisher.$interfaceName = 'crosapi.mojom.SearchResultsPublisher';
crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec = { $: {} };
crosapi.mojom.SearchController = {};
crosapi.mojom.SearchController.$interfaceName = 'crosapi.mojom.SearchController';
crosapi.mojom.SearchController_Search_ParamsSpec = { $: {} };
crosapi.mojom.SearchController_Search_ResponseParamsSpec = { $: {} };
crosapi.mojom.SearchResultConsumer = {};
crosapi.mojom.SearchResultConsumer.$interfaceName = 'crosapi.mojom.SearchResultConsumer';
crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec = { $: {} };

// Enum: SearchStatus
crosapi.mojom.SearchStatus = {
  kError: 0,
  kDone: 1,
  kInProgress: 2,
  kCancelled: 3,
  MinVersion: 3,
};

// Enum: SearchResultType
crosapi.mojom.SearchResultType = {
  kUnknown: 0,
  kOmniboxResult: 1,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: OmniboxType
crosapi.mojom.OmniboxType = {
  kUnset: 0,
  kRichImageDeprecated: 1,
  kFaviconDeprecated: 2,
  kCalculatorDeprecated: 7,
  kBookmark: 3,
  kDomain: 4,
  kSearch: 5,
  kHistory: 6,
  MinVersion: 6,
};

// Enum: MetricsType
crosapi.mojom.MetricsType = {
  kUnset: 0,
  kWhatYouTyped: 1,
  kRecentlyVisitedWebsite: 2,
  kHistoryTitle: 3,
  kSearchWhatYouTyped: 4,
  kSearchHistory: 5,
  kSearchSuggest: 6,
  kSearchSuggestPersonalized: 7,
  kBookmark: 8,
  kSearchSuggestEntity: 9,
  kNavSuggest: 10,
  kCalculator: 11,
};

// Enum: AnswerType
crosapi.mojom.AnswerType = {
  kUnset: 0,
  kDefaultAnswer: 1,
  kWeather: 2,
  kCurrency: 3,
  kDictionary: 4,
  kFinance: 5,
  kSunrise: 6,
  kTranslation: 7,
  kWhenIs: 8,
  MinVersion: 8,
};

// Enum: TextType
crosapi.mojom.TextType = {
  kUnset: 0,
  kPositive: 1,
  kNegative: 2,
  MinVersion: 2,
};

// Enum: PageTransition
crosapi.mojom.PageTransition = {
  kUnset: 0,
  kTyped: 1,
  kGenerated: 2,
};

// Struct: SearchResult
mojo.internal.Struct(
    crosapi.mojom.SearchResultSpec, 'crosapi.mojom.SearchResult', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.SearchResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relevance', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('destination_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_omnibox_search', 24, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_answer', 32, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('omnibox_type', 40, 0, crosapi.mojom.OmniboxTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('answer_type', 48, 0, crosapi.mojom.AnswerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 56, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('favicon', 64, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('contents', 72, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('additional_contents', 80, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 88, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('additional_description', 96, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('additional_description_type', 104, 0, crosapi.mojom.TextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kUnset', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stripped_destination_url', 120, 0, url.mojom.UrlSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('page_transition', 128, 0, crosapi.mojom.PageTransitionSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('contents_type', 136, 0, crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('additional_contents_type', 144, 0, crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('description_type', 152, 0, crosapi.mojom.TextTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('description_a11y_label', 160, 0, mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('metrics_type', 168, 0, crosapi.mojom.MetricsTypeSpec.$, null, false, 5, undefined),
      mojo.internal.StructField('receiver', 176, 0, mojo.internal.InterfaceRequest(crosapi.mojom.SearchResultConsumerSpec), null, true, 5, undefined),
    ],
    [[0, 128], [2, 168], [3, 176], [5, 192]]);

// Interface: SearchResultsPublisher
mojo.internal.Struct(
    crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec, 'crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_Params', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.SearchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Array(crosapi.mojom.SearchResultSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [status, result],
      false);
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

crosapi.mojom.SearchResultsPublisherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.SearchResultsPublisher_OnSearchResultsReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchResultsReceived(params.status, params.result);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.SearchResultsPublisherReceiver = crosapi.mojom.SearchResultsPublisherReceiver;

crosapi.mojom.SearchResultsPublisherPtr = crosapi.mojom.SearchResultsPublisherRemote;
crosapi.mojom.SearchResultsPublisherRequest = crosapi.mojom.SearchResultsPublisherPendingReceiver;


// Interface: SearchController
mojo.internal.Struct(
    crosapi.mojom.SearchController_Search_ParamsSpec, 'crosapi.mojom.SearchController_Search_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.SearchController_Search_ResponseParamsSpec, 'crosapi.mojom.SearchController_Search_ResponseParams', [
      mojo.internal.StructField('publisher', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [query],
      false);
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

crosapi.mojom.SearchControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.SearchController_Search_ParamsSpec.$.decode(message.payload);
          const result = this.impl.search(params.query);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.SearchController_Search_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.SearchControllerReceiver = crosapi.mojom.SearchControllerReceiver;

crosapi.mojom.SearchControllerPtr = crosapi.mojom.SearchControllerRemote;
crosapi.mojom.SearchControllerRequest = crosapi.mojom.SearchControllerPendingReceiver;


// Interface: SearchResultConsumer
mojo.internal.Struct(
    crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec, 'crosapi.mojom.SearchResultConsumer_OnFaviconReceived_Params', [
      mojo.internal.StructField('favicon', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [favicon],
      false);
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

crosapi.mojom.SearchResultConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.SearchResultConsumer_OnFaviconReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFaviconReceived(params.favicon);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.SearchResultConsumerReceiver = crosapi.mojom.SearchResultConsumerReceiver;

crosapi.mojom.SearchResultConsumerPtr = crosapi.mojom.SearchResultConsumerRemote;
crosapi.mojom.SearchResultConsumerRequest = crosapi.mojom.SearchResultConsumerPendingReceiver;

