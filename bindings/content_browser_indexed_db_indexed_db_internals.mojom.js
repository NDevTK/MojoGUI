// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/indexed_db/indexed_db_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: IdbPartitionMetadata
storage.mojom.mojom.IdbPartitionMetadataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbPartitionMetadata',
      packedSize: 24,
      fields: [
        { name: 'partition_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'origin_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbOriginMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: IdbInternalsHandler
storage.mojom.mojom.IdbInternalsHandler = {};

storage.mojom.mojom.IdbInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IdbInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IdbInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IdbInternalsHandlerPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IdbInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IdbInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllBucketsAcrossAllStorageKeys() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec,
      []);
  }

  downloadBucketData(bucketId) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec,
      [bucketId]);
  }

  forceClose(bucketId) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_ForceClose_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec,
      [bucketId]);
  }

  startMetadataRecording(bucket_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec,
      [bucket_id]);
  }

  stopMetadataRecording(bucket_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec,
      [bucket_id]);
  }

  inspectClient(client_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.mojom.IdbInternalsHandler_InspectClient_ParamsSpec,
      storage.mojom.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec,
      [client_info]);
  }

};

storage.mojom.mojom.IdbInternalsHandler.getRemote = function() {
  let remote = new storage.mojom.mojom.IdbInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IdbInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllBucketsAcrossAllStorageKeys
storage.mojom.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.GetAllBucketsAcrossAllStorageKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_GetAllBucketsAcrossAllStorageKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.GetAllBucketsAcrossAllStorageKeys_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'partitions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbPartitionMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DownloadBucketData
storage.mojom.mojom.IdbInternalsHandler_DownloadBucketData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.DownloadBucketData_Params',
      packedSize: 16,
      fields: [
        { name: 'bucketId', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_DownloadBucketData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.DownloadBucketData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceClose
storage.mojom.mojom.IdbInternalsHandler_ForceClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.ForceClose_Params',
      packedSize: 16,
      fields: [
        { name: 'bucketId', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_ForceClose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.ForceClose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartMetadataRecording
storage.mojom.mojom.IdbInternalsHandler_StartMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.StartMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_StartMetadataRecording_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.StartMetadataRecording_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopMetadataRecording
storage.mojom.mojom.IdbInternalsHandler_StopMetadataRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.StopMetadataRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_StopMetadataRecording_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.StopMetadataRecording_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.IdbBucketMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InspectClient
storage.mojom.mojom.IdbInternalsHandler_InspectClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.InspectClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client_info', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketClientInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.IdbInternalsHandler_InspectClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IdbInternalsHandler.InspectClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.IdbInternalsHandlerPtr = storage.mojom.mojom.IdbInternalsHandlerRemote;
storage.mojom.mojom.IdbInternalsHandlerRequest = storage.mojom.mojom.IdbInternalsHandlerPendingReceiver;

