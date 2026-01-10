// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/eche_app_ui/mojom/eche_app.mojom
// Module: ash.eche_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.eche_app = ash.eche_app || {};
ash.eche_app.mojom = ash.eche_app.mojom || {};
var mojo_base = mojo_base || {};

ash.eche_app.mojom.ScreenBacklightStateSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.WebNotificationTypeSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.StreamStatusSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.StreamActionSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.ConnectionStatusSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.AppStreamLaunchEntryPointSpec = { $: mojo.internal.Enum() };
ash.eche_app.mojom.SignalingMessageExchanger = {};
ash.eche_app.mojom.SignalingMessageExchanger.$interfaceName = 'ash.eche_app.mojom.SignalingMessageExchanger';
ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec = { $: {} };
ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec = { $: {} };
ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec = { $: {} };
ash.eche_app.mojom.SignalingMessageObserver = {};
ash.eche_app.mojom.SignalingMessageObserver.$interfaceName = 'ash.eche_app.mojom.SignalingMessageObserver';
ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoProvider = {};
ash.eche_app.mojom.SystemInfoProvider.$interfaceName = 'ash.eche_app.mojom.SystemInfoProvider';
ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoObserver = {};
ash.eche_app.mojom.SystemInfoObserver.$interfaceName = 'ash.eche_app.mojom.SystemInfoObserver';
ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityProvider = {};
ash.eche_app.mojom.AccessibilityProvider.$interfaceName = 'ash.eche_app.mojom.AccessibilityProvider';
ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver = {};
ash.eche_app.mojom.AccessibilityObserver.$interfaceName = 'ash.eche_app.mojom.AccessibilityObserver';
ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec = { $: {} };
ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec = { $: {} };
ash.eche_app.mojom.UidGenerator = {};
ash.eche_app.mojom.UidGenerator.$interfaceName = 'ash.eche_app.mojom.UidGenerator';
ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec = { $: {} };
ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec = { $: {} };
ash.eche_app.mojom.NotificationGenerator = {};
ash.eche_app.mojom.NotificationGenerator.$interfaceName = 'ash.eche_app.mojom.NotificationGenerator';
ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec = { $: {} };
ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec = { $: {} };
ash.eche_app.mojom.DisplayStreamHandler = {};
ash.eche_app.mojom.DisplayStreamHandler.$interfaceName = 'ash.eche_app.mojom.DisplayStreamHandler';
ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec = { $: {} };
ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec = { $: {} };
ash.eche_app.mojom.StreamActionObserver = {};
ash.eche_app.mojom.StreamActionObserver.$interfaceName = 'ash.eche_app.mojom.StreamActionObserver';
ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec = { $: {} };
ash.eche_app.mojom.StreamOrientationObserver = {};
ash.eche_app.mojom.StreamOrientationObserver.$interfaceName = 'ash.eche_app.mojom.StreamOrientationObserver';
ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.ConnectionStatusObserver = {};
ash.eche_app.mojom.ConnectionStatusObserver.$interfaceName = 'ash.eche_app.mojom.ConnectionStatusObserver';
ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec = { $: {} };
ash.eche_app.mojom.KeyboardLayoutHandler = {};
ash.eche_app.mojom.KeyboardLayoutHandler.$interfaceName = 'ash.eche_app.mojom.KeyboardLayoutHandler';
ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec = { $: {} };
ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec = { $: {} };
ash.eche_app.mojom.KeyboardLayoutObserver = {};
ash.eche_app.mojom.KeyboardLayoutObserver.$interfaceName = 'ash.eche_app.mojom.KeyboardLayoutObserver';
ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec = { $: {} };

// Enum: ScreenBacklightState
ash.eche_app.mojom.ScreenBacklightState = {
  ON: 0,
  OFF: 1,
  OFF_AUTO: 2,
};

// Enum: WebNotificationType
ash.eche_app.mojom.WebNotificationType = {
  APP_CRAHSED: 0,
  AUTHORIZATION_NEEDED: 1,
  CONNECTION_FAILED: 2,
  CONNECTION_LOST: 3,
  DEVICE_IDLE: 4,
  INITIALIZATION_ERROR: 5,
  INVALID_NOTIFICATION: 6,
  NOTIFICATION_ACTION_NOT_LAUNCHED: 7,
  LAUNCH_NOTIFICATION_FAILED: 8,
  TABLET_MODE: 9,
  WIFI_NOT_READY: 10,
  DIFFERENT_WIFI_NETWORKS: 11,
  REMOTE_DEVICE_ON_CELLULAR: 12,
};

