// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/indexeddb/indexeddb.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
  per: 0,
  Binary: 1,
  String: 2,
  Date: 3,
  Number: 4,
  e: 5,
  e: 6,
  min: 7,
};

// Enum: IDBTransactionDurability
blink.mojom.IDBTransactionDurability = {
  and: 0,
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
  kUnknownError: 1,
  kConstraintError: 2,
  kDataError: 3,
  kVersionError: 4,
  kAbortError: 5,
  kIgnorableAbortError: 6,
  kQuotaError: 7,
  kTimeoutError: 8,
};

// Struct: IDBKeyPath
blink.mojom.IDBKeyPath = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : null;
  }
};

// Struct: IDBKeyRange
blink.mojom.IDBKeyRange = class {
  constructor(values = {}) {
    this.upper_open = values.upper_open !== undefined ? values.upper_open : false;
  }
};

// Struct: IDBIndexMetadata
blink.mojom.IDBIndexMetadata = class {
  constructor(values = {}) {
    this.multi_entry = values.multi_entry !== undefined ? values.multi_entry : 0;
  }
};

// Struct: IDBObjectStoreMetadata
blink.mojom.IDBObjectStoreMetadata = class {
  constructor(values = {}) {
    this.indexes = values.indexes !== undefined ? values.indexes : 0;
  }
};

// Struct: IDBDatabaseMetadata
blink.mojom.IDBDatabaseMetadata = class {
  constructor(values = {}) {
    this.was_cold_open = values.was_cold_open !== undefined ? values.was_cold_open : 0;
    this.is_sqlite = values.is_sqlite !== undefined ? values.is_sqlite : false;
  }
};

// Struct: IDBNameAndVersion
blink.mojom.IDBNameAndVersion = class {
  constructor(values = {}) {
    this.version = values.version !== undefined ? values.version : 0;
  }
};

// Struct: IDBIndexKeys
blink.mojom.IDBIndexKeys = class {
  constructor(values = {}) {
    this.index_keys = values.index_keys !== undefined ? values.index_keys : 0;
  }
};

// Struct: IDBFileInfo
blink.mojom.IDBFileInfo = class {
  constructor(values = {}) {
    this.last_modified = values.last_modified !== undefined ? values.last_modified : "";
  }
};

// Struct: IDBBlobInfo
blink.mojom.IDBBlobInfo = class {
  constructor(values = {}) {
    this.file = values.file !== undefined ? values.file : 0;
  }
};

// Struct: IDBValue
blink.mojom.IDBValue = class {
  constructor(values = {}) {
    this.external_objects = values.external_objects !== undefined ? values.external_objects : [];
  }
};

// Struct: IDBReturnValue
blink.mojom.IDBReturnValue = class {
  constructor(values = {}) {
    this.key_path = values.key_path !== undefined ? values.key_path : null;
  }
};

// Struct: IDBRecord
blink.mojom.IDBRecord = class {
  constructor(values = {}) {
    this.index_key = values.index_key !== undefined ? values.index_key : null;
  }
};

// Struct: IDBError
blink.mojom.IDBError = class {
  constructor(values = {}) {
    this.error_message = values.error_message !== undefined ? values.error_message : "";
  }
};

// Struct: IDBCursorValue
blink.mojom.IDBCursorValue = class {
  constructor(values = {}) {
    this.values = values.values !== undefined ? values.values : [];
  }
};

// Struct: IDBDatabaseOpenCursorValue
blink.mojom.IDBDatabaseOpenCursorValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
  }
};

// Interface: IDBFactoryClient
blink.mojom.IDBFactoryClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBFactoryClient';
  }

  error(code, message) {
    // Method: Error
    // Call: Error(code, message)
  }

  blocked(existing_version) {
    // Method: Blocked
    // Call: Blocked(existing_version)
  }

  upgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata) {
    // Method: UpgradeNeeded
    // Call: UpgradeNeeded(pending_database, old_version, data_loss, data_loss_message, db_metadata)
  }

  openSuccess(pending_database, metadata) {
    // Method: OpenSuccess
    // Call: OpenSuccess(pending_database, metadata)
  }

  deleteSuccess(old_version) {
    // Method: DeleteSuccess
    // Call: DeleteSuccess(old_version)
  }

};

blink.mojom.IDBFactoryClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBDatabaseCallbacks
blink.mojom.IDBDatabaseCallbacksPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBDatabaseCallbacks';
  }

  forcedClose() {
    // Method: ForcedClose
    // Call: ForcedClose()
  }

  versionChange(old_version, new_version) {
    // Method: VersionChange
    // Call: VersionChange(old_version, new_version)
  }

  abort(transaction_id, code, message) {
    // Method: Abort
    // Call: Abort(transaction_id, code, message)
  }

  complete(transaction_id) {
    // Method: Complete
    // Call: Complete(transaction_id)
  }

};

blink.mojom.IDBDatabaseCallbacksRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBCursor
blink.mojom.IDBCursorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBCursor';
  }

  advance(count) {
    // Method: Advance
    return new Promise((resolve) => {
      // Call: Advance(count)
      resolve({});
    });
  }

  continue(key, primary_key) {
    // Method: Continue
    return new Promise((resolve) => {
      // Call: Continue(key, primary_key)
      resolve({});
    });
  }

  prefetch(count) {
    // Method: Prefetch
    return new Promise((resolve) => {
      // Call: Prefetch(count)
      resolve({});
    });
  }

  prefetchReset(used_prefetches) {
    // Method: PrefetchReset
    // Call: PrefetchReset(used_prefetches)
  }

};

