// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: GetSourceInfosResult
video_capture.mojom.GetSourceInfosResult = {
};

// Interface: VideoSourceProvider
video_capture.mojom.VideoSourceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoSourceProvider';
  }

  getSourceInfos() {
    // Method: GetSourceInfos
    return new Promise((resolve) => {
      // Call: GetSourceInfos()
      resolve({});
    });
  }

  getVideoSource(source_id, stream) {
    // Method: GetVideoSource
    // Call: GetVideoSource(source_id, stream)
  }

  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    // Method: AddSharedMemoryVirtualDevice
    // Call: AddSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver)
  }

  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    // Method: AddTextureVirtualDevice
    // Call: AddTextureVirtualDevice(device_info, virtual_device_receiver)
  }

  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    // Method: RegisterVirtualDevicesChangedObserver
    // Call: RegisterVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present)
  }

  registerDevicesChangedObserver(observer) {
    // Method: RegisterDevicesChangedObserver
    // Call: RegisterDevicesChangedObserver(observer)
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

video_capture.mojom.VideoSourceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
