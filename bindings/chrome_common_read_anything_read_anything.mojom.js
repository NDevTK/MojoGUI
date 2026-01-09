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
  kInactive: 1,
  kInSidePanel: 2,
  kInImmersiveOverlay: 3,
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
  kOff: 0,
};

// Enum: LineFocus
read_anything.mojom.LineFocus = {
  kWindow1: 0,
  kWindow3: 1,
  kWindow5: 2,
  kLineStatic: 3,
  kLineCursor: 4,
};

// Enum: DistillationStatus
read_anything.mojom.DistillationStatus = {
  kFailure: 0,
  kSuccess: 1,
  kStillRunning: 2,
  kRestarted: 3,
};

// Struct: VoicePackInfo
read_anything.mojom.VoicePackInfoSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.VoicePackInfo',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: UntrustedPageHandlerFactory
read_anything.mojom.UntrustedPageHandlerFactory = {};

read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

read_anything.mojom.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new read_anything.mojom.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

read_anything.mojom.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUntrustedPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

  shouldShowUI() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec,
      null,
      []);
  }

};

read_anything.mojom.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new read_anything.mojom.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateUntrustedPageHandler
read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandlerFactory.CreateUntrustedPageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldShowUI
read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandlerFactory.ShouldShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
read_anything.mojom.UntrustedPageHandlerFactoryPtr = read_anything.mojom.UntrustedPageHandlerFactoryRemote;
read_anything.mojom.UntrustedPageHandlerFactoryRequest = read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
read_anything.mojom.UntrustedPageHandler = {};

read_anything.mojom.UntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

read_anything.mojom.UntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      read_anything.mojom.UntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new read_anything.mojom.UntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

read_anything.mojom.UntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDependencyParserModel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec,
      read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec,
      []);
  }

  getPresentationState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec,
      null,
      []);
  }

  getVoicePackInfo(language) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec,
      null,
      [language]);
  }

  installVoicePack(language) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec,
      null,
      [language]);
  }

  uninstallVoice(language) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec,
      null,
      [language]);
  }

  onCopy() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec,
      null,
      []);
  }

  onLineSpaceChange(line_spacing) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec,
      null,
      [line_spacing]);
  }

  onLetterSpaceChange(letter_spacing) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec,
      null,
      [letter_spacing]);
  }

  onFontChange(font) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec,
      null,
      [font]);
  }

  onFontSizeChange(font_size) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec,
      null,
      [font_size]);
  }

  onLinksEnabledChanged(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec,
      null,
      [enabled]);
  }

  onImagesEnabledChanged(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec,
      null,
      [enabled]);
  }

  onColorChange(color) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec,
      null,
      [color]);
  }

  onSpeechRateChange(rate) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec,
      null,
      [rate]);
  }

  onVoiceChange(voice, lang) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec,
      null,
      [voice, lang]);
  }

  onLanguagePrefChange(lang, enabled) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec,
      null,
      [lang, enabled]);
  }

  logExtensionState() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec,
      null,
      []);
  }

  onHighlightGranularityChanged(granularity) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec,
      null,
      [granularity]);
  }

  onLineFocusChanged(granularity) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec,
      null,
      [granularity]);
  }

  onReadAloudAudioStateChange(playing) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec,
      null,
      [playing]);
  }

  onLinkClicked(target_tree_id, target_node_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec,
      null,
      [target_tree_id, target_node_id]);
  }

  onImageDataRequested(target_tree_id, target_node_id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec,
      null,
      [target_tree_id, target_node_id]);
  }

  onSelectionChange(target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec,
      null,
      [target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset]);
  }

  onCollapseSelection() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec,
      null,
      []);
  }

  onScreenshotRequested() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec,
      null,
      []);
  }

  onDistillationStatus(status, word_count) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec,
      null,
      [status, word_count]);
  }

  scrollToTargetNode(target_tree_id, target_node_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec,
      null,
      [target_tree_id, target_node_id]);
  }

  closeUI() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      []);
  }

  togglePinState() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec,
      null,
      []);
  }

  sendPinStateRequest() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec,
      null,
      []);
  }

  togglePresentation() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec,
      null,
      []);
  }

  ackReadingModeHidden() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec,
      null,
      []);
  }

};

