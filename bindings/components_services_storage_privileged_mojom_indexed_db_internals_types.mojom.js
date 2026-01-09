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
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'storage_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'top_level_site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'serialized_storage_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'buckets', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 80,
      fields: [
        { name: 'bucket_locator', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'last_modified', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'paths', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'connection_count', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'databases', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'clients', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'delta_recording_start_ms', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'connection_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'active_open_delete', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'pending_open_delete', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'transactions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 96,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.IdbTransactionModeSpec, nullable: false },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.IdbTransactionStateSpec, nullable: false },
        { name: 'tid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'connection_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'client_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'age', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'runtime', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'tasks_scheduled', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'tasks_completed', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'scope', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'state_history', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.IdbTransactionStateSpec, nullable: false },
        { name: 'duration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
