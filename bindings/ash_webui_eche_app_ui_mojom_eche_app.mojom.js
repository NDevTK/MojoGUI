// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/eche_app_ui/mojom/eche_app.mojom
// Module: ash.eche_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.eche_app = ash.eche_app || {};
ash.eche_app.eche_app.mojom = ash.eche_app.eche_app.mojom || {};


// Enum: ScreenBacklightState
ash.eche_app.eche_app.mojom.mojom.ScreenBacklightState = {
  ON: 0,
  OFF: 1,
  OFF_AUTO: 2,
};
ash.eche_app.eche_app.mojom.mojom.ScreenBacklightStateSpec = { $: mojo.internal.Enum() };

// Enum: WebNotificationType
ash.eche_app.eche_app.mojom.mojom.WebNotificationType = {
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
ash.eche_app.eche_app.mojom.mojom.WebNotificationTypeSpec = { $: mojo.internal.Enum() };

// Enum: StreamStatus
ash.eche_app.eche_app.mojom.mojom.StreamStatus = {
  kStreamStatusUnknown: 0,
  kStreamStatusInitializing: 1,
  kStreamStatusStarted: 2,
  kStreamStatusStopped: 3,
};
ash.eche_app.eche_app.mojom.mojom.StreamStatusSpec = { $: mojo.internal.Enum() };

// Enum: StreamAction
ash.eche_app.eche_app.mojom.mojom.StreamAction = {
  kStreamActionClose: 0,
  kStreamActionGoBack: 1,
};
ash.eche_app.eche_app.mojom.mojom.StreamActionSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionStatus
ash.eche_app.eche_app.mojom.mojom.ConnectionStatus = {
  kConnectionStatusDisconnected: 0,
  kConnectionStatusConnecting: 1,
  kConnectionStatusConnected: 2,
  kConnectionStatusFailed: 3,
};
ash.eche_app.eche_app.mojom.mojom.ConnectionStatusSpec = { $: mojo.internal.Enum() };

// Enum: AppStreamLaunchEntryPoint
ash.eche_app.eche_app.mojom.mojom.AppStreamLaunchEntryPoint = {
  APPS_LIST: 0,
  NOTIFICATION: 1,
  RECENT_APPS: 2,
  UNKNOWN: 3,
};
ash.eche_app.eche_app.mojom.mojom.AppStreamLaunchEntryPointSpec = { $: mojo.internal.Enum() };

// Interface: SignalingMessageExchanger
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger = {};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageExchanger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSignalingMessage(signal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec,
      null,
      [signal]);
  }

  setSignalingMessageObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec,
      null,
      [observer]);
  }

  tearDownSignaling() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec,
      null,
      []);
  }

};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageExchanger',
    'context');
  return remote.$;
};

// ParamsSpec for SendSignalingMessage
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.SendSignalingMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'signal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSignalingMessageObserver
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.SetSignalingMessageObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TearDownSignaling
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.TearDownSignaling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerPtr = ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRemote;
ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerRequest = ash.eche_app.eche_app.mojom.mojom.SignalingMessageExchangerPendingReceiver;


// Interface: SignalingMessageObserver
ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserver = {};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceivedSignalingMessage(signal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec,
      null,
      [signal]);
  }

};

ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnReceivedSignalingMessage
ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageObserver.OnReceivedSignalingMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'signal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverPtr = ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRemote;
ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverRequest = ash.eche_app.eche_app.mojom.mojom.SignalingMessageObserverPendingReceiver;


// Interface: SystemInfoProvider
ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider = {};

ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSystemInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec,
      ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec,
      []);
  }

  setSystemInfoObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetSystemInfo
ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.GetSystemInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.GetSystemInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'system_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSystemInfoObserver
ash.eche_app.eche_app.mojom.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.SetSystemInfoObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderPtr = ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRemote;
ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderRequest = ash.eche_app.eche_app.mojom.mojom.SystemInfoProviderPendingReceiver;


