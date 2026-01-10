// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface_change_listener.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.IfAddrMsgSpec = { $: {} };
network.mojom.AddressMapSpec = { $: {} };
network.mojom.OnlineLinksSpec = { $: {} };
network.mojom.InitialAddressMapSpec = { $: {} };
network.mojom.NetworkInterfaceChangeParamsSpec = { $: {} };
network.mojom.NetworkInterfaceChangeListener = {};
network.mojom.NetworkInterfaceChangeListener.$interfaceName = 'network.mojom.NetworkInterfaceChangeListener';
network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec = { $: {} };

// Struct: IfAddrMsg
mojo.internal.Struct(
    network.mojom.IfAddrMsgSpec, 'network.mojom.IfAddrMsg', [
      mojo.internal.StructField('ifa_family', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('ifa_prefixlen', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('ifa_flags', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('ifa_scope', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('ifa_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AddressMap
mojo.internal.Struct(
    network.mojom.AddressMapSpec, 'network.mojom.AddressMap', [
      mojo.internal.StructField('address_map', 0, 0, mojo.internal.Map(network.mojom.IPAddressSpec, network.mojom.IfAddrMsgSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OnlineLinks
mojo.internal.Struct(
    network.mojom.OnlineLinksSpec, 'network.mojom.OnlineLinks', [
      mojo.internal.StructField('online_links', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InitialAddressMap
mojo.internal.Struct(
    network.mojom.InitialAddressMapSpec, 'network.mojom.InitialAddressMap', [
      mojo.internal.StructField('address_map', 0, 0, network.mojom.AddressMapSpec, null, false, 0, undefined),
      mojo.internal.StructField('online_links', 8, 0, network.mojom.OnlineLinksSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkInterfaceChangeParams
mojo.internal.Struct(
    network.mojom.NetworkInterfaceChangeParamsSpec, 'network.mojom.NetworkInterfaceChangeParams', [
      mojo.internal.StructField('address_map', 0, 0, mojo.internal.Map(network.mojom.IPAddressSpec, network.mojom.IfAddrMsgSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('online_links', 8, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NetworkInterfaceChangeListener
mojo.internal.Struct(
    network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_ParamsSpec, 'network.mojom.NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params', [
      mojo.internal.StructField('params', 0, 0, network.mojom.NetworkInterfaceChangeParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

network.mojom.NetworkInterfaceChangeListenerPtr = network.mojom.NetworkInterfaceChangeListenerRemote;
network.mojom.NetworkInterfaceChangeListenerRequest = network.mojom.NetworkInterfaceChangeListenerPendingReceiver;

