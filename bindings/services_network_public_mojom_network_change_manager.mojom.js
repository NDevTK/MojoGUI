// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_change_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ConnectionType
network.mojom.mojom.ConnectionType = {
  CONNECTION_UNKNOWN: 0,
  CONNECTION_ETHERNET: 1,
  CONNECTION_WIFI: 2,
  CONNECTION_2G: 3,
  CONNECTION_3G: 4,
  CONNECTION_4G: 5,
  CONNECTION_NONE: 6,
  CONNECTION_BLUETOOTH: 7,
  CONNECTION_5G: 8,
  CONNECTION_LAST: 9,
};
network.mojom.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionSubtype
network.mojom.mojom.ConnectionSubtype = {
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
network.mojom.mojom.ConnectionSubtypeSpec = { $: mojo.internal.Enum() };

// Enum: IPAddressChangeType
network.mojom.mojom.IPAddressChangeType = {
  IP_ADDRESS_CHANGE_NONE: 0,
  IP_ADDRESS_CHANGE_NORMAL: 1,
  IP_ADDRESS_CHANGE_IPV6_TEMPADDR: 2,
  IP_ADDRESS_CHANGE_LAST: 3,
};
network.mojom.mojom.IPAddressChangeTypeSpec = { $: mojo.internal.Enum() };

// Interface: NetworkChangeManagerClient
network.mojom.mojom.NetworkChangeManagerClient = {};

network.mojom.mojom.NetworkChangeManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkChangeManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkChangeManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkChangeManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInitialConnectionType(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec,
      null,
      [type]);
  }

  onNetworkChanged(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec,
      null,
      [type]);
  }

};

network.mojom.mojom.NetworkChangeManagerClient.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkChangeManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnInitialConnectionType
network.mojom.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkChangeManagerClient.OnInitialConnectionType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNetworkChanged
network.mojom.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkChangeManagerClient.OnNetworkChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkChangeManagerClientPtr = network.mojom.mojom.NetworkChangeManagerClientRemote;
network.mojom.mojom.NetworkChangeManagerClientRequest = network.mojom.mojom.NetworkChangeManagerClientPendingReceiver;


// Interface: NetworkChangeManager
network.mojom.mojom.NetworkChangeManager = {};

network.mojom.mojom.NetworkChangeManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkChangeManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkChangeManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkChangeManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNotifications(client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec,
      null,
      [client_remote]);
  }

  onNetworkChanged(dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec,
      null,
      [dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype]);
  }

  bindNetworkInterfaceChangeListener(notifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec,
      null,
      [notifier]);
  }

};

network.mojom.mojom.NetworkChangeManager.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkChangeManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestNotifications
network.mojom.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkChangeManager.RequestNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNetworkChanged
network.mojom.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkChangeManager.OnNetworkChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'dns_changed', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ip_address_change_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressChangeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'connection_type_changed', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_connection_type', packedOffset: 4, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'connection_subtype_changed', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_connection_subtype', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ConnectionSubtypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindNetworkInterfaceChangeListener
network.mojom.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkChangeManager.BindNetworkInterfaceChangeListener_Params',
      packedSize: 16,
      fields: [
        { name: 'notifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkChangeManagerPtr = network.mojom.mojom.NetworkChangeManagerRemote;
network.mojom.mojom.NetworkChangeManagerRequest = network.mojom.mojom.NetworkChangeManagerPendingReceiver;

