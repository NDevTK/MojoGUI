// Auto-generated MojoJS binding
// Source: chromium_src/device/gamepad/public/mojom/gamepad.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GamepadMapping
device.mojom.GamepadMapping = {
  GamepadMappingNone: 0,
  GamepadMappingStandard: 1,
  GamepadMappingXRStandard: 2,
};

// Enum: GamepadHand
device.mojom.GamepadHand = {
  GamepadHandNone: 0,
  GamepadHandLeft: 1,
  GamepadHandRight: 2,
};

// Enum: GamepadHapticActuatorType
device.mojom.GamepadHapticActuatorType = {
  GamepadHapticActuatorTypeVibration: 0,
  GamepadHapticActuatorTypeDualRumble: 1,
  GamepadHapticActuatorTypeTriggerRumble: 2,
};

// Enum: GamepadHapticEffectType
device.mojom.GamepadHapticEffectType = {
  GamepadHapticEffectTypeDualRumble: 0,
  GamepadHapticEffectTypeTriggerRumble: 1,
};

// Enum: GamepadHapticsResult
device.mojom.GamepadHapticsResult = {
  GamepadHapticsResultError: 0,
  GamepadHapticsResultComplete: 1,
  GamepadHapticsResultPreempted: 2,
  GamepadHapticsResultInvalidParameter: 3,
  GamepadHapticsResultNotSupported: 4,
};

// Struct: GamepadQuaternion
device.mojom.GamepadQuaternionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadQuaternion',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'w', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadVector
device.mojom.GamepadVectorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadVector',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadButton
device.mojom.GamepadButtonSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadButton',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'pressed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'touched', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadTouch
device.mojom.GamepadTouchSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadTouch',
      packedSize: 48,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'touch_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'surface_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'surface_width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'surface_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'has_surface_dimensions', packedOffset: 29, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadPose
device.mojom.GamepadPoseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadPose',
      packedSize: 56,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadQuaternionSpec, nullable: true },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true },
        { name: 'angular_velocity', packedOffset: 16, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true },
        { name: 'linear_velocity', packedOffset: 24, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true },
        { name: 'angular_acceleration', packedOffset: 32, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true },
        { name: 'linear_acceleration', packedOffset: 40, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadHapticActuator
device.mojom.GamepadHapticActuatorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticActuator',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticActuatorTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Gamepad
device.mojom.GamepadSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Gamepad',
      packedSize: 96,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'axes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'buttons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'vibration_actuator', packedOffset: 32, packedBitOffset: 0, type: device.mojom.GamepadHapticActuatorSpec, nullable: true },
        { name: 'mapping', packedOffset: 40, packedBitOffset: 0, type: device.mojom.GamepadMappingSpec, nullable: false },
        { name: 'pose', packedOffset: 48, packedBitOffset: 0, type: device.mojom.GamepadPoseSpec, nullable: true },
        { name: 'hand', packedOffset: 56, packedBitOffset: 0, type: device.mojom.GamepadHandSpec, nullable: false },
        { name: 'touch_events', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'display_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'connected', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GamepadEffectParameters
device.mojom.GamepadEffectParametersSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadEffectParameters',
      packedSize: 56,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'start_delay', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'strong_magnitude', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'weak_magnitude', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'left_trigger', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'right_trigger', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: GamepadObserver
device.mojom.GamepadObserver = {};

device.mojom.GamepadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GamepadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gamepadConnected(index, gamepad) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GamepadObserver_GamepadConnected_ParamsSpec,
      null,
      [index, gamepad]);
  }

  gamepadDisconnected(index, gamepad) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec,
      null,
      [index, gamepad]);
  }

  gamepadRawInputChanged(index, gamepad) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec,
      null,
      [index, gamepad]);
  }

};

device.mojom.GamepadObserver.getRemote = function() {
  let remote = new device.mojom.GamepadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for GamepadConnected
device.mojom.GamepadObserver_GamepadConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadConnected_Params',
      packedSize: 24,
      fields: [
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GamepadDisconnected
device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadDisconnected_Params',
      packedSize: 24,
      fields: [
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GamepadRawInputChanged
device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadRawInputChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GamepadObserverPtr = device.mojom.GamepadObserverRemote;
device.mojom.GamepadObserverRequest = device.mojom.GamepadObserverPendingReceiver;


// Interface: GamepadMonitor
device.mojom.GamepadMonitor = {};

device.mojom.GamepadMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GamepadMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gamepadStartPolling() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec,
      device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec,
      []);
  }

  gamepadStopPolling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec,
      null,
      []);
  }

  setObserver(gamepad_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GamepadMonitor_SetObserver_ParamsSpec,
      null,
      [gamepad_observer]);
  }

};

device.mojom.GamepadMonitor.getRemote = function() {
  let remote = new device.mojom.GamepadMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for GamepadStartPolling
device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStartPolling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStartPolling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'memory_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GamepadStopPolling
device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStopPolling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetObserver
device.mojom.GamepadMonitor_SetObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.SetObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'gamepad_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GamepadMonitorPtr = device.mojom.GamepadMonitorRemote;
device.mojom.GamepadMonitorRequest = device.mojom.GamepadMonitorPendingReceiver;


// Interface: GamepadHapticsManager
device.mojom.GamepadHapticsManager = {};

device.mojom.GamepadHapticsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadHapticsManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadHapticsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadHapticsManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadHapticsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GamepadHapticsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  playVibrationEffectOnce(pad_index, type, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec,
      device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec,
      [pad_index, type, params]);
  }

  resetVibrationActuator(pad_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec,
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec,
      [pad_index]);
  }

};

device.mojom.GamepadHapticsManager.getRemote = function() {
  let remote = new device.mojom.GamepadHapticsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadHapticsManager',
    'context');
  return remote.$;
};

// ParamsSpec for PlayVibrationEffectOnce
device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.PlayVibrationEffectOnce_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticEffectTypeSpec, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GamepadEffectParametersSpec, nullable: false },
        { name: 'pad_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.PlayVibrationEffectOnce_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticsResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetVibrationActuator
device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.ResetVibrationActuator_Params',
      packedSize: 16,
      fields: [
        { name: 'pad_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.ResetVibrationActuator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticsResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GamepadHapticsManagerPtr = device.mojom.GamepadHapticsManagerRemote;
device.mojom.GamepadHapticsManagerRequest = device.mojom.GamepadHapticsManagerPendingReceiver;

