// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_access/storage_access_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.StorageAccessHandle = {};
blink.mojom.StorageAccessHandle.$interfaceName = 'blink.mojom.StorageAccessHandle';
blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_Estimate_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec = { $: {} };

// Interface: StorageAccessHandle
mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindIndexedDB_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindLocks_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.LockManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindCaches_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec, 'blink.mojom.StorageAccessHandle_GetDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.StorageAccessHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_Estimate_ParamsSpec, 'blink.mojom.StorageAccessHandle_Estimate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec, 'blink.mojom.StorageAccessHandle_Estimate_ResponseParams', [
      mojo.internal.StructField('current_usage', 0, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindBlobStorage_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindBroadcastChannel_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindSharedWorker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.SharedWorkerConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.StorageAccessHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAccessHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAccessHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAccessHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAccessHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.StorageAccessHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndexedDB(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLocks(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCaches(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDirectory() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec,
      blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.StorageAccessHandle_Estimate_ParamsSpec,
      blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  bindBlobStorage(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBroadcastChannel(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSharedWorker(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

blink.mojom.StorageAccessHandle.getRemote = function() {
  let remote = new blink.mojom.StorageAccessHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAccessHandle',
    'context');
  return remote.$;
};

blink.mojom.StorageAccessHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindIndexedDB(params.receiver);
          break;
        }
        case 1: {
          const params = blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindLocks(params.receiver);
          break;
        }
        case 2: {
          const params = blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindCaches(params.receiver);
          break;
        }
        case 3: {
          const params = blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.StorageAccessHandle_Estimate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.estimate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBlobStorage(params.receiver);
          break;
        }
        case 6: {
          const params = blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBroadcastChannel(params.receiver);
          break;
        }
        case 7: {
          const params = blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSharedWorker(params.receiver);
          break;
        }
      }
    }});
  }
};

blink.mojom.StorageAccessHandleReceiver = blink.mojom.StorageAccessHandleReceiver;

blink.mojom.StorageAccessHandlePtr = blink.mojom.StorageAccessHandleRemote;
blink.mojom.StorageAccessHandleRequest = blink.mojom.StorageAccessHandlePendingReceiver;

