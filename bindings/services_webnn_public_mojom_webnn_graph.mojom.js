// Auto-generated MojoJS binding
 // Source: chromium_src/services/webnn/public/mojom/webnn_graph.mojom
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
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};

mojo.internal.bindings.webnn.mojom.DataTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.RecurrentNetworkDirectionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.GruWeightLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.LstmWeightLayoutSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.InterpolationModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webnn.mojom.NumberSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.PaddingModeSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.OperationSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.OperandDescriptorSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.OperandIdSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.OperandSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ArgMinMaxSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.BatchNormalizationSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ClampSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ConcatSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.Size2dSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.Padding2dSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.Conv2dSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.CumulativeSumSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.DequantizeLinearSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ElementWiseBinarySpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ElementWiseUnarySpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ExpandSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ConstantPaddingSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.EdgePaddingSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ReflectionPaddingSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.InstanceNormalizationSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.MatmulSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.PadSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ReduceSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.Pool2dSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.RangeSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SliceSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.EluSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GatherSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GatherElementsSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GatherNDSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GeluSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GruSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GruCellSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GemmSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.HardSigmoidSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.HardSwishSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.LayerNormalizationSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.LeakyReluSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.LinearSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.LstmSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.LstmCellSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.PreluSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.QuantizeLinearSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ReluSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ReshapeSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ReverseSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ScatterElementsSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.ScatterNDSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SigmoidSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SoftmaxSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SoftplusSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SoftsignSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.SplitSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.TanhSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.TileSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.TransposeSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.TriangularSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.Resample2dSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.WhereSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.GraphInfoSpec = { $: {} };
mojo.internal.bindings.webnn.mojom.WebNNGraph = {};
mojo.internal.bindings.webnn.mojom.WebNNGraph.$interfaceName = 'webnn.mojom.WebNNGraph';
mojo.internal.bindings.webnn.mojom.WebNNGraph_Dispatch_ParamsSpec = { $: {} };

// Enum: DataType
mojo.internal.bindings.webnn.mojom.DataType = {
  kFloat32: 0,
  kFloat16: 1,
  kInt32: 2,
  kUint32: 3,
  kInt64: 4,
  kUint64: 5,
  kInt8: 6,
  kUint8: 7,
  kInt4: 8,
  kUint4: 9,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kInput: 0,
  kConstant: 1,
  kOutput: 2,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kMin: 0,
  kMax: 1,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kDirect: 0,
  kTransposed: 1,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kAdd: 0,
  kSub: 1,
  kMul: 2,
  kDiv: 3,
  kMax: 4,
  kMin: 5,
  kPow: 6,
  kEqual: 7,
  kGreater: 8,
  kGreaterOrEqual: 9,
  kLesser: 10,
  kLesserOrEqual: 11,
  kNotEqual: 12,
  kLogicalAnd: 13,
  kLogicalOr: 14,
  kLogicalXor: 15,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kAbs: 0,
  kCeil: 1,
  kCos: 2,
  kExp: 3,
  kFloor: 4,
  kLog: 5,
  kNeg: 6,
  kSign: 7,
  kRoundEven: 8,
  kSin: 9,
  kTan: 10,
  kIsNaN: 11,
  kIsInfinite: 12,
  kLogicalNot: 13,
  kIdentity: 14,
  kSqrt: 15,
  kErf: 16,
  kReciprocal: 17,
  kCast: 18,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kL1: 0,
  kL2: 1,
  kLogSum: 2,
  kLogSumExp: 3,
  kMax: 4,
  kMean: 5,
  kMin: 6,
  kProduct: 7,
  kSum: 8,
  kSumSquare: 9,
};

// Enum: Kind
mojo.internal.bindings.webnn.mojom.Kind = {
  kAveragePool2d: 0,
  kL2Pool2d: 1,
  kMaxPool2d: 2,
};

// Enum: RecurrentNetworkActivation
mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivation = {
  kRelu: 0,
  kSigmoid: 1,
  kTanh: 2,
};

// Enum: RecurrentNetworkDirection
mojo.internal.bindings.webnn.mojom.RecurrentNetworkDirection = {
  kForward: 0,
  kBackward: 1,
  kBoth: 2,
};

// Enum: GruWeightLayout
mojo.internal.bindings.webnn.mojom.GruWeightLayout = {
  kZrn: 0,
  kRzn: 1,
};

// Enum: LstmWeightLayout
mojo.internal.bindings.webnn.mojom.LstmWeightLayout = {
  kIofg: 0,
  kIfgo: 1,
};

