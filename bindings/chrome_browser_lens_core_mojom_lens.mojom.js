// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var skia = skia || {};
var skia = skia || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};

lens.mojom.UserActionSpec = { $: mojo.internal.Enum() };
lens.mojom.SemanticEventSpec = { $: mojo.internal.Enum() };
lens.mojom.OverlayThemeSpec = { $: {} };
lens.mojom.LensPageHandlerFactory = {};
lens.mojom.LensPageHandlerFactory.$interfaceName = 'lens.mojom.LensPageHandlerFactory';
lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler = {};
lens.mojom.LensPageHandler.$interfaceName = 'lens.mojom.LensPageHandler';
lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec = { $: {} };
lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_CopyText_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_CopyImage_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec = { $: {} };
lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec = { $: {} };
lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec = { $: {} };
lens.mojom.LensPage = {};
lens.mojom.LensPage.$interfaceName = 'lens.mojom.LensPage';
lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec = { $: {} };
lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec = { $: {} };
lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec = { $: {} };
lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec = { $: {} };
lens.mojom.LensPage_ObjectsReceived_ParamsSpec = { $: {} };
lens.mojom.LensPage_TextReceived_ParamsSpec = { $: {} };
lens.mojom.LensPage_RegionTextReceived_ParamsSpec = { $: {} };
lens.mojom.LensPage_ThemeReceived_ParamsSpec = { $: {} };
lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec = { $: {} };
lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec = { $: {} };
lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec = { $: {} };
lens.mojom.LensPage_SetTextSelection_ParamsSpec = { $: {} };
lens.mojom.LensPage_SetTranslateMode_ParamsSpec = { $: {} };
lens.mojom.LensPage_ClearRegionSelection_ParamsSpec = { $: {} };
lens.mojom.LensPage_ClearTextSelection_ParamsSpec = { $: {} };
lens.mojom.LensPage_ClearAllSelections_ParamsSpec = { $: {} };
lens.mojom.LensPage_OnCopyCommand_ParamsSpec = { $: {} };
lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec = { $: {} };
lens.mojom.LensPage_OnOverlayReshown_ParamsSpec = { $: {} };

// Enum: UserAction
lens.mojom.UserAction = {
  kRegionSelection: 0,
  kRegionSelectionChange: 1,
  kTextSelection: 2,
  kObjectClick: 3,
  kTranslateText: 4,
  kCopyText: 5,
  kMyActivity: 6,
  kLearnMore: 7,
  kSendFeedback: 8,
  kTapRegionSelection: 9,
  kTranslateButtonEnableAction: 10,
  kTranslateButtonDisableAction: 11,
  kTranslateSourceLanguageChanged: 12,
  kTranslateTargetLanguageChanged: 13,
  kTranslateTextSelection: 14,
  kCopyAsImage: 15,
  kSaveAsImage: 16,
  kMathSelection: 17,
  kFullScreenshotRegionSelection: 18,
};

// Enum: SemanticEvent
lens.mojom.SemanticEvent = {
  kTextGleamsViewStart: 0,
  kTextGleamsViewEnd: 1,
};

// Struct: OverlayTheme
mojo.internal.Struct(
    lens.mojom.OverlayThemeSpec, 'lens.mojom.OverlayTheme', [
      mojo.internal.StructField('primary', 0, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_1', 8, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_2', 16, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_3', 24, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_4', 32, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_5', 40, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('scrim', 48, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('surface_container_highest_light', 56, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('surface_container_highest_dark', 64, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('selection_element', 72, 0, skia.mojom.SkColorSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: LensPageHandlerFactory
mojo.internal.Struct(
    lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec, 'lens.mojom.LensPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(lens.mojom.LensPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(lens.mojom.LensPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

lens.mojom.LensPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new lens.mojom.LensPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.LensPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, page]);
  }

};

lens.mojom.LensPageHandlerFactory.getRemote = function() {
  let remote = new lens.mojom.LensPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPageHandlerFactory',
    'context');
  return remote.$;
};

lens.mojom.LensPageHandlerFactoryPtr = lens.mojom.LensPageHandlerFactoryRemote;
lens.mojom.LensPageHandlerFactoryRequest = lens.mojom.LensPageHandlerFactoryPendingReceiver;


