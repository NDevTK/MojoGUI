// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/os_feedback_ui/mojom/os_feedback_ui.mojom
// Module: ash.os_feedback_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.os_feedback_ui = ash.os_feedback_ui || {};
ash.os_feedback_ui.mojom = ash.os_feedback_ui.mojom || {};


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

// Interface: HelpContentProvider
ash.os_feedback_ui.mojom.HelpContentProvider = {};

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
      ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec,
      [request],
      undefined,
      undefined
    );
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

// ParamsSpec for GetHelpContents
ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.HelpContentProvider.GetHelpContents_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.os_feedback_ui.mojom.HelpContentProvider_GetHelpContents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.HelpContentProvider.GetHelpContents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.os_feedback_ui.mojom.HelpContentProviderPtr = ash.os_feedback_ui.mojom.HelpContentProviderRemote;
ash.os_feedback_ui.mojom.HelpContentProviderRequest = ash.os_feedback_ui.mojom.HelpContentProviderPendingReceiver;


// Interface: FeedbackServiceProvider
ash.os_feedback_ui.mojom.FeedbackServiceProvider = {};

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
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getScreenshotPng() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  sendReport(report) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec,
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec,
      [report],
      undefined,
      undefined
    );
  }

  openDiagnosticsApp() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openExploreApp() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openMetricsDialog() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openSystemInfoDialog() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openAutofillDialog(autofill_metadata) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec,
      null,
      null,
      [autofill_metadata],
      undefined,
      undefined
    );
  }

  recordPostSubmitAction(action) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec,
      null,
      null,
      [action],
      undefined,
      undefined
    );
  }

  recordPreSubmitAction(action) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec,
      null,
      null,
      [action],
      undefined,
      undefined
    );
  }

  recordExitPath(exit_path) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec,
      null,
      null,
      [exit_path],
      undefined,
      undefined
    );
  }

  recordHelpContentOutcome(outcome) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec,
      null,
      null,
      [outcome],
      undefined,
      undefined
    );
  }

  recordHelpContentSearchResultCount(count) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec,
      null,
      null,
      [count],
      undefined,
      undefined
    );
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

// ParamsSpec for GetFeedbackContext
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.GetFeedbackContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetFeedbackContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.GetFeedbackContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feedback_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetScreenshotPng
ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.GetScreenshotPng_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProvider_GetScreenshotPng_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.GetScreenshotPng_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'png_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendReport
ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.SendReport_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.os_feedback_ui.mojom.FeedbackServiceProvider_SendReport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.SendReport_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenDiagnosticsApp
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenDiagnosticsApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.OpenDiagnosticsApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenExploreApp
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenExploreApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.OpenExploreApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenMetricsDialog
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenMetricsDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.OpenMetricsDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenSystemInfoDialog
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenSystemInfoDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.OpenSystemInfoDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenAutofillDialog
ash.os_feedback_ui.mojom.FeedbackServiceProvider_OpenAutofillDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.OpenAutofillDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'autofill_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordPostSubmitAction
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPostSubmitAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.RecordPostSubmitAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordPreSubmitAction
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordPreSubmitAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.RecordPreSubmitAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordExitPath
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordExitPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.RecordExitPath_Params',
      packedSize: 16,
      fields: [
        { name: 'exit_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordHelpContentOutcome
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentOutcome_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.RecordHelpContentOutcome_Params',
      packedSize: 16,
      fields: [
        { name: 'outcome', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordHelpContentSearchResultCount
ash.os_feedback_ui.mojom.FeedbackServiceProvider_RecordHelpContentSearchResultCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.os_feedback_ui.mojom.FeedbackServiceProvider.RecordHelpContentSearchResultCount_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.os_feedback_ui.mojom.FeedbackServiceProviderPtr = ash.os_feedback_ui.mojom.FeedbackServiceProviderRemote;
ash.os_feedback_ui.mojom.FeedbackServiceProviderRequest = ash.os_feedback_ui.mojom.FeedbackServiceProviderPendingReceiver;

