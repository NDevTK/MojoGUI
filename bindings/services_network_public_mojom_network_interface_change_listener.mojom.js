// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface_change_listener.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkInterfaceChangeListener
network.mojom.NetworkInterfaceChangeListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkInterfaceChangeListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkInterfaceChangeListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkInterfaceChangeListenerPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkInterfaceChangeListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkInterfaceChangeListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkInterfacesChanged(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec.$,
      null,
      [params]);
  }

};

network.mojom.NetworkInterfaceChangeListener.getRemote = function() {
  let remote = new network.mojom.NetworkInterfaceChangeListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkInterfaceChangeListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkInterfacesChanged
network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterfaceChangeListener.OnNetworkInterfacesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkInterfaceChangeListenerPtr = network.mojom.NetworkInterfaceChangeListenerRemote;
network.mojom.NetworkInterfaceChangeListenerRequest = network.mojom.NetworkInterfaceChangeListenerPendingReceiver;

