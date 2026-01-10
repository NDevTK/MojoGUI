// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/read_anything/read_anything.mojom
// Module: read_anything.mojom

'use strict';

// Module namespace
var read_anything = read_anything || {};
read_anything.mojom = read_anything.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var ax = ax || {};

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
        'type': read_anything.mojom.InstallationStateSpec.$,
        'nullable': false,
      },
      'error_code': {
        'ordinal': 1,
        'type': read_anything.mojom.ErrorCodeSpec.$,
        'nullable': false,
      },
    });

// Struct: VoicePackInfo
mojo.internal.Struct(
    read_anything.mojom.VoicePackInfoSpec, 'read_anything.mojom.VoicePackInfo', [
      mojo.internal.StructField('pack_state', 0, 0, read_anything.mojom.VoicePackInstallationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(read_anything.mojom.UntrustedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(read_anything.mojom.UntrustedPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_Params', [
    ],
    [[0, 8]]);

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
      [page, handler],
      false);
  }

  shouldShowUI() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec,
      null,
      [],
      false);
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

read_anything.mojom.UntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createUntrustedPageHandler(params.page, params.handler);
          break;
        }
        case 1: {
          const params = read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldShowUI();
          break;
        }
      }
    });
  }
};

read_anything.mojom.UntrustedPageHandlerFactoryReceiver = read_anything.mojom.UntrustedPageHandlerFactoryReceiver;

read_anything.mojom.UntrustedPageHandlerFactoryPtr = read_anything.mojom.UntrustedPageHandlerFactoryRemote;
read_anything.mojom.UntrustedPageHandlerFactoryRequest = read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParams', [
      mojo.internal.StructField('model_file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetPresentationState_Params', [
    ],
    [[0, 8]]);

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
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_Params', [
      mojo.internal.StructField('line_spacing', 0, 0, read_anything.mojom.LineSpacingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_Params', [
      mojo.internal.StructField('letter_spacing', 0, 0, read_anything.mojom.LetterSpacingSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('color', 0, 0, read_anything.mojom.ColorsSpec.$, null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_Params', [
      mojo.internal.StructField('granularity', 0, 0, read_anything.mojom.HighlightGranularitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_Params', [
      mojo.internal.StructField('granularity', 0, 0, read_anything.mojom.LineFocusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_Params', [
      mojo.internal.StructField('playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLinkClicked_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnSelectionChange_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('anchor_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('focus_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_Params', [
      mojo.internal.StructField('status', 0, 0, read_anything.mojom.DistillationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('word_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_Params', [
      mojo.internal.StructField('target_tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePinState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePresentation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  getPresentationState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec,
      null,
      [],
      false);
  }

  getVoicePackInfo(language) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec,
      null,
      [language],
      false);
  }

  installVoicePack(language) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec,
      null,
      [language],
      false);
  }

  uninstallVoice(language) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec,
      null,
      [language],
      false);
  }

  onCopy() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec,
      null,
      [],
      false);
  }

  onLineSpaceChange(line_spacing) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec,
      null,
      [line_spacing],
      false);
  }

  onLetterSpaceChange(letter_spacing) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec,
      null,
      [letter_spacing],
      false);
  }

  onFontChange(font) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec,
      null,
      [font],
      false);
  }

  onFontSizeChange(font_size) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec,
      null,
      [font_size],
      false);
  }

  onLinksEnabledChanged(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  onImagesEnabledChanged(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  onColorChange(color) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec,
      null,
      [color],
      false);
  }

  onSpeechRateChange(rate) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec,
      null,
      [rate],
      false);
  }

  onVoiceChange(voice, lang) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec,
      null,
      [voice, lang],
      false);
  }

  onLanguagePrefChange(lang, enabled) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec,
      null,
      [lang, enabled],
      false);
  }

  logExtensionState() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec,
      null,
      [],
      false);
  }

  onHighlightGranularityChanged(granularity) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec,
      null,
      [granularity],
      false);
  }

  onLineFocusChanged(granularity) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec,
      null,
      [granularity],
      false);
  }

  onReadAloudAudioStateChange(playing) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec,
      null,
      [playing],
      false);
  }

  onLinkClicked(target_tree_id, target_node_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec,
      null,
      [target_tree_id, target_node_id],
      false);
  }

  onImageDataRequested(target_tree_id, target_node_id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec,
      null,
      [target_tree_id, target_node_id],
      false);
  }

  onSelectionChange(target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec,
      null,
      [target_tree_id, anchor_node_id, anchor_offset, focus_node_id, focus_offset],
      false);
  }

  onCollapseSelection() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec,
      null,
      [],
      false);
  }

  onScreenshotRequested() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec,
      null,
      [],
      false);
  }

  onDistillationStatus(status, word_count) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec,
      null,
      [status, word_count],
      false);
  }

  scrollToTargetNode(target_tree_id, target_node_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec,
      null,
      [target_tree_id, target_node_id],
      false);
  }

  closeUI() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  togglePinState() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec,
      null,
      [],
      false);
  }

  sendPinStateRequest() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec,
      null,
      [],
      false);
  }

  togglePresentation() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec,
      null,
      [],
      false);
  }

  ackReadingModeHidden() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec,
      null,
      [],
      false);
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

