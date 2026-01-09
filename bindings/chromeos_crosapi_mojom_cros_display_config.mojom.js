// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/cros_display_config.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DisplayConfigResult
crosapi.mojom.DisplayConfigResult = {
  kInvalidOperationError: 0,
  kInvalidDisplayIdError: 1,
  kUnifiedNotEnabledError: 2,
  kPropertyValueOutOfRangeError: 3,
  kNotSupportedOnInternalDisplayError: 4,
  kNegativeValueError: 5,
  kSetDisplayModeError: 6,
  kInvalidDisplayLayoutError: 7,
  kSingleDisplayError: 8,
  kMirrorModeSourceIdError: 9,
  kMirrorModeDestIdError: 10,
  kCalibrationNotAvailableError: 11,
  kCalibrationNotStartedError: 12,
  kCalibrationInProgressError: 13,
  kCalibrationInvalidDataError: 14,
  kCalibrationFailedError: 15,
};

// Enum: DisplayLayoutMode
crosapi.mojom.DisplayLayoutMode = {
  kUnified: 0,
  kMirrored: 1,
};

// Enum: DisplayLayoutPosition
crosapi.mojom.DisplayLayoutPosition = {
  kRight: 0,
  kBottom: 1,
  kLeft: 2,
};

// Enum: DisplayConfigOperation
crosapi.mojom.DisplayConfigOperation = {
  kAdjust: 0,
  kReset: 1,
  kComplete: 2,
  kShowNative: 3,
};

// Enum: DisplayConfigSource
crosapi.mojom.DisplayConfigSource = {
  kPolicy: 0,
};

// Enum: DisplayRotationOptions
crosapi.mojom.DisplayRotationOptions = {
  kZeroDegrees: 0,
  k90Degrees: 1,
  k180Degrees: 2,
  k270Degrees: 3,
};

// Interface: CrosDisplayConfigController
crosapi.mojom.CrosDisplayConfigController = {};

crosapi.mojom.CrosDisplayConfigControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.CrosDisplayConfigControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.CrosDisplayConfigControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.CrosDisplayConfigController.getRemote = function() {
  let remote = new crosapi.mojom.CrosDisplayConfigControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigController',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.CrosDisplayConfigControllerPtr = crosapi.mojom.CrosDisplayConfigControllerRemote;
crosapi.mojom.CrosDisplayConfigControllerRequest = crosapi.mojom.CrosDisplayConfigControllerPendingReceiver;


// Interface: CrosDisplayConfigObserver
crosapi.mojom.CrosDisplayConfigObserver = {};

crosapi.mojom.CrosDisplayConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.CrosDisplayConfigObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.CrosDisplayConfigObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.CrosDisplayConfigObserver.getRemote = function() {
  let remote = new crosapi.mojom.CrosDisplayConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.CrosDisplayConfigObserverPtr = crosapi.mojom.CrosDisplayConfigObserverRemote;
crosapi.mojom.CrosDisplayConfigObserverRequest = crosapi.mojom.CrosDisplayConfigObserverPendingReceiver;

