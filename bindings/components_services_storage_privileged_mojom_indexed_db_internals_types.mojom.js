// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_internals_types.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: IdbTransactionMode
storage.mojom.IdbTransactionMode = {
  kReadOnly: 0,
  kReadWrite: 1,
  kVersionChange: 2,
};

// Enum: IdbTransactionState
storage.mojom.IdbTransactionState = {
  kBlocked: 0,
  kRunning: 1,
  kStarted: 2,
  kCommitting: 3,
  kFinished: 4,
};

// Struct: IdbOriginMetadata
storage.mojom.IdbOriginMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbOriginMetadata',
      packedSize: 16,
      fields: [
        { name: 'storage_keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdbStorageKeyMetadata
storage.mojom.IdbStorageKeyMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbStorageKeyMetadata',
      packedSize: 16,
      fields: [
        { name: 'buckets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdbBucketMetadata
storage.mojom.IdbBucketMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbBucketMetadata',
      packedSize: 16,
      fields: [
        { name: 'delta_recording_start_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdbDatabaseMetadata
storage.mojom.IdbDatabaseMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbDatabaseMetadata',
      packedSize: 16,
      fields: [
        { name: 'transactions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdbTransactionMetadata
storage.mojom.IdbTransactionMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbTransactionMetadata',
      packedSize: 16,
      fields: [
        { name: 'state_history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdbTransactionMetadataStateHistory
storage.mojom.IdbTransactionMetadataStateHistorySpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbTransactionMetadataStateHistory',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