// Enum: StreamStatus
ash.eche_app.mojom.StreamStatus = {
  kStreamStatusUnknown: 0,
  kStreamStatusInitializing: 1,
  kStreamStatusStarted: 2,
  kStreamStatusStopped: 3,
};

// Enum: StreamAction
ash.eche_app.mojom.StreamAction = {
  kStreamActionClose: 0,
  kStreamActionGoBack: 1,
};

// Enum: ConnectionStatus
ash.eche_app.mojom.ConnectionStatus = {
  kConnectionStatusDisconnected: 0,
  kConnectionStatusConnecting: 1,
  kConnectionStatusConnected: 2,
  kConnectionStatusFailed: 3,
};

// Enum: AppStreamLaunchEntryPoint
ash.eche_app.mojom.AppStreamLaunchEntryPoint = {
  APPS_LIST: 0,
  NOTIFICATION: 1,
  RECENT_APPS: 2,
  UNKNOWN: 3,
};

// Interface: SignalingMessageExchanger
mojo.internal.Struct(
    ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_Params', [
      mojo.internal.StructField('signal', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.eche_app.mojom.SignalingMessageObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_Params', [
    ],
    [[0, 8]]);

ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.SignalingMessageExchangerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageExchanger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.SignalingMessageExchangerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.SignalingMessageExchangerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSignalingMessage(signal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec,
      null,
      [signal],
      false);
  }

  setSignalingMessageObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  tearDownSignaling() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.eche_app.mojom.SignalingMessageExchanger.getRemote = function() {
  let remote = new ash.eche_app.mojom.SignalingMessageExchangerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageExchanger',
    'context');
  return remote.$;
};

ash.eche_app.mojom.SignalingMessageExchangerReceiver = class {
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
          const params = ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendSignalingMessage(params.signal);
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSignalingMessageObserver(params.observer);
          break;
        }
        case 2: {
          const params = ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tearDownSignaling();
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.SignalingMessageExchangerReceiver = ash.eche_app.mojom.SignalingMessageExchangerReceiver;

ash.eche_app.mojom.SignalingMessageExchangerPtr = ash.eche_app.mojom.SignalingMessageExchangerRemote;
ash.eche_app.mojom.SignalingMessageExchangerRequest = ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver;


// Interface: SignalingMessageObserver
mojo.internal.Struct(
    ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_Params', [
      mojo.internal.StructField('signal', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.SignalingMessageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.SignalingMessageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.SignalingMessageObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.SignalingMessageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.SignalingMessageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceivedSignalingMessage(signal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec,
      null,
      [signal],
      false);
  }

};

ash.eche_app.mojom.SignalingMessageObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.SignalingMessageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.SignalingMessageObserverReceiver = class {
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
          const params = ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceivedSignalingMessage(params.signal);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.SignalingMessageObserverReceiver = ash.eche_app.mojom.SignalingMessageObserverReceiver;

ash.eche_app.mojom.SignalingMessageObserverPtr = ash.eche_app.mojom.SignalingMessageObserverRemote;
ash.eche_app.mojom.SignalingMessageObserverRequest = ash.eche_app.mojom.SignalingMessageObserverPendingReceiver;


// Interface: SystemInfoProvider
mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParams', [
      mojo.internal.StructField('system_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.eche_app.mojom.SystemInfoObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.SystemInfoProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.SystemInfoProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.SystemInfoProviderPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.SystemInfoProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.SystemInfoProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSystemInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec,
      ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec,
      [],
      false);
  }

  setSystemInfoObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.eche_app.mojom.SystemInfoProvider.getRemote = function() {
  let remote = new ash.eche_app.mojom.SystemInfoProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoProvider',
    'context');
  return remote.$;
};

