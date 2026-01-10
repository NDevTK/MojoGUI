// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
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
      mojo.internal.StructField('primary', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_1', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_2', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_3', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_4', 32, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shader_layer_5', 40, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrim', 48, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_container_highest_light', 56, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_container_highest_dark', 64, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_element', 72, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: LensPageHandlerFactory
mojo.internal.Struct(
    lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec, 'lens.mojom.LensPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(lens.mojom.LensPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(lens.mojom.LensPageSpec), null, false, 0, undefined),
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
      [handler, page],
      false);
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

lens.mojom.LensPageHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStruct(lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

lens.mojom.LensPageHandlerFactoryReceiver = lens.mojom.LensPageHandlerFactoryReceiver;

lens.mojom.LensPageHandlerFactoryPtr = lens.mojom.LensPageHandlerFactoryRemote;
lens.mojom.LensPageHandlerFactoryRequest = lens.mojom.LensPageHandlerFactoryPendingReceiver;


// Interface: LensPageHandler
mojo.internal.Struct(
    lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_ActivityRequestedByOverlay_Params', [
      mojo.internal.StructField('click_modifiers', 0, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec, 'lens.mojom.LensPageHandler_NotifyOverlayInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec, 'lens.mojom.LensPageHandler_AddBackgroundBlur_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec, 'lens.mojom.LensPageHandler_SetLiveBlur_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParams', [
      mojo.internal.StructField('invocation_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_InfoRequestedByOverlay_Params', [
      mojo.internal.StructField('click_modifiers', 0, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensRegionRequest_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_click', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensObjectRequest_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CopyText_ParamsSpec, 'lens.mojom.LensPageHandler_CopyText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_CopyImage_ParamsSpec, 'lens.mojom.LensPageHandler_CopyImage_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec, 'lens.mojom.LensPageHandler_SaveAsImage_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec, 'lens.mojom.LensPageHandler_ClosePreselectionBubble_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec, 'lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_Params', [
      mojo.internal.StructField('user_action', 0, 0, lens.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec, 'lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_Params', [
      mojo.internal.StructField('event', 0, 0, lens.mojom.SemanticEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_Params', [
      mojo.internal.StructField('feature_engaged', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParams', [
      mojo.internal.StructField('browser_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_languages', 8, 0, mojo.internal.Array(lens.mojom.LanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('target_languages', 16, 0, mojo.internal.Array(lens.mojom.LanguageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FinishReshowOverlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_AcceptPrivacyNotice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_DismissPrivacyNotice_Params', [
    ],
    [[0, 8]]);

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
      [click_modifiers],
      false);
  }

  closeRequestedByOverlayCloseButton() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec,
      null,
      [],
      false);
  }

  closeRequestedByOverlayBackgroundClick() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec,
      null,
      [],
      false);
  }

  notifyOverlayInitialized() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec,
      null,
      [],
      false);
  }

  addBackgroundBlur() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec,
      null,
      [],
      false);
  }

  setLiveBlur(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec,
      null,
      [enabled],
      false);
  }

  feedbackRequestedByOverlay() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec,
      null,
      [],
      false);
  }

  getOverlayInvocationSource() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec,
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec,
      [],
      false);
  }

  infoRequestedByOverlay(click_modifiers) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec,
      null,
      [click_modifiers],
      false);
  }

  issueLensRegionRequest(region, is_click) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec,
      null,
      [region, is_click],
      false);
  }

  issueLensObjectRequest(region, is_mask_click) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec,
      null,
      [region, is_mask_click],
      false);
  }

  issueTextSelectionRequest(query, selection_start_index, selection_end_index, is_translate) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec,
      null,
      [query, selection_start_index, selection_end_index, is_translate],
      false);
  }

  issueTranslateSelectionRequest(query, content_language, selection_start_index, selection_end_index) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec,
      null,
      [query, content_language, selection_start_index, selection_end_index],
      false);
  }

  issueMathSelectionRequest(query, formula, selection_start_index, selection_end_index) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec,
      null,
      [query, formula, selection_start_index, selection_end_index],
      false);
  }

  issueTranslateFullPageRequest(source_language, target_language) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec,
      null,
      [source_language, target_language],
      false);
  }

  issueEndTranslateModeRequest() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec,
      null,
      [],
      false);
  }

  copyText(text) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPageHandler_CopyText_ParamsSpec,
      null,
      [text],
      false);
  }

  copyImage(region) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPageHandler_CopyImage_ParamsSpec,
      null,
      [region],
      false);
  }

  saveAsImage(region) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec,
      null,
      [region],
      false);
  }

  closePreselectionBubble() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec,
      null,
      [],
      false);
  }

  recordUkmAndTaskCompletionForLensOverlayInteraction(user_action) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec,
      null,
      [user_action],
      false);
  }

  recordLensOverlaySemanticEvent(event) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  maybeShowTranslateFeaturePromo() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec,
      null,
      [],
      false);
  }

  maybeCloseTranslateFeaturePromo(feature_engaged) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec,
      null,
      [feature_engaged],
      false);
  }

  fetchSupportedLanguages() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec,
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec,
      [],
      false);
  }

  finishReshowOverlay() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec,
      null,
      [],
      false);
  }

  acceptPrivacyNotice() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec,
      null,
      [],
      false);
  }

  dismissPrivacyNotice() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec,
      null,
      [],
      false);
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

