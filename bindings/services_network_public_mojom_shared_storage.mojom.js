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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'ignore_if_present', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'with_lock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
