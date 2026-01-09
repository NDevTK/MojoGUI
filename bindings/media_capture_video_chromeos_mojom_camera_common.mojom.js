// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_common.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraFacing
cros.mojom.CameraFacing = {
  CAMERA_FACING_BACK: 0,
  CAMERA_FACING_FRONT: 1,
  CAMERA_FACING_EXTERNAL: 2,
  CAMERA_FACING_VIRTUAL_BACK: 3,
  CAMERA_FACING_VIRTUAL_FRONT: 4,
  CAMERA_FACING_VIRTUAL_EXTERNAL: 5,
};

// Enum: CameraDeviceStatus
cros.mojom.CameraDeviceStatus = {
  CAMERA_DEVICE_STATUS_NOT_PRESENT: 0,
  CAMERA_DEVICE_STATUS_PRESENT: 1,
  CAMERA_DEVICE_STATUS_ENUMERATING: 2,
};

// Enum: TorchModeStatus
cros.mojom.TorchModeStatus = {
  TORCH_MODE_STATUS_NOT_AVAILABLE: 0,
  TORCH_MODE_STATUS_AVAILABLE_OFF: 1,
  TORCH_MODE_STATUS_AVAILABLE_ON: 2,
};

// Struct: CameraResourceCost
cros.mojom.CameraResourceCost = class {
  constructor(values = {}) {
    this.resource_cost = values.resource_cost !== undefined ? values.resource_cost : 0;
  }
};

// Struct: CameraInfo
cros.mojom.CameraInfo = class {
  constructor(values = {}) {
    this.conflicting_devices = values.conflicting_devices !== undefined ? values.conflicting_devices : 0;
  }
};

// Interface: CameraModuleCallbacks
cros.mojom.CameraModuleCallbacksPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraModuleCallbacks';
  }

  cameraDeviceStatusChange() {
    // Method: CameraDeviceStatusChange
    // Call: CameraDeviceStatusChange()
  }

  0(camera_id, new_status) {
    // Method: 0
    // Call: 0(camera_id, new_status)
  }

  torchModeStatusChange() {
    // Method: TorchModeStatusChange
    // Call: TorchModeStatusChange()
  }

  1(camera_id, new_status) {
    // Method: 1
    // Call: 1(camera_id, new_status)
  }

};

cros.mojom.CameraModuleCallbacksRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VendorTagOps
cros.mojom.VendorTagOpsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.VendorTagOps';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(tag) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(tag)
      resolve({});
    });
  }

  3(tag) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(tag)
      resolve({});
    });
  }

  4(tag) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(tag)
      resolve({});
    });
  }

};

cros.mojom.VendorTagOpsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraModule
cros.mojom.CameraModulePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraModule';
  }

  0(camera_id, device_ops_receiver) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(camera_id, device_ops_receiver)
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(camera_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(camera_id)
      resolve({});
    });
  }

  3(callbacks) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(callbacks)
      resolve({});
    });
  }

  4(camera_id, enabled) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(camera_id, enabled)
      resolve({});
    });
  }

  init() {
    // Method: Init
    // Call: Init()
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  6(vendor_tag_ops_receiver) {
    // Method: 6
    // Call: 6(vendor_tag_ops_receiver)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  7(callbacks) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(callbacks)
      resolve({});
    });
  }

};

cros.mojom.CameraModuleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
