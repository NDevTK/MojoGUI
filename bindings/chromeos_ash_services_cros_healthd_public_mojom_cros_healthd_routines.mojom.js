// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_routines.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.cros_healthd.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.PairErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.AddressTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.CameraSubtestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadTypeEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.LedNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.LedColorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.HardwarePresenceStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.IssueSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateUnionSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineRunningInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInteractionSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquirySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquiryReplySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UrandomRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateInitializedSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateRunningSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateWaitingSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterReplySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateFinishedSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPoweredDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl = {};
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl.$interfaceName = 'ash.cros_healthd.mojom.RoutineControl';
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver = {};
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver.$interfaceName = 'ash.cros_healthd.mojom.RoutineObserver';
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec = { $: {} };

// Enum: ButtonType
mojo.internal.bindings.ash.cros_healthd.mojom.ButtonType = {
  kUnmappedEnumField: 0,
  kVolumeUp: 1,
  kVolumeDown: 2,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kDownload: 1,
  kUpload: 2,
};

// Enum: Reason
mojo.internal.bindings.ash.cros_healthd.mojom.Reason = {
  kUnmappedEnumField: 0,
  kWaitingToBeScheduled: 1,
  kWaitingInteraction: 2,
};

// Enum: State
mojo.internal.bindings.ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kCorrectColor: 1,
  kNotLitUp: 2,
};

// Enum: State
mojo.internal.bindings.ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kOk: 1,
  kAnyNotLitUp: 2,
};

// Enum: MemtesterTestItemEnum
mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterTestItemEnum = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kStuckAddress: 2,
  kCompareAND: 3,
  kCompareDIV: 4,
  kCompareMUL: 5,
  kCompareOR: 6,
  kCompareSUB: 7,
  kCompareXOR: 8,
  kSequentialIncrement: 9,
  kBitFlip: 10,
  kBitSpread: 11,
  kBlockSequential: 12,
  kCheckerboard: 13,
  kRandomValue: 14,
  kSolidBits: 15,
  kWalkingOnes: 16,
  kWalkingZeroes: 17,
  k8BitWrites: 18,
  k16BitWrites: 19,
};

// Enum: PairError
mojo.internal.bindings.ash.cros_healthd.mojom.PairError = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kBondFailed: 2,
  kBadStatus: 3,
  kSspFailed: 4,
  kTimeout: 5,
};

// Enum: ConnectError
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectError = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kNoConnectedEvent: 2,
  kNotConnected: 3,
};

// Enum: AddressType
mojo.internal.bindings.ash.cros_healthd.mojom.AddressType = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPublic: 2,
  kRandom: 3,
};

// Enum: CameraSubtestResult
mojo.internal.bindings.ash.cros_healthd.mojom.CameraSubtestResult = {
  kUnmappedEnumField: 0,
  kNotRun: 1,
  kPassed: 2,
  kFailed: 3,
};

// Enum: DiskReadTypeEnum
mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadTypeEnum = {
  kUnmappedEnumField: 0,
  kLinearRead: 1,
  kRandomRead: 2,
};

// Enum: LedName
mojo.internal.bindings.ash.cros_healthd.mojom.LedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: LedColor
mojo.internal.bindings.ash.cros_healthd.mojom.LedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: HardwarePresenceStatus
mojo.internal.bindings.ash.cros_healthd.mojom.HardwarePresenceStatus = {
  kUnmappedEnumField: 0,
  kMatched: 1,
  kNotMatched: 2,
  kNotConfigured: 3,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kAccel: 1,
  kGyro: 2,
  kMagn: 3,
  kGravity: 4,
};

// Enum: Issue
mojo.internal.bindings.ash.cros_healthd.mojom.Issue = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kCameraServiceNotAvailable: 2,
  kBlockedByPrivacyShutter: 3,
  kLensAreDirty: 4,
};

