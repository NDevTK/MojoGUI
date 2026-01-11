// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/indexeddb/indexeddb.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.IDBCursorDirectionSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBDataLossSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBKeyTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBTransactionDurabilitySpec = { $: mojo.internal.Enum() };
blink.mojom.IDBGetAllResultTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBKeyPathTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBOperationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBPutModeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBTaskTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBTransactionModeSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBExceptionSpec = { $: mojo.internal.Enum() };
blink.mojom.IDBKeySpec = { $: {} };
blink.mojom.IDBKeyPathDataSpec = { $: {} };
blink.mojom.IDBExternalObjectSpec = { $: {} };
blink.mojom.IDBCursorResultSpec = { $: {} };
blink.mojom.IDBTransactionPutResultSpec = { $: {} };
blink.mojom.IDBDatabaseGetResultSpec = { $: {} };
blink.mojom.IDBDatabaseOpenCursorResultSpec = { $: {} };
blink.mojom.IDBKeyPathSpec = { $: {} };
blink.mojom.IDBKeyRangeSpec = { $: {} };
blink.mojom.IDBIndexMetadataSpec = { $: {} };
blink.mojom.IDBObjectStoreMetadataSpec = { $: {} };
blink.mojom.IDBDatabaseMetadataSpec = { $: {} };
blink.mojom.IDBNameAndVersionSpec = { $: {} };
blink.mojom.IDBIndexKeysSpec = { $: {} };
blink.mojom.IDBFileInfoSpec = { $: {} };
blink.mojom.IDBBlobInfoSpec = { $: {} };
blink.mojom.IDBValueSpec = { $: {} };
blink.mojom.IDBReturnValueSpec = { $: {} };
blink.mojom.IDBRecordSpec = { $: {} };
blink.mojom.IDBErrorSpec = { $: {} };
blink.mojom.IDBCursorValueSpec = { $: {} };
blink.mojom.IDBDatabaseOpenCursorValueSpec = { $: {} };
blink.mojom.IDBFactoryClient = {};
blink.mojom.IDBFactoryClient.$interfaceName = 'blink.mojom.IDBFactoryClient';
blink.mojom.IDBFactoryClient_Error_ParamsSpec = { $: {} };
blink.mojom.IDBFactoryClient_Blocked_ParamsSpec = { $: {} };
blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec = { $: {} };
blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec = { $: {} };
blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseCallbacks = {};
blink.mojom.IDBDatabaseCallbacks.$interfaceName = 'blink.mojom.IDBDatabaseCallbacks';
blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec = { $: {} };
blink.mojom.IDBCursor = {};
blink.mojom.IDBCursor.$interfaceName = 'blink.mojom.IDBCursor';
blink.mojom.IDBCursor_Advance_ParamsSpec = { $: {} };
blink.mojom.IDBCursor_Advance_ResponseParamsSpec = { $: {} };
blink.mojom.IDBCursor_Continue_ParamsSpec = { $: {} };
blink.mojom.IDBCursor_Continue_ResponseParamsSpec = { $: {} };
blink.mojom.IDBCursor_Prefetch_ParamsSpec = { $: {} };
blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec = { $: {} };
blink.mojom.IDBCursor_PrefetchReset_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction = {};
blink.mojom.IDBTransaction.$interfaceName = 'blink.mojom.IDBTransaction';
blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction_Put_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction_Put_ResponseParamsSpec = { $: {} };
blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec = { $: {} };
blink.mojom.IDBTransaction_Commit_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseGetAllResultSink = {};
blink.mojom.IDBDatabaseGetAllResultSink.$interfaceName = 'blink.mojom.IDBDatabaseGetAllResultSink';
blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec = { $: {} };
blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase = {};
blink.mojom.IDBDatabase.$interfaceName = 'blink.mojom.IDBDatabase';
blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Get_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Get_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_GetAll_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_OpenCursor_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Count_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Count_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_DeleteRange_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Clear_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Clear_ResponseParamsSpec = { $: {} };
blink.mojom.IDBDatabase_CreateIndex_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_RenameIndex_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_Abort_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec = { $: {} };
blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec = { $: {} };
blink.mojom.IDBFactory = {};
blink.mojom.IDBFactory.$interfaceName = 'blink.mojom.IDBFactory';
blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec = { $: {} };
blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec = { $: {} };
blink.mojom.IDBFactory_Open_ParamsSpec = { $: {} };
blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec = { $: {} };

blink.mojom.kIDBMaxMessageSize = 134217728;

blink.mojom.kIDBMaxMessageOverhead = 1048576;

blink.mojom.kIDBWrapThreshold = 65536;

blink.mojom.kIDBGetAllChunkSize = 1000;

// Enum: IDBCursorDirection
blink.mojom.IDBCursorDirection = {
  Next: 0,
  NextNoDuplicate: 1,
  Prev: 2,
  PrevNoDuplicate: 3,
};

