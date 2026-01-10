// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_change_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
network.mojom.ConnectionSubtypeSpec = { $: mojo.internal.Enum() };
network.mojom.IPAddressChangeTypeSpec = { $: mojo.internal.Enum() };
network.mojom.NetworkChangeManagerClient = {};
network.mojom.NetworkChangeManagerClient.$interfaceName = 'network.mojom.NetworkChangeManagerClient';
network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec = { $: {} };
network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec = { $: {} };
network.mojom.NetworkChangeManager = {};
network.mojom.NetworkChangeManager.$interfaceName = 'network.mojom.NetworkChangeManager';
network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec = { $: {} };
network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec = { $: {} };
network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec = { $: {} };

// Enum: ConnectionType
network.mojom.ConnectionType = {
  CONNECTION_UNKNOWN: 0,
  CONNECTION_ETHERNET: 1,
  CONNECTION_WIFI: 2,
  CONNECTION_2G: 3,
  CONNECTION_3G: 4,
  CONNECTION_4G: 5,
  CONNECTION_NONE: 6,
  CONNECTION_BLUETOOTH: 7,
  CONNECTION_5G: 8,
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
  SUBTYPE_LAST: 32,
};

// Enum: IPAddressChangeType
network.mojom.IPAddressChangeType = {
  IP_ADDRESS_CHANGE_NONE: 0,
  IP_ADDRESS_CHANGE_NORMAL: 1,
  IP_ADDRESS_CHANGE_IPV6_TEMPADDR: 2,
  IP_ADDRESS_CHANGE_LAST: 2,
};

// Interface: NetworkChangeManagerClient
mojo.internal.Struct(
    network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec, 'network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec, 'network.mojom.NetworkChangeManagerClient_OnNetworkChanged_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.NetworkChangeManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkChangeManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkChangeManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkChangeManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkChangeManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInitialConnectionType(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec,
      null,
      [type],
      false);
  }

  onNetworkChanged(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec,
      null,
      [type],
      false);
  }

};

network.mojom.NetworkChangeManagerClient.getRemote = function() {
  let remote = new network.mojom.NetworkChangeManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManagerClient',
    'context');
  return remote.$;
};

network.mojom.NetworkChangeManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.NetworkChangeManagerClient_OnInitialConnectionType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onInitialConnectionType(params.type);
          break;
        }
        case 1: {
          const params = network.mojom.NetworkChangeManagerClient_OnNetworkChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkChanged(params.type);
          break;
        }
      }
    }});
  }
};

network.mojom.NetworkChangeManagerClientReceiver = network.mojom.NetworkChangeManagerClientReceiver;

network.mojom.NetworkChangeManagerClientPtr = network.mojom.NetworkChangeManagerClientRemote;
network.mojom.NetworkChangeManagerClientRequest = network.mojom.NetworkChangeManagerClientPendingReceiver;


// Interface: NetworkChangeManager
mojo.internal.Struct(
    network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec, 'network.mojom.NetworkChangeManager_RequestNotifications_Params', [
      mojo.internal.StructField('client_remote', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetworkChangeManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec, 'network.mojom.NetworkChangeManager_OnNetworkChanged_Params', [
      mojo.internal.StructField('ip_address_change_type', 0, 0, network.mojom.IPAddressChangeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_connection_type', 8, 0, network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_connection_subtype', 16, 0, network.mojom.ConnectionSubtypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dns_changed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connection_type_changed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connection_subtype_changed', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec, 'network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_Params', [
      mojo.internal.StructField('notifier', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.NetworkChangeManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkChangeManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkChangeManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkChangeManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkChangeManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkChangeManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNotifications(client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec,
      null,
      [client_remote],
      false);
  }

  onNetworkChanged(dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec,
      null,
      [dns_changed, ip_address_change_type, connection_type_changed, new_connection_type, connection_subtype_changed, new_connection_subtype],
      false);
  }

  bindNetworkInterfaceChangeListener(notifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec,
      null,
      [notifier],
      false);
  }

};

network.mojom.NetworkChangeManager.getRemote = function() {
  let remote = new network.mojom.NetworkChangeManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkChangeManager',
    'context');
  return remote.$;
};

network.mojom.NetworkChangeManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.NetworkChangeManager_RequestNotifications_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestNotifications(params.client_remote);
          break;
        }
        case 1: {
          const params = network.mojom.NetworkChangeManager_OnNetworkChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkChanged(params.dns_changed, params.ip_address_change_type, params.connection_type_changed, params.new_connection_type, params.connection_subtype_changed, params.new_connection_subtype);
          break;
        }
        case 2: {
          const params = network.mojom.NetworkChangeManager_BindNetworkInterfaceChangeListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindNetworkInterfaceChangeListener(params.notifier);
          break;
        }
      }
    }});
  }
};

network.mojom.NetworkChangeManagerReceiver = network.mojom.NetworkChangeManagerReceiver;

network.mojom.NetworkChangeManagerPtr = network.mojom.NetworkChangeManagerRemote;
network.mojom.NetworkChangeManagerRequest = network.mojom.NetworkChangeManagerPendingReceiver;

