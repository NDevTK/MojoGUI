// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/read_anything/read_anything.mojom
// Module: read_anything.mojom

'use strict';

// Module namespace
var read_anything = read_anything || {};
read_anything.mojom = read_anything.mojom || {};


// Enum: InstallationState
read_anything.mojom.InstallationState = {
  kNotInstalled: 0,
  kInstalling: 1,
  kInstalled: 2,
};

// Enum: ErrorCode
read_anything.mojom.ErrorCode = {
  kOther: 0,
  kWrongId: 1,
  kNeedReboot: 2,
  kAllocation: 3,
  kUnsupportedPlatform: 4,
};

// Enum: ReadAnythingPresentationState
read_anything.mojom.ReadAnythingPresentationState = {
  kUndefined: 0,
  not: 1,
};

// Enum: Colors
read_anything.mojom.Colors = {
  kLight: 0,
  kDark: 1,
  kYellow: 2,
};

// Enum: LetterSpacing
read_anything.mojom.LetterSpacing = {
  kTightDeprecated: 0,
  kWide: 1,
  kVeryWide: 2,
};

// Enum: LineSpacing
read_anything.mojom.LineSpacing = {
  kTightDeprecated: 0,
  kStandard: 1,
  kVeryLoose: 2,
};

// Enum: HighlightGranularity
read_anything.mojom.HighlightGranularity = {
  regardless: 0,
  we: 1,
  and: 2,
  we: 3,
};

// Enum: LineFocus
read_anything.mojom.LineFocus = {
  three: 0,
  or: 1,
  kWindow3: 2,
  kWindow5: 3,
  kLineStatic: 4,
  kLineCursor: 5,
};

// Enum: DistillationStatus
read_anything.mojom.DistillationStatus = {
  kFailure: 0,
  kSuccess: 1,
  kStillRunning: 2,
  kRestarted: 3,
};

// Struct: VoicePackInfo
read_anything.mojom.VoicePackInfo = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : "";
  }
};

// Interface: UntrustedPageHandlerFactory
read_anything.mojom.UntrustedPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'read_anything.mojom.UntrustedPageHandlerFactory';
  }

  createUntrustedPageHandler(page, handler) {
    // Method: CreateUntrustedPageHandler
    // Call: CreateUntrustedPageHandler(page, handler)
  }

  shouldShowUI() {
    // Method: ShouldShowUI
    // Call: ShouldShowUI()
  }

};

read_anything.mojom.UntrustedPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedPageHandler
read_anything.mojom.UntrustedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'read_anything.mojom.UntrustedPageHandler';
  }

  getDependencyParserModel() {
    // Method: GetDependencyParserModel
    return new Promise((resolve) => {
      // Call: GetDependencyParserModel()
      resolve({});
    });
  }

  getPresentationState() {
    // Method: GetPresentationState
    // Call: GetPresentationState()
  }

  getVoicePackInfo(language) {
    // Method: GetVoicePackInfo
    // Call: GetVoicePackInfo(language)
  }

  installVoicePack(language) {
    // Method: InstallVoicePack
    // Call: InstallVoicePack(language)
  }

  uninstallVoice(language) {
    // Method: UninstallVoice
    // Call: UninstallVoice(language)
  }

  onCopy() {
    // Method: OnCopy
    // Call: OnCopy()
  }

  onLineSpaceChange(line_spacing) {
    // Method: OnLineSpaceChange
    // Call: OnLineSpaceChange(line_spacing)
  }

  onLetterSpaceChange(letter_spacing) {
    // Method: OnLetterSpaceChange
    // Call: OnLetterSpaceChange(letter_spacing)
  }

  onFontChange(font) {
    // Method: OnFontChange
    // Call: OnFontChange(font)
  }

  onFontSizeChange(font_size) {
    // Method: OnFontSizeChange
    // Call: OnFontSizeChange(font_size)
  }

  onLinksEnabledChanged(enabled) {
    // Method: OnLinksEnabledChanged
    // Call: OnLinksEnabledChanged(enabled)
  }

  onImagesEnabledChanged(enabled) {
    // Method: OnImagesEnabledChanged
    // Call: OnImagesEnabledChanged(enabled)
  }

  onColorChange(color) {
    // Method: OnColorChange
    // Call: OnColorChange(color)
  }

  onSpeechRateChange(rate) {
    // Method: OnSpeechRateChange
    // Call: OnSpeechRateChange(rate)
  }

  onVoiceChange(voice, lang) {
    // Method: OnVoiceChange
    // Call: OnVoiceChange(voice, lang)
  }

  onLanguagePrefChange(lang, enabled) {
    // Method: OnLanguagePrefChange
    // Call: OnLanguagePrefChange(lang, enabled)
  }

  logExtensionState() {
    // Method: LogExtensionState
    // Call: LogExtensionState()
  }

  onHighlightGranularityChanged(granularity) {
    // Method: OnHighlightGranularityChanged
    // Call: OnHighlightGranularityChanged(granularity)
  }

  onLineFocusChanged(granularity) {
    // Method: OnLineFocusChanged
    // Call: OnLineFocusChanged(granularity)
  }

  onReadAloudAudioStateChange(playing) {
    // Method: OnReadAloudAudioStateChange
    // Call: OnReadAloudAudioStateChange(playing)
  }

  onLinkClicked(target_tree_id, target_node_id) {
    // Method: OnLinkClicked
    // Call: OnLinkClicked(target_tree_id, target_node_id)
  }

  onImageDataRequested(target_tree_id, target_node_id) {
    // Method: OnImageDataRequested
    // Call: OnImageDataRequested(target_tree_id, target_node_id)
  }

  onSelectionChange(target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset) {
    // Method: OnSelectionChange
    // Call: OnSelectionChange(target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset)
  }

  onCollapseSelection() {
    // Method: OnCollapseSelection
    // Call: OnCollapseSelection()
  }

  onScreenshotRequested() {
    // Method: OnScreenshotRequested
    // Call: OnScreenshotRequested()
  }

  onDistillationStatus(status, word_count) {
    // Method: OnDistillationStatus
    // Call: OnDistillationStatus(status, word_count)
  }

  scrollToTargetNode(target_tree_id, target_node_id) {
    // Method: ScrollToTargetNode
    // Call: ScrollToTargetNode(target_tree_id, target_node_id)
  }

  closeUI() {
    // Method: CloseUI
    // Call: CloseUI()
  }

  togglePinState() {
    // Method: TogglePinState
    // Call: TogglePinState()
  }

  sendPinStateRequest() {
    // Method: SendPinStateRequest
    // Call: SendPinStateRequest()
  }

  togglePresentation() {
    // Method: TogglePresentation
    // Call: TogglePresentation()
  }

};