// Enum: IDBDataLoss
blink.mojom.IDBDataLoss = {
  None: 0,
  Total: 1,
};

// Enum: IDBKeyType
blink.mojom.IDBKeyType = {
  Invalid: 0,
  Array: 1,
  Binary: 2,
  String: 3,
  Date: 4,
  Number: 5,
  None: 6,
  Min: 7,
};

// Enum: IDBTransactionDurability
blink.mojom.IDBTransactionDurability = {
  Default: 0,
  Strict: 1,
  Relaxed: 2,
};

// Enum: IDBGetAllResultType
blink.mojom.IDBGetAllResultType = {
  Keys: 0,
  Values: 1,
  Records: 2,
};

// Enum: IDBKeyPathType
blink.mojom.IDBKeyPathType = {
  Null: 0,
  String: 1,
  Array: 2,
};

// Enum: IDBOperationType
blink.mojom.IDBOperationType = {
  Add: 0,
  Put: 1,
  Delete: 2,
  Clear: 3,
};

// Enum: IDBPutMode
blink.mojom.IDBPutMode = {
  AddOrUpdate: 0,
  AddOnly: 1,
  CursorUpdate: 2,
};

// Enum: IDBTaskType
blink.mojom.IDBTaskType = {
  Normal: 0,
  Preemptive: 1,
};

// Enum: IDBTransactionMode
blink.mojom.IDBTransactionMode = {
  ReadOnly: 0,
  ReadWrite: 1,
  VersionChange: 2,
};

// Enum: IDBException
blink.mojom.IDBException = {
  kNoError: 0,
  kUnknownError: 28,
  kConstraintError: 29,
  kDataError: 30,
  kVersionError: 33,
  kAbortError: 20,
  kIgnorableAbortError: 11,
  kQuotaError: 22,
  kTimeoutError: 23,
};

// Union: IDBKey
mojo.internal.Union(
    blink.mojom.IDBKeySpec, 'blink.mojom.IDBKey', {
      'key_array': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.IDBKeySpec.$, false),
        'nullable': false,
      },
      'binary': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'string': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'date': {
        'ordinal': 3,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'number': {
        'ordinal': 4,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'other_none': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Union: IDBKeyPathData
mojo.internal.Union(
    blink.mojom.IDBKeyPathDataSpec, 'blink.mojom.IDBKeyPathData', {
      'string': {
        'ordinal': 0,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'string_array': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo_base.mojom.String16Spec.$, false),
        'nullable': false,
      },
    });

// Union: IDBExternalObject
mojo.internal.Union(
    blink.mojom.IDBExternalObjectSpec, 'blink.mojom.IDBExternalObject', {
      'blob_or_file': {
        'ordinal': 0,
        'type': blink.mojom.IDBBlobInfoSpec.$,
        'nullable': false,
      },
      'file_system_access_token': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote),
        'nullable': false,
      },
    });

// Union: IDBCursorResult
mojo.internal.Union(
    blink.mojom.IDBCursorResultSpec, 'blink.mojom.IDBCursorResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec.$,
        'nullable': false,
      },
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'values': {
        'ordinal': 2,
        'type': blink.mojom.IDBCursorValueSpec.$,
        'nullable': false,
      },
    });

// Union: IDBTransactionPutResult
mojo.internal.Union(
    blink.mojom.IDBTransactionPutResultSpec, 'blink.mojom.IDBTransactionPutResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec.$,
        'nullable': false,
      },
      'key': {
        'ordinal': 1,
        'type': blink.mojom.IDBKeySpec.$,
        'nullable': false,
      },
    });

// Union: IDBDatabaseGetResult
mojo.internal.Union(
    blink.mojom.IDBDatabaseGetResultSpec, 'blink.mojom.IDBDatabaseGetResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec.$,
        'nullable': false,
      },
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'key': {
        'ordinal': 2,
        'type': blink.mojom.IDBKeySpec.$,
        'nullable': false,
      },
      'value': {
        'ordinal': 3,
        'type': blink.mojom.IDBReturnValueSpec.$,
        'nullable': false,
      },
    });

// Union: IDBDatabaseOpenCursorResult
mojo.internal.Union(
    blink.mojom.IDBDatabaseOpenCursorResultSpec, 'blink.mojom.IDBDatabaseOpenCursorResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec.$,
        'nullable': false,
      },
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'value': {
        'ordinal': 2,
        'type': blink.mojom.IDBDatabaseOpenCursorValueSpec.$,
        'nullable': false,
      },
    });

