// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/host/glic.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};


// Enum: ProfileReadyState
glic.mojom.ProfileReadyState = {
  kUnknownError: 0,
  kSignInRequired: 1,
  kReady: 2,
  kIneligible: 3,
  kDisabledByAdmin: 4,
};

// Enum: WebUiState
glic.mojom.WebUiState = {
  kUninitialized: 0,
  kBeginLoad: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kUnavailable: 7,
  kReady: 8,
  kUnresponsive: 9,
  kSignIn: 10,
  kGuestError: 11,
  kDisabledByAdmin: 12,
};

// Enum: MetricUserInputReactionType
glic.mojom.MetricUserInputReactionType = {
  kCanned: 0,
  kModel: 1,
};

// Enum: PrepareForClientResult
glic.mojom.PrepareForClientResult = {
  kSuccess: 0,
  kErrorResyncingCookies: 1,
  kRequiresSignIn: 2,
};

// Enum: PerformActionsErrorReason
glic.mojom.PerformActionsErrorReason = {
};

// Enum: CreateTaskErrorReason
glic.mojom.CreateTaskErrorReason = {
  kTaskSystemUnavailable: 0,
};

// Enum: ActorTaskState
glic.mojom.ActorTaskState = {
  kIdle: 0,
  kActing: 1,
  kPaused: 2,
  kStopped: 3,
};

// Enum: ActorTaskPauseReason
glic.mojom.ActorTaskPauseReason = {
  kPausedByUser: 0,
};

// Enum: ActorTaskStopReason
glic.mojom.ActorTaskStopReason = {
  kStoppedByUser: 0,
};

// Enum: CaptureScreenshotErrorReason
glic.mojom.CaptureScreenshotErrorReason = {
  kScreenCaptureRequestThrottled: 0,
  kUserCancelledScreenPickerDialog: 1,
};

// Enum: Platform
glic.mojom.Platform = {
  kUnknown: 0,
  kMacOS: 1,
  kWindows: 2,
  kLinux: 3,
  kChromeOS: 4,
};

// Enum: ScrollToErrorReason
glic.mojom.ScrollToErrorReason = {
};

// Enum: SkillSource
glic.mojom.SkillSource = {
  kFirstParty: 0,
  kUserCreated: 1,
};

// Enum: PinTrigger
glic.mojom.PinTrigger = {
  kCandidatesToggle: 0,
  kAtMention: 1,
  kActuation: 2,
};

// Enum: UnpinTrigger
glic.mojom.UnpinTrigger = {
  kCandidatesToggle: 0,
  kChip: 1,
  kActuation: 2,
};

// Enum: SwitchConversationErrorReason
glic.mojom.SwitchConversationErrorReason = {
};

// Enum: RegisterConversationErrorReason
glic.mojom.RegisterConversationErrorReason = {
  kInstanceAlreadyHasConversationId: 0,
};

// Enum: PanelStateKind
glic.mojom.PanelStateKind = {
  kHidden: 0,
  kDetached: 1,
  kAttached: 2,
};

// Enum: InvocationSource
glic.mojom.InvocationSource = {
  kOsButton: 0,
  kOsButtonMenu: 1,
  kOsHotkey: 2,
  kTopChromeButton: 3,
  kFre: 4,
  kProfilePicker: 5,
  kNudge: 6,
  kThreeDotsMenu: 7,
};

// Enum: WebClientMode
glic.mojom.WebClientMode = {
  kText: 0,
  kAudio: 1,
};

// Enum: WebClientModel
glic.mojom.WebClientModel = {
  kActor: 0,
};

// Enum: WebUseCounter
glic.mojom.WebUseCounter = {
  kSubmitPromptWithAutoMode: 0,
  kTaskInterruptedForUserConfirmation: 1,
  kTaskInterruptedForUserClarification: 2,
};

// Enum: ResponseStopCause
glic.mojom.ResponseStopCause = {
  kUser: 0,
  kOther: 1,
};

// Enum: CaptureRegionErrorReason
glic.mojom.CaptureRegionErrorReason = {
  kNoFocusableTab: 0,
};

// Enum: SettingsPageField
glic.mojom.SettingsPageField = {
  kOsHotkey: 0,
  kOsEntrypointToggle: 1,
};

// Enum: HostCapability
glic.mojom.HostCapability = {
  kScrollToPdf: 0,
  kResetSizeAndLocationOnOpen: 1,
  kGetModelQualityClientId: 2,
  kMultiInstance: 3,
  kTrustFirstOnboardingArm1: 4,
  kTrustFirstOnboardingArm2: 5,
  kShareAdditionalImageContext: 6,
};

