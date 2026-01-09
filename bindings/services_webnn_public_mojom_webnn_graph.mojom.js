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

// Interface: WebNNGraph
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
      webnn.mojom.WebNNGraph_Dispatch_ParamsSpec.$,
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
        { name: 'named_inputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'named_outputs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNGraphPtr = webnn.mojom.WebNNGraphRemote;
webnn.mojom.WebNNGraphRequest = webnn.mojom.WebNNGraphPendingReceiver;

