// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_parental_controls_handler.mojom
// Module: ash.settings.app_parental_controls.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.app_parental_controls = ash.settings.settings.app_parental_controls || {};
ash.settings.settings.app_parental_controls.app_parental_controls.mojom = ash.settings.settings.app_parental_controls.app_parental_controls.mojom || {};


// Enum: PinValidationResult
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.PinValidationResult = {
  kPinValidationSuccess: 0,
  kPinLengthError: 1,
  kPinNumericError: 2,
};
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.PinValidationResultSpec = { $: mojo.internal.Enum() };

// Struct: App
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.App',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_blocked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AppParentalControlsHandler
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler = {};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_GetApps_ParamsSpec,
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec,
      []);
  }

  updateApp(app_id, is_blocked) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec,
      null,
      [app_id, is_blocked]);
  }

  addObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  onControlsDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec,
      null,
      []);
  }

  validatePin(pin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec,
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec,
      [pin]);
  }

  setUpPin(pin) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec,
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec,
      [pin]);
  }

  verifyPin(pin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec,
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec,
      [pin]);
  }

  isSetupCompleted() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec,
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec,
      []);
  }

};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler.getRemote = function() {
  let remote = new ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetApps
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.app_parental_controls.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateApp
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.UpdateApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_blocked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddObserver
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnControlsDisabled
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.OnControlsDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ValidatePin
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.ValidatePin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.ValidatePin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.settings.app_parental_controls.mojom.PinValidationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUpPin
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.SetUpPin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.SetUpPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for VerifyPin
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.VerifyPin_Params',
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.VerifyPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsSetupCompleted
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.IsSetupCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.IsSetupCompleted_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerPtr = ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRemote;
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerRequest = ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsHandlerPendingReceiver;


// Interface: AppParentalControlsObserver
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver = {};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppInstalledOrUpdated(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec,
      null,
      [app]);
  }

  onAppUninstalled(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec,
      null,
      [app]);
  }

};

ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver.getRemote = function() {
  let remote = new ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAppInstalledOrUpdated
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.OnAppInstalledOrUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: ash.settings.app_parental_controls.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppUninstalled
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.OnAppUninstalled_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: ash.settings.app_parental_controls.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverPtr = ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRemote;
ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverRequest = ash.settings.settings.app_parental_controls.app_parental_controls.mojom.mojom.AppParentalControlsObserverPendingReceiver;

