// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_properties.mojom
// Module: webnn.mojom

'use strict';

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
      mojo.internal.StructField('data_types', 0, 0, webnn.mojom.SupportedDataTypesSpec, null, false, 0, undefined),
      mojo.internal.StructField('ranks', 8, 0, webnn.mojom.SupportedRanksSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DataTypeLimits
mojo.internal.Struct(
    webnn.mojom.DataTypeLimitsSpec, 'webnn.mojom.DataTypeLimits', [
      mojo.internal.StructField('input', 0, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('constant', 8, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_max_input', 16, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_max_output', 24, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_input', 32, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_mean', 40, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('cast_input', 48, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('clamp_input', 56, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('concat_inputs', 64, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('conv2d_input', 72, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('conv2d_bias', 80, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('conv_transpose2d_input', 88, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('conv_transpose2d_bias', 96, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('cumulative_sum_input', 104, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_input', 112, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_scale', 120, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('dequantize_linear_zero_point', 128, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('add_input', 136, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sub_input', 144, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('mul_input', 152, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('div_input', 160, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_input', 168, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('min_input', 176, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('pow_input', 184, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('equal_input', 192, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('greater_input', 200, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('greater_or_equal_input', 208, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lesser_input', 216, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lesser_or_equal_input', 224, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('not_equal_input', 232, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('logical_and_input', 240, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('logical_or_input', 248, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('logical_xor_input', 256, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('logical_not_input', 264, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_nan_input', 272, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_infinite_input', 280, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('logical_output', 288, 0, webnn.mojom.SupportedDataTypesSpec, null, false, 0, undefined),
      mojo.internal.StructField('abs_input', 296, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('ceil_input', 304, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('cos_input', 312, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('erf_input', 320, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('exp_input', 328, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('floor_input', 336, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('identity_input', 344, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('log_input', 352, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('neg_input', 360, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reciprocal_input', 368, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('round_even_input', 376, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sign_input', 384, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sin_input', 392, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sqrt_input', 400, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('tan_input', 408, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('elu_input', 416, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('expand_input', 424, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_input', 432, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_indices', 440, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_elements_input', 448, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_elements_indices', 456, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_nd_input', 464, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gather_nd_indices', 472, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gelu_input', 480, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gemm_a', 488, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gemm_c', 496, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gru_input', 504, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gru_bias', 512, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gru_output_sequence', 520, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gru_cell_input', 528, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('gru_cell_bias', 536, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('hard_sigmoid_input', 544, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('hard_swish_input', 552, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('instance_normalization_input', 560, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('instance_normalization_scale', 568, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('layer_normalization_input', 576, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('leaky_relu_input', 584, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('linear_input', 592, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lstm_input', 600, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lstm_bias', 608, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lstm_output_sequence', 616, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lstm_cell_input', 624, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('lstm_cell_bias', 632, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('matmul_input', 640, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('pad_input', 648, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('average_pool2d_input', 656, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('l2_pool2d_input', 664, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_pool2d_input', 672, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('prelu_input', 680, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('quantize_linear_input', 688, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('quantize_linear_zero_point', 696, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_l1_input', 704, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_l2_input', 712, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_log_sum_input', 720, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_log_sum_exp_input', 728, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_max_input', 736, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_mean_input', 744, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_min_input', 752, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_product_input', 760, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_sum_input', 768, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reduce_sum_square_input', 776, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('relu_input', 784, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('resample2d_input', 792, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reshape_input', 800, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('reverse_input', 808, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scatter_elements_input', 816, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scatter_elements_indices', 824, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_input', 832, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_indices', 840, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scatter_nd_updates', 848, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('sigmoid_input', 856, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('slice_input', 864, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('softmax_input', 872, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('softplus_input', 880, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('softsign_input', 888, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('split_input', 896, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('tanh_input', 904, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('tile_input', 912, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('transpose_input', 920, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('triangular_input', 928, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('where_condition', 936, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
      mojo.internal.StructField('where_value', 944, 0, webnn.mojom.SupportedTensorsSpec, null, false, 0, undefined),
    ],
    [[0, 960]]);

// Struct: ContextProperties
mojo.internal.Struct(
    webnn.mojom.ContextPropertiesSpec, 'webnn.mojom.ContextProperties', [
      mojo.internal.StructField('input_operand_layout', 0, 0, webnn.mojom.InputOperandLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('resample_2d_axes', 4, 0, webnn.mojom.Resample2DAxesSpec, null, false, 0, undefined),
      mojo.internal.StructField('batch_normalization_axis', 8, 0, webnn.mojom.BatchNormalizationAxisSpec, null, false, 0, undefined),
      mojo.internal.StructField('tensor_byte_length_limit', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('data_type_limits', 24, 0, webnn.mojom.DataTypeLimitsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