lens.mojom.LensPageHandlerReceiver = class {
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
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
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
        
        // Try Method 0: ActivityRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivityRequestedByOverlay (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseRequestedByOverlayCloseButton
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseRequestedByOverlayCloseButton (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseRequestedByOverlayBackgroundClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseRequestedByOverlayBackgroundClick (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyOverlayInitialized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOverlayInitialized (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddBackgroundBlur
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddBackgroundBlur (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetLiveBlur
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLiveBlur (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FeedbackRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FeedbackRequestedByOverlay (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetOverlayInvocationSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOverlayInvocationSource (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InfoRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InfoRequestedByOverlay (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: IssueLensRegionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueLensRegionRequest (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: IssueLensObjectRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueLensObjectRequest (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: IssueTextSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTextSelectionRequest (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IssueTranslateSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTranslateSelectionRequest (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IssueMathSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueMathSelectionRequest (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: IssueTranslateFullPageRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTranslateFullPageRequest (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: IssueEndTranslateModeRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueEndTranslateModeRequest (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: CopyText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_CopyText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyText (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: CopyImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_CopyImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyImage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SaveAsImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveAsImage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ClosePreselectionBubble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePreselectionBubble (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RecordUkmAndTaskCompletionForLensOverlayInteraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUkmAndTaskCompletionForLensOverlayInteraction (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RecordLensOverlaySemanticEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordLensOverlaySemanticEvent (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: MaybeShowTranslateFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowTranslateFeaturePromo (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: MaybeCloseTranslateFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeCloseTranslateFeaturePromo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: FetchSupportedLanguages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchSupportedLanguages (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: FinishReshowOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishReshowOverlay (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: AcceptPrivacyNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptPrivacyNotice (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: DismissPrivacyNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissPrivacyNotice (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
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
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activityRequestedByOverlay');
          const result = this.impl.activityRequestedByOverlay(params.click_modifiers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeRequestedByOverlayCloseButton');
          const result = this.impl.closeRequestedByOverlayCloseButton();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeRequestedByOverlayBackgroundClick');
          const result = this.impl.closeRequestedByOverlayBackgroundClick();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyOverlayInitialized');
          const result = this.impl.notifyOverlayInitialized();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addBackgroundBlur');
          const result = this.impl.addBackgroundBlur();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLiveBlur');
          const result = this.impl.setLiveBlur(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.feedbackRequestedByOverlay');
          const result = this.impl.feedbackRequestedByOverlay();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOverlayInvocationSource');
          const result = this.impl.getOverlayInvocationSource();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.infoRequestedByOverlay');
          const result = this.impl.infoRequestedByOverlay(params.click_modifiers);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueLensRegionRequest');
          const result = this.impl.issueLensRegionRequest(params.region, params.is_click);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueLensObjectRequest');
          const result = this.impl.issueLensObjectRequest(params.region, params.is_mask_click);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueTextSelectionRequest');
          const result = this.impl.issueTextSelectionRequest(params.query, params.selection_start_index, params.selection_end_index, params.is_translate);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueTranslateSelectionRequest');
          const result = this.impl.issueTranslateSelectionRequest(params.query, params.content_language, params.selection_start_index, params.selection_end_index);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueMathSelectionRequest');
          const result = this.impl.issueMathSelectionRequest(params.query, params.formula, params.selection_start_index, params.selection_end_index);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueTranslateFullPageRequest');
          const result = this.impl.issueTranslateFullPageRequest(params.source_language, params.target_language);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.issueEndTranslateModeRequest');
          const result = this.impl.issueEndTranslateModeRequest();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_CopyText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.copyText');
          const result = this.impl.copyText(params.text);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_CopyImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.copyImage');
          const result = this.impl.copyImage(params.region);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.saveAsImage');
          const result = this.impl.saveAsImage(params.region);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closePreselectionBubble');
          const result = this.impl.closePreselectionBubble();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordUkmAndTaskCompletionForLensOverlayInteraction');
          const result = this.impl.recordUkmAndTaskCompletionForLensOverlayInteraction(params.user_action);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordLensOverlaySemanticEvent');
          const result = this.impl.recordLensOverlaySemanticEvent(params.event);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeShowTranslateFeaturePromo');
          const result = this.impl.maybeShowTranslateFeaturePromo();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeCloseTranslateFeaturePromo');
          const result = this.impl.maybeCloseTranslateFeaturePromo(params.feature_engaged);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fetchSupportedLanguages');
          const result = this.impl.fetchSupportedLanguages();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.finishReshowOverlay');
          const result = this.impl.finishReshowOverlay();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acceptPrivacyNotice');
          const result = this.impl.acceptPrivacyNotice();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissPrivacyNotice');
          const result = this.impl.dismissPrivacyNotice();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

lens.mojom.LensPageHandlerReceiver = lens.mojom.LensPageHandlerReceiver;

lens.mojom.LensPageHandlerPtr = lens.mojom.LensPageHandlerRemote;
lens.mojom.LensPageHandlerRequest = lens.mojom.LensPageHandlerPendingReceiver;


// Interface: LensPage
mojo.internal.Struct(
    lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec, 'lens.mojom.LensPage_ScreenshotDataReceived_Params', [
      mojo.internal.StructField('screenshot_data', 0, 0, skia.mojom.BitmapMappedFromTrustedProcessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_side_panel_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec, 'lens.mojom.LensPage_NotifyHandshakeComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec, 'lens.mojom.LensPage_NotifyResultsPanelOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec, 'lens.mojom.LensPage_NotifyOverlayClosing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ObjectsReceived_ParamsSpec, 'lens.mojom.LensPage_ObjectsReceived_Params', [
      mojo.internal.StructField('objects', 0, 0, mojo.internal.Array(lens.mojom.OverlayObjectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_TextReceived_ParamsSpec, 'lens.mojom.LensPage_TextReceived_Params', [
      mojo.internal.StructField('text', 0, 0, lens.mojom.TextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_RegionTextReceived_ParamsSpec, 'lens.mojom.LensPage_RegionTextReceived_Params', [
      mojo.internal.StructField('text', 0, 0, lens.mojom.TextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_injected_image', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ThemeReceived_ParamsSpec, 'lens.mojom.LensPage_ThemeReceived_Params', [
      mojo.internal.StructField('theme', 0, 0, lens.mojom.OverlayThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec, 'lens.mojom.LensPage_ShouldShowContextualSearchBox_Params', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec, 'lens.mojom.LensPage_PageContentTypeChanged_Params', [
      mojo.internal.StructField('new_page_content_type', 0, 0, lens.mojom.PageContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec, 'lens.mojom.LensPage_SetPostRegionSelection_Params', [
      mojo.internal.StructField('region', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ClearTextSelection_ParamsSpec, 'lens.mojom.LensPage_ClearTextSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_ClearAllSelections_ParamsSpec, 'lens.mojom.LensPage_ClearAllSelections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_OnCopyCommand_ParamsSpec, 'lens.mojom.LensPage_OnCopyCommand_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec, 'lens.mojom.LensPage_SuppressGhostLoader_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensPage_OnOverlayReshown_ParamsSpec, 'lens.mojom.LensPage_OnOverlayReshown_Params', [
      mojo.internal.StructField('screenshot_data', 0, 0, skia.mojom.BitmapMappedFromTrustedProcessSpec.$, null, false, 0, undefined),
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
      [screenshot_data, is_side_panel_open],
      false);
  }

  notifyHandshakeComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec,
      null,
      [],
      false);
  }

  notifyResultsPanelOpened() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec,
      null,
      [],
      false);
  }

  notifyOverlayClosing() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec,
      null,
      [],
      false);
  }

  objectsReceived(objects) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPage_ObjectsReceived_ParamsSpec,
      null,
      [objects],
      false);
  }

  textReceived(text) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPage_TextReceived_ParamsSpec,
      null,
      [text],
      false);
  }

  regionTextReceived(text, is_injected_image) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPage_RegionTextReceived_ParamsSpec,
      null,
      [text, is_injected_image],
      false);
  }

  themeReceived(theme) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPage_ThemeReceived_ParamsSpec,
      null,
      [theme],
      false);
  }

  shouldShowContextualSearchBox(should_show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec,
      null,
      [should_show],
      false);
  }

  pageContentTypeChanged(new_page_content_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec,
      null,
      [new_page_content_type],
      false);
  }

  setPostRegionSelection(region) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec,
      null,
      [region],
      false);
  }

  setTextSelection(selection_start_index, selection_end_index) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPage_SetTextSelection_ParamsSpec,
      null,
      [selection_start_index, selection_end_index],
      false);
  }

  setTranslateMode(source_language, target_language) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPage_SetTranslateMode_ParamsSpec,
      null,
      [source_language, target_language],
      false);
  }

  clearRegionSelection() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPage_ClearRegionSelection_ParamsSpec,
      null,
      [],
      false);
  }

  clearTextSelection() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPage_ClearTextSelection_ParamsSpec,
      null,
      [],
      false);
  }

  clearAllSelections() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPage_ClearAllSelections_ParamsSpec,
      null,
      [],
      false);
  }

  onCopyCommand() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPage_OnCopyCommand_ParamsSpec,
      null,
      [],
      false);
  }

  suppressGhostLoader() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec,
      null,
      [],
      false);
  }

  onOverlayReshown(screenshot_data) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPage_OnOverlayReshown_ParamsSpec,
      null,
      [screenshot_data],
      false);
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

lens.mojom.LensPageReceiver = class {
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
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
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
        
        // Try Method 0: ScreenshotDataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScreenshotDataReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyHandshakeComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyHandshakeComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyResultsPanelOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResultsPanelOpened (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyOverlayClosing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOverlayClosing (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObjectsReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ObjectsReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObjectsReceived (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TextReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_TextReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextReceived (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RegionTextReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_RegionTextReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegionTextReceived (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ThemeReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ThemeReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeReceived (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShouldShowContextualSearchBox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowContextualSearchBox (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PageContentTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageContentTypeChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPostRegionSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPostRegionSelection (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetTextSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_SetTextSelection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextSelection (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetTranslateMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_SetTranslateMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTranslateMode (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ClearRegionSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ClearRegionSelection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearRegionSelection (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ClearTextSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ClearTextSelection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTextSelection (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ClearAllSelections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_ClearAllSelections_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAllSelections (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnCopyCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_OnCopyCommand_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCopyCommand (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SuppressGhostLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressGhostLoader (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnOverlayReshown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(lens.mojom.LensPage_OnOverlayReshown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOverlayReshown (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStruct(lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.screenshotDataReceived');
          const result = this.impl.screenshotDataReceived(params.screenshot_data, params.is_side_panel_open);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyHandshakeComplete');
          const result = this.impl.notifyHandshakeComplete();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyResultsPanelOpened');
          const result = this.impl.notifyResultsPanelOpened();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyOverlayClosing');
          const result = this.impl.notifyOverlayClosing();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ObjectsReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.objectsReceived');
          const result = this.impl.objectsReceived(params.objects);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_TextReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.textReceived');
          const result = this.impl.textReceived(params.text);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_RegionTextReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.regionTextReceived');
          const result = this.impl.regionTextReceived(params.text, params.is_injected_image);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ThemeReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.themeReceived');
          const result = this.impl.themeReceived(params.theme);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shouldShowContextualSearchBox');
          const result = this.impl.shouldShowContextualSearchBox(params.should_show);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pageContentTypeChanged');
          const result = this.impl.pageContentTypeChanged(params.new_page_content_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPostRegionSelection');
          const result = this.impl.setPostRegionSelection(params.region);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_SetTextSelection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTextSelection');
          const result = this.impl.setTextSelection(params.selection_start_index, params.selection_end_index);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_SetTranslateMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTranslateMode');
          const result = this.impl.setTranslateMode(params.source_language, params.target_language);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ClearRegionSelection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearRegionSelection');
          const result = this.impl.clearRegionSelection();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ClearTextSelection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearTextSelection');
          const result = this.impl.clearTextSelection();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_ClearAllSelections_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearAllSelections');
          const result = this.impl.clearAllSelections();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_OnCopyCommand_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCopyCommand');
          const result = this.impl.onCopyCommand();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suppressGhostLoader');
          const result = this.impl.suppressGhostLoader();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(lens.mojom.LensPage_OnOverlayReshown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOverlayReshown');
          const result = this.impl.onOverlayReshown(params.screenshot_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

lens.mojom.LensPageReceiver = lens.mojom.LensPageReceiver;

lens.mojom.LensPagePtr = lens.mojom.LensPageRemote;
lens.mojom.LensPageRequest = lens.mojom.LensPagePendingReceiver;

