// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/os_feedback_ui/mojom/os_feedback_ui.mojom
// Module: ash.os_feedback_ui.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getHelpContents(request) {
    return this.$.getHelpContents(request);
  }
};

ash.os_feedback_ui.mojom.HelpContentProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HelpContentProvider', [
      { explicit: null },
    ]);
  }

  getHelpContents(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HelpContentProvider', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  getFeedbackContext() {
    return this.$.getFeedbackContext();
  }
  getScreenshotPng() {
    return this.$.getScreenshotPng();
  }
  sendReport(report) {
    return this.$.sendReport(report);
  }
  openDiagnosticsApp() {
    return this.$.openDiagnosticsApp();
  }
  openExploreApp() {
    return this.$.openExploreApp();
  }
  openMetricsDialog() {
    return this.$.openMetricsDialog();
  }
  openSystemInfoDialog() {
    return this.$.openSystemInfoDialog();
  }
  openAutofillDialog(autofill_metadata) {
    return this.$.openAutofillDialog(autofill_metadata);
  }
  recordPostSubmitAction(action) {
    return this.$.recordPostSubmitAction(action);
  }
  recordPreSubmitAction(action) {
    return this.$.recordPreSubmitAction(action);
  }
  recordExitPath(exit_path) {
    return this.$.recordExitPath(exit_path);
  }
  recordHelpContentOutcome(outcome) {
    return this.$.recordHelpContentOutcome(outcome);
  }
  recordHelpContentSearchResultCount(count) {
    return this.$.recordHelpContentSearchResultCount(count);
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeedbackServiceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFeedbackContext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec,
      [],
      false);
  }

  getScreenshotPng() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec,
      [],
      false);
  }

  sendReport(report) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec,
      [report],
      false);
  }

  openDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec,
      null,
      [],
      false);
  }

  openExploreApp() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec,
      null,
      [],
      false);
  }

  openMetricsDialog() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openSystemInfoDialog() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec,
      null,
      [],
      false);
  }

  openAutofillDialog(autofill_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec,
      null,
      [autofill_metadata],
      false);
  }

  recordPostSubmitAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec,
      null,
      [action],
      false);
  }

  recordPreSubmitAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec,
      null,
      [action],
      false);
  }

  recordExitPath(exit_path) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec,
      null,
      [exit_path],
      false);
  }

  recordHelpContentOutcome(outcome) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec,
      null,
      [outcome],
      false);
  }

  recordHelpContentSearchResultCount(count) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FeedbackServiceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec.$.structSpec);
          const result = this.impl.openDiagnosticsApp();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec.$.structSpec);
          const result = this.impl.openExploreApp();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openMetricsDialog();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openSystemInfoDialog();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openAutofillDialog(params.autofill_metadata);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordPostSubmitAction(params.action);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordPreSubmitAction(params.action);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec.$.structSpec);
          const result = this.impl.recordExitPath(params.exit_path);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec.$.structSpec);
          const result = this.impl.recordHelpContentOutcome(params.outcome);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec.$.structSpec);
          const result = this.impl.recordHelpContentSearchResultCount(params.count);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver = ash.os_feedback_ui.mojom.FeedbackServiceProviderReceiver;

ash.os_feedback_ui.mojom.FeedbackServiceProviderPtr = ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote;
ash.os_feedback_ui.mojom.FeedbackServiceProviderRequest = ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver;

