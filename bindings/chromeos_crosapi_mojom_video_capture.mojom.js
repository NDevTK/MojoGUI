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

  11() {
    // Method: 11
    // Call: 11()
  }

  0(buffer_id, buffer_handle) {
    // Method: 0
    // Call: 0(buffer_id, buffer_handle)
  }

  onFrameReadyInBuffer() {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  1(buffer, scaled_buffers) {
    // Method: 1
    // Call: 1(buffer, scaled_buffers)
  }

  13(buffer) {
    // Method: 13
    // Call: 13(buffer)
  }

  2(buffer_id) {
    // Method: 2
    // Call: 2(buffer_id)
  }

  3(error) {
    // Method: 3
    // Call: 3(error)
  }

  4(reason) {
    // Method: 4
    // Call: 4(reason)
  }

  10(crop_version) {
    // Method: 10
    // Call: 10(crop_version)
  }

  12(sub_capture_target_version) {
    // Method: 12
    // Call: 12(sub_capture_target_version)
  }

  14(capture_version) {
    // Method: 14
    // Call: 14(capture_version)
  }

  9() {
    // Method: 9
    // Call: 9()
  }

  5(message) {
    // Method: 5
    // Call: 5(message)
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7() {
    // Method: 7
    // Call: 7()
  }

  8() {
    // Method: 8
    // Call: 8()
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

  0(requested_settings, handler) {
    // Method: 0
    // Call: 0(requested_settings, handler)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  4(settings) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(settings)
      resolve({});
    });
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  6(feedback) {
    // Method: 6
    // Call: 6(feedback)
  }

  7() {
    // Method: 7
    // Call: 7()
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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(device_id, device_receiver) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(device_id, device_receiver)
      resolve({});
    });
  }

};

crosapi.mojom.VideoCaptureDeviceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
