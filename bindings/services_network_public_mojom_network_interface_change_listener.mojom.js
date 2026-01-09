// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface_change_listener.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IfAddrMsg
network.mojom.IfAddrMsgSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IfAddrMsg',
      packedSize: 16,
      fields: [
        { name: 'ifa_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'ifa_family', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'ifa_prefixlen', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'ifa_flags', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'ifa_scope', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AddressMap
network.mojom.AddressMapSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AddressMap',
      packedSize: 16,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OnlineLinks
network.mojom.OnlineLinksSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.OnlineLinks',
      packedSize: 16,
      fields: [
        { name: 'online_links', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InitialAddressMap
network.mojom.InitialAddressMapSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.InitialAddressMap',
      packedSize: 24,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'online_links', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkInterfaceChangeParams
network.mojom.NetworkInterfaceChangeParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterfaceChangeParams',
      packedSize: 24,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'online_links', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NetworkInterfaceChangeListener
network.mojom.NetworkInterfaceChangeListener = {};

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
      network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec,
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkInterfaceChangeListenerPtr = network.mojom.NetworkInterfaceChangeListenerRemote;
network.mojom.NetworkInterfaceChangeListenerRequest = network.mojom.NetworkInterfaceChangeListenerPendingReceiver;

