// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_capture.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

crosapi.mojom.DeviceAccessResultCodeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };
crosapi.mojom.GpuMemoryBufferPlatformHandleSpec = { $: {} };
crosapi.mojom.VideoBufferHandleSpec = { $: {} };
crosapi.mojom.NativePixmapHandleSpec = { $: {} };
crosapi.mojom.GpuMemoryBufferHandleSpec = { $: {} };
crosapi.mojom.VideoFrameInfoSpec = { $: {} };
crosapi.mojom.ReadyFrameInBufferSpec = { $: {} };
crosapi.mojom.ScopedAccessPermission = {};
crosapi.mojom.ScopedAccessPermission.$interfaceName = 'crosapi.mojom.ScopedAccessPermission';
crosapi.mojom.VideoFrameHandler = {};
crosapi.mojom.VideoFrameHandler.$interfaceName = 'crosapi.mojom.VideoFrameHandler';
crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice = {};
crosapi.mojom.VideoCaptureDevice.$interfaceName = 'crosapi.mojom.VideoCaptureDevice';
crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory = {};
crosapi.mojom.VideoCaptureDeviceFactory.$interfaceName = 'crosapi.mojom.VideoCaptureDeviceFactory';
crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec = { $: {} };

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

// Union: GpuMemoryBufferPlatformHandle
mojo.internal.Union(
    crosapi.mojom.GpuMemoryBufferPlatformHandleSpec, 'crosapi.mojom.GpuMemoryBufferPlatformHandle', {
      'shared_memory_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'native_pixmap_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.NativePixmapHandleSpec.$,
        'nullable': false,
      },
    });

// Union: VideoBufferHandle
mojo.internal.Union(
    crosapi.mojom.VideoBufferHandleSpec, 'crosapi.mojom.VideoBufferHandle', {
      'shared_buffer_handle': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
      'gpu_memory_buffer_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.GpuMemoryBufferHandleSpec.$,
        'nullable': false,
      },
      'read_only_shmem_region': {
        'ordinal': 2,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$,
        'nullable': false,
      },
    });