// Struct: IDBKeyPath
mojo.internal.Struct(
    blink.mojom.IDBKeyPathSpec, 'blink.mojom.IDBKeyPath', [
      mojo.internal.StructField('data', 0, 0, blink.mojom.IDBKeyPathDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IDBKeyRange
mojo.internal.Struct(
    blink.mojom.IDBKeyRangeSpec, 'blink.mojom.IDBKeyRange', [
      mojo.internal.StructField('lower', 0, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upper', 8, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lower_open', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('upper_open', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IDBIndexMetadata
mojo.internal.Struct(
    blink.mojom.IDBIndexMetadataSpec, 'blink.mojom.IDBIndexMetadata', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_path', 16, 0, blink.mojom.IDBKeyPathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('unique', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multi_entry', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IDBObjectStoreMetadata
mojo.internal.Struct(
    blink.mojom.IDBObjectStoreMetadataSpec, 'blink.mojom.IDBObjectStoreMetadata', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_path', 16, 0, blink.mojom.IDBKeyPathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_index_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('indexes', 32, 0, mojo.internal.Map(mojo.internal.Int64, blink.mojom.IDBIndexMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('auto_increment', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: IDBDatabaseMetadata
mojo.internal.Struct(
    blink.mojom.IDBDatabaseMetadataSpec, 'blink.mojom.IDBDatabaseMetadata', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('max_object_store_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_stores', 24, 0, mojo.internal.Map(mojo.internal.Int64, blink.mojom.IDBObjectStoreMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('was_cold_open', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_sqlite', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IDBNameAndVersion
mojo.internal.Struct(
    blink.mojom.IDBNameAndVersionSpec, 'blink.mojom.IDBNameAndVersion', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IDBIndexKeys
mojo.internal.Struct(
    blink.mojom.IDBIndexKeysSpec, 'blink.mojom.IDBIndexKeys', [
      mojo.internal.StructField('index_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_keys', 8, 0, mojo.internal.Array(blink.mojom.IDBKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IDBFileInfo
mojo.internal.Struct(
    blink.mojom.IDBFileInfoSpec, 'blink.mojom.IDBFileInfo', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IDBBlobInfo
mojo.internal.Struct(
    blink.mojom.IDBBlobInfoSpec, 'blink.mojom.IDBBlobInfo', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, blink.mojom.IDBFileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IDBValue
mojo.internal.Struct(
    blink.mojom.IDBValueSpec, 'blink.mojom.IDBValue', [
      mojo.internal.StructField('bits', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('external_objects', 8, 0, mojo.internal.Array(blink.mojom.IDBExternalObjectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IDBReturnValue
mojo.internal.Struct(
    blink.mojom.IDBReturnValueSpec, 'blink.mojom.IDBReturnValue', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.IDBValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_key', 8, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_path', 16, 0, blink.mojom.IDBKeyPathSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IDBRecord
mojo.internal.Struct(
    blink.mojom.IDBRecordSpec, 'blink.mojom.IDBRecord', [
      mojo.internal.StructField('primary_key', 0, 0, blink.mojom.IDBKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('return_value', 8, 0, blink.mojom.IDBReturnValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('index_key', 16, 0, blink.mojom.IDBKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IDBError
mojo.internal.Struct(
    blink.mojom.IDBErrorSpec, 'blink.mojom.IDBError', [
      mojo.internal.StructField('error_code', 0, 0, blink.mojom.IDBExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IDBCursorValue
mojo.internal.Struct(
    blink.mojom.IDBCursorValueSpec, 'blink.mojom.IDBCursorValue', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(blink.mojom.IDBKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('primary_keys', 8, 0, mojo.internal.Array(blink.mojom.IDBKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('values', 16, 0, mojo.internal.Array(blink.mojom.IDBValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IDBDatabaseOpenCursorValue
mojo.internal.Struct(
    blink.mojom.IDBDatabaseOpenCursorValueSpec, 'blink.mojom.IDBDatabaseOpenCursorValue', [
      mojo.internal.StructField('cursor', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_key', 16, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, blink.mojom.IDBValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: IDBFactoryClient
mojo.internal.Struct(
    blink.mojom.IDBFactoryClient_Error_ParamsSpec, 'blink.mojom.IDBFactoryClient_Error_Params', [
      mojo.internal.StructField('code', 0, 0, blink.mojom.IDBExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBFactoryClient_Blocked_ParamsSpec, 'blink.mojom.IDBFactoryClient_Blocked_Params', [
      mojo.internal.StructField('existing_version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec, 'blink.mojom.IDBFactoryClient_UpgradeNeeded_Params', [
      mojo.internal.StructField('pending_database', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('old_version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('data_loss', 16, 0, blink.mojom.IDBDataLossSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_loss_message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('db_metadata', 32, 0, blink.mojom.IDBDatabaseMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec, 'blink.mojom.IDBFactoryClient_OpenSuccess_Params', [
      mojo.internal.StructField('pending_database', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, blink.mojom.IDBDatabaseMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec, 'blink.mojom.IDBFactoryClient_DeleteSuccess_Params', [
      mojo.internal.StructField('old_version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  error(code, message) {
    return this.$.error(code, message);
  }
  blocked(existing_version) {
    return this.$.blocked(existing_version);
  }
  upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata) {
    return this.$.upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata);
  }
  openSuccess(pending_database, metadata) {
    return this.$.openSuccess(pending_database, metadata);
  }
  deleteSuccess(old_version) {
    return this.$.deleteSuccess(old_version);
  }
};

blink.mojom.IDBFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBFactoryClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  error(code, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBFactoryClient_Error_ParamsSpec,
      null,
      [code, message],
      false);
  }

  blocked(existing_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBFactoryClient_Blocked_ParamsSpec,
      null,
      [existing_version],
      false);
  }

  upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec,
      null,
      [pending_database, old_version, data_loss, data_loss_message, db_metadata],
      false);
  }

  openSuccess(pending_database, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec,
      null,
      [pending_database, metadata],
      false);
  }

  deleteSuccess(old_version) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec,
      null,
      [old_version],
      false);
  }

};

blink.mojom.IDBFactoryClient.getRemote = function() {
  let remote = new blink.mojom.IDBFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBFactoryClient',
    'context');
  return remote.$;
};

blink.mojom.IDBFactoryClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBFactoryClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Error_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Blocked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Error_ParamsSpec.$.structSpec);
          const result = this.impl.error(params.code, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Blocked_ParamsSpec.$.structSpec);
          const result = this.impl.blocked(params.existing_version);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec.$.structSpec);
          const result = this.impl.upgradeNeeded(params.pending_database, params.old_version, params.data_loss, params.data_loss_message, params.db_metadata);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec.$.structSpec);
          const result = this.impl.openSuccess(params.pending_database, params.metadata);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec.$.structSpec);
          const result = this.impl.deleteSuccess(params.old_version);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBFactoryClientReceiver = blink.mojom.IDBFactoryClientReceiver;

blink.mojom.IDBFactoryClientPtr = blink.mojom.IDBFactoryClientRemote;
blink.mojom.IDBFactoryClientRequest = blink.mojom.IDBFactoryClientPendingReceiver;


// Interface: IDBDatabaseCallbacks
mojo.internal.Struct(
    blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec, 'blink.mojom.IDBDatabaseCallbacks_ForcedClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec, 'blink.mojom.IDBDatabaseCallbacks_VersionChange_Params', [
      mojo.internal.StructField('old_version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('new_version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec, 'blink.mojom.IDBDatabaseCallbacks_Abort_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, blink.mojom.IDBExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec, 'blink.mojom.IDBDatabaseCallbacks_Complete_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBDatabaseCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBDatabaseCallbacksRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBDatabaseCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBDatabaseCallbacksPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBDatabaseCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  forcedClose() {
    return this.$.forcedClose();
  }
  versionChange(old_version, new_version) {
    return this.$.versionChange(old_version, new_version);
  }
  abort(transaction_id, code, message) {
    return this.$.abort(transaction_id, code, message);
  }
  complete(transaction_id) {
    return this.$.complete(transaction_id);
  }
};

blink.mojom.IDBDatabaseCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBDatabaseCallbacks', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  forcedClose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec,
      null,
      [],
      false);
  }

  versionChange(old_version, new_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec,
      null,
      [old_version, new_version],
      false);
  }

  abort(transaction_id, code, message) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec,
      null,
      [transaction_id, code, message],
      false);
  }

  complete(transaction_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec,
      null,
      [transaction_id],
      false);
  }

};

blink.mojom.IDBDatabaseCallbacks.getRemote = function() {
  let remote = new blink.mojom.IDBDatabaseCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBDatabaseCallbacks',
    'context');
  return remote.$;
};

blink.mojom.IDBDatabaseCallbacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBDatabaseCallbacks', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec.$.structSpec);
          const result = this.impl.forcedClose();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec.$.structSpec);
          const result = this.impl.versionChange(params.old_version, params.new_version);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort(params.transaction_id, params.code, params.message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec.$.structSpec);
          const result = this.impl.complete(params.transaction_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBDatabaseCallbacksReceiver = blink.mojom.IDBDatabaseCallbacksReceiver;

blink.mojom.IDBDatabaseCallbacksPtr = blink.mojom.IDBDatabaseCallbacksRemote;
blink.mojom.IDBDatabaseCallbacksRequest = blink.mojom.IDBDatabaseCallbacksPendingReceiver;


// Interface: IDBCursor
mojo.internal.Struct(
    blink.mojom.IDBCursor_Advance_ParamsSpec, 'blink.mojom.IDBCursor_Advance_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_Advance_ResponseParamsSpec, 'blink.mojom.IDBCursor_Advance_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBCursorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_Continue_ParamsSpec, 'blink.mojom.IDBCursor_Continue_Params', [
      mojo.internal.StructField('key', 0, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_key', 8, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_Continue_ResponseParamsSpec, 'blink.mojom.IDBCursor_Continue_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBCursorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_Prefetch_ParamsSpec, 'blink.mojom.IDBCursor_Prefetch_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec, 'blink.mojom.IDBCursor_Prefetch_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBCursorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBCursor_PrefetchReset_ParamsSpec, 'blink.mojom.IDBCursor_PrefetchReset_Params', [
      mojo.internal.StructField('used_prefetches', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBCursorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBCursorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBCursor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBCursorPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBCursorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  advance(count) {
    return this.$.advance(count);
  }
  continue(key, primary_key) {
    return this.$.continue(key, primary_key);
  }
  prefetch(count) {
    return this.$.prefetch(count);
  }
  prefetchReset(used_prefetches) {
    return this.$.prefetchReset(used_prefetches);
  }
};

blink.mojom.IDBCursorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBCursor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  advance(count) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBCursor_Advance_ParamsSpec,
      blink.mojom.IDBCursor_Advance_ResponseParamsSpec,
      [count],
      false);
  }

  continue(key, primary_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBCursor_Continue_ParamsSpec,
      blink.mojom.IDBCursor_Continue_ResponseParamsSpec,
      [key, primary_key],
      false);
  }

  prefetch(count) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBCursor_Prefetch_ParamsSpec,
      blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec,
      [count],
      false);
  }

  prefetchReset(used_prefetches) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.IDBCursor_PrefetchReset_ParamsSpec,
      null,
      [used_prefetches],
      false);
  }

};

blink.mojom.IDBCursor.getRemote = function() {
  let remote = new blink.mojom.IDBCursorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBCursor',
    'context');
  return remote.$;
};

blink.mojom.IDBCursorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBCursor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Advance_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Continue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Prefetch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_PrefetchReset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Advance_ParamsSpec.$.structSpec);
          const result = this.impl.advance(params.count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBCursor_Advance_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Continue_ParamsSpec.$.structSpec);
          const result = this.impl.continue(params.key, params.primary_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBCursor_Continue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Prefetch_ParamsSpec.$.structSpec);
          const result = this.impl.prefetch(params.count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_PrefetchReset_ParamsSpec.$.structSpec);
          const result = this.impl.prefetchReset(params.used_prefetches);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBCursorReceiver = blink.mojom.IDBCursorReceiver;

blink.mojom.IDBCursorPtr = blink.mojom.IDBCursorRemote;
blink.mojom.IDBCursorRequest = blink.mojom.IDBCursorPendingReceiver;


// Interface: IDBTransaction
mojo.internal.Struct(
    blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec, 'blink.mojom.IDBTransaction_CreateObjectStore_Params', [
      mojo.internal.StructField('object_store_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_path', 16, 0, blink.mojom.IDBKeyPathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auto_increment', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec, 'blink.mojom.IDBTransaction_DeleteObjectStore_Params', [
      mojo.internal.StructField('object_store_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_Put_ParamsSpec, 'blink.mojom.IDBTransaction_Put_Params', [
      mojo.internal.StructField('object_store_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, blink.mojom.IDBValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 16, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 24, 0, blink.mojom.IDBPutModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index_keys', 32, 0, mojo.internal.Array(blink.mojom.IDBIndexKeysSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_Put_ResponseParamsSpec, 'blink.mojom.IDBTransaction_Put_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBTransactionPutResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec, 'blink.mojom.IDBTransaction_SetIndexKeys_Params', [
      mojo.internal.StructField('object_store_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('primary_key', 8, 0, blink.mojom.IDBKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index_keys', 16, 0, blink.mojom.IDBIndexKeysSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec, 'blink.mojom.IDBTransaction_SetIndexKeysDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.IDBTransaction_Commit_ParamsSpec, 'blink.mojom.IDBTransaction_Commit_Params', [
      mojo.internal.StructField('num_errors_handled', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBTransactionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBTransactionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBTransaction';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBTransactionPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBTransactionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createObjectStore(object_store_id, name, key_path, auto_increment) {
    return this.$.createObjectStore(object_store_id, name, key_path, auto_increment);
  }
  deleteObjectStore(object_store_id) {
    return this.$.deleteObjectStore(object_store_id);
  }
  put(object_store_id, value, key, mode, index_keys) {
    return this.$.put(object_store_id, value, key, mode, index_keys);
  }
  setIndexKeys(object_store_id, primary_key, index_keys) {
    return this.$.setIndexKeys(object_store_id, primary_key, index_keys);
  }
  setIndexKeysDone() {
    return this.$.setIndexKeysDone();
  }
  commit(num_errors_handled) {
    return this.$.commit(num_errors_handled);
  }
};

blink.mojom.IDBTransactionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBTransaction', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createObjectStore(object_store_id, name, key_path, auto_increment) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec,
      null,
      [object_store_id, name, key_path, auto_increment],
      false);
  }

  deleteObjectStore(object_store_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec,
      null,
      [object_store_id],
      false);
  }

  put(object_store_id, value, key, mode, index_keys) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBTransaction_Put_ParamsSpec,
      blink.mojom.IDBTransaction_Put_ResponseParamsSpec,
      [object_store_id, value, key, mode, index_keys],
      false);
  }

  setIndexKeys(object_store_id, primary_key, index_keys) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec,
      null,
      [object_store_id, primary_key, index_keys],
      false);
  }

  setIndexKeysDone() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec,
      null,
      [],
      false);
  }

  commit(num_errors_handled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.IDBTransaction_Commit_ParamsSpec,
      null,
      [num_errors_handled],
      false);
  }

};

blink.mojom.IDBTransaction.getRemote = function() {
  let remote = new blink.mojom.IDBTransactionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBTransaction',
    'context');
  return remote.$;
};

blink.mojom.IDBTransactionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBTransaction', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_Put_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_Commit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec.$.structSpec);
          const result = this.impl.createObjectStore(params.object_store_id, params.name, params.key_path, params.auto_increment);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec.$.structSpec);
          const result = this.impl.deleteObjectStore(params.object_store_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_Put_ParamsSpec.$.structSpec);
          const result = this.impl.put(params.object_store_id, params.value, params.key, params.mode, params.index_keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBTransaction_Put_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec.$.structSpec);
          const result = this.impl.setIndexKeys(params.object_store_id, params.primary_key, params.index_keys);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec.$.structSpec);
          const result = this.impl.setIndexKeysDone();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_Commit_ParamsSpec.$.structSpec);
          const result = this.impl.commit(params.num_errors_handled);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBTransactionReceiver = blink.mojom.IDBTransactionReceiver;

blink.mojom.IDBTransactionPtr = blink.mojom.IDBTransactionRemote;
blink.mojom.IDBTransactionRequest = blink.mojom.IDBTransactionPendingReceiver;


// Interface: IDBDatabaseGetAllResultSink
mojo.internal.Struct(
    blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec, 'blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_Params', [
      mojo.internal.StructField('records', 0, 0, mojo.internal.Array(blink.mojom.IDBRecordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('done', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec, 'blink.mojom.IDBDatabaseGetAllResultSink_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.IDBErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBDatabaseGetAllResultSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBDatabaseGetAllResultSinkRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBDatabaseGetAllResultSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBDatabaseGetAllResultSinkPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBDatabaseGetAllResultSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  receiveResults(records, done) {
    return this.$.receiveResults(records, done);
  }
  onError(error) {
    return this.$.onError(error);
  }
};

blink.mojom.IDBDatabaseGetAllResultSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBDatabaseGetAllResultSink', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  receiveResults(records, done) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec,
      null,
      [records, done],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

blink.mojom.IDBDatabaseGetAllResultSink.getRemote = function() {
  let remote = new blink.mojom.IDBDatabaseGetAllResultSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBDatabaseGetAllResultSink',
    'context');
  return remote.$;
};

blink.mojom.IDBDatabaseGetAllResultSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBDatabaseGetAllResultSink', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec.$.structSpec);
          const result = this.impl.receiveResults(params.records, params.done);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBDatabaseGetAllResultSinkReceiver = blink.mojom.IDBDatabaseGetAllResultSinkReceiver;

blink.mojom.IDBDatabaseGetAllResultSinkPtr = blink.mojom.IDBDatabaseGetAllResultSinkRemote;
blink.mojom.IDBDatabaseGetAllResultSinkRequest = blink.mojom.IDBDatabaseGetAllResultSinkPendingReceiver;


// Interface: IDBDatabase
mojo.internal.Struct(
    blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec, 'blink.mojom.IDBDatabase_RenameObjectStore_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('new_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec, 'blink.mojom.IDBDatabase_CreateTransaction_Params', [
      mojo.internal.StructField('transaction_receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('transaction_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_ids', 16, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('mode', 24, 0, blink.mojom.IDBTransactionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('durability', 32, 0, blink.mojom.IDBTransactionDurabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec, 'blink.mojom.IDBDatabase_VersionChangeIgnored_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Get_ParamsSpec, 'blink.mojom.IDBDatabase_Get_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_range', 24, 0, blink.mojom.IDBKeyRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_only', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Get_ResponseParamsSpec, 'blink.mojom.IDBDatabase_Get_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBDatabaseGetResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_GetAll_ParamsSpec, 'blink.mojom.IDBDatabase_GetAll_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_range', 24, 0, blink.mojom.IDBKeyRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result_type', 32, 0, blink.mojom.IDBGetAllResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 40, 0, blink.mojom.IDBCursorDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_count', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec, 'blink.mojom.IDBDatabase_GetAll_ResponseParams', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_OpenCursor_ParamsSpec, 'blink.mojom.IDBDatabase_OpenCursor_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_range', 24, 0, blink.mojom.IDBKeyRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 32, 0, blink.mojom.IDBCursorDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_type', 40, 0, blink.mojom.IDBTaskTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_only', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec, 'blink.mojom.IDBDatabase_OpenCursor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.IDBDatabaseOpenCursorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Count_ParamsSpec, 'blink.mojom.IDBDatabase_Count_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_range', 24, 0, blink.mojom.IDBKeyRangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Count_ResponseParamsSpec, 'blink.mojom.IDBDatabase_Count_ResponseParams', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_DeleteRange_ParamsSpec, 'blink.mojom.IDBDatabase_DeleteRange_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_range', 16, 0, blink.mojom.IDBKeyRangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec, 'blink.mojom.IDBDatabase_DeleteRange_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec, 'blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec, 'blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.IDBErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Clear_ParamsSpec, 'blink.mojom.IDBDatabase_Clear_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Clear_ResponseParamsSpec, 'blink.mojom.IDBDatabase_Clear_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_CreateIndex_ParamsSpec, 'blink.mojom.IDBDatabase_CreateIndex_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index', 16, 0, blink.mojom.IDBIndexMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec, 'blink.mojom.IDBDatabase_DeleteIndex_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_RenameIndex_ParamsSpec, 'blink.mojom.IDBDatabase_RenameIndex_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('object_store_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('index_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('new_name', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_Abort_ParamsSpec, 'blink.mojom.IDBDatabase_Abort_Params', [
      mojo.internal.StructField('transaction_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec, 'blink.mojom.IDBDatabase_DidBecomeInactive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec, 'blink.mojom.IDBDatabase_UpdatePriority_Params', [
      mojo.internal.StructField('new_priority', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.IDBDatabasePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBDatabaseRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBDatabase';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBDatabasePendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBDatabaseRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  renameObjectStore(transaction_id, object_store_id, new_name) {
    return this.$.renameObjectStore(transaction_id, object_store_id, new_name);
  }
  createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability) {
    return this.$.createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability);
  }
  versionChangeIgnored() {
    return this.$.versionChangeIgnored();
  }
  get(transaction_id, object_store_id, index_id, key_range, key_only) {
    return this.$.get(transaction_id, object_store_id, index_id, key_range, key_only);
  }
  getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction) {
    return this.$.getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction);
  }
  openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type) {
    return this.$.openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type);
  }
  count(transaction_id, object_store_id, index_id, key_range) {
    return this.$.count(transaction_id, object_store_id, index_id, key_range);
  }
  deleteRange(transaction_id, object_store_id, key_range) {
    return this.$.deleteRange(transaction_id, object_store_id, key_range);
  }
  getKeyGeneratorCurrentNumber(transaction_id, object_store_id) {
    return this.$.getKeyGeneratorCurrentNumber(transaction_id, object_store_id);
  }
  clear(transaction_id, object_store_id) {
    return this.$.clear(transaction_id, object_store_id);
  }
  createIndex(transaction_id, object_store_id, index) {
    return this.$.createIndex(transaction_id, object_store_id, index);
  }
  deleteIndex(transaction_id, object_store_id, index_id) {
    return this.$.deleteIndex(transaction_id, object_store_id, index_id);
  }
  renameIndex(transaction_id, object_store_id, index_id, new_name) {
    return this.$.renameIndex(transaction_id, object_store_id, index_id, new_name);
  }
  abort(transaction_id) {
    return this.$.abort(transaction_id);
  }
  didBecomeInactive() {
    return this.$.didBecomeInactive();
  }
  updatePriority(new_priority) {
    return this.$.updatePriority(new_priority);
  }
};

blink.mojom.IDBDatabaseRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBDatabase', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  renameObjectStore(transaction_id, object_store_id, new_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec,
      null,
      [transaction_id, object_store_id, new_name],
      false);
  }

  createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec,
      null,
      [transaction_receiver, transaction_id, object_store_ids, mode, durability],
      false);
  }

  versionChangeIgnored() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec,
      null,
      [],
      false);
  }

  get(transaction_id, object_store_id, index_id, key_range, key_only) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.IDBDatabase_Get_ParamsSpec,
      blink.mojom.IDBDatabase_Get_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, key_only],
      false);
  }

  getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.IDBDatabase_GetAll_ParamsSpec,
      blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction],
      false);
  }

  openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.IDBDatabase_OpenCursor_ParamsSpec,
      blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type],
      false);
  }

  count(transaction_id, object_store_id, index_id, key_range) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.IDBDatabase_Count_ParamsSpec,
      blink.mojom.IDBDatabase_Count_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range],
      false);
  }

  deleteRange(transaction_id, object_store_id, key_range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.IDBDatabase_DeleteRange_ParamsSpec,
      blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec,
      [transaction_id, object_store_id, key_range],
      false);
  }

  getKeyGeneratorCurrentNumber(transaction_id, object_store_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec,
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec,
      [transaction_id, object_store_id],
      false);
  }

  clear(transaction_id, object_store_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.IDBDatabase_Clear_ParamsSpec,
      blink.mojom.IDBDatabase_Clear_ResponseParamsSpec,
      [transaction_id, object_store_id],
      false);
  }

  createIndex(transaction_id, object_store_id, index) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.IDBDatabase_CreateIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index],
      false);
  }

  deleteIndex(transaction_id, object_store_id, index_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id],
      false);
  }

  renameIndex(transaction_id, object_store_id, index_id, new_name) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.IDBDatabase_RenameIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id, new_name],
      false);
  }

  abort(transaction_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.IDBDatabase_Abort_ParamsSpec,
      null,
      [transaction_id],
      false);
  }

  didBecomeInactive() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec,
      null,
      [],
      false);
  }

  updatePriority(new_priority) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec,
      null,
      [new_priority],
      false);
  }

};

