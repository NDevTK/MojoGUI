// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var url = url || {};


// Struct: IceServer
sharing.mojom.mojom.IceServerSpec = {
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
sharing.mojom.mojom.WebRtcDependenciesSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WebRtcDependencies',
      packedSize: 24,
      fields: [
        { name: 'socket_manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'mdns_responder_factory', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'ice_config_fetcher', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'messenger', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: IceConfigFetcher
sharing.mojom.mojom.IceConfigFetcher = {};

sharing.mojom.mojom.IceConfigFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.IceConfigFetcherRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IceConfigFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.IceConfigFetcherPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.IceConfigFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.IceConfigFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIceServers() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.IceConfigFetcher_GetIceServers_ParamsSpec,
      sharing.mojom.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec,
      []);
  }

};

sharing.mojom.mojom.IceConfigFetcher.getRemote = function() {
  let remote = new sharing.mojom.mojom.IceConfigFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IceConfigFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for GetIceServers
sharing.mojom.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = {
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

sharing.mojom.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec = {
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
sharing.mojom.mojom.IceConfigFetcherPtr = sharing.mojom.mojom.IceConfigFetcherRemote;
sharing.mojom.mojom.IceConfigFetcherRequest = sharing.mojom.mojom.IceConfigFetcherPendingReceiver;


// Interface: MdnsResponderFactory
sharing.mojom.mojom.MdnsResponderFactory = {};

sharing.mojom.mojom.MdnsResponderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.MdnsResponderFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsResponderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.MdnsResponderFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.MdnsResponderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.MdnsResponderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver]);
  }

};

sharing.mojom.mojom.MdnsResponderFactory.getRemote = function() {
  let remote = new sharing.mojom.mojom.MdnsResponderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsResponderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateMdnsResponder
sharing.mojom.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsResponderFactory.CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.MdnsResponderFactoryPtr = sharing.mojom.mojom.MdnsResponderFactoryRemote;
sharing.mojom.mojom.MdnsResponderFactoryRequest = sharing.mojom.mojom.MdnsResponderFactoryPendingReceiver;

