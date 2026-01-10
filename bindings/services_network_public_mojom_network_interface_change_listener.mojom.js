// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface_change_listener.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IfAddrMsg
network.mojom.mojom.IfAddrMsgSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IfAddrMsg',
      packedSize: 16,
      fields: [
        { name: 'ifa_family', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'ifa_prefixlen', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'ifa_flags', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'ifa_scope', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'ifa_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AddressMap
network.mojom.mojom.AddressMapSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AddressMap',
      packedSize: 16,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(network.mojom.IPAddressSpec, network.mojom.IfAddrMsgSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OnlineLinks
network.mojom.mojom.OnlineLinksSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.OnlineLinks',
      packedSize: 16,
      fields: [
        { name: 'online_links', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InitialAddressMap
network.mojom.mojom.InitialAddressMapSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.InitialAddressMap',
      packedSize: 24,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AddressMapSpec, nullable: false, minVersion: 0 },
        { name: 'online_links', packedOffset: 8, packedBitOffset: 0, type: network.mojom.OnlineLinksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NetworkInterfaceChangeParams
network.mojom.mojom.NetworkInterfaceChangeParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterfaceChangeParams',
      packedSize: 24,
      fields: [
        { name: 'address_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(network.mojom.IPAddressSpec, network.mojom.IfAddrMsgSpec, false), nullable: true, minVersion: 0 },
        { name: 'online_links', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: NetworkInterfaceChangeListener
network.mojom.mojom.NetworkInterfaceChangeListener = {};

network.mojom.mojom.NetworkInterfaceChangeListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkInterfaceChangeListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkInterfaceChangeListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkInterfaceChangeListenerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkInterfaceChangeListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkInterfaceChangeListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkInterfacesChanged(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec,
      null,
      [params]);
  }

};

network.mojom.mojom.NetworkInterfaceChangeListener.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkInterfaceChangeListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkInterfaceChangeListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkInterfacesChanged
network.mojom.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterfaceChangeListener.OnNetworkInterfacesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkInterfaceChangeParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkInterfaceChangeListenerPtr = network.mojom.mojom.NetworkInterfaceChangeListenerRemote;
network.mojom.mojom.NetworkInterfaceChangeListenerRequest = network.mojom.mojom.NetworkInterfaceChangeListenerPendingReceiver;

