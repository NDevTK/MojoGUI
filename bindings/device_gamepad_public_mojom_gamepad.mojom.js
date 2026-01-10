// Auto-generated MojoJS binding
// Source: chromium_src/device/gamepad/public/mojom/gamepad.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GamepadMapping
device.mojom.mojom.GamepadMapping = {
  GamepadMappingNone: 0,
  GamepadMappingStandard: 1,
  GamepadMappingXRStandard: 2,
};
device.mojom.mojom.GamepadMappingSpec = { $: mojo.internal.Enum() };

// Enum: GamepadHand
device.mojom.mojom.GamepadHand = {
  GamepadHandNone: 0,
  GamepadHandLeft: 1,
  GamepadHandRight: 2,
};
device.mojom.mojom.GamepadHandSpec = { $: mojo.internal.Enum() };

// Enum: GamepadHapticActuatorType
device.mojom.mojom.GamepadHapticActuatorType = {
  GamepadHapticActuatorTypeVibration: 0,
  GamepadHapticActuatorTypeDualRumble: 1,
  GamepadHapticActuatorTypeTriggerRumble: 2,
};
device.mojom.mojom.GamepadHapticActuatorTypeSpec = { $: mojo.internal.Enum() };

// Enum: GamepadHapticEffectType
device.mojom.mojom.GamepadHapticEffectType = {
  GamepadHapticEffectTypeDualRumble: 0,
  GamepadHapticEffectTypeTriggerRumble: 1,
};
device.mojom.mojom.GamepadHapticEffectTypeSpec = { $: mojo.internal.Enum() };

// Enum: GamepadHapticsResult
device.mojom.mojom.GamepadHapticsResult = {
  GamepadHapticsResultError: 0,
  GamepadHapticsResultComplete: 1,
  GamepadHapticsResultPreempted: 2,
  GamepadHapticsResultInvalidParameter: 3,
  GamepadHapticsResultNotSupported: 4,
};
device.mojom.mojom.GamepadHapticsResultSpec = { $: mojo.internal.Enum() };

// Struct: GamepadQuaternion
device.mojom.mojom.GamepadQuaternionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadQuaternion',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'w', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GamepadVector
device.mojom.mojom.GamepadVectorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadVector',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GamepadButton
device.mojom.mojom.GamepadButtonSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadButton',
      packedSize: 24,
      fields: [
        { name: 'pressed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'touched', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GamepadTouch
device.mojom.mojom.GamepadTouchSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadTouch',
      packedSize: 40,
      fields: [
        { name: 'touch_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'surface_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'surface_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'surface_width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'has_surface_dimensions', packedOffset: 29, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: GamepadPose
device.mojom.mojom.GamepadPoseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadPose',
      packedSize: 56,
      fields: [
        { name: 'orientation', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadQuaternionSpec, nullable: true, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true, minVersion: 0 },
        { name: 'angular_velocity', packedOffset: 16, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true, minVersion: 0 },
        { name: 'linear_velocity', packedOffset: 24, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true, minVersion: 0 },
        { name: 'angular_acceleration', packedOffset: 32, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true, minVersion: 0 },
        { name: 'linear_acceleration', packedOffset: 40, packedBitOffset: 0, type: device.mojom.GamepadVectorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: GamepadHapticActuator
device.mojom.mojom.GamepadHapticActuatorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticActuator',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticActuatorTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Gamepad
device.mojom.mojom.GamepadSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Gamepad',
      packedSize: 80,
      fields: [
        { name: 'connected', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'axes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
        { name: 'buttons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.GamepadButtonSpec, false), nullable: false, minVersion: 0 },
        { name: 'vibration_actuator', packedOffset: 32, packedBitOffset: 0, type: device.mojom.GamepadHapticActuatorSpec, nullable: true, minVersion: 0 },
        { name: 'mapping', packedOffset: 56, packedBitOffset: 0, type: device.mojom.GamepadMappingSpec, nullable: false, minVersion: 0 },
        { name: 'pose', packedOffset: 40, packedBitOffset: 0, type: device.mojom.GamepadPoseSpec, nullable: true, minVersion: 0 },
        { name: 'hand', packedOffset: 60, packedBitOffset: 0, type: device.mojom.GamepadHandSpec, nullable: false, minVersion: 0 },
        { name: 'touch_events', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.GamepadTouchSpec, false), nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: GamepadEffectParameters
device.mojom.mojom.GamepadEffectParametersSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadEffectParameters',
      packedSize: 56,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'start_delay', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'strong_magnitude', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'weak_magnitude', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'left_trigger', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'right_trigger', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: GamepadObserver
device.mojom.mojom.GamepadObserver = {};

device.mojom.mojom.GamepadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GamepadObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GamepadObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GamepadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GamepadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gamepadConnected(index, gamepad) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GamepadObserver_GamepadConnected_ParamsSpec,
      null,
      [index, gamepad]);
  }

  gamepadDisconnected(index, gamepad) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec,
      null,
      [index, gamepad]);
  }

  gamepadRawInputChanged(index, gamepad) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec,
      null,
      [index, gamepad]);
  }

};

device.mojom.mojom.GamepadObserver.getRemote = function() {
  let remote = new device.mojom.mojom.GamepadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for GamepadConnected
device.mojom.mojom.GamepadObserver_GamepadConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadConnected_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GamepadDisconnected
device.mojom.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadDisconnected_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GamepadRawInputChanged
device.mojom.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadObserver.GamepadRawInputChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'gamepad', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GamepadObserverPtr = device.mojom.mojom.GamepadObserverRemote;
device.mojom.mojom.GamepadObserverRequest = device.mojom.mojom.GamepadObserverPendingReceiver;


// Interface: GamepadMonitor
device.mojom.mojom.GamepadMonitor = {};

device.mojom.mojom.GamepadMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GamepadMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GamepadMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GamepadMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GamepadMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gamepadStartPolling() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec,
      device.mojom.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec,
      []);
  }

  gamepadStopPolling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec,
      null,
      []);
  }

  setObserver(gamepad_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.GamepadMonitor_SetObserver_ParamsSpec,
      null,
      [gamepad_observer]);
  }

};

