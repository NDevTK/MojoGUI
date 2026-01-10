// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/sharing.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: WifiLanDependencies
sharing.mojom.WifiLanDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiLanDependencies',
      packedSize: 40,
      fields: [
        { name: 'cros_network_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.network_config.mojom.CrosNetworkConfigRemote), nullable: false, minVersion: 0 },
        { name: 'firewall_hole_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'tcp_socket_factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.TcpSocketFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'mdns_manager', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.MdnsManagerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: WifiDirectDependencies
sharing.mojom.WifiDirectDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiDirectDependencies',
      packedSize: 24,
      fields: [
        { name: 'wifi_direct_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectManagerRemote), nullable: false, minVersion: 0 },
        { name: 'firewall_hole_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NearbyDependencies
sharing.mojom.NearbyDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbyDependencies',
      packedSize: 48,
      fields: [
        { name: 'bluetooth_adapter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(bluetooth.mojom.AdapterRemote), nullable: true, minVersion: 0 },
        { name: 'webrtc_dependencies', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.WebRtcDependenciesSpec, nullable: false, minVersion: 0 },
        { name: 'wifilan_dependencies', packedOffset: 16, packedBitOffset: 0, type: sharing.mojom.WifiLanDependenciesSpec, nullable: true, minVersion: 0 },
        { name: 'wifidirect_dependencies', packedOffset: 24, packedBitOffset: 0, type: sharing.mojom.WifiDirectDependenciesSpec, nullable: true, minVersion: 0 },
        { name: 'nearby_presence_credential_storage', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: Sharing
sharing.mojom.Sharing = {};

sharing.mojom.Sharing_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Sharing_Connect_Params',
      packedSize: 48,
      fields: [
        { name: 'deps', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.NearbyDependenciesSpec, nullable: false, minVersion: 0 },
        { name: 'nearby_connections', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(nearby.connections.mojom.NearbyConnectionsRemote), nullable: false, minVersion: 0 },
        { name: 'nearby_presence', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.nearby.presence.mojom.NearbyPresenceRemote), nullable: false, minVersion: 0 },
        { name: 'decoder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(sharing.mojom.NearbySharingDecoderRemote), nullable: false, minVersion: 0 },
        { name: 'quick_start_decoder', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.quick_start.mojom.QuickStartDecoderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

sharing.mojom.Sharing_ShutDown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Sharing_ShutDown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

sharing.mojom.SharingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.SharingRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.Sharing';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.SharingPendingReceiver,
      handle);
    this.$ = new sharing.mojom.SharingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.SharingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(deps, nearby_connections, nearby_presence, decoder, quick_start_decoder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.Sharing_Connect_ParamsSpec,
      null,
      [deps, nearby_connections, nearby_presence, decoder, quick_start_decoder]);
  }

  shutDown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.Sharing_ShutDown_ParamsSpec,
      null,
      []);
  }

};

sharing.mojom.Sharing.getRemote = function() {
  let remote = new sharing.mojom.SharingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.Sharing',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
sharing.mojom.Sharing_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Sharing.Connect_Params',
      packedSize: 48,
      fields: [
        { name: 'deps', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.NearbyDependenciesSpec, nullable: false, minVersion: 0 },
        { name: 'nearby_connections', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(nearby.connections.mojom.NearbyConnectionsRemote), nullable: false, minVersion: 0 },
        { name: 'nearby_presence', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.nearby.presence.mojom.NearbyPresenceRemote), nullable: false, minVersion: 0 },
        { name: 'decoder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(sharing.mojom.NearbySharingDecoderRemote), nullable: false, minVersion: 0 },
        { name: 'quick_start_decoder', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.quick_start.mojom.QuickStartDecoderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for ShutDown
sharing.mojom.Sharing_ShutDown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Sharing.ShutDown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
sharing.mojom.SharingPtr = sharing.mojom.SharingRemote;
sharing.mojom.SharingRequest = sharing.mojom.SharingPendingReceiver;