ash.eche_app.mojom.SystemInfoProviderReceiver = class {
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
          const params = ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSystemInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSystemInfoObserver(params.observer);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.SystemInfoProviderReceiver = ash.eche_app.mojom.SystemInfoProviderReceiver;

ash.eche_app.mojom.SystemInfoProviderPtr = ash.eche_app.mojom.SystemInfoProviderRemote;
ash.eche_app.mojom.SystemInfoProviderRequest = ash.eche_app.mojom.SystemInfoProviderPendingReceiver;


// Interface: SystemInfoObserver
mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, ash.eche_app.mojom.ScreenBacklightStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_Params', [
      mojo.internal.StructField('is_different_network', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('android_device_on_cellular', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.SystemInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.SystemInfoObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.SystemInfoObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.SystemInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.SystemInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onScreenBacklightStateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  onReceivedTabletModeChanged(is_tablet_mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode],
      false);
  }

  onAndroidDeviceNetworkInfoChanged(is_different_network, android_device_on_cellular) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec,
      null,
      [is_different_network, android_device_on_cellular],
      false);
  }

};

ash.eche_app.mojom.SystemInfoObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.SystemInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.SystemInfoObserverReceiver = class {
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
          const params = ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenBacklightStateChanged(params.state);
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceivedTabletModeChanged(params.is_tablet_mode);
          break;
        }
        case 2: {
          const params = ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAndroidDeviceNetworkInfoChanged(params.is_different_network, params.android_device_on_cellular);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.SystemInfoObserverReceiver = ash.eche_app.mojom.SystemInfoObserverReceiver;

ash.eche_app.mojom.SystemInfoObserverPtr = ash.eche_app.mojom.SystemInfoObserverRemote;
ash.eche_app.mojom.SystemInfoObserverRequest = ash.eche_app.mojom.SystemInfoObserverPendingReceiver;


// Interface: AccessibilityProvider
mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_Params', [
      mojo.internal.StructField('serialized_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.eche_app.mojom.AccessibilityObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.AccessibilityProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.AccessibilityProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.AccessibilityProviderPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.AccessibilityProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.AccessibilityProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleAccessibilityEventReceived(serialized_proto) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec,
      null,
      [serialized_proto],
      false);
  }

  setAccessibilityObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  isAccessibilityEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec,
      ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

ash.eche_app.mojom.AccessibilityProvider.getRemote = function() {
  let remote = new ash.eche_app.mojom.AccessibilityProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityProvider',
    'context');
  return remote.$;
};

ash.eche_app.mojom.AccessibilityProviderReceiver = class {
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
          const params = ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleAccessibilityEventReceived(params.serialized_proto);
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAccessibilityObserver(params.observer);
          break;
        }
        case 2: {
          const params = ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isAccessibilityEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.AccessibilityProviderReceiver = ash.eche_app.mojom.AccessibilityProviderReceiver;

ash.eche_app.mojom.AccessibilityProviderPtr = ash.eche_app.mojom.AccessibilityProviderRemote;
ash.eche_app.mojom.AccessibilityProviderRequest = ash.eche_app.mojom.AccessibilityProviderPendingReceiver;


// Interface: AccessibilityObserver
mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_PerformAction_Params', [
      mojo.internal.StructField('serialized_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_Params', [
      mojo.internal.StructField('refresh_data_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParams', [
      mojo.internal.StructField('text_location_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.AccessibilityObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.AccessibilityObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.AccessibilityObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.AccessibilityObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.AccessibilityObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAccessibilityTreeStreaming(enable) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec,
      null,
      [enable],
      false);
  }

  enableExploreByTouch(enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec,
      null,
      [enable],
      false);
  }

  performAction(serialized_proto) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec,
      ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec,
      [serialized_proto],
      false);
  }

  refreshWithExtraData(refresh_data_proto) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec,
      ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec,
      [refresh_data_proto],
      false);
  }

};

ash.eche_app.mojom.AccessibilityObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.AccessibilityObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.AccessibilityObserverReceiver = class {
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
          const params = ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableAccessibilityTreeStreaming(params.enable);
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableExploreByTouch(params.enable);
          break;
        }
        case 2: {
          const params = ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.performAction(params.serialized_proto);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.refreshWithExtraData(params.refresh_data_proto);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.AccessibilityObserverReceiver = ash.eche_app.mojom.AccessibilityObserverReceiver;

ash.eche_app.mojom.AccessibilityObserverPtr = ash.eche_app.mojom.AccessibilityObserverRemote;
ash.eche_app.mojom.AccessibilityObserverRequest = ash.eche_app.mojom.AccessibilityObserverPendingReceiver;


// Interface: UidGenerator
mojo.internal.Struct(
    ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec, 'ash.eche_app.mojom.UidGenerator_GetUid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec, 'ash.eche_app.mojom.UidGenerator_GetUid_ResponseParams', [
      mojo.internal.StructField('local_uid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.UidGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.UidGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.UidGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.UidGeneratorPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.UidGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.UidGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUid() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec,
      ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec,
      [],
      false);
  }

};

