// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/power.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: CpuRestrictionState
arc.mojom.CpuRestrictionState = {
  CPU_RESTRICTION_FOREGROUND: 0,
  CPU_RESTRICTION_BACKGROUND: 1,
};
arc.mojom.CpuRestrictionStateSpec = { $: mojo.internal.Enum() };

// Enum: DisplayWakeLockType
arc.mojom.DisplayWakeLockType = {
  BRIGHT: 0,
  DIM: 1,
};
arc.mojom.DisplayWakeLockTypeSpec = { $: mojo.internal.Enum() };

// Enum: WakefulnessMode
arc.mojom.WakefulnessMode = {
  UNKNOWN: 0,
  ASLEEP: 1,
  AWAKE: 2,
  DREAMING: 3,
  DOZING: 4,
};
arc.mojom.WakefulnessModeSpec = { $: mojo.internal.Enum() };

// Enum: IdleState
arc.mojom.IdleState = {
  INACTIVE: 0,
  FORCE_INACTIVE: 1,
};
arc.mojom.IdleStateSpec = { $: mojo.internal.Enum() };

// Struct: BatterySaverModeState
arc.mojom.BatterySaverModeStateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BatterySaverModeState',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PowerHost
arc.mojom.PowerHost = {};

arc.mojom.PowerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PowerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PowerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PowerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PowerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PowerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcquireDisplayWakeLock(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec,
      null,
      [type]);
  }

  onReleaseDisplayWakeLock(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec,
      null,
      [type]);
  }

  onWakefulnessChanged(mode) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec,
      null,
      [mode]);
  }

  isDisplayOn() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PowerHost_IsDisplayOn_ParamsSpec,
      arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec,
      []);
  }

  onScreenBrightnessUpdateRequest(percent) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec,
      null,
      [percent]);
  }

  onPreAnr(type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.PowerHost_OnPreAnr_ParamsSpec,
      null,
      [type]);
  }

  onAnrRecoveryFailed(type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec,
      null,
      [type]);
  }

  getBatterySaverModeState() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec,
      arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec,
      []);
  }

};

arc.mojom.PowerHost.getRemote = function() {
  let remote = new arc.mojom.PowerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PowerHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnAcquireDisplayWakeLock
arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnAcquireDisplayWakeLock_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DisplayWakeLockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReleaseDisplayWakeLock
arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnReleaseDisplayWakeLock_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DisplayWakeLockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWakefulnessChanged
arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnWakefulnessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.WakefulnessModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsDisplayOn
arc.mojom.PowerHost_IsDisplayOn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.IsDisplayOn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreenBrightnessUpdateRequest
arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnScreenBrightnessUpdateRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPreAnr
arc.mojom.PowerHost_OnPreAnr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnPreAnr_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AnrTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAnrRecoveryFailed
arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.OnAnrRecoveryFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AnrTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetBatterySaverModeState
arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerHost.GetBatterySaverModeState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BatterySaverModeStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.PowerHostPtr = arc.mojom.PowerHostRemote;
arc.mojom.PowerHostRequest = arc.mojom.PowerHostPendingReceiver;


// Interface: PowerInstance
arc.mojom.PowerInstance = {};

arc.mojom.PowerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PowerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PowerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PowerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PowerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PowerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.PowerInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  setInteractiveDeprecated(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec,
      null,
      [enabled]);
  }

  suspend() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PowerInstance_Suspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.PowerInstance_Resume_ParamsSpec,
      null,
      []);
  }

  updateScreenBrightnessSettings(percent) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec,
      null,
      [percent]);
  }

  powerSupplyInfoChanged() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec,
      null,
      []);
  }

  getWakefulnessMode() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec,
      arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec,
      []);
  }

  onCpuRestrictionChanged(state) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec,
      null,
      [state]);
  }

  onBatterySaverModeStateChanged(state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec,
      null,
      [state]);
  }

  setIdleState(state) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.PowerInstance_SetIdleState_ParamsSpec,
      null,
      [state]);
  }

};

arc.mojom.PowerInstance.getRemote = function() {
  let remote = new arc.mojom.PowerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PowerInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.PowerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInteractiveDeprecated
arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.SetInteractiveDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Suspend
arc.mojom.PowerInstance_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
arc.mojom.PowerInstance_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateScreenBrightnessSettings
arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.UpdateScreenBrightnessSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PowerSupplyInfoChanged
arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.PowerSupplyInfoChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetWakefulnessMode
arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.GetWakefulnessMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.WakefulnessModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCpuRestrictionChanged
arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.OnCpuRestrictionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.CpuRestrictionStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBatterySaverModeStateChanged
arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.OnBatterySaverModeStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BatterySaverModeStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIdleState
arc.mojom.PowerInstance_SetIdleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PowerInstance.SetIdleState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.IdleStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.PowerInstancePtr = arc.mojom.PowerInstanceRemote;
arc.mojom.PowerInstanceRequest = arc.mojom.PowerInstancePendingReceiver;

