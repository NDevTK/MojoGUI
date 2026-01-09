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

};

cros.mojom.CameraModuleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
