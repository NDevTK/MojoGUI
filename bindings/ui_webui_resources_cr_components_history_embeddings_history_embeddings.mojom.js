// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
// Module: history_embeddings.mojom

// Module namespace
var history_embeddings = history_embeddings || {};
history_embeddings.mojom = history_embeddings.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

history_embeddings.mojom.AnswerStatusSpec = { $: mojo.internal.Enum() };
history_embeddings.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
history_embeddings.mojom.AnswerDataSpec = { $: {} };
history_embeddings.mojom.SearchResultItemSpec = { $: {} };
history_embeddings.mojom.SearchQuerySpec = { $: {} };
history_embeddings.mojom.SearchResultSpec = { $: {} };
history_embeddings.mojom.PageHandler = {};
history_embeddings.mojom.PageHandler.$interfaceName = 'history_embeddings.mojom.PageHandler';
history_embeddings.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_Search_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec = { $: {} };
history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec = { $: {} };
history_embeddings.mojom.Page = {};
history_embeddings.mojom.Page.$interfaceName = 'history_embeddings.mojom.Page';
history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec = { $: {} };

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

// Struct: AnswerData
mojo.internal.Struct(
    history_embeddings.mojom.AnswerDataSpec, 'history_embeddings.mojom.AnswerData', [
      mojo.internal.StructField('answer_text_directives', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SearchResultItem
mojo.internal.Struct(
    history_embeddings.mojom.SearchResultItemSpec, 'history_embeddings.mojom.SearchResultItem', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_for_display', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('relative_time', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('short_date_time', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_url_visit_timestamp', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('source_passage', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('answer_data', 56, 0, history_embeddings.mojom.AnswerDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_url_known_to_sync', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: SearchQuery
mojo.internal.Struct(
    history_embeddings.mojom.SearchQuerySpec, 'history_embeddings.mojom.SearchQuery', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time_range_start', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SearchResult
mojo.internal.Struct(
    history_embeddings.mojom.SearchResultSpec, 'history_embeddings.mojom.SearchResult', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('answer_status', 8, 0, history_embeddings.mojom.AnswerStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('answer', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('items', 24, 0, mojo.internal.Array(history_embeddings.mojom.SearchResultItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandler
mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_SetPage_ParamsSpec, 'history_embeddings.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_embeddings.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_Search_ParamsSpec, 'history_embeddings.mojom.PageHandler_Search_Params', [
      mojo.internal.StructField('query', 0, 0, history_embeddings.mojom.SearchQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec, 'history_embeddings.mojom.PageHandler_SendQualityLog_Params', [
      mojo.internal.StructField('selected_indices', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('num_entered_chars', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec, 'history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_Params', [
      mojo.internal.StructField('queryWordCount', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('nonEmptyResults', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('userClickedResult', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('answerShown', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('answerCitationClicked', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('otherHistoryResultClicked', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec, 'history_embeddings.mojom.PageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, history_embeddings.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec, 'history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec, 'history_embeddings.mojom.PageHandler_OpenSettingsPage_Params', [
    ],
    [[0, 8]]);

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
  setPage(page) {
    return this.$.setPage(page);
  }
  search(query) {
    return this.$.search(query);
  }
  sendQualityLog(selected_indices, num_entered_chars) {
    return this.$.sendQualityLog(selected_indices, num_entered_chars);
  }
  recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
    return this.$.recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount);
  }
  setUserFeedback(feedback) {
    return this.$.setUserFeedback(feedback);
  }
  maybeShowFeaturePromo() {
    return this.$.maybeShowFeaturePromo();
  }
  openSettingsPage() {
    return this.$.openSettingsPage();
  }
};

history_embeddings.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_embeddings.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  search(query) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history_embeddings.mojom.PageHandler_Search_ParamsSpec,
      null,
      [query],
      false);
  }

  sendQualityLog(selected_indices, num_entered_chars) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec,
      null,
      [selected_indices, num_entered_chars],
      false);
  }

  recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec,
      null,
      [nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount],
      false);
  }

  setUserFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  maybeShowFeaturePromo() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec,
      null,
      [],
      false);
  }

  openSettingsPage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec,
      null,
      [],
      false);
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

history_embeddings.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SetPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_Search_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_Search_ParamsSpec.$.structSpec);
          const result = this.impl.search(params.query);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec.$.structSpec);
          const result = this.impl.sendQualityLog(params.selected_indices, params.num_entered_chars);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec.$.structSpec);
          const result = this.impl.recordSearchResultsMetrics(params.nonEmptyResults, params.userClickedResult, params.answerShown, params.answerCitationClicked, params.otherHistoryResultClicked, params.queryWordCount);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.setUserFeedback(params.feedback);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec.$.structSpec);
          const result = this.impl.maybeShowFeaturePromo();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec.$.structSpec);
          const result = this.impl.openSettingsPage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_embeddings.mojom.PageHandlerReceiver = history_embeddings.mojom.PageHandlerReceiver;

history_embeddings.mojom.PageHandlerPtr = history_embeddings.mojom.PageHandlerRemote;
history_embeddings.mojom.PageHandlerRequest = history_embeddings.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec, 'history_embeddings.mojom.Page_SearchResultChanged_Params', [
      mojo.internal.StructField('result', 0, 0, history_embeddings.mojom.SearchResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  searchResultChanged(result) {
    return this.$.searchResultChanged(result);
  }
};

history_embeddings.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  searchResultChanged(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec,
      null,
      [result],
      false);
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

history_embeddings.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec.$.structSpec);
          const result = this.impl.searchResultChanged(params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

history_embeddings.mojom.PageReceiver = history_embeddings.mojom.PageReceiver;

history_embeddings.mojom.PagePtr = history_embeddings.mojom.PageRemote;
history_embeddings.mojom.PageRequest = history_embeddings.mojom.PagePendingReceiver;

