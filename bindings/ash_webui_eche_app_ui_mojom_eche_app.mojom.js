// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/eche_app_ui/mojom/eche_app.mojom
// Module: ash.eche_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.eche_app = ash.eche_app || {};
ash.eche_app.mojom = ash.eche_app.mojom || {};


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
ash.eche_app.mojom.SignalingMessageExchanger = {};

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
      [signal]);
  }

  setSignalingMessageObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec,
      null,
      [observer]);
  }

  tearDownSignaling() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SendSignalingMessage
ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.SendSignalingMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'signal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSignalingMessageObserver
ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.SetSignalingMessageObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TearDownSignaling
ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageExchanger.TearDownSignaling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.SignalingMessageExchangerPtr = ash.eche_app.mojom.SignalingMessageExchangerRemote;
ash.eche_app.mojom.SignalingMessageExchangerRequest = ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver;


// Interface: SignalingMessageObserver
ash.eche_app.mojom.SignalingMessageObserver = {};

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
      [signal]);
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

// ParamsSpec for OnReceivedSignalingMessage
ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SignalingMessageObserver.OnReceivedSignalingMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'signal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.SignalingMessageObserverPtr = ash.eche_app.mojom.SignalingMessageObserverRemote;
ash.eche_app.mojom.SignalingMessageObserverRequest = ash.eche_app.mojom.SignalingMessageObserverPendingReceiver;


// Interface: SystemInfoProvider
ash.eche_app.mojom.SystemInfoProvider = {};

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
      []);
  }

  setSystemInfoObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for GetSystemInfo
ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.GetSystemInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.GetSystemInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'system_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSystemInfoObserver
ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoProvider.SetSystemInfoObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.SystemInfoProviderPtr = ash.eche_app.mojom.SystemInfoProviderRemote;
ash.eche_app.mojom.SystemInfoProviderRequest = ash.eche_app.mojom.SystemInfoProviderPendingReceiver;


// Interface: SystemInfoObserver
ash.eche_app.mojom.SystemInfoObserver = {};

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
      [state]);
  }

  onReceivedTabletModeChanged(is_tablet_mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

  onAndroidDeviceNetworkInfoChanged(is_different_network, android_device_on_cellular) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec,
      null,
      [is_different_network, android_device_on_cellular]);
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

// ParamsSpec for OnScreenBacklightStateChanged
ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnScreenBacklightStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReceivedTabletModeChanged
ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnReceivedTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAndroidDeviceNetworkInfoChanged
ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.SystemInfoObserver.OnAndroidDeviceNetworkInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_different_network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'android_device_on_cellular', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.SystemInfoObserverPtr = ash.eche_app.mojom.SystemInfoObserverRemote;
ash.eche_app.mojom.SystemInfoObserverRequest = ash.eche_app.mojom.SystemInfoObserverPendingReceiver;


// Interface: AccessibilityProvider
ash.eche_app.mojom.AccessibilityProvider = {};

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
      [serialized_proto]);
  }

  setAccessibilityObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec,
      null,
      [observer]);
  }

  isAccessibilityEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec,
      ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec,
      []);
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

// ParamsSpec for HandleAccessibilityEventReceived
ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.HandleAccessibilityEventReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'serialized_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAccessibilityObserver
ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.SetAccessibilityObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsAccessibilityEnabled
ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.IsAccessibilityEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityProvider.IsAccessibilityEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.AccessibilityProviderPtr = ash.eche_app.mojom.AccessibilityProviderRemote;
ash.eche_app.mojom.AccessibilityProviderRequest = ash.eche_app.mojom.AccessibilityProviderPendingReceiver;


// Interface: AccessibilityObserver
ash.eche_app.mojom.AccessibilityObserver = {};

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
      [enable]);
  }

  enableExploreByTouch(enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec,
      null,
      [enable]);
  }

  performAction(serialized_proto) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec,
      ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec,
      [serialized_proto]);
  }

  refreshWithExtraData(refresh_data_proto) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec,
      ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec,
      [refresh_data_proto]);
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