read_anything.mojom.UntrustedPageHandler.getRemote = function() {
  let remote = new read_anything.mojom.UntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDependencyParserModel
read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.GetDependencyParserModel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.GetDependencyParserModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPresentationState
read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.GetPresentationState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVoicePackInfo
read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.GetVoicePackInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallVoicePack
read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.InstallVoicePack_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UninstallVoice
read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.UninstallVoice_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCopy
read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnCopy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLineSpaceChange
read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLineSpaceChange_Params',
      packedSize: 16,
      fields: [
        { name: 'line_spacing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLetterSpaceChange
read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLetterSpaceChange_Params',
      packedSize: 16,
      fields: [
        { name: 'letter_spacing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFontChange
read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnFontChange_Params',
      packedSize: 16,
      fields: [
        { name: 'font', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFontSizeChange
read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnFontSizeChange_Params',
      packedSize: 16,
      fields: [
        { name: 'font_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLinksEnabledChanged
read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLinksEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImagesEnabledChanged
read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnImagesEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnColorChange
read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnColorChange_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSpeechRateChange
read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnSpeechRateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'rate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVoiceChange
read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnVoiceChange_Params',
      packedSize: 24,
      fields: [
        { name: 'voice', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLanguagePrefChange
read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLanguagePrefChange_Params',
      packedSize: 24,
      fields: [
        { name: 'lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogExtensionState
read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.LogExtensionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHighlightGranularityChanged
read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnHighlightGranularityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'granularity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLineFocusChanged
read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLineFocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'granularity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReadAloudAudioStateChange
read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnReadAloudAudioStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'playing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLinkClicked
read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnLinkClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'target_tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImageDataRequested
read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnImageDataRequested_Params',
      packedSize: 24,
      fields: [
        { name: 'target_tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSelectionChange
read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnSelectionChange_Params',
      packedSize: 48,
      fields: [
        { name: 'target_tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'anchor_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'anchor_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'focus_node_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'focus_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCollapseSelection
read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnCollapseSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScreenshotRequested
read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnScreenshotRequested_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDistillationStatus
read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.OnDistillationStatus_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'word_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScrollToTargetNode
read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.ScrollToTargetNode_Params',
      packedSize: 24,
      fields: [
        { name: 'target_tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseUI
read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.CloseUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TogglePinState
read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.TogglePinState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPinStateRequest
read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.SendPinStateRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TogglePresentation
read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.TogglePresentation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AckReadingModeHidden
read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPageHandler.AckReadingModeHidden_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
read_anything.mojom.UntrustedPageHandlerPtr = read_anything.mojom.UntrustedPageHandlerRemote;
read_anything.mojom.UntrustedPageHandlerRequest = read_anything.mojom.UntrustedPageHandlerPendingReceiver;


// Interface: UntrustedPage
read_anything.mojom.UntrustedPage = {};

read_anything.mojom.UntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

read_anything.mojom.UntrustedPageRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      read_anything.mojom.UntrustedPagePendingReceiver,
      handle);
    this.$ = new read_anything.mojom.UntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

read_anything.mojom.UntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accessibilityEventReceived(tree_id, updates, events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec,
      null,
      [tree_id, updates, events]);
  }

  onGetPresentationState(presentation_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec,
      null,
      [presentation_state]);
  }

  onGetVoicePackInfo(voice_pack_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec,
      null,
      [voice_pack_info]);
  }

  accessibilityLocationChangesReceived(tree_id, details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec,
      null,
      [tree_id, details]);
  }

  onActiveAXTreeIDChanged(tree_id, ukm_source_id, is_pdf) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec,
      null,
      [tree_id, ukm_source_id, is_pdf]);
  }

  onAXTreeDestroyed(tree_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec,
      null,
      [tree_id]);
  }

  setLanguageCode(code) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec,
      null,
      [code]);
  }

  onDeviceLocked() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec,
      null,
      []);
  }

  onTtsEngineInstalled() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec,
      null,
      []);
  }

  setDefaultLanguageCode(code) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec,
      null,
      [code]);
  }

  onSettingsRestoredFromPrefs(line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec,
      null,
      [line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus]);
  }

  screenAIServiceReady() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec,
      null,
      []);
  }

  onReadingModeHidden(tab_active) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec,
      null,
      [tab_active]);
  }

  onTabWillDetach() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec,
      null,
      []);
  }

  onTabMuteStateChange(muted) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec,
      null,
      [muted]);
  }

  onImageDataDownloaded(tree_id, node_id, image) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec,
      null,
      [tree_id, node_id, image]);
  }

  onPinStatusReceived(new_pin_state) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec,
      null,
      [new_pin_state]);
  }

};

read_anything.mojom.UntrustedPage.getRemote = function() {
  let remote = new read_anything.mojom.UntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for AccessibilityEventReceived
read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.AccessibilityEventReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'updates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'events', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnGetPresentationState
read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnGetPresentationState_Params',
      packedSize: 16,
      fields: [
        { name: 'presentation_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnGetVoicePackInfo
read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnGetVoicePackInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'voice_pack_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AccessibilityLocationChangesReceived
read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.AccessibilityLocationChangesReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnActiveAXTreeIDChanged
read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnActiveAXTreeIDChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ukm_source_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'is_pdf', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAXTreeDestroyed
read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnAXTreeDestroyed_Params',
      packedSize: 16,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetLanguageCode
read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.SetLanguageCode_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceLocked
read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnDeviceLocked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTtsEngineInstalled
read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnTtsEngineInstalled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDefaultLanguageCode
read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.SetDefaultLanguageCode_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSettingsRestoredFromPrefs
read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnSettingsRestoredFromPrefs_Params',
      packedSize: 96,
      fields: [
        { name: 'line_spacing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'letter_spacing', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'font', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'font_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'links_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'images_enabled', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'color', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'speech_rate', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'voices', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'languages_enabled_in_pref', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'granularity', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'line_focus', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScreenAIServiceReady
read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.ScreenAIServiceReady_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReadingModeHidden
read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnReadingModeHidden_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTabWillDetach
read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnTabWillDetach_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTabMuteStateChange
read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnTabMuteStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImageDataDownloaded
read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnImageDataDownloaded_Params',
      packedSize: 32,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'image', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPinStatusReceived
read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'read_anything.mojom.UntrustedPage.OnPinStatusReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'new_pin_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
read_anything.mojom.UntrustedPagePtr = read_anything.mojom.UntrustedPageRemote;
read_anything.mojom.UntrustedPageRequest = read_anything.mojom.UntrustedPagePendingReceiver;

