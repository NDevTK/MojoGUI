// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/power.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.CpuRestrictionStateSpec = { $: mojo.internal.Enum() };
arc.mojom.DisplayWakeLockTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.WakefulnessModeSpec = { $: mojo.internal.Enum() };
arc.mojom.IdleStateSpec = { $: mojo.internal.Enum() };
arc.mojom.BatterySaverModeStateSpec = { $: {} };
arc.mojom.PowerHost = {};
arc.mojom.PowerHost.$interfaceName = 'arc.mojom.PowerHost';
arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec = { $: {} };
arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec = { $: {} };
arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec = { $: {} };
arc.mojom.PowerHost_IsDisplayOn_ParamsSpec = { $: {} };
arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec = { $: {} };
arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec = { $: {} };
arc.mojom.PowerHost_OnPreAnr_ParamsSpec = { $: {} };
arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec = { $: {} };
arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec = { $: {} };
arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec = { $: {} };
arc.mojom.PowerInstance = {};
arc.mojom.PowerInstance.$interfaceName = 'arc.mojom.PowerInstance';
arc.mojom.PowerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_Suspend_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_Suspend_ResponseParamsSpec = { $: {} };
arc.mojom.PowerInstance_Resume_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec = { $: {} };
arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec = { $: {} };
arc.mojom.PowerInstance_SetIdleState_ParamsSpec = { $: {} };

// Enum: CpuRestrictionState
arc.mojom.CpuRestrictionState = {
  CPU_RESTRICTION_FOREGROUND: 0,
  CPU_RESTRICTION_BACKGROUND: 1,
};

// Enum: DisplayWakeLockType
arc.mojom.DisplayWakeLockType = {
  BRIGHT: 0,
  DIM: 1,
};

// Enum: WakefulnessMode
arc.mojom.WakefulnessMode = {
  UNKNOWN: -1,
  ASLEEP: 0,
  AWAKE: 1,
  DREAMING: 2,
  DOZING: 3,
};

// Enum: IdleState
arc.mojom.IdleState = {
  ACTIVE: 0,
  INACTIVE: 1,
  FORCE_INACTIVE: 2,
};