device.mojom.mojom.GamepadMonitor.getRemote = function() {
  let remote = new device.mojom.mojom.GamepadMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for GamepadStartPolling
device.mojom.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStartPolling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStartPolling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'memory_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GamepadStopPolling
device.mojom.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.GamepadStopPolling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetObserver
device.mojom.mojom.GamepadMonitor_SetObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadMonitor.SetObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'gamepad_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.GamepadObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GamepadMonitorPtr = device.mojom.mojom.GamepadMonitorRemote;
device.mojom.mojom.GamepadMonitorRequest = device.mojom.mojom.GamepadMonitorPendingReceiver;


// Interface: GamepadHapticsManager
device.mojom.mojom.GamepadHapticsManager = {};

device.mojom.mojom.GamepadHapticsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GamepadHapticsManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadHapticsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GamepadHapticsManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GamepadHapticsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GamepadHapticsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  playVibrationEffectOnce(pad_index, type, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec,
      device.mojom.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec,
      [pad_index, type, params]);
  }

  resetVibrationActuator(pad_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec,
      device.mojom.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec,
      [pad_index]);
  }

};

device.mojom.mojom.GamepadHapticsManager.getRemote = function() {
  let remote = new device.mojom.mojom.GamepadHapticsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadHapticsManager',
    'context');
  return remote.$;
};

// ParamsSpec for PlayVibrationEffectOnce
device.mojom.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.PlayVibrationEffectOnce_Params',
      packedSize: 24,
      fields: [
        { name: 'pad_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: device.mojom.GamepadHapticEffectTypeSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadEffectParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.PlayVibrationEffectOnce_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetVibrationActuator
device.mojom.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.ResetVibrationActuator_Params',
      packedSize: 16,
      fields: [
        { name: 'pad_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GamepadHapticsManager.ResetVibrationActuator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GamepadHapticsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GamepadHapticsManagerPtr = device.mojom.mojom.GamepadHapticsManagerRemote;
device.mojom.mojom.GamepadHapticsManagerRequest = device.mojom.mojom.GamepadHapticsManagerPendingReceiver;

