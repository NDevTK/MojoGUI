// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_service.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraClientType
cros.mojom.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
};
cros.mojom.mojom.CameraClientTypeSpec = { $: mojo.internal.Enum() };

// Enum: CameraPrivacySwitchState
cros.mojom.mojom.CameraPrivacySwitchState = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2,
};
cros.mojom.mojom.CameraPrivacySwitchStateSpec = { $: mojo.internal.Enum() };

// Enum: CameraAutoFramingState
cros.mojom.mojom.CameraAutoFramingState = {
  ON_SINGLE: 0,
  ON_MULTI: 1,
};
cros.mojom.mojom.CameraAutoFramingStateSpec = { $: mojo.internal.Enum() };

// Enum: KioskVisionError
cros.mojom.mojom.KioskVisionError = {
  DLC_ERROR: 0,
  MODEL_ERROR: 1,
};
cros.mojom.mojom.KioskVisionErrorSpec = { $: mojo.internal.Enum() };

// Struct: KioskVisionDetection
cros.mojom.mojom.KioskVisionDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionDetection',
      packedSize: 24,
      fields: [
        { name: 'timestamp_in_us', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'appearances', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KioskVisionTrack
cros.mojom.mojom.KioskVisionTrackSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionTrack',
      packedSize: 40,
      fields: [
        { name: 'person_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'start_timestamp_in_us', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'end_timestamp_in_us', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'appearances', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: KioskVisionAppearance
cros.mojom.mojom.KioskVisionAppearanceSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionAppearance',
      packedSize: 40,
      fields: [
        { name: 'timestamp_in_us', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'person_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'face', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.KioskVisionFaceDetectionSpec, nullable: true, minVersion: 0 },
        { name: 'body', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.KioskVisionBodyDetectionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: KioskVisionFaceDetection
cros.mojom.mojom.KioskVisionFaceDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionFaceDetection',
      packedSize: 40,
      fields: [
        { name: 'confidence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'roll', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'pan', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'tilt', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'box', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.KioskVisionBoundingBoxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: KioskVisionBodyDetection
cros.mojom.mojom.KioskVisionBodyDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionBodyDetection',
      packedSize: 24,
      fields: [
        { name: 'confidence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'box', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.KioskVisionBoundingBoxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KioskVisionBoundingBox
cros.mojom.mojom.KioskVisionBoundingBoxSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionBoundingBox',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: KioskVisionObserver
cros.mojom.mojom.KioskVisionObserver = {};

cros.mojom.mojom.KioskVisionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.KioskVisionObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.KioskVisionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.KioskVisionObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.KioskVisionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.KioskVisionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameProcessed(detection) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec,
      null,
      [detection]);
  }

  onTrackCompleted(track) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec,
      null,
      [track]);
  }

  onError(error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.KioskVisionObserver_OnError_ParamsSpec,
      null,
      [error]);
  }

};

cros.mojom.mojom.KioskVisionObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.KioskVisionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.KioskVisionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFrameProcessed
cros.mojom.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionObserver.OnFrameProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'detection', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.KioskVisionDetectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTrackCompleted
cros.mojom.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionObserver.OnTrackCompleted_Params',
      packedSize: 16,
      fields: [
        { name: 'track', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.KioskVisionTrackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
cros.mojom.mojom.KioskVisionObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionObserver.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.KioskVisionErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.KioskVisionObserverPtr = cros.mojom.mojom.KioskVisionObserverRemote;
cros.mojom.mojom.KioskVisionObserverRequest = cros.mojom.mojom.KioskVisionObserverPendingReceiver;


// Interface: CameraHalDispatcher
cros.mojom.mojom.CameraHalDispatcher = {};

cros.mojom.mojom.CameraHalDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraHalDispatcherRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraHalDispatcherPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraHalDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraHalDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerClientWithToken(client, type, auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec,
      cros.mojom.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec,
      [client, type, auth_token]);
  }

};

cros.mojom.mojom.CameraHalDispatcher.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraHalDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalDispatcher',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterClientWithToken
cros.mojom.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraHalDispatcher.RegisterClientWithToken_Params',
      packedSize: 32,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.CameraClientTypeSpec, nullable: false, minVersion: 0 },
        { name: 'auth_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

cros.mojom.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraHalDispatcher.RegisterClientWithToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraHalDispatcherPtr = cros.mojom.mojom.CameraHalDispatcherRemote;
cros.mojom.mojom.CameraHalDispatcherRequest = cros.mojom.mojom.CameraHalDispatcherPendingReceiver;


// Interface: CrosCameraServiceObserver
cros.mojom.mojom.CrosCameraServiceObserver = {};

cros.mojom.mojom.CrosCameraServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosCameraServiceObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosCameraServiceObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosCameraServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosCameraServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cameraDeviceActivityChange(camera_id, opened, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec,
      null,
      [camera_id, opened, type]);
  }

  cameraPrivacySwitchStateChange(state, camera_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec,
      null,
      [state, camera_id]);
  }

  cameraSWPrivacySwitchStateChange(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec,
      null,
      [state]);
  }

  cameraEffectChange(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec,
      null,
      [config]);
  }

  autoFramingStateChange(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec,
      null,
      [state]);
  }

};

