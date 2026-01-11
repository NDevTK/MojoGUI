// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_diagnostics.mojom
// Module: ash.cros_healthd.mojom

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
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};

ash.cros_healthd.mojom.DiagnosticRoutineEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.AcPowerStatusEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DEPRECATED_LedNameSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DEPRECATED_LedColorSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.RoutineUpdateUnionSpec = { $: {} };
ash.cros_healthd.mojom.RunRoutineResponseSpec = { $: {} };
ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.RoutineUpdateSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier = {};
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.$interfaceName = 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec = { $: {} };

ash.cros_healthd.mojom.kFailedToStartId = 0;

// Enum: DiagnosticRoutineEnum
ash.cros_healthd.mojom.DiagnosticRoutineEnum = {
  kUnknown: 30,
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kUrandom: 2,
  kSmartctlCheck: 3,
  kAcPower: 4,
  kCpuCache: 5,
  kCpuStress: 6,
  kFloatingPointAccuracy: 7,
  DEPRECATED_kNvmeWearLevel: 8,
  kNvmeSelfTest: 9,
  kDiskRead: 10,
  kPrimeSearch: 11,
  kBatteryDischarge: 12,
  kBatteryCharge: 13,
  kMemory: 14,
  kLanConnectivity: 15,
  kSignalStrength: 16,
  kGatewayCanBePinged: 17,
  kHasSecureWiFiConnection: 18,
  kDnsResolverPresent: 19,
  kDnsLatency: 20,
  kDnsResolution: 21,
  kCaptivePortal: 22,
  kHttpFirewall: 23,
  kHttpsFirewall: 24,
  kHttpsLatency: 25,
  kVideoConferencing: 26,
  kArcHttp: 27,
  kArcPing: 28,
  kArcDnsResolution: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
  MinVersion: 29,
};

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.mojom.DiskReadRoutineTypeEnum = {
  kUnmappedEnumField: 2,
  kLinearRead: 0,
  kRandomRead: 1,
};

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnum = {
  kUnknown: 12,
  kReady: 0,
  kRunning: 1,
  kWaiting: 2,
  kPassed: 3,
  kFailed: 4,
  kError: 5,
  kCancelled: 6,
  kFailedToStart: 7,
  kRemoved: 8,
  kCancelling: 9,
  kUnsupported: 10,
  kNotRun: 11,
};

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnum = {
  kUnknown: 2,
  kUnplugACPower: 0,
  kPlugInACPower: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnum = {
  kUnknown: 4,
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: AcPowerStatusEnum
ash.cros_healthd.mojom.AcPowerStatusEnum = {
  kUnknown: 2,
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.mojom.NvmeSelfTestTypeEnum = {
  kUnknown: 2,
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DEPRECATED_LedName
ash.cros_healthd.mojom.DEPRECATED_LedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: DEPRECATED_LedColor
ash.cros_healthd.mojom.DEPRECATED_LedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Union: RoutineUpdateUnion
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineUpdateUnionSpec, 'ash.cros_healthd.mojom.RoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
      'noninteractive_update': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
    });

// Struct: RunRoutineResponse
mojo.internal.Struct(
    ash.cros_healthd.mojom.RunRoutineResponseSpec, 'ash.cros_healthd.mojom.RunRoutineResponse', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InteractiveRoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec, 'ash.cros_healthd.mojom.InteractiveRoutineUpdate', [
      mojo.internal.StructField('user_message', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NonInteractiveRoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec, 'ash.cros_healthd.mojom.NonInteractiveRoutineUpdate', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineUpdate
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineUpdateSpec, 'ash.cros_healthd.mojom.RoutineUpdate', [
      mojo.internal.StructField('routine_update_union', 0, 0, ash.cros_healthd.mojom.RoutineUpdateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_percent', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output', 12, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DEPRECATED_LedLitUpRoutineReplier
mojo.internal.Struct(
    ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec, 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec, 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParams', [
      mojo.internal.StructField('matched', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getColorMatched() {
    return this.$.getColorMatched();
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DEPRECATED_LedLitUpRoutineReplier', [
      { explicit: 0 },
    ]);
  }

  getColorMatched() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec,
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec,
      [],
      false);
  }

};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DEPRECATED_LedLitUpRoutineReplier', [
      { explicit: 0 },
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
        
        // Try Method 0: GetColorMatched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetColorMatched (0)');
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
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getColorMatched');
          const result = this.impl.getColorMatched();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetColorMatched FAILED:', e));
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

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierReceiver;

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote;
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver;

