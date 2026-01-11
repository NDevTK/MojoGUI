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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};

mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineStatusEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineCommandEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService = {};
mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService.$interfaceName = 'crosapi.mojom.DiagnosticsService';
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec = { $: {} };

// Enum: DiagnosticsRoutineEnum
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineEnum = {
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
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineStatusEnum = {
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
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUserMessageEnum = {
  kUnknown: 2,
  kUnplugACPower: 0,
  kPlugInACPower: 1,
  MinVersion: 1,
};

// Enum: DiagnosticsRoutineCommandEnum
mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineCommandEnum = {
  kUnknown: 4,
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: DiagnosticsAcPowerStatusEnum
mojo.internal.bindings.crosapi.mojom.DiagnosticsAcPowerStatusEnum = {
  kUnknown: 2,
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: DiagnosticsNvmeSelfTestTypeEnum
mojo.internal.bindings.crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnum = {
  kUnknown: 2,
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DiagnosticsDiskReadRoutineTypeEnum
mojo.internal.bindings.crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
  kUnknown: 2,
};

// Union: DiagnosticsRoutineUpdateUnion
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec, 'crosapi.mojom.DiagnosticsRoutineUpdateUnion', {
      'arg_interactive_update': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
      'arg_noninteractive_update': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec.$,
        'nullable': false,
      },
    });

// Struct: DiagnosticsInteractiveRoutineUpdate
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsInteractiveRoutineUpdate', [
      mojo.internal.StructField('arg_user_message', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUserMessageEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DiagnosticsNonInteractiveRoutineUpdate
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsNonInteractiveRoutineUpdate', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DiagnosticsRoutineUpdate
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateSpec, 'crosapi.mojom.DiagnosticsRoutineUpdate', [
      mojo.internal.StructField('arg_output', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_routine_update_union', 8, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress_percent', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DiagnosticsRunRoutineResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec, 'crosapi.mojom.DiagnosticsRunRoutineResponse', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DiagnosticsService
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParams', [
      mojo.internal.StructField('arg_available_routines', 0, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineCommandEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_include_output', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParams', [
      mojo.internal.StructField('arg_routine_update', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRoutineUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_Params', [
      mojo.internal.StructField('arg_percentage_used_threshold', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_Params', [
      mojo.internal.StructField('arg_expected_status', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsAcPowerStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expected_power_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params', [
      mojo.internal.StructField('arg_wear_level_threshold', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_Params', [
      mojo.internal.StructField('arg_nvme_self_test_type', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsNvmeSelfTestTypeEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsDiskReadRoutineTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_length_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_file_size_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maximum_discharge_percent_allowed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_charge_percent_required', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_Params', [
      mojo.internal.StructField('arg_timeout_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_Params', [
      mojo.internal.StructField('arg_peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec, 'crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.DiagnosticsRunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.DiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.DiagnosticsServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAvailableRoutines() {
    return this.$.getAvailableRoutines();
  }
  getRoutineUpdate(arg_id, arg_command, arg_include_output) {
    return this.$.getRoutineUpdate(arg_id, arg_command, arg_include_output);
  }
  runBatteryCapacityRoutine() {
    return this.$.runBatteryCapacityRoutine();
  }
  runBatteryHealthRoutine() {
    return this.$.runBatteryHealthRoutine();
  }
  runSmartctlCheckRoutine(arg_percentage_used_threshold) {
    return this.$.runSmartctlCheckRoutine(arg_percentage_used_threshold);
  }
  runAcPowerRoutine(arg_expected_status, arg_expected_power_type) {
    return this.$.runAcPowerRoutine(arg_expected_status, arg_expected_power_type);
  }
  runCpuCacheRoutine(arg_length_seconds) {
    return this.$.runCpuCacheRoutine(arg_length_seconds);
  }
  runCpuStressRoutine(arg_length_seconds) {
    return this.$.runCpuStressRoutine(arg_length_seconds);
  }
  runFloatingPointAccuracyRoutine(arg_length_seconds) {
    return this.$.runFloatingPointAccuracyRoutine(arg_length_seconds);
  }
  dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold) {
    return this.$.dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold);
  }
  runNvmeSelfTestRoutine(arg_nvme_self_test_type) {
    return this.$.runNvmeSelfTestRoutine(arg_nvme_self_test_type);
  }
  runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb) {
    return this.$.runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb);
  }
  runPrimeSearchRoutine(arg_length_seconds) {
    return this.$.runPrimeSearchRoutine(arg_length_seconds);
  }
  runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed) {
    return this.$.runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed);
  }
  runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required) {
    return this.$.runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required);
  }
  runMemoryRoutine() {
    return this.$.runMemoryRoutine();
  }
  runLanConnectivityRoutine() {
    return this.$.runLanConnectivityRoutine();
  }
  runDnsResolutionRoutine() {
    return this.$.runDnsResolutionRoutine();
  }
  runSignalStrengthRoutine() {
    return this.$.runSignalStrengthRoutine();
  }
  runGatewayCanBePingedRoutine() {
    return this.$.runGatewayCanBePingedRoutine();
  }
  runDnsResolverPresentRoutine() {
    return this.$.runDnsResolverPresentRoutine();
  }
  runSensitiveSensorRoutine() {
    return this.$.runSensitiveSensorRoutine();
  }
  runFingerprintAliveRoutine() {
    return this.$.runFingerprintAliveRoutine();
  }
  runEmmcLifetimeRoutine() {
    return this.$.runEmmcLifetimeRoutine();
  }
  runBluetoothPowerRoutine() {
    return this.$.runBluetoothPowerRoutine();
  }
  runUfsLifetimeRoutine() {
    return this.$.runUfsLifetimeRoutine();
  }
  runPowerButtonRoutine(arg_timeout_seconds) {
    return this.$.runPowerButtonRoutine(arg_timeout_seconds);
  }
  runAudioDriverRoutine() {
    return this.$.runAudioDriverRoutine();
  }
  runBluetoothDiscoveryRoutine() {
    return this.$.runBluetoothDiscoveryRoutine();
  }
  runBluetoothScanningRoutine(arg_length_seconds) {
    return this.$.runBluetoothScanningRoutine(arg_length_seconds);
  }
  runBluetoothPairingRoutine(arg_peripheral_id) {
    return this.$.runBluetoothPairingRoutine(arg_peripheral_id);
  }
  runFanRoutine() {
    return this.$.runFanRoutine();
  }
};

mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.DiagnosticsService', [
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
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(arg_id, arg_command, arg_include_output) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [arg_id, arg_command, arg_include_output],
      false);
  }

  runBatteryCapacityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(arg_percentage_used_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [arg_percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(arg_expected_status, arg_expected_power_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [arg_expected_status, arg_expected_power_type],
      false);
  }

  runCpuCacheRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runCpuStressRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [arg_wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(arg_nvme_self_test_type) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [arg_nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [arg_type, arg_length_seconds, arg_file_size_mb],
      false);
  }

  runPrimeSearchRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [arg_length_seconds, arg_maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [arg_length_seconds, arg_minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runLanConnectivityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runEmmcLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothPowerRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPowerButtonRoutine(arg_timeout_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [arg_timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runBluetoothPairingRoutine(arg_peripheral_id) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [arg_peripheral_id],
      false);
  }

  runFanRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.DiagnosticsService.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DiagnosticsService',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.DiagnosticsService', [
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableRoutines');
          const result = this.impl.getAvailableRoutines();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailableRoutines FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRoutineUpdate');
          const result = this.impl.getRoutineUpdate(params.arg_id, params.arg_command, params.arg_include_output);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRoutineUpdate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryCapacityRoutine');
          const result = this.impl.runBatteryCapacityRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryCapacityRoutine FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryHealthRoutine');
          const result = this.impl.runBatteryHealthRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryHealthRoutine FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSmartctlCheckRoutine');
          const result = this.impl.runSmartctlCheckRoutine(params.arg_percentage_used_threshold);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSmartctlCheckRoutine FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAcPowerRoutine');
          const result = this.impl.runAcPowerRoutine(params.arg_expected_status, params.arg_expected_power_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunAcPowerRoutine FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuCacheRoutine');
          const result = this.impl.runCpuCacheRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunCpuCacheRoutine FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuStressRoutine');
          const result = this.impl.runCpuStressRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunCpuStressRoutine FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFloatingPointAccuracyRoutine');
          const result = this.impl.runFloatingPointAccuracyRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFloatingPointAccuracyRoutine FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunNvmeWearLevelRoutine');
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.arg_wear_level_threshold);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunNvmeWearLevelRoutine FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runNvmeSelfTestRoutine');
          const result = this.impl.runNvmeSelfTestRoutine(params.arg_nvme_self_test_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunNvmeSelfTestRoutine FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDiskReadRoutine');
          const result = this.impl.runDiskReadRoutine(params.arg_type, params.arg_length_seconds, params.arg_file_size_mb);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDiskReadRoutine FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPrimeSearchRoutine');
          const result = this.impl.runPrimeSearchRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPrimeSearchRoutine FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryDischargeRoutine');
          const result = this.impl.runBatteryDischargeRoutine(params.arg_length_seconds, params.arg_maximum_discharge_percent_allowed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryDischargeRoutine FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryChargeRoutine');
          const result = this.impl.runBatteryChargeRoutine(params.arg_length_seconds, params.arg_minimum_charge_percent_required);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryChargeRoutine FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runMemoryRoutine');
          const result = this.impl.runMemoryRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunMemoryRoutine FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runLanConnectivityRoutine');
          const result = this.impl.runLanConnectivityRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunLanConnectivityRoutine FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolutionRoutine');
          const result = this.impl.runDnsResolutionRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDnsResolutionRoutine FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSignalStrengthRoutine');
          const result = this.impl.runSignalStrengthRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSignalStrengthRoutine FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runGatewayCanBePingedRoutine');
          const result = this.impl.runGatewayCanBePingedRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunGatewayCanBePingedRoutine FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolverPresentRoutine');
          const result = this.impl.runDnsResolverPresentRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDnsResolverPresentRoutine FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSensitiveSensorRoutine');
          const result = this.impl.runSensitiveSensorRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSensitiveSensorRoutine FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFingerprintAliveRoutine');
          const result = this.impl.runFingerprintAliveRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFingerprintAliveRoutine FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runEmmcLifetimeRoutine');
          const result = this.impl.runEmmcLifetimeRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunEmmcLifetimeRoutine FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPowerRoutine');
          const result = this.impl.runBluetoothPowerRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothPowerRoutine FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runUfsLifetimeRoutine');
          const result = this.impl.runUfsLifetimeRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunUfsLifetimeRoutine FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPowerButtonRoutine');
          const result = this.impl.runPowerButtonRoutine(params.arg_timeout_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPowerButtonRoutine FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAudioDriverRoutine');
          const result = this.impl.runAudioDriverRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunAudioDriverRoutine FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothDiscoveryRoutine');
          const result = this.impl.runBluetoothDiscoveryRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothDiscoveryRoutine FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothScanningRoutine');
          const result = this.impl.runBluetoothScanningRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothScanningRoutine FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPairingRoutine');
          const result = this.impl.runBluetoothPairingRoutine(params.arg_peripheral_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothPairingRoutine FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFanRoutine');
          const result = this.impl.runFanRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DiagnosticsService_RunFanRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFanRoutine FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceReceiver = mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceReceiver;

mojo.internal.bindings.crosapi.mojom.DiagnosticsServicePtr = mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemote;
mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRequest = mojo.internal.bindings.crosapi.mojom.DiagnosticsServicePendingReceiver;

