// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_app.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: Effect
cros.mojom.Effect = {
};

// Enum: StreamType
cros.mojom.StreamType = {
};

// Enum: GetCameraAppDeviceStatus
cros.mojom.GetCameraAppDeviceStatus = {
};

// Enum: CaptureIntent
cros.mojom.CaptureIntent = {
};

// Interface: CameraAppDeviceProvider
cros.mojom.CameraAppDeviceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraAppDeviceProvider';
  }

  getCameraAppDevice(source_id) {
    // Method: GetCameraAppDevice
    return new Promise((resolve) => {
      // Call: GetCameraAppDevice(source_id)
      resolve({});
    });
  }

  isSupported() {
    // Method: IsSupported
    return new Promise((resolve) => {
      // Call: IsSupported()
      resolve({});
    });
  }

  isDeviceInUse(source_id) {
    // Method: IsDeviceInUse
    return new Promise((resolve) => {
      // Call: IsDeviceInUse(source_id)
      resolve({});
    });
  }

};

cros.mojom.CameraAppDeviceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraAppDeviceBridge
cros.mojom.CameraAppDeviceBridgePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraAppDeviceBridge';
  }

  getCameraAppDevice(device_id) {
    // Method: GetCameraAppDevice
    return new Promise((resolve) => {
      // Call: GetCameraAppDevice(device_id)
      resolve({});
    });
  }

  isSupported() {
    // Method: IsSupported
    return new Promise((resolve) => {
      // Call: IsSupported()
      resolve({});
    });
  }

  setVirtualDeviceEnabled(device_id, enabled) {
    // Method: SetVirtualDeviceEnabled
    return new Promise((resolve) => {
      // Call: SetVirtualDeviceEnabled(device_id, enabled)
      resolve({});
    });
  }

  isDeviceInUse(device_id) {
    // Method: IsDeviceInUse
    return new Promise((resolve) => {
      // Call: IsDeviceInUse(device_id)
      resolve({});
    });
  }

};

cros.mojom.CameraAppDeviceBridgeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraAppDevice
cros.mojom.CameraAppDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraAppDevice';
  }

  takePortraitModePhoto(observer) {
    // Method: TakePortraitModePhoto
    // Call: TakePortraitModePhoto(observer)
  }

  setFpsRange(fps_range) {
    // Method: SetFpsRange
    return new Promise((resolve) => {
      // Call: SetFpsRange(fps_range)
      resolve({});
    });
  }

  setStillCaptureResolution(resolution) {
    // Method: SetStillCaptureResolution
    // Call: SetStillCaptureResolution(resolution)
  }

  setCaptureIntent(intent) {
    // Method: SetCaptureIntent
    // Call: SetCaptureIntent(intent)
  }

  addResultMetadataObserver(observer, stream_type) {
    // Method: AddResultMetadataObserver
    // Call: AddResultMetadataObserver(observer, stream_type)
  }

  addCameraEventObserver(observer) {
    // Method: AddCameraEventObserver
    // Call: AddCameraEventObserver(observer)
  }

  setCameraFrameRotationEnabledAtSource(is_enabled) {
    // Method: SetCameraFrameRotationEnabledAtSource
    return new Promise((resolve) => {
      // Call: SetCameraFrameRotationEnabledAtSource(is_enabled)
      resolve({});
    });
  }

  getCameraFrameRotation() {
    // Method: GetCameraFrameRotation
    return new Promise((resolve) => {
      // Call: GetCameraFrameRotation()
      resolve({});
    });
  }

  registerDocumentCornersObserver(observer) {
    // Method: RegisterDocumentCornersObserver
    // Call: RegisterDocumentCornersObserver(observer)
  }

  setMultipleStreamsEnabled(enabled) {
    // Method: SetMultipleStreamsEnabled
    // Call: SetMultipleStreamsEnabled(enabled)
  }

  registerCameraInfoObserver(observer) {
    // Method: RegisterCameraInfoObserver
    // Call: RegisterCameraInfoObserver(observer)
  }

  setCropRegion(crop_region) {
    // Method: SetCropRegion
    // Call: SetCropRegion(crop_region)
  }

  resetCropRegion() {
    // Method: ResetCropRegion
    // Call: ResetCropRegion()
  }

};

cros.mojom.CameraAppDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ResultMetadataObserver
cros.mojom.ResultMetadataObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.ResultMetadataObserver';
  }

  onMetadataAvailable(camera_metadata) {
    // Method: OnMetadataAvailable
    // Call: OnMetadataAvailable(camera_metadata)
  }

};

cros.mojom.ResultMetadataObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraEventObserver
cros.mojom.CameraEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraEventObserver';
  }

  onShutterDone() {
    // Method: OnShutterDone
    // Call: OnShutterDone()
  }

};

cros.mojom.CameraEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DocumentCornersObserver
cros.mojom.DocumentCornersObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.DocumentCornersObserver';
  }

  onDocumentCornersUpdated(corners) {
    // Method: OnDocumentCornersUpdated
    // Call: OnDocumentCornersUpdated(corners)
  }

};

cros.mojom.DocumentCornersObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraInfoObserver
cros.mojom.CameraInfoObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraInfoObserver';
  }

  onCameraInfoUpdated(camera_info) {
    // Method: OnCameraInfoUpdated
    // Call: OnCameraInfoUpdated(camera_info)
  }

};

cros.mojom.CameraInfoObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StillCaptureResultObserver
cros.mojom.StillCaptureResultObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.StillCaptureResultObserver';
  }

  onStillCaptureDone(effect, status, blob) {
    // Method: OnStillCaptureDone
    // Call: OnStillCaptureDone(effect, status, blob)
  }

};

cros.mojom.StillCaptureResultObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