// Enum: InterpolationMode
mojo.internal.bindings.webnn.mojom.InterpolationMode = {
  kNearestNeighbor: 0,
  kLinear: 1,
};

// Union: Number
mojo.internal.Union(
    mojo.internal.bindings.webnn.mojom.NumberSpec, 'webnn.mojom.Number', {
      'arg_floating_point': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'arg_signed_integer': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'arg_unsigned_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: PaddingMode
mojo.internal.Union(
    mojo.internal.bindings.webnn.mojom.PaddingModeSpec, 'webnn.mojom.PaddingMode', {
      'arg_constant': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ConstantPaddingSpec.$,
        'nullable': false,
      },
      'arg_edge': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.EdgePaddingSpec.$,
        'nullable': false,
      },
      'arg_reflection': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ReflectionPaddingSpec.$,
        'nullable': false,
      },
    });

// Union: Operation
mojo.internal.Union(
    mojo.internal.bindings.webnn.mojom.OperationSpec, 'webnn.mojom.Operation', {
      'arg_arg_min_max': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ArgMinMaxSpec.$,
        'nullable': false,
      },
      'arg_batch_normalization': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.BatchNormalizationSpec.$,
        'nullable': false,
      },
      'arg_clamp': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ClampSpec.$,
        'nullable': false,
      },
      'arg_concat': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ConcatSpec.$,
        'nullable': false,
      },
      'arg_conv2d': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.Conv2dSpec.$,
        'nullable': false,
      },
      'arg_cumulative_sum': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.CumulativeSumSpec.$,
        'nullable': false,
      },
      'arg_dequantize_linear': {
        'ordinal': 6,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.DequantizeLinearSpec.$,
        'nullable': false,
      },
      'arg_element_wise_binary': {
        'ordinal': 7,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ElementWiseBinarySpec.$,
        'nullable': false,
      },
      'arg_elu': {
        'ordinal': 8,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.EluSpec.$,
        'nullable': false,
      },
      'arg_element_wise_unary': {
        'ordinal': 9,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ElementWiseUnarySpec.$,
        'nullable': false,
      },
      'arg_expand': {
        'ordinal': 10,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ExpandSpec.$,
        'nullable': false,
      },
      'arg_gather': {
        'ordinal': 11,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GatherSpec.$,
        'nullable': false,
      },
      'arg_gather_elements': {
        'ordinal': 12,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GatherElementsSpec.$,
        'nullable': false,
      },
      'arg_gather_nd': {
        'ordinal': 13,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GatherNDSpec.$,
        'nullable': false,
      },
      'arg_gelu': {
        'ordinal': 14,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GeluSpec.$,
        'nullable': false,
      },
      'arg_gemm': {
        'ordinal': 15,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GemmSpec.$,
        'nullable': false,
      },
      'arg_gru': {
        'ordinal': 16,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GruSpec.$,
        'nullable': false,
      },
      'arg_gru_cell': {
        'ordinal': 17,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GruCellSpec.$,
        'nullable': false,
      },
      'arg_hard_sigmoid': {
        'ordinal': 18,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.HardSigmoidSpec.$,
        'nullable': false,
      },
      'arg_hard_swish': {
        'ordinal': 19,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.HardSwishSpec.$,
        'nullable': false,
      },
      'arg_layer_normalization': {
        'ordinal': 20,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LayerNormalizationSpec.$,
        'nullable': false,
      },
      'arg_instance_normalization': {
        'ordinal': 21,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.InstanceNormalizationSpec.$,
        'nullable': false,
      },
      'arg_leaky_relu': {
        'ordinal': 22,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LeakyReluSpec.$,
        'nullable': false,
      },
      'arg_linear': {
        'ordinal': 23,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LinearSpec.$,
        'nullable': false,
      },
      'arg_lstm': {
        'ordinal': 24,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LstmSpec.$,
        'nullable': false,
      },
      'arg_lstm_cell': {
        'ordinal': 25,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LstmCellSpec.$,
        'nullable': false,
      },
      'arg_matmul': {
        'ordinal': 26,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.MatmulSpec.$,
        'nullable': false,
      },
      'arg_pad': {
        'ordinal': 27,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.PadSpec.$,
        'nullable': false,
      },
      'arg_pool2d': {
        'ordinal': 28,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.Pool2dSpec.$,
        'nullable': false,
      },
      'arg_prelu': {
        'ordinal': 29,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.PreluSpec.$,
        'nullable': false,
      },
      'arg_quantize_linear': {
        'ordinal': 30,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.QuantizeLinearSpec.$,
        'nullable': false,
      },
      'arg_reduce': {
        'ordinal': 31,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ReduceSpec.$,
        'nullable': false,
      },
      'arg_relu': {
        'ordinal': 32,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ReluSpec.$,
        'nullable': false,
      },
      'arg_resample2d': {
        'ordinal': 33,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.Resample2dSpec.$,
        'nullable': false,
      },
      'arg_reshape': {
        'ordinal': 34,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ReshapeSpec.$,
        'nullable': false,
      },
      'arg_reverse': {
        'ordinal': 35,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ReverseSpec.$,
        'nullable': false,
      },
      'arg_scatter_elements': {
        'ordinal': 36,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ScatterElementsSpec.$,
        'nullable': false,
      },
      'arg_scatter_nd': {
        'ordinal': 37,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.ScatterNDSpec.$,
        'nullable': false,
      },
      'arg_sigmoid': {
        'ordinal': 38,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SigmoidSpec.$,
        'nullable': false,
      },
      'arg_slice': {
        'ordinal': 39,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SliceSpec.$,
        'nullable': false,
      },
      'arg_softmax': {
        'ordinal': 40,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SoftmaxSpec.$,
        'nullable': false,
      },
      'arg_softplus': {
        'ordinal': 41,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SoftplusSpec.$,
        'nullable': false,
      },
      'arg_softsign': {
        'ordinal': 42,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SoftsignSpec.$,
        'nullable': false,
      },
      'arg_split': {
        'ordinal': 43,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.SplitSpec.$,
        'nullable': false,
      },
      'arg_tanh': {
        'ordinal': 44,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.TanhSpec.$,
        'nullable': false,
      },
      'arg_tile': {
        'ordinal': 45,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.TileSpec.$,
        'nullable': false,
      },
      'arg_transpose': {
        'ordinal': 46,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.TransposeSpec.$,
        'nullable': false,
      },
      'arg_triangular': {
        'ordinal': 47,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.TriangularSpec.$,
        'nullable': false,
      },
      'arg_where': {
        'ordinal': 48,
        'type': mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.WhereSpec.$,
        'nullable': false,
      },
    });

