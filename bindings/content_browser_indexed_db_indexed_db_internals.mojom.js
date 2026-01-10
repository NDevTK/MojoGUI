// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/indexed_db/indexed_db_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};

storage.mojom.IdbPartitionMetadataSpec = { $: {} };
storage.mojom.IdbInternalsHandler = {};
storage.mojom.IdbInternalsHandler.$interfaceName = 'storage.mojom.IdbInternalsHandler';
storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec = { $: {} };
storage.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec = { $: {} };

// Struct: IdbPartitionMetadata
mojo.internal.Struct(
    storage.mojom.IdbPartitionMetadataSpec, 'storage.mojom.IdbPartitionMetadata', [
      mojo.internal.StructField('partition_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_list', 8, 0, mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: IdbInternalsHandler
mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec, 'storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('partitions', 8, 0, mojo.internal.Array(storage.mojom.IdbPartitionMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec, 'storage.mojom.IdbInternalsHandler_DownloadBucketData_Params', [
      mojo.internal.StructField('bucketId', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec, 'storage.mojom.IdbInternalsHandler_ForceClose_Params', [
      mojo.internal.StructField('bucketId', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_ForceClose_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec, 'storage.mojom.IdbInternalsHandler_StartMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec, 'storage.mojom.IdbInternalsHandler_StopMetadataRecording_Params', [
      mojo.internal.StructField('bucket_id', 0, 0, storage.mojom.BucketIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec, 'storage.mojom.IdbInternalsHandler_InspectClient_Params', [
      mojo.internal.StructField('client_info', 0, 0, storage.mojom.BucketClientInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec, 'storage.mojom.IdbInternalsHandler_InspectClient_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.IdbInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IdbInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IdbInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IdbInternalsHandlerPendingReceiver,
      handle);
    this.$ = new storage.mojom.IdbInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IdbInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllBucketsAcrossAllStorageKeys() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec,
      storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  downloadBucketData(bucketId) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec,
      storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec,
      [bucketId],
      false);
  }

  forceClose(bucketId) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec,
      storage.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec,
      [bucketId],
      false);
  }

  startMetadataRecording(bucket_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec,
      storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  stopMetadataRecording(bucket_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec,
      storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  inspectClient(client_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec,
      storage.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec,
      [client_info],
      false);
  }

};

storage.mojom.IdbInternalsHandler.getRemote = function() {
  let remote = new storage.mojom.IdbInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IdbInternalsHandler',
    'context');
  return remote.$;
};

storage.mojom.IdbInternalsHandlerReceiver = class {
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
        
        // Try Method 0: GetAllBucketsAcrossAllStorageKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllBucketsAcrossAllStorageKeys (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DownloadBucketData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadBucketData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ForceClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceClose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: StartMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartMetadataRecording (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: StopMetadataRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopMetadataRecording (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: InspectClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InspectClient (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
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
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllBucketsAcrossAllStorageKeys');
          const result = this.impl.getAllBucketsAcrossAllStorageKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.downloadBucketData');
          const result = this.impl.downloadBucketData(params.bucketId);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceClose');
          const result = this.impl.forceClose(params.bucketId);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startMetadataRecording');
          const result = this.impl.startMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopMetadataRecording');
          const result = this.impl.stopMetadataRecording(params.bucket_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.inspectClient');
          const result = this.impl.inspectClient(params.client_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec);
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

storage.mojom.IdbInternalsHandlerReceiver = storage.mojom.IdbInternalsHandlerReceiver;

storage.mojom.IdbInternalsHandlerPtr = storage.mojom.IdbInternalsHandlerRemote;
storage.mojom.IdbInternalsHandlerRequest = storage.mojom.IdbInternalsHandlerPendingReceiver;

