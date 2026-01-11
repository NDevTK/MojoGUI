// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.WorkerContentSettingsProxy = {};
blink.mojom.WorkerContentSettingsProxy.$interfaceName = 'blink.mojom.WorkerContentSettingsProxy';
blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec = { $: {} };

// Interface: WorkerContentSettingsProxy
mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WorkerContentSettingsProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WorkerContentSettingsProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WorkerContentSettingsProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WorkerContentSettingsProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.WorkerContentSettingsProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  allowIndexedDB() {
    return this.$.allowIndexedDB();
  }
  allowCacheStorage() {
    return this.$.allowCacheStorage();
  }
  allowWebLocks() {
    return this.$.allowWebLocks();
  }
  requestFileSystemAccessSync() {
    return this.$.requestFileSystemAccessSync();
  }
};

blink.mojom.WorkerContentSettingsProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WorkerContentSettingsProxy', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  allowIndexedDB() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec,
      [],
      false);
  }

  allowCacheStorage() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec,
      [],
      false);
  }

  allowWebLocks() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec,
      [],
      false);
  }

  requestFileSystemAccessSync() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.WorkerContentSettingsProxy.getRemote = function() {
  let remote = new blink.mojom.WorkerContentSettingsProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WorkerContentSettingsProxy',
    'context');
  return remote.$;
};

blink.mojom.WorkerContentSettingsProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WorkerContentSettingsProxy', [
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
             decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec.$.structSpec);
          const result = this.impl.allowIndexedDB();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec.$.structSpec);
          const result = this.impl.allowCacheStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec.$.structSpec);
          const result = this.impl.allowWebLocks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec.$.structSpec);
          const result = this.impl.requestFileSystemAccessSync();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WorkerContentSettingsProxyReceiver = blink.mojom.WorkerContentSettingsProxyReceiver;

blink.mojom.WorkerContentSettingsProxyPtr = blink.mojom.WorkerContentSettingsProxyRemote;
blink.mojom.WorkerContentSettingsProxyRequest = blink.mojom.WorkerContentSettingsProxyPendingReceiver;

