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
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};
var mojo_base = mojo_base || {};

ash.cros_healthd.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ReasonSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.MemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.PairErrorSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.ConnectErrorSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.AddressTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.CameraSubtestResultSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DiskReadTypeEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.LedNameSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.LedColorSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.HardwarePresenceStatusSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.IssueSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.RoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateUnionSpec = { $: {} };
ash.cros_healthd.mojom.RoutineRunningInfoSpec = { $: {} };
ash.cros_healthd.mojom.RoutineInteractionSpec = { $: {} };
ash.cros_healthd.mojom.RoutineInquirySpec = { $: {} };
ash.cros_healthd.mojom.RoutineInquiryReplySpec = { $: {} };
ash.cros_healthd.mojom.RoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.MemoryRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.FanRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.UrandomRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateSpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateInitializedSpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateRunningSpec = { $: {} };
ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateWaitingSpec = { $: {} };
ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec = { $: {} };
ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec = { $: {} };
ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec = { $: {} };
ash.cros_healthd.mojom.UnplugAcAdapterReplySpec = { $: {} };
ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec = { $: {} };
ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec = { $: {} };
ash.cros_healthd.mojom.RoutineStateFinishedSpec = { $: {} };
ash.cros_healthd.mojom.MemoryRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.MemtesterResultSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPoweredDetailSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.FanRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.SensitiveSensorInfoSpec = { $: {} };
ash.cros_healthd.mojom.SensitiveSensorReportSpec = { $: {} };
ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdRoutinesService = {};
ash.cros_healthd.mojom.CrosHealthdRoutinesService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.RoutineControl = {};
ash.cros_healthd.mojom.RoutineControl.$interfaceName = 'ash.cros_healthd.mojom.RoutineControl';
ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec = { $: {} };
ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.RoutineObserver = {};
ash.cros_healthd.mojom.RoutineObserver.$interfaceName = 'ash.cros_healthd.mojom.RoutineObserver';
ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec = { $: {} };

// Enum: ButtonType
ash.cros_healthd.mojom.ButtonType = {
  kUnmappedEnumField: 0,
  kVolumeUp: 1,
  kVolumeDown: 2,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kDownload: 1,
  kUpload: 2,
};

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
  kUnmappedEnumField: 0,
  kWaitingToBeScheduled: 1,
  kWaitingInteraction: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kCorrectColor: 1,
  kNotLitUp: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kOk: 1,
  kAnyNotLitUp: 2,
};

// Enum: MemtesterTestItemEnum
ash.cros_healthd.mojom.MemtesterTestItemEnum = {
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
ash.cros_healthd.mojom.PairError = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kBondFailed: 2,
  kBadStatus: 3,
  kSspFailed: 4,
  kTimeout: 5,
};

// Enum: ConnectError
ash.cros_healthd.mojom.ConnectError = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kNoConnectedEvent: 2,
  kNotConnected: 3,
};

// Enum: AddressType
ash.cros_healthd.mojom.AddressType = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPublic: 2,
  kRandom: 3,
};

// Enum: CameraSubtestResult
ash.cros_healthd.mojom.CameraSubtestResult = {
  kUnmappedEnumField: 0,
  kNotRun: 1,
  kPassed: 2,
  kFailed: 3,
};

// Enum: DiskReadTypeEnum
ash.cros_healthd.mojom.DiskReadTypeEnum = {
  kUnmappedEnumField: 0,
  kLinearRead: 1,
  kRandomRead: 2,
};

// Enum: LedName
ash.cros_healthd.mojom.LedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: LedColor
ash.cros_healthd.mojom.LedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: HardwarePresenceStatus
ash.cros_healthd.mojom.HardwarePresenceStatus = {
  kUnmappedEnumField: 0,
  kMatched: 1,
  kNotMatched: 2,
  kNotConfigured: 3,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kAccel: 1,
  kGyro: 2,
  kMagn: 3,
  kGravity: 4,
};

