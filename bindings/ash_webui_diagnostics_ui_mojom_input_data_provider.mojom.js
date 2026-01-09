// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/input_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: KeyEventType
ash.diagnostics.mojom.KeyEventType = {
};

// Enum: TouchDeviceType
ash.diagnostics.mojom.TouchDeviceType = {
};

// Struct: KeyEvent
ash.diagnostics.mojom.KeyEvent = class {
  constructor(values = {}) {
    this.key_code = values.key_code !== undefined ? values.key_code : 0;
    this.scan_code = values.scan_code !== undefined ? values.scan_code : 0;
    this.Generally = values.Generally !== undefined ? values.Generally : null;
    this.F1 = values.F1 !== undefined ? values.F1 : null;
    this.top_row_position = values.top_row_position !== undefined ? values.top_row_position : 0;
  }
};

// Struct: TouchDeviceInfo
ash.diagnostics.mojom.TouchDeviceInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : 0;
    this.testable = values.testable !== undefined ? values.testable : 0;
  }
};

// Struct: ConnectedDevices
ash.diagnostics.mojom.ConnectedDevices = class {
  constructor(values = {}) {
    this.touch_devices = values.touch_devices !== undefined ? values.touch_devices : [];
  }
};

// Interface: KeyboardObserver
ash.diagnostics.mojom.KeyboardObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.KeyboardObserver';
  }

  onKeyEvent(event) {
    // Method: OnKeyEvent
    // Call: OnKeyEvent(event)
  }

  onKeyEventsPaused() {
    // Method: OnKeyEventsPaused
    // Call: OnKeyEventsPaused()
  }

  onKeyEventsResumed() {
    // Method: OnKeyEventsResumed
    // Call: OnKeyEventsResumed()
  }

};

ash.diagnostics.mojom.KeyboardObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InternalDisplayPowerStateObserver
ash.diagnostics.mojom.InternalDisplayPowerStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver';
  }

  onInternalDisplayPowerStateChanged(is_display_on) {
    // Method: OnInternalDisplayPowerStateChanged
    // Call: OnInternalDisplayPowerStateChanged(is_display_on)
  }

};

ash.diagnostics.mojom.InternalDisplayPowerStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TabletModeObserver
ash.diagnostics.mojom.TabletModeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.TabletModeObserver';
  }

  onTabletModeChanged(is_tablet_mode) {
    // Method: OnTabletModeChanged
    // Call: OnTabletModeChanged(is_tablet_mode)
  }

};

ash.diagnostics.mojom.TabletModeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LidStateObserver
ash.diagnostics.mojom.LidStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.LidStateObserver';
  }

  onLidStateChanged(is_lid_open) {
    // Method: OnLidStateChanged
    // Call: OnLidStateChanged(is_lid_open)
  }

};

ash.diagnostics.mojom.LidStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectedDevicesObserver
ash.diagnostics.mojom.ConnectedDevicesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.ConnectedDevicesObserver';
  }

  onKeyboardConnected(new_keyboard) {
    // Method: OnKeyboardConnected
    // Call: OnKeyboardConnected(new_keyboard)
  }

  onKeyboardDisconnected(id) {
    // Method: OnKeyboardDisconnected
    // Call: OnKeyboardDisconnected(id)
  }

  onTouchDeviceConnected(new_touch_device) {
    // Method: OnTouchDeviceConnected
    // Call: OnTouchDeviceConnected(new_touch_device)
  }

  onTouchDeviceDisconnected(id) {
    // Method: OnTouchDeviceDisconnected
    // Call: OnTouchDeviceDisconnected(id)
  }

};

ash.diagnostics.mojom.ConnectedDevicesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InputDataProvider
ash.diagnostics.mojom.InputDataProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.InputDataProvider';
  }

  getConnectedDevices() {
    // Method: GetConnectedDevices
    return new Promise((resolve) => {
      // Call: GetConnectedDevices()
      resolve({});
    });
  }

  observeConnectedDevices(observer) {
    // Method: ObserveConnectedDevices
    // Call: ObserveConnectedDevices(observer)
  }

  observeKeyEvents(id, observer) {
    // Method: ObserveKeyEvents
    // Call: ObserveKeyEvents(id, observer)
  }

  observeTabletMode(observer) {
    // Method: ObserveTabletMode
    return new Promise((resolve) => {
      // Call: ObserveTabletMode(observer)
      resolve({});
    });
  }

  observeLidState(observer) {
    // Method: ObserveLidState
    return new Promise((resolve) => {
      // Call: ObserveLidState(observer)
      resolve({});
    });
  }

  observeInternalDisplayPowerState(observer) {
    // Method: ObserveInternalDisplayPowerState
    // Call: ObserveInternalDisplayPowerState(observer)
  }

  moveAppToTestingScreen(evdev_id) {
    // Method: MoveAppToTestingScreen
    // Call: MoveAppToTestingScreen(evdev_id)
  }

  moveAppBackToPreviousScreen() {
    // Method: MoveAppBackToPreviousScreen
    // Call: MoveAppBackToPreviousScreen()
  }

  setA11yTouchPassthrough(enabled) {
    // Method: SetA11yTouchPassthrough
    // Call: SetA11yTouchPassthrough(enabled)
  }

};

ash.diagnostics.mojom.InputDataProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
