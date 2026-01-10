// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/diagnostics_service.mojom
// Module: crosapi.mojom

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
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.DiagnosticsRoutineEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineStatusEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineCommandEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec = { $: {} };
crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsRoutineUpdateSpec = { $: {} };
crosapi.mojom.DiagnosticsRunRoutineResponseSpec = { $: {} };
crosapi.mojom.DiagnosticsService = {};
crosapi.mojom.DiagnosticsService.$interfaceName = 'crosapi.mojom.DiagnosticsService';
crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec = { $: {} };
crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec = { $: {} };

// Enum: DiagnosticsRoutineEnum
crosapi.mojom.DiagnosticsRoutineEnum = {
  kUnknown: 15,
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kSmartctlCheck: 2,
  kAcPower: 3,
  kCpuCache: 4,
  kCpuStress: 5,
  kFloatingPointAccuracy: 6,
  DEPRECATED_kNvmeWearLevel: 7,
  kNvmeSelfTest: 8,
  kDiskRead: 9,
  kPrimeSearch: 10,
  kBatteryDischarge: 11,
  kBatteryCharge: 12,
  kMemory: 13,
  kLanConnectivity: 14,
  kDnsResolution: 16,
  kSignalStrength: 17,
  kGatewayCanBePinged: 18,
  kDnsResolverPresent: 19,
  kSensitiveSensor: 20,
  kFingerprintAlive: 21,
  kSmartctlCheckWithPercentageUsed: 22,
  kEmmcLifetime: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
  MinVersion: 23,
};

// Enum: DiagnosticsRoutineStatusEnum
crosapi.mojom.DiagnosticsRoutineStatusEnum = {
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

// Enum: DiagnosticsRoutineUserMessageEnum
crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
  kUnknown: 2,
  kUnplugACPower: 0,
  kPlugInACPower: 1,
  MinVersion: 1,
};

// Enum: DiagnosticsRoutineCommandEnum
crosapi.mojom.DiagnosticsRoutineCommandEnum = {
  kUnknown: 4,
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: DiagnosticsAcPowerStatusEnum
crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
  kUnknown: 2,
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: DiagnosticsNvmeSelfTestTypeEnum
crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
  kUnknown: 2,
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DiagnosticsDiskReadRoutineTypeEnum
crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
  kUnknown: 2,
};

// Union: DiagnosticsRoutineUpdateUnion
mojo.internal.Union(
    crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec, 'crosapi.mojom.DiagnosticsRoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
      'noninteractive_update': {
        'ordinal': 1,
        'type': crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
    });

// Struct: DiagnosticsInteractiveRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsInteractiveRoutineUpdate', [
      mojo.internal.StructField('user_message', 0, 0, crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DiagnosticsNonInteractiveRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DiagnosticsRoutineUpdate
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsRoutineUpdate', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('routine_update_union', 8, 0, crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress_percent', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DiagnosticsRunRoutineResponse
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsRunRoutineResponseSpec, 'crosapi.mojom.DiagnosticsRunRoutineResponse', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DiagnosticsService
mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParams', [
      mojo.internal.StructField('available_routines', 0, 0, mojo.internal.Array(crosapi.mojom.DiagnosticsRoutineEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_Params', [
      mojo.internal.StructField('command', 0, 0, crosapi.mojom.DiagnosticsRoutineCommandEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('include_output', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParams', [
      mojo.internal.StructField('routine_update', 0, 0, crosapi.mojom.DiagnosticsRoutineUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_Params', [
      mojo.internal.StructField('percentage_used_threshold', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_Params', [
      mojo.internal.StructField('expected_status', 0, 0, crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_power_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params', [
      mojo.internal.StructField('wear_level_threshold', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_Params', [
      mojo.internal.StructField('nvme_self_test_type', 0, 0, crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_Params', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('file_size_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_discharge_percent_allowed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_charge_percent_required', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_Params', [
      mojo.internal.StructField('timeout_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_Params', [
      mojo.internal.StructField('length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_Params', [
      mojo.internal.StructField('peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.DiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.DiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.DiagnosticsServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.DiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.DiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
    ]);
  }

  getAvailableRoutines() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec,
      crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(id, command, include_output) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec,
      crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [id, command, include_output],
      false);
  }

  runBatteryCapacityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(percentage_used_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(expected_status, expected_power_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [expected_status, expected_power_type],
      false);
  }

  runCpuCacheRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runCpuStressRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(nvme_self_test_type) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(type, length_seconds, file_size_mb) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [type, length_seconds, file_size_mb],
      false);
  }

  runPrimeSearchRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBatteryDischargeRoutine(length_seconds, maximum_discharge_percent_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [length_seconds, maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(length_seconds, minimum_charge_percent_required) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [length_seconds, minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runLanConnectivityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runEmmcLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothPowerRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPowerButtonRoutine(timeout_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [length_seconds],
      false);
  }

  runBluetoothPairingRoutine(peripheral_id) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [peripheral_id],
      false);
  }

  runFanRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec,
      crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      [],
      false);
  }

};

crosapi.mojom.DiagnosticsService.getRemote = function() {
  let remote = new crosapi.mojom.DiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DiagnosticsService',
    'context');
  return remote.$;
};

crosapi.mojom.DiagnosticsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
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
        
        // Try Method 0: GetAvailableRoutines
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableRoutines (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetRoutineUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRoutineUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RunBatteryCapacityRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryCapacityRoutine (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RunBatteryHealthRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryHealthRoutine (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RunSmartctlCheckRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSmartctlCheckRoutine (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RunAcPowerRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAcPowerRoutine (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RunCpuCacheRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunCpuCacheRoutine (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RunCpuStressRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunCpuStressRoutine (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RunFloatingPointAccuracyRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFloatingPointAccuracyRoutine (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DEPRECATED_RunNvmeWearLevelRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunNvmeWearLevelRoutine (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RunNvmeSelfTestRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunNvmeSelfTestRoutine (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RunDiskReadRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDiskReadRoutine (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RunPrimeSearchRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPrimeSearchRoutine (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RunBatteryDischargeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryDischargeRoutine (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RunBatteryChargeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryChargeRoutine (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RunMemoryRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunMemoryRoutine (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RunLanConnectivityRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunLanConnectivityRoutine (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RunDnsResolutionRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDnsResolutionRoutine (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RunSignalStrengthRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSignalStrengthRoutine (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RunGatewayCanBePingedRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunGatewayCanBePingedRoutine (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RunDnsResolverPresentRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDnsResolverPresentRoutine (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RunSensitiveSensorRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSensitiveSensorRoutine (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: RunFingerprintAliveRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFingerprintAliveRoutine (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RunEmmcLifetimeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunEmmcLifetimeRoutine (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: RunBluetoothPowerRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothPowerRoutine (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RunUfsLifetimeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunUfsLifetimeRoutine (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RunPowerButtonRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPowerButtonRoutine (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: RunAudioDriverRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAudioDriverRoutine (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: RunBluetoothDiscoveryRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothDiscoveryRoutine (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: RunBluetoothScanningRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothScanningRoutine (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: RunBluetoothPairingRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothPairingRoutine (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: RunFanRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFanRoutine (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableRoutines');
          const result = this.impl.getAvailableRoutines();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRoutineUpdate');
          const result = this.impl.getRoutineUpdate(params.id, params.command, params.include_output);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryCapacityRoutine');
          const result = this.impl.runBatteryCapacityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryHealthRoutine');
          const result = this.impl.runBatteryHealthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSmartctlCheckRoutine');
          const result = this.impl.runSmartctlCheckRoutine(params.percentage_used_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAcPowerRoutine');
          const result = this.impl.runAcPowerRoutine(params.expected_status, params.expected_power_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuCacheRoutine');
          const result = this.impl.runCpuCacheRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuStressRoutine');
          const result = this.impl.runCpuStressRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFloatingPointAccuracyRoutine');
          const result = this.impl.runFloatingPointAccuracyRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunNvmeWearLevelRoutine');
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.wear_level_threshold);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runNvmeSelfTestRoutine');
          const result = this.impl.runNvmeSelfTestRoutine(params.nvme_self_test_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDiskReadRoutine');
          const result = this.impl.runDiskReadRoutine(params.type, params.length_seconds, params.file_size_mb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPrimeSearchRoutine');
          const result = this.impl.runPrimeSearchRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryDischargeRoutine');
          const result = this.impl.runBatteryDischargeRoutine(params.length_seconds, params.maximum_discharge_percent_allowed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryChargeRoutine');
          const result = this.impl.runBatteryChargeRoutine(params.length_seconds, params.minimum_charge_percent_required);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runMemoryRoutine');
          const result = this.impl.runMemoryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runLanConnectivityRoutine');
          const result = this.impl.runLanConnectivityRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolutionRoutine');
          const result = this.impl.runDnsResolutionRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSignalStrengthRoutine');
          const result = this.impl.runSignalStrengthRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runGatewayCanBePingedRoutine');
          const result = this.impl.runGatewayCanBePingedRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolverPresentRoutine');
          const result = this.impl.runDnsResolverPresentRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSensitiveSensorRoutine');
          const result = this.impl.runSensitiveSensorRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFingerprintAliveRoutine');
          const result = this.impl.runFingerprintAliveRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runEmmcLifetimeRoutine');
          const result = this.impl.runEmmcLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPowerRoutine');
          const result = this.impl.runBluetoothPowerRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runUfsLifetimeRoutine');
          const result = this.impl.runUfsLifetimeRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPowerButtonRoutine');
          const result = this.impl.runPowerButtonRoutine(params.timeout_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAudioDriverRoutine');
          const result = this.impl.runAudioDriverRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothDiscoveryRoutine');
          const result = this.impl.runBluetoothDiscoveryRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothScanningRoutine');
          const result = this.impl.runBluetoothScanningRoutine(params.length_seconds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPairingRoutine');
          const result = this.impl.runBluetoothPairingRoutine(params.peripheral_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFanRoutine');
          const result = this.impl.runFanRoutine();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec);
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

crosapi.mojom.DiagnosticsServiceReceiver = crosapi.mojom.DiagnosticsServiceReceiver;

crosapi.mojom.DiagnosticsServicePtr = crosapi.mojom.DiagnosticsServiceRemote;
crosapi.mojom.DiagnosticsServiceRequest = crosapi.mojom.DiagnosticsServicePendingReceiver;

