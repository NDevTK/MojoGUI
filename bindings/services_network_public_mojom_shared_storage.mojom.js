// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_storage.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: SharedStorageKeyArgument
network.mojom.SharedStorageKeyArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageKeyArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageValueArgument
network.mojom.SharedStorageValueArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageValueArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LockName
network.mojom.LockNameSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LockName',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageSetMethod
network.mojom.SharedStorageSetMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageSetMethod',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SharedStorageValueArgumentSpec, nullable: false },
        { name: 'ignore_if_present', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageAppendMethod
network.mojom.SharedStorageAppendMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageAppendMethod',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SharedStorageValueArgumentSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageDeleteMethod
network.mojom.SharedStorageDeleteMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageDeleteMethod',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageKeyArgumentSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageClearMethod
network.mojom.SharedStorageClearMethodSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageClearMethod',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageModifierMethodWithOptions
network.mojom.SharedStorageModifierMethodWithOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageModifierMethodWithOptions',
      packedSize: 24,
      fields: [
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SharedStorageModifierMethodSpec, nullable: false },
        { name: 'with_lock', packedOffset: 16, packedBitOffset: 0, type: network.mojom.LockNameSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageBatchUpdateMethodsArgument
network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedStorageBatchUpdateMethodsArgument',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
