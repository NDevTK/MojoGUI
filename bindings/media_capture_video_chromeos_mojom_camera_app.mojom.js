// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_app.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: Effect
cros.mojom.Effect = {
  kNoEffect: 0,
  kPortraitMode: 1,
};

// Enum: StreamType
cros.mojom.StreamType = {
  kPreviewOutput: 0,
  kJpegOutput: 1,
  kJpegPortraitOutput: 2,
  kRecordingOutput: 3,
  kUnknown: 4,
};

// Enum: GetCameraAppDeviceStatus
cros.mojom.GetCameraAppDeviceStatus = {
  kSuccess: 0,
  kErrorInvalidId: 1,
};

// Enum: CaptureIntent
cros.mojom.CaptureIntent = {
  kDefault: 0,
  kVideoRecord: 1,
  kStillCapture: 2,
  kPortraitCapture: 3,
};

// Interface: CameraAppDeviceProvider
cros.mojom.CameraAppDeviceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec.$,
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec.$,
      [source_id]);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec.$,
      cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec.$,
      []);
  }

  isDeviceInUse(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec.$,
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec.$,
      [source_id]);
  }

};

cros.mojom.CameraAppDeviceProvider.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetCameraAppDevice
cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.GetCameraAppDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.GetCameraAppDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSupported
cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsDeviceInUse
cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsDeviceInUse_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsDeviceInUse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_use', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.CameraAppDeviceProviderPtr = cros.mojom.CameraAppDeviceProviderRemote;
cros.mojom.CameraAppDeviceProviderRequest = cros.mojom.CameraAppDeviceProviderPendingReceiver;


// Interface: CameraAppDeviceBridge
cros.mojom.CameraAppDeviceBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceBridgeRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceBridgePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec.$,
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec.$,
      [device_id]);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec.$,
      cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec.$,
      []);
  }

  setVirtualDeviceEnabled(device_id, enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec.$,
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec.$,
      [device_id, enabled]);
  }

  isDeviceInUse(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec.$,
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec.$,
      [device_id]);
  }

};

cros.mojom.CameraAppDeviceBridge.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceBridge',
    'context');
  return remote.$;
};

// ParamsSpec for GetCameraAppDevice
cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.GetCameraAppDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.GetCameraAppDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSupported
cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVirtualDeviceEnabled
cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.SetVirtualDeviceEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.SetVirtualDeviceEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsDeviceInUse
cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsDeviceInUse_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsDeviceInUse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_use', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.CameraAppDeviceBridgePtr = cros.mojom.CameraAppDeviceBridgeRemote;
cros.mojom.CameraAppDeviceBridgeRequest = cros.mojom.CameraAppDeviceBridgePendingReceiver;


// Interface: CameraAppDevice
cros.mojom.CameraAppDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDevicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraAppDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  takePortraitModePhoto(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec.$,
      null,
      [observer]);
  }

  setFpsRange(fps_range) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec.$,
      cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec.$,
      [fps_range]);
  }

  setStillCaptureResolution(resolution) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec.$,
      null,
      [resolution]);
  }

  setCaptureIntent(intent) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec.$,
      null,
      [intent]);
  }

  addResultMetadataObserver(observer, stream_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec.$,
      null,
      [observer, stream_type]);
  }

  addCameraEventObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  setCameraFrameRotationEnabledAtSource(is_enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec.$,
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec.$,
      [is_enabled]);
  }

  getCameraFrameRotation() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec.$,
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec.$,
      []);
  }

  registerDocumentCornersObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  setMultipleStreamsEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  registerCameraInfoObserver(observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  setCropRegion(crop_region) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec.$,
      null,
      [crop_region]);
  }

  resetCropRegion() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec.$,
      null,
      []);
  }

};

cros.mojom.CameraAppDevice.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDevice',
    'context');
  return remote.$;
};

