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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ShowOnDeviceAppControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowOnDeviceAppControls (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ShowParentalControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowParentalControls (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: TriggerWelcomeTipCallToAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerWelcomeTipCallToAction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: IsLauncherSearchEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsLauncherSearchEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: LaunchMicrosoft365Setup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchMicrosoft365Setup (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: MaybeShowReleaseNotesNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowReleaseNotesNotification (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: GetDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: OpenUrlInBrowserAndTriggerInstallDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInBrowserAndTriggerInstallDialog (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: OpenSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSettings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: SetHasCompletedNewDeviceChecklist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasCompletedNewDeviceChecklist (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: SetHasVisitedHowToPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasVisitedHowToPage (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
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
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showOnDeviceAppControls');
          const result = this.impl.showOnDeviceAppControls();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showParentalControls');
          const result = this.impl.showParentalControls();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerWelcomeTipCallToAction');
          const result = this.impl.triggerWelcomeTipCallToAction(params.action_type_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isLauncherSearchEnabled');
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
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchMicrosoft365Setup');
          const result = this.impl.launchMicrosoft365Setup();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeShowReleaseNotesNotification');
          const result = this.impl.maybeShowReleaseNotesNotification();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
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
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openUrlInBrowserAndTriggerInstallDialog');
          const result = this.impl.openUrlInBrowserAndTriggerInstallDialog(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openSettings');
          const result = this.impl.openSettings(params.component);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasCompletedNewDeviceChecklist');
          const result = this.impl.setHasCompletedNewDeviceChecklist();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasVisitedHowToPage');
          const result = this.impl.setHasVisitedHowToPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.help_app.mojom.PageHandlerReceiver = ash.help_app.mojom.PageHandlerReceiver;

ash.help_app.mojom.PageHandlerPtr = ash.help_app.mojom.PageHandlerRemote;
ash.help_app.mojom.PageHandlerRequest = ash.help_app.mojom.PageHandlerPendingReceiver;

