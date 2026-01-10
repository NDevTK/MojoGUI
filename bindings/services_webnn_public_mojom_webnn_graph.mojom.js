// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var services = services || {};
var blink = blink || {};

webnn.mojom.DataTypeSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.KindSpec = { $: mojo.internal.Enum() };
webnn.mojom.RecurrentNetworkActivationSpec = { $: mojo.internal.Enum() };
webnn.mojom.RecurrentNetworkDirectionSpec = { $: mojo.internal.Enum() };
webnn.mojom.GruWeightLayoutSpec = { $: mojo.internal.Enum() };
webnn.mojom.LstmWeightLayoutSpec = { $: mojo.internal.Enum() };
webnn.mojom.InterpolationModeSpec = { $: mojo.internal.Enum() };
webnn.mojom.NumberSpec = { $: {} };
webnn.mojom.PaddingModeSpec = { $: {} };
webnn.mojom.OperationSpec = { $: {} };
webnn.mojom.OperandDescriptorSpec = { $: {} };
webnn.mojom.OperandIdSpec = { $: {} };
webnn.mojom.OperandSpec = { $: {} };
webnn.mojom.ArgMinMaxSpec = { $: {} };
webnn.mojom.BatchNormalizationSpec = { $: {} };
webnn.mojom.ClampSpec = { $: {} };
webnn.mojom.ConcatSpec = { $: {} };
webnn.mojom.Size2dSpec = { $: {} };
webnn.mojom.Padding2dSpec = { $: {} };
webnn.mojom.Conv2dSpec = { $: {} };
webnn.mojom.CumulativeSumSpec = { $: {} };
webnn.mojom.DequantizeLinearSpec = { $: {} };
webnn.mojom.ElementWiseBinarySpec = { $: {} };
webnn.mojom.ElementWiseUnarySpec = { $: {} };
webnn.mojom.ExpandSpec = { $: {} };
webnn.mojom.ConstantPaddingSpec = { $: {} };
webnn.mojom.EdgePaddingSpec = { $: {} };
webnn.mojom.ReflectionPaddingSpec = { $: {} };
webnn.mojom.InstanceNormalizationSpec = { $: {} };
webnn.mojom.MatmulSpec = { $: {} };
webnn.mojom.PadSpec = { $: {} };
webnn.mojom.ReduceSpec = { $: {} };
webnn.mojom.Pool2dSpec = { $: {} };
webnn.mojom.RangeSpec = { $: {} };
webnn.mojom.SliceSpec = { $: {} };
webnn.mojom.EluSpec = { $: {} };
webnn.mojom.GatherSpec = { $: {} };
webnn.mojom.GatherElementsSpec = { $: {} };
webnn.mojom.GatherNDSpec = { $: {} };
webnn.mojom.GeluSpec = { $: {} };
webnn.mojom.GruSpec = { $: {} };
webnn.mojom.GruCellSpec = { $: {} };
webnn.mojom.GemmSpec = { $: {} };
webnn.mojom.HardSigmoidSpec = { $: {} };
webnn.mojom.HardSwishSpec = { $: {} };
webnn.mojom.LayerNormalizationSpec = { $: {} };
webnn.mojom.LeakyReluSpec = { $: {} };
webnn.mojom.LinearSpec = { $: {} };
webnn.mojom.LstmSpec = { $: {} };
webnn.mojom.LstmCellSpec = { $: {} };
webnn.mojom.PreluSpec = { $: {} };
webnn.mojom.QuantizeLinearSpec = { $: {} };
webnn.mojom.ReluSpec = { $: {} };
webnn.mojom.ReshapeSpec = { $: {} };
webnn.mojom.ReverseSpec = { $: {} };
webnn.mojom.ScatterElementsSpec = { $: {} };
webnn.mojom.ScatterNDSpec = { $: {} };
webnn.mojom.SigmoidSpec = { $: {} };
webnn.mojom.SoftmaxSpec = { $: {} };
webnn.mojom.SoftplusSpec = { $: {} };
webnn.mojom.SoftsignSpec = { $: {} };
webnn.mojom.SplitSpec = { $: {} };
webnn.mojom.TanhSpec = { $: {} };
webnn.mojom.TileSpec = { $: {} };
webnn.mojom.TransposeSpec = { $: {} };
webnn.mojom.TriangularSpec = { $: {} };
webnn.mojom.Resample2dSpec = { $: {} };
webnn.mojom.WhereSpec = { $: {} };
webnn.mojom.GraphInfoSpec = { $: {} };
webnn.mojom.WebNNGraph = {};
webnn.mojom.WebNNGraph.$interfaceName = 'webnn.mojom.WebNNGraph';
webnn.mojom.WebNNGraph_Dispatch_ParamsSpec = { $: {} };

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

