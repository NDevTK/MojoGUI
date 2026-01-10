// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_storage.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: SharedStorageModifierMethod
network.mojom.mojom.SharedStorageModifierMethodSpec = { $: mojo.internal.Union(
    'network.mojom.SharedStorageModifierMethod', {
      'set_method': {
        'ordinal': 0,
        'type': network.mojom.SharedStorageSetMethodSpec,
      }},
      'append_method': {
        'ordinal': 1,
        'type': network.mojom.SharedStorageAppendMethodSpec,
      }},
      'delete_method': {
        'ordinal': 2,
        'type': network.mojom.SharedStorageDeleteMethodSpec,
      }},
      'clear_method': {
        'ordinal': 3,
        'type': network.mojom.SharedStorageClearMethodSpec,
      }},
    })
};

// Struct: SharedStorageKeyArgument
network.mojom.mojom.SharedStorageKeyArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageKeyArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedStorageValueArgument
network.mojom.mojom.SharedStorageValueArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageValueArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LockName
network.mojom.mojom.LockNameSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LockName',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedStorageSetMethod
network.mojom.mojom.SharedStorageSetMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageSetMethod',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageValueArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'ignore_if_present', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SharedStorageAppendMethod
network.mojom.mojom.SharedStorageAppendMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageAppendMethod',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageValueArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SharedStorageDeleteMethod
network.mojom.mojom.SharedStorageDeleteMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageDeleteMethod',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SharedStorageClearMethod
network.mojom.mojom.SharedStorageClearMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageClearMethod',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: SharedStorageModifierMethodWithOptions
network.mojom.mojom.SharedStorageModifierMethodWithOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageModifierMethodWithOptions',
      packedSize: 32,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedStorageModifierMethodSpec, nullable: false, minVersion: 0 },
        { name: 'with_lock', packedOffset: 16, packedBitOffset: 0, type: network.mojom.LockNameSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SharedStorageBatchUpdateMethodsArgument
network.mojom.mojom.SharedStorageBatchUpdateMethodsArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageBatchUpdateMethodsArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SharedStorageModifierMethodWithOptionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