// Interface: LensPageHandler
mojo.internal.Struct(
    lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_ActivityRequestedByOverlay_Params', [
      mojo.internal.StructField('click_modifiers', 0, 0, ui.mojom.ClickModifiersSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec, 'lens.mojom.LensPageHandler_NotifyOverlayInitialized_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec, 'lens.mojom.LensPageHandler_AddBackgroundBlur_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec, 'lens.mojom.LensPageHandler_SetLiveBlur_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParams', [
      mojo.internal.StructField('invocation_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_InfoRequestedByOverlay_Params', [
      mojo.internal.StructField('click_modifiers', 0, 0, ui.mojom.ClickModifiersSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensRegionRequest_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_click', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensObjectRequest_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_mask_click', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTextSelectionRequest_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_start_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_end_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_translate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_start_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_end_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueMathSelectionRequest_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('formula', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_start_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_end_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_Params', [
      mojo.internal.StructField('source_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CopyText_ParamsSpec, 'lens.mojom.LensPageHandler_CopyText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CopyImage_ParamsSpec, 'lens.mojom.LensPageHandler_CopyImage_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec, 'lens.mojom.LensPageHandler_SaveAsImage_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec, 'lens.mojom.LensPageHandler_ClosePreselectionBubble_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec, 'lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_Params', [
      mojo.internal.StructField('user_action', 0, 0, lens.mojom.UserActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec, 'lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_Params', [
      mojo.internal.StructField('event', 0, 0, lens.mojom.SemanticEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_Params', [
      mojo.internal.StructField('feature_engaged', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParams', [
      mojo.internal.StructField('browser_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_languages', 8, 0, mojo.internal.Array(lens.mojom.LanguageSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('target_languages', 16, 0, mojo.internal.Array(lens.mojom.LanguageSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FinishReshowOverlay_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_AcceptPrivacyNotice_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_DismissPrivacyNotice_Params', [
    ],
    [{version: 0, packedSize: 8}]);

lens.mojom.LensPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensPageHandlerPendingReceiver,
      handle);
    this.$ = new lens.mojom.LensPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.LensPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activityRequestedByOverlay(click_modifiers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec,
      null,
      [click_modifiers]);
  }

  closeRequestedByOverlayCloseButton() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec,
      null,
      []);
  }

  closeRequestedByOverlayBackgroundClick() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec,
      null,
      []);
  }

  notifyOverlayInitialized() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec,
      null,
      []);
  }

  addBackgroundBlur() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec,
      null,
      []);
  }

  setLiveBlur(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec,
      null,
      [enabled]);
  }

  feedbackRequestedByOverlay() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec,
      null,
      []);
  }

  getOverlayInvocationSource() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec,
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec,
      []);
  }

  infoRequestedByOverlay(click_modifiers) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec,
      null,
      [click_modifiers]);
  }

  issueLensRegionRequest(region, is_click) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec,
      null,
      [region, is_click]);
  }

  issueLensObjectRequest(region, is_mask_click) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec,
      null,
      [region, is_mask_click]);
  }

  issueTextSelectionRequest(query, selection_start_index, selection_end_index, is_translate) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec,
      null,
      [query, selection_start_index, selection_end_index, is_translate]);
  }

  issueTranslateSelectionRequest(query, content_language, selection_start_index, selection_end_index) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec,
      null,
      [query, content_language, selection_start_index, selection_end_index]);
  }

  issueMathSelectionRequest(query, formula, selection_start_index, selection_end_index) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec,
      null,
      [query, formula, selection_start_index, selection_end_index]);
  }

  issueTranslateFullPageRequest(source_language, target_language) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec,
      null,
      [source_language, target_language]);
  }

  issueEndTranslateModeRequest() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec,
      null,
      []);
  }

  copyText(text) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPageHandler_CopyText_ParamsSpec,
      null,
      [text]);
  }

  copyImage(region) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPageHandler_CopyImage_ParamsSpec,
      null,
      [region]);
  }

  saveAsImage(region) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec,
      null,
      [region]);
  }

  closePreselectionBubble() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec,
      null,
      []);
  }

  recordUkmAndTaskCompletionForLensOverlayInteraction(user_action) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec,
      null,
      [user_action]);
  }

  recordLensOverlaySemanticEvent(event) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec,
      null,
      [event]);
  }

  maybeShowTranslateFeaturePromo() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec,
      null,
      []);
  }

  maybeCloseTranslateFeaturePromo(feature_engaged) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec,
      null,
      [feature_engaged]);
  }

  fetchSupportedLanguages() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec,
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec,
      []);
  }

  finishReshowOverlay() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec,
      null,
      []);
  }

  acceptPrivacyNotice() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec,
      null,
      []);
  }

  dismissPrivacyNotice() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec,
      null,
      []);
  }

};

lens.mojom.LensPageHandler.getRemote = function() {
  let remote = new lens.mojom.LensPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPageHandler',
    'context');
  return remote.$;
};

lens.mojom.LensPageHandlerPtr = lens.mojom.LensPageHandlerRemote;
lens.mojom.LensPageHandlerRequest = lens.mojom.LensPageHandlerPendingReceiver;