// Enum: CurrentView
glic.mojom.CurrentView = {
  kConversation: 0,
  kActuation: 1,
};

// Interface: PreloadPage
glic.mojom.PreloadPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PreloadPageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PreloadPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PreloadPagePendingReceiver,
      handle);
    this.$ = new glic.mojom.PreloadPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.PreloadPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProfileReadyState(ready_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$,
      null,
      [ready_state]);
  }

};

glic.mojom.PreloadPage.getRemote = function() {
  let remote = new glic.mojom.PreloadPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PreloadPage',
    'context');
  return remote.$;
}};

// ParamsSpec for SetProfileReadyState
glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PreloadPage.SetProfileReadyState_Params',
      packedSize: 16,
      fields: [
        { name: 'ready_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.PreloadPagePtr = glic.mojom.PreloadPageRemote;
glic.mojom.PreloadPageRequest = glic.mojom.PreloadPagePendingReceiver;


// Interface: Page
glic.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PagePendingReceiver,
      handle);
    this.$ = new glic.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  intentToShow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.Page_IntentToShow_ParamsSpec.$,
      null,
      []);
  }

  setProfileReadyState(ready_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.Page_SetProfileReadyState_ParamsSpec.$,
      null,
      [ready_state]);
  }

  updatePageState(panelStateKind) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.Page_UpdatePageState_ParamsSpec.$,
      null,
      [panelStateKind]);
  }

};

glic.mojom.Page.getRemote = function() {
  let remote = new glic.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.Page',
    'context');
  return remote.$;
}};

// ParamsSpec for IntentToShow
glic.mojom.Page_IntentToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.IntentToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetProfileReadyState
glic.mojom.Page_SetProfileReadyState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.SetProfileReadyState_Params',
      packedSize: 16,
      fields: [
        { name: 'ready_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdatePageState
glic.mojom.Page_UpdatePageState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.Page.UpdatePageState_Params',
      packedSize: 16,
      fields: [
        { name: 'panelStateKind', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.PagePtr = glic.mojom.PageRemote;
glic.mojom.PageRequest = glic.mojom.PagePendingReceiver;


// Interface: GlicPreloadHandler
glic.mojom.GlicPreloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.GlicPreloadHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.GlicPreloadHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.GlicPreloadHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.GlicPreloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prepareForClient() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$,
      glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec.$,
      []);
  }

};

glic.mojom.GlicPreloadHandler.getRemote = function() {
  let remote = new glic.mojom.GlicPreloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for PrepareForClient
glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GlicPreloadHandler.PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GlicPreloadHandler.PrepareForClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.GlicPreloadHandlerPtr = glic.mojom.GlicPreloadHandlerRemote;
glic.mojom.GlicPreloadHandlerRequest = glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
glic.mojom.GlicPreloadHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.GlicPreloadHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.GlicPreloadHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPreloadHandler(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$,
      null,
      [receiver, page]);
  }

};

glic.mojom.GlicPreloadHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.GlicPreloadHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandlerFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreatePreloadHandler
glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.GlicPreloadHandlerFactory.CreatePreloadHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.GlicPreloadHandlerFactoryPtr = glic.mojom.GlicPreloadHandlerFactoryRemote;
glic.mojom.GlicPreloadHandlerFactoryRequest = glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
glic.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(receiver, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [receiver, page]);
  }

};

glic.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandlerFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreatePageHandler
glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.PageHandlerFactoryPtr = glic.mojom.PageHandlerFactoryRemote;
glic.mojom.PageHandlerFactoryRequest = glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
glic.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebClient(web_client_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$,
      null,
      [web_client_receiver]);
  }

  prepareForClient() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$,
      glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec.$,
      []);
  }

  webviewCommitted(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$,
      null,
      [url]);
  }

  closePanel() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.PageHandler_ClosePanel_ParamsSpec.$,
      null,
      []);
  }

  openProfilePickerAndClosePanel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$,
      null,
      []);
  }

  openDisabledByAdminLinkAndClosePanel() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$,
      null,
      []);
  }

  signInAndClosePanel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$,
      null,
      []);
  }

  resizeWidget(size, duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$,
      null,
      [size, duration]);
  }

  enableDragResize(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$,
      null,
      [enabled]);
  }

  webUiStateChanged(new_state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$,
      null,
      [new_state]);
  }

  getProfileEnablement() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec.$,
      glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec.$,
      []);
  }

};

