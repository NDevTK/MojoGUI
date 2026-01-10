// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.InterfaceProvider = {};
service_manager.mojom.InterfaceProvider.$interfaceName = 'service_manager.mojom.InterfaceProvider';
service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec = { $: {} };

// Interface: InterfaceProvider
mojo.internal.Struct(
    service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec, 'service_manager.mojom.InterfaceProvider_GetInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [interface_name, pipe],
      false);
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

service_manager.mojom.InterfaceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInterface(params.interface_name, params.pipe);
          break;
        }
      }
    });
  }
};

service_manager.mojom.InterfaceProviderReceiver = service_manager.mojom.InterfaceProviderReceiver;

service_manager.mojom.InterfaceProviderPtr = service_manager.mojom.InterfaceProviderRemote;
service_manager.mojom.InterfaceProviderRequest = service_manager.mojom.InterfaceProviderPendingReceiver;

