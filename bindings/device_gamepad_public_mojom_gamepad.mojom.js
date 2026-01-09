// Auto-generated MojoJS binding
// Source: chromium_src/device/gamepad/public/mojom/gamepad.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GamepadMapping
device.mojom.GamepadMapping = {
  GamepadMappingNone: 0,
  GamepadMappingStandard: 1,
  GamepadMappingXRStandard: 2,
};

// Enum: GamepadHand
device.mojom.GamepadHand = {
  GamepadHandNone: 0,
  GamepadHandLeft: 1,
  GamepadHandRight: 2,
};

// Enum: GamepadHapticActuatorType
device.mojom.GamepadHapticActuatorType = {
  GamepadHapticActuatorTypeVibration: 0,
  GamepadHapticActuatorTypeDualRumble: 1,
  GamepadHapticActuatorTypeTriggerRumble: 2,
};

// Enum: GamepadHapticEffectType
device.mojom.GamepadHapticEffectType = {
  GamepadHapticEffectTypeDualRumble: 0,
  GamepadHapticEffectTypeTriggerRumble: 1,
};

// Enum: GamepadHapticsResult
device.mojom.GamepadHapticsResult = {
  GamepadHapticsResultError: 0,
  GamepadHapticsResultComplete: 1,
  GamepadHapticsResultPreempted: 2,
  GamepadHapticsResultInvalidParameter: 3,
  GamepadHapticsResultNotSupported: 4,
};

// Struct: GamepadQuaternion
device.mojom.GamepadQuaternion = class {
  constructor(values = {}) {
    this.w = values.w !== undefined ? values.w : 0;
  }
};

// Struct: GamepadVector
device.mojom.GamepadVector = class {
  constructor(values = {}) {
    this.z = values.z !== undefined ? values.z : 0;
  }
};

// Struct: GamepadButton
device.mojom.GamepadButton = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: GamepadTouch
device.mojom.GamepadTouch = class {
  constructor(values = {}) {
    this.has_surface_dimensions = values.has_surface_dimensions !== undefined ? values.has_surface_dimensions : 0;
  }
};

// Struct: GamepadPose
device.mojom.GamepadPose = class {
  constructor(values = {}) {
    this.linear_acceleration = values.linear_acceleration !== undefined ? values.linear_acceleration : null;
  }
};

// Struct: GamepadHapticActuator
device.mojom.GamepadHapticActuator = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: Gamepad
device.mojom.Gamepad = class {
  constructor(values = {}) {
    this.display_id = values.display_id !== undefined ? values.display_id : 0;
  }
};

// Struct: GamepadEffectParameters
device.mojom.GamepadEffectParameters = class {
  constructor(values = {}) {
    this.right_trigger = values.right_trigger !== undefined ? values.right_trigger : 0;
  }
};

// Interface: GamepadObserver
device.mojom.GamepadObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GamepadObserver';
  }

  gamepadConnected(index, gamepad) {
    // Method: GamepadConnected
    // Call: GamepadConnected(index, gamepad)
  }

  gamepadDisconnected(index, gamepad) {
    // Method: GamepadDisconnected
    // Call: GamepadDisconnected(index, gamepad)
  }

  gamepadRawInputChanged(index, gamepad) {
    // Method: GamepadRawInputChanged
    // Call: GamepadRawInputChanged(index, gamepad)
  }

};

device.mojom.GamepadObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GamepadMonitor
device.mojom.GamepadMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GamepadMonitor';
  }

  gamepadStartPolling() {
    // Method: GamepadStartPolling
    return new Promise((resolve) => {
      // Call: GamepadStartPolling()
      resolve({});
    });
  }

  gamepadStopPolling() {
    // Method: GamepadStopPolling
    // Call: GamepadStopPolling()
  }

  setObserver(gamepad_observer) {
    // Method: SetObserver
    // Call: SetObserver(gamepad_observer)
  }

};

device.mojom.GamepadMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GamepadHapticsManager
device.mojom.GamepadHapticsManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GamepadHapticsManager';
  }

  playVibrationEffectOnce(pad_index, type, params) {
    // Method: PlayVibrationEffectOnce
    return new Promise((resolve) => {
      // Call: PlayVibrationEffectOnce(pad_index, type, params)
      resolve({});
    });
  }

  resetVibrationActuator(pad_index) {
    // Method: ResetVibrationActuator
    return new Promise((resolve) => {
      // Call: ResetVibrationActuator(pad_index)
      resolve({});
    });
  }

};

device.mojom.GamepadHapticsManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