blink.mojom.IDBDatabase.getRemote = function() {
  let remote = new blink.mojom.IDBDatabaseRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBDatabase',
    'context');
  return remote.$;
};

blink.mojom.IDBDatabaseReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBDatabase', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Get_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_GetAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_OpenCursor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Count_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Clear_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateIndex_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameIndex_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec.$.structSpec);
          const result = this.impl.renameObjectStore(params.transaction_id, params.object_store_id, params.new_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec.$.structSpec);
          const result = this.impl.createTransaction(params.transaction_receiver, params.transaction_id, params.object_store_ids, params.mode, params.durability);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec.$.structSpec);
          const result = this.impl.versionChangeIgnored();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Get_ParamsSpec.$.structSpec);
          const result = this.impl.get(params.transaction_id, params.object_store_id, params.index_id, params.key_range, params.key_only);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_Get_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_GetAll_ParamsSpec.$.structSpec);
          const result = this.impl.getAll(params.transaction_id, params.object_store_id, params.index_id, params.key_range, params.result_type, params.max_count, params.direction);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_OpenCursor_ParamsSpec.$.structSpec);
          const result = this.impl.openCursor(params.transaction_id, params.object_store_id, params.index_id, params.key_range, params.direction, params.key_only, params.task_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Count_ParamsSpec.$.structSpec);
          const result = this.impl.count(params.transaction_id, params.object_store_id, params.index_id, params.key_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_Count_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteRange_ParamsSpec.$.structSpec);
          const result = this.impl.deleteRange(params.transaction_id, params.object_store_id, params.key_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec.$.structSpec);
          const result = this.impl.getKeyGeneratorCurrentNumber(params.transaction_id, params.object_store_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Clear_ParamsSpec.$.structSpec);
          const result = this.impl.clear(params.transaction_id, params.object_store_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBDatabase_Clear_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateIndex_ParamsSpec.$.structSpec);
          const result = this.impl.createIndex(params.transaction_id, params.object_store_id, params.index);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec.$.structSpec);
          const result = this.impl.deleteIndex(params.transaction_id, params.object_store_id, params.index_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameIndex_ParamsSpec.$.structSpec);
          const result = this.impl.renameIndex(params.transaction_id, params.object_store_id, params.index_id, params.new_name);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort(params.transaction_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec.$.structSpec);
          const result = this.impl.didBecomeInactive();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec.$.structSpec);
          const result = this.impl.updatePriority(params.new_priority);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBDatabaseReceiver = blink.mojom.IDBDatabaseReceiver;

