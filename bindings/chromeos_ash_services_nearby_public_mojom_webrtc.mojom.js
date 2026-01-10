// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var url = url || {};


// Struct: IceServer
sharing.mojom.IceServerSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceServer',
      packedSize: 32,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'username', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'credential', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WebRtcDependencies
sharing.mojom.WebRtcDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcDependencies',
      packedSize: 40,
      fields: [
        { name: 'socket_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.P2PSocketManagerRemote), nullable: false, minVersion: 0 },
        { name: 'mdns_responder_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.MdnsResponderFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'ice_config_fetcher', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.IceConfigFetcherRemote), nullable: false, minVersion: 0 },
        { name: 'messenger', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.WebRtcSignalingMessengerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: IceConfigFetcher
sharing.mojom.IceConfigFetcher = {};

sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceConfigFetcher_GetIceServers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

sharing.mojom.IceConfigFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.IceConfigFetcherRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IceConfigFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.IceConfigFetcherPendingReceiver,
      handle);
    this.$ = new sharing.mojom.IceConfigFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.IceConfigFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIceServers() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec,
      sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec,
      []);
  }

};

sharing.mojom.IceConfigFetcher.getRemote = function() {
  let remote = new sharing.mojom.IceConfigFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IceConfigFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for GetIceServers
sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceConfigFetcher.GetIceServers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceConfigFetcher.GetIceServers_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ice_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(sharing.mojom.IceServerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.IceConfigFetcherPtr = sharing.mojom.IceConfigFetcherRemote;
sharing.mojom.IceConfigFetcherRequest = sharing.mojom.IceConfigFetcherPendingReceiver;


// Interface: MdnsResponderFactory
sharing.mojom.MdnsResponderFactory = {};

sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.MdnsResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sharing.mojom.MdnsResponderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsResponderFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsResponderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsResponderFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsResponderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsResponderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver]);
  }

};

sharing.mojom.MdnsResponderFactory.getRemote = function() {
  let remote = new sharing.mojom.MdnsResponderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsResponderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateMdnsResponder
sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsResponderFactory.CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.MdnsResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.MdnsResponderFactoryPtr = sharing.mojom.MdnsResponderFactoryRemote;
sharing.mojom.MdnsResponderFactoryRequest = sharing.mojom.MdnsResponderFactoryPendingReceiver;

