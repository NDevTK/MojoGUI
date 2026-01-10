// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/fingerprint.mojom
// Module: device.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.ScanResultSpec = { $: mojo.internal.Enum() };
device.mojom.FingerprintErrorSpec = { $: mojo.internal.Enum() };
device.mojom.BiometricTypeSpec = { $: mojo.internal.Enum() };
device.mojom.BiometricsManagerStatusSpec = { $: mojo.internal.Enum() };
device.mojom.FingerprintMessageSpec = { $: {} };
device.mojom.FingerprintObserver = {};
device.mojom.FingerprintObserver.$interfaceName = 'device.mojom.FingerprintObserver';
device.mojom.FingerprintObserver_OnRestarted_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec = { $: {} };
device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec = { $: {} };
device.mojom.Fingerprint = {};
device.mojom.Fingerprint.$interfaceName = 'device.mojom.Fingerprint';
device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec = { $: {} };
device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_StartEnrollSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_SetRecordLabel_ParamsSpec = { $: {} };
device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_RemoveRecord_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_StartAuthSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec = { $: {} };
device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec = { $: {} };
device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec = { $: {} };
device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestType_ParamsSpec = { $: {} };
device.mojom.Fingerprint_RequestType_ResponseParamsSpec = { $: {} };

// Enum: ScanResult
device.mojom.ScanResult = {
  SUCCESS: 0,
  PARTIAL: 1,
  INSUFFICIENT: 2,
  SENSOR_DIRTY: 3,
  TOO_SLOW: 4,
  TOO_FAST: 5,
  IMMOBILE: 6,
  NO_MATCH: 7,
};

// Enum: FingerprintError
device.mojom.FingerprintError = {
  UNKNOWN: 0,
  HW_UNAVAILABLE: 1,
  UNABLE_TO_PROCESS: 2,
  TIMEOUT: 3,
  NO_SPACE: 4,
  CANCELED: 5,
  UNABLE_TO_REMOVE: 6,
  LOCKOUT: 7,
  NO_TEMPLATES: 8,
};

// Enum: BiometricType
device.mojom.BiometricType = {
  UNKNOWN: 0,
  FINGERPRINT: 1,
};

// Enum: BiometricsManagerStatus
device.mojom.BiometricsManagerStatus = {
  UNKNOWN: 0,
  INITIALIZED: 1,
};

// Union: FingerprintMessage
mojo.internal.Union(
    device.mojom.FingerprintMessageSpec, 'device.mojom.FingerprintMessage', {
      'fingerprint_error': {
        'ordinal': 0,
        'type': device.mojom.FingerprintErrorSpec.$,
        'nullable': false,
      },
      'scan_result': {
        'ordinal': 1,
        'type': device.mojom.ScanResultSpec.$,
        'nullable': false,
      },
    });

// Interface: FingerprintObserver
mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnRestarted_ParamsSpec, 'device.mojom.FingerprintObserver_OnRestarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec, 'device.mojom.FingerprintObserver_OnStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, device.mojom.BiometricsManagerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec, 'device.mojom.FingerprintObserver_OnEnrollScanDone_Params', [
      mojo.internal.StructField('scan_result', 0, 0, device.mojom.ScanResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percent_complete', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_complete', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec, 'device.mojom.FingerprintObserver_OnAuthScanDone_Params', [
      mojo.internal.StructField('msg', 0, 0, device.mojom.FingerprintMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matches', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec, 'device.mojom.FingerprintObserver_OnSessionFailed_Params', [
    ],
    [[0, 8]]);

device.mojom.FingerprintObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.FingerprintObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.FingerprintObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.FingerprintObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.FingerprintObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.FingerprintObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FingerprintObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRestarted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.FingerprintObserver_OnRestarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStatusChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec,
      null,
      [scan_result, is_complete, percent_complete],
      false);
  }

  onAuthScanDone(msg, matches) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec,
      null,
      [msg, matches],
      false);
  }

  onSessionFailed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.FingerprintObserver.getRemote = function() {
  let remote = new device.mojom.FingerprintObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.FingerprintObserver',
    'context');
  return remote.$;
};

