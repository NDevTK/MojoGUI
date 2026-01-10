// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/virtual_device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: SharedMemoryVirtualDevice
video_capture.mojom.mojom.SharedMemoryVirtualDevice = {};

video_capture.mojom.mojom.SharedMemoryVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.SharedMemoryVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.SharedMemoryVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.SharedMemoryVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.SharedMemoryVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.SharedMemoryVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestFrameBuffer(dimension, pixel_format, strides) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec,
      video_capture.mojom.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec,
      [dimension, pixel_format, strides]);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info]);
  }

};

video_capture.mojom.mojom.SharedMemoryVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.mojom.SharedMemoryVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.SharedMemoryVirtualDevice',
    'context');
  return remote.$;
};

// ParamsSpec for RequestFrameBuffer
video_capture.mojom.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.SharedMemoryVirtualDevice.RequestFrameBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'dimension', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoCapturePixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 8, packedBitOffset: 0, type: media.mojom.PlaneStridesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

video_capture.mojom.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.SharedMemoryVirtualDevice.RequestFrameBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameReadyInBuffer
video_capture.mojom.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.SharedMemoryVirtualDevice.OnFrameReadyInBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.SharedMemoryVirtualDevicePtr = video_capture.mojom.mojom.SharedMemoryVirtualDeviceRemote;
video_capture.mojom.mojom.SharedMemoryVirtualDeviceRequest = video_capture.mojom.mojom.SharedMemoryVirtualDevicePendingReceiver;


// Interface: TextureVirtualDevice
video_capture.mojom.mojom.TextureVirtualDevice = {};

video_capture.mojom.mojom.TextureVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.TextureVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.TextureVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.TextureVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.TextureVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.TextureVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewSharedImageBufferHandle(buffer_id, shared_image_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec,
      null,
      [buffer_id, shared_image_handle]);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler]);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id]);
  }

};

video_capture.mojom.mojom.TextureVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.mojom.TextureVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.TextureVirtualDevice',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewSharedImageBufferHandle
video_capture.mojom.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.TextureVirtualDevice.OnNewSharedImageBufferHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'shared_image_handle', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SharedImageBufferHandleSetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFrameAccessHandlerReady
video_capture.mojom.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.TextureVirtualDevice.OnFrameAccessHandlerReady_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_access_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameReadyInBuffer
video_capture.mojom.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.TextureVirtualDevice.OnFrameReadyInBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBufferRetired
video_capture.mojom.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.TextureVirtualDevice.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.TextureVirtualDevicePtr = video_capture.mojom.mojom.TextureVirtualDeviceRemote;
video_capture.mojom.mojom.TextureVirtualDeviceRequest = video_capture.mojom.mojom.TextureVirtualDevicePendingReceiver;


// Interface: GpuMemoryBufferVirtualDevice
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice = {};

video_capture.mojom.mojom.GpuMemoryBufferVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.GpuMemoryBufferVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewGpuMemoryBufferHandle(buffer_id, gmb_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec,
      null,
      [buffer_id, gmb_handle]);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler]);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id]);
  }

};

video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.GpuMemoryBufferVirtualDevice',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewGpuMemoryBufferHandle
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.GpuMemoryBufferVirtualDevice.OnNewGpuMemoryBufferHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'gmb_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFrameAccessHandlerReady
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.GpuMemoryBufferVirtualDevice.OnFrameAccessHandlerReady_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_access_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameReadyInBuffer
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.GpuMemoryBufferVirtualDevice.OnFrameReadyInBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBufferRetired
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.GpuMemoryBufferVirtualDevice.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.GpuMemoryBufferVirtualDevicePtr = video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRemote;
video_capture.mojom.mojom.GpuMemoryBufferVirtualDeviceRequest = video_capture.mojom.mojom.GpuMemoryBufferVirtualDevicePendingReceiver;

