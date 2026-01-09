// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/indexeddb/indexeddb.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.IDBCursorDirectionSpec = { $: mojo.internal.Enum() };

// Enum: IDBDataLoss
blink.mojom.IDBDataLoss = {
  None: 0,
  Total: 1,
};
blink.mojom.IDBDataLossSpec = { $: mojo.internal.Enum() };

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
blink.mojom.IDBKeyTypeSpec = { $: mojo.internal.Enum() };

// Enum: IDBTransactionDurability
blink.mojom.IDBTransactionDurability = {
  Default: 0,
  Strict: 1,
  Relaxed: 2,
};
blink.mojom.IDBTransactionDurabilitySpec = { $: mojo.internal.Enum() };

// Enum: IDBGetAllResultType
blink.mojom.IDBGetAllResultType = {
  Keys: 0,
  Values: 1,
  Records: 2,
};
blink.mojom.IDBGetAllResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: IDBKeyPathType
blink.mojom.IDBKeyPathType = {
  Null: 0,
  String: 1,
  Array: 2,
};
blink.mojom.IDBKeyPathTypeSpec = { $: mojo.internal.Enum() };

// Enum: IDBOperationType
blink.mojom.IDBOperationType = {
  Add: 0,
  Put: 1,
  Delete: 2,
  Clear: 3,
};
blink.mojom.IDBOperationTypeSpec = { $: mojo.internal.Enum() };

// Enum: IDBPutMode
blink.mojom.IDBPutMode = {
  AddOrUpdate: 0,
  AddOnly: 1,
  CursorUpdate: 2,
};
blink.mojom.IDBPutModeSpec = { $: mojo.internal.Enum() };

// Enum: IDBTaskType
blink.mojom.IDBTaskType = {
  Normal: 0,
  Preemptive: 1,
};
blink.mojom.IDBTaskTypeSpec = { $: mojo.internal.Enum() };

// Enum: IDBTransactionMode
blink.mojom.IDBTransactionMode = {
  ReadOnly: 0,
  ReadWrite: 1,
  VersionChange: 2,
};
blink.mojom.IDBTransactionModeSpec = { $: mojo.internal.Enum() };

// Enum: IDBException
blink.mojom.IDBException = {
  kNoError: 0,
  kUnknownError: 1,
  kConstraintError: 2,
  kDataError: 3,
  kVersionError: 4,
  kAbortError: 5,
  kIgnorableAbortError: 6,
  kQuotaError: 7,
  kTimeoutError: 8,
};
blink.mojom.IDBExceptionSpec = { $: mojo.internal.Enum() };

// Union: IDBKey
blink.mojom.IDBKeySpec = { $: mojo.internal.Union(
    'blink.mojom.IDBKey', {
      'key_array': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.IDBKeySpec, false),
      }},
      'binary': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'string': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec,
      }},
      'date': {
        'ordinal': 3,
        'type': mojo.internal.Double,
      }},
      'number': {
        'ordinal': 4,
        'type': mojo.internal.Double,
      }},
      'other_none': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
      }},
    })
};

// Union: IDBKeyPathData
blink.mojom.IDBKeyPathDataSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBKeyPathData', {
      'string': {
        'ordinal': 0,
        'type': mojo_base.mojom.String16Spec,
      }},
      'string_array': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo_base.mojom.String16Spec, false),
      }},
    })
};

// Union: IDBExternalObject
blink.mojom.IDBExternalObjectSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBExternalObject', {
      'blob_or_file': {
        'ordinal': 0,
        'type': blink.mojom.IDBBlobInfoSpec,
      }},
      'file_system_access_token': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy,
      }},
    })
};

// Union: IDBCursorResult
blink.mojom.IDBCursorResultSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBCursorResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec,
      }},
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'values': {
        'ordinal': 2,
        'type': blink.mojom.IDBCursorValueSpec,
      }},
    })
};

// Union: IDBTransactionPutResult
blink.mojom.IDBTransactionPutResultSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBTransactionPutResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec,
      }},
      'key': {
        'ordinal': 1,
        'type': blink.mojom.IDBKeySpec,
      }},
    })
};

// Union: IDBDatabaseGetResult
blink.mojom.IDBDatabaseGetResultSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBDatabaseGetResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec,
      }},
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'key': {
        'ordinal': 2,
        'type': blink.mojom.IDBKeySpec,
      }},
      'value': {
        'ordinal': 3,
        'type': blink.mojom.IDBReturnValueSpec,
      }},
    })
};