// Enum: Issue
ash.cros_healthd.mojom.Issue = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kCameraServiceNotAvailable: 2,
  kBlockedByPrivacyShutter: 3,
  kLensAreDirty: 4,
};

// Union: RoutineArgument
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineArgumentSpec, 'ash.cros_healthd.mojom.RoutineArgument', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'memory': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.MemoryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'volume_button': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec.$,
        'nullable': false,
      },
      'fan': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.FanRoutineArgumentSpec.$,
        'nullable': false,
      },
      'audio_driver': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec.$,
        'nullable': false,
      },
      'cpu_stress': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec.$,
        'nullable': false,
      },
      'ufs_lifetime': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec.$,
        'nullable': false,
      },
      'disk_read': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec.$,
        'nullable': false,
      },
      'cpu_cache': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec.$,
        'nullable': false,
      },
      'prime_search': {
        'ordinal': 9,
        'type': ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec.$,
        'nullable': false,
      },
      'led_lit_up': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec.$,
        'nullable': false,
      },
      'floating_point': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec.$,
        'nullable': false,
      },
      'bluetooth_power': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec.$,
        'nullable': false,
      },
      'bluetooth_discovery': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'bluetooth_scanning': {
        'ordinal': 14,
        'type': ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec.$,
        'nullable': false,
      },
      'bluetooth_pairing': {
        'ordinal': 15,
        'type': ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec.$,
        'nullable': false,
      },
      'camera_availability': {
        'ordinal': 16,
        'type': ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec.$,
        'nullable': false,
      },
      'urandom': {
        'ordinal': 17,
        'type': ash.cros_healthd.mojom.UrandomRoutineArgumentSpec.$,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 18,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec.$,
        'nullable': false,
      },
      'sensitive_sensor': {
        'ordinal': 19,
        'type': ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec.$,
        'nullable': false,
      },
      'camera_frame_analysis': {
        'ordinal': 20,
        'type': ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec.$,
        'nullable': false,
      },
      'battery_discharge': {
        'ordinal': 21,
        'type': ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec.$,
        'nullable': false,
      },
      'keyboard_backlight': {
        'ordinal': 22,
        'type': ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineStateUnion
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineStateUnionSpec, 'ash.cros_healthd.mojom.RoutineStateUnion', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'initialized': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.RoutineStateInitializedSpec.$,
        'nullable': false,
      },
      'running': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.RoutineStateRunningSpec.$,
        'nullable': false,
      },
      'waiting': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.RoutineStateWaitingSpec.$,
        'nullable': false,
      },
      'finished': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.RoutineStateFinishedSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineRunningInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineRunningInfoSpec, 'ash.cros_healthd.mojom.RoutineRunningInfo', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInteraction
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineInteractionSpec, 'ash.cros_healthd.mojom.RoutineInteraction', {
      'unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'inquiry': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.RoutineInquirySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInquiry
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineInquirySpec, 'ash.cros_healthd.mojom.RoutineInquiry', {
      'unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec.$,
        'nullable': false,
      },
      'unplug_ac_adapter_inquiry': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec.$,
        'nullable': false,
      },
      'check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineInquiryReply
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineInquiryReplySpec, 'ash.cros_healthd.mojom.RoutineInquiryReply', {
      'unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'check_led_lit_up_state': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec.$,
        'nullable': false,
      },
      'unplug_ac_adapter': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.UnplugAcAdapterReplySpec.$,
        'nullable': false,
      },
      'check_keyboard_backlight_state': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec.$,
        'nullable': false,
      },
    });