// Struct: NativePixmapHandle
mojo.internal.Struct(
    crosapi.mojom.NativePixmapHandleSpec, 'crosapi.mojom.NativePixmapHandle', [
      mojo.internal.StructField('planes', 0, 0, mojo.internal.Array(gfx.mojom.NativePixmapPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GpuMemoryBufferHandle
mojo.internal.Struct(
    crosapi.mojom.GpuMemoryBufferHandleSpec, 'crosapi.mojom.GpuMemoryBufferHandle', [
      mojo.internal.StructField('platform_handle', 0, 0, gfx.mojom.GpuMemoryBufferPlatformHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoFrameInfo
mojo.internal.Struct(
    crosapi.mojom.VideoFrameInfoSpec, 'crosapi.mojom.VideoFrameInfo', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, media.mojom.VideoCapturePixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rotation', 32, 0, crosapi.mojom.VideoRotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reference_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ReadyFrameInBuffer
mojo.internal.Struct(
    crosapi.mojom.ReadyFrameInBufferSpec, 'crosapi.mojom.ReadyFrameInBuffer', [
      mojo.internal.StructField('access_permission', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ScopedAccessPermissionSpec), null, false, 0, undefined),
      mojo.internal.StructField('frame_info', 8, 0, crosapi.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_feedback_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ScopedAccessPermission
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

crosapi.mojom.ScopedAccessPermissionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

crosapi.mojom.ScopedAccessPermissionReceiver = crosapi.mojom.ScopedAccessPermissionReceiver;

crosapi.mojom.ScopedAccessPermissionPtr = crosapi.mojom.ScopedAccessPermissionRemote;
crosapi.mojom.ScopedAccessPermissionRequest = crosapi.mojom.ScopedAccessPermissionPendingReceiver;


// Interface: VideoFrameHandler
mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, crosapi.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scaled_buffers', 8, 0, mojo.internal.Array(crosapi.mojom.ReadyFrameInBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, crosapi.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.VideoCaptureErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_Params', [
      mojo.internal.StructField('crop_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_Params', [
      mojo.internal.StructField('sub_capture_target_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStopped_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  dEPRECATED_OnFrameReadyInBuffer(buffer, scaled_buffers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer, scaled_buffers],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  dEPRECATED_OnNewCropVersion(crop_version) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec,
      null,
      [crop_version],
      false);
  }

  dEPRECATED_OnNewSubCaptureTargetVersion(sub_capture_target_version) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec,
      null,
      [sub_capture_target_version],
      false);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      [],
      false);
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

crosapi.mojom.VideoFrameHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 11: {
          const params = crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 0: {
          const params = crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 1: {
          const params = crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_OnFrameReadyInBuffer(params.buffer, params.scaled_buffers);
          break;
        }
        case 13: {
          const params = crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 2: {
          const params = crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 3: {
          const params = crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.error);
          break;
        }
        case 4: {
          const params = crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 10: {
          const params = crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_OnNewCropVersion(params.crop_version);
          break;
        }
        case 12: {
          const params = crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_OnNewSubCaptureTargetVersion(params.sub_capture_target_version);
          break;
        }
        case 14: {
          const params = crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 9: {
          const params = crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 5: {
          const params = crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLog(params.message);
          break;
        }
        case 6: {
          const params = crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStarted();
          break;
        }
        case 7: {
          const params = crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 8: {
          const params = crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStopped();
          break;
        }
      }
    });
  }
};

crosapi.mojom.VideoFrameHandlerReceiver = crosapi.mojom.VideoFrameHandlerReceiver;

crosapi.mojom.VideoFrameHandlerPtr = crosapi.mojom.VideoFrameHandlerRemote;
crosapi.mojom.VideoFrameHandlerRequest = crosapi.mojom.VideoFrameHandlerPendingReceiver;


// Interface: VideoCaptureDevice
mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_Start_Params', [
      mojo.internal.StructField('requested_settings', 0, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceProxy(crosapi.mojom.VideoFrameHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_MaybeSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_GetPhotoState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, media.mojom.PhotoStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_Params', [
      mojo.internal.StructField('settings', 0, 0, media.mojom.PhotoSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_TakePhoto_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_ProcessFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_Params', [
    ],
    [[0, 8]]);

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
      [requested_settings, handler],
      false);
  }

  maybeSuspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec,
      [],
      false);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec,
      [settings],
      false);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec,
      [],
      false);
  }

  processFeedback(feedback) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  requestRefreshFrame() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec,
      null,
      [],
      false);
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

crosapi.mojom.VideoCaptureDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.requested_settings, params.handler);
          break;
        }
        case 1: {
          const params = crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.maybeSuspend();
          break;
        }
        case 2: {
          const params = crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume();
          break;
        }
        case 3: {
          const params = crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPhotoState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPhotoOptions(params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec.$.decode(message.payload);
          const result = this.impl.takePhoto();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.processFeedback(params.feedback);
          break;
        }
        case 7: {
          const params = crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestRefreshFrame();
          break;
        }
      }
    });
  }
};

crosapi.mojom.VideoCaptureDeviceReceiver = crosapi.mojom.VideoCaptureDeviceReceiver;

crosapi.mojom.VideoCaptureDevicePtr = crosapi.mojom.VideoCaptureDeviceRemote;
crosapi.mojom.VideoCaptureDeviceRequest = crosapi.mojom.VideoCaptureDevicePendingReceiver;


// Interface: VideoCaptureDeviceFactory
mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParams', [
      mojo.internal.StructField('device_infos', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_receiver', 8, 0, mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, crosapi.mojom.DeviceAccessResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  createDevice(device_id, device_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec,
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec,
      [device_id, device_receiver],
      false);
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

crosapi.mojom.VideoCaptureDeviceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDevice(params.device_id, params.device_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryReceiver = crosapi.mojom.VideoCaptureDeviceFactoryReceiver;

crosapi.mojom.VideoCaptureDeviceFactoryPtr = crosapi.mojom.VideoCaptureDeviceFactoryRemote;
crosapi.mojom.VideoCaptureDeviceFactoryRequest = crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver;

