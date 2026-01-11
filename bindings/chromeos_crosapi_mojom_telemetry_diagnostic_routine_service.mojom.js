// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/telemetry_diagnostic_routine_service.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.crosapi.mojom.ButtonTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedColorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraSubtestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.IssueSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInteractionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl = {};
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver = {};
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutineObserver';
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService = {};
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService.$interfaceName = 'crosapi.mojom.TelemetryDiagnosticRoutinesService';
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec = { $: {} };

// Enum: ButtonType
mojo.internal.bindings.crosapi.mojom.ButtonType = {
  kUnmappedEnumField: 0,
  kVolumeUp: 1,
  kVolumeDown: 2,
};

// Enum: TelemetryDiagnosticLedName
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedName = {
  kUnmappedEnumField: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: TelemetryDiagnosticLedColor
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedColor = {
  kUnmappedEnumField: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: Type
mojo.internal.bindings.crosapi.mojom.Type = {
  kUnmappedEnumField: 0,
  kDownload: 1,
  kUpload: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kCorrectColor: 1,
  kNotLitUp: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kOk: 1,
  kAnyNotLitUp: 2,
};

// Enum: Reason
mojo.internal.bindings.crosapi.mojom.Reason = {
  kUnmappedEnumField: 0,
  kWaitingToBeScheduled: 1,
  kWaitingForInteraction: 2,
};

// Enum: TelemetryDiagnosticMemtesterTestItemEnum
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnum = {
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
  kEightBitWrites: 18,
  kSixteenBitWrites: 19,
};

// Enum: TelemetryDiagnosticHardwarePresenceStatus
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatus = {
  kUnmappedEnumField: 0,
  kMatched: 1,
  kNotMatched: 2,
  kNotConfigured: 3,
};

// Enum: TelemetryDiagnosticCameraSubtestResult
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraSubtestResult = {
  kUnmappedEnumField: 0,
  kNotRun: 1,
  kPassed: 2,
  kFailed: 3,
};

// Enum: Issue
mojo.internal.bindings.crosapi.mojom.Issue = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kCameraServiceNotAvailable: 2,
  kBlockedByPrivacyShutter: 3,
  kLensAreDirty: 4,
};

// Union: TelemetryDiagnosticRoutineArgument
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineArgument', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_memory': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_volume_button': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_fan': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_led_lit_up': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_camera_frame_analysis': {
        'ordinal': 6,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec.$,
        'nullable': false,
      },
      'arg_keyboard_backlight': {
        'ordinal': 7,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineRunningInfo
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineRunningInfo', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInquiryReply
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInquiryReply', {
      'arg_unrecognizedReply': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_check_led_lit_up_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec.$,
        'nullable': false,
      },
      'arg_check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInquiry
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInquiry', {
      'arg_unrecognizedInquiry': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_check_led_lit_up_state': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec.$,
        'nullable': false,
      },
      'arg_check_keyboard_backlight_state': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineInteraction
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInteractionSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineInteraction', {
      'arg_unrecognizedInteraction': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_inquiry': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquirySpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineDetail
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineDetail', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_memory': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_volume_button': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_fan': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_network_bandwidth': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec.$,
        'nullable': false,
      },
      'arg_camera_frame_analysis': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec.$,
        'nullable': false,
      },
    });

// Union: TelemetryDiagnosticRoutineStateUnion
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateUnion', {
      'arg_unrecognizedArgument': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_initialized': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec.$,
        'nullable': false,
      },
      'arg_running': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec.$,
        'nullable': false,
      },
      'arg_waiting': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec.$,
        'nullable': false,
      },
      'arg_finished': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec.$,
        'nullable': false,
      },
    });

// Struct: TelemetryDiagnosticMemoryRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineArgument', [
      mojo.internal.StructField('arg_max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_testing_mem_kib_$flag', originalFieldName: 'arg_max_testing_mem_kib' }),
      mojo.internal.StructField('arg_max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_testing_mem_kib_$value', originalFieldName: 'arg_max_testing_mem_kib' }),
    ],
    [[0, 16]]);

// Struct: TelemetryDiagnosticVolumeButtonRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineArgument', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticFanRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticFanRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticLedLitUpRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticLedLitUpRoutineArgument', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticLedColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticKeyboardBacklightRoutineArgument
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgumentSpec, 'crosapi.mojom.TelemetryDiagnosticKeyboardBacklightRoutineArgument', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticRoutineStateInitialized
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateInitializedSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateInitialized', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfoSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineRunningInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticRoutineStateRunning
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateRunningSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateRunning', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineRunningInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

