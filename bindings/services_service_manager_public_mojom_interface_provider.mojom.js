// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Interface: InterfaceProvider
service_manager.mojom.InterfaceProvider = {};

service_manager.mojom.InterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.InterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.InterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.InterfaceProviderPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.InterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.InterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInterface(interface_name, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec,
      null,
      [interface_name, pipe]);
  }

};

service_manager.mojom.InterfaceProvider.getRemote = function() {
  let remote = new service_manager.mojom.InterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.InterfaceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetInterface
service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.InterfaceProvider.GetInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.InterfaceProviderPtr = service_manager.mojom.InterfaceProviderRemote;
service_manager.mojom.InterfaceProviderRequest = service_manager.mojom.InterfaceProviderPendingReceiver;

