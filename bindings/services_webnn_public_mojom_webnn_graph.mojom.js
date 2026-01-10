// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var blink = blink || {};


// Enum: DataType
webnn.mojom.DataType = {
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
webnn.mojom.DataTypeSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
  kInput: 0,
  kConstant: 1,
  kOutput: 2,
};
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
  kMin: 0,
  kMax: 1,
};
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
  kDirect: 0,
  kTransposed: 1,
};
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
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
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
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
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
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
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: Kind
webnn.mojom.Kind = {
  kAveragePool2d: 0,
  kL2Pool2d: 1,
  kMaxPool2d: 2,
};
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };

// Enum: RecurrentNetworkActivation
webnn.mojom.RecurrentNetworkActivation = {
  kRelu: 0,
  kSigmoid: 1,
  kTanh: 2,
};
webnn.mojom.RecurrentNetworkActivationSpec = { $: mojo.internal.Enum() };

// Enum: RecurrentNetworkDirection
webnn.mojom.RecurrentNetworkDirection = {
  kForward: 0,
  kBackward: 1,
  kBoth: 2,
};
webnn.mojom.RecurrentNetworkDirectionSpec = { $: mojo.internal.Enum() };

// Enum: GruWeightLayout
webnn.mojom.GruWeightLayout = {
  kZrn: 0,
  kRzn: 1,
};
webnn.mojom.GruWeightLayoutSpec = { $: mojo.internal.Enum() };

// Enum: LstmWeightLayout
webnn.mojom.LstmWeightLayout = {
  kIofg: 0,
  kIfgo: 1,
};
webnn.mojom.LstmWeightLayoutSpec = { $: mojo.internal.Enum() };

// Enum: InterpolationMode
webnn.mojom.InterpolationMode = {
  kNearestNeighbor: 0,
  kLinear: 1,
};
webnn.mojom.InterpolationModeSpec = { $: mojo.internal.Enum() };

// Union: Number
webnn.mojom.NumberSpec = { $: mojo.internal.Union(
    'webnn.mojom.Number', {
      'floating_point': {
        'ordinal': 0,
        'type': mojo.internal.Double,
      }},
      'signed_integer': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
      }},
      'unsigned_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Union: PaddingMode
webnn.mojom.PaddingModeSpec = { $: mojo.internal.Union(
    'webnn.mojom.PaddingMode', {
      'constant': {
        'ordinal': 0,
        'type': webnn.mojom.ConstantPaddingSpec,
      }},
      'edge': {
        'ordinal': 1,
        'type': webnn.mojom.EdgePaddingSpec,
      }},
      'reflection': {
        'ordinal': 2,
        'type': webnn.mojom.ReflectionPaddingSpec,
      }},
    })
};

