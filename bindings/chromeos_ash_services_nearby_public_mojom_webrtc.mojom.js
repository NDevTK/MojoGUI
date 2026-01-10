// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};
var url = url || {};
var services = services || {};
var services = services || {};

sharing.mojom.IceServerSpec = { $: {} };
sharing.mojom.WebRtcDependenciesSpec = { $: {} };
sharing.mojom.IceConfigFetcher = {};
sharing.mojom.IceConfigFetcher.$interfaceName = 'sharing.mojom.IceConfigFetcher';
sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = { $: {} };
sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec = { $: {} };
sharing.mojom.MdnsResponderFactory = {};
sharing.mojom.MdnsResponderFactory.$interfaceName = 'sharing.mojom.MdnsResponderFactory';
sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = { $: {} };

// Struct: IceServer
mojo.internal.Struct(
    sharing.mojom.IceServerSpec, 'sharing.mojom.IceServer', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('credential', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebRtcDependencies
mojo.internal.Struct(
    sharing.mojom.WebRtcDependenciesSpec, 'sharing.mojom.WebRtcDependencies', [
      mojo.internal.StructField('socket_manager', 0, 0, mojo.internal.InterfaceProxy(network.mojom.P2PSocketManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('mdns_responder_factory', 8, 0, mojo.internal.InterfaceProxy(sharing.mojom.MdnsResponderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('ice_config_fetcher', 16, 0, mojo.internal.InterfaceProxy(sharing.mojom.IceConfigFetcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('messenger', 24, 0, mojo.internal.InterfaceProxy(sharing.mojom.WebRtcSignalingMessengerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: IceConfigFetcher
mojo.internal.Struct(
    sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec, 'sharing.mojom.IceConfigFetcher_GetIceServers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec, 'sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParams', [
      mojo.internal.StructField('ice_servers', 0, 0, mojo.internal.Array(sharing.mojom.IceServerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

sharing.mojom.IceConfigFetcherPtr = sharing.mojom.IceConfigFetcherRemote;
sharing.mojom.IceConfigFetcherRequest = sharing.mojom.IceConfigFetcherPendingReceiver;


// Interface: MdnsResponderFactory
mojo.internal.Struct(
    sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec, 'sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_Params', [
      mojo.internal.StructField('responder_receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.MdnsResponderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [responder_receiver],
      false);
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

sharing.mojom.MdnsResponderFactoryPtr = sharing.mojom.MdnsResponderFactoryRemote;
sharing.mojom.MdnsResponderFactoryRequest = sharing.mojom.MdnsResponderFactoryPendingReceiver;

