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
webnn.mojom.SupportedDataTypesSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.SupportedDataTypes',
      packedSize: 16,
      fields: [
        { name: 'float32', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'float16', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'int32', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'uint32', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'int64', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'uint64', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'int8', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'uint8', packedOffset: 8, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'int4', packedOffset: 8, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'uint4', packedOffset: 8, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'min', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'data_types', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.SupportedDataTypesSpec, nullable: false },
        { name: 'ranks', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.SupportedRanksSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'constant', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'arg_min_max_input', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'arg_min_max_output', packedOffset: 32, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'batch_normalization_input', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'batch_normalization_mean', packedOffset: 48, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'cast_input', packedOffset: 56, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'clamp_input', packedOffset: 64, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'concat_inputs', packedOffset: 72, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'conv2d_input', packedOffset: 80, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'conv2d_bias', packedOffset: 88, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'conv_transpose2d_input', packedOffset: 96, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'conv_transpose2d_bias', packedOffset: 104, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'cumulative_sum_input', packedOffset: 112, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'dequantize_linear_input', packedOffset: 120, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'dequantize_linear_scale', packedOffset: 128, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'dequantize_linear_zero_point', packedOffset: 136, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'add_input', packedOffset: 144, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'sub_input', packedOffset: 152, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'mul_input', packedOffset: 160, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'div_input', packedOffset: 168, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'max_input', packedOffset: 176, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'min_input', packedOffset: 184, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'pow_input', packedOffset: 192, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'equal_input', packedOffset: 200, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'greater_input', packedOffset: 208, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'greater_or_equal_input', packedOffset: 216, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lesser_input', packedOffset: 224, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lesser_or_equal_input', packedOffset: 232, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'not_equal_input', packedOffset: 240, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'logical_and_input', packedOffset: 248, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'logical_or_input', packedOffset: 256, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'logical_xor_input', packedOffset: 264, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'logical_not_input', packedOffset: 272, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'is_nan_input', packedOffset: 280, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'is_infinite_input', packedOffset: 288, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'logical_output', packedOffset: 296, packedBitOffset: 0, type: webnn.mojom.SupportedDataTypesSpec, nullable: false },
        { name: 'abs_input', packedOffset: 304, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'ceil_input', packedOffset: 312, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'cos_input', packedOffset: 320, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'erf_input', packedOffset: 328, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'exp_input', packedOffset: 336, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'floor_input', packedOffset: 344, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'identity_input', packedOffset: 352, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'log_input', packedOffset: 360, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'neg_input', packedOffset: 368, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reciprocal_input', packedOffset: 376, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'round_even_input', packedOffset: 384, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'sign_input', packedOffset: 392, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'sin_input', packedOffset: 400, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'sqrt_input', packedOffset: 408, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'tan_input', packedOffset: 416, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'elu_input', packedOffset: 424, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'expand_input', packedOffset: 432, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_input', packedOffset: 440, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_indices', packedOffset: 448, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_elements_input', packedOffset: 456, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_elements_indices', packedOffset: 464, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_nd_input', packedOffset: 472, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gather_nd_indices', packedOffset: 480, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gelu_input', packedOffset: 488, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gemm_a', packedOffset: 496, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gemm_c', packedOffset: 504, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gru_input', packedOffset: 512, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gru_bias', packedOffset: 520, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gru_output_sequence', packedOffset: 528, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gru_cell_input', packedOffset: 536, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'gru_cell_bias', packedOffset: 544, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'hard_sigmoid_input', packedOffset: 552, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'hard_swish_input', packedOffset: 560, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'instance_normalization_input', packedOffset: 568, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'instance_normalization_scale', packedOffset: 576, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'layer_normalization_input', packedOffset: 584, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'leaky_relu_input', packedOffset: 592, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'linear_input', packedOffset: 600, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lstm_input', packedOffset: 608, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lstm_bias', packedOffset: 616, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lstm_output_sequence', packedOffset: 624, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lstm_cell_input', packedOffset: 632, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'lstm_cell_bias', packedOffset: 640, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'matmul_input', packedOffset: 648, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'pad_input', packedOffset: 656, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'average_pool2d_input', packedOffset: 664, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'l2_pool2d_input', packedOffset: 672, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'max_pool2d_input', packedOffset: 680, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'prelu_input', packedOffset: 688, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'quantize_linear_input', packedOffset: 696, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'quantize_linear_zero_point', packedOffset: 704, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_l1_input', packedOffset: 712, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_l2_input', packedOffset: 720, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_log_sum_input', packedOffset: 728, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_log_sum_exp_input', packedOffset: 736, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_max_input', packedOffset: 744, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_mean_input', packedOffset: 752, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_min_input', packedOffset: 760, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_product_input', packedOffset: 768, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_sum_input', packedOffset: 776, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reduce_sum_square_input', packedOffset: 784, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'relu_input', packedOffset: 792, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'resample2d_input', packedOffset: 800, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reshape_input', packedOffset: 808, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'reverse_input', packedOffset: 816, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'scatter_elements_input', packedOffset: 824, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'scatter_elements_indices', packedOffset: 832, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'scatter_nd_input', packedOffset: 840, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'scatter_nd_indices', packedOffset: 848, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'scatter_nd_updates', packedOffset: 856, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'sigmoid_input', packedOffset: 864, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'slice_input', packedOffset: 872, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'softmax_input', packedOffset: 880, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'softplus_input', packedOffset: 888, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'softsign_input', packedOffset: 896, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'split_input', packedOffset: 904, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'tanh_input', packedOffset: 912, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'tile_input', packedOffset: 920, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'transpose_input', packedOffset: 928, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'triangular_input', packedOffset: 936, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'where_condition', packedOffset: 944, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
        { name: 'where_value', packedOffset: 952, packedBitOffset: 0, type: webnn.mojom.SupportedTensorsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContextProperties
webnn.mojom.ContextPropertiesSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.ContextProperties',
      packedSize: 48,
      fields: [
        { name: 'input_operand_layout', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.InputOperandLayoutSpec, nullable: false },
        { name: 'resample_2d_axes', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.Resample2DAxesSpec, nullable: false },
        { name: 'batch_normalization_axis', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.BatchNormalizationAxisSpec, nullable: false },
        { name: 'tensor_byte_length_limit', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'data_type_limits', packedOffset: 40, packedBitOffset: 0, type: webnn.mojom.DataTypeLimitsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
