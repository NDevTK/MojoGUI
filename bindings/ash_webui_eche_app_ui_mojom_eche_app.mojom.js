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
};

// Enum: StreamAction
ash.eche_app.mojom.StreamAction = {
};

// Enum: ConnectionStatus
ash.eche_app.mojom.ConnectionStatus = {
};

// Enum: AppStreamLaunchEntryPoint
ash.eche_app.mojom.AppStreamLaunchEntryPoint = {
  APPS_LIST: 0,
};

// Interface: SignalingMessageExchanger
ash.eche_app.mojom.SignalingMessageExchangerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.SignalingMessageExchanger';
  }

  sendSignalingMessage(signal) {
    // Method: SendSignalingMessage
    // Call: SendSignalingMessage(signal)
  }

  setSignalingMessageObserver(observer) {
    // Method: SetSignalingMessageObserver
    // Call: SetSignalingMessageObserver(observer)
  }

  tearDownSignaling() {
    // Method: TearDownSignaling
    // Call: TearDownSignaling()
  }

};

ash.eche_app.mojom.SignalingMessageExchangerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SignalingMessageObserver
ash.eche_app.mojom.SignalingMessageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.SignalingMessageObserver';
  }

  onReceivedSignalingMessage(signal) {
    // Method: OnReceivedSignalingMessage
    // Call: OnReceivedSignalingMessage(signal)
  }

};

ash.eche_app.mojom.SignalingMessageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemInfoProvider
ash.eche_app.mojom.SystemInfoProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.SystemInfoProvider';
  }

  getSystemInfo() {
    // Method: GetSystemInfo
    return new Promise((resolve) => {
      // Call: GetSystemInfo()
      resolve({});
    });
  }

  setSystemInfoObserver(observer) {
    // Method: SetSystemInfoObserver
    // Call: SetSystemInfoObserver(observer)
  }

};

ash.eche_app.mojom.SystemInfoProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemInfoObserver
ash.eche_app.mojom.SystemInfoObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.SystemInfoObserver';
  }

  onScreenBacklightStateChanged(state) {
    // Method: OnScreenBacklightStateChanged
    // Call: OnScreenBacklightStateChanged(state)
  }

  onReceivedTabletModeChanged(is_tablet_mode) {
    // Method: OnReceivedTabletModeChanged
    // Call: OnReceivedTabletModeChanged(is_tablet_mode)
  }

  onAndroidDeviceNetworkInfoChanged(is_different_network, android_device_on_cellular) {
    // Method: OnAndroidDeviceNetworkInfoChanged
    // Call: OnAndroidDeviceNetworkInfoChanged(is_different_network, android_device_on_cellular)
  }

};

ash.eche_app.mojom.SystemInfoObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityProvider
ash.eche_app.mojom.AccessibilityProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.AccessibilityProvider';
  }

  handleAccessibilityEventReceived(serialized_proto) {
    // Method: HandleAccessibilityEventReceived
    // Call: HandleAccessibilityEventReceived(serialized_proto)
  }

  setAccessibilityObserver(observer) {
    // Method: SetAccessibilityObserver
    // Call: SetAccessibilityObserver(observer)
  }

  isAccessibilityEnabled() {
    // Method: IsAccessibilityEnabled
    return new Promise((resolve) => {
      // Call: IsAccessibilityEnabled()
      resolve({});
    });
  }

};

ash.eche_app.mojom.AccessibilityProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityObserver
ash.eche_app.mojom.AccessibilityObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.AccessibilityObserver';
  }

  enableAccessibilityTreeStreaming(enable) {
    // Method: EnableAccessibilityTreeStreaming
    // Call: EnableAccessibilityTreeStreaming(enable)
  }

  enableExploreByTouch(enable) {
    // Method: EnableExploreByTouch
    // Call: EnableExploreByTouch(enable)
  }

  performAction(serialized_proto) {
    // Method: PerformAction
    return new Promise((resolve) => {
      // Call: PerformAction(serialized_proto)
      resolve({});
    });
  }

  refreshWithExtraData(refresh_data_proto) {
    // Method: RefreshWithExtraData
    return new Promise((resolve) => {
      // Call: RefreshWithExtraData(refresh_data_proto)
      resolve({});
    });
  }

};

ash.eche_app.mojom.AccessibilityObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UidGenerator
ash.eche_app.mojom.UidGeneratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.UidGenerator';
  }

  getUid() {
    // Method: GetUid
    return new Promise((resolve) => {
      // Call: GetUid()
      resolve({});
    });
  }

};

ash.eche_app.mojom.UidGeneratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NotificationGenerator
ash.eche_app.mojom.NotificationGeneratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.NotificationGenerator';
  }

  showNotification(title, message, type) {
    // Method: ShowNotification
    // Call: ShowNotification(title, message, type)
  }

  showToast(text) {
    // Method: ShowToast
    // Call: ShowToast(text)
  }

};

ash.eche_app.mojom.NotificationGeneratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplayStreamHandler
ash.eche_app.mojom.DisplayStreamHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.DisplayStreamHandler';
  }

  startStreaming() {
    // Method: StartStreaming
    // Call: StartStreaming()
  }

  onStreamStatusChanged(status) {
    // Method: OnStreamStatusChanged
    // Call: OnStreamStatusChanged(status)
  }

  setStreamActionObserver(observer) {
    // Method: SetStreamActionObserver
    // Call: SetStreamActionObserver(observer)
  }

};

ash.eche_app.mojom.DisplayStreamHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StreamActionObserver
ash.eche_app.mojom.StreamActionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.StreamActionObserver';
  }

  onStreamAction(action) {
    // Method: OnStreamAction
    // Call: OnStreamAction(action)
  }

};

ash.eche_app.mojom.StreamActionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StreamOrientationObserver
ash.eche_app.mojom.StreamOrientationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.StreamOrientationObserver';
  }

  onStreamOrientationChanged(isLandscape) {
    // Method: OnStreamOrientationChanged
    // Call: OnStreamOrientationChanged(isLandscape)
  }

};

ash.eche_app.mojom.StreamOrientationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectionStatusObserver
ash.eche_app.mojom.ConnectionStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.ConnectionStatusObserver';
  }

  onConnectionStatusChanged(status) {
    // Method: OnConnectionStatusChanged
    // Call: OnConnectionStatusChanged(status)
  }

};

ash.eche_app.mojom.ConnectionStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardLayoutHandler
ash.eche_app.mojom.KeyboardLayoutHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.KeyboardLayoutHandler';
  }

  requestCurrentKeyboardLayout() {
    // Method: RequestCurrentKeyboardLayout
    // Call: RequestCurrentKeyboardLayout()
  }

  setKeyboardLayoutObserver(observer) {
    // Method: SetKeyboardLayoutObserver
    // Call: SetKeyboardLayoutObserver(observer)
  }

};

ash.eche_app.mojom.KeyboardLayoutHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardLayoutObserver
ash.eche_app.mojom.KeyboardLayoutObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.eche_app.mojom.KeyboardLayoutObserver';
  }

  onKeyboardLayoutChanged(id, longName, shortName, layoutTag) {
    // Method: OnKeyboardLayoutChanged
    // Call: OnKeyboardLayoutChanged(id, longName, shortName, layoutTag)
  }

};

ash.eche_app.mojom.KeyboardLayoutObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
