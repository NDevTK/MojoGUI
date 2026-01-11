// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client_registry.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerWorkerClientRegistryRemote), null, false, 0, undefined),
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
  registerWorkerClient(client) {
    return this.$.registerWorkerClient(client);
  }
  cloneWorkerClientRegistry(host) {
    return this.$.cloneWorkerClientRegistry(host);
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerWorkerClientRegistry', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerWorkerClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec,
      null,
      [client],
      false);
  }

  cloneWorkerClientRegistry(host) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerWorkerClientRegistry', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClientRegistry_RegisterWorkerClient_ParamsSpec.$.structSpec);
          const result = this.impl.registerWorkerClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClientRegistry_CloneWorkerClientRegistry_ParamsSpec.$.structSpec);
          const result = this.impl.cloneWorkerClientRegistry(params.host);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ServiceWorkerWorkerClientRegistryReceiver = blink.mojom.ServiceWorkerWorkerClientRegistryReceiver;

blink.mojom.ServiceWorkerWorkerClientRegistryPtr = blink.mojom.ServiceWorkerWorkerClientRegistryRemote;
blink.mojom.ServiceWorkerWorkerClientRegistryRequest = blink.mojom.ServiceWorkerWorkerClientRegistryPendingReceiver;

