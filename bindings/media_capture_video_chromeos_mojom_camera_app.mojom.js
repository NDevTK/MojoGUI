// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_app.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Effect
cros.mojom.mojom.Effect = {
  kNoEffect: 0,
  kPortraitMode: 1,
};
cros.mojom.mojom.EffectSpec = { $: mojo.internal.Enum() };

// Enum: StreamType
cros.mojom.mojom.StreamType = {
  kPreviewOutput: 0,
  kJpegOutput: 1,
  kJpegPortraitOutput: 2,
  kRecordingOutput: 3,
  kUnknown: 4,
};
cros.mojom.mojom.StreamTypeSpec = { $: mojo.internal.Enum() };

// Enum: GetCameraAppDeviceStatus
cros.mojom.mojom.GetCameraAppDeviceStatus = {
  kSuccess: 0,
  kErrorInvalidId: 1,
};
cros.mojom.mojom.GetCameraAppDeviceStatusSpec = { $: mojo.internal.Enum() };

// Enum: CaptureIntent
cros.mojom.mojom.CaptureIntent = {
  kDefault: 0,
  kVideoRecord: 1,
  kStillCapture: 2,
  kPortraitCapture: 3,
};
cros.mojom.mojom.CaptureIntentSpec = { $: mojo.internal.Enum() };

// Interface: CameraAppDeviceProvider
cros.mojom.mojom.CameraAppDeviceProvider = {};

cros.mojom.mojom.CameraAppDeviceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraAppDeviceProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraAppDeviceProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraAppDeviceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraAppDeviceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec,
      [source_id]);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec,
      []);
  }

  isDeviceInUse(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec,
      [source_id]);
  }

};

cros.mojom.mojom.CameraAppDeviceProvider.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraAppDeviceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetCameraAppDevice
cros.mojom.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.GetCameraAppDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.GetCameraAppDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.GetCameraAppDeviceStatusSpec, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsSupported
cros.mojom.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsDeviceInUse
cros.mojom.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsDeviceInUse_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceProvider.IsDeviceInUse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_use', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraAppDeviceProviderPtr = cros.mojom.mojom.CameraAppDeviceProviderRemote;
cros.mojom.mojom.CameraAppDeviceProviderRequest = cros.mojom.mojom.CameraAppDeviceProviderPendingReceiver;


// Interface: CameraAppDeviceBridge
cros.mojom.mojom.CameraAppDeviceBridge = {};

cros.mojom.mojom.CameraAppDeviceBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraAppDeviceBridgeRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraAppDeviceBridgePendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraAppDeviceBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraAppDeviceBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraAppDevice(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec,
      [device_id]);
  }

  isSupported() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec,
      []);
  }

  setVirtualDeviceEnabled(device_id, enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec,
      [device_id, enabled]);
  }

  isDeviceInUse(device_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec,
      cros.mojom.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec,
      [device_id]);
  }

};

cros.mojom.mojom.CameraAppDeviceBridge.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraAppDeviceBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceBridge',
    'context');
  return remote.$;
};

// ParamsSpec for GetCameraAppDevice
cros.mojom.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.GetCameraAppDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.GetCameraAppDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.GetCameraAppDeviceStatusSpec, nullable: false, minVersion: 0 },
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsSupported
cros.mojom.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVirtualDeviceEnabled
cros.mojom.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.SetVirtualDeviceEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.SetVirtualDeviceEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsDeviceInUse
cros.mojom.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsDeviceInUse_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDeviceBridge.IsDeviceInUse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_use', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraAppDeviceBridgePtr = cros.mojom.mojom.CameraAppDeviceBridgeRemote;
cros.mojom.mojom.CameraAppDeviceBridgeRequest = cros.mojom.mojom.CameraAppDeviceBridgePendingReceiver;


// Interface: CameraAppDevice
cros.mojom.mojom.CameraAppDevice = {};

cros.mojom.mojom.CameraAppDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraAppDeviceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraAppDevicePendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraAppDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraAppDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  takePortraitModePhoto(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec,
      null,
      [observer]);
  }

  setFpsRange(fps_range) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetFpsRange_ParamsSpec,
      cros.mojom.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec,
      [fps_range]);
  }

  setStillCaptureResolution(resolution) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec,
      null,
      [resolution]);
  }

  setCaptureIntent(intent) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec,
      null,
      [intent]);
  }

  addResultMetadataObserver(observer, stream_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec,
      null,
      [observer, stream_type]);
  }

  addCameraEventObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec,
      null,
      [observer]);
  }

  setCameraFrameRotationEnabledAtSource(is_enabled) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec,
      cros.mojom.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec,
      [is_enabled]);
  }

  getCameraFrameRotation() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec,
      cros.mojom.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec,
      []);
  }

  registerDocumentCornersObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec,
      null,
      [observer]);
  }

  setMultipleStreamsEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  registerCameraInfoObserver(observer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      cros.mojom.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec,
      null,
      [observer]);
  }

  setCropRegion(crop_region) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      cros.mojom.mojom.CameraAppDevice_SetCropRegion_ParamsSpec,
      null,
      [crop_region]);
  }

  resetCropRegion() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      cros.mojom.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec,
      null,
      []);
  }

};

cros.mojom.mojom.CameraAppDevice.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraAppDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDevice',
    'context');
  return remote.$;
};