// Union: RoutineDetail
mojo.internal.Union(
    ash.cros_healthd.mojom.RoutineDetailSpec, 'ash.cros_healthd.mojom.RoutineDetail', {
      'unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'memory': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.MemoryRoutineDetailSpec.$,
        'nullable': false,
      },
      'fan': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.FanRoutineDetailSpec.$,
        'nullable': false,
      },
      'audio_driver': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec.$,
        'nullable': false,
      },
      'ufs_lifetime': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec.$,
        'nullable': false,
      },
      'bluetooth_power': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec.$,
        'nullable': false,
      },
      'bluetooth_discovery': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec.$,
        'nullable': false,
      },
      'bluetooth_scanning': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec.$,
        'nullable': false,
      },
      'bluetooth_pairing': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec.$,
        'nullable': false,
      },
      'camera_availability': {
        'ordinal': 9,
        'type': ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec.$,
        'nullable': false,
      },
      'network_bandwidth': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec.$,
        'nullable': false,
      },
      'sensitive_sensor': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec.$,
        'nullable': false,
      },
      'camera_frame_analysis': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec.$,
        'nullable': false,
      },
      'battery_discharge': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec.$,
        'nullable': false,
      },
    });

// Struct: MemoryRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.MemoryRoutineArgumentSpec, 'ash.cros_healthd.mojom.MemoryRoutineArgument', [
      mojo.internal.StructField('max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_testing_mem_kib_$flag', originalFieldName: 'max_testing_mem_kib' }),
      mojo.internal.StructField('max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_testing_mem_kib_$value', originalFieldName: 'max_testing_mem_kib' }),
    ],
    [[0, 16]]);