blink.mojom.IDBCursorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBTransaction
blink.mojom.IDBTransactionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBTransaction';
  }

  createObjectStore(object_store_id, name, key_path, auto_increment) {
    // Method: CreateObjectStore
    // Call: CreateObjectStore(object_store_id, name, key_path, auto_increment)
  }

  deleteObjectStore(object_store_id) {
    // Method: DeleteObjectStore
    // Call: DeleteObjectStore(object_store_id)
  }

  put(object_store_id, value, key, mode, index_keys) {
    // Method: Put
    return new Promise((resolve) => {
      // Call: Put(object_store_id, value, key, mode, index_keys)
      resolve({});
    });
  }

  setIndexKeys(object_store_id, primary_key, index_keys) {
    // Method: SetIndexKeys
    // Call: SetIndexKeys(object_store_id, primary_key, index_keys)
  }

  setIndexKeysDone() {
    // Method: SetIndexKeysDone
    // Call: SetIndexKeysDone()
  }

  commit(num_errors_handled) {
    // Method: Commit
    // Call: Commit(num_errors_handled)
  }

};

blink.mojom.IDBTransactionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBDatabaseGetAllResultSink
blink.mojom.IDBDatabaseGetAllResultSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBDatabaseGetAllResultSink';
  }

  receiveResults(records, done) {
    // Method: ReceiveResults
    // Call: ReceiveResults(records, done)
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

};

blink.mojom.IDBDatabaseGetAllResultSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBDatabase
blink.mojom.IDBDatabasePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBDatabase';
  }

  renameObjectStore(transaction_id, object_store_id, new_name) {
    // Method: RenameObjectStore
    // Call: RenameObjectStore(transaction_id, object_store_id, new_name)
  }

  createTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability) {
    // Method: CreateTransaction
    // Call: CreateTransaction(transaction_receiver, transaction_id, object_store_ids, mode, durability)
  }

  versionChangeIgnored() {
    // Method: VersionChangeIgnored
    // Call: VersionChangeIgnored()
  }

  get(transaction_id, object_store_id, index_id, key_range, key_only) {
    // Method: Get
    return new Promise((resolve) => {
      // Call: Get(transaction_id, object_store_id, index_id, key_range, key_only)
      resolve({});
    });
  }

  getAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction) {
    // Method: GetAll
    return new Promise((resolve) => {
      // Call: GetAll(transaction_id, object_store_id, index_id, key_range, result_type, max_count, direction)
      resolve({});
    });
  }

  openCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type) {
    // Method: OpenCursor
    return new Promise((resolve) => {
      // Call: OpenCursor(transaction_id, object_store_id, index_id, key_range, direction, key_only, task_type)
      resolve({});
    });
  }

  count(transaction_id, object_store_id, index_id, key_range) {
    // Method: Count
    return new Promise((resolve) => {
      // Call: Count(transaction_id, object_store_id, index_id, key_range)
      resolve({});
    });
  }

  deleteRange(transaction_id, object_store_id, key_range) {
    // Method: DeleteRange
    return new Promise((resolve) => {
      // Call: DeleteRange(transaction_id, object_store_id, key_range)
      resolve({});
    });
  }

  getKeyGeneratorCurrentNumber(transaction_id, object_store_id) {
    // Method: GetKeyGeneratorCurrentNumber
    return new Promise((resolve) => {
      // Call: GetKeyGeneratorCurrentNumber(transaction_id, object_store_id)
      resolve({});
    });
  }

  clear(transaction_id, object_store_id) {
    // Method: Clear
    return new Promise((resolve) => {
      // Call: Clear(transaction_id, object_store_id)
      resolve({});
    });
  }

  createIndex(transaction_id, object_store_id, index) {
    // Method: CreateIndex
    // Call: CreateIndex(transaction_id, object_store_id, index)
  }

  deleteIndex(transaction_id, object_store_id, index_id) {
    // Method: DeleteIndex
    // Call: DeleteIndex(transaction_id, object_store_id, index_id)
  }

  renameIndex(transaction_id, object_store_id, index_id, new_name) {
    // Method: RenameIndex
    // Call: RenameIndex(transaction_id, object_store_id, index_id, new_name)
  }

  abort(transaction_id) {
    // Method: Abort
    // Call: Abort(transaction_id)
  }

  didBecomeInactive() {
    // Method: DidBecomeInactive
    // Call: DidBecomeInactive()
  }

  updatePriority(new_priority) {
    // Method: UpdatePriority
    // Call: UpdatePriority(new_priority)
  }

};

blink.mojom.IDBDatabaseRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IDBFactory
blink.mojom.IDBFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IDBFactory';
  }

  getDatabaseInfo() {
    // Method: GetDatabaseInfo
    return new Promise((resolve) => {
      // Call: GetDatabaseInfo()
      resolve({});
    });
  }

  open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority) {
    // Method: Open
    // Call: Open(client, database_callbacks, name, version, version_change_transaction_receiver, transaction_id, priority)
  }

  deleteDatabase(client, name, force_close) {
    // Method: DeleteDatabase
    // Call: DeleteDatabase(client, name, force_close)
  }

};

blink.mojom.IDBFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
