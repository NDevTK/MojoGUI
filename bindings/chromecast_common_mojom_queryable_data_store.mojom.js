// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/queryable_data_store.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.shell.mojom = chromecast.shell.shell.mojom || {};


// Interface: QueryableDataStore
chromecast.shell.shell.mojom.mojom.QueryableDataStore = {};

chromecast.shell.shell.mojom.mojom.QueryableDataStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.QueryableDataStoreRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.QueryableDataStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.QueryableDataStorePendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.QueryableDataStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.QueryableDataStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  set(key, value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.QueryableDataStore_Set_ParamsSpec,
      null,
      [key, value]);
  }

};

chromecast.shell.shell.mojom.mojom.QueryableDataStore.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.QueryableDataStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.QueryableDataStore',
    'context');
  return remote.$;
};

// ParamsSpec for Set
chromecast.shell.shell.mojom.mojom.QueryableDataStore_Set_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.QueryableDataStore.Set_Params',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.QueryableDataStorePtr = chromecast.shell.shell.mojom.mojom.QueryableDataStoreRemote;
chromecast.shell.shell.mojom.mojom.QueryableDataStoreRequest = chromecast.shell.shell.mojom.mojom.QueryableDataStorePendingReceiver;

