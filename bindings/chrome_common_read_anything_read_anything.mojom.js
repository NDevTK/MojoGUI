// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/read_anything/read_anything.mojom
// Module: read_anything.mojom

'use strict';

// Module namespace
var read_anything = read_anything || {};
read_anything.mojom = read_anything.mojom || {};
var skia = skia || {};
var skia = skia || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};

read_anything.mojom.InstallationStateSpec = { $: mojo.internal.Enum() };
read_anything.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
read_anything.mojom.ReadAnythingPresentationStateSpec = { $: mojo.internal.Enum() };
read_anything.mojom.ColorsSpec = { $: mojo.internal.Enum() };
read_anything.mojom.LetterSpacingSpec = { $: mojo.internal.Enum() };
read_anything.mojom.LineSpacingSpec = { $: mojo.internal.Enum() };
read_anything.mojom.HighlightGranularitySpec = { $: mojo.internal.Enum() };
read_anything.mojom.LineFocusSpec = { $: mojo.internal.Enum() };
read_anything.mojom.DistillationStatusSpec = { $: mojo.internal.Enum() };
read_anything.mojom.VoicePackInstallationStateSpec = { $: {} };
read_anything.mojom.VoicePackInfoSpec = { $: {} };
read_anything.mojom.UntrustedPageHandlerFactory = {};
read_anything.mojom.UntrustedPageHandlerFactory.$interfaceName = 'read_anything.mojom.UntrustedPageHandlerFactory';
read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler = {};
read_anything.mojom.UntrustedPageHandler.$interfaceName = 'read_anything.mojom.UntrustedPageHandler';
read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage = {};
read_anything.mojom.UntrustedPage.$interfaceName = 'read_anything.mojom.UntrustedPage';
read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec = { $: {} };
read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec = { $: {} };

// Enum: InstallationState
read_anything.mojom.InstallationState = {
  kUnknown: 0,
  kNotInstalled: 1,
  kInstalling: 2,
  kInstalled: 3,
};

// Enum: ErrorCode
read_anything.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
  kUnsupportedPlatform: 5,
  MinVersion: 5,
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
  kDefault: 0,
  kLight: 1,
  kDark: 2,
  kYellow: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: LetterSpacing
read_anything.mojom.LetterSpacing = {
  kTightDeprecated: 0,
  kStandard: 1,
  kWide: 2,
  kVeryWide: 3,
};

// Enum: LineSpacing
read_anything.mojom.LineSpacing = {
  kTightDeprecated: 0,
  kStandard: 1,
  kLoose: 2,
  kVeryLoose: 3,
};

// Enum: HighlightGranularity
read_anything.mojom.HighlightGranularity = {
  kOn: 0,
  kOff: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: LineFocus
read_anything.mojom.LineFocus = {
  kOff: 0,
  kWindow1: 1,
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

// Union: VoicePackInstallationState
mojo.internal.Union(
    read_anything.mojom.VoicePackInstallationStateSpec, 'read_anything.mojom.VoicePackInstallationState', {
      'installation_state': {
        'ordinal': 0,
        'type': read_anything.mojom.InstallationStateSpec,
        'nullable': false,
      },
      'error_code': {
        'ordinal': 1,
        'type': read_anything.mojom.ErrorCodeSpec,
        'nullable': false,
      },
    });

// Struct: VoicePackInfo
mojo.internal.Struct(
    read_anything.mojom.VoicePackInfoSpec, 'read_anything.mojom.VoicePackInfo', [
      mojo.internal.StructField('pack_state', 0, 0, read_anything.mojom.VoicePackInstallationStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(read_anything.mojom.UntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(read_anything.mojom.UntrustedPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

read_anything.mojom.UntrustedPageHandlerFactoryPtr = read_anything.mojom.UntrustedPageHandlerFactoryRemote;
read_anything.mojom.UntrustedPageHandlerFactoryRequest = read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParams', [
      mojo.internal.StructField('model_file', 0, 0, mojo_base.mojom.FileSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetPresentationState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_InstallVoicePack_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_UninstallVoice_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnCopy_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_Params', [
      mojo.internal.StructField('line_spacing', 0, 0, read_anything.mojom.LineSpacingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_Params', [
      mojo.internal.StructField('letter_spacing', 0, 0, read_anything.mojom.LetterSpacingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnFontChange_Params', [
      mojo.internal.StructField('font', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_Params', [
      mojo.internal.StructField('font_size', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnColorChange_Params', [
      mojo.internal.StructField('color', 0, 0, read_anything.mojom.ColorsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_Params', [
      mojo.internal.StructField('rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnVoiceChange_Params', [
      mojo.internal.StructField('voice', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_Params', [
      mojo.internal.StructField('lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_LogExtensionState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_Params', [
      mojo.internal.StructField('granularity', 0, 0, read_anything.mojom.HighlightGranularitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_Params', [
      mojo.internal.StructField('granularity', 0, 0, read_anything.mojom.LineFocusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_Params', [
      mojo.internal.StructField('playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLinkClicked_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnSelectionChange_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('anchor_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_offset', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_Params', [
      mojo.internal.StructField('status', 0, 0, read_anything.mojom.DistillationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('word_count', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_CloseUI_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePinState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePresentation_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

read_anything.mojom.UntrustedPageHandlerPtr = read_anything.mojom.UntrustedPageHandlerRemote;
read_anything.mojom.UntrustedPageHandlerRequest = read_anything.mojom.UntrustedPageHandlerPendingReceiver;


// Interface: UntrustedPage
mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityEventReceived_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('updates', 16, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('events', 24, 0, mojo.internal.Array(ax.mojom.AXEventSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetPresentationState_Params', [
      mojo.internal.StructField('presentation_state', 0, 0, read_anything.mojom.ReadAnythingPresentationStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_Params', [
      mojo.internal.StructField('voice_pack_info', 0, 0, read_anything.mojom.VoicePackInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, ax.mojom.AXLocationAndScrollUpdatesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('ukm_source_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_pdf', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetLanguageCode_Params', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnDeviceLocked_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_Params', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_Params', [
      mojo.internal.StructField('line_spacing', 40, 0, read_anything.mojom.LineSpacingSpec, null, false, 0, undefined),
      mojo.internal.StructField('letter_spacing', 44, 0, read_anything.mojom.LetterSpacingSpec, null, false, 0, undefined),
      mojo.internal.StructField('font', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('links_enabled', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('images_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color', 48, 0, read_anything.mojom.ColorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('speech_rate', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('voices', 24, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('languages_enabled_in_pref', 32, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 52, 0, read_anything.mojom.HighlightGranularitySpec, null, false, 0, undefined),
      mojo.internal.StructField('line_focus', 56, 0, read_anything.mojom.LineFocusSpec, null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec, 'read_anything.mojom.UntrustedPage_ScreenAIServiceReady_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnReadingModeHidden_Params', [
      mojo.internal.StructField('tab_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabWillDetach_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabMuteStateChange_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnImageDataDownloaded_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('image', 16, 0, skia.mojom.BitmapN32Spec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnPinStatusReceived_Params', [
      mojo.internal.StructField('new_pin_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

read_anything.mojom.UntrustedPagePtr = read_anything.mojom.UntrustedPageRemote;
read_anything.mojom.UntrustedPageRequest = read_anything.mojom.UntrustedPagePendingReceiver;

