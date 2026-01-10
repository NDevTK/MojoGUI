// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom
// Module: history_embeddings.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history_embeddings.mojom.PageSpec), null, false, 0, undefined),
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
      [page],
      false);
  }

  search(query) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_embeddings.mojom.PageHandler_Search_ParamsSpec,
      null,
      [query],
      false);
  }

  sendQualityLog(selected_indices, num_entered_chars) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec,
      null,
      [selected_indices, num_entered_chars],
      false);
  }

  recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec,
      null,
      [nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount],
      false);
  }

  setUserFeedback(feedback) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  maybeShowFeaturePromo() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec,
      null,
      [],
      false);
  }

  openSettingsPage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_SetPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Search
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_Search_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Search (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendQualityLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendQualityLog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RecordSearchResultsMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordSearchResultsMetrics (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MaybeShowFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowFeaturePromo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenSettingsPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSettingsPage (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_SetPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_Search_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.search');
          const result = this.impl.search(params.query);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_SendQualityLog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendQualityLog');
          const result = this.impl.sendQualityLog(params.selected_indices, params.num_entered_chars);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_RecordSearchResultsMetrics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordSearchResultsMetrics');
          const result = this.impl.recordSearchResultsMetrics(params.nonEmptyResults, params.userClickedResult, params.answerShown, params.answerCitationClicked, params.otherHistoryResultClicked, params.queryWordCount);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_SetUserFeedback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.feedback);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_MaybeShowFeaturePromo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeShowFeaturePromo');
          const result = this.impl.maybeShowFeaturePromo();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(history_embeddings.mojom.PageHandler_OpenSettingsPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openSettingsPage');
          const result = this.impl.openSettingsPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: SearchResultChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchResultChanged (0)');
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
          const params = decoder.decodeStruct(history_embeddings.mojom.Page_SearchResultChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.searchResultChanged');
          const result = this.impl.searchResultChanged(params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

history_embeddings.mojom.PageReceiver = history_embeddings.mojom.PageReceiver;

history_embeddings.mojom.PagePtr = history_embeddings.mojom.PageRemote;
history_embeddings.mojom.PageRequest = history_embeddings.mojom.PagePendingReceiver;

