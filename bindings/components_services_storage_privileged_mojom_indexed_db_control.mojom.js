// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec, 'storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('database_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('object_store_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
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
      [bucket_locator],
      false);
  }

  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec,
      null,
      [bucket_locator, database_name, object_store_name],
      false);
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

storage.mojom.IndexedDBObserverReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnIndexedDBListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIndexedDBListChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnIndexedDBContentChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIndexedDBContentChanged (1)');
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
          const params = decoder.decodeStruct(storage.mojom.IndexedDBObserver_OnIndexedDBListChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIndexedDBListChanged');
          const result = this.impl.onIndexedDBListChanged(params.bucket_locator);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBObserver_OnIndexedDBContentChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIndexedDBContentChanged');
          const result = this.impl.onIndexedDBContentChanged(params.bucket_locator, params.database_name, params.object_store_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.IndexedDBObserverReceiver = storage.mojom.IndexedDBObserverReceiver;

storage.mojom.IndexedDBObserverPtr = storage.mojom.IndexedDBObserverRemote;
storage.mojom.IndexedDBObserverRequest = storage.mojom.IndexedDBObserverPendingReceiver;


// Interface: IndexedDBControl
mojo.internal.Struct(
    storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec, 'storage.mojom.IndexedDBControl_BindIndexedDB_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_info', 8, 0, storage.mojom.BucketClientInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_state_checker_remote', 16, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBClientStateCheckerRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, storage.mojom.ForceCloseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_ForceClose_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParams', [
      mojo.internal.StructField('temp_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zip_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParams', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('incognito', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec, 'storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec, 'storage.mojom.IndexedDBControl_SetForceKeepSessionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_AddObserver_ParamsSpec, 'storage.mojom.IndexedDBControl_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(storage.mojom.IndexedDBObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.IndexedDBControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
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
      [bucket_locator, client_info, client_state_checker_remote, receiver],
      false);
  }

  forceClose(bucket_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBControl_ForceClose_ParamsSpec,
      storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec,
      [bucket_id, reason],
      false);
  }

  downloadBucketData(bucket_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec,
      storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  getAllBucketsDetails() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec,
      storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec,
      [],
      false);
  }

  startMetadataRecording(bucket_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  stopMetadataRecording(bucket_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec,
      storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  setForceKeepSessionState() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.IndexedDBControl_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates],
      false);
  }

  bindTestInterfaceForTesting(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec,
      null,
      [receiver],
      false);
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

storage.mojom.IndexedDBControlReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindIndexedDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindIndexedDB (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ForceClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_ForceClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceClose (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DownloadBucketData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadBucketData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAllBucketsDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllBucketsDetails (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StartMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartMetadataRecording (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StopMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopMetadataRecording (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetForceKeepSessionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetForceKeepSessionState (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ApplyPolicyUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: BindTestInterfaceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestInterfaceForTesting (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_BindIndexedDB_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindIndexedDB');
          const result = this.impl.bindIndexedDB(params.bucket_locator, params.client_info, params.client_state_checker_remote, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_ForceClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceClose');
          const result = this.impl.forceClose(params.bucket_id, params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_ForceClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_DownloadBucketData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.downloadBucketData');
          const result = this.impl.downloadBucketData(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_DownloadBucketData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_GetAllBucketsDetails_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllBucketsDetails');
          const result = this.impl.getAllBucketsDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_GetAllBucketsDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_StartMetadataRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startMetadataRecording');
          const result = this.impl.startMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_StartMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_StopMetadataRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopMetadataRecording');
          const result = this.impl.stopMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControl_StopMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_SetForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setForceKeepSessionState');
          const result = this.impl.setForceKeepSessionState();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControl_BindTestInterfaceForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindTestInterfaceForTesting');
          const result = this.impl.bindTestInterfaceForTesting(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.IndexedDBControlReceiver = storage.mojom.IndexedDBControlReceiver;

storage.mojom.IndexedDBControlPtr = storage.mojom.IndexedDBControlRemote;
storage.mojom.IndexedDBControlRequest = storage.mojom.IndexedDBControlPendingReceiver;

