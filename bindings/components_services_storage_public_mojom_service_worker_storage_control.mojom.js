// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

storage.mojom.ServiceWorkerStorageStorageKeyStateSpec = { $: mojo.internal.Enum() };
storage.mojom.ServiceWorkerLiveVersionInfoSpec = { $: {} };
storage.mojom.ServiceWorkerFindRegistrationResultSpec = { $: {} };
storage.mojom.ServiceWorkerUserDataSpec = { $: {} };
storage.mojom.ServiceWorkerLiveVersionRef = {};
storage.mojom.ServiceWorkerLiveVersionRef.$interfaceName = 'storage.mojom.ServiceWorkerLiveVersionRef';
storage.mojom.ServiceWorkerResourceReader = {};
storage.mojom.ServiceWorkerResourceReader.$interfaceName = 'storage.mojom.ServiceWorkerResourceReader';
storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceWriter = {};
storage.mojom.ServiceWorkerResourceWriter.$interfaceName = 'storage.mojom.ServiceWorkerResourceWriter';
storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceMetadataWriter = {};
storage.mojom.ServiceWorkerResourceMetadataWriter.$interfaceName = 'storage.mojom.ServiceWorkerResourceMetadataWriter';
storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl = {};
storage.mojom.ServiceWorkerStorageControl.$interfaceName = 'storage.mojom.ServiceWorkerStorageControl';
storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec = { $: {} };
storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec = { $: {} };

// Enum: ServiceWorkerStorageStorageKeyState
storage.mojom.ServiceWorkerStorageStorageKeyState = {
  kKeep: 0,
  kDelete: 1,
};

// Struct: ServiceWorkerLiveVersionInfo
mojo.internal.Struct(
    storage.mojom.ServiceWorkerLiveVersionInfoSpec, 'storage.mojom.ServiceWorkerLiveVersionInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('purgeable_resources', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('reference', 16, 0, mojo.internal.InterfaceRequest(storage.mojom.ServiceWorkerLiveVersionRefSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceWorkerFindRegistrationResult
mojo.internal.Struct(
    storage.mojom.ServiceWorkerFindRegistrationResultSpec, 'storage.mojom.ServiceWorkerFindRegistrationResult', [
      mojo.internal.StructField('version_reference', 0, 0, mojo.internal.InterfaceProxy(storage.mojom.ServiceWorkerLiveVersionRefSpec), null, false, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, storage.mojom.ServiceWorkerRegistrationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.Array(storage.mojom.ServiceWorkerResourceRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceWorkerUserData
mojo.internal.Struct(
    storage.mojom.ServiceWorkerUserDataSpec, 'storage.mojom.ServiceWorkerUserData', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ServiceWorkerLiveVersionRef
storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerLiveVersionRefRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerLiveVersionRef';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

storage.mojom.ServiceWorkerLiveVersionRef.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerLiveVersionRefRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerLiveVersionRef',
    'context');
  return remote.$;
};

storage.mojom.ServiceWorkerLiveVersionRefReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.ServiceWorkerLiveVersionRefReceiver = storage.mojom.ServiceWorkerLiveVersionRefReceiver;

storage.mojom.ServiceWorkerLiveVersionRefPtr = storage.mojom.ServiceWorkerLiveVersionRefRemote;
storage.mojom.ServiceWorkerLiveVersionRefRequest = storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver;


// Interface: ServiceWorkerResourceReader
mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParams', [
      mojo.internal.StructField('response_head', 0, 0, network.mojom.URLResponseHeadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_PrepareReadData_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParams', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.ServiceWorkerResourceReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceReaderRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceReaderPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readResponseHead() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec,
      [],
      false);
  }

  prepareReadData(size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec,
      [size],
      false);
  }

  readData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.ServiceWorkerResourceReader.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceReader',
    'context');
  return remote.$;
};

storage.mojom.ServiceWorkerResourceReaderReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: ReadResponseHead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadResponseHead (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: PrepareReadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareReadData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ReadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readResponseHead');
          const result = this.impl.readResponseHead();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prepareReadData');
          const result = this.impl.prepareReadData(params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readData');
          const result = this.impl.readData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.ServiceWorkerResourceReaderReceiver = storage.mojom.ServiceWorkerResourceReaderReceiver;

storage.mojom.ServiceWorkerResourceReaderPtr = storage.mojom.ServiceWorkerResourceReaderRemote;
storage.mojom.ServiceWorkerResourceReaderRequest = storage.mojom.ServiceWorkerResourceReaderPendingReceiver;


// Interface: ServiceWorkerResourceWriter
mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_Params', [
      mojo.internal.StructField('response_head', 0, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.ServiceWorkerResourceWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceWriterPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeResponseHead(response_head) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec,
      [response_head],
      false);
  }

  writeData(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec,
      [data],
      false);
  }

};

storage.mojom.ServiceWorkerResourceWriter.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceWriter',
    'context');
  return remote.$;
};

storage.mojom.ServiceWorkerResourceWriterReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: WriteResponseHead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteResponseHead (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: WriteData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeResponseHead');
          const result = this.impl.writeResponseHead(params.response_head);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeData');
          const result = this.impl.writeData(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.ServiceWorkerResourceWriterReceiver = storage.mojom.ServiceWorkerResourceWriterReceiver;

storage.mojom.ServiceWorkerResourceWriterPtr = storage.mojom.ServiceWorkerResourceWriterRemote;
storage.mojom.ServiceWorkerResourceWriterRequest = storage.mojom.ServiceWorkerResourceWriterPendingReceiver;


// Interface: ServiceWorkerResourceMetadataWriter
mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec, 'storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec, 'storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceMetadataWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeMetadata(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec,
      storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec,
      [data],
      false);
  }

};

storage.mojom.ServiceWorkerResourceMetadataWriter.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceMetadataWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceMetadataWriter',
    'context');
  return remote.$;
};

storage.mojom.ServiceWorkerResourceMetadataWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: WriteMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteMetadata (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeMetadata');
          const result = this.impl.writeMetadata(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriterReceiver = storage.mojom.ServiceWorkerResourceMetadataWriterReceiver;

storage.mojom.ServiceWorkerResourceMetadataWriterPtr = storage.mojom.ServiceWorkerResourceMetadataWriterRemote;
storage.mojom.ServiceWorkerResourceMetadataWriterRequest = storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver;


// Interface: ServiceWorkerStorageControl
mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Disable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Delete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Recover_Params', [
      mojo.internal.StructField('versions', 0, 0, mojo.internal.Array(storage.mojom.ServiceWorkerLiveVersionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(blink.mojom.StorageKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_Params', [
      mojo.internal.StructField('client_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scopes', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_Params', [
      mojo.internal.StructField('scope', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_Params', [
      mojo.internal.StructField('key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_Params', [
      mojo.internal.StructField('key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(storage.mojom.ServiceWorkerRegistrationDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_Params', [
      mojo.internal.StructField('client_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, storage.mojom.ServiceWorkerFindRegistrationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scopes', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreRegistration_Params', [
      mojo.internal.StructField('registration', 0, 0, storage.mojom.ServiceWorkerRegistrationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resources', 8, 0, mojo.internal.Array(storage.mojom.ServiceWorkerResourceRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deleted_resources_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deleted_resources_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('storage_key_state', 16, 0, storage.mojom.ServiceWorkerStorageStorageKeyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_update_check_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, blink.mojom.ServiceWorkerFetchHandlerTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_Params', [
      mojo.internal.StructField('registratation_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updated_sha256_checksums', 16, 0, mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParams', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParams', [
      mojo.internal.StructField('version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('version_reference', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.ServiceWorkerLiveVersionRefSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParams', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_Params', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('reader', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.ServiceWorkerResourceReaderSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_Params', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('writer', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.ServiceWorkerResourceWriterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_Params', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('writer', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.ServiceWorkerResourceMetadataWriterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_Params', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_Params', [
      mojo.internal.StructField('resource_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserData_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUserData_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_data', 16, 0, mojo.internal.Array(storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserData_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_Params', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_data', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_Params', [
      mojo.internal.StructField('registratation_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key_prefixes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_Params', [
      mojo.internal.StructField('key_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(storage.mojom.ServiceWorkerUserDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_Params', [
      mojo.internal.StructField('key_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_Params', [
      mojo.internal.StructField('version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, storage.mojom.ServiceWorkerDatabaseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resource_ids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec, 'storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParams', [
    ],
    [[0, 8]]);

storage.mojom.ServiceWorkerStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec,
      [],
      false);
  }

  delete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec,
      [],
      false);
  }

  recover(versions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec,
      [versions],
      false);
  }

  getRegisteredStorageKeys() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  findRegistrationForClientUrl(client_url, key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec,
      [client_url, key],
      false);
  }

  findRegistrationForScope(scope, key) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec,
      [scope, key],
      false);
  }

  findRegistrationForId(registration_id, key) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec,
      [registration_id, key],
      false);
  }

  getRegistrationsForStorageKey(key) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec,
      [key],
      false);
  }

  getUsageForStorageKey(key) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec,
      [key],
      false);
  }

  getAllRegistrationsDeprecated() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec,
      [],
      false);
  }

  getFakeRegistrationForClientUrl(client_url, key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec,
      [client_url, key],
      false);
  }

  storeRegistration(registration, resources) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec,
      [registration, resources],
      false);
  }

  deleteRegistration(registration_id, key) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec,
      [registration_id, key],
      false);
  }

  updateToActiveState(registration_id, key) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec,
      [registration_id, key],
      false);
  }

  updateLastUpdateCheckTime(registration_id, key, last_update_check_time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec,
      [registration_id, key, last_update_check_time],
      false);
  }

  updateNavigationPreloadEnabled(registration_id, key, enable) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec,
      [registration_id, key, enable],
      false);
  }

  updateNavigationPreloadHeader(registration_id, key, value) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec,
      [registration_id, key, value],
      false);
  }

  updateFetchHandlerType(registration_id, key, type) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec,
      [registration_id, key, type],
      false);
  }

  updateResourceSha256Checksums(registratation_id, key, updated_sha256_checksums) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec,
      [registratation_id, key, updated_sha256_checksums],
      false);
  }

  getNewRegistrationId() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec,
      [],
      false);
  }

  getNewVersionId() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec,
      [],
      false);
  }

  getNewResourceId() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec,
      [],
      false);
  }

  createResourceReader(resource_id, reader) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec,
      null,
      [resource_id, reader],
      false);
  }

  createResourceWriter(resource_id, writer) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec,
      null,
      [resource_id, writer],
      false);
  }

  createResourceMetadataWriter(resource_id, writer) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec,
      null,
      [resource_id, writer],
      false);
  }

  storeUncommittedResourceId(resource_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec,
      [resource_id],
      false);
  }

  doomUncommittedResources(resource_ids) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec,
      [resource_ids],
      false);
  }

  getUserData(registration_id, keys) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec,
      [registration_id, keys],
      false);
  }

  storeUserData(registration_id, key, user_data) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec,
      [registration_id, key, user_data],
      false);
  }

  clearUserData(registration_id, keys) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec,
      [registration_id, keys],
      false);
  }

  getUserDataByKeyPrefix(registration_id, key_prefix) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec,
      [registration_id, key_prefix],
      false);
  }

  getUserKeysAndDataByKeyPrefix(registration_id, key_prefix) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec,
      [registration_id, key_prefix],
      false);
  }

  clearUserDataByKeyPrefixes(registratation_id, key_prefixes) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec,
      [registratation_id, key_prefixes],
      false);
  }

  getUserDataForAllRegistrations(key) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec,
      [key],
      false);
  }

  getUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [key_prefix],
      false);
  }

  clearUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [key_prefix],
      false);
  }

  performStorageCleanup() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec,
      [],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec,
      [policy_updates],
      false);
  }

  getPurgingResourceIdsForTest() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  getPurgingResourceIdsForLiveVersionForTest(version_id) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec,
      [version_id],
      false);
  }

  getPurgeableResourceIdsForTest() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  getUncommittedResourceIdsForTest() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec,
      [],
      false);
  }

  setPurgingCompleteCallbackForTest() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.ServiceWorkerStorageControl.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerStorageControl',
    'context');
  return remote.$;
};

