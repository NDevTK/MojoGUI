// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
// Module: history_embeddings.mojom

'use strict';

// Module namespace
var history_embeddings = history_embeddings || {};
history_embeddings.mojom = history_embeddings.mojom || {};


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

// Enum: UserFeedback
history_embeddings.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};

// Interface: PageHandler
history_embeddings.mojom.PageHandler = {};

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
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'selected_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'num_entered_chars', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordSearchResultsMetrics
history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_embeddings.mojom.PageHandler.RecordSearchResultsMetrics_Params',
      packedSize: 24,
      fields: [
        { name: 'nonEmptyResults', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'userClickedResult', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'answerShown', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'answerCitationClicked', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'otherHistoryResultClicked', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'queryWordCount', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_embeddings.mojom.PageHandlerPtr = history_embeddings.mojom.PageHandlerRemote;
history_embeddings.mojom.PageHandlerRequest = history_embeddings.mojom.PageHandlerPendingReceiver;


// Interface: Page
history_embeddings.mojom.Page = {};

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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_embeddings.mojom.PagePtr = history_embeddings.mojom.PageRemote;
history_embeddings.mojom.PageRequest = history_embeddings.mojom.PagePendingReceiver;

