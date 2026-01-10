// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_internals_types.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var services = services || {};
var url = url || {};

storage.mojom.IdbTransactionModeSpec = { $: mojo.internal.Enum() };
storage.mojom.IdbTransactionStateSpec = { $: mojo.internal.Enum() };
storage.mojom.IdbOriginMetadataSpec = { $: {} };
storage.mojom.IdbStorageKeyMetadataSpec = { $: {} };
storage.mojom.IdbBucketMetadataSpec = { $: {} };
storage.mojom.IdbDatabaseMetadataSpec = { $: {} };
storage.mojom.IdbTransactionMetadataSpec = { $: {} };
storage.mojom.IdbTransactionMetadataStateHistorySpec = { $: {} };

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
mojo.internal.Struct(
    storage.mojom.IdbOriginMetadataSpec, 'storage.mojom.IdbOriginMetadata', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_keys', 8, 0, mojo.internal.Array(storage.mojom.IdbStorageKeyMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdbStorageKeyMetadata
mojo.internal.Struct(
    storage.mojom.IdbStorageKeyMetadataSpec, 'storage.mojom.IdbStorageKeyMetadata', [
      mojo.internal.StructField('top_level_site', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_storage_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('buckets', 16, 0, mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IdbBucketMetadata
mojo.internal.Struct(
    storage.mojom.IdbBucketMetadataSpec, 'storage.mojom.IdbBucketMetadata', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('last_modified', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paths', 32, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('connection_count', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('databases', 48, 0, mojo.internal.Array(storage.mojom.IdbDatabaseMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('clients', 56, 0, mojo.internal.Array(storage.mojom.BucketClientInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('delta_recording_start_ms', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: IdbDatabaseMetadata
mojo.internal.Struct(
    storage.mojom.IdbDatabaseMetadataSpec, 'storage.mojom.IdbDatabaseMetadata', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_count', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('active_open_delete', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pending_open_delete', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('transactions', 32, 0, mojo.internal.Array(storage.mojom.IdbTransactionMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IdbTransactionMetadata
mojo.internal.Struct(
    storage.mojom.IdbTransactionMetadataSpec, 'storage.mojom.IdbTransactionMetadata', [
      mojo.internal.StructField('mode', 0, 0, storage.mojom.IdbTransactionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, storage.mojom.IdbTransactionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tid', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('client_token', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('age', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('runtime', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('tasks_scheduled', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('tasks_completed', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('scope', 64, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('state_history', 72, 0, mojo.internal.Array(storage.mojom.IdbTransactionMetadataStateHistorySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('connection_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: IdbTransactionMetadataStateHistory
mojo.internal.Struct(
    storage.mojom.IdbTransactionMetadataStateHistorySpec, 'storage.mojom.IdbTransactionMetadataStateHistory', [
      mojo.internal.StructField('state', 0, 0, storage.mojom.IdbTransactionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);
