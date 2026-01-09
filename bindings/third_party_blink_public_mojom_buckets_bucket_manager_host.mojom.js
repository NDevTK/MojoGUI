// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BucketError
blink.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};

// Interface: BucketHost
blink.mojom.BucketHost = {};

blink.mojom.BucketHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  persist() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BucketHost_Persist_ParamsSpec,
      blink.mojom.BucketHost_Persist_ResponseParamsSpec,
      blink.mojom.BucketHost_Persist_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  persisted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BucketHost_Persisted_ParamsSpec,
      blink.mojom.BucketHost_Persisted_ResponseParamsSpec,
      blink.mojom.BucketHost_Persisted_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  estimate() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BucketHost_Estimate_ParamsSpec,
      blink.mojom.BucketHost_Estimate_ResponseParamsSpec,
      blink.mojom.BucketHost_Estimate_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  durability() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BucketHost_Durability_ParamsSpec,
      blink.mojom.BucketHost_Durability_ResponseParamsSpec,
      blink.mojom.BucketHost_Durability_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setExpires(expires) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.BucketHost_SetExpires_ParamsSpec,
      blink.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      blink.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      [expires],
      undefined,
      undefined
    );
  }

  expires() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.BucketHost_Expires_ParamsSpec,
      blink.mojom.BucketHost_Expires_ResponseParamsSpec,
      blink.mojom.BucketHost_Expires_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getIdbFactory(idb_factory) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.BucketHost_GetIdbFactory_ParamsSpec,
      null,
      null,
      [idb_factory],
      undefined,
      undefined
    );
  }

  getLockManager(lock_manager) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.BucketHost_GetLockManager_ParamsSpec,
      null,
      null,
      [lock_manager],
      undefined,
      undefined
    );
  }

  getCaches(cache_storage) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.BucketHost_GetCaches_ParamsSpec,
      null,
      null,
      [cache_storage],
      undefined,
      undefined
    );
  }

  getDirectory() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.BucketHost_GetDirectory_ParamsSpec,
      blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDirectoryForDevtools(directory_path_components) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec,
      blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      [directory_path_components],
      undefined,
      undefined
    );
  }

};

blink.mojom.BucketHost.getRemote = function() {
  let remote = new blink.mojom.BucketHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketHost',
    'context');
  return remote.$;
};

// ParamsSpec for Persist
blink.mojom.BucketHost_Persist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persist_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_Persist_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persist_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'persisted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'success', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Persisted
blink.mojom.BucketHost_Persisted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persisted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_Persisted_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persisted_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'persisted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'success', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Estimate
blink.mojom.BucketHost_Estimate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Estimate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_Estimate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Estimate_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'current_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'current_quota', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Durability
blink.mojom.BucketHost_Durability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Durability_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_Durability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Durability_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'durability', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetExpires
blink.mojom.BucketHost_SetExpires_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.SetExpires_Params',
      packedSize: 16,
      fields: [
        { name: 'expires', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.BucketHost_SetExpires_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.SetExpires_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Expires
blink.mojom.BucketHost_Expires_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Expires_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_Expires_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Expires_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'expires', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetIdbFactory
blink.mojom.BucketHost_GetIdbFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetIdbFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'idb_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLockManager
blink.mojom.BucketHost_GetLockManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetLockManager_Params',
      packedSize: 16,
      fields: [
        { name: 'lock_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCaches
blink.mojom.BucketHost_GetCaches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetCaches_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDirectory
blink.mojom.BucketHost_GetDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetDirectoryForDevtools
blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectoryForDevtools_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_path_components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectoryForDevtools_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.BucketHostPtr = blink.mojom.BucketHostRemote;
blink.mojom.BucketHostRequest = blink.mojom.BucketHostPendingReceiver;


// Interface: BucketManagerHost
blink.mojom.BucketManagerHost = {};

blink.mojom.BucketManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openBucket(name, policy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      [name, policy],
      undefined,
      undefined
    );
  }

  getBucketForDevtools(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec,
      null,
      null,
      [name, receiver],
      undefined,
      undefined
    );
  }

  keys() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BucketManagerHost_Keys_ParamsSpec,
      blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  deleteBucket(name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      [name],
      undefined,
      undefined
    );
  }

};

blink.mojom.BucketManagerHost.getRemote = function() {
  let remote = new blink.mojom.BucketManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for OpenBucket
blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.OpenBucket_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.OpenBucket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetBucketForDevtools
blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.GetBucketForDevtools_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Keys
blink.mojom.BucketManagerHost_Keys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.Keys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.Keys_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'buckets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteBucket
blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.DeleteBucket_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.DeleteBucket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.BucketManagerHostPtr = blink.mojom.BucketManagerHostRemote;
blink.mojom.BucketManagerHostRequest = blink.mojom.BucketManagerHostPendingReceiver;