// Interface: SystemInfoObserver
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver = {};

ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onScreenBacklightStateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec,
      null,
      [state]);
  }

  onReceivedTabletModeChanged(is_tablet_mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

  onAndroidDeviceNetworkInfoChanged(is_different_network, android_device_on_cellular) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec,
      null,
      [is_different_network, android_device_on_cellular]);
  }

};

ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnScreenBacklightStateChanged
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnScreenBacklightStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.eche_app.mojom.ScreenBacklightStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReceivedTabletModeChanged
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnReceivedTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAndroidDeviceNetworkInfoChanged
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnAndroidDeviceNetworkInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_different_network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'android_device_on_cellular', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverPtr = ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRemote;
ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverRequest = ash.eche_app.eche_app.mojom.mojom.SystemInfoObserverPendingReceiver;


// Interface: AccessibilityProvider
ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider = {};

ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleAccessibilityEventReceived(serialized_proto) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec,
      null,
      [serialized_proto]);
  }

  setAccessibilityObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec,
      null,
      [observer]);
  }

  isAccessibilityEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec,
      ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec,
      []);
  }

};

ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityProvider',
    'context');
  return remote.$;
};

// ParamsSpec for HandleAccessibilityEventReceived
ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.HandleAccessibilityEventReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'serialized_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAccessibilityObserver
ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.SetAccessibilityObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsAccessibilityEnabled
ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.IsAccessibilityEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.IsAccessibilityEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderPtr = ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRemote;
ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderRequest = ash.eche_app.eche_app.mojom.mojom.AccessibilityProviderPendingReceiver;


// Interface: AccessibilityObserver
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver = {};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAccessibilityTreeStreaming(enable) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec,
      null,
      [enable]);
  }

  enableExploreByTouch(enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec,
      null,
      [enable]);
  }

  performAction(serialized_proto) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_PerformAction_ParamsSpec,
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec,
      [serialized_proto]);
  }

  refreshWithExtraData(refresh_data_proto) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec,
      ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec,
      [refresh_data_proto]);
  }

};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityObserver',
    'context');
  return remote.$;
};

// ParamsSpec for EnableAccessibilityTreeStreaming
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.EnableAccessibilityTreeStreaming_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableExploreByTouch
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.EnableExploreByTouch_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformAction
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_PerformAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.PerformAction_Params',
      packedSize: 16,
      fields: [
        { name: 'serialized_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.PerformAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RefreshWithExtraData
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.RefreshWithExtraData_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_data_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.eche_app.eche_app.mojom.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.RefreshWithExtraData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text_location_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverPtr = ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRemote;
ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverRequest = ash.eche_app.eche_app.mojom.mojom.AccessibilityObserverPendingReceiver;


// Interface: UidGenerator
ash.eche_app.eche_app.mojom.mojom.UidGenerator = {};

ash.eche_app.eche_app.mojom.mojom.UidGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.UidGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.UidGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.UidGeneratorPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.UidGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.UidGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUid() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.UidGenerator_GetUid_ParamsSpec,
      ash.eche_app.eche_app.mojom.mojom.UidGenerator_GetUid_ResponseParamsSpec,
      []);
  }

};

ash.eche_app.eche_app.mojom.mojom.UidGenerator.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.UidGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.UidGenerator',
    'context');
  return remote.$;
};

// ParamsSpec for GetUid
ash.eche_app.eche_app.mojom.mojom.UidGenerator_GetUid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.UidGenerator.GetUid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.eche_app.eche_app.mojom.mojom.UidGenerator_GetUid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.UidGenerator.GetUid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.UidGeneratorPtr = ash.eche_app.eche_app.mojom.mojom.UidGeneratorRemote;
ash.eche_app.eche_app.mojom.mojom.UidGeneratorRequest = ash.eche_app.eche_app.mojom.mojom.UidGeneratorPendingReceiver;


// Interface: NotificationGenerator
ash.eche_app.eche_app.mojom.mojom.NotificationGenerator = {};

ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.NotificationGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showNotification(title, message, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.NotificationGenerator_ShowNotification_ParamsSpec,
      null,
      [title, message, type]);
  }

  showToast(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.NotificationGenerator_ShowToast_ParamsSpec,
      null,
      [text]);
  }

};

