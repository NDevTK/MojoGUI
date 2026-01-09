// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface_change_listener.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IfAddrMsg
network.mojom.IfAddrMsg = class {
  constructor(values = {}) {
    this.ifa_index = values.ifa_index !== undefined ? values.ifa_index : 0;
  }
};

// Struct: AddressMap
network.mojom.AddressMap = class {
  constructor(values = {}) {
    this.address_map = values.address_map !== undefined ? values.address_map : {};
  }
};

// Struct: OnlineLinks
network.mojom.OnlineLinks = class {
  constructor(values = {}) {
    this.online_links = values.online_links !== undefined ? values.online_links : 0;
  }
};

// Struct: InitialAddressMap
network.mojom.InitialAddressMap = class {
  constructor(values = {}) {
    this.online_links = values.online_links !== undefined ? values.online_links : {};
  }
};

// Struct: NetworkInterfaceChangeParams
network.mojom.NetworkInterfaceChangeParams = class {
  constructor(values = {}) {
    this.address_map = values.address_map !== undefined ? values.address_map : {};
    this.online_links = values.online_links !== undefined ? values.online_links : 0;
  }
};

// Interface: NetworkInterfaceChangeListener
network.mojom.NetworkInterfaceChangeListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkInterfaceChangeListener';
  }

  onNetworkInterfacesChanged(params) {
    // Method: OnNetworkInterfacesChanged
    // Call: OnNetworkInterfacesChanged(params)
  }

};

network.mojom.NetworkInterfaceChangeListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
