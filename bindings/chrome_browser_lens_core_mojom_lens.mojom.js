// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: UserAction
lens.mojom.UserAction = {
};

// Enum: SemanticEvent
lens.mojom.SemanticEvent = {
};

// Struct: OverlayTheme
lens.mojom.OverlayTheme = class {
  constructor(values = {}) {
    this.selection_element = values.selection_element !== undefined ? values.selection_element : null;
  }
};

// Interface: LensPageHandlerFactory
lens.mojom.LensPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensPageHandlerFactory';
  }

  createPageHandler(handler, page) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler, page)
  }

};

lens.mojom.LensPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LensPageHandler
lens.mojom.LensPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensPageHandler';
  }

  activityRequestedByOverlay(click_modifiers) {
    // Method: ActivityRequestedByOverlay
    // Call: ActivityRequestedByOverlay(click_modifiers)
  }

  closeRequestedByOverlayCloseButton() {
    // Method: CloseRequestedByOverlayCloseButton
    // Call: CloseRequestedByOverlayCloseButton()
  }

  closeRequestedByOverlayBackgroundClick() {
    // Method: CloseRequestedByOverlayBackgroundClick
    // Call: CloseRequestedByOverlayBackgroundClick()
  }

  notifyOverlayInitialized() {
    // Method: NotifyOverlayInitialized
    // Call: NotifyOverlayInitialized()
  }

  addBackgroundBlur() {
    // Method: AddBackgroundBlur
    // Call: AddBackgroundBlur()
  }

  setLiveBlur(enabled) {
    // Method: SetLiveBlur
    // Call: SetLiveBlur(enabled)
  }

  feedbackRequestedByOverlay() {
    // Method: FeedbackRequestedByOverlay
    // Call: FeedbackRequestedByOverlay()
  }

  getOverlayInvocationSource() {
    // Method: GetOverlayInvocationSource
    return new Promise((resolve) => {
      // Call: GetOverlayInvocationSource()
      resolve({});
    });
  }

  infoRequestedByOverlay(click_modifiers) {
    // Method: InfoRequestedByOverlay
    // Call: InfoRequestedByOverlay(click_modifiers)
  }

  issueLensRegionRequest(region, is_click) {
    // Method: IssueLensRegionRequest
    // Call: IssueLensRegionRequest(region, is_click)
  }

  issueLensObjectRequest(region, is_mask_click) {
    // Method: IssueLensObjectRequest
    // Call: IssueLensObjectRequest(region, is_mask_click)
  }

  issueTextSelectionRequest(query, selection_start_index, selection_end_index, is_translate) {
    // Method: IssueTextSelectionRequest
    // Call: IssueTextSelectionRequest(query, selection_start_index, selection_end_index, is_translate)
  }

  issueTranslateSelectionRequest(query, content_language, selection_start_index, selection_end_index) {
    // Method: IssueTranslateSelectionRequest
    // Call: IssueTranslateSelectionRequest(query, content_language, selection_start_index, selection_end_index)
  }

  issueMathSelectionRequest(query, formula, selection_start_index, selection_end_index) {
    // Method: IssueMathSelectionRequest
    // Call: IssueMathSelectionRequest(query, formula, selection_start_index, selection_end_index)
  }

  issueTranslateFullPageRequest(source_language, target_language) {
    // Method: IssueTranslateFullPageRequest
    // Call: IssueTranslateFullPageRequest(source_language, target_language)
  }

  issueEndTranslateModeRequest() {
    // Method: IssueEndTranslateModeRequest
    // Call: IssueEndTranslateModeRequest()
  }

  copyText(text) {
    // Method: CopyText
    // Call: CopyText(text)
  }

  copyImage(region) {
    // Method: CopyImage
    // Call: CopyImage(region)
  }

  saveAsImage(region) {
    // Method: SaveAsImage
    // Call: SaveAsImage(region)
  }

  closePreselectionBubble() {
    // Method: ClosePreselectionBubble
    // Call: ClosePreselectionBubble()
  }

  recordUkmAndTaskCompletionForLensOverlayInteraction(user_action) {
    // Method: RecordUkmAndTaskCompletionForLensOverlayInteraction
    // Call: RecordUkmAndTaskCompletionForLensOverlayInteraction(user_action)
  }

  recordLensOverlaySemanticEvent(event) {
    // Method: RecordLensOverlaySemanticEvent
    // Call: RecordLensOverlaySemanticEvent(event)
  }

  maybeShowTranslateFeaturePromo() {
    // Method: MaybeShowTranslateFeaturePromo
    // Call: MaybeShowTranslateFeaturePromo()
  }

  maybeCloseTranslateFeaturePromo(feature_engaged) {
    // Method: MaybeCloseTranslateFeaturePromo
    // Call: MaybeCloseTranslateFeaturePromo(feature_engaged)
  }

  fetchSupportedLanguages() {
    // Method: FetchSupportedLanguages
    return new Promise((resolve) => {
      // Call: FetchSupportedLanguages()
      resolve({});
    });
  }

  finishReshowOverlay() {
    // Method: FinishReshowOverlay
    // Call: FinishReshowOverlay()
  }

  acceptPrivacyNotice() {
    // Method: AcceptPrivacyNotice
    // Call: AcceptPrivacyNotice()
  }

  dismissPrivacyNotice() {
    // Method: DismissPrivacyNotice
    // Call: DismissPrivacyNotice()
  }

};

