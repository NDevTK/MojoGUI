// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_manager_observer.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: QuotaManagerObserver
storage.mojom.mojom.QuotaManagerObserver = {};

storage.mojom.mojom.QuotaManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.QuotaManagerObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.QuotaManagerObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.QuotaManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.QuotaManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreateOrUpdateBucket(bucket_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec,
      null,
      [bucket_info]);
  }

  onDeleteBucket(bucket_locator) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec,
      null,
      [bucket_locator]);
  }

};

storage.mojom.mojom.QuotaManagerObserver.getRemote = function() {
  let remote = new storage.mojom.mojom.QuotaManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaManagerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCreateOrUpdateBucket
storage.mojom.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaManagerObserver.OnCreateOrUpdateBucket_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_info', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeleteBucket
storage.mojom.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaManagerObserver.OnDeleteBucket_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.QuotaManagerObserverPtr = storage.mojom.mojom.QuotaManagerObserverRemote;
storage.mojom.mojom.QuotaManagerObserverRequest = storage.mojom.mojom.QuotaManagerObserverPendingReceiver;

