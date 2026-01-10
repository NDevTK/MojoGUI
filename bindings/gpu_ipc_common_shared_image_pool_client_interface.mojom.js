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
    [{version: 0, packedSize: 8}]);

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
      []);
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

gpu.mojom.SharedImagePoolClientInterfacePtr = gpu.mojom.SharedImagePoolClientInterfaceRemote;
gpu.mojom.SharedImagePoolClientInterfaceRequest = gpu.mojom.SharedImagePoolClientInterfacePendingReceiver;