// Union: IDBDatabaseOpenCursorResult
blink.mojom.IDBDatabaseOpenCursorResultSpec = { $: mojo.internal.Union(
    'blink.mojom.IDBDatabaseOpenCursorResult', {
      'error_result': {
        'ordinal': 0,
        'type': blink.mojom.IDBErrorSpec,
      }},
      'empty': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'value': {
        'ordinal': 2,
        'type': blink.mojom.IDBDatabaseOpenCursorValueSpec,
      }},
    })
};

// Struct: IDBKeyPath
blink.mojom.IDBKeyPathSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBKeyPath',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBKeyPathDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IDBKeyRange
blink.mojom.IDBKeyRangeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBKeyRange',
      packedSize: 48,
      fields: [
        { name: 'lower', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'upper', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'lower_open', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'upper_open', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: IDBIndexMetadata
blink.mojom.IDBIndexMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBIndexMetadata',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'key_path', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeyPathSpec, nullable: false, minVersion: 0 },
        { name: 'unique', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'multi_entry', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IDBObjectStoreMetadata
blink.mojom.IDBObjectStoreMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBObjectStoreMetadata',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'key_path', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeyPathSpec, nullable: false, minVersion: 0 },
        { name: 'auto_increment', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_index_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'indexes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int64, blink.mojom.IDBIndexMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: IDBDatabaseMetadata
blink.mojom.IDBDatabaseMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseMetadata',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'max_object_store_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_stores', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int64, blink.mojom.IDBObjectStoreMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'was_cold_open', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_sqlite', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: IDBNameAndVersion
blink.mojom.IDBNameAndVersionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBNameAndVersion',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IDBIndexKeys
blink.mojom.IDBIndexKeysSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBIndexKeys',
      packedSize: 24,
      fields: [
        { name: 'index_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IDBFileInfo
blink.mojom.IDBFileInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFileInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'last_modified', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IDBBlobInfo
blink.mojom.IDBBlobInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBBlobInfo',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBFileInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IDBValue
blink.mojom.IDBValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBValue',
      packedSize: 32,
      fields: [
        { name: 'bits', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'external_objects', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBExternalObjectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: IDBReturnValue
blink.mojom.IDBReturnValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBReturnValue',
      packedSize: 40,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBValueSpec, nullable: false, minVersion: 0 },
        { name: 'primary_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'key_path', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeyPathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IDBRecord
blink.mojom.IDBRecordSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBRecord',
      packedSize: 48,
      fields: [
        { name: 'primary_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: true, minVersion: 0 },
        { name: 'return_value', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBReturnValueSpec, nullable: true, minVersion: 0 },
        { name: 'index_key', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: IDBError
blink.mojom.IDBErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBError',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBExceptionSpec, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IDBCursorValue
blink.mojom.IDBCursorValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBCursorValue',
      packedSize: 32,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'primary_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: IDBDatabaseOpenCursorValue
blink.mojom.IDBDatabaseOpenCursorValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseOpenCursorValue',
      packedSize: 56,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'primary_key', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.IDBValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: IDBFactoryClient
blink.mojom.IDBFactoryClient = {};

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
      [code, message]);
  }

  blocked(existing_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBFactoryClient_Blocked_ParamsSpec,
      null,
      [existing_version]);
  }

  upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec,
      null,
      [pending_database, old_version, data_loss, data_loss_message, db_metadata]);
  }

  openSuccess(pending_database, metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec,
      null,
      [pending_database, metadata]);
  }

  deleteSuccess(old_version) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec,
      null,
      [old_version]);
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

// ParamsSpec for Error
blink.mojom.IDBFactoryClient_Error_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactoryClient.Error_Params',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBExceptionSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Blocked
blink.mojom.IDBFactoryClient_Blocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactoryClient.Blocked_Params',
      packedSize: 16,
      fields: [
        { name: 'existing_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpgradeNeeded
blink.mojom.IDBFactoryClient_UpgradeNeeded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactoryClient.UpgradeNeeded_Params',
      packedSize: 40,
      fields: [
        { name: 'pending_database', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'old_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'data_loss', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.IDBDataLossSpec, nullable: false, minVersion: 0 },
        { name: 'data_loss_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'db_metadata', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBDatabaseMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OpenSuccess
blink.mojom.IDBFactoryClient_OpenSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactoryClient.OpenSuccess_Params',
      packedSize: 24,
      fields: [
        { name: 'pending_database', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBDatabaseMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteSuccess
blink.mojom.IDBFactoryClient_DeleteSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactoryClient.DeleteSuccess_Params',
      packedSize: 16,
      fields: [
        { name: 'old_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBFactoryClientPtr = blink.mojom.IDBFactoryClientRemote;
blink.mojom.IDBFactoryClientRequest = blink.mojom.IDBFactoryClientPendingReceiver;


// Interface: IDBDatabaseCallbacks
blink.mojom.IDBDatabaseCallbacks = {};

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
      []);
  }

  versionChange(old_version, new_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec,
      null,
      [old_version, new_version]);
  }

  abort(transaction_id, code, message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec,
      null,
      [transaction_id, code, message]);
  }

  complete(transaction_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec,
      null,
      [transaction_id]);
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

// ParamsSpec for ForcedClose
blink.mojom.IDBDatabaseCallbacks_ForcedClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseCallbacks.ForcedClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for VersionChange
blink.mojom.IDBDatabaseCallbacks_VersionChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseCallbacks.VersionChange_Params',
      packedSize: 24,
      fields: [
        { name: 'old_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'new_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.IDBDatabaseCallbacks_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseCallbacks.Abort_Params',
      packedSize: 32,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBExceptionSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Complete
blink.mojom.IDBDatabaseCallbacks_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseCallbacks.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBDatabaseCallbacksPtr = blink.mojom.IDBDatabaseCallbacksRemote;
blink.mojom.IDBDatabaseCallbacksRequest = blink.mojom.IDBDatabaseCallbacksPendingReceiver;


// Interface: IDBCursor
blink.mojom.IDBCursor = {};

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
      [count]);
  }

  continue(key, primary_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBCursor_Continue_ParamsSpec,
      blink.mojom.IDBCursor_Continue_ResponseParamsSpec,
      [key, primary_key]);
  }

  prefetch(count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBCursor_Prefetch_ParamsSpec,
      blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec,
      [count]);
  }

  prefetchReset(used_prefetches) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBCursor_PrefetchReset_ParamsSpec,
      null,
      [used_prefetches]);
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

// ParamsSpec for Advance
blink.mojom.IDBCursor_Advance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBCursor.Advance_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.IDBCursor_Advance_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBCursorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Continue
blink.mojom.IDBCursor_Continue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBCursor.Continue_Params',
      packedSize: 40,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'primary_key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.IDBCursor_Continue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBCursorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Prefetch
blink.mojom.IDBCursor_Prefetch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBCursor.Prefetch_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.IDBCursor_Prefetch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBCursorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PrefetchReset
blink.mojom.IDBCursor_PrefetchReset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBCursor.PrefetchReset_Params',
      packedSize: 16,
      fields: [
        { name: 'used_prefetches', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBCursorPtr = blink.mojom.IDBCursorRemote;
blink.mojom.IDBCursorRequest = blink.mojom.IDBCursorPendingReceiver;


// Interface: IDBTransaction
blink.mojom.IDBTransaction = {};

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
      [object_store_id, name, key_path, auto_increment]);
  }

  deleteObjectStore(object_store_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec,
      null,
      [object_store_id]);
  }

  put(object_store_id, value, key, mode, index_keys) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBTransaction_Put_ParamsSpec,
      blink.mojom.IDBTransaction_Put_ResponseParamsSpec,
      [object_store_id, value, key, mode, index_keys]);
  }

  setIndexKeys(object_store_id, primary_key, index_keys) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec,
      null,
      [object_store_id, primary_key, index_keys]);
  }

  setIndexKeysDone() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec,
      null,
      []);
  }

  commit(num_errors_handled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.IDBTransaction_Commit_ParamsSpec,
      null,
      [num_errors_handled]);
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