// ParamsSpec for TakePortraitModePhoto
cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.TakePortraitModePhoto_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFpsRange
cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetFpsRange_Params',
      packedSize: 16,
      fields: [
        { name: 'fps_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetFpsRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStillCaptureResolution
cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetStillCaptureResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'resolution', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCaptureIntent
cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCaptureIntent_Params',
      packedSize: 16,
      fields: [
        { name: 'intent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddResultMetadataObserver
cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.AddResultMetadataObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stream_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddCameraEventObserver
cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.AddCameraEventObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCameraFrameRotationEnabledAtSource
cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCameraFrameRotationEnabledAtSource_Params',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCameraFrameRotationEnabledAtSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCameraFrameRotation
cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.GetCameraFrameRotation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.GetCameraFrameRotation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterDocumentCornersObserver
cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.RegisterDocumentCornersObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMultipleStreamsEnabled
cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetMultipleStreamsEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterCameraInfoObserver
cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.RegisterCameraInfoObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCropRegion
cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCropRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'crop_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetCropRegion
cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.ResetCropRegion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.CameraAppDevicePtr = cros.mojom.CameraAppDeviceRemote;
cros.mojom.CameraAppDeviceRequest = cros.mojom.CameraAppDevicePendingReceiver;


// Interface: ResultMetadataObserver
cros.mojom.ResultMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.ResultMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.ResultMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.ResultMetadataObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.ResultMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.ResultMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMetadataAvailable(camera_metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec.$,
      null,
      [camera_metadata]);
  }

};

cros.mojom.ResultMetadataObserver.getRemote = function() {
  let remote = new cros.mojom.ResultMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.ResultMetadataObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMetadataAvailable
cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.ResultMetadataObserver.OnMetadataAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.ResultMetadataObserverPtr = cros.mojom.ResultMetadataObserverRemote;
cros.mojom.ResultMetadataObserverRequest = cros.mojom.ResultMetadataObserverPendingReceiver;


// Interface: CameraEventObserver
cros.mojom.CameraEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraEventObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraEventObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShutterDone() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec.$,
      null,
      []);
  }

};

cros.mojom.CameraEventObserver.getRemote = function() {
  let remote = new cros.mojom.CameraEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnShutterDone
cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraEventObserver.OnShutterDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.CameraEventObserverPtr = cros.mojom.CameraEventObserverRemote;
cros.mojom.CameraEventObserverRequest = cros.mojom.CameraEventObserverPendingReceiver;


// Interface: DocumentCornersObserver
cros.mojom.DocumentCornersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.DocumentCornersObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.DocumentCornersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.DocumentCornersObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.DocumentCornersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.DocumentCornersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDocumentCornersUpdated(corners) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec.$,
      null,
      [corners]);
  }

};

cros.mojom.DocumentCornersObserver.getRemote = function() {
  let remote = new cros.mojom.DocumentCornersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.DocumentCornersObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDocumentCornersUpdated
cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.DocumentCornersObserver.OnDocumentCornersUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'corners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.DocumentCornersObserverPtr = cros.mojom.DocumentCornersObserverRemote;
cros.mojom.DocumentCornersObserverRequest = cros.mojom.DocumentCornersObserverPendingReceiver;


// Interface: CameraInfoObserver
cros.mojom.CameraInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCameraInfoUpdated(camera_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec.$,
      null,
      [camera_info]);
  }

};

cros.mojom.CameraInfoObserver.getRemote = function() {
  let remote = new cros.mojom.CameraInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCameraInfoUpdated
cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraInfoObserver.OnCameraInfoUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.CameraInfoObserverPtr = cros.mojom.CameraInfoObserverRemote;
cros.mojom.CameraInfoObserverRequest = cros.mojom.CameraInfoObserverPendingReceiver;


// Interface: StillCaptureResultObserver
cros.mojom.StillCaptureResultObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.StillCaptureResultObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.StillCaptureResultObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.StillCaptureResultObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.StillCaptureResultObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.StillCaptureResultObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStillCaptureDone(effect, status, blob) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec.$,
      null,
      [effect, status, blob]);
  }

};

cros.mojom.StillCaptureResultObserver.getRemote = function() {
  let remote = new cros.mojom.StillCaptureResultObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.StillCaptureResultObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStillCaptureDone
cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.StillCaptureResultObserver.OnStillCaptureDone_Params',
      packedSize: 32,
      fields: [
        { name: 'effect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cros.mojom.StillCaptureResultObserverPtr = cros.mojom.StillCaptureResultObserverRemote;
cros.mojom.StillCaptureResultObserverRequest = cros.mojom.StillCaptureResultObserverPendingReceiver;

