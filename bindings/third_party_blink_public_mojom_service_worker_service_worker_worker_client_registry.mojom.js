// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: ServiceWorkerWorkerClientRegistry
blink.mojom.mojom.ServiceWorkerWorkerClientRegistry = {};

blink.mojom.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClientRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerWorkerClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec,
      null,
      [client]);
  }

  cloneWorkerClientRegistry(host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec,
      null,
      [host]);
  }

};

blink.mojom.mojom.ServiceWorkerWorkerClientRegistry.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClientRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterWorkerClient
blink.mojom.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerWorkerClientRegistry.RegisterWorkerClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerWorkerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloneWorkerClientRegistry
blink.mojom.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerWorkerClientRegistry.CloneWorkerClientRegistry_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerWorkerClientRegistryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerWorkerClientRegistryPtr = blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRemote;
blink.mojom.mojom.ServiceWorkerWorkerClientRegistryRequest = blink.mojom.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver;

