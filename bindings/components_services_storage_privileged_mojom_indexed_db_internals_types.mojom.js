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
storage.mojom.IdbTransactionModeSpec = { $: mojo.internal.Enum() };

// Enum: IdbTransactionState
storage.mojom.IdbTransactionState = {
  kBlocked: 0,
  kRunning: 1,
  kStarted: 2,
  kCommitting: 3,
  kFinished: 4,
};
storage.mojom.IdbTransactionStateSpec = { $: mojo.internal.Enum() };

// Struct: IdbOriginMetadata
storage.mojom.IdbOriginMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbOriginMetadata',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbStorageKeyMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'top_level_site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'serialized_storage_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'buckets', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'last_modified', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'paths', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'connection_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'databases', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbDatabaseMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'clients', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.BucketClientInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'delta_recording_start_ms', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'connection_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'active_open_delete', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'pending_open_delete', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'transactions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbTransactionMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: IdbTransactionMetadata
storage.mojom.IdbTransactionMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbTransactionMetadata',
      packedSize: 88,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.IdbTransactionModeSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: storage.mojom.IdbTransactionStateSpec, nullable: false, minVersion: 0 },
        { name: 'tid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'connection_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'age', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'runtime', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'tasks_scheduled', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'tasks_completed', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'state_history', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbTransactionMetadataStateHistorySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
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
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.IdbTransactionStateSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
