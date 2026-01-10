// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/network_health_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};

ash.diagnostics.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.RoamingStateSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.LockTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.NetworkTypePropertiesSpec = { $: {} };
ash.diagnostics.mojom.IPConfigPropertiesSpec = { $: {} };
ash.diagnostics.mojom.CellularStatePropertiesSpec = { $: {} };
ash.diagnostics.mojom.EthernetStatePropertiesSpec = { $: {} };
ash.diagnostics.mojom.WiFiStatePropertiesSpec = { $: {} };
ash.diagnostics.mojom.NetworkSpec = { $: {} };
ash.diagnostics.mojom.NetworkListObserver = {};
ash.diagnostics.mojom.NetworkListObserver.$interfaceName = 'ash.diagnostics.mojom.NetworkListObserver';
ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec = { $: {} };
ash.diagnostics.mojom.NetworkStateObserver = {};
ash.diagnostics.mojom.NetworkStateObserver.$interfaceName = 'ash.diagnostics.mojom.NetworkStateObserver';
ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec = { $: {} };
ash.diagnostics.mojom.NetworkHealthProvider = {};
ash.diagnostics.mojom.NetworkHealthProvider.$interfaceName = 'ash.diagnostics.mojom.NetworkHealthProvider';
ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec = { $: {} };
ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec = { $: {} };

// Enum: AuthenticationType
ash.diagnostics.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: NetworkState
ash.diagnostics.mojom.NetworkState = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
  kDisabled: 5,
};

// Enum: NetworkType
ash.diagnostics.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: RoamingState
ash.diagnostics.mojom.RoamingState = {
  kNone: 0,
  kRoaming: 1,
  kHome: 2,
};

// Enum: LockType
ash.diagnostics.mojom.LockType = {
  kNone: 0,
  kSimPin: 1,
  kSimPuk: 2,
  kNetworkPin: 3,
};

// Enum: SecurityType
ash.diagnostics.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Union: NetworkTypeProperties
mojo.internal.Union(
    ash.diagnostics.mojom.NetworkTypePropertiesSpec, 'ash.diagnostics.mojom.NetworkTypeProperties', {
      'cellular': {
        'ordinal': 0,
        'type': ash.diagnostics.mojom.CellularStatePropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': ash.diagnostics.mojom.EthernetStatePropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 2,
        'type': ash.diagnostics.mojom.WiFiStatePropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: IPConfigProperties
mojo.internal.Struct(
    ash.diagnostics.mojom.IPConfigPropertiesSpec, 'ash.diagnostics.mojom.IPConfigProperties', [
      mojo.internal.StructField('name_servers', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('gateway', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    ash.diagnostics.mojom.CellularStatePropertiesSpec, 'ash.diagnostics.mojom.CellularStateProperties', [
      mojo.internal.StructField('iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('roaming_state', 24, 0, ash.diagnostics.mojom.RoamingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lock_type', 32, 0, ash.diagnostics.mojom.LockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('roaming', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    ash.diagnostics.mojom.EthernetStatePropertiesSpec, 'ash.diagnostics.mojom.EthernetStateProperties', [
      mojo.internal.StructField('authentication', 0, 0, ash.diagnostics.mojom.AuthenticationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    ash.diagnostics.mojom.WiFiStatePropertiesSpec, 'ash.diagnostics.mojom.WiFiStateProperties', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, ash.diagnostics.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frequency', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Network
mojo.internal.Struct(
    ash.diagnostics.mojom.NetworkSpec, 'ash.diagnostics.mojom.Network', [
      mojo.internal.StructField('state', 0, 0, ash.diagnostics.mojom.NetworkStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.diagnostics.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type_properties', 16, 0, ash.diagnostics.mojom.NetworkTypePropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('observer_guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mac_address', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_config', 48, 0, ash.diagnostics.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Interface: NetworkListObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec, 'ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_Params', [
      mojo.internal.StructField('network_guids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('active_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.diagnostics.mojom.NetworkListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.NetworkListObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.NetworkListObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.NetworkListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.NetworkListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkListChanged(network_guids, active_guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [network_guids, active_guid],
      false);
  }

};

ash.diagnostics.mojom.NetworkListObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.NetworkListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkListObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.NetworkListObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkListChanged(params.network_guids, params.active_guid);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.NetworkListObserverReceiver = ash.diagnostics.mojom.NetworkListObserverReceiver;

ash.diagnostics.mojom.NetworkListObserverPtr = ash.diagnostics.mojom.NetworkListObserverRemote;
ash.diagnostics.mojom.NetworkListObserverRequest = ash.diagnostics.mojom.NetworkListObserverPendingReceiver;


// Interface: NetworkStateObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec, 'ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('network', 0, 0, ash.diagnostics.mojom.NetworkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.NetworkStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.NetworkStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.NetworkStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.NetworkStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.NetworkStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkStateChanged(network) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network],
      false);
  }

};

ash.diagnostics.mojom.NetworkStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.NetworkStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkStateObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.NetworkStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkStateChanged(params.network);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.NetworkStateObserverReceiver = ash.diagnostics.mojom.NetworkStateObserverReceiver;

ash.diagnostics.mojom.NetworkStateObserverPtr = ash.diagnostics.mojom.NetworkStateObserverRemote;
ash.diagnostics.mojom.NetworkStateObserverRequest = ash.diagnostics.mojom.NetworkStateObserverPendingReceiver;


// Interface: NetworkHealthProvider
mojo.internal.Struct(
    ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec, 'ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.NetworkListObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec, 'ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.NetworkStateObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.NetworkHealthProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkHealthProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.NetworkHealthProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.NetworkHealthProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeNetworkList(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeNetwork(observer, guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec,
      null,
      [observer, guid],
      false);
  }

};

ash.diagnostics.mojom.NetworkHealthProvider.getRemote = function() {
  let remote = new ash.diagnostics.mojom.NetworkHealthProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkHealthProvider',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.NetworkHealthProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeNetworkList(params.observer);
          break;
        }
        case 1: {
          const params = ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeNetwork(params.observer, params.guid);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.NetworkHealthProviderReceiver = ash.diagnostics.mojom.NetworkHealthProviderReceiver;

ash.diagnostics.mojom.NetworkHealthProviderPtr = ash.diagnostics.mojom.NetworkHealthProviderRemote;
ash.diagnostics.mojom.NetworkHealthProviderRequest = ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver;