// Union: Number
mojo.internal.Union(
    webnn.mojom.NumberSpec, 'webnn.mojom.Number', {
      'floating_point': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'signed_integer': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'unsigned_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: PaddingMode
mojo.internal.Union(
    webnn.mojom.PaddingModeSpec, 'webnn.mojom.PaddingMode', {
      'constant': {
        'ordinal': 0,
        'type': webnn.mojom.ConstantPaddingSpec.$,
        'nullable': false,
      },
      'edge': {
        'ordinal': 1,
        'type': webnn.mojom.EdgePaddingSpec.$,
        'nullable': false,
      },
      'reflection': {
        'ordinal': 2,
        'type': webnn.mojom.ReflectionPaddingSpec.$,
        'nullable': false,
      },
    });

// Union: Operation
mojo.internal.Union(
    webnn.mojom.OperationSpec, 'webnn.mojom.Operation', {
      'arg_min_max': {
        'ordinal': 0,
        'type': webnn.mojom.ArgMinMaxSpec.$,
        'nullable': false,
      },
      'batch_normalization': {
        'ordinal': 1,
        'type': webnn.mojom.BatchNormalizationSpec.$,
        'nullable': false,
      },
      'clamp': {
        'ordinal': 2,
        'type': webnn.mojom.ClampSpec.$,
        'nullable': false,
      },
      'concat': {
        'ordinal': 3,
        'type': webnn.mojom.ConcatSpec.$,
        'nullable': false,
      },
      'conv2d': {
        'ordinal': 4,
        'type': webnn.mojom.Conv2dSpec.$,
        'nullable': false,
      },
      'cumulative_sum': {
        'ordinal': 5,
        'type': webnn.mojom.CumulativeSumSpec.$,
        'nullable': false,
      },
      'dequantize_linear': {
        'ordinal': 6,
        'type': webnn.mojom.DequantizeLinearSpec.$,
        'nullable': false,
      },
      'element_wise_binary': {
        'ordinal': 7,
        'type': webnn.mojom.ElementWiseBinarySpec.$,
        'nullable': false,
      },
      'elu': {
        'ordinal': 8,
        'type': webnn.mojom.EluSpec.$,
        'nullable': false,
      },
      'element_wise_unary': {
        'ordinal': 9,
        'type': webnn.mojom.ElementWiseUnarySpec.$,
        'nullable': false,
      },
      'expand': {
        'ordinal': 10,
        'type': webnn.mojom.ExpandSpec.$,
        'nullable': false,
      },
      'gather': {
        'ordinal': 11,
        'type': webnn.mojom.GatherSpec.$,
        'nullable': false,
      },
      'gather_elements': {
        'ordinal': 12,
        'type': webnn.mojom.GatherElementsSpec.$,
        'nullable': false,
      },
      'gather_nd': {
        'ordinal': 13,
        'type': webnn.mojom.GatherNDSpec.$,
        'nullable': false,
      },
      'gelu': {
        'ordinal': 14,
        'type': webnn.mojom.GeluSpec.$,
        'nullable': false,
      },
      'gemm': {
        'ordinal': 15,
        'type': webnn.mojom.GemmSpec.$,
        'nullable': false,
      },
      'gru': {
        'ordinal': 16,
        'type': webnn.mojom.GruSpec.$,
        'nullable': false,
      },
      'gru_cell': {
        'ordinal': 17,
        'type': webnn.mojom.GruCellSpec.$,
        'nullable': false,
      },
      'hard_sigmoid': {
        'ordinal': 18,
        'type': webnn.mojom.HardSigmoidSpec.$,
        'nullable': false,
      },
      'hard_swish': {
        'ordinal': 19,
        'type': webnn.mojom.HardSwishSpec.$,
        'nullable': false,
      },
      'layer_normalization': {
        'ordinal': 20,
        'type': webnn.mojom.LayerNormalizationSpec.$,
        'nullable': false,
      },
      'instance_normalization': {
        'ordinal': 21,
        'type': webnn.mojom.InstanceNormalizationSpec.$,
        'nullable': false,
      },
      'leaky_relu': {
        'ordinal': 22,
        'type': webnn.mojom.LeakyReluSpec.$,
        'nullable': false,
      },
      'linear': {
        'ordinal': 23,
        'type': webnn.mojom.LinearSpec.$,
        'nullable': false,
      },
      'lstm': {
        'ordinal': 24,
        'type': webnn.mojom.LstmSpec.$,
        'nullable': false,
      },
      'lstm_cell': {
        'ordinal': 25,
        'type': webnn.mojom.LstmCellSpec.$,
        'nullable': false,
      },
      'matmul': {
        'ordinal': 26,
        'type': webnn.mojom.MatmulSpec.$,
        'nullable': false,
      },
      'pad': {
        'ordinal': 27,
        'type': webnn.mojom.PadSpec.$,
        'nullable': false,
      },
      'pool2d': {
        'ordinal': 28,
        'type': webnn.mojom.Pool2dSpec.$,
        'nullable': false,
      },
      'prelu': {
        'ordinal': 29,
        'type': webnn.mojom.PreluSpec.$,
        'nullable': false,
      },
      'quantize_linear': {
        'ordinal': 30,
        'type': webnn.mojom.QuantizeLinearSpec.$,
        'nullable': false,
      },
      'reduce': {
        'ordinal': 31,
        'type': webnn.mojom.ReduceSpec.$,
        'nullable': false,
      },
      'relu': {
        'ordinal': 32,
        'type': webnn.mojom.ReluSpec.$,
        'nullable': false,
      },
      'resample2d': {
        'ordinal': 33,
        'type': webnn.mojom.Resample2dSpec.$,
        'nullable': false,
      },
      'reshape': {
        'ordinal': 34,
        'type': webnn.mojom.ReshapeSpec.$,
        'nullable': false,
      },
      'reverse': {
        'ordinal': 35,
        'type': webnn.mojom.ReverseSpec.$,
        'nullable': false,
      },
      'scatter_elements': {
        'ordinal': 36,
        'type': webnn.mojom.ScatterElementsSpec.$,
        'nullable': false,
      },
      'scatter_nd': {
        'ordinal': 37,
        'type': webnn.mojom.ScatterNDSpec.$,
        'nullable': false,
      },
      'sigmoid': {
        'ordinal': 38,
        'type': webnn.mojom.SigmoidSpec.$,
        'nullable': false,
      },
      'slice': {
        'ordinal': 39,
        'type': webnn.mojom.SliceSpec.$,
        'nullable': false,
      },
      'softmax': {
        'ordinal': 40,
        'type': webnn.mojom.SoftmaxSpec.$,
        'nullable': false,
      },
      'softplus': {
        'ordinal': 41,
        'type': webnn.mojom.SoftplusSpec.$,
        'nullable': false,
      },
      'softsign': {
        'ordinal': 42,
        'type': webnn.mojom.SoftsignSpec.$,
        'nullable': false,
      },
      'split': {
        'ordinal': 43,
        'type': webnn.mojom.SplitSpec.$,
        'nullable': false,
      },
      'tanh': {
        'ordinal': 44,
        'type': webnn.mojom.TanhSpec.$,
        'nullable': false,
      },
      'tile': {
        'ordinal': 45,
        'type': webnn.mojom.TileSpec.$,
        'nullable': false,
      },
      'transpose': {
        'ordinal': 46,
        'type': webnn.mojom.TransposeSpec.$,
        'nullable': false,
      },
      'triangular': {
        'ordinal': 47,
        'type': webnn.mojom.TriangularSpec.$,
        'nullable': false,
      },
      'where': {
        'ordinal': 48,
        'type': webnn.mojom.WhereSpec.$,
        'nullable': false,
      },
    });

// Struct: OperandDescriptor
mojo.internal.Struct(
    webnn.mojom.OperandDescriptorSpec, 'webnn.mojom.OperandDescriptor', [
      mojo.internal.StructField('data_type', 0, 0, webnn.mojom.DataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shape', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('pending_permutation', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OperandId
mojo.internal.Struct(
    webnn.mojom.OperandIdSpec, 'webnn.mojom.OperandId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Operand
mojo.internal.Struct(
    webnn.mojom.OperandSpec, 'webnn.mojom.Operand', [
      mojo.internal.StructField('kInput', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ArgMinMax
mojo.internal.Struct(
    webnn.mojom.ArgMinMaxSpec, 'webnn.mojom.ArgMinMax', [
      mojo.internal.StructField('kMin', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BatchNormalization
mojo.internal.Struct(
    webnn.mojom.BatchNormalizationSpec, 'webnn.mojom.BatchNormalization', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mean_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variance_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_operand_id', 32, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 40, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('axis', 48, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('epsilon', 52, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
      mojo.internal.StructField('label', 56, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Clamp
mojo.internal.Struct(
    webnn.mojom.ClampSpec, 'webnn.mojom.Clamp', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_value', 16, 0, webnn.mojom.NumberSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_value', 24, 0, webnn.mojom.NumberSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Concat
mojo.internal.Struct(
    webnn.mojom.ConcatSpec, 'webnn.mojom.Concat', [
      mojo.internal.StructField('input_operand_ids', 0, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Size2d
mojo.internal.Struct(
    webnn.mojom.Size2dSpec, 'webnn.mojom.Size2d', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Padding2d
mojo.internal.Struct(
    webnn.mojom.Padding2dSpec, 'webnn.mojom.Padding2d', [
      mojo.internal.StructField('beginning', 0, 0, webnn.mojom.Size2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ending', 8, 0, webnn.mojom.Size2dSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Conv2d
mojo.internal.Struct(
    webnn.mojom.Conv2dSpec, 'webnn.mojom.Conv2d', [
      mojo.internal.StructField('kDirect', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CumulativeSum
mojo.internal.Struct(
    webnn.mojom.CumulativeSumSpec, 'webnn.mojom.CumulativeSum', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('exclusive', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reversed', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DequantizeLinear
mojo.internal.Struct(
    webnn.mojom.DequantizeLinearSpec, 'webnn.mojom.DequantizeLinear', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zero_point_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ElementWiseBinary
mojo.internal.Struct(
    webnn.mojom.ElementWiseBinarySpec, 'webnn.mojom.ElementWiseBinary', [
      mojo.internal.StructField('kAdd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ElementWiseUnary
mojo.internal.Struct(
    webnn.mojom.ElementWiseUnarySpec, 'webnn.mojom.ElementWiseUnary', [
      mojo.internal.StructField('kAbs', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Expand
mojo.internal.Struct(
    webnn.mojom.ExpandSpec, 'webnn.mojom.Expand', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantPadding
mojo.internal.Struct(
    webnn.mojom.ConstantPaddingSpec, 'webnn.mojom.ConstantPadding', [
      mojo.internal.StructField('value', 0, 0, webnn.mojom.NumberSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EdgePadding
mojo.internal.Struct(
    webnn.mojom.EdgePaddingSpec, 'webnn.mojom.EdgePadding', [
    ],
    [[0, 8]]);

// Struct: ReflectionPadding
mojo.internal.Struct(
    webnn.mojom.ReflectionPaddingSpec, 'webnn.mojom.ReflectionPadding', [
    ],
    [[0, 8]]);

// Struct: InstanceNormalization
mojo.internal.Struct(
    webnn.mojom.InstanceNormalizationSpec, 'webnn.mojom.InstanceNormalization', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('epsilon', 32, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
      mojo.internal.StructField('label', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Matmul
mojo.internal.Struct(
    webnn.mojom.MatmulSpec, 'webnn.mojom.Matmul', [
      mojo.internal.StructField('a_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('b_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Pad
mojo.internal.Struct(
    webnn.mojom.PadSpec, 'webnn.mojom.Pad', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('beginning_padding', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('ending_padding', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('mode', 32, 0, webnn.mojom.PaddingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Reduce
mojo.internal.Struct(
    webnn.mojom.ReduceSpec, 'webnn.mojom.Reduce', [
      mojo.internal.StructField('kL1', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Pool2d
mojo.internal.Struct(
    webnn.mojom.Pool2dSpec, 'webnn.mojom.Pool2d', [
      mojo.internal.StructField('kAveragePool2d', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Range
mojo.internal.Struct(
    webnn.mojom.RangeSpec, 'webnn.mojom.Range', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Slice
mojo.internal.Struct(
    webnn.mojom.SliceSpec, 'webnn.mojom.Slice', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ranges', 16, 0, mojo.internal.Array(webnn.mojom.RangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Elu
mojo.internal.Struct(
    webnn.mojom.EluSpec, 'webnn.mojom.Elu', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha', 16, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Gather
mojo.internal.Struct(
    webnn.mojom.GatherSpec, 'webnn.mojom.Gather', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('indices_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GatherElements
mojo.internal.Struct(
    webnn.mojom.GatherElementsSpec, 'webnn.mojom.GatherElements', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('indices_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GatherND
mojo.internal.Struct(
    webnn.mojom.GatherNDSpec, 'webnn.mojom.GatherND', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('indices_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Gelu
mojo.internal.Struct(
    webnn.mojom.GeluSpec, 'webnn.mojom.Gelu', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Gru
mojo.internal.Struct(
    webnn.mojom.GruSpec, 'webnn.mojom.Gru', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recurrent_weight_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('steps', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('hidden_size', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_operand_ids', 32, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 40, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recurrent_bias_operand_id', 48, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_hidden_state_operand_id', 56, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reset_after', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('return_sequence', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('direction', 72, 0, webnn.mojom.RecurrentNetworkDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layout', 80, 0, webnn.mojom.GruWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activations', 88, 0, mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 2Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 96, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: GruCell
mojo.internal.Struct(
    webnn.mojom.GruCellSpec, 'webnn.mojom.GruCell', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recurrent_weight_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hidden_state_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hidden_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 40, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 48, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recurrent_bias_operand_id', 56, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reset_after', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('layout', 72, 0, webnn.mojom.GruWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activations', 80, 0, mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 2Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 88, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: Gemm
mojo.internal.Struct(
    webnn.mojom.GemmSpec, 'webnn.mojom.Gemm', [
      mojo.internal.StructField('a_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('b_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('c_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('alpha', 32, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('beta', 36, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('a_transpose', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('b_transpose', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('label', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: HardSigmoid
mojo.internal.Struct(
    webnn.mojom.HardSigmoidSpec, 'webnn.mojom.HardSigmoid', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha', 16, 0, mojo.internal.Float, 0.2, false, 0, undefined),
      mojo.internal.StructField('beta', 20, 0, mojo.internal.Float, 0.5, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HardSwish
mojo.internal.Struct(
    webnn.mojom.HardSwishSpec, 'webnn.mojom.HardSwish', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LayerNormalization
mojo.internal.Struct(
    webnn.mojom.LayerNormalizationSpec, 'webnn.mojom.LayerNormalization', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('axes', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('epsilon', 40, 0, mojo.internal.Float, 1e-5, false, 0, undefined),
      mojo.internal.StructField('label', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: LeakyRelu
mojo.internal.Struct(
    webnn.mojom.LeakyReluSpec, 'webnn.mojom.LeakyRelu', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha', 16, 0, mojo.internal.Float, 0.01, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Linear
mojo.internal.Struct(
    webnn.mojom.LinearSpec, 'webnn.mojom.Linear', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha', 16, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('beta', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Lstm
mojo.internal.Struct(
    webnn.mojom.LstmSpec, 'webnn.mojom.Lstm', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recurrent_weight_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_ids', 24, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('steps', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('hidden_size', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 40, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recurrent_bias_operand_id', 48, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peephole_weight_operand_id', 56, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_hidden_state_operand_id', 64, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_cell_state_operand_id', 72, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('return_sequence', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('direction', 88, 0, webnn.mojom.RecurrentNetworkDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layout', 96, 0, webnn.mojom.LstmWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activations', 104, 0, mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 3Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 112, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 128]]);

// Struct: LstmCell
mojo.internal.Struct(
    webnn.mojom.LstmCellSpec, 'webnn.mojom.LstmCell', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recurrent_weight_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hidden_state_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cell_state_operand_id', 32, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_ids', 40, 0, mojo.internal.Array(webnn.mojom.OperandId, 2Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hidden_size', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bias_operand_id', 56, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('recurrent_bias_operand_id', 64, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peephole_weight_operand_id', 72, 0, webnn.mojom.OperandIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('layout', 80, 0, webnn.mojom.LstmWeightLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activations', 88, 0, mojo.internal.Array(webnn.mojom.RecurrentNetworkActivation, 3Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 96, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: Prelu
mojo.internal.Struct(
    webnn.mojom.PreluSpec, 'webnn.mojom.Prelu', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('slope_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: QuantizeLinear
mojo.internal.Struct(
    webnn.mojom.QuantizeLinearSpec, 'webnn.mojom.QuantizeLinear', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zero_point_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Relu
mojo.internal.Struct(
    webnn.mojom.ReluSpec, 'webnn.mojom.Relu', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Reshape
mojo.internal.Struct(
    webnn.mojom.ReshapeSpec, 'webnn.mojom.Reshape', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Reverse
mojo.internal.Struct(
    webnn.mojom.ReverseSpec, 'webnn.mojom.Reverse', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axes', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ScatterElements
mojo.internal.Struct(
    webnn.mojom.ScatterElementsSpec, 'webnn.mojom.ScatterElements', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('indices_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ScatterND
mojo.internal.Struct(
    webnn.mojom.ScatterNDSpec, 'webnn.mojom.ScatterND', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('indices_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Sigmoid
mojo.internal.Struct(
    webnn.mojom.SigmoidSpec, 'webnn.mojom.Sigmoid', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Softmax
mojo.internal.Struct(
    webnn.mojom.SoftmaxSpec, 'webnn.mojom.Softmax', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('axis', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Softplus
mojo.internal.Struct(
    webnn.mojom.SoftplusSpec, 'webnn.mojom.Softplus', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Softsign
mojo.internal.Struct(
    webnn.mojom.SoftsignSpec, 'webnn.mojom.Softsign', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Split
mojo.internal.Struct(
    webnn.mojom.SplitSpec, 'webnn.mojom.Split', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_ids', 8, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('axis', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Tanh
mojo.internal.Struct(
    webnn.mojom.TanhSpec, 'webnn.mojom.Tanh', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Tile
mojo.internal.Struct(
    webnn.mojom.TileSpec, 'webnn.mojom.Tile', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('repetitions', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Transpose
mojo.internal.Struct(
    webnn.mojom.TransposeSpec, 'webnn.mojom.Transpose', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permutation', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Triangular
mojo.internal.Struct(
    webnn.mojom.TriangularSpec, 'webnn.mojom.Triangular', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upper', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('diagonal', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Resample2d
mojo.internal.Struct(
    webnn.mojom.Resample2dSpec, 'webnn.mojom.Resample2d', [
      mojo.internal.StructField('input_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kNearestNeighbor', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Where
mojo.internal.Struct(
    webnn.mojom.WhereSpec, 'webnn.mojom.Where', [
      mojo.internal.StructField('condition_operand_id', 0, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('true_value_operand_id', 8, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('false_value_operand_id', 16, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_operand_id', 24, 0, webnn.mojom.OperandIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: GraphInfo
mojo.internal.Struct(
    webnn.mojom.GraphInfoSpec, 'webnn.mojom.GraphInfo', [
      mojo.internal.StructField('operands', 0, 0, mojo.internal.Array(webnn.mojom.OperandSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input_operands', 8, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_operands', 16, 0, mojo.internal.Array(webnn.mojom.OperandIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('operations', 24, 0, mojo.internal.Array(webnn.mojom.OperationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('constant_operand_ids_to_handles', 32, 0, mojo.internal.Map(webnn.mojom.OperandIdSpec.$, blink.mojom.WebNNPendingConstantTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('id_to_constant_tensor_operand_map', 40, 0, mojo.internal.Map(webnn.mojom.OperandIdSpec.$, blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: WebNNGraph
mojo.internal.Struct(
    webnn.mojom.WebNNGraph_Dispatch_ParamsSpec, 'webnn.mojom.WebNNGraph_Dispatch_Params', [
      mojo.internal.StructField('named_inputs', 0, 0, mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('named_outputs', 8, 0, mojo.internal.Map(mojo.internal.String, blink.mojom.WebNNTensorTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [named_inputs, named_outputs],
      false);
  }

};

webnn.mojom.WebNNGraph.getRemote = function() {
  let remote = new webnn.mojom.WebNNGraphRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'webnn.mojom.WebNNGraph',
    'context');
  return remote.$;
};

webnn.mojom.WebNNGraphPtr = webnn.mojom.WebNNGraphRemote;
webnn.mojom.WebNNGraphRequest = webnn.mojom.WebNNGraphPendingReceiver;

