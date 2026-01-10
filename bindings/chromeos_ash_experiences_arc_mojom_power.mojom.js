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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(5, 2); // Default ordinal 5 -> Index 2
    this.ordinalMap.set(2, 3); // Default ordinal 2 -> Index 3
    this.ordinalMap.set(3, 4); // Default ordinal 3 -> Index 4
    this.ordinalMap.set(6, 5); // Default ordinal 6 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAcquireDisplayWakeLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAcquireDisplayWakeLock (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnReleaseDisplayWakeLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReleaseDisplayWakeLock (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnWakefulnessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWakefulnessChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsDisplayOn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDisplayOn (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnScreenBrightnessUpdateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenBrightnessUpdateRequest (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnPreAnr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPreAnr (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnAnrRecoveryFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAnrRecoveryFailed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetBatterySaverModeState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBatterySaverModeState (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAcquireDisplayWakeLock');
          const result = this.impl.onAcquireDisplayWakeLock(params.type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onReleaseDisplayWakeLock');
          const result = this.impl.onReleaseDisplayWakeLock(params.type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onWakefulnessChanged');
          const result = this.impl.onWakefulnessChanged(params.mode);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.isDisplayOn');
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
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onScreenBrightnessUpdateRequest');
          const result = this.impl.onScreenBrightnessUpdateRequest(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onPreAnr');
          const result = this.impl.onPreAnr(params.type);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAnrRecoveryFailed');
          const result = this.impl.onAnrRecoveryFailed(params.type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getBatterySaverModeState');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(5, 0); // Default ordinal 5 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(6, 5); // Default ordinal 6 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(9, 8); // Default ordinal 9 -> Index 8
    this.ordinalMap.set(10, 9); // Default ordinal 10 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetInteractiveDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInteractiveDeprecated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateScreenBrightnessSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScreenBrightnessSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PowerSupplyInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PowerSupplyInfoChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetWakefulnessMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWakefulnessMode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnCpuRestrictionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCpuRestrictionChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnBatterySaverModeStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBatterySaverModeStateChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetIdleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIdleState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.init');
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setInteractiveDeprecated');
          const result = this.impl.setInteractiveDeprecated(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.suspend');
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateScreenBrightnessSettings');
          const result = this.impl.updateScreenBrightnessSettings(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.powerSupplyInfoChanged');
          const result = this.impl.powerSupplyInfoChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getWakefulnessMode');
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onCpuRestrictionChanged');
          const result = this.impl.onCpuRestrictionChanged(params.state);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBatterySaverModeStateChanged');
          const result = this.impl.onBatterySaverModeStateChanged(params.state);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setIdleState');
          const result = this.impl.setIdleState(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.PowerInstanceReceiver = arc.mojom.PowerInstanceReceiver;

arc.mojom.PowerInstancePtr = arc.mojom.PowerInstanceRemote;
arc.mojom.PowerInstanceRequest = arc.mojom.PowerInstancePendingReceiver;

