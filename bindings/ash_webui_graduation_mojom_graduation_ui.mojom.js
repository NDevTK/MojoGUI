// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/graduation/mojom/graduation_ui.mojom
// Module: ash.graduation_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.graduation_ui = ash.graduation_ui || {};
ash.graduation_ui.graduation_ui.mojom = ash.graduation_ui.graduation_ui.mojom || {};


// Enum: GraduationScreen
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationScreen = {
  kWelcome: 0,
  kTakeoutUi: 1,
  kError: 2,
};
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationScreenSpec = { $: mojo.internal.Enum() };

// Enum: AuthResult
ash.graduation_ui.graduation_ui.mojom.mojom.AuthResult = {
  kSuccess: 0,
  kError: 1,
};
ash.graduation_ui.graduation_ui.mojom.mojom.AuthResultSpec = { $: mojo.internal.Enum() };

// Struct: ProfileInfo
ash.graduation_ui.graduation_ui.mojom.mojom.ProfileInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.ProfileInfo',
      packedSize: 24,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'photo_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: GraduationUiHandler
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler = {};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.graduation_ui.mojom.GraduationUiHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerPendingReceiver,
      handle);
    this.$ = new ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  authenticateWebview() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec,
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec,
      []);
  }

  getProfileInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec,
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec,
      []);
  }

  onScreenSwitched(screen) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec,
      null,
      [screen]);
  }

  onTransferComplete() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec,
      null,
      []);
  }

};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler.getRemote = function() {
  let remote = new ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.graduation_ui.mojom.GraduationUiHandler',
    'context');
  return remote.$;
};

// ParamsSpec for AuthenticateWebview
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.AuthenticateWebview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.AuthenticateWebview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.graduation_ui.mojom.AuthResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProfileInfo
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.GetProfileInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.GetProfileInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile_info', packedOffset: 0, packedBitOffset: 0, type: ash.graduation_ui.mojom.ProfileInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreenSwitched
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.OnScreenSwitched_Params',
      packedSize: 16,
      fields: [
        { name: 'screen', packedOffset: 0, packedBitOffset: 0, type: ash.graduation_ui.mojom.GraduationScreenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTransferComplete
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.graduation_ui.mojom.GraduationUiHandler.OnTransferComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerPtr = ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRemote;
ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerRequest = ash.graduation_ui.graduation_ui.mojom.mojom.GraduationUiHandlerPendingReceiver;

