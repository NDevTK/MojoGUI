// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/tensor.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Union: ValueList
chromeos.machine_learning.mojom.ValueListSpec = { $: mojo.internal.Union(
    'chromeos.machine_learning.mojom.ValueList', {
      'string_list': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.StringListSpec,
      }},
      'float_list': {
        'ordinal': 1,
        'type': chromeos.machine_learning.mojom.FloatListSpec,
      }},
      'int64_list': {
        'ordinal': 2,
        'type': chromeos.machine_learning.mojom.Int64ListSpec,
      }},
    })
};

// Struct: StringList
chromeos.machine_learning.mojom.StringListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.StringList',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FloatList
chromeos.machine_learning.mojom.FloatListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.FloatList',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Int64List
chromeos.machine_learning.mojom.Int64ListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Int64List',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Tensor
chromeos.machine_learning.mojom.TensorSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.Tensor',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.ValueListSpec, nullable: false, minVersion: 0 },
        { name: 'shape', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.Int64ListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