device.mojom.FingerprintObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FingerprintObserver', [
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
        
        // Try Method 0: OnRestarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRestarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStatusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEnrollScanDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnrollScanDone (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnAuthScanDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthScanDone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnSessionFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionFailed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnRestarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRestarted');
          const result = this.impl.onRestarted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStatusChanged');
          const result = this.impl.onStatusChanged(params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnEnrollScanDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnrollScanDone');
          const result = this.impl.onEnrollScanDone(params.scan_result, params.is_complete, params.percent_complete);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnAuthScanDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthScanDone');
          const result = this.impl.onAuthScanDone(params.msg, params.matches);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.FingerprintObserver_OnSessionFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionFailed');
          const result = this.impl.onSessionFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.FingerprintObserverReceiver = device.mojom.FingerprintObserverReceiver;

device.mojom.FingerprintObserverPtr = device.mojom.FingerprintObserverRemote;
device.mojom.FingerprintObserverRequest = device.mojom.FingerprintObserverPendingReceiver;


// Interface: Fingerprint
mojo.internal.Struct(
    device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec, 'device.mojom.Fingerprint_GetRecordsForUser_Params', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec, 'device.mojom.Fingerprint_GetRecordsForUser_ResponseParams', [
      mojo.internal.StructField('records', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_StartEnrollSession_ParamsSpec, 'device.mojom.Fingerprint_StartEnrollSession_Params', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec, 'device.mojom.Fingerprint_CancelCurrentEnrollSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec, 'device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec, 'device.mojom.Fingerprint_RequestRecordLabel_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec, 'device.mojom.Fingerprint_RequestRecordLabel_ResponseParams', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_SetRecordLabel_ParamsSpec, 'device.mojom.Fingerprint_SetRecordLabel_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec, 'device.mojom.Fingerprint_SetRecordLabel_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RemoveRecord_ParamsSpec, 'device.mojom.Fingerprint_RemoveRecord_Params', [
      mojo.internal.StructField('record_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec, 'device.mojom.Fingerprint_RemoveRecord_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_StartAuthSession_ParamsSpec, 'device.mojom.Fingerprint_StartAuthSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec, 'device.mojom.Fingerprint_EndCurrentAuthSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec, 'device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec, 'device.mojom.Fingerprint_DestroyAllRecords_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec, 'device.mojom.Fingerprint_DestroyAllRecords_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec, 'device.mojom.Fingerprint_AddFingerprintObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.FingerprintObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestType_ParamsSpec, 'device.mojom.Fingerprint_RequestType_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Fingerprint_RequestType_ResponseParamsSpec, 'device.mojom.Fingerprint_RequestType_ResponseParams', [
      mojo.internal.StructField('type', 0, 0, device.mojom.BiometricTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.FingerprintPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.FingerprintRemote = class {
  static get $interfaceName() {
    return 'device.mojom.Fingerprint';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.FingerprintPendingReceiver,
      handle);
    this.$ = new device.mojom.FingerprintRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.FingerprintRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Fingerprint', [
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

  getRecordsForUser(user_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec,
      device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec,
      [user_id],
      false);
  }

  startEnrollSession(user_id, label) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.Fingerprint_StartEnrollSession_ParamsSpec,
      null,
      [user_id, label],
      false);
  }

  cancelCurrentEnrollSession() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec,
      device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec,
      [],
      false);
  }

  requestRecordLabel(record_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec,
      [record_path],
      false);
  }

  setRecordLabel(record_path, new_label) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.Fingerprint_SetRecordLabel_ParamsSpec,
      device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec,
      [record_path, new_label],
      false);
  }

  removeRecord(record_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.Fingerprint_RemoveRecord_ParamsSpec,
      device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec,
      [record_path],
      false);
  }

  startAuthSession() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.Fingerprint_StartAuthSession_ParamsSpec,
      null,
      [],
      false);
  }

  endCurrentAuthSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec,
      device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec,
      [],
      false);
  }

  destroyAllRecords() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec,
      device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec,
      [],
      false);
  }

  addFingerprintObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  requestType() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.Fingerprint_RequestType_ParamsSpec,
      device.mojom.Fingerprint_RequestType_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.Fingerprint.getRemote = function() {
  let remote = new device.mojom.FingerprintRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.Fingerprint',
    'context');
  return remote.$;
};

device.mojom.FingerprintReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Fingerprint', [
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
        
        // Try Method 0: GetRecordsForUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecordsForUser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartEnrollSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartEnrollSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelCurrentEnrollSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelCurrentEnrollSession (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestRecordLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRecordLabel (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetRecordLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRecordLabel (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveRecord (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartAuthSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartAuthSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EndCurrentAuthSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndCurrentAuthSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DestroyAllRecords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyAllRecords (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AddFingerprintObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFingerprintObserver (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RequestType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestType (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_GetRecordsForUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecordsForUser');
          const result = this.impl.getRecordsForUser(params.user_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_GetRecordsForUser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartEnrollSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startEnrollSession');
          const result = this.impl.startEnrollSession(params.user_id, params.label);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_CancelCurrentEnrollSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelCurrentEnrollSession');
          const result = this.impl.cancelCurrentEnrollSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_CancelCurrentEnrollSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestRecordLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestRecordLabel');
          const result = this.impl.requestRecordLabel(params.record_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RequestRecordLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_SetRecordLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRecordLabel');
          const result = this.impl.setRecordLabel(params.record_path, params.new_label);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_SetRecordLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RemoveRecord_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeRecord');
          const result = this.impl.removeRecord(params.record_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RemoveRecord_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_StartAuthSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startAuthSession');
          const result = this.impl.startAuthSession();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_EndCurrentAuthSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endCurrentAuthSession');
          const result = this.impl.endCurrentAuthSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_EndCurrentAuthSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_DestroyAllRecords_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyAllRecords');
          const result = this.impl.destroyAllRecords();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_DestroyAllRecords_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_AddFingerprintObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFingerprintObserver');
          const result = this.impl.addFingerprintObserver(params.observer);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Fingerprint_RequestType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestType');
          const result = this.impl.requestType();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Fingerprint_RequestType_ResponseParamsSpec);
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

device.mojom.FingerprintReceiver = device.mojom.FingerprintReceiver;

device.mojom.FingerprintPtr = device.mojom.FingerprintRemote;
device.mojom.FingerprintRequest = device.mojom.FingerprintPendingReceiver;

