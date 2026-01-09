// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_parental_controls_handler.mojom
// Module: ash.settings.app_parental_controls.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_parental_controls = ash.settings.app_parental_controls || {};
ash.settings.app_parental_controls.mojom = ash.settings.app_parental_controls.mojom || {};


// Enum: PinValidationResult
ash.settings.app_parental_controls.mojom.PinValidationResult = {
  kPinValidationSuccess: 0,
  kPinLengthError: 1,
  kPinNumericError: 2,
};

// Interface: AppParentalControlsHandler
ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec.$,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec.$,
      []);
  }

  updateApp(app_id, is_blocked) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec.$,
      null,
      [app_id, is_blocked]);
  }

  addObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  onControlsDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec.$,
      null,
      []);
  }

  validatePin(pin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec.$,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec.$,
      [pin]);
  }

  setUpPin(pin) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec.$,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec.$,
      [pin]);
  }

  verifyPin(pin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec.$,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec.$,
      [pin]);
  }

  isSetupCompleted() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec.$,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec.$,
      []);
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.getRemote = function() {
  let remote = new ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetApps
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateApp
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.UpdateApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_blocked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnControlsDisabled
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.OnControlsDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ValidatePin
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.ValidatePin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.ValidatePin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUpPin
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.SetUpPin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.SetUpPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for VerifyPin
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.VerifyPin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.VerifyPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSetupCompleted
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.IsSetupCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.IsSetupCompleted_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPtr = ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote;
ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRequest = ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver;


// Interface: AppParentalControlsObserver
ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppInstalledOrUpdated(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec.$,
      null,
      [app]);
  }

  onAppUninstalled(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec.$,
      null,
      [app]);
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.getRemote = function() {
  let remote = new ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAppInstalledOrUpdated
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.OnAppInstalledOrUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAppUninstalled
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.OnAppUninstalled_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPtr = ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote;
ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRequest = ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver;