// Union: Operation
webnn.mojom.OperationSpec = { $: mojo.internal.Union(
    'webnn.mojom.Operation', {
      'arg_min_max': {
        'ordinal': 0,
        'type': webnn.mojom.ArgMinMaxSpec,
      }},
      'batch_normalization': {
        'ordinal': 1,
        'type': webnn.mojom.BatchNormalizationSpec,
      }},
      'clamp': {
        'ordinal': 2,
        'type': webnn.mojom.ClampSpec,
      }},
      'concat': {
        'ordinal': 3,
        'type': webnn.mojom.ConcatSpec,
      }},
      'conv2d': {
        'ordinal': 4,
        'type': webnn.mojom.Conv2dSpec,
      }},
      'cumulative_sum': {
        'ordinal': 5,
        'type': webnn.mojom.CumulativeSumSpec,
      }},
      'dequantize_linear': {
        'ordinal': 6,
        'type': webnn.mojom.DequantizeLinearSpec,
      }},
      'element_wise_binary': {
        'ordinal': 7,
        'type': webnn.mojom.ElementWiseBinarySpec,
      }},
      'elu': {
        'ordinal': 8,
        'type': webnn.mojom.EluSpec,
      }},
      'element_wise_unary': {
        'ordinal': 9,
        'type': webnn.mojom.ElementWiseUnarySpec,
      }},
      'expand': {
        'ordinal': 10,
        'type': webnn.mojom.ExpandSpec,
      }},
      'gather': {
        'ordinal': 11,
        'type': webnn.mojom.GatherSpec,
      }},
      'gather_elements': {
        'ordinal': 12,
        'type': webnn.mojom.GatherElementsSpec,
      }},
      'gather_nd': {
        'ordinal': 13,
        'type': webnn.mojom.GatherNDSpec,
      }},
      'gelu': {
        'ordinal': 14,
        'type': webnn.mojom.GeluSpec,
      }},
      'gemm': {
        'ordinal': 15,
        'type': webnn.mojom.GemmSpec,
      }},
      'gru': {
        'ordinal': 16,
        'type': webnn.mojom.GruSpec,
      }},
      'gru_cell': {
        'ordinal': 17,
        'type': webnn.mojom.GruCellSpec,
      }},
      'hard_sigmoid': {
        'ordinal': 18,
        'type': webnn.mojom.HardSigmoidSpec,
      }},
      'hard_swish': {
        'ordinal': 19,
        'type': webnn.mojom.HardSwishSpec,
      }},
      'layer_normalization': {
        'ordinal': 20,
        'type': webnn.mojom.LayerNormalizationSpec,
      }},
      'instance_normalization': {
        'ordinal': 21,
        'type': webnn.mojom.InstanceNormalizationSpec,
      }},
      'leaky_relu': {
        'ordinal': 22,
        'type': webnn.mojom.LeakyReluSpec,
      }},
      'linear': {
        'ordinal': 23,
        'type': webnn.mojom.LinearSpec,
      }},
      'lstm': {
        'ordinal': 24,
        'type': webnn.mojom.LstmSpec,
      }},
      'lstm_cell': {
        'ordinal': 25,
        'type': webnn.mojom.LstmCellSpec,
      }},
      'matmul': {
        'ordinal': 26,
        'type': webnn.mojom.MatmulSpec,
      }},
      'pad': {
        'ordinal': 27,
        'type': webnn.mojom.PadSpec,
      }},
      'pool2d': {
        'ordinal': 28,
        'type': webnn.mojom.Pool2dSpec,
      }},
      'prelu': {
        'ordinal': 29,
        'type': webnn.mojom.PreluSpec,
      }},
      'quantize_linear': {
        'ordinal': 30,
        'type': webnn.mojom.QuantizeLinearSpec,
      }},
      'reduce': {
        'ordinal': 31,
        'type': webnn.mojom.ReduceSpec,
      }},
      'relu': {
        'ordinal': 32,
        'type': webnn.mojom.ReluSpec,
      }},
      'resample2d': {
        'ordinal': 33,
        'type': webnn.mojom.Resample2dSpec,
      }},
      'reshape': {
        'ordinal': 34,
        'type': webnn.mojom.ReshapeSpec,
      }},
      'reverse': {
        'ordinal': 35,
        'type': webnn.mojom.ReverseSpec,
      }},
      'scatter_elements': {
        'ordinal': 36,
        'type': webnn.mojom.ScatterElementsSpec,
      }},
      'scatter_nd': {
        'ordinal': 37,
        'type': webnn.mojom.ScatterNDSpec,
      }},
      'sigmoid': {
        'ordinal': 38,
        'type': webnn.mojom.SigmoidSpec,
      }},
      'slice': {
        'ordinal': 39,
        'type': webnn.mojom.SliceSpec,
      }},
      'softmax': {
        'ordinal': 40,
        'type': webnn.mojom.SoftmaxSpec,
      }},
      'softplus': {
        'ordinal': 41,
        'type': webnn.mojom.SoftplusSpec,
      }},
      'softsign': {
        'ordinal': 42,
        'type': webnn.mojom.SoftsignSpec,
      }},
      'split': {
        'ordinal': 43,
        'type': webnn.mojom.SplitSpec,
      }},
      'tanh': {
        'ordinal': 44,
        'type': webnn.mojom.TanhSpec,
      }},
      'tile': {
        'ordinal': 45,
        'type': webnn.mojom.TileSpec,
      }},
      'transpose': {
        'ordinal': 46,
        'type': webnn.mojom.TransposeSpec,
      }},
      'triangular': {
        'ordinal': 47,
        'type': webnn.mojom.TriangularSpec,
      }},
      'where': {
        'ordinal': 48,
        'type': webnn.mojom.WhereSpec,
      }},
    })
};

