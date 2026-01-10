// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_capture.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: DeviceAccessResultCode
crosapi.mojom.DeviceAccessResultCode = {
  NOT_INITIALIZED: 0,
  SUCCESS: 1,
  ERROR_DEVICE_NOT_FOUND: 2,
};
crosapi.mojom.DeviceAccessResultCodeSpec = { $: mojo.internal.Enum() };

// Enum: VideoRotation
crosapi.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};
crosapi.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };

// Union: GpuMemoryBufferPlatformHandle
crosapi.mojom.GpuMemoryBufferPlatformHandleSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GpuMemoryBufferPlatformHandle', {
      'shared_memory_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec,
      }},
      'native_pixmap_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.NativePixmapHandleSpec,
      }},
    })
};

// Union: VideoBufferHandle
crosapi.mojom.VideoBufferHandleSpec = { $: mojo.internal.Union(
    'crosapi.mojom.VideoBufferHandle', {
      'shared_buffer_handle': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
      }},
      'gpu_memory_buffer_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.GpuMemoryBufferHandleSpec,
      }},
      'read_only_shmem_region': {
        'ordinal': 2,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec,
      }},
    })
};

// Struct: NativePixmapHandle
crosapi.mojom.NativePixmapHandleSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.NativePixmapHandle',
      packedSize: 24,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.NativePixmapPlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GpuMemoryBufferHandle
crosapi.mojom.GpuMemoryBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GpuMemoryBufferHandle',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'platform_handle', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GpuMemoryBufferPlatformHandleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: VideoFrameInfo
crosapi.mojom.VideoFrameInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameInfo',
      packedSize: 48,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 32, packedBitOffset: 0, type: media.mojom.VideoCapturePixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 36, packedBitOffset: 0, type: crosapi.mojom.VideoRotationSpec, nullable: false, minVersion: 0 },
        { name: 'reference_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ReadyFrameInBuffer
crosapi.mojom.ReadyFrameInBufferSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ReadyFrameInBuffer',
      packedSize: 32,
      fields: [
        { name: 'buffer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_feedback_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'access_permission', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.ScopedAccessPermissionRemote), nullable: false, minVersion: 0 },
        { name: 'frame_info', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: ScopedAccessPermission
crosapi.mojom.ScopedAccessPermission = {};

crosapi.mojom.ScopedAccessPermissionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ScopedAccessPermissionRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ScopedAccessPermission';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ScopedAccessPermissionPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ScopedAccessPermissionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ScopedAccessPermissionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.ScopedAccessPermission.getRemote = function() {
  let remote = new crosapi.mojom.ScopedAccessPermissionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ScopedAccessPermission',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.ScopedAccessPermissionPtr = crosapi.mojom.ScopedAccessPermissionRemote;
crosapi.mojom.ScopedAccessPermissionRequest = crosapi.mojom.ScopedAccessPermissionPendingReceiver;


// Interface: VideoFrameHandler
crosapi.mojom.VideoFrameHandler = {};

crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnNewBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'buffer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.VideoBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ReadyFrameInBufferSpec, nullable: false, minVersion: 0 },
        { name: 'scaled_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ReadyFrameInBufferSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ReadyFrameInBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnFrameDropped_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFrameDropReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'crop_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'sub_capture_target_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnLog_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler_OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCaptureConfigurationChanged() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      []);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle]);
  }

  dEPRECATED_OnFrameReadyInBuffer(buffer, scaled_buffers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer, scaled_buffers]);
  }

  onFrameReadyInBuffer(buffer) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id]);
  }

  onError(error) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error]);
  }

  onFrameDropped(reason) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason]);
  }

  dEPRECATED_OnNewCropVersion(crop_version) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec,
      null,
      [crop_version]);
  }

  dEPRECATED_OnNewSubCaptureTargetVersion(sub_capture_target_version) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec,
      null,
      [sub_capture_target_version]);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version]);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      []);
  }

  onLog(message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message]);
  }

  onStarted() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      []);
  }

  onStartedUsingGpuDecode() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      []);
  }

  onStopped() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new crosapi.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnCaptureConfigurationChanged
crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnCaptureConfigurationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnNewBuffer
crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnNewBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'buffer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.VideoBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DEPRECATED_OnFrameReadyInBuffer
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.DEPRECATED_OnFrameReadyInBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ReadyFrameInBufferSpec, nullable: false, minVersion: 0 },
        { name: 'scaled_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ReadyFrameInBufferSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFrameReadyInBuffer
crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnFrameReadyInBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ReadyFrameInBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBufferRetired
crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameDropped
crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnFrameDropped_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFrameDropReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_OnNewCropVersion
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.DEPRECATED_OnNewCropVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'crop_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_OnNewSubCaptureTargetVersion
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.DEPRECATED_OnNewSubCaptureTargetVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'sub_capture_target_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNewCaptureVersion
crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameWithEmptyRegionCapture
crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnFrameWithEmptyRegionCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnLog
crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnLog_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStarted
crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStartedUsingGpuDecode
crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnStartedUsingGpuDecode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStopped
crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoFrameHandler.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.VideoFrameHandlerPtr = crosapi.mojom.VideoFrameHandlerRemote;
crosapi.mojom.VideoFrameHandlerRequest = crosapi.mojom.VideoFrameHandlerPendingReceiver;


// Interface: VideoCaptureDevice
crosapi.mojom.VideoCaptureDevice = {};

crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_Start_Params',
      packedSize: 24,
      fields: [
        { name: 'requested_settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.VideoFrameHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_MaybeSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_GetPhotoState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_TakePhoto_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_ProcessFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDevicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(requested_settings, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec,
      null,
      [requested_settings, handler]);
  }

  maybeSuspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec,
      null,
      []);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec,
      []);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec,
      [settings]);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec,
      []);
  }

  processFeedback(feedback) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  requestRefreshFrame() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.VideoCaptureDevice.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDevice',
    'context');
  return remote.$;
};

// ParamsSpec for Start
crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.Start_Params',
      packedSize: 24,
      fields: [
        { name: 'requested_settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.VideoFrameHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MaybeSuspend
crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.MaybeSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPhotoState
crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.GetPhotoState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPhotoOptions
crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.SetPhotoOptions_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TakePhoto
crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.TakePhoto_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BlobSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessFeedback
crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.ProcessFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestRefreshFrame
crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDevice.RequestRefreshFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.VideoCaptureDevicePtr = crosapi.mojom.VideoCaptureDeviceRemote;
crosapi.mojom.VideoCaptureDeviceRequest = crosapi.mojom.VideoCaptureDevicePendingReceiver;


// Interface: VideoCaptureDeviceFactory
crosapi.mojom.VideoCaptureDeviceFactory = {};

crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDeviceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceInfos() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec,
      crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec,
      []);
  }

  createDevice(device_id, device_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec,
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec,
      [device_id, device_receiver]);
  }

};

crosapi.mojom.VideoCaptureDeviceFactory.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDeviceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for GetDeviceInfos
crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory.GetDeviceInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory.GetDeviceInfos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoCaptureDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDevice
crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory.CreateDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoCaptureDeviceFactory.CreateDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DeviceAccessResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.VideoCaptureDeviceFactoryPtr = crosapi.mojom.VideoCaptureDeviceFactoryRemote;
crosapi.mojom.VideoCaptureDeviceFactoryRequest = crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver;