read_anything.mojom.UntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDependencyParserModel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPresentationState();
          break;
        }
        case 2: {
          const params = read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVoicePackInfo(params.language);
          break;
        }
        case 3: {
          const params = read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.installVoicePack(params.language);
          break;
        }
        case 4: {
          const params = read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.uninstallVoice(params.language);
          break;
        }
        case 5: {
          const params = read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCopy();
          break;
        }
        case 6: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLineSpaceChange(params.line_spacing);
          break;
        }
        case 7: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLetterSpaceChange(params.letter_spacing);
          break;
        }
        case 8: {
          const params = read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFontChange(params.font);
          break;
        }
        case 9: {
          const params = read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFontSizeChange(params.font_size);
          break;
        }
        case 10: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLinksEnabledChanged(params.enabled);
          break;
        }
        case 11: {
          const params = read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImagesEnabledChanged(params.enabled);
          break;
        }
        case 12: {
          const params = read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onColorChange(params.color);
          break;
        }
        case 13: {
          const params = read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSpeechRateChange(params.rate);
          break;
        }
        case 14: {
          const params = read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVoiceChange(params.voice, params.lang);
          break;
        }
        case 15: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLanguagePrefChange(params.lang, params.enabled);
          break;
        }
        case 16: {
          const params = read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logExtensionState();
          break;
        }
        case 17: {
          const params = read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHighlightGranularityChanged(params.granularity);
          break;
        }
        case 18: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLineFocusChanged(params.granularity);
          break;
        }
        case 19: {
          const params = read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReadAloudAudioStateChange(params.playing);
          break;
        }
        case 20: {
          const params = read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLinkClicked(params.target_tree_id, params.target_node_id);
          break;
        }
        case 21: {
          const params = read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImageDataRequested(params.target_tree_id, params.target_node_id);
          break;
        }
        case 22: {
          const params = read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSelectionChange(params.target_tree_id, params.anchor_node_id, params.anchor_offset, params.focus_node_id, params.focus_offset);
          break;
        }
        case 23: {
          const params = read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCollapseSelection();
          break;
        }
        case 24: {
          const params = read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenshotRequested();
          break;
        }
        case 25: {
          const params = read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDistillationStatus(params.status, params.word_count);
          break;
        }
        case 26: {
          const params = read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.scrollToTargetNode(params.target_tree_id, params.target_node_id);
          break;
        }
        case 27: {
          const params = read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeUI();
          break;
        }
        case 28: {
          const params = read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.togglePinState();
          break;
        }
        case 29: {
          const params = read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendPinStateRequest();
          break;
        }
        case 30: {
          const params = read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.togglePresentation();
          break;
        }
        case 31: {
          const params = read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec.$.decode(message.payload);
          const result = this.impl.ackReadingModeHidden();
          break;
        }
      }
    });
  }
};

read_anything.mojom.UntrustedPageHandlerReceiver = read_anything.mojom.UntrustedPageHandlerReceiver;

read_anything.mojom.UntrustedPageHandlerPtr = read_anything.mojom.UntrustedPageHandlerRemote;
read_anything.mojom.UntrustedPageHandlerRequest = read_anything.mojom.UntrustedPageHandlerPendingReceiver;