ash.eche_app.mojom.UidGenerator.getRemote = function() {
  let remote = new ash.eche_app.mojom.UidGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.UidGenerator',
    'context');
  return remote.$;
};

ash.eche_app.mojom.UidGeneratorReceiver = class {
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
          const params = ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUid();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.UidGeneratorReceiver = ash.eche_app.mojom.UidGeneratorReceiver;

ash.eche_app.mojom.UidGeneratorPtr = ash.eche_app.mojom.UidGeneratorRemote;
ash.eche_app.mojom.UidGeneratorRequest = ash.eche_app.mojom.UidGeneratorPendingReceiver;


// Interface: NotificationGenerator
mojo.internal.Struct(
    ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec, 'ash.eche_app.mojom.NotificationGenerator_ShowNotification_Params', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, ash.eche_app.mojom.WebNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec, 'ash.eche_app.mojom.NotificationGenerator_ShowToast_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.NotificationGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.NotificationGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.NotificationGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.NotificationGeneratorPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.NotificationGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.NotificationGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showNotification(title, message, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec,
      null,
      [title, message, type],
      false);
  }

  showToast(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec,
      null,
      [text],
      false);
  }

};

ash.eche_app.mojom.NotificationGenerator.getRemote = function() {
  let remote = new ash.eche_app.mojom.NotificationGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.NotificationGenerator',
    'context');
  return remote.$;
};

ash.eche_app.mojom.NotificationGeneratorReceiver = class {
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
          const params = ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showNotification(params.title, params.message, params.type);
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showToast(params.text);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.NotificationGeneratorReceiver = ash.eche_app.mojom.NotificationGeneratorReceiver;

ash.eche_app.mojom.NotificationGeneratorPtr = ash.eche_app.mojom.NotificationGeneratorRemote;
ash.eche_app.mojom.NotificationGeneratorRequest = ash.eche_app.mojom.NotificationGeneratorPendingReceiver;


// Interface: DisplayStreamHandler
mojo.internal.Struct(
    ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, ash.eche_app.mojom.StreamStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.eche_app.mojom.StreamActionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.DisplayStreamHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.DisplayStreamHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.DisplayStreamHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.DisplayStreamHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startStreaming() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec,
      null,
      [],
      false);
  }

  onStreamStatusChanged(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  setStreamActionObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.eche_app.mojom.DisplayStreamHandler.getRemote = function() {
  let remote = new ash.eche_app.mojom.DisplayStreamHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.DisplayStreamHandler',
    'context');
  return remote.$;
};

