// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};

storage.mojom.ForceCloseReasonSpec = { $: mojo.internal.Enum() };
storage.mojom.IndexedDBObserver = {};
storage.mojom.IndexedDBObserver.$interfaceName = 'storage.mojom.IndexedDBObserver';
storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec = { $: {} };
storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl = {};
storage.mojom.IndexedDBControl.$interfaceName = 'storage.mojom.IndexedDBControl';
storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ForceClose_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_AddObserver_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec = { $: {} };

// Enum: ForceCloseReason
storage.mojom.ForceCloseReason = {
  FORCE_CLOSE_DELETE_ORIGIN: 0,
  FORCE_CLOSE_BACKING_STORE_FAILURE: 1,
  FORCE_CLOSE_INTERNALS_PAGE: 2,
};

// Interface: IndexedDBObserver
mojo.internal.Struct(
    storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec, 'storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec, 'storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec, null, false, 0, undefined),
      mojo.internal.StructField('database_name', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('object_store_name', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);

storage.mojom.IndexedDBObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IndexedDBObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onIndexedDBListChanged(bucket_locator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec,
      null,
      [bucket_locator]);
  }

  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec,
      null,
      [bucket_locator, database_name, object_store_name]);
  }

};

storage.mojom.IndexedDBObserver.getRemote = function() {
  let remote = new storage.mojom.IndexedDBObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBObserver',
    'context');
  return remote.$;
};

storage.mojom.IndexedDBObserverPtr = storage.mojom.IndexedDBObserverRemote;
storage.mojom.IndexedDBObserverRequest = storage.mojom.IndexedDBObserverPendingReceiver;


// Interface: IndexedDBControl
mojo.internal.Struct(
    storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec, 'storage.mojom.IndexedDBControl_BindIndexedDB_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_info', 8, 0, storage.mojom.BucketClientInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_state_checker_remote', 16, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBClientStateCheckerRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, storage.mojom.ForceCloseReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParams', [
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temp_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('zip_path', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParams', [
      mojo.internal.StructField('incognito', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec, 'storage.mojom.IndexedDBControl_SetForceKeepSessionState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_AddObserver_ParamsSpec, 'storage.mojom.IndexedDBControl_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.IndexedDBControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec, 'storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.IndexedDBControlTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.IndexedDBControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IndexedDBControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec,
      null,
      [bucket_locator, client_info, client_state_checker_remote, receiver]);
  }

  forceClose(bucket_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBControl_ForceClose_ParamsSpec,
      storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec,
      [bucket_id, reason]);
  }

  downloadBucketData(bucket_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec,
      storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec,
      [bucket_id]);
  }

  getAllBucketsDetails() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec,
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec,
      []);
  }

  startMetadataRecording(bucket_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id]);
  }

  stopMetadataRecording(bucket_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id]);
  }

  setForceKeepSessionState() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec,
      null,
      []);
  }

  addObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.IndexedDBControl_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates]);
  }

  bindTestInterfaceForTesting(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.IndexedDBControl.getRemote = function() {
  let remote = new storage.mojom.IndexedDBControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControl',
    'context');
  return remote.$;
};

storage.mojom.IndexedDBControlPtr = storage.mojom.IndexedDBControlRemote;
storage.mojom.IndexedDBControlRequest = storage.mojom.IndexedDBControlPendingReceiver;

