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
webnn.mojom.OperandDescriptor = class {
  constructor(values = {}) {
    this.pending_permutation = values.pending_permutation !== undefined ? values.pending_permutation : 0;
  }
};

// Struct: OperandId
webnn.mojom.OperandId = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: Operand
webnn.mojom.Operand = class {
  constructor(values = {}) {
    this.kInput = values.kInput !== undefined ? values.kInput : null;
  }
};

// Struct: ArgMinMax
webnn.mojom.ArgMinMax = class {
  constructor(values = {}) {
    this.kMin = values.kMin !== undefined ? values.kMin : null;
  }
};

// Struct: BatchNormalization
webnn.mojom.BatchNormalization = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Clamp
webnn.mojom.Clamp = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Concat
webnn.mojom.Concat = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Size2d
webnn.mojom.Size2d = class {
  constructor(values = {}) {
    this.width = values.width !== undefined ? values.width : 0;
  }
};

// Struct: Padding2d
webnn.mojom.Padding2d = class {
  constructor(values = {}) {
    this.ending = values.ending !== undefined ? values.ending : null;
  }
};

// Struct: Conv2d
webnn.mojom.Conv2d = class {
  constructor(values = {}) {
    this.kDirect = values.kDirect !== undefined ? values.kDirect : null;
  }
};

// Struct: CumulativeSum
webnn.mojom.CumulativeSum = class {
  constructor(values = {}) {
    this.axis = values.axis !== undefined ? values.axis : 0;
    this.would = values.would !== undefined ? values.would : null;
    this.yields = values.yields !== undefined ? values.yields : null;
    this.output = values.output !== undefined ? values.output : null;
    this.label = values.label !== undefined ? values.label : false;
  }
};

// Struct: DequantizeLinear
webnn.mojom.DequantizeLinear = class {
  constructor(values = {}) {
    this.input_operand_id = values.input_operand_id !== undefined ? values.input_operand_id : null;
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: ElementWiseBinary
webnn.mojom.ElementWiseBinary = class {
  constructor(values = {}) {
    this.kAdd = values.kAdd !== undefined ? values.kAdd : null;
  }
};

// Struct: ElementWiseUnary
webnn.mojom.ElementWiseUnary = class {
  constructor(values = {}) {
    this.kAbs = values.kAbs !== undefined ? values.kAbs : null;
  }
};

// Struct: Expand
webnn.mojom.Expand = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: ConstantPadding
webnn.mojom.ConstantPadding = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
  }
};

// Struct: EdgePadding
webnn.mojom.EdgePadding = class {
  constructor(values = {}) {
  }
};

// Struct: ReflectionPadding
webnn.mojom.ReflectionPadding = class {
  constructor(values = {}) {
  }
};

// Struct: InstanceNormalization
webnn.mojom.InstanceNormalization = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Matmul
webnn.mojom.Matmul = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Pad
webnn.mojom.Pad = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Reduce
webnn.mojom.Reduce = class {
  constructor(values = {}) {
    this.kL1 = values.kL1 !== undefined ? values.kL1 : null;
  }
};

// Struct: Pool2d
webnn.mojom.Pool2d = class {
  constructor(values = {}) {
    this.kAveragePool2d = values.kAveragePool2d !== undefined ? values.kAveragePool2d : null;
  }
};

// Struct: Range
webnn.mojom.Range = class {
  constructor(values = {}) {
    this.stride = values.stride !== undefined ? values.stride : 0;
  }
};

// Struct: Slice
webnn.mojom.Slice = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Elu
webnn.mojom.Elu = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Gather
webnn.mojom.Gather = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: GatherElements
webnn.mojom.GatherElements = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: GatherND
webnn.mojom.GatherND = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Gelu
webnn.mojom.Gelu = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Gru
webnn.mojom.Gru = class {
  constructor(values = {}) {
    this.layout = values.layout !== undefined ? values.layout : 0;
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: GruCell
webnn.mojom.GruCell = class {
  constructor(values = {}) {
    this.layout = values.layout !== undefined ? values.layout : 0;
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Gemm
webnn.mojom.Gemm = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: HardSigmoid
webnn.mojom.HardSigmoid = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: HardSwish
webnn.mojom.HardSwish = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: LayerNormalization
webnn.mojom.LayerNormalization = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: LeakyRelu
webnn.mojom.LeakyRelu = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Linear
webnn.mojom.Linear = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Lstm
webnn.mojom.Lstm = class {
  constructor(values = {}) {
    this.layout = values.layout !== undefined ? values.layout : 0;
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: LstmCell
webnn.mojom.LstmCell = class {
  constructor(values = {}) {
    this.layout = values.layout !== undefined ? values.layout : 0;
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Prelu
webnn.mojom.Prelu = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: QuantizeLinear
webnn.mojom.QuantizeLinear = class {
  constructor(values = {}) {
    this.input_operand_id = values.input_operand_id !== undefined ? values.input_operand_id : null;
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Relu
webnn.mojom.Relu = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Reshape
webnn.mojom.Reshape = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Reverse
webnn.mojom.Reverse = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: ScatterElements
webnn.mojom.ScatterElements = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: ScatterND
webnn.mojom.ScatterND = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Sigmoid
webnn.mojom.Sigmoid = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Softmax
webnn.mojom.Softmax = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Softplus
webnn.mojom.Softplus = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Softsign
webnn.mojom.Softsign = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Split
webnn.mojom.Split = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Tanh
webnn.mojom.Tanh = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: Tile
webnn.mojom.Tile = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Transpose
webnn.mojom.Transpose = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Triangular
webnn.mojom.Triangular = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: Resample2d
webnn.mojom.Resample2d = class {
  constructor(values = {}) {
    this.kNearestNeighbor = values.kNearestNeighbor !== undefined ? values.kNearestNeighbor : 0;
  }
};

// Struct: Where
webnn.mojom.Where = class {
  constructor(values = {}) {
    this.be = values.be !== undefined ? values.be : null;
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: GraphInfo
webnn.mojom.GraphInfo = class {
  constructor(values = {}) {
    this.operations = values.operations !== undefined ? values.operations : [];
    this.constant_operand_ids_to_handles = values.constant_operand_ids_to_handles !== undefined ? values.constant_operand_ids_to_handles : {};
    this.id_to_constant_tensor_operand_map = values.id_to_constant_tensor_operand_map !== undefined ? values.id_to_constant_tensor_operand_map : {};
  }
};

// Interface: WebNNGraph
webnn.mojom.WebNNGraphPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webnn.mojom.WebNNGraph';
  }

  dispatch(named_inputs, named_outputs) {
    // Method: Dispatch
    // Call: Dispatch(named_inputs, named_outputs)
  }

};

webnn.mojom.WebNNGraphRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
