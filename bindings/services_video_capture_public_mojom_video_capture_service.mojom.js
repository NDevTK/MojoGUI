// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_capture_service.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: AcceleratorFactory
video_capture.mojom.AcceleratorFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.AcceleratorFactory';
  }

  createJpegDecodeAccelerator(jda) {
    // Method: CreateJpegDecodeAccelerator
    // Call: CreateJpegDecodeAccelerator(jda)
  }

};

video_capture.mojom.AcceleratorFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCaptureService
video_capture.mojom.VideoCaptureServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoCaptureService';
  }

  injectGpuDependencies(accelerator_factory) {
    // Method: InjectGpuDependencies
    // Call: InjectGpuDependencies(accelerator_factory)
  }

  connectToCameraAppDeviceBridge(receiver) {
    // Method: ConnectToCameraAppDeviceBridge
    // Call: ConnectToCameraAppDeviceBridge(receiver)
  }

  bindVideoCaptureDeviceFactory(receiver) {
    // Method: BindVideoCaptureDeviceFactory
    // Call: BindVideoCaptureDeviceFactory(receiver)
  }

  connectToVideoSourceProvider(receiver) {
    // Method: ConnectToVideoSourceProvider
    // Call: ConnectToVideoSourceProvider(receiver)
  }

  bindControlsForTesting(receiver) {
    // Method: BindControlsForTesting
    // Call: BindControlsForTesting(receiver)
  }

  onGpuInfoUpdate(luid) {
    // Method: OnGpuInfoUpdate
    // Call: OnGpuInfoUpdate(luid)
  }

};

video_capture.mojom.VideoCaptureServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
