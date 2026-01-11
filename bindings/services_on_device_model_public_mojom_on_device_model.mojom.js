// Auto-generated MojoJS binding
 // Source: chromium_src/services/on_device_model/public/mojom/on_device_model.mojom
 // Module: on_device_model.mojom

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
 

 mojo.internal.bindings.on_device_model = mojo.internal.bindings.on_device_model || {};
mojo.internal.bindings.on_device_model.mojom = mojo.internal.bindings.on_device_model.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};

mojo.internal.bindings.on_device_model.mojom.TokenSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.on_device_model.mojom.PrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.on_device_model.mojom.PerformanceClassSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.on_device_model.mojom.LoadModelResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.on_device_model.mojom.InputPieceSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.ResponseConstraintSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AdaptationAssetsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.LanguageDetectionResultSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.ResponseChunkSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.ResponseSummarySpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.LoadAdaptationParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.CapabilitiesSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.SessionParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.InputSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AppendOptionsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.GenerateOptionsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AudioDataSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.SpeechRecognitionResultSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AsrStreamOptionsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.DevicePerformanceInfoSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.DeviceInfoSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.StreamingResponder = {};
mojo.internal.bindings.on_device_model.mojom.StreamingResponderSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.StreamingResponder.$interfaceName = 'on_device_model.mojom.StreamingResponder';
mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.ContextClient = {};
mojo.internal.bindings.on_device_model.mojom.ContextClientSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.ContextClient.$interfaceName = 'on_device_model.mojom.ContextClient';
mojo.internal.bindings.on_device_model.mojom.ContextClient_OnComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session = {};
mojo.internal.bindings.on_device_model.mojom.SessionSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.Session.$interfaceName = 'on_device_model.mojom.Session';
mojo.internal.bindings.on_device_model.mojom.Session_Append_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_Generate_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_Score_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_Score_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_Clone_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_SetPriority_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.Session_AsrStream_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel = {};
mojo.internal.bindings.on_device_model.mojom.OnDeviceModelSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel.$interfaceName = 'on_device_model.mojom.OnDeviceModel';
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession = {};
mojo.internal.bindings.on_device_model.mojom.TextSafetySessionSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession.$interfaceName = 'on_device_model.mojom.TextSafetySession';
mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetySession_Clone_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetyModel = {};
mojo.internal.bindings.on_device_model.mojom.TextSafetyModelSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.TextSafetyModel.$interfaceName = 'on_device_model.mojom.TextSafetyModel';
mojo.internal.bindings.on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder = {};
mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder.$interfaceName = 'on_device_model.mojom.AsrStreamResponder';
mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec = { $: {} };
mojo.internal.bindings.on_device_model.mojom.AsrStreamInput = {};
mojo.internal.bindings.on_device_model.mojom.AsrStreamInputSpec = { $ : {} };
mojo.internal.bindings.on_device_model.mojom.AsrStreamInput.$interfaceName = 'on_device_model.mojom.AsrStreamInput';
mojo.internal.bindings.on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec = { $: {} };

// Enum: Token
mojo.internal.bindings.on_device_model.mojom.Token = {
  kSystem: 0,
  kModel: 1,
  kUser: 2,
  kEnd: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: Priority
mojo.internal.bindings.on_device_model.mojom.Priority = {
  kForeground: 0,
  kBackground: 1,
};

// Enum: PerformanceClass
mojo.internal.bindings.on_device_model.mojom.PerformanceClass = {
  kError: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  kVeryLow: 3,
  kLow: 4,
  kMedium: 5,
  kHigh: 6,
  kVeryHigh: 7,
};

// Enum: LoadModelResult
mojo.internal.bindings.on_device_model.mojom.LoadModelResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  MinVersion: 1,
  EnableIf: 1,
};

// Union: InputPiece
mojo.internal.Union(
    mojo.internal.bindings.on_device_model.mojom.InputPieceSpec, 'on_device_model.mojom.InputPiece', {
      'arg_token': {
        'ordinal': 0,
        'type': mojo.internal.bindings.on_device_model.mojom.TokenSpec.$,
        'nullable': false,
      },
      'arg_text': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_bitmap': {
        'ordinal': 2,
        'type': mojo.internal.bindings.skia.mojom.BitmapWithArbitraryBppSpec.$,
        'nullable': false,
      },
      'arg_unknown_type': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_audio': {
        'ordinal': 4,
        'type': mojo.internal.bindings.on_device_model.mojom.AudioDataSpec.$,
        'nullable': false,
      },
    });

