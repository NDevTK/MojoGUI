// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/coordination_unit.mojom
// Module: performance_manager.mojom

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
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

performance_manager.mojom.CoordinationUnitTypeSpec = { $: mojo.internal.Enum() };
performance_manager.mojom.DocumentCoordinationUnit = {};
performance_manager.mojom.DocumentCoordinationUnit.$interfaceName = 'performance_manager.mojom.DocumentCoordinationUnit';
performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit = {};
performance_manager.mojom.ProcessCoordinationUnit.$interfaceName = 'performance_manager.mojom.ProcessCoordinationUnit';
performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec = { $: {} };
performance_manager.mojom.ChildProcessCoordinationUnit = {};
performance_manager.mojom.ChildProcessCoordinationUnit.$interfaceName = 'performance_manager.mojom.ChildProcessCoordinationUnit';
performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec = { $: {} };
performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec = { $: {} };

// Enum: CoordinationUnitType
performance_manager.mojom.CoordinationUnitType = {
  kFrame: 0,
  kPage: 1,
  kProcess: 2,
  kSystem: 3,
};

// Interface: DocumentCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_Params', [
      mojo.internal.StructField('state', 0, 0, performance_manager.mojom.LifecycleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_Params', [
      mojo.internal.StructField('has_nonempty_beforeunload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_Params', [
      mojo.internal.StructField('is_ad_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('time_since_navigation_start', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_Params', [
      mojo.internal.StructField('mode', 0, 0, WebMemoryMeasurement.ModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParams', [
      mojo.internal.StructField('measurement', 0, 0, performance_manager.mojom.WebMemoryMeasurementSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_Params', [
    ],
    [[0, 8]]);

performance_manager.mojom.DocumentCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.DocumentCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.DocumentCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.DocumentCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.DocumentCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setNetworkAlmostIdle() {
    return this.$.setNetworkAlmostIdle();
  }
  setLifecycleState(state) {
    return this.$.setLifecycleState(state);
  }
  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    return this.$.setHasNonEmptyBeforeUnload(has_nonempty_beforeunload);
  }
  setHadFormInteraction() {
    return this.$.setHadFormInteraction();
  }
  setHadUserEdits() {
    return this.$.setHadUserEdits();
  }
  onStartedUsingWebRTC() {
    return this.$.onStartedUsingWebRTC();
  }
  onStoppedUsingWebRTC() {
    return this.$.onStoppedUsingWebRTC();
  }
  setIsAdFrame(is_ad_frame) {
    return this.$.setIsAdFrame(is_ad_frame);
  }
  onNonPersistentNotificationCreated() {
    return this.$.onNonPersistentNotificationCreated();
  }
  onFirstContentfulPaint(time_since_navigation_start) {
    return this.$.onFirstContentfulPaint(time_since_navigation_start);
  }
  onWebMemoryMeasurementRequested(mode) {
    return this.$.onWebMemoryMeasurementRequested(mode);
  }
  onFreezingOriginTrialOptOut() {
    return this.$.onFreezingOriginTrialOptOut();
  }
};

performance_manager.mojom.DocumentCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNetworkAlmostIdle() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec,
      null,
      [],
      false);
  }

  setLifecycleState(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec,
      null,
      [state],
      false);
  }

  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec,
      null,
      [has_nonempty_beforeunload],
      false);
  }

  setHadFormInteraction() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec,
      null,
      [],
      false);
  }

  setHadUserEdits() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingWebRTC() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  onStoppedUsingWebRTC() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  setIsAdFrame(is_ad_frame) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec,
      null,
      [is_ad_frame],
      false);
  }

  onNonPersistentNotificationCreated() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec,
      null,
      [],
      false);
  }

  onFirstContentfulPaint(time_since_navigation_start) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec,
      null,
      [time_since_navigation_start],
      false);
  }

  onWebMemoryMeasurementRequested(mode) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec,
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec,
      [mode],
      false);
  }

  onFreezingOriginTrialOptOut() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec,
      null,
      [],
      false);
  }

};