// Struct: OperandDescriptor
webnn.mojom.OperandDescriptorSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.OperandDescriptor',
      packedSize: 32,
      fields: [
        { name: 'data_type', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.DataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'shape', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'pending_permutation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OperandId
webnn.mojom.OperandIdSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.OperandId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Operand
webnn.mojom.OperandSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Operand',
      packedSize: 16,
      fields: [
        { name: 'kInput', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ArgMinMax
webnn.mojom.ArgMinMaxSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ArgMinMax',
      packedSize: 16,
      fields: [
        { name: 'kMin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BatchNormalization
webnn.mojom.BatchNormalizationSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.BatchNormalization',
      packedSize: 72,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'mean_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'variance_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'scale_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'axis', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'epsilon', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: Clamp
webnn.mojom.ClampSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Clamp',
      packedSize: 64,
      fields: [
        { name: 'input_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'min_value', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.NumberSpec, nullable: false, minVersion: 0 },
        { name: 'max_value', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.NumberSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: Concat
webnn.mojom.ConcatSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Concat',
      packedSize: 40,
      fields: [
        { name: 'input_operand_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Size2d
webnn.mojom.Size2dSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Size2d',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Padding2d
webnn.mojom.Padding2dSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Padding2d',
      packedSize: 24,
      fields: [
        { name: 'beginning', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.Size2dSpec, nullable: false, minVersion: 0 },
        { name: 'ending', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.Size2dSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Conv2d
webnn.mojom.Conv2dSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Conv2d',
      packedSize: 16,
      fields: [
        { name: 'kDirect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CumulativeSum
webnn.mojom.CumulativeSumSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CumulativeSum',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'exclusive', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reversed', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DequantizeLinear
webnn.mojom.DequantizeLinearSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.DequantizeLinear',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'scale_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'zero_point_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ElementWiseBinary
webnn.mojom.ElementWiseBinarySpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ElementWiseBinary',
      packedSize: 16,
      fields: [
        { name: 'kAdd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ElementWiseUnary
webnn.mojom.ElementWiseUnarySpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ElementWiseUnary',
      packedSize: 16,
      fields: [
        { name: 'kAbs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Expand
webnn.mojom.ExpandSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Expand',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConstantPadding
webnn.mojom.ConstantPaddingSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ConstantPadding',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.NumberSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: EdgePadding
webnn.mojom.EdgePaddingSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.EdgePadding',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ReflectionPadding
webnn.mojom.ReflectionPaddingSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ReflectionPadding',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: InstanceNormalization
webnn.mojom.InstanceNormalizationSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.InstanceNormalization',
      packedSize: 56,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'scale_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'epsilon', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: Matmul
webnn.mojom.MatmulSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Matmul',
      packedSize: 40,
      fields: [
        { name: 'a_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'b_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Pad
webnn.mojom.PadSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Pad',
      packedSize: 64,
      fields: [
        { name: 'input_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'beginning_padding', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'ending_padding', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.PaddingModeSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: Reduce
webnn.mojom.ReduceSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Reduce',
      packedSize: 16,
      fields: [
        { name: 'kL1', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Pool2d
webnn.mojom.Pool2dSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Pool2d',
      packedSize: 16,
      fields: [
        { name: 'kAveragePool2d', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Range
webnn.mojom.RangeSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Range',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Slice
webnn.mojom.SliceSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Slice',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'ranges', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.RangeSpec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Elu
webnn.mojom.EluSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Elu',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Gather
webnn.mojom.GatherSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Gather',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: GatherElements
webnn.mojom.GatherElementsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.GatherElements',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: GatherND
webnn.mojom.GatherNDSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.GatherND',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Gelu
webnn.mojom.GeluSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Gelu',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Gru
webnn.mojom.GruSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Gru',
      packedSize: 104,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'steps', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hidden_size', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output_operand_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'recurrent_bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'initial_hidden_state_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'reset_after', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'return_sequence', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 80, packedBitOffset: 0, type: webnn.mojom.RecurrentNetworkDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 84, packedBitOffset: 0, type: webnn.mojom.GruWeightLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'activations', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 2Spec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: GruCell
webnn.mojom.GruCellSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.GruCell',
      packedSize: 96,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'hidden_state_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'hidden_size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'recurrent_bias_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'reset_after', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 76, packedBitOffset: 0, type: webnn.mojom.GruWeightLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'activations', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 2Spec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: Gemm
webnn.mojom.GemmSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Gemm',
      packedSize: 64,
      fields: [
        { name: 'a_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'b_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'c_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'alpha', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'beta', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'a_transpose', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'b_transpose', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: HardSigmoid
webnn.mojom.HardSigmoidSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.HardSigmoid',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'beta', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: HardSwish
webnn.mojom.HardSwishSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.HardSwish',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: LayerNormalization
webnn.mojom.LayerNormalizationSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.LayerNormalization',
      packedSize: 64,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'scale_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'axes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'epsilon', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: LeakyRelu
webnn.mojom.LeakyReluSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.LeakyRelu',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Linear
webnn.mojom.LinearSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Linear',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'beta', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Lstm
webnn.mojom.LstmSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Lstm',
      packedSize: 120,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'steps', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hidden_size', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'recurrent_bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'peephole_weight_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'initial_hidden_state_operand_id', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'initial_cell_state_operand_id', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'return_sequence', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 96, packedBitOffset: 0, type: webnn.mojom.RecurrentNetworkDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 100, packedBitOffset: 0, type: webnn.mojom.LstmWeightLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'activations', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 3Spec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
    }
  }
};

// Struct: LstmCell
webnn.mojom.LstmCellSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.LstmCell',
      packedSize: 104,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'hidden_state_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'cell_state_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandId, 2Spec, false), nullable: false, minVersion: 0 },
        { name: 'hidden_size', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bias_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'recurrent_bias_operand_id', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'peephole_weight_operand_id', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true, minVersion: 0 },
        { name: 'layout', packedOffset: 92, packedBitOffset: 0, type: webnn.mojom.LstmWeightLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'activations', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 3Spec, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: Prelu
webnn.mojom.PreluSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Prelu',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'slope_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: QuantizeLinear
webnn.mojom.QuantizeLinearSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.QuantizeLinear',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'scale_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'zero_point_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Relu
webnn.mojom.ReluSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Relu',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Reshape
webnn.mojom.ReshapeSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Reshape',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Reverse
webnn.mojom.ReverseSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Reverse',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ScatterElements
webnn.mojom.ScatterElementsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ScatterElements',
      packedSize: 56,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'updates_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ScatterND
webnn.mojom.ScatterNDSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ScatterND',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'updates_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Sigmoid
webnn.mojom.SigmoidSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Sigmoid',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Softmax
webnn.mojom.SoftmaxSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Softmax',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Softplus
webnn.mojom.SoftplusSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Softplus',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Softsign
webnn.mojom.SoftsignSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Softsign',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Split
webnn.mojom.SplitSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Split',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Tanh
webnn.mojom.TanhSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Tanh',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Tile
webnn.mojom.TileSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Tile',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'repetitions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Transpose
webnn.mojom.TransposeSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Transpose',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'permutation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Triangular
webnn.mojom.TriangularSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Triangular',
      packedSize: 40,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'upper', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'diagonal', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Resample2d
webnn.mojom.Resample2dSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Resample2d',
      packedSize: 32,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'kNearestNeighbor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Where
webnn.mojom.WhereSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Where',
      packedSize: 48,
      fields: [
        { name: 'condition_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'true_value_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'false_value_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: GraphInfo
webnn.mojom.GraphInfoSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.GraphInfo',
      packedSize: 56,
      fields: [
        { name: 'operands', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandSpec, false), nullable: false, minVersion: 0 },
        { name: 'input_operands', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_operands', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperandIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'operations', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.OperationSpec, false), nullable: false, minVersion: 0 },
        { name: 'constant_operand_ids_to_handles', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(webnn.mojom.OperandIdSpec, blink.mojom.WebNNPendingConstantTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'id_to_constant_tensor_operand_map', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(webnn.mojom.OperandIdSpec, blink.mojom.WebNNTensorTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: WebNNGraph
webnn.mojom.WebNNGraph = {};

webnn.mojom.WebNNGraph_Dispatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraph_Dispatch_Params',
      packedSize: 24,
      fields: [
        { name: 'named_inputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'named_outputs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

webnn.mojom.WebNNGraphPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.WebNNGraphRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNGraph';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.WebNNGraphPendingReceiver,
      handle);
    this.$ = new webnn.mojom.WebNNGraphRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.WebNNGraphRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatch(named_inputs, named_outputs) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.WebNNGraph_Dispatch_ParamsSpec,
      null,
      [named_inputs, named_outputs]);
  }

};

webnn.mojom.WebNNGraph.getRemote = function() {
  let remote = new webnn.mojom.WebNNGraphRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNGraph',
    'context');
  return remote.$;
};

// ParamsSpec for Dispatch
webnn.mojom.WebNNGraph_Dispatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraph.Dispatch_Params',
      packedSize: 24,
      fields: [
        { name: 'named_inputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'named_outputs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNGraphPtr = webnn.mojom.WebNNGraphRemote;
webnn.mojom.WebNNGraphRequest = webnn.mojom.WebNNGraphPendingReceiver;

