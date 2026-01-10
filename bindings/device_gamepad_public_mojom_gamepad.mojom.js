// Auto-generated MojoJS binding
// Source: chromium_src/device/gamepad/public/mojom/gamepad.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.GamepadMappingSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHandSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticActuatorTypeSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticEffectTypeSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticsResultSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadQuaternionSpec = { $: {} };
device.mojom.GamepadVectorSpec = { $: {} };
device.mojom.GamepadButtonSpec = { $: {} };
device.mojom.GamepadTouchSpec = { $: {} };
device.mojom.GamepadPoseSpec = { $: {} };
device.mojom.GamepadHapticActuatorSpec = { $: {} };
device.mojom.GamepadSpec = { $: {} };
device.mojom.GamepadEffectParametersSpec = { $: {} };
device.mojom.GamepadObserver = {};
device.mojom.GamepadObserver.$interfaceName = 'device.mojom.GamepadObserver';
device.mojom.GamepadObserver_GamepadConnected_ParamsSpec = { $: {} };
device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec = { $: {} };
device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor = {};
device.mojom.GamepadMonitor.$interfaceName = 'device.mojom.GamepadMonitor';
device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec = { $: {} };
device.mojom.GamepadMonitor_SetObserver_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager = {};
device.mojom.GamepadHapticsManager.$interfaceName = 'device.mojom.GamepadHapticsManager';
device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    device.mojom.GamepadQuaternionSpec, 'device.mojom.GamepadQuaternion', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('w', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadVector
mojo.internal.Struct(
    device.mojom.GamepadVectorSpec, 'device.mojom.GamepadVector', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadButton
mojo.internal.Struct(
    device.mojom.GamepadButtonSpec, 'device.mojom.GamepadButton', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('pressed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touched', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadTouch
mojo.internal.Struct(
    device.mojom.GamepadTouchSpec, 'device.mojom.GamepadTouch', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('touch_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_width', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_id', 28, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('has_surface_dimensions', 29, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GamepadPose
mojo.internal.Struct(
    device.mojom.GamepadPoseSpec, 'device.mojom.GamepadPose', [
      mojo.internal.StructField('orientation', 0, 0, device.mojom.GamepadQuaternionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('position', 8, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('angular_velocity', 16, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('linear_velocity', 24, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('angular_acceleration', 32, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('linear_acceleration', 40, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: GamepadHapticActuator
mojo.internal.Struct(
    device.mojom.GamepadHapticActuatorSpec, 'device.mojom.GamepadHapticActuator', [
      mojo.internal.StructField('type', 0, 0, device.mojom.GamepadHapticActuatorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Gamepad
mojo.internal.Struct(
    device.mojom.GamepadSpec, 'device.mojom.Gamepad', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('axes', 16, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('buttons', 24, 0, mojo.internal.Array(device.mojom.GamepadButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('vibration_actuator', 32, 0, device.mojom.GamepadHapticActuatorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mapping', 40, 0, device.mojom.GamepadMappingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pose', 48, 0, device.mojom.GamepadPoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hand', 56, 0, device.mojom.GamepadHandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_events', 64, 0, mojo.internal.Array(device.mojom.GamepadTouchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('display_id', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('connected', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: GamepadEffectParameters
mojo.internal.Struct(
    device.mojom.GamepadEffectParametersSpec, 'device.mojom.GamepadEffectParameters', [
      mojo.internal.StructField('duration', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('start_delay', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('strong_magnitude', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('weak_magnitude', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('left_trigger', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('right_trigger', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: GamepadObserver
mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadConnected_ParamsSpec, 'device.mojom.GamepadObserver_GamepadConnected_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec, 'device.mojom.GamepadObserver_GamepadDisconnected_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec, 'device.mojom.GamepadObserver_GamepadRawInputChanged_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [index, gamepad],
      false);
  }

  gamepadDisconnected(index, gamepad) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec,
      null,
      [index, gamepad],
      false);
  }

  gamepadRawInputChanged(index, gamepad) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec,
      null,
      [index, gamepad],
      false);
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

device.mojom.GamepadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GamepadObserver_GamepadConnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gamepadConnected(params.index, params.gamepad);
          break;
        }
        case 1: {
          const params = device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gamepadDisconnected(params.index, params.gamepad);
          break;
        }
        case 2: {
          const params = device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gamepadRawInputChanged(params.index, params.gamepad);
          break;
        }
      }
    });
  }
};

device.mojom.GamepadObserverReceiver = device.mojom.GamepadObserverReceiver;

device.mojom.GamepadObserverPtr = device.mojom.GamepadObserverRemote;
device.mojom.GamepadObserverRequest = device.mojom.GamepadObserverPendingReceiver;


// Interface: GamepadMonitor
mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec, 'device.mojom.GamepadMonitor_GamepadStartPolling_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec, 'device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParams', [
      mojo.internal.StructField('memory_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec, 'device.mojom.GamepadMonitor_GamepadStopPolling_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec, 'device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_SetObserver_ParamsSpec, 'device.mojom.GamepadMonitor_SetObserver_Params', [
      mojo.internal.StructField('gamepad_observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.GamepadObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  gamepadStopPolling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec,
      device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec,
      [],
      false);
  }

  setObserver(gamepad_observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GamepadMonitor_SetObserver_ParamsSpec,
      null,
      [gamepad_observer],
      false);
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

device.mojom.GamepadMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gamepadStartPolling();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gamepadStopPolling();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = device.mojom.GamepadMonitor_SetObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setObserver(params.gamepad_observer);
          break;
        }
      }
    });
  }
};

device.mojom.GamepadMonitorReceiver = device.mojom.GamepadMonitorReceiver;

device.mojom.GamepadMonitorPtr = device.mojom.GamepadMonitorRemote;
device.mojom.GamepadMonitorRequest = device.mojom.GamepadMonitorPendingReceiver;


// Interface: GamepadHapticsManager
mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec, 'device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.GamepadHapticEffectTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, device.mojom.GamepadEffectParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pad_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec, 'device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GamepadHapticsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec, 'device.mojom.GamepadHapticsManager_ResetVibrationActuator_Params', [
      mojo.internal.StructField('pad_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec, 'device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GamepadHapticsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [pad_index, type, params],
      false);
  }

  resetVibrationActuator(pad_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec,
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec,
      [pad_index],
      false);
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

device.mojom.GamepadHapticsManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec.$.decode(message.payload);
          const result = this.impl.playVibrationEffectOnce(params.pad_index, params.type, params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetVibrationActuator(params.pad_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.GamepadHapticsManagerReceiver = device.mojom.GamepadHapticsManagerReceiver;

device.mojom.GamepadHapticsManagerPtr = device.mojom.GamepadHapticsManagerRemote;
device.mojom.GamepadHapticsManagerRequest = device.mojom.GamepadHapticsManagerPendingReceiver;

