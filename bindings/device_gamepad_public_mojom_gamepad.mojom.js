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
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'gamepad', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'gamepad', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'gamepad', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'memory_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'pad_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GamepadHapticsManagerPtr = device.mojom.GamepadHapticsManagerRemote;
device.mojom.GamepadHapticsManagerRequest = device.mojom.GamepadHapticsManagerPendingReceiver;

