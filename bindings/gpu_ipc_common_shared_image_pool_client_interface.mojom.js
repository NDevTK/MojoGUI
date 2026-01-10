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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onClearPool();
          break;
        }
      }
    }});
  }
};

gpu.mojom.SharedImagePoolClientInterfaceReceiver = gpu.mojom.SharedImagePoolClientInterfaceReceiver;

gpu.mojom.SharedImagePoolClientInterfacePtr = gpu.mojom.SharedImagePoolClientInterfaceRemote;
gpu.mojom.SharedImagePoolClientInterfaceRequest = gpu.mojom.SharedImagePoolClientInterfacePendingReceiver;

