// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/indexeddb/indexeddb.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.IDBFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  error(code, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBFactoryClient_Error_ParamsSpec,
      null,
      [code, message],
      false);
  }

  blocked(existing_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBFactoryClient_Blocked_ParamsSpec,
      null,
      [existing_version],
      false);
  }

  upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec,
      null,
      [pending_database, old_version, data_loss, data_loss_message, db_metadata],
      false);
  }

  openSuccess(pending_database, metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec,
      null,
      [pending_database, metadata],
      false);
  }

  deleteSuccess(old_version) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Error
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Error_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Error (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Blocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Blocked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Blocked (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpgradeNeeded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeNeeded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenSuccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSuccess (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DeleteSuccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSuccess (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Error_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.error');
          const result = this.impl.error(params.code, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_Blocked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.blocked');
          const result = this.impl.blocked(params.existing_version);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.upgradeNeeded');
          const result = this.impl.upgradeNeeded(params.pending_database, params.old_version, params.data_loss, params.data_loss_message, params.db_metadata);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openSuccess');
          const result = this.impl.openSuccess(params.pending_database, params.metadata);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteSuccess');
          const result = this.impl.deleteSuccess(params.old_version);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBDatabaseCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forcedClose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec,
      null,
      [],
      false);
  }

  versionChange(old_version, new_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec,
      null,
      [old_version, new_version],
      false);
  }

  abort(transaction_id, code, message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec,
      null,
      [transaction_id, code, message],
      false);
  }

  complete(transaction_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ForcedClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForcedClose (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: VersionChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VersionChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Complete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Complete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.forcedClose');
          const result = this.impl.forcedClose();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.versionChange');
          const result = this.impl.versionChange(params.old_version, params.new_version);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort(params.transaction_id, params.code, params.message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.complete');
          const result = this.impl.complete(params.transaction_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBCursorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  advance(count) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBCursor_Advance_ParamsSpec,
      blink.mojom.IDBCursor_Advance_ResponseParamsSpec,
      [count],
      false);
  }

  continue(key, primary_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBCursor_Continue_ParamsSpec,
      blink.mojom.IDBCursor_Continue_ResponseParamsSpec,
      [key, primary_key],
      false);
  }

  prefetch(count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBCursor_Prefetch_ParamsSpec,
      blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec,
      [count],
      false);
  }

  prefetchReset(used_prefetches) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Advance
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Advance_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Advance (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Continue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Continue_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Continue (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Prefetch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_Prefetch_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Prefetch (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PrefetchReset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBCursor_PrefetchReset_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrefetchReset (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Advance_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.advance');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Continue_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.continue');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_Prefetch_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.prefetch');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBCursor_PrefetchReset_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.prefetchReset');
          const result = this.impl.prefetchReset(params.used_prefetches);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBTransactionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createObjectStore(object_store_id, name, key_path, auto_increment) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec,
      null,
      [object_store_id, name, key_path, auto_increment],
      false);
  }

  deleteObjectStore(object_store_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec,
      null,
      [object_store_id],
      false);
  }

  put(object_store_id, value, key, mode, index_keys) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBTransaction_Put_ParamsSpec,
      blink.mojom.IDBTransaction_Put_ResponseParamsSpec,
      [object_store_id, value, key, mode, index_keys],
      false);
  }

  setIndexKeys(object_store_id, primary_key, index_keys) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec,
      null,
      [object_store_id, primary_key, index_keys],
      false);
  }

  setIndexKeysDone() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec,
      null,
      [],
      false);
  }

  commit(num_errors_handled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateObjectStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateObjectStore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteObjectStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteObjectStore (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Put
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_Put_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Put (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetIndexKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIndexKeys (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetIndexKeysDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIndexKeysDone (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Commit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBTransaction_Commit_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Commit (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createObjectStore');
          const result = this.impl.createObjectStore(params.object_store_id, params.name, params.key_path, params.auto_increment);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteObjectStore');
          const result = this.impl.deleteObjectStore(params.object_store_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_Put_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.put');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setIndexKeys');
          const result = this.impl.setIndexKeys(params.object_store_id, params.primary_key, params.index_keys);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setIndexKeysDone');
          const result = this.impl.setIndexKeysDone();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBTransaction_Commit_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.commit');
          const result = this.impl.commit(params.num_errors_handled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBDatabaseGetAllResultSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  receiveResults(records, done) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec,
      null,
      [records, done],
      false);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ReceiveResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceiveResults (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.receiveResults');
          const result = this.impl.receiveResults(params.records, params.done);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBDatabaseRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  renameObjectStore(transaction_id, object_store_id, new_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec,
      null,
      [transaction_id, object_store_id, new_name],
      false);
  }

  createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec,
      null,
      [transaction_receiver, transaction_id, object_store_ids, mode, durability],
      false);
  }

  versionChangeIgnored() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec,
      null,
      [],
      false);
  }

  get(transaction_id, object_store_id, index_id, key_range, key_only) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBDatabase_Get_ParamsSpec,
      blink.mojom.IDBDatabase_Get_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, key_only],
      false);
  }

  getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.IDBDatabase_GetAll_ParamsSpec,
      blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction],
      false);
  }

  openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.IDBDatabase_OpenCursor_ParamsSpec,
      blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type],
      false);
  }

  count(transaction_id, object_store_id, index_id, key_range) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.IDBDatabase_Count_ParamsSpec,
      blink.mojom.IDBDatabase_Count_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range],
      false);
  }

  deleteRange(transaction_id, object_store_id, key_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.IDBDatabase_DeleteRange_ParamsSpec,
      blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec,
      [transaction_id, object_store_id, key_range],
      false);
  }

  getKeyGeneratorCurrentNumber(transaction_id, object_store_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec,
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec,
      [transaction_id, object_store_id],
      false);
  }

  clear(transaction_id, object_store_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.IDBDatabase_Clear_ParamsSpec,
      blink.mojom.IDBDatabase_Clear_ResponseParamsSpec,
      [transaction_id, object_store_id],
      false);
  }

  createIndex(transaction_id, object_store_id, index) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.IDBDatabase_CreateIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index],
      false);
  }

  deleteIndex(transaction_id, object_store_id, index_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id],
      false);
  }

  renameIndex(transaction_id, object_store_id, index_id, new_name) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.IDBDatabase_RenameIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id, new_name],
      false);
  }

  abort(transaction_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.IDBDatabase_Abort_ParamsSpec,
      null,
      [transaction_id],
      false);
  }

  didBecomeInactive() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec,
      null,
      [],
      false);
  }

  updatePriority(new_priority) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RenameObjectStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameObjectStore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateTransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTransaction (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: VersionChangeIgnored
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VersionChangeIgnored (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Get
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Get_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Get (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_GetAll_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAll (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_OpenCursor_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenCursor (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Count
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Count_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Count (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DeleteRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteRange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetKeyGeneratorCurrentNumber
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyGeneratorCurrentNumber (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Clear
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Clear_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clear (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateIndex_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateIndex (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DeleteIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteIndex (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RenameIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameIndex_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameIndex (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_Abort_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DidBecomeInactive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidBecomeInactive (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: UpdatePriority
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePriority (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.renameObjectStore');
          const result = this.impl.renameObjectStore(params.transaction_id, params.object_store_id, params.new_name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createTransaction');
          const result = this.impl.createTransaction(params.transaction_receiver, params.transaction_id, params.object_store_ids, params.mode, params.durability);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.versionChangeIgnored');
          const result = this.impl.versionChangeIgnored();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Get_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.get');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_GetAll_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAll');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_OpenCursor_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openCursor');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Count_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.count');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteRange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteRange');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getKeyGeneratorCurrentNumber');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Clear_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clear');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_CreateIndex_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createIndex');
          const result = this.impl.createIndex(params.transaction_id, params.object_store_id, params.index);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteIndex');
          const result = this.impl.deleteIndex(params.transaction_id, params.object_store_id, params.index_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_RenameIndex_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.renameIndex');
          const result = this.impl.renameIndex(params.transaction_id, params.object_store_id, params.index_id, params.new_name);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_Abort_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort(params.transaction_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didBecomeInactive');
          const result = this.impl.didBecomeInactive();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updatePriority');
          const result = this.impl.updatePriority(params.new_priority);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

blink.mojom.IDBFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDatabaseInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec,
      blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec,
      [],
      false);
  }

  open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBFactory_Open_ParamsSpec,
      null,
      [client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority],
      false);
  }

  deleteDatabase(client, name, force_close) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDatabaseInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDatabaseInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_Open_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeleteDatabase
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteDatabase (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getDatabaseInfo');
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
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_Open_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open(params.client, params.database_callbacks, params.name, params.version, params.version_change_transaction_receiver, params.transaction_id, params.priority);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteDatabase');
          const result = this.impl.deleteDatabase(params.client, params.name, params.force_close);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.IDBFactoryReceiver = blink.mojom.IDBFactoryReceiver;

blink.mojom.IDBFactoryPtr = blink.mojom.IDBFactoryRemote;
blink.mojom.IDBFactoryRequest = blink.mojom.IDBFactoryPendingReceiver;

