// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var memory_instrumentation = memory_instrumentation || {};

arc.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };
arc.mojom.PressureLevelSpec = { $: mojo.internal.Enum() };
arc.mojom.RunningAppProcessInfoSpec = { $: {} };
arc.mojom.ArcMemoryDumpSpec = { $: {} };
arc.mojom.LowMemoryKillCountsSpec = { $: {} };
arc.mojom.ProcessInstance = {};
arc.mojom.ProcessInstance.$interfaceName = 'arc.mojom.ProcessInstance';
arc.mojom.ProcessInstance_KillProcess_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec = { $: {} };

// Enum: ProcessState
arc.mojom.ProcessState = {
  UNKNOWN: -1,
  R_UNKNOWN: -1,
  PERSISTENT: 0,
  R_PERSISTENT: 0,
  PERSISTENT_UI: 1,
  R_PERSISTENT_UI: 1,
  TOP: 2,
  R_TOP: 2,
  R_BOUND_TOP: 3,
  FOREGROUND_SERVICE: 3,
  R_FOREGROUND_SERVICE: 4,
  BOUND_FOREGROUND_SERVICE: 4,
  R_BOUND_FOREGROUND_SERVICE: 5,
  IMPORTANT_FOREGROUND: 5,
  R_IMPORTANT_FOREGROUND: 6,
  IMPORTANT_BACKGROUND: 6,
  R_IMPORTANT_BACKGROUND: 7,
  TRANSIENT_BACKGROUND: 7,
  R_TRANSIENT_BACKGROUND: 8,
  BACKUP: 8,
  R_BACKUP: 9,
  SERVICE: 9,
  R_SERVICE: 10,
  RECEIVER: 10,
  R_RECEIVER: 11,
  TOP_SLEEPING: 11,
  R_TOP_SLEEPING: 12,
  HEAVY_WEIGHT: 12,
  R_HEAVY_WEIGHT: 13,
  HOME: 13,
  R_HOME: 14,
  LAST_ACTIVITY: 14,
  R_LAST_ACTIVITY: 15,
  CACHED_ACTIVITY: 15,
  R_CACHED_ACTIVITY: 16,
  CACHED_ACTIVITY_CLIENT: 16,
  R_CACHED_ACTIVITY_CLIENT: 17,
  CACHED_RECENT: 17,
  R_CACHED_RECENT: 18,
  CACHED_EMPTY: 18,
  R_CACHED_EMPTY: 19,
  NONEXISTENT: 19,
  R_NONEXISTENT: 20,
};

// Enum: PressureLevel
arc.mojom.PressureLevel = {
  kForeground: 0,
  kPerceptible: 1,
  kCached: 2,
};

// Struct: RunningAppProcessInfo
mojo.internal.Struct(
    arc.mojom.RunningAppProcessInfoSpec, 'arc.mojom.RunningAppProcessInfo', [
      mojo.internal.StructField('process_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('process_state', 8, 0, arc.mojom.ProcessStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packages', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('last_activity_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_focused', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ArcMemoryDump
mojo.internal.Struct(
    arc.mojom.ArcMemoryDumpSpec, 'arc.mojom.ArcMemoryDump', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('resident_set_kb', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('private_footprint_kb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LowMemoryKillCounts
mojo.internal.Struct(
    arc.mojom.LowMemoryKillCountsSpec, 'arc.mojom.LowMemoryKillCounts', [
      mojo.internal.StructField('guest_oom', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_foreground', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_perceptible', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_cached', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_foreground', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_perceptible', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_cached', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ProcessInstance
mojo.internal.Struct(
    arc.mojom.ProcessInstance_KillProcess_ParamsSpec, 'arc.mojom.ProcessInstance_KillProcess_Params', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_ResponseParams', [
      mojo.internal.StructField('processes', 0, 0, mojo.internal.Array(arc.mojom.RunningAppProcessInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_Params', [
      mojo.internal.StructField('nspids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_Params', [
      mojo.internal.StructField('level', 0, 0, arc.mojom.ProcessStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParams', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_Params', [
      mojo.internal.StructField('level', 0, 0, arc.mojom.PressureLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParams', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParams', [
      mojo.internal.StructField('counts', 0, 0, arc.mojom.LowMemoryKillCountsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ProcessInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ProcessInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ProcessInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ProcessInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ProcessInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ProcessInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessInstance', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
    ]);
  }

  killProcess(pid, reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ProcessInstance_KillProcess_ParamsSpec,
      null,
      [pid, reason],
      false);
  }

  requestProcessList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec,
      arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec,
      [],
      false);
  }

  requestApplicationProcessMemoryInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestSystemProcessMemoryInfo(nspids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec,
      [nspids],
      false);
  }

  applyHostMemoryPressureDeprecated(level, reclaim_target) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  applyHostMemoryPressure(level, reclaim_target) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  requestLowMemoryKillCounts() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec,
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.ProcessInstance.getRemote = function() {
  let remote = new arc.mojom.ProcessInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ProcessInstance',
    'context');
  return remote.$;
};

arc.mojom.ProcessInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProcessInstance', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
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
        
        // Try Method 0: KillProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_KillProcess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KillProcess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestProcessList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestProcessList (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestApplicationProcessMemoryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestApplicationProcessMemoryInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestSystemProcessMemoryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSystemProcessMemoryInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ApplyHostMemoryPressureDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostMemoryPressureDeprecated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ApplyHostMemoryPressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostMemoryPressure (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestLowMemoryKillCounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestLowMemoryKillCounts (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_KillProcess_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.killProcess');
          const result = this.impl.killProcess(params.pid, params.reason);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestProcessList');
          const result = this.impl.requestProcessList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestApplicationProcessMemoryInfo');
          const result = this.impl.requestApplicationProcessMemoryInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSystemProcessMemoryInfo');
          const result = this.impl.requestSystemProcessMemoryInfo(params.nspids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.applyHostMemoryPressureDeprecated');
          const result = this.impl.applyHostMemoryPressureDeprecated(params.level, params.reclaim_target);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.applyHostMemoryPressure');
          const result = this.impl.applyHostMemoryPressure(params.level, params.reclaim_target);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestLowMemoryKillCounts');
          const result = this.impl.requestLowMemoryKillCounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec);
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

arc.mojom.ProcessInstanceReceiver = arc.mojom.ProcessInstanceReceiver;

arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

