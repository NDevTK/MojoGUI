// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/cache_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: CacheStorageOwner
storage.mojom.CacheStorageOwner = {
  kCacheAPI: 0,
  kBackgroundFetch: 1,
};
storage.mojom.CacheStorageOwnerSpec = { $: mojo.internal.Enum() };

// Interface: CacheStorageObserver
storage.mojom.CacheStorageObserver = {};

storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver_OnCacheListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver_OnCacheContentChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'cache_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.CacheStorageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.CacheStorageObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.CacheStorageObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.CacheStorageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.CacheStorageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCacheListChanged(bucket_locator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec,
      null,
      [bucket_locator]);
  }

  onCacheContentChanged(bucket_locator, cache_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec,
      null,
      [bucket_locator, cache_name]);
  }

};

storage.mojom.CacheStorageObserver.getRemote = function() {
  let remote = new storage.mojom.CacheStorageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCacheListChanged
storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver.OnCacheListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCacheContentChanged
storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver.OnCacheContentChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'cache_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
storage.mojom.CacheStorageObserverPtr = storage.mojom.CacheStorageObserverRemote;
storage.mojom.CacheStorageObserverRequest = storage.mojom.CacheStorageObserverPendingReceiver;


// Interface: CacheStorageControl
storage.mojom.CacheStorageControl = {};

storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl_AddReceiver_Params',
      packedSize: 64,
      fields: [
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false, minVersion: 0 },
        { name: 'coep_reporter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), nullable: true, minVersion: 0 },
        { name: 'document_isolation_policy', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false, minVersion: 0 },
        { name: 'dip_reporter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), nullable: true, minVersion: 0 },
        { name: 'bucket_locator', packedOffset: 32, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'owner', packedOffset: 48, packedBitOffset: 0, type: storage.mojom.CacheStorageOwnerSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

storage.mojom.CacheStorageControl_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl_AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.CacheStorageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl_ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.CacheStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.CacheStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.CacheStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.CacheStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.CacheStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec,
      null,
      [cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver]);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.CacheStorageControl_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates]);
  }

};

storage.mojom.CacheStorageControl.getRemote = function() {
  let remote = new storage.mojom.CacheStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageControl',
    'context');
  return remote.$;
};

// ParamsSpec for AddReceiver
storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.AddReceiver_Params',
      packedSize: 64,
      fields: [
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false, minVersion: 0 },
        { name: 'coep_reporter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), nullable: true, minVersion: 0 },
        { name: 'document_isolation_policy', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false, minVersion: 0 },
        { name: 'dip_reporter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), nullable: true, minVersion: 0 },
        { name: 'bucket_locator', packedOffset: 32, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'owner', packedOffset: 48, packedBitOffset: 0, type: storage.mojom.CacheStorageOwnerSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for AddObserver
storage.mojom.CacheStorageControl_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.CacheStorageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.CacheStorageControlPtr = storage.mojom.CacheStorageControlRemote;
storage.mojom.CacheStorageControlRequest = storage.mojom.CacheStorageControlPendingReceiver;