blink.mojom.IDBDatabasePtr = blink.mojom.IDBDatabaseRemote;
blink.mojom.IDBDatabaseRequest = blink.mojom.IDBDatabasePendingReceiver;


// Interface: IDBFactory
mojo.internal.Struct(
    blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec, 'blink.mojom.IDBFactory_GetDatabaseInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec, 'blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParams', [
      mojo.internal.StructField('names_and_versions', 0, 0, mojo.internal.Array(blink.mojom.IDBNameAndVersionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.IDBErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.IDBFactory_Open_ParamsSpec, 'blink.mojom.IDBFactory_Open_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('database_callbacks', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('version_change_transaction_receiver', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('transaction_id', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec, 'blink.mojom.IDBFactory_DeleteDatabase_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_close', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.IDBFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IDBFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IDBFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IDBFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.IDBFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDatabaseInfo() {
    return this.$.getDatabaseInfo();
  }
  open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority) {
    return this.$.open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority);
  }
  deleteDatabase(client, name, force_close) {
    return this.$.deleteDatabase(client, name, force_close);
  }
};

blink.mojom.IDBFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IDBFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDatabaseInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec,
      blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec,
      [],
      false);
  }

  open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.IDBFactory_Open_ParamsSpec,
      null,
      [client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority],
      false);
  }

  deleteDatabase(client, name, force_close) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec,
      null,
      [client, name, force_close],
      false);
  }

};

blink.mojom.IDBFactory.getRemote = function() {
  let remote = new blink.mojom.IDBFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IDBFactory',
    'context');
  return remote.$;
};

blink.mojom.IDBFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IDBFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_Open_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getDatabaseInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_Open_ParamsSpec.$.structSpec);
          const result = this.impl.open(params.client, params.database_callbacks, params.name, params.version, params.version_change_transaction_receiver, params.transaction_id, params.priority);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec.$.structSpec);
          const result = this.impl.deleteDatabase(params.client, params.name, params.force_close);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.IDBFactoryReceiver = blink.mojom.IDBFactoryReceiver;

blink.mojom.IDBFactoryPtr = blink.mojom.IDBFactoryRemote;
blink.mojom.IDBFactoryRequest = blink.mojom.IDBFactoryPendingReceiver;

