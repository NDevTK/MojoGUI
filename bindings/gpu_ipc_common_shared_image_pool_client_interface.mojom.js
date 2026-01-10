// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_pool_client_interface.mojom
// Module: gpu.mojom

'use strict';

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
};

gpu.mojom.SharedImagePoolClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClearPool() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnClearPool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClearPool (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClearPool');
          const result = this.impl.onClearPool();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

gpu.mojom.SharedImagePoolClientInterfaceReceiver = gpu.mojom.SharedImagePoolClientInterfaceReceiver;

gpu.mojom.SharedImagePoolClientInterfacePtr = gpu.mojom.SharedImagePoolClientInterfaceRemote;
gpu.mojom.SharedImagePoolClientInterfaceRequest = gpu.mojom.SharedImagePoolClientInterfacePendingReceiver;