storage.mojom.ServiceWorkerStorageControlReceiver = class {
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
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
    this.ordinalMap.set(32, 32); // Default ordinal 32 -> Index 32
    this.ordinalMap.set(33, 33); // Default ordinal 33 -> Index 33
    this.ordinalMap.set(34, 34); // Default ordinal 34 -> Index 34
    this.ordinalMap.set(35, 35); // Default ordinal 35 -> Index 35
    this.ordinalMap.set(36, 36); // Default ordinal 36 -> Index 36
    this.ordinalMap.set(37, 37); // Default ordinal 37 -> Index 37
    this.ordinalMap.set(38, 38); // Default ordinal 38 -> Index 38
    this.ordinalMap.set(39, 39); // Default ordinal 39 -> Index 39
    this.ordinalMap.set(40, 40); // Default ordinal 40 -> Index 40
    this.ordinalMap.set(41, 41); // Default ordinal 41 -> Index 41
    this.ordinalMap.set(42, 42); // Default ordinal 42 -> Index 42
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: Disable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Recover
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Recover (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetRegisteredStorageKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegisteredStorageKeys (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: FindRegistrationForClientUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForClientUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: FindRegistrationForScope
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForScope (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: FindRegistrationForId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindRegistrationForId (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: GetRegistrationsForStorageKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrationsForStorageKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: GetUsageForStorageKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsageForStorageKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: GetAllRegistrationsDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllRegistrationsDeprecated (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: GetFakeRegistrationForClientUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFakeRegistrationForClientUrl (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: StoreRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreRegistration (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: DeleteRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRegistration (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: UpdateToActiveState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateToActiveState (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: UpdateLastUpdateCheckTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateLastUpdateCheckTime (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: UpdateNavigationPreloadEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNavigationPreloadEnabled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: UpdateNavigationPreloadHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNavigationPreloadHeader (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: UpdateFetchHandlerType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFetchHandlerType (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 18: UpdateResourceSha256Checksums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateResourceSha256Checksums (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 19: GetNewRegistrationId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewRegistrationId (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 20: GetNewVersionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewVersionId (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 21: GetNewResourceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewResourceId (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 22: CreateResourceReader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceReader (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 23: CreateResourceWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceWriter (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 24: CreateResourceMetadataWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateResourceMetadataWriter (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 25: StoreUncommittedResourceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreUncommittedResourceId (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 26: DoomUncommittedResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoomUncommittedResources (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 27: GetUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserData (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 28: StoreUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreUserData (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 29: ClearUserData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserData (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 30: GetUserDataByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataByKeyPrefix (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 31: GetUserKeysAndDataByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserKeysAndDataByKeyPrefix (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 32: ClearUserDataByKeyPrefixes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserDataByKeyPrefixes (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 33: GetUserDataForAllRegistrations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataForAllRegistrations (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 34: GetUserDataForAllRegistrationsByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserDataForAllRegistrationsByKeyPrefix (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 35: ClearUserDataForAllRegistrationsByKeyPrefix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserDataForAllRegistrationsByKeyPrefix (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 36: PerformStorageCleanup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformStorageCleanup (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 37: ApplyPolicyUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyPolicyUpdates (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 38: GetPurgingResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgingResourceIdsForTest (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 39: GetPurgingResourceIdsForLiveVersionForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgingResourceIdsForLiveVersionForTest (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 40: GetPurgeableResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPurgeableResourceIdsForTest (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 41: GetUncommittedResourceIdsForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUncommittedResourceIdsForTest (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 42: SetPurgingCompleteCallbackForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPurgingCompleteCallbackForTest (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disable');
          const result = this.impl.disable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_Disable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recover');
          const result = this.impl.recover(params.versions);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_Recover_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRegisteredStorageKeys');
          const result = this.impl.getRegisteredStorageKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForClientUrl');
          const result = this.impl.findRegistrationForClientUrl(params.client_url, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForScope');
          const result = this.impl.findRegistrationForScope(params.scope, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.findRegistrationForId');
          const result = this.impl.findRegistrationForId(params.registration_id, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRegistrationsForStorageKey');
          const result = this.impl.getRegistrationsForStorageKey(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUsageForStorageKey');
          const result = this.impl.getUsageForStorageKey(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllRegistrationsDeprecated');
          const result = this.impl.getAllRegistrationsDeprecated();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFakeRegistrationForClientUrl');
          const result = this.impl.getFakeRegistrationForClientUrl(params.client_url, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.storeRegistration');
          const result = this.impl.storeRegistration(params.registration, params.resources);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteRegistration');
          const result = this.impl.deleteRegistration(params.registration_id, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateToActiveState');
          const result = this.impl.updateToActiveState(params.registration_id, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateLastUpdateCheckTime');
          const result = this.impl.updateLastUpdateCheckTime(params.registration_id, params.key, params.last_update_check_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateNavigationPreloadEnabled');
          const result = this.impl.updateNavigationPreloadEnabled(params.registration_id, params.key, params.enable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateNavigationPreloadHeader');
          const result = this.impl.updateNavigationPreloadHeader(params.registration_id, params.key, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateFetchHandlerType');
          const result = this.impl.updateFetchHandlerType(params.registration_id, params.key, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateResourceSha256Checksums');
          const result = this.impl.updateResourceSha256Checksums(params.registratation_id, params.key, params.updated_sha256_checksums);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNewRegistrationId');
          const result = this.impl.getNewRegistrationId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNewVersionId');
          const result = this.impl.getNewVersionId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNewResourceId');
          const result = this.impl.getNewResourceId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createResourceReader');
          const result = this.impl.createResourceReader(params.resource_id, params.reader);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createResourceWriter');
          const result = this.impl.createResourceWriter(params.resource_id, params.writer);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createResourceMetadataWriter');
          const result = this.impl.createResourceMetadataWriter(params.resource_id, params.writer);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.storeUncommittedResourceId');
          const result = this.impl.storeUncommittedResourceId(params.resource_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doomUncommittedResources');
          const result = this.impl.doomUncommittedResources(params.resource_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserData');
          const result = this.impl.getUserData(params.registration_id, params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.storeUserData');
          const result = this.impl.storeUserData(params.registration_id, params.key, params.user_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearUserData');
          const result = this.impl.clearUserData(params.registration_id, params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserDataByKeyPrefix');
          const result = this.impl.getUserDataByKeyPrefix(params.registration_id, params.key_prefix);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserKeysAndDataByKeyPrefix');
          const result = this.impl.getUserKeysAndDataByKeyPrefix(params.registration_id, params.key_prefix);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearUserDataByKeyPrefixes');
          const result = this.impl.clearUserDataByKeyPrefixes(params.registratation_id, params.key_prefixes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserDataForAllRegistrations');
          const result = this.impl.getUserDataForAllRegistrations(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserDataForAllRegistrationsByKeyPrefix');
          const result = this.impl.getUserDataForAllRegistrationsByKeyPrefix(params.key_prefix);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearUserDataForAllRegistrationsByKeyPrefix');
          const result = this.impl.clearUserDataForAllRegistrationsByKeyPrefix(params.key_prefix);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performStorageCleanup');
          const result = this.impl.performStorageCleanup();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyPolicyUpdates');
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPurgingResourceIdsForTest');
          const result = this.impl.getPurgingResourceIdsForTest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPurgingResourceIdsForLiveVersionForTest');
          const result = this.impl.getPurgingResourceIdsForLiveVersionForTest(params.version_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPurgeableResourceIdsForTest');
          const result = this.impl.getPurgeableResourceIdsForTest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUncommittedResourceIdsForTest');
          const result = this.impl.getUncommittedResourceIdsForTest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPurgingCompleteCallbackForTest');
          const result = this.impl.setPurgingCompleteCallbackForTest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.ServiceWorkerStorageControlReceiver = storage.mojom.ServiceWorkerStorageControlReceiver;

storage.mojom.ServiceWorkerStorageControlPtr = storage.mojom.ServiceWorkerStorageControlRemote;
storage.mojom.ServiceWorkerStorageControlRequest = storage.mojom.ServiceWorkerStorageControlPendingReceiver;

