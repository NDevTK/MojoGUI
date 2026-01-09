// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


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

// Enum: Kind
webnn.mojom.Kind = {
  kInput: 0,
  kConstant: 1,
  kOutput: 2,
};

// Enum: Kind
webnn.mojom.Kind = {
  kMin: 0,
  kMax: 1,
};

// Enum: Kind
webnn.mojom.Kind = {
  kDirect: 0,
  kTransposed: 1,
};

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

// Enum: Kind
webnn.mojom.Kind = {
  kAveragePool2d: 0,
  kL2Pool2d: 1,
  kMaxPool2d: 2,
};

// Enum: RecurrentNetworkActivation
webnn.mojom.RecurrentNetworkActivation = {
  kRelu: 0,
  kSigmoid: 1,
  kTanh: 2,
};

// Enum: RecurrentNetworkDirection
webnn.mojom.RecurrentNetworkDirection = {
  kForward: 0,
  kBackward: 1,
  kBoth: 2,
};

// Enum: GruWeightLayout
webnn.mojom.GruWeightLayout = {
  kZrn: 0,
  kRzn: 1,
};

// Enum: LstmWeightLayout
webnn.mojom.LstmWeightLayout = {
  kIofg: 0,
  kIfgo: 1,
};

// Enum: InterpolationMode
webnn.mojom.InterpolationMode = {
  kNearestNeighbor: 0,
  kLinear: 1,
};

// Struct: OperandDescriptor
webnn.mojom.OperandDescriptorSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.OperandDescriptor',
      packedSize: 32,
      fields: [
        { name: 'data_type', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.DataTypeSpec, nullable: false },
        { name: 'shape', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pending_permutation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kInput', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kMin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'mean_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'variance_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'scale_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'label', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'epsilon', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Clamp
webnn.mojom.ClampSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Clamp',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'min_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'width', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'beginning', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.Size2dSpec, nullable: false },
        { name: 'ending', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.Size2dSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kDirect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CumulativeSum
webnn.mojom.CumulativeSumSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CumulativeSum',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'exclusive', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'reversed', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'scale_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'zero_point_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kAdd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kAbs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConstantPadding
webnn.mojom.ConstantPaddingSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ConstantPadding',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'scale_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'bias_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'epsilon', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'a_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'b_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Pad
webnn.mojom.PadSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Pad',
      packedSize: 56,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'beginning_padding', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ending_padding', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'mode', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kL1', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kAveragePool2d', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'stride', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'ranges', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Gru
webnn.mojom.GruSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Gru',
      packedSize: 112,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bias_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'recurrent_bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'initial_hidden_state_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'direction', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.RecurrentNetworkDirectionSpec, nullable: false },
        { name: 'layout', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.GruWeightLayoutSpec, nullable: false },
        { name: 'activations', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'steps', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'hidden_size', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'reset_after', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'return_sequence', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GruCell
webnn.mojom.GruCellSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.GruCell',
      packedSize: 104,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'hidden_state_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'recurrent_bias_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'layout', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.GruWeightLayoutSpec, nullable: false },
        { name: 'activations', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hidden_size', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'reset_after', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'a_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'b_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'c_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpha', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'beta', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'a_transpose', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'b_transpose', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'beta', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'scale_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'bias_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'axes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'epsilon', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'alpha', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'beta', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Lstm
webnn.mojom.LstmSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Lstm',
      packedSize: 128,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bias_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'recurrent_bias_operand_id', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'peephole_weight_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'initial_hidden_state_operand_id', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'initial_cell_state_operand_id', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'direction', packedOffset: 72, packedBitOffset: 0, type: webnn.mojom.RecurrentNetworkDirectionSpec, nullable: false },
        { name: 'layout', packedOffset: 80, packedBitOffset: 0, type: webnn.mojom.LstmWeightLayoutSpec, nullable: false },
        { name: 'activations', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'steps', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'hidden_size', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'return_sequence', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LstmCell
webnn.mojom.LstmCellSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.LstmCell',
      packedSize: 112,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'weight_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'recurrent_weight_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'hidden_state_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'cell_state_operand_id', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bias_operand_id', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'recurrent_bias_operand_id', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'peephole_weight_operand_id', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: true },
        { name: 'layout', packedOffset: 72, packedBitOffset: 0, type: webnn.mojom.LstmWeightLayoutSpec, nullable: false },
        { name: 'activations', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hidden_size', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'slope_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'scale_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'zero_point_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'axes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'updates_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'indices_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'updates_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'axis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'repetitions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'permutation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Triangular
webnn.mojom.TriangularSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.Triangular',
      packedSize: 48,
      fields: [
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'diagonal', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'upper', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'kNearestNeighbor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'condition_operand_id', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'true_value_operand_id', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'false_value_operand_id', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'output_operand_id', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.OperandIdSpec, nullable: false },
        { name: 'label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'operands', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'input_operands', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output_operands', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'operations', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'constant_operand_ids_to_handles', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'id_to_constant_tensor_operand_map', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebNNGraph
webnn.mojom.WebNNGraph = {};

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
        { name: 'named_inputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'named_outputs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNGraphPtr = webnn.mojom.WebNNGraphRemote;
webnn.mojom.WebNNGraphRequest = webnn.mojom.WebNNGraphPendingReceiver;

