// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_pool_client_interface.mojom
// Module: gpu.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.SharedImagePoolClientInterface = {};
gpu.mojom.SharedImagePoolClientInterface.$interfaceName = 'gpu.mojom.SharedImagePoolClientInterface';
gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec = { $: {} };

// Interface: SharedImagePoolClientInterface
mojo.internal.Struct(
    gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec, 'gpu.mojom.SharedImagePoolClientInterface_OnClearPool_Params', [
    ],
    [[0, 8]]);

gpu.mojom.SharedImagePoolClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.SharedImagePoolClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.SharedImagePoolClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.SharedImagePoolClientInterfacePendingReceiver,
      handle);
    this.$ = new gpu.mojom.SharedImagePoolClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClearPool() {
    return this.$.onClearPool();
  }
};

gpu.mojom.SharedImagePoolClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedImagePoolClientInterface', [
      { explicit: null },
    ]);
  }

  onClearPool() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec,
      null,
      [],
      false);
  }

};

gpu.mojom.SharedImagePoolClientInterface.getRemote = function() {
  let remote = new gpu.mojom.SharedImagePoolClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.SharedImagePoolClientInterface',
    'context');
  return remote.$;
};

gpu.mojom.SharedImagePoolClientInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedImagePoolClientInterface', [
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
             decoder.decodeStructInline(gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec.$.structSpec);
          const result = this.impl.onClearPool();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

gpu.mojom.SharedImagePoolClientInterfaceReceiver = gpu.mojom.SharedImagePoolClientInterfaceReceiver;

gpu.mojom.SharedImagePoolClientInterfacePtr = gpu.mojom.SharedImagePoolClientInterfaceRemote;
gpu.mojom.SharedImagePoolClientInterfaceRequest = gpu.mojom.SharedImagePoolClientInterfacePendingReceiver;

