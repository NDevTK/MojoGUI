// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
 // Module: blink.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.DeviceThermalStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PeerConnectionInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager = {};
mojo.internal.bindings.blink.mojom.PeerConnectionManager.$interfaceName = 'blink.mojom.PeerConnectionManager';
mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost = {};
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost.$interfaceName = 'blink.mojom.PeerConnectionTrackerHost';
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kSpeedLimitMax = 100;

// Enum: DeviceThermalState
mojo.internal.bindings.blink.mojom.DeviceThermalState = {
  kUnknown: 0,
  kNominal: 1,
  kFair: 2,
  kSerious: 3,
  kCritical: 4,
};

// Struct: PeerConnectionInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionInfoSpec, 'blink.mojom.PeerConnectionInfo', [
      mojo.internal.StructField('arg_rtc_configuration', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PeerConnectionManager
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnThermalStateChange_Params', [
      mojo.internal.StructField('arg_thermal_state', 0, 0, mojo.internal.bindings.blink.mojom.DeviceThermalStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StartEventLog_Params', [
      mojo.internal.StructField('arg_peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_period_ms', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StopEventLog_Params', [
      mojo.internal.StructField('arg_peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StartDataChannelLog_Params', [
      mojo.internal.StructField('arg_peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StopDataChannelLog_Params', [
      mojo.internal.StructField('arg_peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionManager_GetStandardStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec, 'blink.mojom.PeerConnectionManager_GetCurrentState_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.PeerConnectionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PeerConnectionManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PeerConnectionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSuspend() {
    return this.$.onSuspend();
  }
  onThermalStateChange(arg_thermal_state) {
    return this.$.onThermalStateChange(arg_thermal_state);
  }
  startEventLog(arg_peer_connection_local_id, arg_output_period_ms) {
    return this.$.startEventLog(arg_peer_connection_local_id, arg_output_period_ms);
  }
  stopEventLog(arg_peer_connection_local_id) {
    return this.$.stopEventLog(arg_peer_connection_local_id);
  }
  startDataChannelLog(arg_peer_connection_local_id) {
    return this.$.startDataChannelLog(arg_peer_connection_local_id);
  }
  stopDataChannelLog(arg_peer_connection_local_id) {
    return this.$.stopDataChannelLog(arg_peer_connection_local_id);
  }
  getStandardStats() {
    return this.$.getStandardStats();
  }
  getCurrentState() {
    return this.$.getCurrentState();
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeerConnectionManager', [
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

  onSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  onThermalStateChange(arg_thermal_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec,
      null,
      [arg_thermal_state],
      false);
  }

  startEventLog(arg_peer_connection_local_id, arg_output_period_ms) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec,
      null,
      [arg_peer_connection_local_id, arg_output_period_ms],
      false);
  }

  stopEventLog(arg_peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec,
      null,
      [arg_peer_connection_local_id],
      false);
  }

  startDataChannelLog(arg_peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec,
      null,
      [arg_peer_connection_local_id],
      false);
  }

  stopDataChannelLog(arg_peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec,
      null,
      [arg_peer_connection_local_id],
      false);
  }

  getStandardStats() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec,
      null,
      [],
      false);
  }

  getCurrentState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PeerConnectionManager.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PeerConnectionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PeerConnectionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeerConnectionManager', [
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
        
        // Try Method 0: OnSuspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSuspend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnThermalStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnThermalStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartEventLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartEventLog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopEventLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopEventLog (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StartDataChannelLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDataChannelLog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StopDataChannelLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDataChannelLog (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetStandardStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStandardStats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetCurrentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCurrentState (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSuspend');
          const result = this.impl.onSuspend();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onThermalStateChange');
          const result = this.impl.onThermalStateChange(params.arg_thermal_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startEventLog');
          const result = this.impl.startEventLog(params.arg_peer_connection_local_id, params.arg_output_period_ms);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopEventLog');
          const result = this.impl.stopEventLog(params.arg_peer_connection_local_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDataChannelLog');
          const result = this.impl.startDataChannelLog(params.arg_peer_connection_local_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopDataChannelLog');
          const result = this.impl.stopDataChannelLog(params.arg_peer_connection_local_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStandardStats');
          const result = this.impl.getStandardStats();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCurrentState');
          const result = this.impl.getCurrentState();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionManagerReceiver = mojo.internal.bindings.blink.mojom.PeerConnectionManagerReceiver;

mojo.internal.bindings.blink.mojom.PeerConnectionManagerPtr = mojo.internal.bindings.blink.mojom.PeerConnectionManagerRemote;
mojo.internal.bindings.blink.mojom.PeerConnectionManagerRequest = mojo.internal.bindings.blink.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.blink.mojom.PeerConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_Params', [
      mojo.internal.StructField('arg_lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMedia_Params', [
      mojo.internal.StructField('arg_audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_Params', [
      mojo.internal.StructField('arg_stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_Params', [
      mojo.internal.StructField('arg_audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_Params', [
      mojo.internal.StructField('arg_stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_Params', [
      mojo.internal.StructField('arg_output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_Params', [
      mojo.internal.StructField('arg_output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddStandardStats_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionTrackerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPeerConnection(arg_info) {
    return this.$.addPeerConnection(arg_info);
  }
  removePeerConnection(arg_lid) {
    return this.$.removePeerConnection(arg_lid);
  }
  updatePeerConnection(arg_lid, arg_type, arg_value) {
    return this.$.updatePeerConnection(arg_lid, arg_type, arg_value);
  }
  onPeerConnectionSessionIdSet(arg_lid, arg_session_id) {
    return this.$.onPeerConnectionSessionIdSet(arg_lid, arg_session_id);
  }
  getUserMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints) {
    return this.$.getUserMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints);
  }
  getUserMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info) {
    return this.$.getUserMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info);
  }
  getUserMediaFailure(arg_request_id, arg_error, arg_error_message) {
    return this.$.getUserMediaFailure(arg_request_id, arg_error, arg_error_message);
  }
  getDisplayMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints) {
    return this.$.getDisplayMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints);
  }
  getDisplayMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info) {
    return this.$.getDisplayMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info);
  }
  getDisplayMediaFailure(arg_request_id, arg_error, arg_error_message) {
    return this.$.getDisplayMediaFailure(arg_request_id, arg_error, arg_error_message);
  }
  webRtcEventLogWrite(arg_lid, arg_output) {
    return this.$.webRtcEventLogWrite(arg_lid, arg_output);
  }
  webRtcDataChannelLogWrite(arg_lid, arg_output) {
    return this.$.webRtcDataChannelLogWrite(arg_lid, arg_output);
  }
  addStandardStats(arg_lid, arg_value) {
    return this.$.addStandardStats(arg_lid, arg_value);
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeerConnectionTrackerHost', [
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
      { explicit: null },
    ]);
  }

  addPeerConnection(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  removePeerConnection(arg_lid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec,
      null,
      [arg_lid],
      false);
  }

  updatePeerConnection(arg_lid, arg_type, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec,
      null,
      [arg_lid, arg_type, arg_value],
      false);
  }

  onPeerConnectionSessionIdSet(arg_lid, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec,
      null,
      [arg_lid, arg_session_id],
      false);
  }

  getUserMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec,
      null,
      [arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints],
      false);
  }

  getUserMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec,
      null,
      [arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info],
      false);
  }

  getUserMediaFailure(arg_request_id, arg_error, arg_error_message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec,
      null,
      [arg_request_id, arg_error, arg_error_message],
      false);
  }

  getDisplayMedia(arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec,
      null,
      [arg_request_id, arg_audio, arg_video, arg_audio_constraints, arg_video_constraints],
      false);
  }

  getDisplayMediaSuccess(arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec,
      null,
      [arg_request_id, arg_stream_id, arg_audio_track_info, arg_video_track_info],
      false);
  }

  getDisplayMediaFailure(arg_request_id, arg_error, arg_error_message) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec,
      null,
      [arg_request_id, arg_error, arg_error_message],
      false);
  }

  webRtcEventLogWrite(arg_lid, arg_output) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec,
      null,
      [arg_lid, arg_output],
      false);
  }

  webRtcDataChannelLogWrite(arg_lid, arg_output) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec,
      null,
      [arg_lid, arg_output],
      false);
  }

  addStandardStats(arg_lid, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec,
      null,
      [arg_lid, arg_value],
      false);
  }

};

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionTrackerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeerConnectionTrackerHost', [
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
        
        // Try Method 0: AddPeerConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPeerConnection (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemovePeerConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePeerConnection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdatePeerConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePeerConnection (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPeerConnectionSessionIdSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPeerConnectionSessionIdSet (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetUserMedia
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMedia (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetUserMediaSuccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMediaSuccess (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetUserMediaFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMediaFailure (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetDisplayMedia
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMedia (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetDisplayMediaSuccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMediaSuccess (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetDisplayMediaFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMediaFailure (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: WebRtcEventLogWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebRtcEventLogWrite (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: WebRtcDataChannelLogWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebRtcDataChannelLogWrite (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AddStandardStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddStandardStats (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPeerConnection');
          const result = this.impl.addPeerConnection(params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePeerConnection');
          const result = this.impl.removePeerConnection(params.arg_lid);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePeerConnection');
          const result = this.impl.updatePeerConnection(params.arg_lid, params.arg_type, params.arg_value);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPeerConnectionSessionIdSet');
          const result = this.impl.onPeerConnectionSessionIdSet(params.arg_lid, params.arg_session_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserMedia');
          const result = this.impl.getUserMedia(params.arg_request_id, params.arg_audio, params.arg_video, params.arg_audio_constraints, params.arg_video_constraints);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserMediaSuccess');
          const result = this.impl.getUserMediaSuccess(params.arg_request_id, params.arg_stream_id, params.arg_audio_track_info, params.arg_video_track_info);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserMediaFailure');
          const result = this.impl.getUserMediaFailure(params.arg_request_id, params.arg_error, params.arg_error_message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMedia');
          const result = this.impl.getDisplayMedia(params.arg_request_id, params.arg_audio, params.arg_video, params.arg_audio_constraints, params.arg_video_constraints);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMediaSuccess');
          const result = this.impl.getDisplayMediaSuccess(params.arg_request_id, params.arg_stream_id, params.arg_audio_track_info, params.arg_video_track_info);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMediaFailure');
          const result = this.impl.getDisplayMediaFailure(params.arg_request_id, params.arg_error, params.arg_error_message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webRtcEventLogWrite');
          const result = this.impl.webRtcEventLogWrite(params.arg_lid, params.arg_output);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webRtcDataChannelLogWrite');
          const result = this.impl.webRtcDataChannelLogWrite(params.arg_lid, params.arg_output);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addStandardStats');
          const result = this.impl.addStandardStats(params.arg_lid, params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostReceiver = mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostReceiver;

mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostPtr = mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRemote;
mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostRequest = mojo.internal.bindings.blink.mojom.PeerConnectionTrackerHostPendingReceiver;