// ParamsSpec for EnableAccessibilityTreeStreaming
ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.EnableAccessibilityTreeStreaming_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableExploreByTouch
ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.EnableExploreByTouch_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformAction
ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.PerformAction_Params',
      packedSize: 16,
      fields: [
        { name: 'serialized_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.PerformAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshWithExtraData
ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.RefreshWithExtraData_Params',
      packedSize: 16,
      fields: [
        { name: 'refresh_data_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.AccessibilityObserver.RefreshWithExtraData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text_location_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.AccessibilityObserverPtr = ash.eche_app.mojom.AccessibilityObserverRemote;
ash.eche_app.mojom.AccessibilityObserverRequest = ash.eche_app.mojom.AccessibilityObserverPendingReceiver;


// Interface: UidGenerator
ash.eche_app.mojom.UidGenerator = {};

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
      []);
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

// ParamsSpec for GetUid
ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.UidGenerator.GetUid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.UidGenerator.GetUid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.UidGeneratorPtr = ash.eche_app.mojom.UidGeneratorRemote;
ash.eche_app.mojom.UidGeneratorRequest = ash.eche_app.mojom.UidGeneratorPendingReceiver;


// Interface: NotificationGenerator
ash.eche_app.mojom.NotificationGenerator = {};

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
      [title, message, type]);
  }

  showToast(text) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec,
      null,
      [text]);
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

// ParamsSpec for ShowNotification
ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.NotificationGenerator.ShowNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowToast
ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.NotificationGenerator.ShowToast_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.NotificationGeneratorPtr = ash.eche_app.mojom.NotificationGeneratorRemote;
ash.eche_app.mojom.NotificationGeneratorRequest = ash.eche_app.mojom.NotificationGeneratorPendingReceiver;


// Interface: DisplayStreamHandler
ash.eche_app.mojom.DisplayStreamHandler = {};

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
      []);
  }

  onStreamStatusChanged(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec,
      null,
      [status]);
  }

  setStreamActionObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for StartStreaming
ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.StartStreaming_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStreamStatusChanged
ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.OnStreamStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStreamActionObserver
ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.DisplayStreamHandler.SetStreamActionObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.DisplayStreamHandlerPtr = ash.eche_app.mojom.DisplayStreamHandlerRemote;
ash.eche_app.mojom.DisplayStreamHandlerRequest = ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver;


// Interface: StreamActionObserver
ash.eche_app.mojom.StreamActionObserver = {};

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
      [action]);
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

// ParamsSpec for OnStreamAction
ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.StreamActionObserver.OnStreamAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.StreamActionObserverPtr = ash.eche_app.mojom.StreamActionObserverRemote;
ash.eche_app.mojom.StreamActionObserverRequest = ash.eche_app.mojom.StreamActionObserverPendingReceiver;


// Interface: StreamOrientationObserver
ash.eche_app.mojom.StreamOrientationObserver = {};

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
      [isLandscape]);
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

// ParamsSpec for OnStreamOrientationChanged
ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.StreamOrientationObserver.OnStreamOrientationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'isLandscape', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.StreamOrientationObserverPtr = ash.eche_app.mojom.StreamOrientationObserverRemote;
ash.eche_app.mojom.StreamOrientationObserverRequest = ash.eche_app.mojom.StreamOrientationObserverPendingReceiver;


// Interface: ConnectionStatusObserver
ash.eche_app.mojom.ConnectionStatusObserver = {};

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
      [status]);
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

// ParamsSpec for OnConnectionStatusChanged
ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.ConnectionStatusObserver.OnConnectionStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.ConnectionStatusObserverPtr = ash.eche_app.mojom.ConnectionStatusObserverRemote;
ash.eche_app.mojom.ConnectionStatusObserverRequest = ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver;


// Interface: KeyboardLayoutHandler
ash.eche_app.mojom.KeyboardLayoutHandler = {};

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
      []);
  }

  setKeyboardLayoutObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for RequestCurrentKeyboardLayout
ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutHandler.RequestCurrentKeyboardLayout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetKeyboardLayoutObserver
ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutHandler.SetKeyboardLayoutObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.KeyboardLayoutHandlerPtr = ash.eche_app.mojom.KeyboardLayoutHandlerRemote;
ash.eche_app.mojom.KeyboardLayoutHandlerRequest = ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver;


// Interface: KeyboardLayoutObserver
ash.eche_app.mojom.KeyboardLayoutObserver = {};

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
      [id, longName, shortName, layoutTag]);
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

// ParamsSpec for OnKeyboardLayoutChanged
ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.eche_app.mojom.KeyboardLayoutObserver.OnKeyboardLayoutChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'longName', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'shortName', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'layoutTag', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.eche_app.mojom.KeyboardLayoutObserverPtr = ash.eche_app.mojom.KeyboardLayoutObserverRemote;
ash.eche_app.mojom.KeyboardLayoutObserverRequest = ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver;

