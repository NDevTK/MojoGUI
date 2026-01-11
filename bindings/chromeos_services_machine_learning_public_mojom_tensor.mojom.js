// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/tensor.mojom
// Module: chromeos.machine_learning.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.ValueListSpec = { $: {} };
chromeos.machine_learning.mojom.StringListSpec = { $: {} };
chromeos.machine_learning.mojom.FloatListSpec = { $: {} };
chromeos.machine_learning.mojom.Int64ListSpec = { $: {} };
chromeos.machine_learning.mojom.TensorSpec = { $: {} };

// Union: ValueList
mojo.internal.Union(
    chromeos.machine_learning.mojom.ValueListSpec, 'chromeos.machine_learning.mojom.ValueList', {
      'string_list': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.StringListSpec.$,
        'nullable': false,
      },
      'float_list': {
        'ordinal': 1,
        'type': chromeos.machine_learning.mojom.FloatListSpec.$,
        'nullable': false,
      },
      'int64_list': {
        'ordinal': 2,
        'type': chromeos.machine_learning.mojom.Int64ListSpec.$,
        'nullable': false,
      },
    });

// Struct: StringList
mojo.internal.Struct(
    chromeos.machine_learning.mojom.StringListSpec, 'chromeos.machine_learning.mojom.StringList', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FloatList
mojo.internal.Struct(
    chromeos.machine_learning.mojom.FloatListSpec, 'chromeos.machine_learning.mojom.FloatList', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Int64List
mojo.internal.Struct(
    chromeos.machine_learning.mojom.Int64ListSpec, 'chromeos.machine_learning.mojom.Int64List', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Tensor
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TensorSpec, 'chromeos.machine_learning.mojom.Tensor', [
      mojo.internal.StructField('data', 0, 0, chromeos.machine_learning.mojom.ValueListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shape', 8, 0, chromeos.machine_learning.mojom.Int64ListSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
