// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
// Module: history_embeddings.mojom

'use strict';

// Module namespace
var history_embeddings = history_embeddings || {};
history_embeddings.mojom = history_embeddings.mojom || {};
var url = url || {};


// Enum: AnswerStatus
history_embeddings.mojom.AnswerStatus = {
  kUnspecified: 0,
  kLoading: 1,
  kSuccess: 2,
  kUnanswerable: 3,
  kModelUnavailable: 4,
  kExecutionFailure: 5,
  kExecutionCanceled: 6,
  kFiltered: 7,
};
history_embeddings.mojom.AnswerStatusSpec = { $: mojo.internal.Enum() };

// Enum: UserFeedback
history_embeddings.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};
history_embeddings.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };

// Struct: AnswerData
history_embeddings.mojom.AnswerDataSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.AnswerData',
      packedSize: 16,
      fields: [
        { name: 'answer_text_directives', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SearchResultItem
history_embeddings.mojom.SearchResultItemSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.SearchResultItem',
      packedSize: 80,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'url_for_display', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'relative_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'short_date_time', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_url_visit_timestamp', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'source_passage', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'answer_data', packedOffset: 56, packedBitOffset: 0, type: history_embeddings.mojom.AnswerDataSpec, nullable: true, minVersion: 0 },
        { name: 'is_url_known_to_sync', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: SearchQuery
history_embeddings.mojom.SearchQuerySpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.SearchQuery',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'time_range_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SearchResult
history_embeddings.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.SearchResult',
      packedSize: 40,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'answer_status', packedOffset: 24, packedBitOffset: 0, type: history_embeddings.mojom.AnswerStatusSpec, nullable: false, minVersion: 0 },
        { name: 'answer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'items', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(history_embeddings.mojom.SearchResultItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: PageHandler
history_embeddings.mojom.PageHandler = {};

history_embeddings.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(history_embeddings.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

history_embeddings.mojom.PageHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_Search_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.SearchQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_SendQualityLog_Params',
      packedSize: 24,
      fields: [
        { name: 'selected_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'num_entered_chars', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'nonEmptyResults', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'userClickedResult', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'answerShown', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'answerCitationClicked', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'otherHistoryResultClicked', packedOffset: 4, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'queryWordCount', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_SetUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler_OpenSettingsPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history_embeddings.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_embeddings.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_embeddings.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_embeddings.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_embeddings.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_embeddings.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_embeddings.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

  search(query) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_embeddings.mojom.PageHandler_Search_ParamsSpec,
      null,
      [query]);
  }

  sendQualityLog(selected_indices, num_entered_chars) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec,
      null,
      [selected_indices, num_entered_chars]);
  }

  recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec,
      null,
      [nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount]);
  }

  setUserFeedback(feedback) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  maybeShowFeaturePromo() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec,
      null,
      []);
  }

  openSettingsPage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec,
      null,
      []);
  }

};

history_embeddings.mojom.PageHandler.getRemote = function() {
  let remote = new history_embeddings.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_embeddings.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetPage
history_embeddings.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(history_embeddings.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Search
history_embeddings.mojom.PageHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.Search_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.SearchQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendQualityLog
history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.SendQualityLog_Params',
      packedSize: 24,
      fields: [
        { name: 'selected_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'num_entered_chars', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordSearchResultsMetrics
history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.RecordSearchResultsMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'nonEmptyResults', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'userClickedResult', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'answerShown', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'answerCitationClicked', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'otherHistoryResultClicked', packedOffset: 4, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'queryWordCount', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserFeedback
history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.SetUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MaybeShowFeaturePromo
history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.MaybeShowFeaturePromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenSettingsPage
history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.OpenSettingsPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
history_embeddings.mojom.PageHandlerPtr = history_embeddings.mojom.PageHandlerRemote;
history_embeddings.mojom.PageHandlerRequest = history_embeddings.mojom.PageHandlerPendingReceiver;


// Interface: Page
history_embeddings.mojom.Page = {};

history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.Page_SearchResultChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.SearchResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

history_embeddings.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_embeddings.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_embeddings.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_embeddings.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_embeddings.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_embeddings.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  searchResultChanged(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec,
      null,
      [result]);
  }

};

history_embeddings.mojom.Page.getRemote = function() {
  let remote = new history_embeddings.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_embeddings.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SearchResultChanged
history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.Page.SearchResultChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: history_embeddings.mojom.SearchResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
history_embeddings.mojom.PagePtr = history_embeddings.mojom.PageRemote;
history_embeddings.mojom.PageRequest = history_embeddings.mojom.PagePendingReceiver;

