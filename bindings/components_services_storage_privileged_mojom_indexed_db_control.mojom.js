// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: ForceCloseReason
storage.mojom.ForceCloseReason = {
  FORCE_CLOSE_DELETE_ORIGIN: 0,
  FORCE_CLOSE_BACKING_STORE_FAILURE: 1,
  FORCE_CLOSE_INTERNALS_PAGE: 2,
};

// Interface: IndexedDBObserver
storage.mojom.IndexedDBObserver = {};

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

// ParamsSpec for OnIndexedDBListChanged
storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBObserver.OnIndexedDBListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnIndexedDBContentChanged
storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBObserver.OnIndexedDBContentChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'bucket_locator', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false },
        { name: 'database_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'object_store_name', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.IndexedDBObserverPtr = storage.mojom.IndexedDBObserverRemote;
storage.mojom.IndexedDBObserverRequest = storage.mojom.IndexedDBObserverPendingReceiver;


// Interface: IndexedDBControl
storage.mojom.IndexedDBControl = {};

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
      null,
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
      null,
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

// ParamsSpec for BindIndexedDB
storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.BindIndexedDB_Params',
      packedSize: 32,
      fields: [
        { name: 'bucket_locator', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false },
        { name: 'client_info', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.BucketClientInfoSpec, nullable: false },
        { name: 'client_state_checker_remote', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'receiver', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceClose
storage.mojom.IndexedDBControl_ForceClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.ForceClose_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_id', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false },
        { name: 'reason', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.ForceCloseReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DownloadBucketData
storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.DownloadBucketData_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.DownloadBucketData_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'temp_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'zip_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllBucketsDetails
storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.GetAllBucketsDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.GetAllBucketsDetails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'incognito', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartMetadataRecording
storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StartMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopMetadataRecording
storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StopMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.StopMetadataRecording_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetForceKeepSessionState
storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.SetForceKeepSessionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
storage.mojom.IndexedDBControl_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindTestInterfaceForTesting
storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControl.BindTestInterfaceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.IndexedDBControlPtr = storage.mojom.IndexedDBControlRemote;
storage.mojom.IndexedDBControlRequest = storage.mojom.IndexedDBControlPendingReceiver;