// Struct: TelemetryDiagnosticCheckLedLitUpStateReply
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReplySpec, 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateReply', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateReply
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReplySpec, 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateReply', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticCheckLedLitUpStateInquiry
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquirySpec, 'crosapi.mojom.TelemetryDiagnosticCheckLedLitUpStateInquiry', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticCheckKeyboardBacklightStateInquiry
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquirySpec, 'crosapi.mojom.TelemetryDiagnosticCheckKeyboardBacklightStateInquiry', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticRoutineStateWaiting
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateWaitingSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateWaiting', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticMemtesterResult
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec, 'crosapi.mojom.TelemetryDiagnosticMemtesterResult', [
      mojo.internal.StructField('arg_passed_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_failed_items', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterTestItemEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticMemoryRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticMemoryRoutineDetail', [
      mojo.internal.StructField('arg_bytes_tested', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticMemtesterResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticVolumeButtonRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticVolumeButtonRoutineDetail', [
    ],
    [[0, 8]]);

// Struct: TelemetryDiagnosticFanRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticFanRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticFanRoutineDetail', [
      mojo.internal.StructField('arg_passed_fan_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_failed_fan_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fan_count_status', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticHardwarePresenceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryDiagnosticNetworkBandwidthRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticNetworkBandwidthRoutineDetail', [
      mojo.internal.StructField('arg_download_speed_kbps', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_speed_kbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticCameraFrameAnalysisRoutineDetail
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetailSpec, 'crosapi.mojom.TelemetryDiagnosticCameraFrameAnalysisRoutineDetail', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TelemetryDiagnosticRoutineStateFinished
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateFinishedSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineStateFinished', [
      mojo.internal.StructField('arg_detail', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineDetailSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_has_passed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryDiagnosticRoutineState
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineState', [
      mojo.internal.StructField('arg_state_union', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TelemetryDiagnosticRoutineControl
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_Params', [
      mojo.internal.StructField('arg_reply', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineInquiryReplySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutineControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRemoteCallHandler(this.proxy);
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
  replyToInquiry(arg_reply) {
    return this.$.replyToInquiry(arg_reply);
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutineControl', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec,
      [],
      false);
  }

  start() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec,
      null,
      [],
      false);
  }

  replyToInquiry(arg_reply) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec,
      null,
      [arg_reply],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutineControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutineControl', [
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReplyToInquiry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplyToInquiry (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getState');
          const result = this.impl.getState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_GetState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControl_ReplyToInquiry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replyToInquiry');
          const result = this.impl.replyToInquiry(params.arg_reply);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlPtr = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlRequest = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlPendingReceiver;


// Interface: TelemetryDiagnosticRoutineObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutineObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutineObserver', [
      { explicit: 0 },
    ]);
  }

  onRoutineStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutineObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutineObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserver_OnRoutineStateChange_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverPtr = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverRequest = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverPendingReceiver;


// Interface: TelemetryDiagnosticRoutinesService
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_Params', [
      mojo.internal.StructField('arg_routine_argument', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_routine_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineControlSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_routine_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineObserverSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_Params', [
      mojo.internal.StructField('arg_routine_argument', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutineArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, 'crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryExtensionSupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryDiagnosticRoutinesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutinesService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  createRoutine(arg_routine_argument, arg_routine_receiver, arg_routine_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec,
      null,
      [arg_routine_argument, arg_routine_receiver, arg_routine_observer],
      false);
  }

  isRoutineArgumentSupported(arg_routine_argument) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec,
      [arg_routine_argument],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryDiagnosticRoutinesService',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TelemetryDiagnosticRoutinesService', [
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_CreateRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRoutine');
          const result = this.impl.createRoutine(params.arg_routine_argument, params.arg_routine_receiver, params.arg_routine_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRoutineArgumentSupported');
          const result = this.impl.isRoutineArgumentSupported(params.arg_routine_argument);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesService_IsRoutineArgumentSupported_ResponseParamsSpec, header, rawHeader);
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

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServicePtr = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRequest = mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServicePendingReceiver;

