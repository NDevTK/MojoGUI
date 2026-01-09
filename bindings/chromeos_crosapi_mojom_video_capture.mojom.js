// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_capture.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DeviceAccessResultCode
crosapi.mojom.DeviceAccessResultCode = {
  NOT_INITIALIZED: 0,
  SUCCESS: 1,
  ERROR_DEVICE_NOT_FOUND: 2,
};

// Enum: VideoRotation
crosapi.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};

// Struct: NativePixmapHandle
crosapi.mojom.NativePixmapHandle = class {
  constructor(values = {}) {
    this.modifier@1 = values.modifier@1 !== undefined ? values.modifier@1 : 0;
  }
};

// Struct: GpuMemoryBufferHandle
crosapi.mojom.GpuMemoryBufferHandle = class {
  constructor(values = {}) {
    this.platform_handle@3 = values.platform_handle@3 !== undefined ? values.platform_handle@3 : 0;
  }
};

// Struct: VideoFrameInfo
crosapi.mojom.VideoFrameInfo = class {
  constructor(values = {}) {
    this.reference_time@5 = values.reference_time@5 !== undefined ? values.reference_time@5 : null;
  }
};

// Struct: ReadyFrameInBuffer
crosapi.mojom.ReadyFrameInBuffer = class {
  constructor(values = {}) {
    this.frame_info@3 = values.frame_info@3 !== undefined ? values.frame_info@3 : 0;
  }
};

// Interface: ScopedAccessPermission
crosapi.mojom.ScopedAccessPermissionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ScopedAccessPermission';
  }

};

crosapi.mojom.ScopedAccessPermissionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoFrameHandler
crosapi.mojom.VideoFrameHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.VideoFrameHandler';
  }

};

crosapi.mojom.VideoFrameHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCaptureDevice
crosapi.mojom.VideoCaptureDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.VideoCaptureDevice';
  }

};

crosapi.mojom.VideoCaptureDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCaptureDeviceFactory
crosapi.mojom.VideoCaptureDeviceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.VideoCaptureDeviceFactory';
  }

};

crosapi.mojom.VideoCaptureDeviceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