// ParamsSpec for TakePortraitModePhoto
cros.mojom.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.TakePortraitModePhoto_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.StillCaptureResultObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFpsRange
cros.mojom.mojom.CameraAppDevice_SetFpsRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetFpsRange_Params',
      packedSize: 16,
      fields: [
        { name: 'fps_range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetFpsRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStillCaptureResolution
cros.mojom.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetStillCaptureResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'resolution', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCaptureIntent
cros.mojom.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCaptureIntent_Params',
      packedSize: 16,
      fields: [
        { name: 'intent', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CaptureIntentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddResultMetadataObserver
cros.mojom.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.AddResultMetadataObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.ResultMetadataObserverRemote), nullable: false, minVersion: 0 },
        { name: 'stream_type', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.StreamTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddCameraEventObserver
cros.mojom.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.AddCameraEventObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraEventObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCameraFrameRotationEnabledAtSource
cros.mojom.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCameraFrameRotationEnabledAtSource_Params',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCameraFrameRotationEnabledAtSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCameraFrameRotation
cros.mojom.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.GetCameraFrameRotation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.GetCameraFrameRotation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterDocumentCornersObserver
cros.mojom.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.RegisterDocumentCornersObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.DocumentCornersObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMultipleStreamsEnabled
cros.mojom.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetMultipleStreamsEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterCameraInfoObserver
cros.mojom.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.RegisterCameraInfoObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraInfoObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCropRegion
cros.mojom.mojom.CameraAppDevice_SetCropRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.SetCropRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'crop_region', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetCropRegion
cros.mojom.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraAppDevice.ResetCropRegion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraAppDevicePtr = cros.mojom.mojom.CameraAppDeviceRemote;
cros.mojom.mojom.CameraAppDeviceRequest = cros.mojom.mojom.CameraAppDevicePendingReceiver;


// Interface: ResultMetadataObserver
cros.mojom.mojom.ResultMetadataObserver = {};

cros.mojom.mojom.ResultMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.ResultMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.ResultMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.ResultMetadataObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.ResultMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.ResultMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMetadataAvailable(camera_metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec,
      null,
      [camera_metadata]);
  }

};

cros.mojom.mojom.ResultMetadataObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.ResultMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.ResultMetadataObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMetadataAvailable
cros.mojom.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.ResultMetadataObserver.OnMetadataAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_metadata', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.ResultMetadataObserverPtr = cros.mojom.mojom.ResultMetadataObserverRemote;
cros.mojom.mojom.ResultMetadataObserverRequest = cros.mojom.mojom.ResultMetadataObserverPendingReceiver;


// Interface: CameraEventObserver
cros.mojom.mojom.CameraEventObserver = {};

cros.mojom.mojom.CameraEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraEventObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraEventObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShutterDone() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraEventObserver_OnShutterDone_ParamsSpec,
      null,
      []);
  }

};

cros.mojom.mojom.CameraEventObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnShutterDone
cros.mojom.mojom.CameraEventObserver_OnShutterDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraEventObserver.OnShutterDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraEventObserverPtr = cros.mojom.mojom.CameraEventObserverRemote;
cros.mojom.mojom.CameraEventObserverRequest = cros.mojom.mojom.CameraEventObserverPendingReceiver;


// Interface: DocumentCornersObserver
cros.mojom.mojom.DocumentCornersObserver = {};

cros.mojom.mojom.DocumentCornersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.DocumentCornersObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.DocumentCornersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.DocumentCornersObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.DocumentCornersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.DocumentCornersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDocumentCornersUpdated(corners) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec,
      null,
      [corners]);
  }

};

cros.mojom.mojom.DocumentCornersObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.DocumentCornersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.DocumentCornersObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDocumentCornersUpdated
cros.mojom.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.DocumentCornersObserver.OnDocumentCornersUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'corners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.DocumentCornersObserverPtr = cros.mojom.mojom.DocumentCornersObserverRemote;
cros.mojom.mojom.DocumentCornersObserverRequest = cros.mojom.mojom.DocumentCornersObserverPendingReceiver;


// Interface: CameraInfoObserver
cros.mojom.mojom.CameraInfoObserver = {};

cros.mojom.mojom.CameraInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCameraInfoUpdated(camera_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec,
      null,
      [camera_info]);
  }

};

cros.mojom.mojom.CameraInfoObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCameraInfoUpdated
cros.mojom.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraInfoObserver.OnCameraInfoUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_info', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraInfoObserverPtr = cros.mojom.mojom.CameraInfoObserverRemote;
cros.mojom.mojom.CameraInfoObserverRequest = cros.mojom.mojom.CameraInfoObserverPendingReceiver;


// Interface: StillCaptureResultObserver
cros.mojom.mojom.StillCaptureResultObserver = {};

cros.mojom.mojom.StillCaptureResultObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.StillCaptureResultObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.StillCaptureResultObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.StillCaptureResultObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.StillCaptureResultObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.StillCaptureResultObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStillCaptureDone(effect, status, blob) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec,
      null,
      [effect, status, blob]);
  }

};

cros.mojom.mojom.StillCaptureResultObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.StillCaptureResultObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.StillCaptureResultObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStillCaptureDone
cros.mojom.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.StillCaptureResultObserver.OnStillCaptureDone_Params',
      packedSize: 24,
      fields: [
        { name: 'effect', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.EffectSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BlobSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.StillCaptureResultObserverPtr = cros.mojom.mojom.StillCaptureResultObserverRemote;
cros.mojom.mojom.StillCaptureResultObserverRequest = cros.mojom.mojom.StillCaptureResultObserverPendingReceiver;

