// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_service.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraClientType
cros.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
};

// Enum: CameraPrivacySwitchState
cros.mojom.CameraPrivacySwitchState = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2,
};

// Enum: CameraAutoFramingState
cros.mojom.CameraAutoFramingState = {
  ON_SINGLE: 0,
  ON_MULTI: 1,
};

// Enum: KioskVisionError
cros.mojom.KioskVisionError = {
  DLC_ERROR: 0,
  MODEL_ERROR: 1,
};

// Struct: KioskVisionDetection
cros.mojom.KioskVisionDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionDetection',
      packedSize: 24,
      fields: [
        { name: 'timestamp_in_us', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'appearances', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KioskVisionTrack
cros.mojom.KioskVisionTrackSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionTrack',
      packedSize: 40,
      fields: [
        { name: 'person_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'start_timestamp_in_us', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'end_timestamp_in_us', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'appearances', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KioskVisionAppearance
cros.mojom.KioskVisionAppearanceSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionAppearance',
      packedSize: 40,
      fields: [
        { name: 'timestamp_in_us', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'person_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'face', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.KioskVisionFaceDetectionSpec, nullable: true },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: cros.mojom.KioskVisionBodyDetectionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KioskVisionFaceDetection
cros.mojom.KioskVisionFaceDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionFaceDetection',
      packedSize: 40,
      fields: [
        { name: 'confidence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'roll', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'pan', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'tilt', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'box', packedOffset: 32, packedBitOffset: 0, type: cros.mojom.KioskVisionBoundingBoxSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KioskVisionBodyDetection
cros.mojom.KioskVisionBodyDetectionSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionBodyDetection',
      packedSize: 24,
      fields: [
        { name: 'confidence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'box', packedOffset: 16, packedBitOffset: 0, type: cros.mojom.KioskVisionBoundingBoxSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KioskVisionBoundingBox
cros.mojom.KioskVisionBoundingBoxSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.KioskVisionBoundingBox',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'width', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KioskVisionObserver
cros.mojom.KioskVisionObserver = {};

cros.mojom.KioskVisionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.KioskVisionObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.KioskVisionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.KioskVisionObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.KioskVisionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.KioskVisionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.KioskVisionObserver.getRemote = function() {
  let remote = new cros.mojom.KioskVisionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.KioskVisionObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.KioskVisionObserverPtr = cros.mojom.KioskVisionObserverRemote;
cros.mojom.KioskVisionObserverRequest = cros.mojom.KioskVisionObserverPendingReceiver;


// Interface: CameraHalDispatcher
cros.mojom.CameraHalDispatcher = {};

cros.mojom.CameraHalDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraHalDispatcherRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraHalDispatcherPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraHalDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraHalDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.CameraHalDispatcher.getRemote = function() {
  let remote = new cros.mojom.CameraHalDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalDispatcher',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.CameraHalDispatcherPtr = cros.mojom.CameraHalDispatcherRemote;
cros.mojom.CameraHalDispatcherRequest = cros.mojom.CameraHalDispatcherPendingReceiver;


// Interface: CrosCameraServiceObserver
cros.mojom.CrosCameraServiceObserver = {};

cros.mojom.CrosCameraServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServiceObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosCameraServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.CrosCameraServiceObserver.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraServiceObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.CrosCameraServiceObserverPtr = cros.mojom.CrosCameraServiceObserverRemote;
cros.mojom.CrosCameraServiceObserverRequest = cros.mojom.CrosCameraServiceObserverPendingReceiver;


// Interface: CrosCameraService
cros.mojom.CrosCameraService = {};

cros.mojom.CrosCameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosCameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

cros.mojom.CrosCameraService.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraService',
    'context');
  return remote.$;
};

// Legacy compatibility
cros.mojom.CrosCameraServicePtr = cros.mojom.CrosCameraServiceRemote;
cros.mojom.CrosCameraServiceRequest = cros.mojom.CrosCameraServicePendingReceiver;

