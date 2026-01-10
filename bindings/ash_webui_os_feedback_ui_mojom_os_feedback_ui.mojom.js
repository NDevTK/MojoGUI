// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/os_feedback_ui/mojom/os_feedback_ui.mojom
// Module: ash.os_feedback_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.os_feedback_ui = ash.os_feedback_ui || {};
ash.os_feedback_ui.mojom = ash.os_feedback_ui.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.os_feedback_ui.mojom.HelpContentTypeSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.SendReportStatusSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.FeedbackAppPostSubmitActionSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.FeedbackAppPreSubmitActionSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.FeedbackAppExitPathSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcomeSpec = { $: mojo.internal.Enum() };
ash.os_feedback_ui.mojom.HelpContentSpec = { $: {} };
ash.os_feedback_ui.mojom.SearchRequestSpec = { $: {} };
ash.os_feedback_ui.mojom.SearchResponseSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackContextSpec = { $: {} };
ash.os_feedback_ui.mojom.AttachedFileSpec = { $: {} };
ash.os_feedback_ui.mojom.ReportSpec = { $: {} };
ash.os_feedback_ui.mojom.HelpContentProvider = {};
ash.os_feedback_ui.mojom.HelpContentProvider.$interfaceName = 'ash.os_feedback_ui.mojom.HelpContentProvider';
ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider = {};
ash.os_feedback_ui.mojom.FeedbackServiceProvider.$interfaceName = 'ash.os_feedback_ui.mojom.FeedbackServiceProvider';
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec = { $: {} };
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec = { $: {} };

// Enum: HelpContentType
ash.os_feedback_ui.mojom.HelpContentType = {
  kUnknown: 0,
  kArticle: 1,
  kForum: 2,
};

// Enum: SendReportStatus
ash.os_feedback_ui.mojom.SendReportStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kDelayed: 2,
};

// Enum: FeedbackAppPostSubmitAction
ash.os_feedback_ui.mojom.FeedbackAppPostSubmitAction = {
  kSendNewReport: 0,
  kClickDoneButton: 1,
  kOpenExploreApp: 2,
  kOpenDiagnosticsApp: 3,
  kOpenChromebookCommunity: 4,
  kCloseFeedbackApp: 5,
};

// Enum: FeedbackAppPreSubmitAction
ash.os_feedback_ui.mojom.FeedbackAppPreSubmitAction = {
  kViewedHelpContent: 0,
  kViewedScreenshot: 1,
  kViewedImage: 2,
  kViewedSystemAndAppInfo: 3,
  kViewedAutofillMetadata: 4,
  kViewedMetrics: 5,
};

// Enum: FeedbackAppExitPath
ash.os_feedback_ui.mojom.FeedbackAppExitPath = {
  kQuitSearchPageHelpContentClicked: 0,
  kQuitSearchPageNoHelpContentClicked: 1,
  kQuitNoHelpContentDisplayed: 2,
  kQuitShareDataPageHelpContentClicked: 3,
  kQuitShareDataPageNoHelpContentClicked: 4,
  kSuccessHelpContentClicked: 5,
  kSuccessNoHelpContentClicked: 6,
};

// Enum: FeedbackAppHelpContentOutcome
ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcome = {
  kContinueHelpContentClicked: 0,
  kContinueNoHelpContentClicked: 1,
  kContinueNoHelpContentDisplayed: 2,
  kQuitHelpContentClicked: 3,
  kQuitNoHelpContentClicked: 4,
  kQuitNoHelpContentDisplayed: 5,
};

