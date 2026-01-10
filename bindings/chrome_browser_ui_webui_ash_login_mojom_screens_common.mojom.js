// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_common.mojom
// Module: ash.screens_common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_common = ash.screens_common || {};
ash.screens_common.screens_common.mojom = ash.screens_common.screens_common.mojom || {};


// Enum: UserCreationFlowType
ash.screens_common.screens_common.mojom.mojom.UserCreationFlowType = {
  kManual: 0,
  kQuickstart: 1,
};
ash.screens_common.screens_common.mojom.mojom.UserCreationFlowTypeSpec = { $: mojo.internal.Enum() };

// Enum: GesturePages
ash.screens_common.screens_common.mojom.mojom.GesturePages = {
  kIntro: 0,
  kHome: 1,
  kOverview: 2,
  kBack: 3,
};
ash.screens_common.screens_common.mojom.mojom.GesturePagesSpec = { $: mojo.internal.Enum() };

// Interface: AiIntroPageHandler
ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNextClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnNextClicked
ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.AiIntroPageHandler.OnNextClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.AiIntroPageHandlerPendingReceiver;


// Interface: AiIntroPage
ash.screens_common.screens_common.mojom.mojom.AiIntroPage = {};

ash.screens_common.screens_common.mojom.mojom.AiIntroPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.AiIntroPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.AiIntroPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.AiIntroPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAutoTransition(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.AiIntroPage_SetAutoTransition_ParamsSpec,
      null,
      [value]);
  }

};

ash.screens_common.screens_common.mojom.mojom.AiIntroPage.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.AiIntroPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPage',
    'context');
  return remote.$;
};

// ParamsSpec for SetAutoTransition
ash.screens_common.screens_common.mojom.mojom.AiIntroPage_SetAutoTransition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.AiIntroPage.SetAutoTransition_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.AiIntroPagePtr = ash.screens_common.screens_common.mojom.mojom.AiIntroPageRemote;
ash.screens_common.screens_common.mojom.mojom.AiIntroPageRequest = ash.screens_common.screens_common.mojom.mojom.AiIntroPagePendingReceiver;


// Interface: AppDownloadingPageHandler
ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AppDownloadingPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onContinueClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AppDownloadingPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnContinueClicked
ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.AppDownloadingPageHandler.OnContinueClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.AppDownloadingPageHandlerPendingReceiver;


// Interface: DrivePinningPageHandler
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReturnClicked(enable_drive_pinning) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec,
      null,
      [enable_drive_pinning]);
  }

  onNextClicked(enable_drive_pinning) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec,
      null,
      [enable_drive_pinning]);
  }

};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnReturnClicked
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.DrivePinningPageHandler.OnReturnClicked_Params',
      packedSize: 16,
      fields: [
        { name: 'enable_drive_pinning', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNextClicked
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.DrivePinningPageHandler.OnNextClicked_Params',
      packedSize: 16,
      fields: [
        { name: 'enable_drive_pinning', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.DrivePinningPageHandlerPendingReceiver;


// Interface: DrivePinningPage
ash.screens_common.screens_common.mojom.mojom.DrivePinningPage = {};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.DrivePinningPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setRequiredSpaceInfo(required_space, free_space) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec,
      null,
      [required_space, free_space]);
  }

};

ash.screens_common.screens_common.mojom.mojom.DrivePinningPage.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPage',
    'context');
  return remote.$;
};

// ParamsSpec for SetRequiredSpaceInfo
ash.screens_common.screens_common.mojom.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.DrivePinningPage.SetRequiredSpaceInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'required_space', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'free_space', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.DrivePinningPagePtr = ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRemote;
ash.screens_common.screens_common.mojom.mojom.DrivePinningPageRequest = ash.screens_common.screens_common.mojom.mojom.DrivePinningPagePendingReceiver;


// Interface: FjordStationSetupPageHandler
ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.FjordStationSetupPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSetupComplete() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.FjordStationSetupPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnSetupComplete
ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.FjordStationSetupPageHandler.OnSetupComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.FjordStationSetupPageHandlerPendingReceiver;


// Interface: GaiaInfoPageHandler
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec,
      null,
      []);
  }

  onNextClicked(user_flow) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec,
      null,
      [user_flow]);
  }

};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnBackClicked
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GaiaInfoPageHandler.OnBackClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnNextClicked
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GaiaInfoPageHandler.OnNextClicked_Params',
      packedSize: 16,
      fields: [
        { name: 'user_flow', packedOffset: 0, packedBitOffset: 0, type: ash.screens_common.mojom.UserCreationFlowTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageHandlerPendingReceiver;


// Interface: GaiaInfoPage
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPage = {};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.GaiaInfoPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setQuickStartVisible() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.GaiaInfoPage.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPage',
    'context');
  return remote.$;
};

// ParamsSpec for SetQuickStartVisible
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GaiaInfoPage.SetQuickStartVisible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPagePtr = ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRemote;
ash.screens_common.screens_common.mojom.mojom.GaiaInfoPageRequest = ash.screens_common.screens_common.mojom.mojom.GaiaInfoPagePendingReceiver;


// Interface: GestureNavigationPageHandler
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GestureNavigationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPageChange(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec,
      null,
      [page]);
  }

  onSkipClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      []);
  }

  onExitClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GestureNavigationPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnPageChange
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GestureNavigationPageHandler.OnPageChange_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: ash.screens_common.mojom.GesturePagesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSkipClicked
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GestureNavigationPageHandler.OnSkipClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnExitClicked
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GestureNavigationPageHandler.OnExitClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.GestureNavigationPageHandlerPendingReceiver;


// Interface: GeminiIntroPageHandler
ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler = {};

ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GeminiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec,
      null,
      []);
  }

  onNextClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GeminiIntroPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnBackClicked
ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GeminiIntroPageHandler.OnBackClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnNextClicked
ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_common.mojom.GeminiIntroPageHandler.OnNextClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerPtr = ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRemote;
ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerRequest = ash.screens_common.screens_common.mojom.mojom.GeminiIntroPageHandlerPendingReceiver;

