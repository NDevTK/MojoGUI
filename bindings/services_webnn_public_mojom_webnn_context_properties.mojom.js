// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_properties.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Enum: InputOperandLayout
webnn.mojom.InputOperandLayout = {
  kChannelsFirst: 0,
  kChannelsLast: 1,
};
webnn.mojom.InputOperandLayoutSpec = { $: mojo.internal.Enum() };

// Enum: Resample2DAxes
webnn.mojom.Resample2DAxes = {
  kAny: 0,
  kChannelsFirst: 1,
  kChannelsLast: 2,
};
webnn.mojom.Resample2DAxesSpec = { $: mojo.internal.Enum() };

// Enum: BatchNormalizationAxis
webnn.mojom.BatchNormalizationAxis = {
  kAny: 0,
  kChannelsFirst: 1,
};
webnn.mojom.BatchNormalizationAxisSpec = { $: mojo.internal.Enum() };

// Struct: SupportedDataTypes
webnn.mojom.SupportedDataTypesSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.SupportedDataTypes',
      packedSize: 16,
      fields: [
        { name: 'float32', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'float16', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'int32', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint32', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'int64', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint64', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'int8', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint8', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'int4', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint4', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SupportedRanks
webnn.mojom.SupportedRanksSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.SupportedRanks',
      packedSize: 16,
      fields: [
        { name: 'min', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SupportedTensors
webnn.mojom.SupportedTensorsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.SupportedTensors',
      packedSize: 24,
      fields: [
        { name: 'data_types', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.SupportedDataTypesSpec, nullable: false, minVersion: 0 },
        { name: 'ranks', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.SupportedRanksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DataTypeLimits
webnn.mojom.DataTypeLimitsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.DataTypeLimits',
      packedSize: 960,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'constant', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'arg_min_max_input', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'arg_min_max_output', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'batch_normalization_input', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'batch_normalization_mean', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'cast_input', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'clamp_input', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'concat_inputs', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'conv2d_input', packedOffset: 72, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'conv2d_bias', packedOffset: 80, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'conv_transpose2d_input', packedOffset: 88, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'conv_transpose2d_bias', packedOffset: 96, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'cumulative_sum_input', packedOffset: 104, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'dequantize_linear_input', packedOffset: 112, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'dequantize_linear_scale', packedOffset: 120, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'dequantize_linear_zero_point', packedOffset: 128, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'add_input', packedOffset: 136, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'sub_input', packedOffset: 144, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'mul_input', packedOffset: 152, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'div_input', packedOffset: 160, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'max_input', packedOffset: 168, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'min_input', packedOffset: 176, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'pow_input', packedOffset: 184, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'equal_input', packedOffset: 192, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'greater_input', packedOffset: 200, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'greater_or_equal_input', packedOffset: 208, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lesser_input', packedOffset: 216, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lesser_or_equal_input', packedOffset: 224, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'not_equal_input', packedOffset: 232, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'logical_and_input', packedOffset: 240, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'logical_or_input', packedOffset: 248, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'logical_xor_input', packedOffset: 256, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'logical_not_input', packedOffset: 264, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'is_nan_input', packedOffset: 272, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'is_infinite_input', packedOffset: 280, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'logical_output', packedOffset: 288, packedBitOffset: 0, type: webnn.mojom.SupportedDataTypesSpec, nullable: false, minVersion: 0 },
        { name: 'abs_input', packedOffset: 296, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'ceil_input', packedOffset: 304, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'cos_input', packedOffset: 312, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'erf_input', packedOffset: 320, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'exp_input', packedOffset: 328, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'floor_input', packedOffset: 336, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'identity_input', packedOffset: 344, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'log_input', packedOffset: 352, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'neg_input', packedOffset: 360, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reciprocal_input', packedOffset: 368, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'round_even_input', packedOffset: 376, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'sign_input', packedOffset: 384, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'sin_input', packedOffset: 392, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'sqrt_input', packedOffset: 400, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'tan_input', packedOffset: 408, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'elu_input', packedOffset: 416, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'expand_input', packedOffset: 424, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_input', packedOffset: 432, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_indices', packedOffset: 440, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_elements_input', packedOffset: 448, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_elements_indices', packedOffset: 456, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_nd_input', packedOffset: 464, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gather_nd_indices', packedOffset: 472, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gelu_input', packedOffset: 480, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gemm_a', packedOffset: 488, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gemm_c', packedOffset: 496, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gru_input', packedOffset: 504, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gru_bias', packedOffset: 512, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gru_output_sequence', packedOffset: 520, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gru_cell_input', packedOffset: 528, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'gru_cell_bias', packedOffset: 536, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'hard_sigmoid_input', packedOffset: 544, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'hard_swish_input', packedOffset: 552, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'instance_normalization_input', packedOffset: 560, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'instance_normalization_scale', packedOffset: 568, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'layer_normalization_input', packedOffset: 576, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'leaky_relu_input', packedOffset: 584, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'linear_input', packedOffset: 592, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lstm_input', packedOffset: 600, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lstm_bias', packedOffset: 608, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lstm_output_sequence', packedOffset: 616, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lstm_cell_input', packedOffset: 624, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'lstm_cell_bias', packedOffset: 632, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'matmul_input', packedOffset: 640, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'pad_input', packedOffset: 648, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'average_pool2d_input', packedOffset: 656, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'l2_pool2d_input', packedOffset: 664, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'max_pool2d_input', packedOffset: 672, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'prelu_input', packedOffset: 680, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'quantize_linear_input', packedOffset: 688, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'quantize_linear_zero_point', packedOffset: 696, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_l1_input', packedOffset: 704, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_l2_input', packedOffset: 712, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_log_sum_input', packedOffset: 720, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_log_sum_exp_input', packedOffset: 728, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_max_input', packedOffset: 736, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_mean_input', packedOffset: 744, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_min_input', packedOffset: 752, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_product_input', packedOffset: 760, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_sum_input', packedOffset: 768, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reduce_sum_square_input', packedOffset: 776, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'relu_input', packedOffset: 784, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'resample2d_input', packedOffset: 792, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reshape_input', packedOffset: 800, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'reverse_input', packedOffset: 808, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'scatter_elements_input', packedOffset: 816, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'scatter_elements_indices', packedOffset: 824, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'scatter_nd_input', packedOffset: 832, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'scatter_nd_indices', packedOffset: 840, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'scatter_nd_updates', packedOffset: 848, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'sigmoid_input', packedOffset: 856, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'slice_input', packedOffset: 864, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'softmax_input', packedOffset: 872, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'softplus_input', packedOffset: 880, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'softsign_input', packedOffset: 888, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'split_input', packedOffset: 896, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'tanh_input', packedOffset: 904, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'tile_input', packedOffset: 912, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'transpose_input', packedOffset: 920, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'triangular_input', packedOffset: 928, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'where_condition', packedOffset: 936, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
        { name: 'where_value', packedOffset: 944, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 960}]
    }
  }
};

// Struct: ContextProperties
webnn.mojom.ContextPropertiesSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ContextProperties',
      packedSize: 40,
      fields: [
        { name: 'input_operand_layout', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.InputOperandLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'resample_2d_axes', packedOffset: 4, packedBitOffset: 0, type: webnn.mojom.Resample2DAxesSpec, nullable: false, minVersion: 0 },
        { name: 'batch_normalization_axis', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.BatchNormalizationAxisSpec, nullable: false, minVersion: 0 },
        { name: 'tensor_byte_length_limit', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'data_type_limits', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.DataTypeLimitsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
