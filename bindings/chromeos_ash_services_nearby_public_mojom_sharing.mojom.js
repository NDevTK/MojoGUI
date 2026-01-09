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
      packedSize: 16,
      fields: [
        { name: 'mdns_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiDirectDependencies
sharing.mojom.WifiDirectDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiDirectDependencies',
      packedSize: 16,
      fields: [
        { name: 'firewall_hole_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NearbyDependencies
sharing.mojom.NearbyDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.NearbyDependencies',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: Sharing
sharing.mojom.Sharing = {};

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
      packedSize: 32,
      fields: [
        { name: 'deps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'nearby_connections', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'nearby_presence', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'decoder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'quick_start_decoder', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.SharingPtr = sharing.mojom.SharingRemote;
sharing.mojom.SharingRequest = sharing.mojom.SharingPendingReceiver;

