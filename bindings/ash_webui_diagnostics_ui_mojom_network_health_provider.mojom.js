// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/network_health_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.diagnostics.mojom = ash.diagnostics.diagnostics.mojom || {};


// Enum: AuthenticationType
ash.diagnostics.diagnostics.mojom.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};
ash.diagnostics.diagnostics.mojom.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };

// Enum: NetworkState
ash.diagnostics.diagnostics.mojom.mojom.NetworkState = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
  kDisabled: 5,
};
ash.diagnostics.diagnostics.mojom.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };

// Enum: NetworkType
ash.diagnostics.diagnostics.mojom.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };

// Enum: RoamingState
ash.diagnostics.diagnostics.mojom.mojom.RoamingState = {
  kNone: 0,
  kRoaming: 1,
  kHome: 2,
};
ash.diagnostics.diagnostics.mojom.mojom.RoamingStateSpec = { $: mojo.internal.Enum() };

// Enum: LockType
ash.diagnostics.diagnostics.mojom.mojom.LockType = {
  kNone: 0,
  kSimPin: 1,
  kSimPuk: 2,
  kNetworkPin: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.LockTypeSpec = { $: mojo.internal.Enum() };

// Enum: SecurityType
ash.diagnostics.diagnostics.mojom.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};
ash.diagnostics.diagnostics.mojom.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };

// Union: NetworkTypeProperties
ash.diagnostics.diagnostics.mojom.mojom.NetworkTypePropertiesSpec = { $: mojo.internal.Union(
    'ash.diagnostics.mojom.NetworkTypeProperties', {
      'cellular': {
        'ordinal': 0,
        'type': ash.diagnostics.mojom.CellularStatePropertiesSpec,
      }},
      'ethernet': {
        'ordinal': 1,
        'type': ash.diagnostics.mojom.EthernetStatePropertiesSpec,
      }},
      'wifi': {
        'ordinal': 2,
        'type': ash.diagnostics.mojom.WiFiStatePropertiesSpec,
      }},
    })
};

// Struct: IPConfigProperties
ash.diagnostics.diagnostics.mojom.mojom.IPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.IPConfigProperties',
      packedSize: 40,
      fields: [
        { name: 'name_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'routing_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'gateway', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ip_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CellularStateProperties
ash.diagnostics.diagnostics.mojom.mojom.CellularStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CellularStateProperties',
      packedSize: 48,
      fields: [
        { name: 'iccid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'network_technology', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'roaming', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'roaming_state', packedOffset: 24, packedBitOffset: 0, type: ash.diagnostics.mojom.RoamingStateSpec, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sim_locked', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'lock_type', packedOffset: 32, packedBitOffset: 0, type: ash.diagnostics.mojom.LockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: EthernetStateProperties
ash.diagnostics.diagnostics.mojom.mojom.EthernetStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.EthernetStateProperties',
      packedSize: 16,
      fields: [
        { name: 'authentication', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.AuthenticationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WiFiStateProperties
ash.diagnostics.diagnostics.mojom.mojom.WiFiStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.WiFiStateProperties',
      packedSize: 40,
      fields: [
        { name: 'signal_strength', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frequency', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'security', packedOffset: 24, packedBitOffset: 0, type: ash.diagnostics.mojom.SecurityTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Network
ash.diagnostics.diagnostics.mojom.mojom.NetworkSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.Network',
      packedSize: 64,
      fields: [
        { name: 'state', packedOffset: 48, packedBitOffset: 0, type: ash.diagnostics.mojom.NetworkStateSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 52, packedBitOffset: 0, type: ash.diagnostics.mojom.NetworkTypeSpec, nullable: false, minVersion: 0 },
        { name: 'type_properties', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.NetworkTypePropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'observer_guid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mac_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ip_config', packedOffset: 40, packedBitOffset: 0, type: ash.diagnostics.mojom.IPConfigPropertiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: NetworkListObserver
ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkListChanged(network_guids, active_guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [network_guids, active_guid]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkListObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkListChanged
ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkListObserver.OnNetworkListChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'active_guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.NetworkListObserverPendingReceiver;


// Interface: NetworkStateObserver
ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkStateChanged(network) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkStateChanged
ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkStateObserver.OnNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'network', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.NetworkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.NetworkStateObserverPendingReceiver;


// Interface: NetworkHealthProvider
ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider = {};

ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.NetworkHealthProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeNetworkList(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec,
      null,
      [observer]);
  }

  observeNetwork(observer, guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec,
      null,
      [observer, guid]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.NetworkHealthProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveNetworkList
ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkHealthProvider.ObserveNetworkList_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.NetworkListObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveNetwork
ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkHealthProvider.ObserveNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.NetworkStateObserverRemote), nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderPtr = ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRemote;
ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderRequest = ash.diagnostics.diagnostics.mojom.mojom.NetworkHealthProviderPendingReceiver;

