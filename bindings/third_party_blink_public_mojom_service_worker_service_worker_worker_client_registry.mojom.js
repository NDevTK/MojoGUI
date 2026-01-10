// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerWorkerClientRegistry = {};
blink.mojom.ServiceWorkerWorkerClientRegistry.$interfaceName = 'blink.mojom.ServiceWorkerWorkerClientRegistry';
blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec = { $: {} };

// Interface: ServiceWorkerWorkerClientRegistry
mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerWorkerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerWorkerClientRegistrySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClientRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerWorkerClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec,
      null,
      [client],
      false);
  }

  cloneWorkerClientRegistry(host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec,
      null,
      [host],
      false);
  }

};

blink.mojom.ServiceWorkerWorkerClientRegistry.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerWorkerClientRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClientRegistry',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerWorkerClientRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerWorkerClient(params.client);
          break;
        }
        case 1: {
          const params = blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cloneWorkerClientRegistry(params.host);
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryReceiver = blink.mojom.ServiceWorkerWorkerClientRegistryReceiver;

blink.mojom.ServiceWorkerWorkerClientRegistryPtr = blink.mojom.ServiceWorkerWorkerClientRegistryRemote;
blink.mojom.ServiceWorkerWorkerClientRegistryRequest = blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver;

