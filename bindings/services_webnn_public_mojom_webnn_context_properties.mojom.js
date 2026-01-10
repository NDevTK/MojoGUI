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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};

webnn.mojom.InputOperandLayoutSpec = { $: mojo.internal.Enum() };
webnn.mojom.Resample2DAxesSpec = { $: mojo.internal.Enum() };
webnn.mojom.BatchNormalizationAxisSpec = { $: mojo.internal.Enum() };
webnn.mojom.SupportedDataTypesSpec = { $: {} };
webnn.mojom.SupportedRanksSpec = { $: {} };
webnn.mojom.SupportedTensorsSpec = { $: {} };
webnn.mojom.DataTypeLimitsSpec = { $: {} };
webnn.mojom.ContextPropertiesSpec = { $: {} };

// Enum: InputOperandLayout
webnn.mojom.InputOperandLayout = {
  kChannelsFirst: 0,
  kChannelsLast: 1,
};

// Enum: Resample2DAxes
webnn.mojom.Resample2DAxes = {
  kAny: 0,
  kChannelsFirst: 1,
  kChannelsLast: 2,
};

// Enum: BatchNormalizationAxis
webnn.mojom.BatchNormalizationAxis = {
  kAny: 0,
  kChannelsFirst: 1,
};

// Struct: SupportedDataTypes
mojo.internal.Struct(
    webnn.mojom.SupportedDataTypesSpec, 'webnn.mojom.SupportedDataTypes', [
      mojo.internal.StructField('float32', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('float16', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('int32', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint32', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('int64', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint64', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('int8', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint8', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('int4', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint4', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SupportedRanks
mojo.internal.Struct(
    webnn.mojom.SupportedRanksSpec, 'webnn.mojom.SupportedRanks', [
      mojo.internal.StructField('min', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SupportedTensors
mojo.internal.Struct(
    webnn.mojom.SupportedTensorsSpec, 'webnn.mojom.SupportedTensors', [
      mojo.internal.StructField('data_types', 0, 0, webnn.mojom.SupportedDataTypesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ranks', 8, 0, webnn.mojom.SupportedRanksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataTypeLimits
mojo.internal.Struct(
    webnn.mojom.DataTypeLimitsSpec, 'webnn.mojom.DataTypeLimits', [
      mojo.internal.StructField('input', 0, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('constant', 8, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_max_input', 16, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_max_output', 24, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_input', 32, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_mean', 40, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cast_input', 48, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clamp_input', 56, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('concat_inputs', 64, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('conv2d_input', 72, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('conv2d_bias', 80, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('conv_transpose2d_input', 88, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('conv_transpose2d_bias', 96, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cumulative_sum_input', 104, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_input', 112, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_scale', 120, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_zero_point', 128, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_input', 136, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_input', 144, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mul_input', 152, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('div_input', 160, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_input', 168, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_input', 176, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pow_input', 184, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('equal_input', 192, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('greater_input', 200, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('greater_or_equal_input', 208, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lesser_input', 216, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lesser_or_equal_input', 224, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('not_equal_input', 232, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_and_input', 240, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_or_input', 248, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_xor_input', 256, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_not_input', 264, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_nan_input', 272, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_infinite_input', 280, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_output', 288, 0, webnn.mojom.SupportedDataTypesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('abs_input', 296, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ceil_input', 304, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cos_input', 312, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('erf_input', 320, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exp_input', 328, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('floor_input', 336, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identity_input', 344, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_input', 352, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('neg_input', 360, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reciprocal_input', 368, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('round_even_input', 376, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sign_input', 384, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sin_input', 392, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sqrt_input', 400, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tan_input', 408, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('elu_input', 416, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expand_input', 424, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_input', 432, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_indices', 440, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_elements_input', 448, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_elements_indices', 456, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_nd_input', 464, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gather_nd_indices', 472, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gelu_input', 480, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gemm_a', 488, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gemm_c', 496, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gru_input', 504, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gru_bias', 512, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gru_output_sequence', 520, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gru_cell_input', 528, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gru_cell_bias', 536, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hard_sigmoid_input', 544, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hard_swish_input', 552, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instance_normalization_input', 560, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instance_normalization_scale', 568, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layer_normalization_input', 576, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('leaky_relu_input', 584, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('linear_input', 592, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lstm_input', 600, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lstm_bias', 608, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lstm_output_sequence', 616, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lstm_cell_input', 624, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lstm_cell_bias', 632, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matmul_input', 640, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pad_input', 648, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('average_pool2d_input', 656, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('l2_pool2d_input', 664, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_pool2d_input', 672, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prelu_input', 680, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quantize_linear_input', 688, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quantize_linear_zero_point', 696, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_l1_input', 704, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_l2_input', 712, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_log_sum_input', 720, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_log_sum_exp_input', 728, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_max_input', 736, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_mean_input', 744, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_min_input', 752, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_product_input', 760, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_sum_input', 768, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reduce_sum_square_input', 776, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relu_input', 784, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resample2d_input', 792, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reshape_input', 800, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reverse_input', 808, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scatter_elements_input', 816, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scatter_elements_indices', 824, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_input', 832, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_indices', 840, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_updates', 848, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sigmoid_input', 856, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('slice_input', 864, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('softmax_input', 872, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('softplus_input', 880, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('softsign_input', 888, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('split_input', 896, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tanh_input', 904, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tile_input', 912, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transpose_input', 920, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('triangular_input', 928, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('where_condition', 936, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('where_value', 944, 0, webnn.mojom.SupportedTensorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 960]]);

// Struct: ContextProperties
mojo.internal.Struct(
    webnn.mojom.ContextPropertiesSpec, 'webnn.mojom.ContextProperties', [
      mojo.internal.StructField('input_operand_layout', 0, 0, webnn.mojom.InputOperandLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resample_2d_axes', 8, 0, webnn.mojom.Resample2DAxesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_axis', 16, 0, webnn.mojom.BatchNormalizationAxisSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tensor_byte_length_limit', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data_type_limits', 32, 0, webnn.mojom.DataTypeLimitsSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);