// Union: RoutineArgument
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineArgumentSpec, 'ash.cros_healthd.mojom.RoutineArgument', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_memory': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_volume_button': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_fan': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_audio_driver': {
        'ordinal': 4,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_cpu_stress': {
        'ordinal': 5,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_ufs_lifetime': {
        'ordinal': 6,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_disk_read': {
        'ordinal': 7,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_cpu_cache': {
        'ordinal': 8,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_prime_search': {
        'ordinal': 9,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_led_lit_up': {
        'ordinal': 10,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_floating_point': {
        'ordinal': 11,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_power': {
        'ordinal': 12,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_discovery': {
        'ordinal': 13,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_scanning': {
        'ordinal': 14,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_pairing': {
        'ordinal': 15,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_camera_availability': {
        'ordinal': 16,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_urandom': {
        'ordinal': 17,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UrandomRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 18,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_sensitive_sensor': {
        'ordinal': 19,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_camera_frame_analysis': {
        'ordinal': 20,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_battery_discharge': {
        'ordinal': 21,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_keyboard_backlight': {
        'ordinal': 22,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineStateUnion
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateUnionSpec, 'ash.cros_healthd.mojom.RoutineStateUnion', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_initialized': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateInitializedSpec.$,
        'nullable': false,
      },
      'arg_running': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateRunningSpec.$,
        'nullable': false,
      },
      'arg_waiting': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateWaitingSpec.$,
        'nullable': false,
      },
      'arg_finished': {
        'ordinal': 4,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateFinishedSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineRunningInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineRunningInfoSpec, 'ash.cros_healthd.mojom.RoutineRunningInfo', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInteraction
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInteractionSpec, 'ash.cros_healthd.mojom.RoutineInteraction', {
      'arg_unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_inquiry': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquirySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInquiry
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquirySpec, 'ash.cros_healthd.mojom.RoutineInquiry', {
      'arg_unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_check_led_lit_up_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec.$,
        'nullable': false,
      },
      'arg_unplug_ac_adapter_inquiry': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec.$,
        'nullable': false,
      },
      'arg_check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInquiryReply
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquiryReplySpec, 'ash.cros_healthd.mojom.RoutineInquiryReply', {
      'arg_unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_check_led_lit_up_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec.$,
        'nullable': false,
      },
      'arg_unplug_ac_adapter': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterReplySpec.$,
        'nullable': false,
      },
      'arg_check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineDetail
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineDetailSpec, 'ash.cros_healthd.mojom.RoutineDetail', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_memory': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_fan': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_audio_driver': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_ufs_lifetime': {
        'ordinal': 4,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_power': {
        'ordinal': 5,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_discovery': {
        'ordinal': 6,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_scanning': {
        'ordinal': 7,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_bluetooth_pairing': {
        'ordinal': 8,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_camera_availability': {
        'ordinal': 9,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 10,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_sensitive_sensor': {
        'ordinal': 11,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_camera_frame_analysis': {
        'ordinal': 12,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_battery_discharge': {
        'ordinal': 13,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec.$,
        'nullable': false,
      },
    });

// Struct: MemoryRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineArgumentSpec, 'ash.cros_healthd.mojom.MemoryRoutineArgument', [
      mojo.internal.StructField('arg_max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_testing_mem_kib_$flag', originalFieldName: 'arg_max_testing_mem_kib' }),
      mojo.internal.StructField('arg_max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_testing_mem_kib_$value', originalFieldName: 'arg_max_testing_mem_kib' }),
    ],
    [[0, 16]]);