// ParamsSpec for CreateObjectStore
blink.mojom.IDBTransaction_CreateObjectStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.CreateObjectStore_Params',
      packedSize: 40,
      fields: [
        { name: 'object_store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'key_path', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeyPathSpec, nullable: false, minVersion: 0 },
        { name: 'auto_increment', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DeleteObjectStore
blink.mojom.IDBTransaction_DeleteObjectStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.DeleteObjectStore_Params',
      packedSize: 16,
      fields: [
        { name: 'object_store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Put
blink.mojom.IDBTransaction_Put_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.Put_Params',
      packedSize: 56,
      fields: [
        { name: 'object_store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBValueSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.IDBPutModeSpec, nullable: false, minVersion: 0 },
        { name: 'index_keys', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBIndexKeysSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

blink.mojom.IDBTransaction_Put_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBTransactionPutResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetIndexKeys
blink.mojom.IDBTransaction_SetIndexKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.SetIndexKeys_Params',
      packedSize: 40,
      fields: [
        { name: 'object_store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'primary_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBKeySpec, nullable: false, minVersion: 0 },
        { name: 'index_keys', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBIndexKeysSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetIndexKeysDone
blink.mojom.IDBTransaction_SetIndexKeysDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.SetIndexKeysDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Commit
blink.mojom.IDBTransaction_Commit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBTransaction.Commit_Params',
      packedSize: 16,
      fields: [
        { name: 'num_errors_handled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBTransactionPtr = blink.mojom.IDBTransactionRemote;
blink.mojom.IDBTransactionRequest = blink.mojom.IDBTransactionPendingReceiver;


// Interface: IDBDatabaseGetAllResultSink
blink.mojom.IDBDatabaseGetAllResultSink = {};

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
      [records, done]);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec,
      null,
      [error]);
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

// ParamsSpec for ReceiveResults
blink.mojom.IDBDatabaseGetAllResultSink_ReceiveResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseGetAllResultSink.ReceiveResults_Params',
      packedSize: 24,
      fields: [
        { name: 'records', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBRecordSpec, false), nullable: false, minVersion: 0 },
        { name: 'done', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.IDBDatabaseGetAllResultSink_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabaseGetAllResultSink.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBDatabaseGetAllResultSinkPtr = blink.mojom.IDBDatabaseGetAllResultSinkRemote;
blink.mojom.IDBDatabaseGetAllResultSinkRequest = blink.mojom.IDBDatabaseGetAllResultSinkPendingReceiver;


// Interface: IDBDatabase
blink.mojom.IDBDatabase = {};

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
      [transaction_id, object_store_id, new_name]);
  }

  createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec,
      null,
      [transaction_receiver, transaction_id, object_store_ids, mode, durability]);
  }

  versionChangeIgnored() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec,
      null,
      []);
  }

  get(transaction_id, object_store_id, index_id, key_range, key_only) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.IDBDatabase_Get_ParamsSpec,
      blink.mojom.IDBDatabase_Get_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, key_only]);
  }

  getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.IDBDatabase_GetAll_ParamsSpec,
      blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction]);
  }

  openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.IDBDatabase_OpenCursor_ParamsSpec,
      blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type]);
  }

  count(transaction_id, object_store_id, index_id, key_range) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.IDBDatabase_Count_ParamsSpec,
      blink.mojom.IDBDatabase_Count_ResponseParamsSpec,
      [transaction_id, object_store_id, index_id, key_range]);
  }

  deleteRange(transaction_id, object_store_id, key_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.IDBDatabase_DeleteRange_ParamsSpec,
      blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec,
      [transaction_id, object_store_id, key_range]);
  }

  getKeyGeneratorCurrentNumber(transaction_id, object_store_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec,
      blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec,
      [transaction_id, object_store_id]);
  }

  clear(transaction_id, object_store_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.IDBDatabase_Clear_ParamsSpec,
      blink.mojom.IDBDatabase_Clear_ResponseParamsSpec,
      [transaction_id, object_store_id]);
  }

  createIndex(transaction_id, object_store_id, index) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.IDBDatabase_CreateIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index]);
  }

  deleteIndex(transaction_id, object_store_id, index_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id]);
  }

  renameIndex(transaction_id, object_store_id, index_id, new_name) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.IDBDatabase_RenameIndex_ParamsSpec,
      null,
      [transaction_id, object_store_id, index_id, new_name]);
  }

  abort(transaction_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.IDBDatabase_Abort_ParamsSpec,
      null,
      [transaction_id]);
  }

  didBecomeInactive() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec,
      null,
      []);
  }

  updatePriority(new_priority) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec,
      null,
      [new_priority]);
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