ash.eche_app.eche_app.mojom.mojom.NotificationGenerator.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.NotificationGenerator',
    'context');
  return remote.$;
};

// ParamsSpec for ShowNotification
ash.eche_app.eche_app.mojom.mojom.NotificationGenerator_ShowNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.NotificationGenerator.ShowNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ash.eche_app.mojom.WebNotificationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowToast
ash.eche_app.eche_app.mojom.mojom.NotificationGenerator_ShowToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.NotificationGenerator.ShowToast_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorPtr = ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRemote;
ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorRequest = ash.eche_app.eche_app.mojom.mojom.NotificationGeneratorPendingReceiver;


// Interface: DisplayStreamHandler
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler = {};

ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.DisplayStreamHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startStreaming() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec,
      null,
      []);
  }

  onStreamStatusChanged(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec,
      null,
      [status]);
  }

  setStreamActionObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.DisplayStreamHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartStreaming
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.StartStreaming_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStreamStatusChanged
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.OnStreamStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.eche_app.mojom.StreamStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStreamActionObserver
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.SetStreamActionObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerPtr = ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRemote;
ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerRequest = ash.eche_app.eche_app.mojom.mojom.DisplayStreamHandlerPendingReceiver;


// Interface: StreamActionObserver
ash.eche_app.eche_app.mojom.mojom.StreamActionObserver = {};

ash.eche_app.eche_app.mojom.mojom.StreamActionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamActionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.StreamActionObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamAction(action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.StreamActionObserver_OnStreamAction_ParamsSpec,
      null,
      [action]);
  }

};

ash.eche_app.eche_app.mojom.mojom.StreamActionObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamActionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStreamAction
ash.eche_app.eche_app.mojom.mojom.StreamActionObserver_OnStreamAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.StreamActionObserver.OnStreamAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.eche_app.mojom.StreamActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.StreamActionObserverPtr = ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRemote;
ash.eche_app.eche_app.mojom.mojom.StreamActionObserverRequest = ash.eche_app.eche_app.mojom.mojom.StreamActionObserverPendingReceiver;


// Interface: StreamOrientationObserver
ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserver = {};

ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamOrientationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamOrientationChanged(isLandscape) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec,
      null,
      [isLandscape]);
  }

};

ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamOrientationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStreamOrientationChanged
ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.StreamOrientationObserver.OnStreamOrientationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'isLandscape', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverPtr = ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRemote;
ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverRequest = ash.eche_app.eche_app.mojom.mojom.StreamOrientationObserverPendingReceiver;


// Interface: ConnectionStatusObserver
ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserver = {};

ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.ConnectionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionStatusChanged(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec,
      null,
      [status]);
  }

};

ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.ConnectionStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnConnectionStatusChanged
ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.ConnectionStatusObserver.OnConnectionStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.eche_app.mojom.ConnectionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverPtr = ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRemote;
ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverRequest = ash.eche_app.eche_app.mojom.mojom.ConnectionStatusObserverPendingReceiver;


// Interface: KeyboardLayoutHandler
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler = {};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCurrentKeyboardLayout() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec,
      null,
      []);
  }

  setKeyboardLayoutObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RequestCurrentKeyboardLayout
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutHandler.RequestCurrentKeyboardLayout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetKeyboardLayoutObserver
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutHandler.SetKeyboardLayoutObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerPtr = ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRemote;
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerRequest = ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutHandlerPendingReceiver;


// Interface: KeyboardLayoutObserver
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserver = {};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverPendingReceiver,
      handle);
    this.$ = new ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardLayoutChanged(id, longName, shortName, layoutTag) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [id, longName, shortName, layoutTag]);
  }

};

ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserver.getRemote = function() {
  let remote = new ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardLayoutChanged
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutObserver.OnKeyboardLayoutChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'longName', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shortName', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'layoutTag', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverPtr = ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRemote;
ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverRequest = ash.eche_app.eche_app.mojom.mojom.KeyboardLayoutObserverPendingReceiver;