// Struct: AudioDriverRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec, 'ash.cros_healthd.mojom.AudioDriverRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: CpuStressRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec, 'ash.cros_healthd.mojom.CpuStressRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UfsLifetimeRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec, 'ash.cros_healthd.mojom.UfsLifetimeRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: DiskReadRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec, 'ash.cros_healthd.mojom.DiskReadRoutineArgument', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_disk_read_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_size_mib', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CpuCacheRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec, 'ash.cros_healthd.mojom.CpuCacheRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrimeSearchRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec, 'ash.cros_healthd.mojom.PrimeSearchRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VolumeButtonRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec, 'ash.cros_healthd.mojom.VolumeButtonRoutineArgument', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LedLitUpRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec, 'ash.cros_healthd.mojom.LedLitUpRoutineArgument', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.LedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.LedColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyboardBacklightRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec, 'ash.cros_healthd.mojom.KeyboardBacklightRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: FloatingPointRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec, 'ash.cros_healthd.mojom.FloatingPointRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPowerRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothPowerRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BluetoothDiscoveryRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: FanRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineArgumentSpec, 'ash.cros_healthd.mojom.FanRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BluetoothScanningRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothScanningRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPairingRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothPairingRoutineArgument', [
      mojo.internal.StructField('arg_peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraAvailabilityRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec, 'ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument', [
      mojo.internal.StructField('arg_run_camera_service_available_check', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_run_camera_diagnostic_service_available_check', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UrandomRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UrandomRoutineArgumentSpec, 'ash.cros_healthd.mojom.UrandomRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NetworkBandwidthRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: SensitiveSensorRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec, 'ash.cros_healthd.mojom.SensitiveSensorRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: CameraFrameAnalysisRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec, 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BatteryDischargeRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec, 'ash.cros_healthd.mojom.BatteryDischargeRoutineArgument', [
      mojo.internal.StructField('arg_exec_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_maximum_discharge_percent_allowed', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineState
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateSpec, 'ash.cros_healthd.mojom.RoutineState', [
      mojo.internal.StructField('arg_state_union', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineStateInitialized
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateInitializedSpec, 'ash.cros_healthd.mojom.RoutineStateInitialized', [
    ],
    [[0, 8]]);

// Struct: RoutineStateRunning
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateRunningSpec, 'ash.cros_healthd.mojom.RoutineStateRunning', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineRunningInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

// Struct: NetworkBandwidthRoutineRunningInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RoutineStateWaiting
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateWaitingSpec, 'ash.cros_healthd.mojom.RoutineStateWaiting', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CheckLedLitUpStateInquiry
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec, 'ash.cros_healthd.mojom.CheckLedLitUpStateInquiry', [
    ],
    [[0, 8]]);

// Struct: CheckLedLitUpStateReply
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec, 'ash.cros_healthd.mojom.CheckLedLitUpStateReply', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UnplugAcAdapterInquiry
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec, 'ash.cros_healthd.mojom.UnplugAcAdapterInquiry', [
    ],
    [[0, 8]]);

// Struct: UnplugAcAdapterReply
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UnplugAcAdapterReplySpec, 'ash.cros_healthd.mojom.UnplugAcAdapterReply', [
    ],
    [[0, 8]]);

// Struct: CheckKeyboardBacklightStateInquiry
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec, 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquiry', [
    ],
    [[0, 8]]);

