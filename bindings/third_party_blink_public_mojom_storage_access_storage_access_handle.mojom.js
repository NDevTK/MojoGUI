// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_access/storage_access_handle.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  bindIndexedDB(receiver) {
    return this.$.bindIndexedDB(receiver);
  }
  bindLocks(receiver) {
    return this.$.bindLocks(receiver);
  }
  bindCaches(receiver) {
    return this.$.bindCaches(receiver);
  }
  getDirectory() {
    return this.$.getDirectory();
  }
  estimate() {
    return this.$.estimate();
  }
  bindBlobStorage(receiver) {
    return this.$.bindBlobStorage(receiver);
  }
  bindBroadcastChannel(receiver) {
    return this.$.bindBroadcastChannel(receiver);
  }
  bindSharedWorker(receiver) {
    return this.$.bindSharedWorker(receiver);
  }
};

blink.mojom.StorageAccessHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageAccessHandle', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindIndexedDB(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLocks(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCaches(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDirectory() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec,
      blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.StorageAccessHandle_Estimate_ParamsSpec,
      blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  bindBlobStorage(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBroadcastChannel(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSharedWorker(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageAccessHandle', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_Estimate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec.$.structSpec);
          const result = this.impl.bindIndexedDB(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec.$.structSpec);
          const result = this.impl.bindLocks(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec.$.structSpec);
          const result = this.impl.bindCaches(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_Estimate_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec.$.structSpec);
          const result = this.impl.bindBlobStorage(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec.$.structSpec);
          const result = this.impl.bindBroadcastChannel(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec.$.structSpec);
          const result = this.impl.bindSharedWorker(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.StorageAccessHandleReceiver = blink.mojom.StorageAccessHandleReceiver;

blink.mojom.StorageAccessHandlePtr = blink.mojom.StorageAccessHandleRemote;
blink.mojom.StorageAccessHandleRequest = blink.mojom.StorageAccessHandlePendingReceiver;

