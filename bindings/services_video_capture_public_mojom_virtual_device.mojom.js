// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/virtual_device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: SharedMemoryVirtualDevice
video_capture.mojom.SharedMemoryVirtualDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.SharedMemoryVirtualDevice';
  }

  requestFrameBuffer(dimension, pixel_format, strides) {
    // Method: RequestFrameBuffer
    return new Promise((resolve) => {
      // Call: RequestFrameBuffer(dimension, pixel_format, strides)
      resolve({});
    });
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer(buffer_id, frame_info)
  }

};

video_capture.mojom.SharedMemoryVirtualDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TextureVirtualDevice
video_capture.mojom.TextureVirtualDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.TextureVirtualDevice';
  }

  onNewSharedImageBufferHandle(buffer_id, shared_image_handle) {
    // Method: OnNewSharedImageBufferHandle
    // Call: OnNewSharedImageBufferHandle(buffer_id, shared_image_handle)
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Method: OnFrameAccessHandlerReady
    // Call: OnFrameAccessHandlerReady(frame_access_handler)
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer(buffer_id, frame_info)
  }

  onBufferRetired(buffer_id) {
    // Method: OnBufferRetired
    // Call: OnBufferRetired(buffer_id)
  }

};

video_capture.mojom.TextureVirtualDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GpuMemoryBufferVirtualDevice
video_capture.mojom.GpuMemoryBufferVirtualDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
  }

  onNewGpuMemoryBufferHandle(buffer_id, gmb_handle) {
    // Method: OnNewGpuMemoryBufferHandle
    // Call: OnNewGpuMemoryBufferHandle(buffer_id, gmb_handle)
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Method: OnFrameAccessHandlerReady
    // Call: OnFrameAccessHandlerReady(frame_access_handler)
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer(buffer_id, frame_info)
  }

  onBufferRetired(buffer_id) {
    // Method: OnBufferRetired
    // Call: OnBufferRetired(buffer_id)
  }

};

video_capture.mojom.GpuMemoryBufferVirtualDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
