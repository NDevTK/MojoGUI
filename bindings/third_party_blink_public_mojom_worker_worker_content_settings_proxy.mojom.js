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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.allowIndexedDB');
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
          console.log('[GeneratedReceiver] Calling impl.allowCacheStorage');
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
          console.log('[GeneratedReceiver] Calling impl.allowWebLocks');
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
          console.log('[GeneratedReceiver] Calling impl.requestFileSystemAccessSync');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WorkerContentSettingsProxyReceiver = blink.mojom.WorkerContentSettingsProxyReceiver;

blink.mojom.WorkerContentSettingsProxyPtr = blink.mojom.WorkerContentSettingsProxyRemote;
blink.mojom.WorkerContentSettingsProxyRequest = blink.mojom.WorkerContentSettingsProxyPendingReceiver;

