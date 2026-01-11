// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/power.mojom
// Module: arc.mojom

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
  onAcquireDisplayWakeLock(type) {
    return this.$.onAcquireDisplayWakeLock(type);
  }
  onReleaseDisplayWakeLock(type) {
    return this.$.onReleaseDisplayWakeLock(type);
  }
  onWakefulnessChanged(mode) {
    return this.$.onWakefulnessChanged(mode);
  }
  isDisplayOn() {
    return this.$.isDisplayOn();
  }
  onScreenBrightnessUpdateRequest(percent) {
    return this.$.onScreenBrightnessUpdateRequest(percent);
  }
  onPreAnr(type) {
    return this.$.onPreAnr(type);
  }
  onAnrRecoveryFailed(type) {
    return this.$.onAnrRecoveryFailed(type);
  }
  getBatterySaverModeState() {
    return this.$.getBatterySaverModeState();
  }
};

arc.mojom.PowerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  onAcquireDisplayWakeLock(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec,
      null,
      [type],
      false);
  }

  onReleaseDisplayWakeLock(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec,
      null,
      [type],
      false);
  }

  onWakefulnessChanged(mode) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec,
      null,
      [mode],
      false);
  }

  isDisplayOn() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.PowerHost_IsDisplayOn_ParamsSpec,
      arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec,
      [],
      false);
  }

  onScreenBrightnessUpdateRequest(percent) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec,
      null,
      [percent],
      false);
  }

  onPreAnr(type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.PowerHost_OnPreAnr_ParamsSpec,
      null,
      [type],
      false);
  }

  onAnrRecoveryFailed(type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec,
      null,
      [type],
      false);
  }

  getBatterySaverModeState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PowerHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec.$.structSpec);
          const result = this.impl.onAcquireDisplayWakeLock(params.type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec.$.structSpec);
          const result = this.impl.onReleaseDisplayWakeLock(params.type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWakefulnessChanged(params.mode);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec.$.structSpec);
          const result = this.impl.isDisplayOn();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerHost_IsDisplayOn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec.$.structSpec);
          const result = this.impl.onScreenBrightnessUpdateRequest(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec.$.structSpec);
          const result = this.impl.onPreAnr(params.type);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onAnrRecoveryFailed(params.type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.PowerHostReceiver = arc.mojom.PowerHostReceiver;

arc.mojom.PowerHostPtr = arc.mojom.PowerHostRemote;
arc.mojom.PowerHostRequest = arc.mojom.PowerHostPendingReceiver;


// Interface: PowerInstance
mojo.internal.Struct(
    arc.mojom.PowerInstance_Init_ParamsSpec, 'arc.mojom.PowerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PowerHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  setInteractiveDeprecated(enabled) {
    return this.$.setInteractiveDeprecated(enabled);
  }
  suspend() {
    return this.$.suspend();
  }
  resume() {
    return this.$.resume();
  }
  updateScreenBrightnessSettings(percent) {
    return this.$.updateScreenBrightnessSettings(percent);
  }
  powerSupplyInfoChanged() {
    return this.$.powerSupplyInfoChanged();
  }
  getWakefulnessMode() {
    return this.$.getWakefulnessMode();
  }
  onCpuRestrictionChanged(state) {
    return this.$.onCpuRestrictionChanged(state);
  }
  onBatterySaverModeStateChanged(state) {
    return this.$.onBatterySaverModeStateChanged(state);
  }
  setIdleState(state) {
    return this.$.setIdleState(state);
  }
};

arc.mojom.PowerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerInstance', [
      { explicit: 5 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PowerInstance_Init_ParamsSpec,
      arc.mojom.PowerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  setInteractiveDeprecated(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec,
      null,
      [enabled],
      false);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.PowerInstance_Suspend_ParamsSpec,
      arc.mojom.PowerInstance_Suspend_ResponseParamsSpec,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.PowerInstance_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  updateScreenBrightnessSettings(percent) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec,
      null,
      [percent],
      false);
  }

  powerSupplyInfoChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec,
      null,
      [],
      false);
  }

  getWakefulnessMode() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec,
      arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec,
      [],
      false);
  }

  onCpuRestrictionChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  onBatterySaverModeStateChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  setIdleState(state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PowerInstance', [
      { explicit: 5 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.setInteractiveDeprecated(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec.$.structSpec);
          const result = this.impl.updateScreenBrightnessSettings(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec.$.structSpec);
          const result = this.impl.powerSupplyInfoChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec.$.structSpec);
          const result = this.impl.getWakefulnessMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PowerInstance_GetWakefulnessMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCpuRestrictionChanged(params.state);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onBatterySaverModeStateChanged(params.state);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec.$.structSpec);
          const result = this.impl.setIdleState(params.state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.PowerInstanceReceiver = arc.mojom.PowerInstanceReceiver;

arc.mojom.PowerInstancePtr = arc.mojom.PowerInstanceRemote;
arc.mojom.PowerInstanceRequest = arc.mojom.PowerInstancePendingReceiver;