read_anything.mojom.UntrustedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedPage
read_anything.mojom.UntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'read_anything.mojom.UntrustedPage';
  }

  accessibilityEventReceived(tree_id, updates, events) {
    // Method: AccessibilityEventReceived
    // Call: AccessibilityEventReceived(tree_id, updates, events)
  }

  onGetPresentationState(presentation_state) {
    // Method: OnGetPresentationState
    // Call: OnGetPresentationState(presentation_state)
  }

  onGetVoicePackInfo(voice_pack_info) {
    // Method: OnGetVoicePackInfo
    // Call: OnGetVoicePackInfo(voice_pack_info)
  }

  accessibilityLocationChangesReceived(tree_id, details) {
    // Method: AccessibilityLocationChangesReceived
    // Call: AccessibilityLocationChangesReceived(tree_id, details)
  }

  onActiveAXTreeIDChanged(tree_id, ukm_source_id, is_pdf) {
    // Method: OnActiveAXTreeIDChanged
    // Call: OnActiveAXTreeIDChanged(tree_id, ukm_source_id, is_pdf)
  }

  onAXTreeDestroyed(tree_id) {
    // Method: OnAXTreeDestroyed
    // Call: OnAXTreeDestroyed(tree_id)
  }

  setLanguageCode(code) {
    // Method: SetLanguageCode
    // Call: SetLanguageCode(code)
  }

  onDeviceLocked() {
    // Method: OnDeviceLocked
    // Call: OnDeviceLocked()
  }

  onTtsEngineInstalled() {
    // Method: OnTtsEngineInstalled
    // Call: OnTtsEngineInstalled()
  }

  setDefaultLanguageCode(code) {
    // Method: SetDefaultLanguageCode
    // Call: SetDefaultLanguageCode(code)
  }

  onSettingsRestoredFromPrefs(line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus) {
    // Method: OnSettingsRestoredFromPrefs
    // Call: OnSettingsRestoredFromPrefs(line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus)
  }

  screenAIServiceReady() {
    // Method: ScreenAIServiceReady
    // Call: ScreenAIServiceReady()
  }

  onReadingModeHidden(tab_active) {
    // Method: OnReadingModeHidden
    // Call: OnReadingModeHidden(tab_active)
  }

  onTabWillDetach() {
    // Method: OnTabWillDetach
    // Call: OnTabWillDetach()
  }

  onTabMuteStateChange(muted) {
    // Method: OnTabMuteStateChange
    // Call: OnTabMuteStateChange(muted)
  }

  onImageDataDownloaded(tree_id, node_id, image) {
    // Method: OnImageDataDownloaded
    // Call: OnImageDataDownloaded(tree_id, node_id, image)
  }

  onPinStatusReceived(new_pin_state) {
    // Method: OnPinStatusReceived
    // Call: OnPinStatusReceived(new_pin_state)
  }

};

read_anything.mojom.UntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