// Struct: BatterySaverModeState
mojo.internal.Struct(
    arc.mojom.BatterySaverModeStateSpec, 'arc.mojom.BatterySaverModeState', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PowerHost
mojo.internal.Struct(
    arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec, 'arc.mojom.PowerHost_OnAcquireDisplayWakeLock_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.DisplayWakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec, 'arc.mojom.PowerHost_OnReleaseDisplayWakeLock_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.DisplayWakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec, 'arc.mojom.PowerHost_OnWakefulnessChanged_Params', [
      mojo.internal.StructField('mode', 0, 0, arc.mojom.WakefulnessModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_IsDisplayOn_ParamsSpec, 'arc.mojom.PowerHost_IsDisplayOn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec, 'arc.mojom.PowerHost_IsDisplayOn_ResponseParams', [
      mojo.internal.StructField('is_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec, 'arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_OnPreAnr_ParamsSpec, 'arc.mojom.PowerHost_OnPreAnr_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.AnrTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec, 'arc.mojom.PowerHost_OnAnrRecoveryFailed_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.AnrTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec, 'arc.mojom.PowerHost_GetBatterySaverModeState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec, 'arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BatterySaverModeStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [type],
      false);
  }

  onReleaseDisplayWakeLock(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec,
      null,
      [type],
      false);
  }

  onWakefulnessChanged(mode) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec,
      null,
      [mode],
      false);
  }

  isDisplayOn() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PowerHost_IsDisplayOn_ParamsSpec,
      arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec,
      [],
      false);
  }

  onScreenBrightnessUpdateRequest(percent) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec,
      null,
      [percent],
      false);
  }

  onPreAnr(type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.PowerHost_OnPreAnr_ParamsSpec,
      null,
      [type],
      false);
  }

  onAnrRecoveryFailed(type) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec,
      null,
      [type],
      false);
  }

  getBatterySaverModeState() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec,
      arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.PowerHostReceiver = class {
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
          const params = arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAcquireDisplayWakeLock(params.type);
          break;
        }
        case 1: {
          const params = arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReleaseDisplayWakeLock(params.type);
          break;
        }
        case 5: {
          const params = arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWakefulnessChanged(params.mode);
          break;
        }
        case 2: {
          const params = arc.mojom.PowerHost_IsDisplayOn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isDisplayOn();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenBrightnessUpdateRequest(params.percent);
          break;
        }
        case 6: {
          const params = arc.mojom.PowerHost_OnPreAnr_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPreAnr(params.type);
          break;
        }
        case 7: {
          const params = arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAnrRecoveryFailed(params.type);
          break;
        }
        case 8: {
          const params = arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBatterySaverModeState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerHost_GetBatterySaverModeState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.PowerHostReceiver = arc.mojom.PowerHostReceiver;

arc.mojom.PowerHostPtr = arc.mojom.PowerHostRemote;
arc.mojom.PowerHostRequest = arc.mojom.PowerHostPendingReceiver;


// Interface: PowerInstance
mojo.internal.Struct(
    arc.mojom.PowerInstance_Init_ParamsSpec, 'arc.mojom.PowerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PowerHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_Init_ResponseParamsSpec, 'arc.mojom.PowerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec, 'arc.mojom.PowerInstance_SetInteractiveDeprecated_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_Suspend_ParamsSpec, 'arc.mojom.PowerInstance_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_Suspend_ResponseParamsSpec, 'arc.mojom.PowerInstance_Suspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_Resume_ParamsSpec, 'arc.mojom.PowerInstance_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec, 'arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec, 'arc.mojom.PowerInstance_PowerSupplyInfoChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec, 'arc.mojom.PowerInstance_GetWakefulnessMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec, 'arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, arc.mojom.WakefulnessModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec, 'arc.mojom.PowerInstance_OnCpuRestrictionChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.CpuRestrictionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec, 'arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.BatterySaverModeStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PowerInstance_SetIdleState_ParamsSpec, 'arc.mojom.PowerInstance_SetIdleState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.IdleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      arc.mojom.PowerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  setInteractiveDeprecated(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec,
      null,
      [enabled],
      false);
  }

  suspend() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PowerInstance_Suspend_ParamsSpec,
      arc.mojom.PowerInstance_Suspend_ResponseParamsSpec,
      [],
      false);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.PowerInstance_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  updateScreenBrightnessSettings(percent) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec,
      null,
      [percent],
      false);
  }

  powerSupplyInfoChanged() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec,
      null,
      [],
      false);
  }

  getWakefulnessMode() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec,
      arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec,
      [],
      false);
  }

  onCpuRestrictionChanged(state) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  onBatterySaverModeStateChanged(state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  setIdleState(state) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.PowerInstance_SetIdleState_ParamsSpec,
      null,
      [state],
      false);
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

arc.mojom.PowerInstanceReceiver = class {
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
        case 5: {
          const params = arc.mojom.PowerInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInteractiveDeprecated(params.enabled);
          break;
        }
        case 2: {
          const params = arc.mojom.PowerInstance_Suspend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspend();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerInstance_Suspend_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.PowerInstance_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const params = arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateScreenBrightnessSettings(params.percent);
          break;
        }
        case 6: {
          const params = arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.powerSupplyInfoChanged();
          break;
        }
        case 7: {
          const params = arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getWakefulnessMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCpuRestrictionChanged(params.state);
          break;
        }
        case 9: {
          const params = arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBatterySaverModeStateChanged(params.state);
          break;
        }
        case 10: {
          const params = arc.mojom.PowerInstance_SetIdleState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIdleState(params.state);
          break;
        }
      }
    });
  }
};

arc.mojom.PowerInstanceReceiver = arc.mojom.PowerInstanceReceiver;

arc.mojom.PowerInstancePtr = arc.mojom.PowerInstanceRemote;
arc.mojom.PowerInstanceRequest = arc.mojom.PowerInstancePendingReceiver;