glic.mojom.PageHandler.getRemote = function() {
  let remote = new glic.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for CreateWebClient
glic.mojom.PageHandler_CreateWebClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.CreateWebClient_Params',
      packedSize: 16,
      fields: [
        { name: 'web_client_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PrepareForClient
glic.mojom.PageHandler_PrepareForClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.PrepareForClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.PrepareForClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WebviewCommitted
glic.mojom.PageHandler_WebviewCommitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.WebviewCommitted_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClosePanel
glic.mojom.PageHandler_ClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.ClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenProfilePickerAndClosePanel
glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.OpenProfilePickerAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenDisabledByAdminLinkAndClosePanel
glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.OpenDisabledByAdminLinkAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SignInAndClosePanel
glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.SignInAndClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ResizeWidget
glic.mojom.PageHandler_ResizeWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.ResizeWidget_Params',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableDragResize
glic.mojom.PageHandler_EnableDragResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.EnableDragResize_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WebUiStateChanged
glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.WebUiStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetProfileEnablement
glic.mojom.PageHandler_GetProfileEnablement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.GetProfileEnablement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.PageHandler_GetProfileEnablement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PageHandler.GetProfileEnablement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enablement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.PageHandlerPtr = glic.mojom.PageHandlerRemote;
glic.mojom.PageHandlerRequest = glic.mojom.PageHandlerPendingReceiver;


// Interface: PinCandidatesObserver
glic.mojom.PinCandidatesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.PinCandidatesObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PinCandidatesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.PinCandidatesObserverPendingReceiver,
      handle);
    this.$ = new glic.mojom.PinCandidatesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.PinCandidatesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPinCandidatesChanged(candidates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$,
      null,
      [candidates]);
  }

};