// Interface: UntrustedPage
mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityEventReceived_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('events', 16, 0, mojo.internal.Array(ax.mojom.AXEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetPresentationState_Params', [
      mojo.internal.StructField('presentation_state', 0, 0, read_anything.mojom.ReadAnythingPresentationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_Params', [
      mojo.internal.StructField('voice_pack_info', 0, 0, read_anything.mojom.VoicePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, ax.mojom.AXLocationAndScrollUpdatesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ukm_source_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_pdf', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetLanguageCode_Params', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnDeviceLocked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_Params', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_Params', [
      mojo.internal.StructField('line_spacing', 0, 0, read_anything.mojom.LineSpacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('letter_spacing', 8, 0, read_anything.mojom.LetterSpacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('font', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('color', 32, 0, read_anything.mojom.ColorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('speech_rate', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('voices', 48, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('languages_enabled_in_pref', 56, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 64, 0, read_anything.mojom.HighlightGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('line_focus', 72, 0, read_anything.mojom.LineFocusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('links_enabled', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('images_enabled', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec, 'read_anything.mojom.UntrustedPage_ScreenAIServiceReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnReadingModeHidden_Params', [
      mojo.internal.StructField('tab_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabWillDetach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabMuteStateChange_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnImageDataDownloaded_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 8, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [tree_id, updates, events],
      false);
  }

  onGetPresentationState(presentation_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec,
      null,
      [presentation_state],
      false);
  }

  onGetVoicePackInfo(voice_pack_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec,
      null,
      [voice_pack_info],
      false);
  }

  accessibilityLocationChangesReceived(tree_id, details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec,
      null,
      [tree_id, details],
      false);
  }

  onActiveAXTreeIDChanged(tree_id, ukm_source_id, is_pdf) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec,
      null,
      [tree_id, ukm_source_id, is_pdf],
      false);
  }

  onAXTreeDestroyed(tree_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec,
      null,
      [tree_id],
      false);
  }

  setLanguageCode(code) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec,
      null,
      [code],
      false);
  }

  onDeviceLocked() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec,
      null,
      [],
      false);
  }

  onTtsEngineInstalled() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  setDefaultLanguageCode(code) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec,
      null,
      [code],
      false);
  }

  onSettingsRestoredFromPrefs(line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec,
      null,
      [line_spacing, letter_spacing, font, font_size, links_enabled, images_enabled, color, speech_rate, voices, languages_enabled_in_pref, granularity, line_focus],
      false);
  }

  screenAIServiceReady() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec,
      null,
      [],
      false);
  }

  onReadingModeHidden(tab_active) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec,
      null,
      [tab_active],
      false);
  }

  onTabWillDetach() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec,
      null,
      [],
      false);
  }

  onTabMuteStateChange(muted) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec,
      null,
      [muted],
      false);
  }

  onImageDataDownloaded(tree_id, node_id, image) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec,
      null,
      [tree_id, node_id, image],
      false);
  }

  onPinStatusReceived(new_pin_state) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec,
      null,
      [new_pin_state],
      false);
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

read_anything.mojom.UntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.accessibilityEventReceived(params.tree_id, params.updates, params.events);
          break;
        }
        case 1: {
          const params = read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGetPresentationState(params.presentation_state);
          break;
        }
        case 2: {
          const params = read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGetVoicePackInfo(params.voice_pack_info);
          break;
        }
        case 3: {
          const params = read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.accessibilityLocationChangesReceived(params.tree_id, params.details);
          break;
        }
        case 4: {
          const params = read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onActiveAXTreeIDChanged(params.tree_id, params.ukm_source_id, params.is_pdf);
          break;
        }
        case 5: {
          const params = read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAXTreeDestroyed(params.tree_id);
          break;
        }
        case 6: {
          const params = read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setLanguageCode(params.code);
          break;
        }
        case 7: {
          const params = read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceLocked();
          break;
        }
        case 8: {
          const params = read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTtsEngineInstalled();
          break;
        }
        case 9: {
          const params = read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDefaultLanguageCode(params.code);
          break;
        }
        case 10: {
          const params = read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSettingsRestoredFromPrefs(params.line_spacing, params.letter_spacing, params.font, params.font_size, params.links_enabled, params.images_enabled, params.color, params.speech_rate, params.voices, params.languages_enabled_in_pref, params.granularity, params.line_focus);
          break;
        }
        case 11: {
          const params = read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.screenAIServiceReady();
          break;
        }
        case 12: {
          const params = read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReadingModeHidden(params.tab_active);
          break;
        }
        case 13: {
          const params = read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabWillDetach();
          break;
        }
        case 14: {
          const params = read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabMuteStateChange(params.muted);
          break;
        }
        case 15: {
          const params = read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImageDataDownloaded(params.tree_id, params.node_id, params.image);
          break;
        }
        case 16: {
          const params = read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPinStatusReceived(params.new_pin_state);
          break;
        }
      }
    });
  }
};

read_anything.mojom.UntrustedPageReceiver = read_anything.mojom.UntrustedPageReceiver;

read_anything.mojom.UntrustedPagePtr = read_anything.mojom.UntrustedPageRemote;
read_anything.mojom.UntrustedPageRequest = read_anything.mojom.UntrustedPagePendingReceiver;