cros.mojom.mojom.CrosCameraServiceObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosCameraServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraServiceObserver',
    'context');
  return remote.$;
};

// ParamsSpec for CameraDeviceActivityChange
cros.mojom.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraServiceObserver.CameraDeviceActivityChange_Params',
      packedSize: 24,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'opened', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: cros.mojom.CameraClientTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CameraPrivacySwitchStateChange
cros.mojom.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraServiceObserver.CameraPrivacySwitchStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraPrivacySwitchStateSpec, nullable: false, minVersion: 0 },
        { name: 'camera_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CameraSWPrivacySwitchStateChange
cros.mojom.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraServiceObserver.CameraSWPrivacySwitchStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraPrivacySwitchStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CameraEffectChange
cros.mojom.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraServiceObserver.CameraEffectChange_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.EffectsConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AutoFramingStateChange
cros.mojom.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraServiceObserver.AutoFramingStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraAutoFramingStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosCameraServiceObserverPtr = cros.mojom.mojom.CrosCameraServiceObserverRemote;
cros.mojom.mojom.CrosCameraServiceObserverRequest = cros.mojom.mojom.CrosCameraServiceObserverPendingReceiver;


// Interface: CrosCameraService
cros.mojom.mojom.CrosCameraService = {};

cros.mojom.mojom.CrosCameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosCameraServiceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosCameraServicePendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosCameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosCameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCameraModule(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosCameraService_GetCameraModule_ParamsSpec,
      cros.mojom.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec,
      [type]);
  }

  setTracingEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setAutoFramingState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec,
      null,
      [state]);
  }

  getCameraSWPrivacySwitchState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec,
      cros.mojom.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec,
      []);
  }

  setCameraSWPrivacySwitchState(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec,
      null,
      [state]);
  }

  getAutoFramingSupported() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec,
      cros.mojom.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec,
      []);
  }

  setCameraEffect(config) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.mojom.CrosCameraService_SetCameraEffect_ParamsSpec,
      cros.mojom.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec,
      [config]);
  }

  addCrosCameraServiceObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec,
      null,
      [observer]);
  }

  startKioskVisionDetection(dlc_path, observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cros.mojom.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec,
      null,
      [dlc_path, observer]);
  }

};

cros.mojom.mojom.CrosCameraService.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosCameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraService',
    'context');
  return remote.$;
};

// ParamsSpec for GetCameraModule
cros.mojom.mojom.CrosCameraService_GetCameraModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetCameraModule_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraClientTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetCameraModule_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'camera_module_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTracingEnabled
cros.mojom.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.SetTracingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAutoFramingState
cros.mojom.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.SetAutoFramingState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraAutoFramingStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCameraSWPrivacySwitchState
cros.mojom.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetCameraSWPrivacySwitchState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetCameraSWPrivacySwitchState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraPrivacySwitchStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCameraSWPrivacySwitchState
cros.mojom.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.SetCameraSWPrivacySwitchState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraPrivacySwitchStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAutoFramingSupported
cros.mojom.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetAutoFramingSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.GetAutoFramingSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCameraEffect
cros.mojom.mojom.CrosCameraService_SetCameraEffect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.SetCameraEffect_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.EffectsConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.SetCameraEffect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.SetEffectResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddCrosCameraServiceObserver
cros.mojom.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.AddCrosCameraServiceObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosCameraServiceObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartKioskVisionDetection
cros.mojom.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosCameraService.StartKioskVisionDetection_Params',
      packedSize: 24,
      fields: [
        { name: 'dlc_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.KioskVisionObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosCameraServicePtr = cros.mojom.mojom.CrosCameraServiceRemote;
cros.mojom.mojom.CrosCameraServiceRequest = cros.mojom.mojom.CrosCameraServicePendingReceiver;

