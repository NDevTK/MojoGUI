// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Enum: BucketError
blink.mojom.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};
blink.mojom.mojom.BucketErrorSpec = { $: mojo.internal.Enum() };

// Struct: BucketPolicies
blink.mojom.mojom.BucketPoliciesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketPolicies',
      packedSize: 32,
      fields: [
        { name: 'persisted', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_persisted', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'durability', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.BucketDurabilitySpec, nullable: false, minVersion: 0 },
        { name: 'has_durability', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'quota', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'has_quota', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'expires', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: BucketHost
blink.mojom.mojom.BucketHost = {};

blink.mojom.mojom.BucketHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BucketHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BucketHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BucketHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BucketHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  persist() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BucketHost_Persist_ParamsSpec,
      blink.mojom.mojom.BucketHost_Persist_ResponseParamsSpec,
      []);
  }

  persisted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BucketHost_Persisted_ParamsSpec,
      blink.mojom.mojom.BucketHost_Persisted_ResponseParamsSpec,
      []);
  }

  estimate() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.BucketHost_Estimate_ParamsSpec,
      blink.mojom.mojom.BucketHost_Estimate_ResponseParamsSpec,
      []);
  }

  durability() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.BucketHost_Durability_ParamsSpec,
      blink.mojom.mojom.BucketHost_Durability_ResponseParamsSpec,
      []);
  }

  setExpires(expires) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.BucketHost_SetExpires_ParamsSpec,
      blink.mojom.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      [expires]);
  }

  expires() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.BucketHost_Expires_ParamsSpec,
      blink.mojom.mojom.BucketHost_Expires_ResponseParamsSpec,
      []);
  }

  getIdbFactory(idb_factory) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.BucketHost_GetIdbFactory_ParamsSpec,
      null,
      [idb_factory]);
  }

  getLockManager(lock_manager) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.BucketHost_GetLockManager_ParamsSpec,
      null,
      [lock_manager]);
  }

  getCaches(cache_storage) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.BucketHost_GetCaches_ParamsSpec,
      null,
      [cache_storage]);
  }

  getDirectory() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.BucketHost_GetDirectory_ParamsSpec,
      blink.mojom.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      []);
  }

  getDirectoryForDevtools(directory_path_components) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec,
      blink.mojom.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      [directory_path_components]);
  }

};

blink.mojom.mojom.BucketHost.getRemote = function() {
  let remote = new blink.mojom.mojom.BucketHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketHost',
    'context');
  return remote.$;
};

// ParamsSpec for Persist
blink.mojom.mojom.BucketHost_Persist_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_Persist_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persist_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'persisted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Persisted
blink.mojom.mojom.BucketHost_Persisted_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_Persisted_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Persisted_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'persisted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Estimate
blink.mojom.mojom.BucketHost_Estimate_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_Estimate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Estimate_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'current_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'current_quota', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Durability
blink.mojom.mojom.BucketHost_Durability_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_Durability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Durability_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'durability', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BucketDurabilitySpec, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetExpires
blink.mojom.mojom.BucketHost_SetExpires_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.SetExpires_Params',
      packedSize: 16,
      fields: [
        { name: 'expires', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.BucketHost_SetExpires_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.SetExpires_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Expires
blink.mojom.mojom.BucketHost_Expires_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_Expires_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.Expires_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'expires', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetIdbFactory
blink.mojom.mojom.BucketHost_GetIdbFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetIdbFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'idb_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLockManager
blink.mojom.mojom.BucketHost_GetLockManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetLockManager_Params',
      packedSize: 16,
      fields: [
        { name: 'lock_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCaches
blink.mojom.mojom.BucketHost_GetCaches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetCaches_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_storage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDirectory
blink.mojom.mojom.BucketHost_GetDirectory_ParamsSpec = {
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

blink.mojom.mojom.BucketHost_GetDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false, minVersion: 0 },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetDirectoryForDevtools
blink.mojom.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectoryForDevtools_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_path_components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketHost.GetDirectoryForDevtools_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false, minVersion: 0 },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BucketHostPtr = blink.mojom.mojom.BucketHostRemote;
blink.mojom.mojom.BucketHostRequest = blink.mojom.mojom.BucketHostPendingReceiver;


// Interface: BucketManagerHost
blink.mojom.mojom.BucketManagerHost = {};

blink.mojom.mojom.BucketManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BucketManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BucketManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BucketManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BucketManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openBucket(name, policy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BucketManagerHost_OpenBucket_ParamsSpec,
      blink.mojom.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      [name, policy]);
  }

  getBucketForDevtools(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec,
      null,
      [name, receiver]);
  }

  keys() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.BucketManagerHost_Keys_ParamsSpec,
      blink.mojom.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      []);
  }

  deleteBucket(name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.BucketManagerHost_DeleteBucket_ParamsSpec,
      blink.mojom.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      [name]);
  }

};

blink.mojom.mojom.BucketManagerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.BucketManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for OpenBucket
blink.mojom.mojom.BucketManagerHost_OpenBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.OpenBucket_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'policy', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BucketPoliciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.OpenBucket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.BucketErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetBucketForDevtools
blink.mojom.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.GetBucketForDevtools_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Keys
blink.mojom.mojom.BucketManagerHost_Keys_ParamsSpec = {
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

blink.mojom.mojom.BucketManagerHost_Keys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.Keys_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'buckets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteBucket
blink.mojom.mojom.BucketManagerHost_DeleteBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.DeleteBucket_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BucketManagerHost.DeleteBucket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BucketManagerHostPtr = blink.mojom.mojom.BucketManagerHostRemote;
blink.mojom.mojom.BucketManagerHostRequest = blink.mojom.mojom.BucketManagerHostPendingReceiver;