lens.mojom.LensPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LensPage
lens.mojom.LensPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensPage';
  }

  screenshotDataReceived(screenshot_data, is_side_panel_open) {
    // Method: ScreenshotDataReceived
    // Call: ScreenshotDataReceived(screenshot_data, is_side_panel_open)
  }

  notifyHandshakeComplete() {
    // Method: NotifyHandshakeComplete
    // Call: NotifyHandshakeComplete()
  }

  notifyResultsPanelOpened() {
    // Method: NotifyResultsPanelOpened
    // Call: NotifyResultsPanelOpened()
  }

  notifyOverlayClosing() {
    // Method: NotifyOverlayClosing
    // Call: NotifyOverlayClosing()
  }

  objectsReceived(objects) {
    // Method: ObjectsReceived
    // Call: ObjectsReceived(objects)
  }

  textReceived(text) {
    // Method: TextReceived
    // Call: TextReceived(text)
  }

  regionTextReceived(text, is_injected_image) {
    // Method: RegionTextReceived
    // Call: RegionTextReceived(text, is_injected_image)
  }

  themeReceived(theme) {
    // Method: ThemeReceived
    // Call: ThemeReceived(theme)
  }

  shouldShowContextualSearchBox(should_show) {
    // Method: ShouldShowContextualSearchBox
    // Call: ShouldShowContextualSearchBox(should_show)
  }

  pageContentTypeChanged(new_page_content_type) {
    // Method: PageContentTypeChanged
    // Call: PageContentTypeChanged(new_page_content_type)
  }

  setPostRegionSelection(region) {
    // Method: SetPostRegionSelection
    // Call: SetPostRegionSelection(region)
  }

  setTextSelection(selection_start_index, selection_end_index) {
    // Method: SetTextSelection
    // Call: SetTextSelection(selection_start_index, selection_end_index)
  }

  setTranslateMode(source_language, target_language) {
    // Method: SetTranslateMode
    // Call: SetTranslateMode(source_language, target_language)
  }

  clearRegionSelection() {
    // Method: ClearRegionSelection
    // Call: ClearRegionSelection()
  }

  clearTextSelection() {
    // Method: ClearTextSelection
    // Call: ClearTextSelection()
  }

  clearAllSelections() {
    // Method: ClearAllSelections
    // Call: ClearAllSelections()
  }

  onCopyCommand() {
    // Method: OnCopyCommand
    // Call: OnCopyCommand()
  }

  suppressGhostLoader() {
    // Method: SuppressGhostLoader
    // Call: SuppressGhostLoader()
  }

  onOverlayReshown(screenshot_data) {
    // Method: OnOverlayReshown
    // Call: OnOverlayReshown(screenshot_data)
  }

};

lens.mojom.LensPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
