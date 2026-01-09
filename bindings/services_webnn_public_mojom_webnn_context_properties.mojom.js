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
        { name: 'uint4', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'ranks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'where_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'data_type_limits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