// Interface: LensPage
mojo.internal.Struct(
    lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec, 'lens.mojom.LensPage_ScreenshotDataReceived_Params', [
      mojo.internal.StructField('screenshot_data', 0, 0, skia.mojom.BitmapMappedFromTrustedProcessSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_side_panel_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec, 'lens.mojom.LensPage_NotifyHandshakeComplete_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec, 'lens.mojom.LensPage_NotifyResultsPanelOpened_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec, 'lens.mojom.LensPage_NotifyOverlayClosing_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_ObjectsReceived_ParamsSpec, 'lens.mojom.LensPage_ObjectsReceived_Params', [
      mojo.internal.StructField('objects', 0, 0, mojo.internal.Array(lens.mojom.OverlayObjectSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_TextReceived_ParamsSpec, 'lens.mojom.LensPage_TextReceived_Params', [
      mojo.internal.StructField('text', 0, 0, lens.mojom.TextSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_RegionTextReceived_ParamsSpec, 'lens.mojom.LensPage_RegionTextReceived_Params', [
      mojo.internal.StructField('text', 0, 0, lens.mojom.TextSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_injected_image', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ThemeReceived_ParamsSpec, 'lens.mojom.LensPage_ThemeReceived_Params', [
      mojo.internal.StructField('theme', 0, 0, lens.mojom.OverlayThemeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec, 'lens.mojom.LensPage_ShouldShowContextualSearchBox_Params', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec, 'lens.mojom.LensPage_PageContentTypeChanged_Params', [
      mojo.internal.StructField('new_page_content_type', 0, 0, lens.mojom.PageContentTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec, 'lens.mojom.LensPage_SetPostRegionSelection_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_SetTextSelection_ParamsSpec, 'lens.mojom.LensPage_SetTextSelection_Params', [
      mojo.internal.StructField('selection_start_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_end_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_SetTranslateMode_ParamsSpec, 'lens.mojom.LensPage_SetTranslateMode_Params', [
      mojo.internal.StructField('source_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ClearRegionSelection_ParamsSpec, 'lens.mojom.LensPage_ClearRegionSelection_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_ClearTextSelection_ParamsSpec, 'lens.mojom.LensPage_ClearTextSelection_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_ClearAllSelections_ParamsSpec, 'lens.mojom.LensPage_ClearAllSelections_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_OnCopyCommand_ParamsSpec, 'lens.mojom.LensPage_OnCopyCommand_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec, 'lens.mojom.LensPage_SuppressGhostLoader_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    lens.mojom.LensPage_OnOverlayReshown_ParamsSpec, 'lens.mojom.LensPage_OnOverlayReshown_Params', [
      mojo.internal.StructField('screenshot_data', 0, 0, skia.mojom.BitmapMappedFromTrustedProcessSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

lens.mojom.LensPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensPagePendingReceiver,
      handle);
    this.$ = new lens.mojom.LensPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

lens.mojom.LensPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  screenshotDataReceived(screenshot_data, is_side_panel_open) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec,
      null,
      [screenshot_data, is_side_panel_open]);
  }

  notifyHandshakeComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec,
      null,
      []);
  }

  notifyResultsPanelOpened() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec,
      null,
      []);
  }

  notifyOverlayClosing() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec,
      null,
      []);
  }

  objectsReceived(objects) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPage_ObjectsReceived_ParamsSpec,
      null,
      [objects]);
  }

  textReceived(text) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPage_TextReceived_ParamsSpec,
      null,
      [text]);
  }

  regionTextReceived(text, is_injected_image) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPage_RegionTextReceived_ParamsSpec,
      null,
      [text, is_injected_image]);
  }

  themeReceived(theme) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPage_ThemeReceived_ParamsSpec,
      null,
      [theme]);
  }

  shouldShowContextualSearchBox(should_show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec,
      null,
      [should_show]);
  }

  pageContentTypeChanged(new_page_content_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec,
      null,
      [new_page_content_type]);
  }

  setPostRegionSelection(region) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec,
      null,
      [region]);
  }

  setTextSelection(selection_start_index, selection_end_index) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPage_SetTextSelection_ParamsSpec,
      null,
      [selection_start_index, selection_end_index]);
  }

  setTranslateMode(source_language, target_language) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPage_SetTranslateMode_ParamsSpec,
      null,
      [source_language, target_language]);
  }

  clearRegionSelection() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPage_ClearRegionSelection_ParamsSpec,
      null,
      []);
  }

  clearTextSelection() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPage_ClearTextSelection_ParamsSpec,
      null,
      []);
  }

  clearAllSelections() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPage_ClearAllSelections_ParamsSpec,
      null,
      []);
  }

  onCopyCommand() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPage_OnCopyCommand_ParamsSpec,
      null,
      []);
  }

  suppressGhostLoader() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec,
      null,
      []);
  }

  onOverlayReshown(screenshot_data) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPage_OnOverlayReshown_ParamsSpec,
      null,
      [screenshot_data]);
  }

};

lens.mojom.LensPage.getRemote = function() {
  let remote = new lens.mojom.LensPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPage',
    'context');
  return remote.$;
};

lens.mojom.LensPagePtr = lens.mojom.LensPageRemote;
lens.mojom.LensPageRequest = lens.mojom.LensPagePendingReceiver;