// Union: ResponseConstraint
mojo.internal.Union(
    mojo.internal.bindings.on_device_model.mojom.ResponseConstraintSpec, 'on_device_model.mojom.ResponseConstraint', {
      'arg_json_schema': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_regex': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_unknown_type': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Struct: AdaptationAssets
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AdaptationAssetsSpec, 'on_device_model.mojom.AdaptationAssets', [
      mojo.internal.StructField('arg_weights', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_weights_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LanguageDetectionResult
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.LanguageDetectionResultSpec, 'on_device_model.mojom.LanguageDetectionResult', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reliability', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SafetyInfo
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec, 'on_device_model.mojom.SafetyInfo', [
      mojo.internal.StructField('arg_class_scores', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.bindings.on_device_model.mojom.LanguageDetectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResponseChunk
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.ResponseChunkSpec, 'on_device_model.mojom.ResponseChunk', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_safety_info', 8, 0, mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResponseSummary
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.ResponseSummarySpec, 'on_device_model.mojom.ResponseSummary', [
      mojo.internal.StructField('arg_safety_info', 0, 0, mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_output_token_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LoadAdaptationParams
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.LoadAdaptationParamsSpec, 'on_device_model.mojom.LoadAdaptationParams', [
      mojo.internal.StructField('arg_assets', 0, 0, mojo.internal.bindings.on_device_model.mojom.AdaptationAssetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Capabilities
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.CapabilitiesSpec, 'on_device_model.mojom.Capabilities', [
      mojo.internal.StructField('arg_image_input', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_audio_input', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SessionParams
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.SessionParamsSpec, 'on_device_model.mojom.SessionParams', [
      mojo.internal.StructField('arg_capabilities', 0, 0, mojo.internal.bindings.on_device_model.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_tokens', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_k', 12, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_temperature', 16, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: Input
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.InputSpec, 'on_device_model.mojom.Input', [
      mojo.internal.StructField('arg_pieces', 0, 0, mojo.internal.Array(mojo.internal.bindings.on_device_model.mojom.InputPieceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AppendOptions
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AppendOptionsSpec, 'on_device_model.mojom.AppendOptions', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.on_device_model.mojom.InputSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_tokens', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateOptions
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.GenerateOptionsSpec, 'on_device_model.mojom.GenerateOptions', [
      mojo.internal.StructField('arg_max_output_tokens', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_constraint', 8, 0, mojo.internal.bindings.on_device_model.mojom.ResponseConstraintSpec.$, null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

// Struct: AudioData
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AudioDataSpec, 'on_device_model.mojom.AudioData', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SpeechRecognitionResult
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.SpeechRecognitionResultSpec, 'on_device_model.mojom.SpeechRecognitionResult', [
      mojo.internal.StructField('arg_transcript', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_final', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AsrStreamOptions
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AsrStreamOptionsSpec, 'on_device_model.mojom.AsrStreamOptions', [
      mojo.internal.StructField('arg_sample_rate_hz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DevicePerformanceInfo
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.DevicePerformanceInfoSpec, 'on_device_model.mojom.DevicePerformanceInfo', [
      mojo.internal.StructField('arg_performance_class', 0, 0, mojo.internal.bindings.on_device_model.mojom.PerformanceClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_vram_mb', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.DeviceInfoSpec, 'on_device_model.mojom.DeviceInfo', [
      mojo.internal.StructField('arg_driver_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_supports_fp16', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: StreamingResponder
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec, 'on_device_model.mojom.StreamingResponder_OnResponse_Params', [
      mojo.internal.StructField('arg_chunk', 0, 0, mojo.internal.bindings.on_device_model.mojom.ResponseChunkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec, 'on_device_model.mojom.StreamingResponder_OnComplete_Params', [
      mojo.internal.StructField('arg_summary', 0, 0, mojo.internal.bindings.on_device_model.mojom.ResponseSummarySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.StreamingResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.StreamingResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.StreamingResponderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponse(arg_chunk) {
    return this.$.onResponse(arg_chunk);
  }
  onComplete(arg_summary) {
    return this.$.onComplete(arg_summary);
  }
};

mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.StreamingResponder', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onResponse(arg_chunk) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec,
      null,
      [arg_chunk],
      false);
  }

  onComplete(arg_summary) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec,
      null,
      [arg_summary],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.StreamingResponder.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.StreamingResponder',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.StreamingResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.StreamingResponder', [
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
        
        // Try Method 0: OnResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponse');
          const result = this.impl.onResponse(params.arg_chunk);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.StreamingResponder_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_summary);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.StreamingResponderReceiver = mojo.internal.bindings.on_device_model.mojom.StreamingResponderReceiver;

mojo.internal.bindings.on_device_model.mojom.StreamingResponderPtr = mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemote;
mojo.internal.bindings.on_device_model.mojom.StreamingResponderRequest = mojo.internal.bindings.on_device_model.mojom.StreamingResponderPendingReceiver;


// Interface: ContextClient
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.ContextClient_OnComplete_ParamsSpec, 'on_device_model.mojom.ContextClient_OnComplete_Params', [
      mojo.internal.StructField('arg_tokens_processed', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.ContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.ContextClientRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.ContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.ContextClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.ContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onComplete(arg_tokens_processed) {
    return this.$.onComplete(arg_tokens_processed);
  }
};

mojo.internal.bindings.on_device_model.mojom.ContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.ContextClient', [
      { explicit: 0 },
    ]);
  }

  onComplete(arg_tokens_processed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.ContextClient_OnComplete_ParamsSpec,
      null,
      [arg_tokens_processed],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.ContextClient.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.ContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.ContextClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.ContextClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.ContextClient', [
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
        
        // Try Method 0: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.ContextClient_OnComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.ContextClient_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_tokens_processed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.ContextClientReceiver = mojo.internal.bindings.on_device_model.mojom.ContextClientReceiver;

mojo.internal.bindings.on_device_model.mojom.ContextClientPtr = mojo.internal.bindings.on_device_model.mojom.ContextClientRemote;
mojo.internal.bindings.on_device_model.mojom.ContextClientRequest = mojo.internal.bindings.on_device_model.mojom.ContextClientPendingReceiver;


// Interface: Session
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_Append_ParamsSpec, 'on_device_model.mojom.Session_Append_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.on_device_model.mojom.AppendOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.on_device_model.mojom.ContextClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_Generate_ParamsSpec, 'on_device_model.mojom.Session_Generate_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.on_device_model.mojom.GenerateOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_responder', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.on_device_model.mojom.StreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec, 'on_device_model.mojom.Session_GetSizeInTokens_Params', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.on_device_model.mojom.InputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec, 'on_device_model.mojom.Session_GetSizeInTokens_ResponseParams', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_Score_ParamsSpec, 'on_device_model.mojom.Session_Score_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_Score_ResponseParamsSpec, 'on_device_model.mojom.Session_Score_ResponseParams', [
      mojo.internal.StructField('arg_probability', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_Clone_ParamsSpec, 'on_device_model.mojom.Session_Clone_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.SessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec, 'on_device_model.mojom.Session_GetProbabilitiesBlocking_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec, 'on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParams', [
      mojo.internal.StructField('arg_probabilities', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_SetPriority_ParamsSpec, 'on_device_model.mojom.Session_SetPriority_Params', [
      mojo.internal.StructField('arg_priority', 0, 0, mojo.internal.bindings.on_device_model.mojom.PrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.Session_AsrStream_ParamsSpec, 'on_device_model.mojom.Session_AsrStream_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.on_device_model.mojom.AsrStreamOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_responder', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.on_device_model.mojom.SessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.SessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.Session';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.SessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.SessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  append(arg_options, arg_client) {
    return this.$.append(arg_options, arg_client);
  }
  generate(arg_options, arg_responder) {
    return this.$.generate(arg_options, arg_responder);
  }
  getSizeInTokens(arg_input) {
    return this.$.getSizeInTokens(arg_input);
  }
  score(arg_text) {
    return this.$.score(arg_text);
  }
  clone(arg_session) {
    return this.$.clone(arg_session);
  }
  getProbabilitiesBlocking(arg_text) {
    return this.$.getProbabilitiesBlocking(arg_text);
  }
  setPriority(arg_priority) {
    return this.$.setPriority(arg_priority);
  }
  asrStream(arg_options, arg_stream, arg_responder) {
    return this.$.asrStream(arg_options, arg_stream, arg_responder);
  }
};

mojo.internal.bindings.on_device_model.mojom.SessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.Session', [
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 5 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
  }

  append(arg_options, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_Append_ParamsSpec,
      null,
      [arg_options, arg_client],
      false);
  }

  generate(arg_options, arg_responder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_Generate_ParamsSpec,
      null,
      [arg_options, arg_responder],
      false);
  }

  getSizeInTokens(arg_input) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec,
      [arg_input],
      false);
  }

  score(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_Score_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.Session_Score_ResponseParamsSpec,
      [arg_text],
      false);
  }

  clone(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_Clone_ParamsSpec,
      null,
      [arg_session],
      false);
  }

  getProbabilitiesBlocking(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec,
      [arg_text],
      false);
  }

  setPriority(arg_priority) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_SetPriority_ParamsSpec,
      null,
      [arg_priority],
      false);
  }

  asrStream(arg_options, arg_stream, arg_responder) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.Session_AsrStream_ParamsSpec,
      null,
      [arg_options, arg_stream, arg_responder],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.Session.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.SessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.Session',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.SessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.Session', [
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 5 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
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
        
        // Try Method 0: Append
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Append_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Append (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Generate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Generate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Generate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSizeInTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSizeInTokens (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Score
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Score_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Score (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Clone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetProbabilitiesBlocking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProbabilitiesBlocking (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetPriority
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_SetPriority_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPriority (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AsrStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_AsrStream_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AsrStream (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Append_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.append');
          const result = this.impl.append(params.arg_options, params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Generate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generate');
          const result = this.impl.generate(params.arg_options, params.arg_responder);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSizeInTokens');
          const result = this.impl.getSizeInTokens(params.arg_input);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.Session_GetSizeInTokens_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSizeInTokens FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Score_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.score');
          const result = this.impl.score(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.Session_Score_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Score FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_session);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProbabilitiesBlocking');
          const result = this.impl.getProbabilitiesBlocking(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.Session_GetProbabilitiesBlocking_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProbabilitiesBlocking FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_SetPriority_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPriority');
          const result = this.impl.setPriority(params.arg_priority);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.Session_AsrStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.asrStream');
          const result = this.impl.asrStream(params.arg_options, params.arg_stream, params.arg_responder);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.SessionReceiver = mojo.internal.bindings.on_device_model.mojom.SessionReceiver;

mojo.internal.bindings.on_device_model.mojom.SessionPtr = mojo.internal.bindings.on_device_model.mojom.SessionRemote;
mojo.internal.bindings.on_device_model.mojom.SessionRequest = mojo.internal.bindings.on_device_model.mojom.SessionPendingReceiver;


// Interface: OnDeviceModel
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_StartSession_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.SessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.on_device_model.mojom.SessionParamsSpec.$, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('arg_safety_info', 0, 0, mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_DetectLanguage_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.on_device_model.mojom.LanguageDetectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec, 'on_device_model.mojom.OnDeviceModel_LoadAdaptation_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.on_device_model.mojom.LoadAdaptationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_model', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec, 'on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.OnDeviceModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModelPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startSession(arg_session, arg_params) {
    return this.$.startSession(arg_session, arg_params);
  }
  classifyTextSafety(arg_text) {
    return this.$.classifyTextSafety(arg_text);
  }
  detectLanguage(arg_text) {
    return this.$.detectLanguage(arg_text);
  }
  loadAdaptation(arg_params, arg_model) {
    return this.$.loadAdaptation(arg_params, arg_model);
  }
};

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.OnDeviceModel', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  startSession(arg_session, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec,
      null,
      [arg_session, arg_params],
      false);
  }

  classifyTextSafety(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec,
      [arg_text],
      false);
  }

  detectLanguage(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec,
      [arg_text],
      false);
  }

  loadAdaptation(arg_params, arg_model) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec,
      [arg_params, arg_model],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.OnDeviceModel.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.OnDeviceModel',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.OnDeviceModel', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: StartSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ClassifyTextSafety
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClassifyTextSafety (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DetectLanguage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetectLanguage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LoadAdaptation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadAdaptation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_StartSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSession');
          const result = this.impl.startSession(params.arg_session, params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyTextSafety');
          const result = this.impl.classifyTextSafety(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClassifyTextSafety FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detectLanguage');
          const result = this.impl.detectLanguage(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_DetectLanguage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DetectLanguage FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadAdaptation');
          const result = this.impl.loadAdaptation(params.arg_params, params.arg_model);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.OnDeviceModel_LoadAdaptation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadAdaptation FAILED:', e));
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

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelReceiver = mojo.internal.bindings.on_device_model.mojom.OnDeviceModelReceiver;

mojo.internal.bindings.on_device_model.mojom.OnDeviceModelPtr = mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemote;
mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRequest = mojo.internal.bindings.on_device_model.mojom.OnDeviceModelPendingReceiver;


// Interface: TextSafetySession
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec, 'on_device_model.mojom.TextSafetySession_ClassifyTextSafety_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec, 'on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('arg_safety_info', 0, 0, mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec, 'on_device_model.mojom.TextSafetySession_DetectLanguage_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec, 'on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.on_device_model.mojom.LanguageDetectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetySession_Clone_ParamsSpec, 'on_device_model.mojom.TextSafetySession_Clone_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.TextSafetySessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  classifyTextSafety(arg_text) {
    return this.$.classifyTextSafety(arg_text);
  }
  detectLanguage(arg_text) {
    return this.$.detectLanguage(arg_text);
  }
  clone(arg_session) {
    return this.$.clone(arg_session);
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.TextSafetySession', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  classifyTextSafety(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [arg_text],
      false);
  }

  detectLanguage(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec,
      mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec,
      [arg_text],
      false);
  }

  clone(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.TextSafetySession_Clone_ParamsSpec,
      null,
      [arg_session],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.TextSafetySession.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetySession',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.TextSafetySession', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: ClassifyTextSafety
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClassifyTextSafety (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DetectLanguage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetectLanguage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_Clone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyTextSafety');
          const result = this.impl.classifyTextSafety(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.TextSafetySession_ClassifyTextSafety_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClassifyTextSafety FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detectLanguage');
          const result = this.impl.detectLanguage(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.on_device_model.mojom.TextSafetySession_DetectLanguage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DetectLanguage FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetySession_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_session);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionReceiver = mojo.internal.bindings.on_device_model.mojom.TextSafetySessionReceiver;

mojo.internal.bindings.on_device_model.mojom.TextSafetySessionPtr = mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemote;
mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRequest = mojo.internal.bindings.on_device_model.mojom.TextSafetySessionPendingReceiver;


// Interface: TextSafetyModel
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec, 'on_device_model.mojom.TextSafetyModel_StartSession_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.TextSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.TextSafetyModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.TextSafetyModelPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startSession(arg_session) {
    return this.$.startSession(arg_session);
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.TextSafetyModel', [
      { explicit: 0 },
    ]);
  }

  startSession(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec,
      null,
      [arg_session],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.TextSafetyModel.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.TextSafetyModel',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.TextSafetyModel', [
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
        
        // Try Method 0: StartSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSession (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.TextSafetyModel_StartSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSession');
          const result = this.impl.startSession(params.arg_session);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelReceiver = mojo.internal.bindings.on_device_model.mojom.TextSafetyModelReceiver;

mojo.internal.bindings.on_device_model.mojom.TextSafetyModelPtr = mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRemote;
mojo.internal.bindings.on_device_model.mojom.TextSafetyModelRequest = mojo.internal.bindings.on_device_model.mojom.TextSafetyModelPendingReceiver;


// Interface: AsrStreamResponder
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec, 'on_device_model.mojom.AsrStreamResponder_OnResponse_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.on_device_model.mojom.SpeechRecognitionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponse(arg_result) {
    return this.$.onResponse(arg_result);
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.AsrStreamResponder', [
      { explicit: 0 },
    ]);
  }

  onResponse(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamResponder',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.AsrStreamResponder', [
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
        
        // Try Method 0: OnResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponse (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.AsrStreamResponder_OnResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponse');
          const result = this.impl.onResponse(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderReceiver = mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderReceiver;

mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderPtr = mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRemote;
mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderRequest = mojo.internal.bindings.on_device_model.mojom.AsrStreamResponderPendingReceiver;


// Interface: AsrStreamInput
mojo.internal.Struct(
    mojo.internal.bindings.on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec, 'on_device_model.mojom.AsrStreamInput_AddAudioChunk_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.on_device_model.mojom.AudioDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemote = class {
  static get $interfaceName() {
    return 'on_device_model.mojom.AsrStreamInput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.on_device_model.mojom.AsrStreamInputPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addAudioChunk(arg_data) {
    return this.$.addAudioChunk(arg_data);
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.AsrStreamInput', [
      { explicit: 0 },
    ]);
  }

  addAudioChunk(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec,
      null,
      [arg_data],
      false);
  }

};

mojo.internal.bindings.on_device_model.mojom.AsrStreamInput.getRemote = function() {
  let remote = new mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_model.mojom.AsrStreamInput',
    'context');
  return remote.$;
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('on_device_model.mojom.AsrStreamInput', [
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
        
        // Try Method 0: AddAudioChunk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAudioChunk (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.on_device_model.mojom.AsrStreamInput_AddAudioChunk_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addAudioChunk');
          const result = this.impl.addAudioChunk(params.arg_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputReceiver = mojo.internal.bindings.on_device_model.mojom.AsrStreamInputReceiver;

mojo.internal.bindings.on_device_model.mojom.AsrStreamInputPtr = mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRemote;
mojo.internal.bindings.on_device_model.mojom.AsrStreamInputRequest = mojo.internal.bindings.on_device_model.mojom.AsrStreamInputPendingReceiver;