glic.mojom.PinCandidatesObserver.getRemote = function() {
  let remote = new glic.mojom.PinCandidatesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PinCandidatesObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnPinCandidatesChanged
glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.PinCandidatesObserver.OnPinCandidatesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.PinCandidatesObserverPtr = glic.mojom.PinCandidatesObserverRemote;
glic.mojom.PinCandidatesObserverRequest = glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: WebClientHandler
glic.mojom.WebClientHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.WebClientHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClientHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.WebClientHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.WebClientHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.WebClientHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  webClientCreated(web_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$,
      glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec.$,
      [web_client]);
  }

  webClientInitialized() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$,
      null,
      []);
  }

  webClientInitializeFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$,
      null,
      []);
  }

  createTab(url, open_in_background, window_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec.$,
      [url, open_in_background, window_id]);
  }

  openLinkInPopup(url, popup_width, popup_height) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$,
      null,
      [url, popup_width, popup_height]);
  }

  openGlicSettingsPage(options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$,
      null,
      [options]);
  }

  openPasswordManagerSettingsPage() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$,
      null,
      []);
  }

  closePanel() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$,
      null,
      []);
  }

  closePanelAndShutdown() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$,
      null,
      []);
  }

  attachPanel() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$,
      null,
      []);
  }

  detachPanel() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$,
      null,
      []);
  }

  onModeChange(new_mode) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$,
      null,
      [new_mode]);
  }

  showProfilePicker() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$,
      null,
      []);
  }

  getModelQualityClientId() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec.$,
      []);
  }

  getContextFromFocusedTab(options) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec.$,
      [options]);
  }

  getContextFromTab(tab_id, options) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec.$,
      [tab_id, options]);
  }

  getContextForActorFromTab(tab_id, options) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec.$,
      [tab_id, options]);
  }

  setMaximumNumberOfPinnedTabs(requested_max) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$,
      glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec.$,
      [requested_max]);
  }

  pinTabs(tab_ids, options) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$,
      glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec.$,
      [tab_ids, options]);
  }

  unpinTabs(tab_ids, options) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$,
      glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec.$,
      [tab_ids, options]);
  }

  unpinAllTabs(options) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$,
      null,
      [options]);
  }

  createSkill(request) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      glic.mojom.WebClientHandler_CreateSkill_ParamsSpec.$,
      glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec.$,
      [request]);
  }

  updateSkill(request) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec.$,
      glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec.$,
      [request]);
  }

  getSkill(id) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      glic.mojom.WebClientHandler_GetSkill_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec.$,
      [id]);
  }

  subscribeToPinCandidates(options, observer) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$,
      null,
      [options, observer]);
  }

  createTask(task_options) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      glic.mojom.WebClientHandler_CreateTask_ParamsSpec.$,
      null,
      [task_options]);
  }

  performActions(actions_proto) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      glic.mojom.WebClientHandler_PerformActions_ParamsSpec.$,
      null,
      [actions_proto]);
  }

  stopActorTask(task_id, stop_reason) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      glic.mojom.WebClientHandler_StopActorTask_ParamsSpec.$,
      null,
      [task_id, stop_reason]);
  }

  pauseActorTask(task_id, pause_reason, tab_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec.$,
      null,
      [task_id, pause_reason, tab_id]);
  }

  resumeActorTask(task_id, context_options) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec.$,
      glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec.$,
      [task_id, context_options]);
  }

  interruptActorTask(task_id) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec.$,
      null,
      [task_id]);
  }

  uninterruptActorTask(task_id) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec.$,
      null,
      [task_id]);
  }

  createActorTab(task_id, open_in_background, initiator_tab_id, initiator_window_id) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec.$,
      [task_id, open_in_background, initiator_tab_id, initiator_window_id]);
  }

  activateTab(task_id) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$,
      null,
      [task_id]);
  }

  resizeWidget(size, duration) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$,
      null,
      [size, duration]);
  }

  captureScreenshot() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$,
      glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec.$,
      []);
  }

  captureRegion(observer) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$,
      null,
      [observer]);
  }

  setAudioDucking(enable) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$,
      glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec.$,
      [enable]);
  }

  setPanelDraggableAreas(draggable_areas) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec.$,
      null,
      [draggable_areas]);
  }

  setMinimumPanelSize(size) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$,
      null,
      [size]);
  }

  setMicrophonePermissionState(enabled) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$,
      null,
      [enabled]);
  }

  setLocationPermissionState(enabled) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$,
      null,
      [enabled]);
  }

  setTabContextPermissionState(enabled) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$,
      null,
      [enabled]);
  }

  setClosedCaptioningSetting(enabled) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$,
      null,
      [enabled]);
  }

  setActuationOnWebSetting(enabled) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$,
      null,
      [enabled]);
  }

  shouldAllowMediaPermissionRequest() {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$,
      glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec.$,
      []);
  }

  shouldAllowGeolocationPermissionRequest() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$,
      glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec.$,
      []);
  }

  setContextAccessIndicator(enabled) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$,
      null,
      [enabled]);
  }

  getUserProfileInfo() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec.$,
      []);
  }

  syncCookies() {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$,
      glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec.$,
      []);
  }

  logBeginAsyncEvent(event_async_id, task_id, event, details) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec.$,
      null,
      [event_async_id, task_id, event, details]);
  }

  logEndAsyncEvent(event_async_id, details) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec.$,
      null,
      [event_async_id, details]);
  }

  logInstantEvent(task_id, event, details) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec.$,
      null,
      [task_id, event, details]);
  }

  journalClear() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      glic.mojom.WebClientHandler_JournalClear_ParamsSpec.$,
      null,
      []);
  }

  journalSnapshot(clear_journal) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec.$,
      glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec.$,
      [clear_journal]);
  }

  journalStart(max_bytes, capture_screenshots) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      glic.mojom.WebClientHandler_JournalStart_ParamsSpec.$,
      null,
      [max_bytes, capture_screenshots]);
  }

  journalStop() {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      glic.mojom.WebClientHandler_JournalStop_ParamsSpec.$,
      null,
      []);
  }

  journalRecordFeedback(positive, reason) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec.$,
      null,
      [positive, reason]);
  }

  onUserInputSubmitted(mode) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$,
      null,
      [mode]);
  }

  onContextUploadStarted() {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$,
      null,
      []);
  }

  onContextUploadCompleted() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$,
      null,
      []);
  }

  onReaction(reactionType) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$,
      null,
      [reactionType]);
  }

  onResponseStarted() {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$,
      null,
      []);
  }

  onResponseStopped(details) {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$,
      null,
      [details]);
  }

  onSessionTerminated() {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$,
      null,
      []);
  }

  onTurnCompleted(model, duration) {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$,
      null,
      [model, duration]);
  }

  onModelChanged(model) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec.$,
      null,
      [model]);
  }

  onRecordUseCounter(counter) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec.$,
      null,
      [counter]);
  }

  onResponseRated(positive) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$,
      null,
      [positive]);
  }

  onClosedCaptionsShown() {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$,
      null,
      []);
  }

  scrollTo(params) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      glic.mojom.WebClientHandler_ScrollTo_ParamsSpec.$,
      glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec.$,
      [params]);
  }

  dropScrollToHighlight() {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec.$,
      null,
      []);
  }

  setSyntheticExperimentState(trial_name, group_name) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$,
      null,
      [trial_name, group_name]);
  }

  openOsPermissionSettingsMenu(type) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$,
      null,
      [type]);
  }

  getOsMicrophonePermissionStatus() {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec.$,
      []);
  }

  getZeroStateSuggestionsAndSubscribe(is_live, options) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec.$,
      [is_live, options]);
  }

  getZeroStateSuggestionsForFocusedTab(is_first_run) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$,
      glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec.$,
      [is_first_run]);
  }

  maybeRefreshUserStatus() {
    // Ordinal: 77
    return this.proxy.sendMessage(
      77,  // ordinal
      glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$,
      null,
      []);
  }

  isDebuggerAttached() {
    // Ordinal: 78
    return this.proxy.sendMessage(
      78,  // ordinal
      glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$,
      glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec.$,
      []);
  }

  onViewChanged(notification) {
    // Ordinal: 79
    return this.proxy.sendMessage(
      79,  // ordinal
      glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec.$,
      null,
      [notification]);
  }

  subscribeToPageMetadata(tab_id, names) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$,
      glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec.$,
      [tab_id, names]);
  }

  switchConversation(info) {
    // Ordinal: 81
    return this.proxy.sendMessage(
      81,  // ordinal
      glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$,
      glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec.$,
      [info]);
  }

  registerConversation(info) {
    // Ordinal: 82
    return this.proxy.sendMessage(
      82,  // ordinal
      glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$,
      glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec.$,
      [info]);
  }

  setOnboardingCompleted() {
    // Ordinal: 83
    return this.proxy.sendMessage(
      83,  // ordinal
      glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$,
      null,
      []);
  }

  subscribeToTabData(tab_id, receiver) {
    // Ordinal: 84
    return this.proxy.sendMessage(
      84,  // ordinal
      glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$,
      null,
      [tab_id, receiver]);
  }

};

