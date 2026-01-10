// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_manager_observer.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};

storage.mojom.QuotaManagerObserver = {};
storage.mojom.QuotaManagerObserver.$interfaceName = 'storage.mojom.QuotaManagerObserver';
storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec = { $: {} };
storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec = { $: {} };

// Interface: QuotaManagerObserver
mojo.internal.Struct(
    storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec, 'storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_Params', [
      mojo.internal.StructField('bucket_info', 0, 0, storage.mojom.BucketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec, 'storage.mojom.QuotaManagerObserver_OnDeleteBucket_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.QuotaManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaManagerObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaManagerObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.QuotaManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreateOrUpdateBucket(bucket_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec,
      null,
      [bucket_info],
      false);
  }

  onDeleteBucket(bucket_locator) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec,
      null,
      [bucket_locator],
      false);
  }

};

storage.mojom.QuotaManagerObserver.getRemote = function() {
  let remote = new storage.mojom.QuotaManagerObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'storage.mojom.QuotaManagerObserver',
    'context');
  return remote.$;
};

storage.mojom.QuotaManagerObserverPtr = storage.mojom.QuotaManagerObserverRemote;
storage.mojom.QuotaManagerObserverRequest = storage.mojom.QuotaManagerObserverPendingReceiver;

