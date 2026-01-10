// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/indexed_db/indexed_db_internals.mojom
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'storage.mojom.IdbInternalsHandler',
    'context');
  return remote.$;
};

storage.mojom.IdbInternalsHandlerPtr = storage.mojom.IdbInternalsHandlerRemote;
storage.mojom.IdbInternalsHandlerRequest = storage.mojom.IdbInternalsHandlerPendingReceiver;

