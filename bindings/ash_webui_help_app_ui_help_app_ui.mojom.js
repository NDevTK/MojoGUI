// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/help_app_ui.mojom
// Module: ash.help_app.mojom

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.help_app.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

ash.help_app.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
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
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  showOnDeviceAppControls() {
    return this.$.showOnDeviceAppControls();
  }
  showParentalControls() {
    return this.$.showParentalControls();
  }
  triggerWelcomeTipCallToAction(action_type_id) {
    return this.$.triggerWelcomeTipCallToAction(action_type_id);
  }
  isLauncherSearchEnabled() {
    return this.$.isLauncherSearchEnabled();
  }
  launchMicrosoft365Setup() {
    return this.$.launchMicrosoft365Setup();
  }
  maybeShowReleaseNotesNotification() {
    return this.$.maybeShowReleaseNotesNotification();
  }
  getDeviceInfo() {
    return this.$.getDeviceInfo();
  }
  openUrlInBrowserAndTriggerInstallDialog(url) {
    return this.$.openUrlInBrowserAndTriggerInstallDialog(url);
  }
  openSettings(component) {
    return this.$.openSettings(component);
  }
  setHasCompletedNewDeviceChecklist() {
    return this.$.setHasCompletedNewDeviceChecklist();
  }
  setHasVisitedHowToPage() {
    return this.$.setHasVisitedHowToPage();
  }
};

ash.help_app.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  showOnDeviceAppControls() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec,
      null,
      [],
      false);
  }

  showParentalControls() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec,
      null,
      [],
      false);
  }

  triggerWelcomeTipCallToAction(action_type_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec,
      null,
      [action_type_id],
      false);
  }

  isLauncherSearchEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec,
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec,
      [],
      false);
  }

  launchMicrosoft365Setup() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec,
      null,
      [],
      false);
  }

  maybeShowReleaseNotesNotification() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec,
      null,
      [],
      false);
  }

  getDeviceInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec,
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInBrowserAndTriggerInstallDialog(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec,
      null,
      [url],
      false);
  }

  openSettings(component) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec,
      null,
      [component],
      false);
  }

  setHasCompletedNewDeviceChecklist() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec,
      null,
      [],
      false);
  }

  setHasVisitedHowToPage() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$.structSpec);
          const result = this.impl.showOnDeviceAppControls();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$.structSpec);
          const result = this.impl.showParentalControls();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$.structSpec);
          const result = this.impl.triggerWelcomeTipCallToAction(params.action_type_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$.structSpec);
          const result = this.impl.launchMicrosoft365Setup();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$.structSpec);
          const result = this.impl.maybeShowReleaseNotesNotification();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInBrowserAndTriggerInstallDialog(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openSettings(params.component);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$.structSpec);
          const result = this.impl.setHasCompletedNewDeviceChecklist();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$.structSpec);
          const result = this.impl.setHasVisitedHowToPage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.help_app.mojom.PageHandlerReceiver = ash.help_app.mojom.PageHandlerReceiver;

ash.help_app.mojom.PageHandlerPtr = ash.help_app.mojom.PageHandlerRemote;
ash.help_app.mojom.PageHandlerRequest = ash.help_app.mojom.PageHandlerPendingReceiver;

