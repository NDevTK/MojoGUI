// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/indexed_db/indexed_db_internals.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getAllBucketsAcrossAllStorageKeys() {
    return this.$.getAllBucketsAcrossAllStorageKeys();
  }
  downloadBucketData(bucketId) {
    return this.$.downloadBucketData(bucketId);
  }
  forceClose(bucketId) {
    return this.$.forceClose(bucketId);
  }
  startMetadataRecording(bucket_id) {
    return this.$.startMetadataRecording(bucket_id);
  }
  stopMetadataRecording(bucket_id) {
    return this.$.stopMetadataRecording(bucket_id);
  }
  inspectClient(client_info) {
    return this.$.inspectClient(client_info);
  }
};

storage.mojom.IdbInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IdbInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getAllBucketsAcrossAllStorageKeys() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec,
      storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  downloadBucketData(bucketId) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec,
      storage.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec,
      [bucketId],
      false);
  }

  forceClose(bucketId) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec,
      storage.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec,
      [bucketId],
      false);
  }

  startMetadataRecording(bucket_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec,
      storage.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  stopMetadataRecording(bucket_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec,
      storage.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id],
      false);
  }

  inspectClient(client_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('IdbInternalsHandler', [
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
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_ForceClose_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IdbInternalsHandler_InspectClient_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

storage.mojom.IdbInternalsHandlerReceiver = storage.mojom.IdbInternalsHandlerReceiver;

storage.mojom.IdbInternalsHandlerPtr = storage.mojom.IdbInternalsHandlerRemote;
storage.mojom.IdbInternalsHandlerRequest = storage.mojom.IdbInternalsHandlerPendingReceiver;

