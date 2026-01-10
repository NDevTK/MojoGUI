// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/quota_client.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};
var components = components || {};
var services = services || {};

storage.mojom.QuotaClient = {};
storage.mojom.QuotaClient.$interfaceName = 'storage.mojom.QuotaClient';
storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec = { $: {} };

// Interface: QuotaClient
mojo.internal.Struct(
    storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec, 'storage.mojom.QuotaClient_GetBucketUsage_Params', [
      mojo.internal.StructField('bucket', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec, 'storage.mojom.QuotaClient_GetBucketUsage_ResponseParams', [
      mojo.internal.StructField('usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec, 'storage.mojom.QuotaClient_GetDefaultStorageKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec, 'storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParams', [
      mojo.internal.StructField('storage_keys', 0, 0, mojo.internal.Array(blink.mojom.StorageKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec, 'storage.mojom.QuotaClient_DeleteBucketData_Params', [
      mojo.internal.StructField('bucket', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec, 'storage.mojom.QuotaClient_DeleteBucketData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.QuotaStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec, 'storage.mojom.QuotaClient_PerformStorageCleanup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec, 'storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParams', [
    ],
    [[0, 8]]);

storage.mojom.QuotaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaClientRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaClientPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.QuotaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBucketUsage(bucket) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec,
      storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec,
      [bucket],
      false);
  }

  getDefaultStorageKeys() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec,
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  deleteBucketData(bucket) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec,
      storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec,
      [bucket],
      false);
  }

  performStorageCleanup() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec,
      storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.QuotaClient.getRemote = function() {
  let remote = new storage.mojom.QuotaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaClient',
    'context');
  return remote.$;
};

storage.mojom.QuotaClientPtr = storage.mojom.QuotaClientRemote;
storage.mojom.QuotaClientRequest = storage.mojom.QuotaClientPendingReceiver;

