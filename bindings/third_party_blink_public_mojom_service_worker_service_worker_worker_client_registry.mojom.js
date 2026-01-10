// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: ServiceWorkerWorkerClientRegistry
blink.mojom.ServiceWorkerWorkerClientRegistry = {};

blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerWorkerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerWorkerClientRegistryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [client]);
  }

  cloneWorkerClientRegistry(host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec,
      null,
      [host]);
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

// ParamsSpec for RegisterWorkerClient
blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec = {
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
blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec = {
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
blink.mojom.ServiceWorkerWorkerClientRegistryPtr = blink.mojom.ServiceWorkerWorkerClientRegistryRemote;
blink.mojom.ServiceWorkerWorkerClientRegistryRequest = blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver;