glic.mojom.WebClientHandler.getRemote = function() {
  let remote = new glic.mojom.WebClientHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClientHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for WebClientCreated
glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'web_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientCreated_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initial_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WebClientInitialized
glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WebClientInitializeFailed
glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.WebClientInitializeFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateTab
glic.mojom.WebClientHandler_CreateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateTab_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'open_in_background', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'window_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenLinkInPopup
glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenLinkInPopup_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'popup_width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'popup_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenGlicSettingsPage
glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenGlicSettingsPage_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenPasswordManagerSettingsPage
glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenPasswordManagerSettingsPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClosePanel
glic.mojom.WebClientHandler_ClosePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ClosePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClosePanelAndShutdown
glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ClosePanelAndShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AttachPanel
glic.mojom.WebClientHandler_AttachPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.AttachPanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DetachPanel
glic.mojom.WebClientHandler_DetachPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.DetachPanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnModeChange
glic.mojom.WebClientHandler_OnModeChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnModeChange_Params',
      packedSize: 16,
      fields: [
        { name: 'new_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowProfilePicker
glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShowProfilePicker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetModelQualityClientId
glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetModelQualityClientId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetModelQualityClientId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_quality_client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetContextFromFocusedTab
glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromFocusedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromFocusedTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetContextFromTab
glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextFromTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetContextForActorFromTab
glic.mojom.WebClientHandler_GetContextForActorFromTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextForActorFromTab_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetContextForActorFromTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetContextForActorFromTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMaximumNumberOfPinnedTabs
glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMaximumNumberOfPinnedTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'requested_max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMaximumNumberOfPinnedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'effective_max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PinTabs
glic.mojom.WebClientHandler_PinTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PinTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PinTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pinned_all', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UnpinTabs
glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UnpinTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UnpinTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'unpinned_all', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UnpinAllTabs
glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UnpinAllTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateSkill
glic.mojom.WebClientHandler_CreateSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_CreateSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateSkill_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'modal_opened', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateSkill
glic.mojom.WebClientHandler_UpdateSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UpdateSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_UpdateSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UpdateSkill_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'modal_opened', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetSkill
glic.mojom.WebClientHandler_GetSkill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetSkill_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetSkill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetSkill_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'skill', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SubscribeToPinCandidates
glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToPinCandidates_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateTask
glic.mojom.WebClientHandler_CreateTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PerformActions
glic.mojom.WebClientHandler_PerformActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PerformActions_Params',
      packedSize: 16,
      fields: [
        { name: 'actions_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for StopActorTask
glic.mojom.WebClientHandler_StopActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.StopActorTask_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stop_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PauseActorTask
glic.mojom.WebClientHandler_PauseActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.PauseActorTask_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pause_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tab_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ResumeActorTask
glic.mojom.WebClientHandler_ResumeActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ResumeActorTask_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context_options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_ResumeActorTask_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ResumeActorTask_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for InterruptActorTask
glic.mojom.WebClientHandler_InterruptActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.InterruptActorTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UninterruptActorTask
glic.mojom.WebClientHandler_UninterruptActorTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.UninterruptActorTask_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateActorTab
glic.mojom.WebClientHandler_CreateActorTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateActorTab_Params',
      packedSize: 40,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'open_in_background', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initiator_tab_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initiator_window_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_CreateActorTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CreateActorTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ActivateTab
glic.mojom.WebClientHandler_ActivateTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ActivateTab_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ResizeWidget
glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ResizeWidget_Params',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CaptureScreenshot
glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CaptureScreenshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CaptureScreenshot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CaptureRegion
glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.CaptureRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAudioDucking
glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetAudioDucking_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetAudioDucking_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPanelDraggableAreas
glic.mojom.WebClientHandler_SetPanelDraggableAreas_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetPanelDraggableAreas_Params',
      packedSize: 16,
      fields: [
        { name: 'draggable_areas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMinimumPanelSize
glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMinimumPanelSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMicrophonePermissionState
glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetMicrophonePermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetLocationPermissionState
glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetLocationPermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTabContextPermissionState
glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetTabContextPermissionState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetClosedCaptioningSetting
glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetClosedCaptioningSetting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetActuationOnWebSetting
glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetActuationOnWebSetting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShouldAllowMediaPermissionRequest
glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowMediaPermissionRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowMediaPermissionRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShouldAllowGeolocationPermissionRequest
glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowGeolocationPermissionRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ShouldAllowGeolocationPermissionRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetContextAccessIndicator
glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetContextAccessIndicator_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetUserProfileInfo
glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetUserProfileInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetUserProfileInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SyncCookies
glic.mojom.WebClientHandler_SyncCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SyncCookies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SyncCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LogBeginAsyncEvent
glic.mojom.WebClientHandler_LogBeginAsyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogBeginAsyncEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'event_async_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'event', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LogEndAsyncEvent
glic.mojom.WebClientHandler_LogEndAsyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogEndAsyncEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event_async_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LogInstantEvent
glic.mojom.WebClientHandler_LogInstantEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.LogInstantEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JournalClear
glic.mojom.WebClientHandler_JournalClear_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalClear_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JournalSnapshot
glic.mojom.WebClientHandler_JournalSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalSnapshot_Params',
      packedSize: 16,
      fields: [
        { name: 'clear_journal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_JournalSnapshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalSnapshot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'journal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JournalStart
glic.mojom.WebClientHandler_JournalStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalStart_Params',
      packedSize: 24,
      fields: [
        { name: 'max_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'capture_screenshots', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JournalStop
glic.mojom.WebClientHandler_JournalStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JournalRecordFeedback
glic.mojom.WebClientHandler_JournalRecordFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.JournalRecordFeedback_Params',
      packedSize: 24,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnUserInputSubmitted
glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnUserInputSubmitted_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnContextUploadStarted
glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnContextUploadStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnContextUploadCompleted
glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnContextUploadCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnReaction
glic.mojom.WebClientHandler_OnReaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnReaction_Params',
      packedSize: 16,
      fields: [
        { name: 'reactionType', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnResponseStarted
glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnResponseStopped
glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnSessionTerminated
glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnSessionTerminated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnTurnCompleted
glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnTurnCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnModelChanged
glic.mojom.WebClientHandler_OnModelChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnModelChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'model', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnRecordUseCounter
glic.mojom.WebClientHandler_OnRecordUseCounter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnRecordUseCounter_Params',
      packedSize: 16,
      fields: [
        { name: 'counter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnResponseRated
glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnResponseRated_Params',
      packedSize: 16,
      fields: [
        { name: 'positive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnClosedCaptionsShown
glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnClosedCaptionsShown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ScrollTo
glic.mojom.WebClientHandler_ScrollTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ScrollTo_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_ScrollTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.ScrollTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DropScrollToHighlight
glic.mojom.WebClientHandler_DropScrollToHighlight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.DropScrollToHighlight_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSyntheticExperimentState
glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetSyntheticExperimentState_Params',
      packedSize: 24,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenOsPermissionSettingsMenu
glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OpenOsPermissionSettingsMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetOsMicrophonePermissionStatus
glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetOsMicrophonePermissionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetOsMicrophonePermissionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetZeroStateSuggestionsAndSubscribe
glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsAndSubscribe_Params',
      packedSize: 24,
      fields: [
        { name: 'is_live', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsAndSubscribe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'zero_state_suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetZeroStateSuggestionsForFocusedTab
glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsForFocusedTab_Params',
      packedSize: 16,
      fields: [
        { name: 'is_first_run', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.GetZeroStateSuggestionsForFocusedTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MaybeRefreshUserStatus
glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.MaybeRefreshUserStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IsDebuggerAttached
glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.IsDebuggerAttached_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.IsDebuggerAttached_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_attached_to_webview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnViewChanged
glic.mojom.WebClientHandler_OnViewChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.OnViewChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SubscribeToPageMetadata
glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToPageMetadata_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToPageMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SwitchConversation
glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SwitchConversation_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SwitchConversation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RegisterConversation
glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.RegisterConversation_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.RegisterConversation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetOnboardingCompleted
glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SetOnboardingCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SubscribeToTabData
glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClientHandler.SubscribeToTabData_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.WebClientHandlerPtr = glic.mojom.WebClientHandlerRemote;
glic.mojom.WebClientHandlerRequest = glic.mojom.WebClientHandlerPendingReceiver;


// Interface: TabDataHandler
glic.mojom.TabDataHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.TabDataHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.TabDataHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.TabDataHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.TabDataHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.TabDataHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabDataChanged(tab_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$,
      null,
      [tab_data]);
  }

};

glic.mojom.TabDataHandler.getRemote = function() {
  let remote = new glic.mojom.TabDataHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.TabDataHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for OnTabDataChanged
glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.TabDataHandler.OnTabDataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.TabDataHandlerPtr = glic.mojom.TabDataHandlerRemote;
glic.mojom.TabDataHandlerRequest = glic.mojom.TabDataHandlerPendingReceiver;


// Interface: WebClient
glic.mojom.WebClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.WebClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.WebClientPendingReceiver,
      handle);
    this.$ = new glic.mojom.WebClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.WebClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyPanelWillOpen(panel_opening_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$,
      glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec.$,
      [panel_opening_data]);
  }

  notifyPanelWasClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$,
      null,
      []);
  }

  notifyPanelStateChange(panel_state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$,
      null,
      [panel_state]);
  }

  notifyPanelActiveChange(panel_active) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$,
      null,
      [panel_active]);
  }

  notifyPanelCanAttachChange(can_attach) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$,
      null,
      [can_attach]);
  }

  notifyMicrophonePermissionStateChanged(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyLocationPermissionStateChanged(enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyTabContextPermissionStateChanged(enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyOsLocationPermissionStateChanged(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyFocusedTabChanged(focused_tab_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$,
      null,
      [focused_tab_data]);
  }

  notifyManualResizeChanged(resizing) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$,
      null,
      [resizing]);
  }

  notifyOsHotkeyStateChanged(hotkey) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$,
      null,
      [hotkey]);
  }

  notifyBrowserIsOpenChanged(browser_is_open) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$,
      null,
      [browser_is_open]);
  }

  notifyInstanceActivationChanged(instance_active) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$,
      null,
      [instance_active]);
  }

  notifyClosedCaptioningSettingChanged(enabled) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyPinnedTabsChanged(tab_data) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$,
      null,
      [tab_data]);
  }

  notifyPinnedTabDataChanged(tab_data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$,
      null,
      [tab_data]);
  }

  notifySkillPreviewsChanged(skill_previews) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec.$,
      null,
      [skill_previews]);
  }

  notifySkillPreviewChanged(skill_preview) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec.$,
      null,
      [skill_preview]);
  }

  notifySkillToInvokeChanged(skill) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec.$,
      null,
      [skill]);
  }

  notifyZeroStateSuggestionsChanged(suggestions, options) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$,
      null,
      [suggestions, options]);
  }

  notifyActorTaskStateChanged(task_id, state) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec.$,
      null,
      [task_id, state]);
  }

  requestViewChange(request) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      glic.mojom.WebClient_RequestViewChange_ParamsSpec.$,
      null,
      [request]);
  }

  notifyPageMetadataChanged(tab_id, metadata) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$,
      null,
      [tab_id, metadata]);
  }

  notifyDefaultTabContextPermissionStateChanged(enabled) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  requestToShowCredentialSelectionDialog(request) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$,
      glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec.$,
      [request]);
  }

  requestToShowAutofillSuggestionsDialog(request) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$,
      glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec.$,
      [request]);
  }

  requestToShowUserConfirmationDialog(request) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec.$,
      glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec.$,
      [request]);
  }

  requestToConfirmNavigation(request) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec.$,
      glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec.$,
      [request]);
  }

  notifyAdditionalContext(context) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$,
      null,
      [context]);
  }

  notifyActuationOnWebSettingChanged(enabled) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  notifyActOnWebCapabilityChanged(can_act_on_web) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$,
      null,
      [can_act_on_web]);
  }

  notifyOnboardingCompletedChanged(completed) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$,
      null,
      [completed]);
  }

};

