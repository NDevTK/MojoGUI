// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
// Module: device_test.mojom

'use strict';

// Module namespace
var device_test = device_test || {};
device_test.mojom = device_test.mojom || {};


// Enum: Eye
device_test.mojom.Eye = {
  LEFT: 0,
  RIGHT: 1,
  NONE: 2,
};

// Enum: ControllerRole
device_test.mojom.ControllerRole = {
  kControllerRoleInvalid: 0,
  kControllerRoleRight: 1,
  kControllerRoleVoice: 2,
};

// Enum: EventType
device_test.mojom.EventType = {
  kSessionLost: 0,
  kVisibilityVisibleBlurred: 1,
  kInstanceLost: 2,
  kInteractionProfileChanged: 3,
  kNoEvent: 4,
};

// Struct: Color
device_test.mojom.Color = class {
  constructor(values = {}) {
    this.a = values.a !== undefined ? values.a : 0;
  }
};

// Struct: ViewData
device_test.mojom.ViewData = class {
  constructor(values = {}) {
    this.viewport = values.viewport !== undefined ? values.viewport : null;
  }
};

// Struct: DeviceConfig
device_test.mojom.DeviceConfig = class {
  constructor(values = {}) {
    this.interpupillary_distance = values.interpupillary_distance !== undefined ? values.interpupillary_distance : 0;
  }
};

// Struct: ControllerAxisData
device_test.mojom.ControllerAxisData = class {
  constructor(values = {}) {
    this.axis_type = values.axis_type !== undefined ? values.axis_type : 0;
  }
};

// Struct: ControllerFrameData
device_test.mojom.ControllerFrameData = class {
  constructor(values = {}) {
    this.is_valid = values.is_valid !== undefined ? values.is_valid : 0;
  }
};

// Struct: EventData
device_test.mojom.EventData = class {
  constructor(values = {}) {
    this.kInvalid = values.kInvalid !== undefined ? values.kInvalid : 0;
  }
};

// Struct: XRVisibilityMask
device_test.mojom.XRVisibilityMask = class {
  constructor(values = {}) {
    this.indices = values.indices !== undefined ? values.indices : 0;
  }
};

// Interface: XRTestHook
device_test.mojom.XRTestHookPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device_test.mojom.XRTestHook';
  }

  onFrameSubmitted(frame_data) {
    // Method: OnFrameSubmitted
    // Call: OnFrameSubmitted(frame_data)
  }

  waitGetDeviceConfig() {
    // Method: WaitGetDeviceConfig
    return new Promise((resolve) => {
      // Call: WaitGetDeviceConfig()
      resolve({});
    });
  }

  waitGetPresentingPose() {
    // Method: WaitGetPresentingPose
    return new Promise((resolve) => {
      // Call: WaitGetPresentingPose()
      resolve({});
    });
  }

  waitGetMagicWindowPose() {
    // Method: WaitGetMagicWindowPose
    return new Promise((resolve) => {
      // Call: WaitGetMagicWindowPose()
      resolve({});
    });
  }

  waitGetControllerRoleForTrackedDeviceIndex(index) {
    // Method: WaitGetControllerRoleForTrackedDeviceIndex
    return new Promise((resolve) => {
      // Call: WaitGetControllerRoleForTrackedDeviceIndex(index)
      resolve({});
    });
  }

  waitGetControllerData(index) {
    // Method: WaitGetControllerData
    return new Promise((resolve) => {
      // Call: WaitGetControllerData(index)
      resolve({});
    });
  }

  waitGetEventData() {
    // Method: WaitGetEventData
    return new Promise((resolve) => {
      // Call: WaitGetEventData()
      resolve({});
    });
  }

  waitGetCanCreateSession() {
    // Method: WaitGetCanCreateSession
    return new Promise((resolve) => {
      // Call: WaitGetCanCreateSession()
      resolve({});
    });
  }

  waitGetVisibilityMask(view_index) {
    // Method: WaitGetVisibilityMask
    return new Promise((resolve) => {
      // Call: WaitGetVisibilityMask(view_index)
      resolve({});
    });
  }

};

device_test.mojom.XRTestHookRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRServiceTestHook
device_test.mojom.XRServiceTestHookPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device_test.mojom.XRServiceTestHook';
  }

  setTestHook(hook) {
    // Method: SetTestHook
    // Call: SetTestHook(hook)
  }

  terminateDeviceServiceProcessForTesting() {
    // Method: TerminateDeviceServiceProcessForTesting
    // Call: TerminateDeviceServiceProcessForTesting()
  }

};

device_test.mojom.XRServiceTestHookRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
