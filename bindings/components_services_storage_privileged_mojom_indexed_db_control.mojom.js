// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: ForceCloseReason
storage.mojom.mojom.ForceCloseReason = {
  FORCE_CLOSE_DELETE_ORIGIN: 0,
  FORCE_CLOSE_BACKING_STORE_FAILURE: 1,
  FORCE_CLOSE_INTERNALS_PAGE: 2,
};
storage.mojom.mojom.ForceCloseReasonSpec = { $: mojo.internal.Enum() };

// Interface: IndexedDBObserver
storage.mojom.mojom.IndexedDBObserver = {};

storage.mojom.mojom.IndexedDBObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IndexedDBObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IndexedDBObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IndexedDBObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IndexedDBObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onIndexedDBListChanged(bucket_locator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec,
      null,
      [bucket_locator]);
  }

  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec,
      null,
      [bucket_locator, database_name, object_store_name]);
  }

};

storage.mojom.mojom.IndexedDBObserver.getRemote = function() {
  let remote = new storage.mojom.mojom.IndexedDBObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnIndexedDBListChanged
storage.mojom.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBObserver.OnIndexedDBListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIndexedDBContentChanged
storage.mojom.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBObserver.OnIndexedDBContentChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'database_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'object_store_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.IndexedDBObserverPtr = storage.mojom.mojom.IndexedDBObserverRemote;
storage.mojom.mojom.IndexedDBObserverRequest = storage.mojom.mojom.IndexedDBObserverPendingReceiver;


// Interface: IndexedDBControl
storage.mojom.mojom.IndexedDBControl = {};

storage.mojom.mojom.IndexedDBControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IndexedDBControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IndexedDBControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IndexedDBControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IndexedDBControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec,
      null,
      [bucket_locator, client_info, client_state_checker_remote, receiver]);
  }

  forceClose(bucket_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.IndexedDBControl_ForceClose_ParamsSpec,
      null,
      [bucket_id, reason]);
  }

  downloadBucketData(bucket_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec,
      storage.mojom.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec,
      [bucket_id]);
  }

  getAllBucketsDetails() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec,
      storage.mojom.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec,
      []);
  }

  startMetadataRecording(bucket_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec,
      null,
      [bucket_id]);
  }

  stopMetadataRecording(bucket_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec,
      storage.mojom.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id]);
  }

  setForceKeepSessionState() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec,
      null,
      []);
  }

  addObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.mojom.IndexedDBControl_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates]);
  }

  bindTestInterfaceForTesting(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.mojom.IndexedDBControl.getRemote = function() {
  let remote = new storage.mojom.mojom.IndexedDBControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControl',
    'context');
  return remote.$;
};

// ParamsSpec for BindIndexedDB
storage.mojom.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.BindIndexedDB_Params',
      packedSize: 40,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'client_info', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketClientInfoSpec, nullable: false, minVersion: 0 },
        { name: 'client_state_checker_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.IndexedDBClientStateCheckerRemote), nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ForceClose
storage.mojom.mojom.IndexedDBControl_ForceClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.ForceClose_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.ForceCloseReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DownloadBucketData
storage.mojom.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.DownloadBucketData_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.DownloadBucketData_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'temp_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'zip_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetAllBucketsDetails
storage.mojom.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.GetAllBucketsDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.GetAllBucketsDetails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'incognito', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartMetadataRecording
storage.mojom.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StartMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopMetadataRecording
storage.mojom.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StopMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StopMetadataRecording_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetForceKeepSessionState
storage.mojom.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.SetForceKeepSessionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddObserver
storage.mojom.mojom.IndexedDBControl_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.IndexedDBObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTestInterfaceForTesting
storage.mojom.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.BindTestInterfaceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(storage.mojom.IndexedDBControlTestRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.IndexedDBControlPtr = storage.mojom.mojom.IndexedDBControlRemote;
storage.mojom.mojom.IndexedDBControlRequest = storage.mojom.mojom.IndexedDBControlPendingReceiver;

