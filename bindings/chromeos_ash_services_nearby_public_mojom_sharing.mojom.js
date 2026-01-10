// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/sharing.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: WifiLanDependencies
sharing.mojom.mojom.WifiLanDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiLanDependencies',
      packedSize: 24,
      fields: [
        { name: 'cros_network_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'firewall_hole_factory', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'tcp_socket_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'mdns_manager', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WifiDirectDependencies
sharing.mojom.mojom.WifiDirectDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiDirectDependencies',
      packedSize: 16,
      fields: [
        { name: 'wifi_direct_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'firewall_hole_factory', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NearbyDependencies
sharing.mojom.mojom.NearbyDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbyDependencies',
      packedSize: 40,
      fields: [
        { name: 'bluetooth_adapter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'webrtc_dependencies', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.WebRtcDependenciesSpec, nullable: false, minVersion: 0 },
        { name: 'wifilan_dependencies', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.WifiLanDependenciesSpec, nullable: true, minVersion: 0 },
        { name: 'wifidirect_dependencies', packedOffset: 16, packedBitOffset: 0, type: sharing.mojom.WifiDirectDependenciesSpec, nullable: true, minVersion: 0 },
        { name: 'nearby_presence_credential_storage', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: Sharing
sharing.mojom.mojom.Sharing = {};

sharing.mojom.mojom.SharingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.SharingRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.Sharing';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.SharingPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.SharingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.SharingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(deps, nearby_connections, nearby_presence, decoder, quick_start_decoder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.Sharing_Connect_ParamsSpec,
      null,
      [deps, nearby_connections, nearby_presence, decoder, quick_start_decoder]);
  }

  shutDown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.mojom.Sharing_ShutDown_ParamsSpec,
      null,
      []);
  }

};

sharing.mojom.mojom.Sharing.getRemote = function() {
  let remote = new sharing.mojom.mojom.SharingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.Sharing',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
sharing.mojom.mojom.Sharing_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Sharing.Connect_Params',
      packedSize: 32,
      fields: [
        { name: 'deps', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.NearbyDependenciesSpec, nullable: false, minVersion: 0 },
        { name: 'nearby_connections', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'nearby_presence', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'decoder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'quick_start_decoder', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShutDown
sharing.mojom.mojom.Sharing_ShutDown_ParamsSpec = {
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
sharing.mojom.mojom.SharingPtr = sharing.mojom.mojom.SharingRemote;
sharing.mojom.mojom.SharingRequest = sharing.mojom.mojom.SharingPendingReceiver;