// Struct: AudioDriverRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioDriverRoutineArgumentSpec, 'ash.cros_healthd.mojom.AudioDriverRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: CpuStressRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuStressRoutineArgumentSpec, 'ash.cros_healthd.mojom.CpuStressRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UfsLifetimeRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.UfsLifetimeRoutineArgumentSpec, 'ash.cros_healthd.mojom.UfsLifetimeRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: DiskReadRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.DiskReadRoutineArgumentSpec, 'ash.cros_healthd.mojom.DiskReadRoutineArgument', [
      mojo.internal.StructField('type', 0, 0, ash.cros_healthd.mojom.DiskReadTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disk_read_duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_size_mib', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CpuCacheRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.CpuCacheRoutineArgumentSpec, 'ash.cros_healthd.mojom.CpuCacheRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrimeSearchRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.PrimeSearchRoutineArgumentSpec, 'ash.cros_healthd.mojom.PrimeSearchRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VolumeButtonRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.VolumeButtonRoutineArgumentSpec, 'ash.cros_healthd.mojom.VolumeButtonRoutineArgument', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LedLitUpRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.LedLitUpRoutineArgumentSpec, 'ash.cros_healthd.mojom.LedLitUpRoutineArgument', [
      mojo.internal.StructField('name', 0, 0, ash.cros_healthd.mojom.LedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, ash.cros_healthd.mojom.LedColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyboardBacklightRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.KeyboardBacklightRoutineArgumentSpec, 'ash.cros_healthd.mojom.KeyboardBacklightRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: FloatingPointRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.FloatingPointRoutineArgumentSpec, 'ash.cros_healthd.mojom.FloatingPointRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPowerRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPowerRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothPowerRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BluetoothDiscoveryRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: FanRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.FanRoutineArgumentSpec, 'ash.cros_healthd.mojom.FanRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BluetoothScanningRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothScanningRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothScanningRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPairingRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPairingRoutineArgumentSpec, 'ash.cros_healthd.mojom.BluetoothPairingRoutineArgument', [
      mojo.internal.StructField('peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraAvailabilityRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.CameraAvailabilityRoutineArgumentSpec, 'ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument', [
      mojo.internal.StructField('run_camera_service_available_check', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('run_camera_diagnostic_service_available_check', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UrandomRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.UrandomRoutineArgumentSpec, 'ash.cros_healthd.mojom.UrandomRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NetworkBandwidthRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.NetworkBandwidthRoutineArgumentSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: SensitiveSensorRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensitiveSensorRoutineArgumentSpec, 'ash.cros_healthd.mojom.SensitiveSensorRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: CameraFrameAnalysisRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgumentSpec, 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: BatteryDischargeRoutineArgument
mojo.internal.Struct(
    ash.cros_healthd.mojom.BatteryDischargeRoutineArgumentSpec, 'ash.cros_healthd.mojom.BatteryDischargeRoutineArgument', [
      mojo.internal.StructField('exec_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('maximum_discharge_percent_allowed', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineState
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineStateSpec, 'ash.cros_healthd.mojom.RoutineState', [
      mojo.internal.StructField('state_union', 0, 0, ash.cros_healthd.mojom.RoutineStateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RoutineStateInitialized
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineStateInitializedSpec, 'ash.cros_healthd.mojom.RoutineStateInitialized', [
    ],
    [[0, 8]]);

// Struct: RoutineStateRunning
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineStateRunningSpec, 'ash.cros_healthd.mojom.RoutineStateRunning', [
      mojo.internal.StructField('info', 0, 0, ash.cros_healthd.mojom.RoutineRunningInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

// Struct: NetworkBandwidthRoutineRunningInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfoSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RoutineStateWaiting
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineStateWaitingSpec, 'ash.cros_healthd.mojom.RoutineStateWaiting', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CheckLedLitUpStateInquiry
mojo.internal.Struct(
    ash.cros_healthd.mojom.CheckLedLitUpStateInquirySpec, 'ash.cros_healthd.mojom.CheckLedLitUpStateInquiry', [
    ],
    [[0, 8]]);

// Struct: CheckLedLitUpStateReply
mojo.internal.Struct(
    ash.cros_healthd.mojom.CheckLedLitUpStateReplySpec, 'ash.cros_healthd.mojom.CheckLedLitUpStateReply', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnplugAcAdapterInquiry
mojo.internal.Struct(
    ash.cros_healthd.mojom.UnplugAcAdapterInquirySpec, 'ash.cros_healthd.mojom.UnplugAcAdapterInquiry', [
    ],
    [[0, 8]]);

// Struct: UnplugAcAdapterReply
mojo.internal.Struct(
    ash.cros_healthd.mojom.UnplugAcAdapterReplySpec, 'ash.cros_healthd.mojom.UnplugAcAdapterReply', [
    ],
    [[0, 8]]);

// Struct: CheckKeyboardBacklightStateInquiry
mojo.internal.Struct(
    ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquirySpec, 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquiry', [
    ],
    [[0, 8]]);

// Struct: CheckKeyboardBacklightStateReply
mojo.internal.Struct(
    ash.cros_healthd.mojom.CheckKeyboardBacklightStateReplySpec, 'ash.cros_healthd.mojom.CheckKeyboardBacklightStateReply', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RoutineStateFinished
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineStateFinishedSpec, 'ash.cros_healthd.mojom.RoutineStateFinished', [
      mojo.internal.StructField('detail', 0, 0, ash.cros_healthd.mojom.RoutineDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('has_passed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.MemoryRoutineDetailSpec, 'ash.cros_healthd.mojom.MemoryRoutineDetail', [
      mojo.internal.StructField('bytes_tested', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, ash.cros_healthd.mojom.MemtesterResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioDriverRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioDriverRoutineDetailSpec, 'ash.cros_healthd.mojom.AudioDriverRoutineDetail', [
      mojo.internal.StructField('internal_card_detected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('audio_devices_succeed_to_open', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UfsLifetimeRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.UfsLifetimeRoutineDetailSpec, 'ash.cros_healthd.mojom.UfsLifetimeRoutineDetail', [
      mojo.internal.StructField('pre_eol_info', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('device_life_time_est_a', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('device_life_time_est_b', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MemtesterResult
mojo.internal.Struct(
    ash.cros_healthd.mojom.MemtesterResultSpec, 'ash.cros_healthd.mojom.MemtesterResult', [
      mojo.internal.StructField('passed_items', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.MemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('failed_items', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.MemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothPoweredDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPoweredDetailSpec, 'ash.cros_healthd.mojom.BluetoothPoweredDetail', [
      mojo.internal.StructField('hci_powered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dbus_powered', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPowerRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPowerRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothPowerRoutineDetail', [
      mojo.internal.StructField('power_off_result', 0, 0, ash.cros_healthd.mojom.BluetoothPoweredDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('power_on_result', 8, 0, ash.cros_healthd.mojom.BluetoothPoweredDetailSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothDiscoveringDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveringDetail', [
      mojo.internal.StructField('hci_discovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dbus_discovering', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothDiscoveryRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail', [
      mojo.internal.StructField('start_discovery_result', 0, 0, ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stop_discovery_result', 8, 0, ash.cros_healthd.mojom.BluetoothDiscoveringDetailSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothScannedPeripheralInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec, 'ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo', [
      mojo.internal.StructField('rssi_history', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('peripheral_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('uuids', 24, 0, mojo.internal.Array(mojo_base.mojom.UuidSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: BluetoothScanningRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothScanningRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothScanningRoutineDetail', [
      mojo.internal.StructField('peripherals', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.BluetoothScannedPeripheralInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPairingPeripheralInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec, 'ash.cros_healthd.mojom.BluetoothPairingPeripheralInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothPairingRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothPairingRoutineDetailSpec, 'ash.cros_healthd.mojom.BluetoothPairingRoutineDetail', [
      mojo.internal.StructField('pairing_peripheral', 0, 0, ash.cros_healthd.mojom.BluetoothPairingPeripheralInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraAvailabilityRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.CameraAvailabilityRoutineDetailSpec, 'ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail', [
      mojo.internal.StructField('camera_service_available_check', 0, 0, ash.cros_healthd.mojom.CameraSubtestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_diagnostic_service_available_check', 8, 0, ash.cros_healthd.mojom.CameraSubtestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatteryDischargeRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.BatteryDischargeRoutineDetailSpec, 'ash.cros_healthd.mojom.BatteryDischargeRoutineDetail', [
      mojo.internal.StructField('discharge_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FanRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.FanRoutineDetailSpec, 'ash.cros_healthd.mojom.FanRoutineDetail', [
      mojo.internal.StructField('passed_fan_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('failed_fan_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('fan_count_status', 16, 0, ash.cros_healthd.mojom.HardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NetworkBandwidthRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.NetworkBandwidthRoutineDetailSpec, 'ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail', [
      mojo.internal.StructField('download_speed_kbps', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('upload_speed_kbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensitiveSensorInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensitiveSensorInfoSpec, 'ash.cros_healthd.mojom.SensitiveSensorInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensitiveSensorReport
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensitiveSensorReportSpec, 'ash.cros_healthd.mojom.SensitiveSensorReport', [
      mojo.internal.StructField('passed_sensors', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.SensitiveSensorInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('failed_sensors', 8, 0, mojo.internal.Array(ash.cros_healthd.mojom.SensitiveSensorInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sensor_presence_status', 16, 0, ash.cros_healthd.mojom.HardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SensitiveSensorRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.SensitiveSensorRoutineDetailSpec, 'ash.cros_healthd.mojom.SensitiveSensorRoutineDetail', [
      mojo.internal.StructField('base_accelerometer', 0, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid_accelerometer', 8, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_gyroscope', 16, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid_gyroscope', 24, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_magnetometer', 32, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid_magnetometer', 40, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_gravity_sensor', 48, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid_gravity_sensor', 56, 0, ash.cros_healthd.mojom.SensitiveSensorReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CameraFrameAnalysisRoutineDetail
mojo.internal.Struct(
    ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetailSpec, 'ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetail', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CrosHealthdRoutinesService
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_Params', [
      mojo.internal.StructField('routine_argument', 0, 0, ash.cros_healthd.mojom.RoutineArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routine_receiver', 8, 0, mojo.internal.InterfaceRequest(ash.cros_healthd.mojom.RoutineControlSpec), null, false, 0, undefined),
      mojo.internal.StructField('routine_observer', 16, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.mojom.RoutineObserverSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_Params', [
      mojo.internal.StructField('routine_argument', 0, 0, ash.cros_healthd.mojom.RoutineArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.cros_healthd.mojom.SupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRoutine(routine_argument, routine_receiver, routine_observer) {
    return this.$.createRoutine(routine_argument, routine_receiver, routine_observer);
  }
  isRoutineArgumentSupported(routine_argument) {
    return this.$.isRoutineArgumentSupported(routine_argument);
  }
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdRoutinesService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  createRoutine(routine_argument, routine_receiver, routine_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec,
      null,
      [routine_argument, routine_receiver, routine_observer],
      false);
  }

  isRoutineArgumentSupported(routine_argument) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [routine_argument],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdRoutinesService.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdRoutinesService',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver = class {
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec);
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdRoutinesService_CreateRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRoutine');
          const result = this.impl.createRoutine(params.routine_argument, params.routine_receiver, params.routine_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRoutineArgumentSupported');
          const result = this.impl.isRoutineArgumentSupported(params.routine_argument);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.CrosHealthdRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, header, rawHeader);
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

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver = ash.cros_healthd.mojom.CrosHealthdRoutinesServiceReceiver;

ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRemote;
ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = ash.cros_healthd.mojom.CrosHealthdRoutinesServicePendingReceiver;


// Interface: RoutineControl
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_GetState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.cros_healthd.mojom.RoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec, 'ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_Params', [
      mojo.internal.StructField('reply', 0, 0, ash.cros_healthd.mojom.RoutineInquiryReplySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.RoutineControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.RoutineControlRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.RoutineControlPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.RoutineControlRemoteCallHandler(this.proxy);
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
  replyInquiry(reply) {
    return this.$.replyInquiry(reply);
  }
};

ash.cros_healthd.mojom.RoutineControlRemoteCallHandler = class {
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
      ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec,
      ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec,
      [],
      false);
  }

  start() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec,
      null,
      [],
      false);
  }

  replyInquiry(reply) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec,
      null,
      [reply],
      false);
  }

};

ash.cros_healthd.mojom.RoutineControl.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.RoutineControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineControl',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.RoutineControlReceiver = class {
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec);
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec);
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_GetState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getState');
          const result = this.impl.getState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.mojom.RoutineControl_GetState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineControl_ReplyInquiry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replyInquiry');
          const result = this.impl.replyInquiry(params.reply);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cros_healthd.mojom.RoutineControlReceiver = ash.cros_healthd.mojom.RoutineControlReceiver;

ash.cros_healthd.mojom.RoutineControlPtr = ash.cros_healthd.mojom.RoutineControlRemote;
ash.cros_healthd.mojom.RoutineControlRequest = ash.cros_healthd.mojom.RoutineControlPendingReceiver;


// Interface: RoutineObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec, 'ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, ash.cros_healthd.mojom.RoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.RoutineObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.RoutineObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.RoutineObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.RoutineObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRoutineStateChange(state) {
    return this.$.onRoutineStateChange(state);
  }
};

ash.cros_healthd.mojom.RoutineObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RoutineObserver', [
      { explicit: 0 },
    ]);
  }

  onRoutineStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

};

ash.cros_healthd.mojom.RoutineObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.RoutineObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.RoutineObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.RoutineObserverReceiver = class {
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
             decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.RoutineObserver_OnRoutineStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRoutineStateChange');
          const result = this.impl.onRoutineStateChange(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cros_healthd.mojom.RoutineObserverReceiver = ash.cros_healthd.mojom.RoutineObserverReceiver;

ash.cros_healthd.mojom.RoutineObserverPtr = ash.cros_healthd.mojom.RoutineObserverRemote;
ash.cros_healthd.mojom.RoutineObserverRequest = ash.cros_healthd.mojom.RoutineObserverPendingReceiver;