// ParamsSpec for RenameObjectStore
blink.mojom.IDBDatabase_RenameObjectStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.RenameObjectStore_Params',
      packedSize: 32,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'new_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CreateTransaction
blink.mojom.IDBDatabase_CreateTransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.CreateTransaction_Params',
      packedSize: 40,
      fields: [
        { name: 'transaction_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'transaction_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.IDBTransactionModeSpec, nullable: false, minVersion: 0 },
        { name: 'durability', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBTransactionDurabilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for VersionChangeIgnored
blink.mojom.IDBDatabase_VersionChangeIgnored_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.VersionChangeIgnored_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Get
blink.mojom.IDBDatabase_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.Get_Params',
      packedSize: 48,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'key_range', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeyRangeSpec, nullable: false, minVersion: 0 },
        { name: 'key_only', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.IDBDatabase_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBDatabaseGetResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAll
blink.mojom.IDBDatabase_GetAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.GetAll_Params',
      packedSize: 56,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'key_range', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeyRangeSpec, nullable: false, minVersion: 0 },
        { name: 'result_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.IDBGetAllResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'max_count', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.IDBCursorDirectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

blink.mojom.IDBDatabase_GetAll_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenCursor
blink.mojom.IDBDatabase_OpenCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.OpenCursor_Params',
      packedSize: 56,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'key_range', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeyRangeSpec, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.IDBCursorDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'key_only', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'task_type', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.IDBTaskTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

blink.mojom.IDBDatabase_OpenCursor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IDBDatabaseOpenCursorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Count
blink.mojom.IDBDatabase_Count_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.Count_Params',
      packedSize: 40,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'key_range', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.IDBKeyRangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.IDBDatabase_Count_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteRange
blink.mojom.IDBDatabase_DeleteRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.DeleteRange_Params',
      packedSize: 32,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'key_range', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBKeyRangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.IDBDatabase_DeleteRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetKeyGeneratorCurrentNumber
blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.GetKeyGeneratorCurrentNumber_Params',
      packedSize: 24,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.IDBDatabase_GetKeyGeneratorCurrentNumber_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Clear
blink.mojom.IDBDatabase_Clear_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.Clear_Params',
      packedSize: 24,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.IDBDatabase_Clear_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateIndex
blink.mojom.IDBDatabase_CreateIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.CreateIndex_Params',
      packedSize: 32,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IDBIndexMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DeleteIndex
blink.mojom.IDBDatabase_DeleteIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.DeleteIndex_Params',
      packedSize: 32,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RenameIndex
blink.mojom.IDBDatabase_RenameIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.RenameIndex_Params',
      packedSize: 40,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'object_store_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'index_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'new_name', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.IDBDatabase_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.Abort_Params',
      packedSize: 16,
      fields: [
        { name: 'transaction_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidBecomeInactive
blink.mojom.IDBDatabase_DidBecomeInactive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.DidBecomeInactive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdatePriority
blink.mojom.IDBDatabase_UpdatePriority_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBDatabase.UpdatePriority_Params',
      packedSize: 16,
      fields: [
        { name: 'new_priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBDatabasePtr = blink.mojom.IDBDatabaseRemote;
blink.mojom.IDBDatabaseRequest = blink.mojom.IDBDatabasePendingReceiver;


// Interface: IDBFactory
blink.mojom.IDBFactory = {};

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
      []);
  }

  open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.IDBFactory_Open_ParamsSpec,
      null,
      [client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority]);
  }

  deleteDatabase(client, name, force_close) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec,
      null,
      [client, name, force_close]);
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

// ParamsSpec for GetDatabaseInfo
blink.mojom.IDBFactory_GetDatabaseInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactory.GetDatabaseInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.IDBFactory_GetDatabaseInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'names_and_versions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IDBNameAndVersionSpec, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IDBErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Open
blink.mojom.IDBFactory_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactory.Open_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'database_callbacks', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'version_change_transaction_receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'transaction_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for DeleteDatabase
blink.mojom.IDBFactory_DeleteDatabase_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IDBFactory.DeleteDatabase_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'force_close', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.IDBFactoryPtr = blink.mojom.IDBFactoryRemote;
blink.mojom.IDBFactoryRequest = blink.mojom.IDBFactoryPendingReceiver;

