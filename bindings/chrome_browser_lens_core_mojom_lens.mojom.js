// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


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

// Interface: LensPageHandlerFactory
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
      lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec.$,
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
}};

// ParamsSpec for CreatePageHandler
lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
lens.mojom.LensPageHandlerFactoryPtr = lens.mojom.LensPageHandlerFactoryRemote;
lens.mojom.LensPageHandlerFactoryRequest = lens.mojom.LensPageHandlerFactoryPendingReceiver;


// Interface: LensPageHandler
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
      lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec.$,
      null,
      [click_modifiers]);
  }

  closeRequestedByOverlayCloseButton() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec.$,
      null,
      []);
  }

  closeRequestedByOverlayBackgroundClick() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec.$,
      null,
      []);
  }

  notifyOverlayInitialized() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec.$,
      null,
      []);
  }

  addBackgroundBlur() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec.$,
      null,
      []);
  }

  setLiveBlur(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec.$,
      null,
      [enabled]);
  }

  feedbackRequestedByOverlay() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec.$,
      null,
      []);
  }

  getOverlayInvocationSource() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec.$,
      lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec.$,
      []);
  }

  infoRequestedByOverlay(click_modifiers) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec.$,
      null,
      [click_modifiers]);
  }

  issueLensRegionRequest(region, is_click) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec.$,
      null,
      [region, is_click]);
  }

  issueLensObjectRequest(region, is_mask_click) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec.$,
      null,
      [region, is_mask_click]);
  }

  issueTextSelectionRequest(query, selection_start_index, selection_end_index, is_translate) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec.$,
      null,
      [query, selection_start_index, selection_end_index, is_translate]);
  }

  issueTranslateSelectionRequest(query, content_language, selection_start_index, selection_end_index) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec.$,
      null,
      [query, content_language, selection_start_index, selection_end_index]);
  }

  issueMathSelectionRequest(query, formula, selection_start_index, selection_end_index) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec.$,
      null,
      [query, formula, selection_start_index, selection_end_index]);
  }

  issueTranslateFullPageRequest(source_language, target_language) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec.$,
      null,
      [source_language, target_language]);
  }

  issueEndTranslateModeRequest() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec.$,
      null,
      []);
  }

  copyText(text) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPageHandler_CopyText_ParamsSpec.$,
      null,
      [text]);
  }

  copyImage(region) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPageHandler_CopyImage_ParamsSpec.$,
      null,
      [region]);
  }

  saveAsImage(region) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec.$,
      null,
      [region]);
  }

  closePreselectionBubble() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec.$,
      null,
      []);
  }

  recordUkmAndTaskCompletionForLensOverlayInteraction(user_action) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec.$,
      null,
      [user_action]);
  }

  recordLensOverlaySemanticEvent(event) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec.$,
      null,
      [event]);
  }

  maybeShowTranslateFeaturePromo() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec.$,
      null,
      []);
  }

  maybeCloseTranslateFeaturePromo(feature_engaged) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec.$,
      null,
      [feature_engaged]);
  }

  fetchSupportedLanguages() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec.$,
      lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec.$,
      []);
  }

  finishReshowOverlay() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec.$,
      null,
      []);
  }

  acceptPrivacyNotice() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec.$,
      null,
      []);
  }

  dismissPrivacyNotice() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec.$,
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
}};