// Struct: CheckKeyboardBacklightStateReply
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec, 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateReply', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RoutineStateFinished
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateFinishedSpec, 'ash.cros_healthd.mojom.RoutineStateFinished', [
      mojo.internal.StructField('arg_detail', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_has_passed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryRoutineDetailSpec, 'ash.cros_healthd.mojom.MemoryRoutineDetail', [
      mojo.internal.StructField('arg_bytes_tested', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioDriverRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec, 'ash.cros_healthd.mojom.AudioDriverRoutineDetail', [
      mojo.internal.StructField('arg_internal_card_detected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_audio_devices_succeed_to_open', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UfsLifetimeRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec, 'ash.cros_healthd.mojom.UfsLifetimeRoutineDetail', [
      mojo.internal.StructField('arg_pre_eol_info', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_life_time_est_a', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_life_time_est_b', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MemtesterResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterResultSpec, 'ash.cros_healthd.mojom.MemtesterResult', [
      mojo.internal.StructField('arg_passed_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_failed_items', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.MemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothPoweredDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPoweredDetailSpec, 'ash.cros_healthd.mojom.BluetoothPoweredDetail', [
      mojo.internal.StructField('arg_hci_powered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dbus_powered', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPowerRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothPowerRoutineDetail', [
      mojo.internal.StructField('arg_power_off_result', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPoweredDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_power_on_result', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPoweredDetailSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothDiscoveringDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveringDetail', [
      mojo.internal.StructField('arg_hci_discovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dbus_discovering', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothDiscoveryRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail', [
      mojo.internal.StructField('arg_start_discovery_result', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stop_discovery_result', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothScannedPeripheralInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec, 'ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo', [
      mojo.internal.StructField('arg_rssi_history', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_peripheral_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuids', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: BluetoothScanningRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothScanningRoutineDetail', [
      mojo.internal.StructField('arg_peripherals', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPairingPeripheralInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec, 'ash.cros_healthd.mojom.BluetoothPairingPeripheralInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 5, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: BluetoothPairingRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothPairingRoutineDetail', [
      mojo.internal.StructField('arg_pairing_peripheral', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraAvailabilityRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec, 'ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail', [
      mojo.internal.StructField('arg_camera_service_available_check', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CameraSubtestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_diagnostic_service_available_check', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CameraSubtestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatteryDischargeRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec, 'ash.cros_healthd.mojom.BatteryDischargeRoutineDetail', [
      mojo.internal.StructField('arg_discharge_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FanRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanRoutineDetailSpec, 'ash.cros_healthd.mojom.FanRoutineDetail', [
      mojo.internal.StructField('arg_passed_fan_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_failed_fan_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fan_count_status', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.HardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NetworkBandwidthRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail', [
      mojo.internal.StructField('arg_download_speed_kbps', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_speed_kbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensitiveSensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorInfoSpec, 'ash.cros_healthd.mojom.SensitiveSensorInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SensitiveSensorReport
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec, 'ash.cros_healthd.mojom.SensitiveSensorReport', [
      mojo.internal.StructField('arg_passed_sensors', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_failed_sensors', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sensor_presence_status', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.HardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SensitiveSensorRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec, 'ash.cros_healthd.mojom.SensitiveSensorRoutineDetail', [
      mojo.internal.StructField('arg_base_accelerometer', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid_accelerometer', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_base_gyroscope', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid_gyroscope', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_base_magnetometer', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid_magnetometer', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_base_gravity_sensor', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lid_gravity_sensor', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CameraFrameAnalysisRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec, 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetail', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: CrosHealthdRoutinesService
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_Params', [
      mojo.internal.StructField('arg_routine_argument', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_routine_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_routine_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_Params', [
      mojo.internal.StructField('arg_routine_argument', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRoutine(arg_routine_argument, arg_routine_receiver, arg_routine_observer) {
    return this.$.createRoutine(arg_routine_argument, arg_routine_receiver, arg_routine_observer);
  }
  isRoutineArgumentSupported(arg_routine_argument) {
    return this.$.isRoutineArgumentSupported(arg_routine_argument);
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdRoutinesService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  createRoutine(arg_routine_argument, arg_routine_receiver, arg_routine_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec,
      null,
      [arg_routine_argument, arg_routine_receiver, arg_routine_observer],
      false);
  }

  isRoutineArgumentSupported(arg_routine_argument) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [arg_routine_argument],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdRoutinesService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdRoutinesService', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: CreateRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRoutine (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsRoutineArgumentSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRoutineArgumentSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRoutine');
          const result = this.impl.createRoutine(params.arg_routine_argument, params.arg_routine_receiver, params.arg_routine_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRoutineArgumentSupported');
          const result = this.impl.isRoutineArgumentSupported(params.arg_routine_argument);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsRoutineArgumentSupported FAILED:', e));
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

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver;


// Interface: RoutineControl
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_GetState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_Params', [
      mojo.internal.StructField('arg_reply', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineInquiryReplySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getState() {
    return this.$.getState();
  }
  start() {
    return this.$.start();
  }
  replyInquiry(arg_reply) {
    return this.$.replyInquiry(arg_reply);
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RoutineControl', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec,
      [],
      false);
  }

  start() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec,
      null,
      [],
      false);
  }

  replyInquiry(arg_reply) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec,
      null,
      [arg_reply],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RoutineControl', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: GetState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReplyInquiry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplyInquiry (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getState');
          const result = this.impl.getState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replyInquiry');
          const result = this.impl.replyInquiry(params.arg_reply);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlPtr = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlRequest = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineControlPendingReceiver;


// Interface: RoutineObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec, 'ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRoutineStateChange(arg_state) {
    return this.$.onRoutineStateChange(arg_state);
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RoutineObserver', [
      { explicit: 0 },
    ]);
  }

  onRoutineStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RoutineObserver', [
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
        
        // Try Method 0: OnRoutineStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRoutineStateChange (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRoutineStateChange');
          const result = this.impl.onRoutineStateChange(params.arg_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverPtr = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverRequest = mojo.internal.bindings.ash.cros_healthd.mojom.RoutineObserverPendingReceiver;

