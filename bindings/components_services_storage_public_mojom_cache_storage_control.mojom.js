// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/cache_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: CacheStorageOwner
storage.mojom.CacheStorageOwner = {
  kCacheAPI: 0,
  kBackgroundFetch: 1,
};

// Interface: CacheStorageObserver
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
      storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec.$,
      null,
      [bucket_locator]);
  }

  onCacheContentChanged(bucket_locator, cache_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec.$,
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
}};

// ParamsSpec for OnCacheListChanged
storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver.OnCacheListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnCacheContentChanged
storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageObserver.OnCacheContentChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cache_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
storage.mojom.CacheStorageObserverPtr = storage.mojom.CacheStorageObserverRemote;
storage.mojom.CacheStorageObserverRequest = storage.mojom.CacheStorageObserverPendingReceiver;


// Interface: CacheStorageControl
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
      storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec.$,
      null,
      [cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver]);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.CacheStorageControl_AddObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec.$,
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
}};

// ParamsSpec for AddReceiver
storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.AddReceiver_Params',
      packedSize: 64,
      fields: [
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coep_reporter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'document_isolation_policy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dip_reporter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bucket_locator', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'owner', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddObserver
storage.mojom.CacheStorageControl_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.CacheStorageControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
storage.mojom.CacheStorageControlPtr = storage.mojom.CacheStorageControlRemote;
storage.mojom.CacheStorageControlRequest = storage.mojom.CacheStorageControlPendingReceiver;

