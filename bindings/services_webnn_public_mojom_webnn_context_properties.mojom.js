// Auto-generated MojoJS binding
 // Source: chromium_src/services/webnn/public/mojom/webnn_context_properties.mojom
 // Module: webnn.mojom

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
 

 mojo.internal.bindings.webnn = mojo.internal.bindings.webnn || {};
mojo.internal.bindings.webnn.mojom = mojo.internal.bindings.webnn.mojom || {};

mojo.internal.bindings.webnn.mojom.InputOperandLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.Resample2DAxesSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.BatchNormalizationAxisSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.SupportedDataTypesSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SupportedRanksSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.DataTypeLimitsSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ContextPropertiesSpec = { $: {} };

// Enum: InputOperandLayout
mojo.internal.bindings.webnn.mojom.InputOperandLayout = {
  kChannelsFirst: 0,
  kChannelsLast: 1,
};

// Enum: Resample2DAxes
mojo.internal.bindings.webnn.mojom.Resample2DAxes = {
  kAny: 0,
  kChannelsFirst: 1,
  kChannelsLast: 2,
};

// Enum: BatchNormalizationAxis
mojo.internal.bindings.webnn.mojom.BatchNormalizationAxis = {
  kAny: 0,
  kChannelsFirst: 1,
};

// Struct: SupportedDataTypes
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SupportedDataTypesSpec, 'webnn.mojom.SupportedDataTypes', [
      mojo.internal.StructField('arg_float32', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_float16', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_int32', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uint32', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_int64', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uint64', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_int8', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uint8', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_int4', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uint4', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SupportedRanks
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SupportedRanksSpec, 'webnn.mojom.SupportedRanks', [
      mojo.internal.StructField('arg_min', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SupportedTensors
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec, 'webnn.mojom.SupportedTensors', [
      mojo.internal.StructField('arg_data_types', 0, 0, mojo.internal.bindings.webnn.mojom.SupportedDataTypesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ranks', 8, 0, mojo.internal.bindings.webnn.mojom.SupportedRanksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataTypeLimits
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.DataTypeLimitsSpec, 'webnn.mojom.DataTypeLimits', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_constant', 8, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_arg_min_max_input', 16, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_arg_min_max_output', 24, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_batch_normalization_input', 32, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_batch_normalization_mean', 40, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cast_input', 48, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_clamp_input', 56, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_concat_inputs', 64, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_conv2d_input', 72, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_conv2d_bias', 80, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_conv_transpose2d_input', 88, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_conv_transpose2d_bias', 96, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cumulative_sum_input', 104, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dequantize_linear_input', 112, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dequantize_linear_scale', 120, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dequantize_linear_zero_point', 128, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_add_input', 136, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sub_input', 144, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mul_input', 152, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_div_input', 160, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_input', 168, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_input', 176, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pow_input', 184, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_equal_input', 192, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_greater_input', 200, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_greater_or_equal_input', 208, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lesser_input', 216, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lesser_or_equal_input', 224, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_not_equal_input', 232, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logical_and_input', 240, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logical_or_input', 248, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logical_xor_input', 256, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logical_not_input', 264, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_nan_input', 272, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_infinite_input', 280, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_logical_output', 288, 0, mojo.internal.bindings.webnn.mojom.SupportedDataTypesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_abs_input', 296, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ceil_input', 304, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cos_input', 312, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_erf_input', 320, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exp_input', 328, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_floor_input', 336, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_identity_input', 344, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_input', 352, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_neg_input', 360, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reciprocal_input', 368, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_round_even_input', 376, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sign_input', 384, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sin_input', 392, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sqrt_input', 400, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tan_input', 408, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_elu_input', 416, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expand_input', 424, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_input', 432, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_indices', 440, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_elements_input', 448, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_elements_indices', 456, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_nd_input', 464, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gather_nd_indices', 472, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gelu_input', 480, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gemm_a', 488, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gemm_c', 496, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gru_input', 504, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gru_bias', 512, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gru_output_sequence', 520, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gru_cell_input', 528, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_gru_cell_bias', 536, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hard_sigmoid_input', 544, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hard_swish_input', 552, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_instance_normalization_input', 560, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_instance_normalization_scale', 568, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layer_normalization_input', 576, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_leaky_relu_input', 584, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_linear_input', 592, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lstm_input', 600, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lstm_bias', 608, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lstm_output_sequence', 616, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lstm_cell_input', 624, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_lstm_cell_bias', 632, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_matmul_input', 640, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pad_input', 648, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_average_pool2d_input', 656, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_l2_pool2d_input', 664, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_pool2d_input', 672, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_prelu_input', 680, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_quantize_linear_input', 688, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_quantize_linear_zero_point', 696, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_l1_input', 704, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_l2_input', 712, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_log_sum_input', 720, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_log_sum_exp_input', 728, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_max_input', 736, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_mean_input', 744, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_min_input', 752, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_product_input', 760, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_sum_input', 768, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reduce_sum_square_input', 776, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_relu_input', 784, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resample2d_input', 792, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reshape_input', 800, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reverse_input', 808, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scatter_elements_input', 816, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scatter_elements_indices', 824, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scatter_nd_input', 832, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scatter_nd_indices', 840, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scatter_nd_updates', 848, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sigmoid_input', 856, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_slice_input', 864, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_softmax_input', 872, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_softplus_input', 880, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_softsign_input', 888, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_split_input', 896, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tanh_input', 904, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tile_input', 912, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transpose_input', 920, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_triangular_input', 928, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_where_condition', 936, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_where_value', 944, 0, mojo.internal.bindings.webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 960]]);

// Struct: ContextProperties
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ContextPropertiesSpec, 'webnn.mojom.ContextProperties', [
      mojo.internal.StructField('arg_input_operand_layout', 0, 0, mojo.internal.bindings.webnn.mojom.InputOperandLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resample_2d_axes', 8, 0, mojo.internal.bindings.webnn.mojom.Resample2DAxesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_batch_normalization_axis', 16, 0, mojo.internal.bindings.webnn.mojom.BatchNormalizationAxisSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tensor_byte_length_limit', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_type_limits', 32, 0, mojo.internal.bindings.webnn.mojom.DataTypeLimitsSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);