// Struct: HelpContent
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.HelpContentSpec, 'ash.os_feedback_ui.mojom.HelpContent', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, ash.os_feedback_ui.mojom.HelpContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SearchRequest
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.SearchRequestSpec, 'ash.os_feedback_ui.mojom.SearchRequest', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SearchResponse
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.SearchResponseSpec, 'ash.os_feedback_ui.mojom.SearchResponse', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(ash.os_feedback_ui.mojom.HelpContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('total_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeedbackContext
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackContextSpec, 'ash.os_feedback_ui.mojom.FeedbackContext', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('autofill_metadata', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('page_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('extra_diagnostics', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('category_tag', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wifi_debug_logs_allowed', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_linked_cross_device_phone', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_internal_account', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('settings_search_do_not_record_metrics', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_autofill', 44, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AttachedFile
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.AttachedFileSpec, 'ash.os_feedback_ui.mojom.AttachedFile', [
      mojo.internal.StructField('file_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_name', 8, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Report
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.ReportSpec, 'ash.os_feedback_ui.mojom.Report', [
      mojo.internal.StructField('feedback_context', 0, 0, ash.os_feedback_ui.mojom.FeedbackContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('attached_file', 16, 0, ash.os_feedback_ui.mojom.AttachedFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('include_system_logs_and_histograms', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_screenshot', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contact_user_consent_granted', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('send_bluetooth_logs', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('send_wifi_debug_logs', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_autofill_metadata', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: HelpContentProvider
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec, 'ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_Params', [
      mojo.internal.StructField('request', 0, 0, ash.os_feedback_ui.mojom.SearchRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.os_feedback_ui.mojom.SearchResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.os_feedback_ui.mojom.HelpContentProviderRemote = class {
  static get $interfaceName() {
    return 'ash.os_feedback_ui.mojom.HelpContentProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver,
      handle);
    this.$ = new ash.os_feedback_ui.mojom.HelpContentProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.os_feedback_ui.mojom.HelpContentProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHelpContents(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec,
      ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec,
      [request],
      false);
  }

};

ash.os_feedback_ui.mojom.HelpContentProvider.getRemote = function() {
  let remote = new ash.os_feedback_ui.mojom.HelpContentProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.os_feedback_ui.mojom.HelpContentProvider',
    'context');
  return remote.$;
};

ash.os_feedback_ui.mojom.HelpContentProviderReceiver = class {
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
        
        // Try Method 0: GetHelpContents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHelpContents (0)');
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
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHelpContents');
          const result = this.impl.getHelpContents(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec);
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

ash.os_feedback_ui.mojom.HelpContentProviderReceiver = ash.os_feedback_ui.mojom.HelpContentProviderReceiver;

ash.os_feedback_ui.mojom.HelpContentProviderPtr = ash.os_feedback_ui.mojom.HelpContentProviderRemote;
ash.os_feedback_ui.mojom.HelpContentProviderRequest = ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver;


// Interface: FeedbackServiceProvider
mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParams', [
      mojo.internal.StructField('feedback_context', 0, 0, ash.os_feedback_ui.mojom.FeedbackContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParams', [
      mojo.internal.StructField('png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_Params', [
      mojo.internal.StructField('report', 0, 0, ash.os_feedback_ui.mojom.ReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.os_feedback_ui.mojom.SendReportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_Params', [
      mojo.internal.StructField('autofill_metadata', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_Params', [
      mojo.internal.StructField('action', 0, 0, ash.os_feedback_ui.mojom.FeedbackAppPostSubmitActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_Params', [
      mojo.internal.StructField('action', 0, 0, ash.os_feedback_ui.mojom.FeedbackAppPreSubmitActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_Params', [
      mojo.internal.StructField('exit_path', 0, 0, ash.os_feedback_ui.mojom.FeedbackAppExitPathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_Params', [
      mojo.internal.StructField('outcome', 0, 0, ash.os_feedback_ui.mojom.FeedbackAppHelpContentOutcomeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec, 'ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote = class {
  static get $interfaceName() {
    return 'ash.os_feedback_ui.mojom.FeedbackServiceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver,
      handle);
    this.$ = new ash.os_feedback_ui.mojom.FeedbackServiceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFeedbackContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec,
      [],
      false);
  }

  getScreenshotPng() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec,
      [],
      false);
  }

  sendReport(report) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec,
      [report],
      false);
  }

  openDiagnosticsApp() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec,
      null,
      [],
      false);
  }

  openExploreApp() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec,
      null,
      [],
      false);
  }

  openMetricsDialog() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openSystemInfoDialog() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openAutofillDialog(autofill_metadata) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec,
      null,
      [autofill_metadata],
      false);
  }

  recordPostSubmitAction(action) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec,
      null,
      [action],
      false);
  }

  recordPreSubmitAction(action) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec,
      null,
      [action],
      false);
  }

  recordExitPath(exit_path) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec,
      null,
      [exit_path],
      false);
  }

  recordHelpContentOutcome(outcome) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec,
      null,
      [outcome],
      false);
  }

  recordHelpContentSearchResultCount(count) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec,
      null,
      [count],
      false);
  }

};

ash.os_feedback_ui.mojom.FeedbackServiceProvider.getRemote = function() {
  let remote = new ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.os_feedback_ui.mojom.FeedbackServiceProvider',
    'context');
  return remote.$;
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver = class {
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
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        
        // Try Method 0: GetFeedbackContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedbackContext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetScreenshotPng
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScreenshotPng (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendReport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenDiagnosticsApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDiagnosticsApp (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenExploreApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenExploreApp (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenMetricsDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenMetricsDialog (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenSystemInfoDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSystemInfoDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenAutofillDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAutofillDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RecordPostSubmitAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordPostSubmitAction (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RecordPreSubmitAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordPreSubmitAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RecordExitPath
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExitPath (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RecordHelpContentOutcome
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHelpContentOutcome (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RecordHelpContentSearchResultCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHelpContentSearchResultCount (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFeedbackContext');
          const result = this.impl.getFeedbackContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getScreenshotPng');
          const result = this.impl.getScreenshotPng();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendReport');
          const result = this.impl.sendReport(params.report);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDiagnosticsApp');
          const result = this.impl.openDiagnosticsApp();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openExploreApp');
          const result = this.impl.openExploreApp();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openMetricsDialog');
          const result = this.impl.openMetricsDialog();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openSystemInfoDialog');
          const result = this.impl.openSystemInfoDialog();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openAutofillDialog');
          const result = this.impl.openAutofillDialog(params.autofill_metadata);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordPostSubmitAction');
          const result = this.impl.recordPostSubmitAction(params.action);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordPreSubmitAction');
          const result = this.impl.recordPreSubmitAction(params.action);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordExitPath');
          const result = this.impl.recordExitPath(params.exit_path);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordHelpContentOutcome');
          const result = this.impl.recordHelpContentOutcome(params.outcome);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordHelpContentSearchResultCount');
          const result = this.impl.recordHelpContentSearchResultCount(params.count);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver = ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver;

ash.os_feedback_ui.mojom.FeedbackServiceProviderPtr = ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote;
ash.os_feedback_ui.mojom.FeedbackServiceProviderRequest = ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver;

