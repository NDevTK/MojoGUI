// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_change_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ConnectionType
network.mojom.ConnectionType = {
  CONNECTION_UNKNOWN: 0,
  but: 1,
  CONNECTION_WIFI: 2,
  CONNECTION_2G: 3,
  CONNECTION_3G: 4,
  CONNECTION_4G: 5,
  CONNECTION_NONE: 6,
  CONNECTION_5G: 7,
  CONNECTION_LAST: 8,
};

// Enum: ConnectionSubtype
network.mojom.ConnectionSubtype = {
  SUBTYPE_UNKNOWN: 0,
  SUBTYPE_NONE: 1,
  SUBTYPE_OTHER: 2,
  SUBTYPE_GSM: 3,
  SUBTYPE_IDEN: 4,
  SUBTYPE_CDMA: 5,
  SUBTYPE_1XRTT: 6,
  SUBTYPE_GPRS: 7,
  SUBTYPE_EDGE: 8,
  SUBTYPE_UMTS: 9,
  SUBTYPE_EVDO_REV_0: 10,
  SUBTYPE_EVDO_REV_A: 11,
  SUBTYPE_HSPA: 12,
  SUBTYPE_EVDO_REV_B: 13,
  SUBTYPE_HSDPA: 14,
  SUBTYPE_HSUPA: 15,
  SUBTYPE_EHRPD: 16,
  SUBTYPE_HSPAP: 17,
  SUBTYPE_LTE: 18,
  SUBTYPE_LTE_ADVANCED: 19,
  SUBTYPE_BLUETOOTH_1_2: 20,
  SUBTYPE_BLUETOOTH_2_1: 21,
  SUBTYPE_BLUETOOTH_3_0: 22,
  SUBTYPE_BLUETOOTH_4_0: 23,
  SUBTYPE_ETHERNET: 24,
  SUBTYPE_FAST_ETHERNET: 25,
  SUBTYPE_GIGABIT_ETHERNET: 26,
  SUBTYPE_10_GIGABIT_ETHERNET: 27,
  SUBTYPE_WIFI_B: 28,
  SUBTYPE_WIFI_G: 29,
  SUBTYPE_WIFI_N: 30,
  SUBTYPE_WIFI_AC: 31,
  SUBTYPE_WIFI_AD: 32,
  SUBTYPE_LAST: 33,
};

// Enum: IPAddressChangeType
network.mojom.IPAddressChangeType = {
  IP_ADDRESS_CHANGE_NONE: 0,
  IP_ADDRESS_CHANGE_NORMAL: 1,
  IP_ADDRESS_CHANGE_IPV6_TEMPADDR: 2,
  IP_ADDRESS_CHANGE_LAST: 3,
};

// Interface: NetworkChangeManagerClient
network.mojom.NetworkChangeManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkChangeManagerClient';
  }

  onInitialConnectionType(type) {
    // Method: OnInitialConnectionType
    // Call: OnInitialConnectionType(type)
  }

  onNetworkChanged(type) {
    // Method: OnNetworkChanged
    // Call: OnNetworkChanged(type)
  }

};

network.mojom.NetworkChangeManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkChangeManager
network.mojom.NetworkChangeManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkChangeManager';
  }

  requestNotifications(client_remote) {
    // Method: RequestNotifications
    // Call: RequestNotifications(client_remote)
  }

  onNetworkChanged(dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype) {
    // Method: OnNetworkChanged
    // Call: OnNetworkChanged(dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype)
  }

  bindNetworkInterfaceChangeListener(notifier) {
    // Method: BindNetworkInterfaceChangeListener
    // Call: BindNetworkInterfaceChangeListener(notifier)
  }

};

network.mojom.NetworkChangeManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
