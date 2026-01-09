// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/quota_client.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: QuotaClient
storage.mojom.QuotaClient = {};

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
      storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec.$,
      storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec.$,
      [bucket]);
  }

  getDefaultStorageKeys() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec.$,
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec.$,
      []);
  }

  deleteBucketData(bucket) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec.$,
      storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec.$,
      [bucket]);
  }

  performStorageCleanup() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for GetBucketUsage
storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.GetBucketUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.GetBucketUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultStorageKeys
storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.GetDefaultStorageKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.GetDefaultStorageKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'storage_keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteBucketData
storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.DeleteBucketData_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.DeleteBucketData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformStorageCleanup
storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaClient.PerformStorageCleanup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.QuotaClientPtr = storage.mojom.QuotaClientRemote;
storage.mojom.QuotaClientRequest = storage.mojom.QuotaClientPendingReceiver;

