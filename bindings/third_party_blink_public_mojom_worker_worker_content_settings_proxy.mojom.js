// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.WorkerContentSettingsProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allowIndexedDB() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec,
      [],
      false);
  }

  allowCacheStorage() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec,
      [],
      false);
  }

  allowWebLocks() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec,
      [],
      false);
  }

  requestFileSystemAccessSync() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

blink.mojom.WorkerContentSettingsProxyReceiver = blink.mojom.WorkerContentSettingsProxyReceiver;

blink.mojom.WorkerContentSettingsProxyPtr = blink.mojom.WorkerContentSettingsProxyRemote;
blink.mojom.WorkerContentSettingsProxyRequest = blink.mojom.WorkerContentSettingsProxyPendingReceiver;