performance_manager.mojom.DocumentCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.DocumentCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.DocumentCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.DocumentCoordinationUnitReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DocumentCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetNetworkAlmostIdle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkAlmostIdle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetLifecycleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLifecycleState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetHasNonEmptyBeforeUnload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasNonEmptyBeforeUnload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetHadFormInteraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHadFormInteraction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetHadUserEdits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHadUserEdits (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnStartedUsingWebRTC
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedUsingWebRTC (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnStoppedUsingWebRTC
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStoppedUsingWebRTC (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetIsAdFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsAdFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnNonPersistentNotificationCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNonPersistentNotificationCreated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnFirstContentfulPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFirstContentfulPaint (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnWebMemoryMeasurementRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebMemoryMeasurementRequested (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnFreezingOriginTrialOptOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFreezingOriginTrialOptOut (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkAlmostIdle');
          const result = this.impl.setNetworkAlmostIdle();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLifecycleState');
          const result = this.impl.setLifecycleState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasNonEmptyBeforeUnload');
          const result = this.impl.setHasNonEmptyBeforeUnload(params.has_nonempty_beforeunload);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHadFormInteraction');
          const result = this.impl.setHadFormInteraction();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHadUserEdits');
          const result = this.impl.setHadUserEdits();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartedUsingWebRTC');
          const result = this.impl.onStartedUsingWebRTC();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStoppedUsingWebRTC');
          const result = this.impl.onStoppedUsingWebRTC();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsAdFrame');
          const result = this.impl.setIsAdFrame(params.is_ad_frame);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNonPersistentNotificationCreated');
          const result = this.impl.onNonPersistentNotificationCreated();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFirstContentfulPaint');
          const result = this.impl.onFirstContentfulPaint(params.time_since_navigation_start);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebMemoryMeasurementRequested');
          const result = this.impl.onWebMemoryMeasurementRequested(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFreezingOriginTrialOptOut');
          const result = this.impl.onFreezingOriginTrialOptOut();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

performance_manager.mojom.DocumentCoordinationUnitReceiver = performance_manager.mojom.DocumentCoordinationUnitReceiver;

performance_manager.mojom.DocumentCoordinationUnitPtr = performance_manager.mojom.DocumentCoordinationUnitRemote;
performance_manager.mojom.DocumentCoordinationUnitRequest = performance_manager.mojom.DocumentCoordinationUnitPendingReceiver;


// Interface: ProcessCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_Params', [
      mojo.internal.StructField('main_thread_task_load_is_low', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_Params', [
      mojo.internal.StructField('description', 0, 0, performance_manager.mojom.V8ContextDescriptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('iframe_attribution_data', 8, 0, performance_manager.mojom.IframeAttributionDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_Params', [
      mojo.internal.StructField('v8_context_token', 0, 0, blink.mojom.V8ContextTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_Params', [
      mojo.internal.StructField('v8_context_token', 0, 0, blink.mojom.V8ContextTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_Params', [
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('iframe_attribution_data', 16, 0, performance_manager.mojom.IframeAttributionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_Params', [
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

performance_manager.mojom.ProcessCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.ProcessCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.ProcessCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.ProcessCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.ProcessCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    return this.$.setMainThreadTaskLoadIsLow(main_thread_task_load_is_low);
  }
  onV8ContextCreated(description, iframe_attribution_data) {
    return this.$.onV8ContextCreated(description, iframe_attribution_data);
  }
  onV8ContextDetached(v8_context_token) {
    return this.$.onV8ContextDetached(v8_context_token);
  }
  onV8ContextDestroyed(v8_context_token) {
    return this.$.onV8ContextDestroyed(v8_context_token);
  }
  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    return this.$.onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data);
  }
  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    return this.$.onRemoteIframeDetached(parent_frame_token, remote_frame_token);
  }
};

performance_manager.mojom.ProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec,
      null,
      [main_thread_task_load_is_low],
      false);
  }

  onV8ContextCreated(description, iframe_attribution_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec,
      null,
      [description, iframe_attribution_data],
      false);
  }

  onV8ContextDetached(v8_context_token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onV8ContextDestroyed(v8_context_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec,
      null,
      [parent_frame_token, remote_frame_token, iframe_attribution_data],
      false);
  }

  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec,
      null,
      [parent_frame_token, remote_frame_token],
      false);
  }

};

performance_manager.mojom.ProcessCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.ProcessCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.ProcessCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.ProcessCoordinationUnitReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProcessCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetMainThreadTaskLoadIsLow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMainThreadTaskLoadIsLow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnV8ContextCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextCreated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnV8ContextDetached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextDetached (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnV8ContextDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextDestroyed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRemoteIframeAttached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemoteIframeAttached (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRemoteIframeDetached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemoteIframeDetached (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMainThreadTaskLoadIsLow');
          const result = this.impl.setMainThreadTaskLoadIsLow(params.main_thread_task_load_is_low);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextCreated');
          const result = this.impl.onV8ContextCreated(params.description, params.iframe_attribution_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextDetached');
          const result = this.impl.onV8ContextDetached(params.v8_context_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextDestroyed');
          const result = this.impl.onV8ContextDestroyed(params.v8_context_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemoteIframeAttached');
          const result = this.impl.onRemoteIframeAttached(params.parent_frame_token, params.remote_frame_token, params.iframe_attribution_data);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemoteIframeDetached');
          const result = this.impl.onRemoteIframeDetached(params.parent_frame_token, params.remote_frame_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

performance_manager.mojom.ProcessCoordinationUnitReceiver = performance_manager.mojom.ProcessCoordinationUnitReceiver;

performance_manager.mojom.ProcessCoordinationUnitPtr = performance_manager.mojom.ProcessCoordinationUnitRemote;
performance_manager.mojom.ProcessCoordinationUnitRequest = performance_manager.mojom.ProcessCoordinationUnitPendingReceiver;


// Interface: ChildProcessCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec, 'performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec, 'performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParams', [
      mojo.internal.StructField('global_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.ChildProcessCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.ChildProcessCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initializeChildProcessCoordination() {
    return this.$.initializeChildProcessCoordination();
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcessCoordinationUnit', [
      { explicit: null },
    ]);
  }

  initializeChildProcessCoordination() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec,
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec,
      [],
      false);
  }

};

performance_manager.mojom.ChildProcessCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.ChildProcessCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.ChildProcessCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.ChildProcessCoordinationUnitReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcessCoordinationUnit', [
      { explicit: null },
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
        
        // Try Method 0: InitializeChildProcessCoordination
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeChildProcessCoordination (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeChildProcessCoordination');
          const result = this.impl.initializeChildProcessCoordination();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec);
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

performance_manager.mojom.ChildProcessCoordinationUnitReceiver = performance_manager.mojom.ChildProcessCoordinationUnitReceiver;

performance_manager.mojom.ChildProcessCoordinationUnitPtr = performance_manager.mojom.ChildProcessCoordinationUnitRemote;
performance_manager.mojom.ChildProcessCoordinationUnitRequest = performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver;

