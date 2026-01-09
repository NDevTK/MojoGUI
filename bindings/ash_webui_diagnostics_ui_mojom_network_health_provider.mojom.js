// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/network_health_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


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

// Struct: IPConfigProperties
ash.diagnostics.mojom.IPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.IPConfigProperties',
      packedSize: 40,
      fields: [
        { name: 'name_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'gateway', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ip_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'routing_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CellularStateProperties
ash.diagnostics.mojom.CellularStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CellularStateProperties',
      packedSize: 64,
      fields: [
        { name: 'iccid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'network_technology', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'roaming_state', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'lock_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'signal_strength', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'roaming', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sim_locked', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EthernetStateProperties
ash.diagnostics.mojom.EthernetStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.EthernetStateProperties',
      packedSize: 16,
      fields: [
        { name: 'authentication', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WiFiStateProperties
ash.diagnostics.mojom.WiFiStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.WiFiStateProperties',
      packedSize: 40,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'security', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'signal_strength', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frequency', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Network
ash.diagnostics.mojom.NetworkSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.Network',
      packedSize: 64,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'observer_guid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mac_address', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ip_config', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NetworkListObserver
ash.diagnostics.mojom.NetworkListObserver = {};

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
      [network_guids, active_guid]);
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

// ParamsSpec for OnNetworkListChanged
ash.diagnostics.mojom.NetworkListObserver_OnNetworkListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkListObserver.OnNetworkListChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'active_guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.NetworkListObserverPtr = ash.diagnostics.mojom.NetworkListObserverRemote;
ash.diagnostics.mojom.NetworkListObserverRequest = ash.diagnostics.mojom.NetworkListObserverPendingReceiver;


// Interface: NetworkStateObserver
ash.diagnostics.mojom.NetworkStateObserver = {};

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
      [network]);
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

// ParamsSpec for OnNetworkStateChanged
ash.diagnostics.mojom.NetworkStateObserver_OnNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkStateObserver.OnNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.NetworkStateObserverPtr = ash.diagnostics.mojom.NetworkStateObserverRemote;
ash.diagnostics.mojom.NetworkStateObserverRequest = ash.diagnostics.mojom.NetworkStateObserverPendingReceiver;


// Interface: NetworkHealthProvider
ash.diagnostics.mojom.NetworkHealthProvider = {};

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
      [observer]);
  }

  observeNetwork(observer, guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec,
      null,
      [observer, guid]);
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

// ParamsSpec for ObserveNetworkList
ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetworkList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkHealthProvider.ObserveNetworkList_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveNetwork
ash.diagnostics.mojom.NetworkHealthProvider_ObserveNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.NetworkHealthProvider.ObserveNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.NetworkHealthProviderPtr = ash.diagnostics.mojom.NetworkHealthProviderRemote;
ash.diagnostics.mojom.NetworkHealthProviderRequest = ash.diagnostics.mojom.NetworkHealthProviderPendingReceiver;

