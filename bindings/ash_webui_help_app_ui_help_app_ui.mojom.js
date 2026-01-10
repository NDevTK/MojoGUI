// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/help_app_ui.mojom
// Module: ash.help_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};
var url = url || {};

ash.help_app.mojom.ActionTypeIdSpec = { $: mojo.internal.Enum() };
ash.help_app.mojom.SettingsComponentSpec = { $: mojo.internal.Enum() };
ash.help_app.mojom.DeviceInfoSpec = { $: {} };
ash.help_app.mojom.PageHandlerFactory = {};
ash.help_app.mojom.PageHandlerFactory.$interfaceName = 'ash.help_app.mojom.PageHandlerFactory';
ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler = {};
ash.help_app.mojom.PageHandler.$interfaceName = 'ash.help_app.mojom.PageHandler';
ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec = { $: {} };

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

// Struct: DeviceInfo
mojo.internal.Struct(
    ash.help_app.mojom.DeviceInfoSpec, 'ash.help_app.mojom.DeviceInfo', [
      mojo.internal.StructField('board', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_steam_allowed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.help_app.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
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
};

ash.help_app.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
    });
  }
};

ash.help_app.mojom.PageHandlerFactoryReceiver = ash.help_app.mojom.PageHandlerFactoryReceiver;

ash.help_app.mojom.PageHandlerFactoryPtr = ash.help_app.mojom.PageHandlerFactoryRemote;
ash.help_app.mojom.PageHandlerFactoryRequest = ash.help_app.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec, 'ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec, 'ash.help_app.mojom.PageHandler_ShowParentalControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec, 'ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_Params', [
      mojo.internal.StructField('action_type_id', 0, 0, ash.help_app.mojom.ActionTypeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec, 'ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec, 'ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec, 'ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec, 'ash.help_app.mojom.PageHandler_GetDeviceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, ash.help_app.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenSettings_Params', [
      mojo.internal.StructField('component', 0, 0, ash.help_app.mojom.SettingsComponentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec, 'ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec, 'ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_Params', [
    ],
    [[0, 8]]);

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
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  showOnDeviceAppControls() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec,
      null,
      [],
      false);
  }

  showParentalControls() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec,
      null,
      [],
      false);
  }

  triggerWelcomeTipCallToAction(action_type_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec,
      null,
      [action_type_id],
      false);
  }

  isLauncherSearchEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec,
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec,
      [],
      false);
  }

  launchMicrosoft365Setup() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec,
      null,
      [],
      false);
  }

  maybeShowReleaseNotesNotification() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec,
      null,
      [],
      false);
  }

  getDeviceInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec,
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInBrowserAndTriggerInstallDialog(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec,
      null,
      [url],
      false);
  }

  openSettings(component) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec,
      null,
      [component],
      false);
  }

  setHasCompletedNewDeviceChecklist() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec,
      null,
      [],
      false);
  }

  setHasVisitedHowToPage() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec,
      null,
      [],
      false);
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
};

ash.help_app.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFeedbackDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showOnDeviceAppControls();
          break;
        }
        case 2: {
          const params = ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showParentalControls();
          break;
        }
        case 3: {
          const params = ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerWelcomeTipCallToAction(params.action_type_id);
          break;
        }
        case 4: {
          const params = ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isLauncherSearchEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchMicrosoft365Setup();
          break;
        }
        case 6: {
          const params = ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$.decode(message.payload);
          const result = this.impl.maybeShowReleaseNotesNotification();
          break;
        }
        case 7: {
          const params = ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openUrlInBrowserAndTriggerInstallDialog(params.url);
          break;
        }
        case 9: {
          const params = ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openSettings(params.component);
          break;
        }
        case 10: {
          const params = ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setHasCompletedNewDeviceChecklist();
          break;
        }
        case 11: {
          const params = ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setHasVisitedHowToPage();
          break;
        }
      }
    });
  }
};

ash.help_app.mojom.PageHandlerReceiver = ash.help_app.mojom.PageHandlerReceiver;

ash.help_app.mojom.PageHandlerPtr = ash.help_app.mojom.PageHandlerRemote;
ash.help_app.mojom.PageHandlerRequest = ash.help_app.mojom.PageHandlerPendingReceiver;

