// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_pool_client_interface.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Interface: SharedImagePoolClientInterface
gpu.mojom.mojom.SharedImagePoolClientInterface = {};

gpu.mojom.mojom.SharedImagePoolClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.mojom.SharedImagePoolClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.SharedImagePoolClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.mojom.SharedImagePoolClientInterfacePendingReceiver,
      handle);
    this.$ = new gpu.mojom.mojom.SharedImagePoolClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.mojom.SharedImagePoolClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClearPool() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec,
      null,
      []);
  }

};

gpu.mojom.mojom.SharedImagePoolClientInterface.getRemote = function() {
  let remote = new gpu.mojom.mojom.SharedImagePoolClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.SharedImagePoolClientInterface',
    'context');
  return remote.$;
};

// ParamsSpec for OnClearPool
gpu.mojom.mojom.SharedImagePoolClientInterface_OnClearPool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImagePoolClientInterface.OnClearPool_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
gpu.mojom.mojom.SharedImagePoolClientInterfacePtr = gpu.mojom.mojom.SharedImagePoolClientInterfaceRemote;
gpu.mojom.mojom.SharedImagePoolClientInterfaceRequest = gpu.mojom.mojom.SharedImagePoolClientInterfacePendingReceiver;

