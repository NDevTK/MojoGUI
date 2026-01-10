// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/power.mojom
// Module: arc.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAcquireDisplayWakeLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAcquireDisplayWakeLock');
          const result = this.impl.onAcquireDisplayWakeLock(params.type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnReleaseDisplayWakeLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReleaseDisplayWakeLock');
          const result = this.impl.onReleaseDisplayWakeLock(params.type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnWakefulnessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWakefulnessChanged');
          const result = this.impl.onWakefulnessChanged(params.mode);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_IsDisplayOn_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnScreenBrightnessUpdateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenBrightnessUpdateRequest');
          const result = this.impl.onScreenBrightnessUpdateRequest(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnPreAnr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPreAnr');
          const result = this.impl.onPreAnr(params.type);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_OnAnrRecoveryFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAnrRecoveryFailed');
          const result = this.impl.onAnrRecoveryFailed(params.type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerHost_GetBatterySaverModeState_ParamsSpec.$.structSpec);
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Init_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetInteractiveDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInteractiveDeprecated');
          const result = this.impl.setInteractiveDeprecated(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Suspend_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_UpdateScreenBrightnessSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateScreenBrightnessSettings');
          const result = this.impl.updateScreenBrightnessSettings(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_PowerSupplyInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.powerSupplyInfoChanged');
          const result = this.impl.powerSupplyInfoChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_GetWakefulnessMode_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnCpuRestrictionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCpuRestrictionChanged');
          const result = this.impl.onCpuRestrictionChanged(params.state);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_OnBatterySaverModeStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBatterySaverModeStateChanged');
          const result = this.impl.onBatterySaverModeStateChanged(params.state);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PowerInstance_SetIdleState_ParamsSpec.$.structSpec);
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