// Struct: OperandDescriptor
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.OperandDescriptorSpec, 'webnn.mojom.OperandDescriptor', [
      mojo.internal.StructField('arg_data_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.DataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shape', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pending_permutation', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OperandId
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.OperandIdSpec, 'webnn.mojom.OperandId', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Operand
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.OperandSpec, 'webnn.mojom.Operand', [
      mojo.internal.StructField('arg_kInput', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ArgMinMax
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ArgMinMaxSpec, 'webnn.mojom.ArgMinMax', [
      mojo.internal.StructField('arg_kMin', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatchNormalization
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.BatchNormalizationSpec, 'webnn.mojom.BatchNormalization', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mean_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_variance_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_operand_id', 32, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 40, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_label', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 56, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('arg_epsilon', 60, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Clamp
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ClampSpec, 'webnn.mojom.Clamp', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_value', 16, 0, mojo.internal.bindings.webnn.mojom.NumberSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_value', 24, 0, mojo.internal.bindings.webnn.mojom.NumberSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Concat
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ConcatSpec, 'webnn.mojom.Concat', [
      mojo.internal.StructField('arg_input_operand_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Size2d
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.Size2dSpec, 'webnn.mojom.Size2d', [
      mojo.internal.StructField('arg_height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Padding2d
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.Padding2dSpec, 'webnn.mojom.Padding2d', [
      mojo.internal.StructField('arg_beginning', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.Size2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ending', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.Size2dSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Conv2d
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.Conv2dSpec, 'webnn.mojom.Conv2d', [
      mojo.internal.StructField('arg_kDirect', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CumulativeSum
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.CumulativeSumSpec, 'webnn.mojom.CumulativeSum', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_exclusive', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reversed', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DequantizeLinear
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.DequantizeLinearSpec, 'webnn.mojom.DequantizeLinear', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_zero_point_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ElementWiseBinary
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ElementWiseBinarySpec, 'webnn.mojom.ElementWiseBinary', [
      mojo.internal.StructField('arg_kAdd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 88, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 96, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 104, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 136]]);

// Struct: ElementWiseUnary
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ElementWiseUnarySpec, 'webnn.mojom.ElementWiseUnary', [
      mojo.internal.StructField('arg_kAbs', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 88, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 96, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 104, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 128, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 136, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 144, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: Expand
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ExpandSpec, 'webnn.mojom.Expand', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantPadding
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ConstantPaddingSpec, 'webnn.mojom.ConstantPadding', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.webnn.mojom.NumberSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EdgePadding
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.EdgePaddingSpec, 'webnn.mojom.EdgePadding', [
    ],
    [[0, 8]]);

// Struct: ReflectionPadding
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ReflectionPaddingSpec, 'webnn.mojom.ReflectionPadding', [
    ],
    [[0, 8]]);

// Struct: InstanceNormalization
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.InstanceNormalizationSpec, 'webnn.mojom.InstanceNormalization', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_epsilon', 40, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Matmul
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.MatmulSpec, 'webnn.mojom.Matmul', [
      mojo.internal.StructField('arg_a_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_b_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Pad
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.PadSpec, 'webnn.mojom.Pad', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_beginning_padding', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_ending_padding', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 32, 0, mojo.internal.bindings.webnn.mojom.PaddingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Reduce
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ReduceSpec, 'webnn.mojom.Reduce', [
      mojo.internal.StructField('arg_kL1', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: Pool2d
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.Pool2dSpec, 'webnn.mojom.Pool2d', [
      mojo.internal.StructField('arg_kAveragePool2d', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Range
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.RangeSpec, 'webnn.mojom.Range', [
      mojo.internal.StructField('arg_start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stride', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Slice
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SliceSpec, 'webnn.mojom.Slice', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ranges', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Elu
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.EluSpec, 'webnn.mojom.Elu', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha', 24, 0, mojo.internal.Float, 1.0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Gather
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GatherSpec, 'webnn.mojom.Gather', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_indices_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GatherElements
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GatherElementsSpec, 'webnn.mojom.GatherElements', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_indices_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GatherND
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GatherNDSpec, 'webnn.mojom.GatherND', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_indices_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Gelu
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GeluSpec, 'webnn.mojom.Gelu', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Gru
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GruSpec, 'webnn.mojom.Gru', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_weight_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recurrent_weight_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_ids', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 32, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recurrent_bias_operand_id', 40, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_hidden_state_operand_id', 48, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direction', 56, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 64, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GruWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activations', 72, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_steps', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_size', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reset_after', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_return_sequence', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: GruCell
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GruCellSpec, 'webnn.mojom.GruCell', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_weight_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recurrent_weight_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_state_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 32, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 40, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recurrent_bias_operand_id', 48, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_layout', 56, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.GruWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activations', 64, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_size', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reset_after', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: Gemm
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GemmSpec, 'webnn.mojom.Gemm', [
      mojo.internal.StructField('arg_a_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_b_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_c_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha', 40, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_beta', 44, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_a_transpose', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_b_transpose', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: HardSigmoid
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.HardSigmoidSpec, 'webnn.mojom.HardSigmoid', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha', 24, 0, mojo.internal.Float, 0.2, false, 0, undefined),
      mojo.internal.StructField('arg_beta', 28, 0, mojo.internal.Float, 0.5, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HardSwish
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.HardSwishSpec, 'webnn.mojom.HardSwish', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LayerNormalization
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.LayerNormalizationSpec, 'webnn.mojom.LayerNormalization', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_axes', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_epsilon', 48, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: LeakyRelu
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.LeakyReluSpec, 'webnn.mojom.LeakyRelu', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha', 24, 0, mojo.internal.Float, 0.01, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Linear
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.LinearSpec, 'webnn.mojom.Linear', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpha', 24, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_beta', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Lstm
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.LstmSpec, 'webnn.mojom.Lstm', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_weight_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recurrent_weight_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_ids', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 32, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recurrent_bias_operand_id', 40, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_peephole_weight_operand_id', 48, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_hidden_state_operand_id', 56, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_cell_state_operand_id', 64, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direction', 72, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout', 80, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LstmWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activations', 88, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_steps', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_size', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_return_sequence', 112, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 128]]);

// Struct: LstmCell
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.LstmCellSpec, 'webnn.mojom.LstmCell', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_weight_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recurrent_weight_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_state_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cell_state_operand_id', 32, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_ids', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_bias_operand_id', 48, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recurrent_bias_operand_id', 56, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_peephole_weight_operand_id', 64, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_layout', 72, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.LstmWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activations', 80, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.RecurrentNetworkActivationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_size', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: Prelu
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.PreluSpec, 'webnn.mojom.Prelu', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_slope_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: QuantizeLinear
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.QuantizeLinearSpec, 'webnn.mojom.QuantizeLinear', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_zero_point_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Relu
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ReluSpec, 'webnn.mojom.Relu', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Reshape
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ReshapeSpec, 'webnn.mojom.Reshape', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Reverse
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ReverseSpec, 'webnn.mojom.Reverse', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_axes', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ScatterElements
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ScatterElementsSpec, 'webnn.mojom.ScatterElements', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_indices_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updates_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ScatterND
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.ScatterNDSpec, 'webnn.mojom.ScatterND', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_indices_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updates_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Sigmoid
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SigmoidSpec, 'webnn.mojom.Sigmoid', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Softmax
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SoftmaxSpec, 'webnn.mojom.Softmax', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Softplus
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SoftplusSpec, 'webnn.mojom.Softplus', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Softsign
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SoftsignSpec, 'webnn.mojom.Softsign', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Split
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.SplitSpec, 'webnn.mojom.Split', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_ids', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Tanh
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.TanhSpec, 'webnn.mojom.Tanh', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Tile
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.TileSpec, 'webnn.mojom.Tile', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_repetitions', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Transpose
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.TransposeSpec, 'webnn.mojom.Transpose', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_permutation', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Triangular
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.TriangularSpec, 'webnn.mojom.Triangular', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_diagonal', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upper', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Resample2d
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.Resample2dSpec, 'webnn.mojom.Resample2d', [
      mojo.internal.StructField('arg_input_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kNearestNeighbor', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Where
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.WhereSpec, 'webnn.mojom.Where', [
      mojo.internal.StructField('arg_condition_operand_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_true_value_operand_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_false_value_operand_id', 16, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operand_id', 24, 0, mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GraphInfo
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.GraphInfoSpec, 'webnn.mojom.GraphInfo', [
      mojo.internal.StructField('arg_operands', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_input_operands', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_output_operands', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_operations', 24, 0, mojo.internal.Array(mojo.internal.bindings.webnn.mojom.OperationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_constant_operand_ids_to_handles', 32, 0, mojo.internal.Map(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, mojo.internal.bindings.blink.mojom.WebNNPendingConstantTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id_to_constant_tensor_operand_map', 40, 0, mojo.internal.Map(mojo.internal.bindings.mojo.internal.bindings.webnn.mojom.OperandIdSpec.$, mojo.internal.bindings.blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: WebNNGraph
mojo.internal.Struct(
    mojo.internal.bindings.webnn.mojom.WebNNGraph_Dispatch_ParamsSpec, 'webnn.mojom.WebNNGraph_Dispatch_Params', [
      mojo.internal.StructField('arg_named_inputs', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_named_outputs', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.webnn.mojom.WebNNGraphPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.webnn.mojom.WebNNGraphRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNGraph';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.webnn.mojom.WebNNGraphPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.webnn.mojom.WebNNGraphRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dispatch(arg_named_inputs, arg_named_outputs) {
    return this.$.dispatch(arg_named_inputs, arg_named_outputs);
  }
};

mojo.internal.bindings.webnn.mojom.WebNNGraphRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebNNGraph', [
      { explicit: null },
    ]);
  }

  dispatch(arg_named_inputs, arg_named_outputs) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.webnn.mojom.WebNNGraph_Dispatch_ParamsSpec,
      null,
      [arg_named_inputs, arg_named_outputs],
      false);
  }

};

mojo.internal.bindings.webnn.mojom.WebNNGraph.getRemote = function() {
  let remote = new mojo.internal.bindings.webnn.mojom.WebNNGraphRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNGraph',
    'context');
  return remote.$;
};

mojo.internal.bindings.webnn.mojom.WebNNGraphReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebNNGraph', [
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
        
        // Try Method 0: Dispatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webnn.mojom.WebNNGraph_Dispatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Dispatch (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.webnn.mojom.WebNNGraph_Dispatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatch');
          const result = this.impl.dispatch(params.arg_named_inputs, params.arg_named_outputs);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.webnn.mojom.WebNNGraphReceiver = mojo.internal.bindings.webnn.mojom.WebNNGraphReceiver;

mojo.internal.bindings.webnn.mojom.WebNNGraphPtr = mojo.internal.bindings.webnn.mojom.WebNNGraphRemote;
mojo.internal.bindings.webnn.mojom.WebNNGraphRequest = mojo.internal.bindings.webnn.mojom.WebNNGraphPendingReceiver;

