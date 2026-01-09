// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/help_app_ui.mojom
// Module: ash.help_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};


// Enum: ActionTypeId
ash.help_app.mojom.ActionTypeId = {
  INVALID: 0,
  OPEN_CHROME: 1,
  OPEN_LAUNCHER: 2,
  OPEN_PERSONALIZATION_APP: 3,
  OPEN_PLAY_STORE: 4,
  OPEN_GOOGLE_DOCS: 5,
  OPEN_GOOGLE_PHOTOS: 6,
  OPEN_SETTINGS_PRINTER: 7,
  OPEN_PHONE_HUB: 8,
  OPEN_YOUTUBE: 9,
  OPEN_FILE_MANAGER: 10,
};

// Enum: SettingsComponent
ash.help_app.mojom.SettingsComponent = {
  HOME: 0,
  ACCESSIBILITY: 1,
  BLUETOOTH: 2,
  DISPLAY: 3,
  INPUT: 4,
  MULTI_DEVICE: 5,
  PEOPLE: 6,
  PER_DEVICE_KEYBOARD: 7,
  PER_DEVICE_TOUCHPAD: 8,
  PERSONALIZATION: 9,
  PRINTING: 10,
  SECURITY_AND_SIGN_IN: 11,
  TOUCHPAD_REVERSE_SCROLLING: 12,
  TOUCHPAD_SIMULATE_RIGHT_CLICK: 13,
};

// Interface: PageHandlerFactory
ash.help_app.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.help_app.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [handler]);
  }

};

ash.help_app.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.help_app.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.PageHandlerFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreatePageHandler
ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.help_app.mojom.PageHandlerFactoryPtr = ash.help_app.mojom.PageHandlerFactoryRemote;
ash.help_app.mojom.PageHandlerFactoryRequest = ash.help_app.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.help_app.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.help_app.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFeedbackDialog() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$,
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec.$,
      []);
  }

  showOnDeviceAppControls() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$,
      null,
      []);
  }

  showParentalControls() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$,
      null,
      []);
  }

  triggerWelcomeTipCallToAction(action_type_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$,
      null,
      [action_type_id]);
  }

  isLauncherSearchEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$,
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec.$,
      []);
  }

  launchMicrosoft365Setup() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$,
      null,
      []);
  }

  maybeShowReleaseNotesNotification() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$,
      null,
      []);
  }

  getDeviceInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$,
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec.$,
      []);
  }

  openUrlInBrowserAndTriggerInstallDialog(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$,
      null,
      [url]);
  }

  openSettings(component) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$,
      null,
      [component]);
  }

  setHasCompletedNewDeviceChecklist() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$,
      null,
      []);
  }

  setHasVisitedHowToPage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$,
      null,
      []);
  }

};

ash.help_app.mojom.PageHandler.getRemote = function() {
  let remote = new ash.help_app.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.PageHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for OpenFeedbackDialog
ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.OpenFeedbackDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowOnDeviceAppControls
ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.ShowOnDeviceAppControls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowParentalControls
ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.ShowParentalControls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TriggerWelcomeTipCallToAction
ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.TriggerWelcomeTipCallToAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_type_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for IsLauncherSearchEnabled
ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.IsLauncherSearchEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.IsLauncherSearchEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LaunchMicrosoft365Setup
ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.LaunchMicrosoft365Setup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MaybeShowReleaseNotesNotification
ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.MaybeShowReleaseNotesNotification_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetDeviceInfo
ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.GetDeviceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.GetDeviceInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenUrlInBrowserAndTriggerInstallDialog
ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.OpenUrlInBrowserAndTriggerInstallDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenSettings
ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.OpenSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetHasCompletedNewDeviceChecklist
ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.SetHasCompletedNewDeviceChecklist_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetHasVisitedHowToPage
ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.PageHandler.SetHasVisitedHowToPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.help_app.mojom.PageHandlerPtr = ash.help_app.mojom.PageHandlerRemote;
ash.help_app.mojom.PageHandlerRequest = ash.help_app.mojom.PageHandlerPendingReceiver;