ash.eche_app.mojom.DisplayStreamHandlerReceiver = class {
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
          const params = ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startStreaming();
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStreamStatusChanged(params.status);
          break;
        }
        case 2: {
          const params = ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setStreamActionObserver(params.observer);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.DisplayStreamHandlerReceiver = ash.eche_app.mojom.DisplayStreamHandlerReceiver;

ash.eche_app.mojom.DisplayStreamHandlerPtr = ash.eche_app.mojom.DisplayStreamHandlerRemote;
ash.eche_app.mojom.DisplayStreamHandlerRequest = ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver;


// Interface: StreamActionObserver
mojo.internal.Struct(
    ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec, 'ash.eche_app.mojom.StreamActionObserver_OnStreamAction_Params', [
      mojo.internal.StructField('action', 0, 0, ash.eche_app.mojom.StreamActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.StreamActionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.StreamActionObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamActionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.StreamActionObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.StreamActionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.StreamActionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamAction(action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec,
      null,
      [action],
      false);
  }

};

ash.eche_app.mojom.StreamActionObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.StreamActionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamActionObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.StreamActionObserverReceiver = class {
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
          const params = ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStreamAction(params.action);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.StreamActionObserverReceiver = ash.eche_app.mojom.StreamActionObserverReceiver;

ash.eche_app.mojom.StreamActionObserverPtr = ash.eche_app.mojom.StreamActionObserverRemote;
ash.eche_app.mojom.StreamActionObserverRequest = ash.eche_app.mojom.StreamActionObserverPendingReceiver;


// Interface: StreamOrientationObserver
mojo.internal.Struct(
    ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec, 'ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_Params', [
      mojo.internal.StructField('isLandscape', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.StreamOrientationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.StreamOrientationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamOrientationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.StreamOrientationObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.StreamOrientationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.StreamOrientationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamOrientationChanged(isLandscape) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec,
      null,
      [isLandscape],
      false);
  }

};

ash.eche_app.mojom.StreamOrientationObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.StreamOrientationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamOrientationObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.StreamOrientationObserverReceiver = class {
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
          const params = ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStreamOrientationChanged(params.isLandscape);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.StreamOrientationObserverReceiver = ash.eche_app.mojom.StreamOrientationObserverReceiver;

ash.eche_app.mojom.StreamOrientationObserverPtr = ash.eche_app.mojom.StreamOrientationObserverRemote;
ash.eche_app.mojom.StreamOrientationObserverRequest = ash.eche_app.mojom.StreamOrientationObserverPendingReceiver;


// Interface: ConnectionStatusObserver
mojo.internal.Struct(
    ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec, 'ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, ash.eche_app.mojom.ConnectionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.ConnectionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.ConnectionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.ConnectionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.ConnectionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionStatusChanged(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.eche_app.mojom.ConnectionStatusObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.ConnectionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.ConnectionStatusObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.ConnectionStatusObserverReceiver = class {
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
          const params = ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionStatusChanged(params.status);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.ConnectionStatusObserverReceiver = ash.eche_app.mojom.ConnectionStatusObserverReceiver;

ash.eche_app.mojom.ConnectionStatusObserverPtr = ash.eche_app.mojom.ConnectionStatusObserverRemote;
ash.eche_app.mojom.ConnectionStatusObserverRequest = ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver;


// Interface: KeyboardLayoutHandler
mojo.internal.Struct(
    ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.eche_app.mojom.KeyboardLayoutObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.KeyboardLayoutHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.KeyboardLayoutHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.KeyboardLayoutHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCurrentKeyboardLayout() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec,
      null,
      [],
      false);
  }

  setKeyboardLayoutObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.eche_app.mojom.KeyboardLayoutHandler.getRemote = function() {
  let remote = new ash.eche_app.mojom.KeyboardLayoutHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutHandler',
    'context');
  return remote.$;
};

ash.eche_app.mojom.KeyboardLayoutHandlerReceiver = class {
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
          const params = ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestCurrentKeyboardLayout();
          break;
        }
        case 1: {
          const params = ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeyboardLayoutObserver(params.observer);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.KeyboardLayoutHandlerReceiver = ash.eche_app.mojom.KeyboardLayoutHandlerReceiver;

ash.eche_app.mojom.KeyboardLayoutHandlerPtr = ash.eche_app.mojom.KeyboardLayoutHandlerRemote;
ash.eche_app.mojom.KeyboardLayoutHandlerRequest = ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver;


// Interface: KeyboardLayoutObserver
mojo.internal.Struct(
    ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('longName', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shortName', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('layoutTag', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.mojom.KeyboardLayoutObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.mojom.KeyboardLayoutObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.mojom.KeyboardLayoutObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardLayoutChanged(id, longName, shortName, layoutTag) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [id, longName, shortName, layoutTag],
      false);
  }

};

ash.eche_app.mojom.KeyboardLayoutObserver.getRemote = function() {
  let remote = new ash.eche_app.mojom.KeyboardLayoutObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutObserver',
    'context');
  return remote.$;
};

ash.eche_app.mojom.KeyboardLayoutObserverReceiver = class {
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
          const params = ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardLayoutChanged(params.id, params.longName, params.shortName, params.layoutTag);
          break;
        }
      }
    });
  }
};

ash.eche_app.mojom.KeyboardLayoutObserverReceiver = ash.eche_app.mojom.KeyboardLayoutObserverReceiver;

ash.eche_app.mojom.KeyboardLayoutObserverPtr = ash.eche_app.mojom.KeyboardLayoutObserverRemote;
ash.eche_app.mojom.KeyboardLayoutObserverRequest = ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver;