// ParamsSpec for ActivityRequestedByOverlay
lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.ActivityRequestedByOverlay_Params',
      packedSize: 16,
      fields: [
        { name: 'click_modifiers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CloseRequestedByOverlayCloseButton
lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.CloseRequestedByOverlayCloseButton_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CloseRequestedByOverlayBackgroundClick
lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.CloseRequestedByOverlayBackgroundClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyOverlayInitialized
lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.NotifyOverlayInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddBackgroundBlur
lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.AddBackgroundBlur_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetLiveBlur
lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.SetLiveBlur_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FeedbackRequestedByOverlay
lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.FeedbackRequestedByOverlay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetOverlayInvocationSource
lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.GetOverlayInvocationSource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.GetOverlayInvocationSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'invocation_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for InfoRequestedByOverlay
lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.InfoRequestedByOverlay_Params',
      packedSize: 16,
      fields: [
        { name: 'click_modifiers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueLensRegionRequest
lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueLensRegionRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_click', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueLensObjectRequest
lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueLensObjectRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_mask_click', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueTextSelectionRequest
lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueTextSelectionRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_start_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_end_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_translate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueTranslateSelectionRequest
lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueTranslateSelectionRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_start_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_end_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueMathSelectionRequest
lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueMathSelectionRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'formula', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_start_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_end_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueTranslateFullPageRequest
lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueTranslateFullPageRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'source_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IssueEndTranslateModeRequest
lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.IssueEndTranslateModeRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CopyText
lens.mojom.LensPageHandler_CopyText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.CopyText_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CopyImage
lens.mojom.LensPageHandler_CopyImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.CopyImage_Params',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SaveAsImage
lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.SaveAsImage_Params',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClosePreselectionBubble
lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.ClosePreselectionBubble_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RecordUkmAndTaskCompletionForLensOverlayInteraction
lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.RecordUkmAndTaskCompletionForLensOverlayInteraction_Params',
      packedSize: 16,
      fields: [
        { name: 'user_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RecordLensOverlaySemanticEvent
lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.RecordLensOverlaySemanticEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MaybeShowTranslateFeaturePromo
lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.MaybeShowTranslateFeaturePromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MaybeCloseTranslateFeaturePromo
lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.MaybeCloseTranslateFeaturePromo_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_engaged', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FetchSupportedLanguages
lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.FetchSupportedLanguages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.FetchSupportedLanguages_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'browser_locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_languages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_languages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FinishReshowOverlay
lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.FinishReshowOverlay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AcceptPrivacyNotice
lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.AcceptPrivacyNotice_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DismissPrivacyNotice
lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPageHandler.DismissPrivacyNotice_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
lens.mojom.LensPageHandlerPtr = lens.mojom.LensPageHandlerRemote;
lens.mojom.LensPageHandlerRequest = lens.mojom.LensPageHandlerPendingReceiver;


// Interface: LensPage
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
      lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec.$,
      null,
      [screenshot_data, is_side_panel_open]);
  }

  notifyHandshakeComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec.$,
      null,
      []);
  }

  notifyResultsPanelOpened() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec.$,
      null,
      []);
  }

  notifyOverlayClosing() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec.$,
      null,
      []);
  }

  objectsReceived(objects) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensPage_ObjectsReceived_ParamsSpec.$,
      null,
      [objects]);
  }

  textReceived(text) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensPage_TextReceived_ParamsSpec.$,
      null,
      [text]);
  }

  regionTextReceived(text, is_injected_image) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensPage_RegionTextReceived_ParamsSpec.$,
      null,
      [text, is_injected_image]);
  }

  themeReceived(theme) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensPage_ThemeReceived_ParamsSpec.$,
      null,
      [theme]);
  }

  shouldShowContextualSearchBox(should_show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec.$,
      null,
      [should_show]);
  }

  pageContentTypeChanged(new_page_content_type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec.$,
      null,
      [new_page_content_type]);
  }

  setPostRegionSelection(region) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec.$,
      null,
      [region]);
  }

  setTextSelection(selection_start_index, selection_end_index) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensPage_SetTextSelection_ParamsSpec.$,
      null,
      [selection_start_index, selection_end_index]);
  }

  setTranslateMode(source_language, target_language) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensPage_SetTranslateMode_ParamsSpec.$,
      null,
      [source_language, target_language]);
  }

  clearRegionSelection() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensPage_ClearRegionSelection_ParamsSpec.$,
      null,
      []);
  }

  clearTextSelection() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      lens.mojom.LensPage_ClearTextSelection_ParamsSpec.$,
      null,
      []);
  }

  clearAllSelections() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      lens.mojom.LensPage_ClearAllSelections_ParamsSpec.$,
      null,
      []);
  }

  onCopyCommand() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      lens.mojom.LensPage_OnCopyCommand_ParamsSpec.$,
      null,
      []);
  }

  suppressGhostLoader() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec.$,
      null,
      []);
  }

  onOverlayReshown(screenshot_data) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      lens.mojom.LensPage_OnOverlayReshown_ParamsSpec.$,
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
}};

// ParamsSpec for ScreenshotDataReceived
lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ScreenshotDataReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'screenshot_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_side_panel_open', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyHandshakeComplete
lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.NotifyHandshakeComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyResultsPanelOpened
lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.NotifyResultsPanelOpened_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyOverlayClosing
lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.NotifyOverlayClosing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ObjectsReceived
lens.mojom.LensPage_ObjectsReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ObjectsReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'objects', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TextReceived
lens.mojom.LensPage_TextReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.TextReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RegionTextReceived
lens.mojom.LensPage_RegionTextReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.RegionTextReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_injected_image', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ThemeReceived
lens.mojom.LensPage_ThemeReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ThemeReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShouldShowContextualSearchBox
lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ShouldShowContextualSearchBox_Params',
      packedSize: 16,
      fields: [
        { name: 'should_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PageContentTypeChanged
lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.PageContentTypeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_page_content_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPostRegionSelection
lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.SetPostRegionSelection_Params',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTextSelection
lens.mojom.LensPage_SetTextSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.SetTextSelection_Params',
      packedSize: 24,
      fields: [
        { name: 'selection_start_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selection_end_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTranslateMode
lens.mojom.LensPage_SetTranslateMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.SetTranslateMode_Params',
      packedSize: 24,
      fields: [
        { name: 'source_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearRegionSelection
lens.mojom.LensPage_ClearRegionSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ClearRegionSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearTextSelection
lens.mojom.LensPage_ClearTextSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ClearTextSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearAllSelections
lens.mojom.LensPage_ClearAllSelections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.ClearAllSelections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnCopyCommand
lens.mojom.LensPage_OnCopyCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.OnCopyCommand_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SuppressGhostLoader
lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.SuppressGhostLoader_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnOverlayReshown
lens.mojom.LensPage_OnOverlayReshown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensPage.OnOverlayReshown_Params',
      packedSize: 16,
      fields: [
        { name: 'screenshot_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
lens.mojom.LensPagePtr = lens.mojom.LensPageRemote;
lens.mojom.LensPageRequest = lens.mojom.LensPagePendingReceiver;