glic.mojom.WebClient.getRemote = function() {
  let remote = new glic.mojom.WebClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClient',
    'context');
  return remote.$;
}};

// ParamsSpec for NotifyPanelWillOpen
glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelWillOpen_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_opening_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelWillOpen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'openPanelInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPanelWasClosed
glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelWasClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPanelStateChange
glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPanelActiveChange
glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelActiveChange_Params',
      packedSize: 16,
      fields: [
        { name: 'panel_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPanelCanAttachChange
glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPanelCanAttachChange_Params',
      packedSize: 16,
      fields: [
        { name: 'can_attach', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyMicrophonePermissionStateChanged
glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyMicrophonePermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyLocationPermissionStateChanged
glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyLocationPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyTabContextPermissionStateChanged
glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyTabContextPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyOsLocationPermissionStateChanged
glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOsLocationPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyFocusedTabChanged
glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyFocusedTabChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'focused_tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyManualResizeChanged
glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyManualResizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'resizing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyOsHotkeyStateChanged
glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOsHotkeyStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'hotkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyBrowserIsOpenChanged
glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyBrowserIsOpenChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_is_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyInstanceActivationChanged
glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyInstanceActivationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyClosedCaptioningSettingChanged
glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyClosedCaptioningSettingChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPinnedTabsChanged
glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPinnedTabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPinnedTabDataChanged
glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPinnedTabDataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifySkillPreviewsChanged
glic.mojom.WebClient_NotifySkillPreviewsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillPreviewsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill_previews', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifySkillPreviewChanged
glic.mojom.WebClient_NotifySkillPreviewChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillPreviewChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill_preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifySkillToInvokeChanged
glic.mojom.WebClient_NotifySkillToInvokeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifySkillToInvokeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'skill', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyZeroStateSuggestionsChanged
glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyZeroStateSuggestionsChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyActorTaskStateChanged
glic.mojom.WebClient_NotifyActorTaskStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActorTaskStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestViewChange
glic.mojom.WebClient_RequestViewChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestViewChange_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyPageMetadataChanged
glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyPageMetadataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyDefaultTabContextPermissionStateChanged
glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyDefaultTabContextPermissionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestToShowCredentialSelectionDialog
glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowCredentialSelectionDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowCredentialSelectionDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestToShowAutofillSuggestionsDialog
glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowAutofillSuggestionsDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowAutofillSuggestionsDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestToShowUserConfirmationDialog
glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowUserConfirmationDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToShowUserConfirmationDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestToConfirmNavigation
glic.mojom.WebClient_RequestToConfirmNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToConfirmNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

glic.mojom.WebClient_RequestToConfirmNavigation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.RequestToConfirmNavigation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyAdditionalContext
glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyAdditionalContext_Params',
      packedSize: 16,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyActuationOnWebSettingChanged
glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActuationOnWebSettingChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyActOnWebCapabilityChanged
glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyActOnWebCapabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'can_act_on_web', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyOnboardingCompletedChanged
glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.WebClient.NotifyOnboardingCompletedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.WebClientPtr = glic.mojom.WebClientRemote;
glic.mojom.WebClientRequest = glic.mojom.WebClientPendingReceiver;


// Interface: CaptureRegionObserver
glic.mojom.CaptureRegionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.CaptureRegionObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.CaptureRegionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.CaptureRegionObserverPendingReceiver,
      handle);
    this.$ = new glic.mojom.CaptureRegionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.CaptureRegionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdate(result, reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$,
      null,
      [result, reason]);
  }

};

glic.mojom.CaptureRegionObserver.getRemote = function() {
  let remote = new glic.mojom.CaptureRegionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.CaptureRegionObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnUpdate
glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'glic.mojom.CaptureRegionObserver.OnUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
glic.mojom.CaptureRegionObserverPtr = glic.mojom.CaptureRegionObserverRemote;
glic.mojom.CaptureRegionObserverRequest = glic.mojom.CaptureRegionObserverPendingReceiver;

