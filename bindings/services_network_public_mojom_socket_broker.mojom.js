// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_broker.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.SocketBroker = {};
network.mojom.SocketBroker.$interfaceName = 'network.mojom.SocketBroker';
network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec = { $: {} };

// Interface: SocketBroker
mojo.internal.Struct(
    network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec, 'network.mojom.SocketBroker_CreateTcpSocket_Params', [
      mojo.internal.StructField('address_family', 0, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec, 'network.mojom.SocketBroker_CreateTcpSocket_ResponseParams', [
      mojo.internal.StructField('created_socket', 0, 0, network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rv', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec, 'network.mojom.SocketBroker_CreateUdpSocket_Params', [
      mojo.internal.StructField('address_family', 0, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec, 'network.mojom.SocketBroker_CreateUdpSocket_ResponseParams', [
      mojo.internal.StructField('created_socket', 0, 0, network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rv', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.SocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketBrokerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketBrokerPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTcpSocket(address_family) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec,
      [address_family],
      false);
  }

  createUdpSocket(address_family) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec,
      [address_family],
      false);
  }

};

network.mojom.SocketBroker.getRemote = function() {
  let remote = new network.mojom.SocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketBroker',
    'context');
  return remote.$;
};

network.mojom.SocketBrokerPtr = network.mojom.SocketBrokerRemote;
network.mojom.SocketBrokerRequest = network.mojom.SocketBrokerPendingReceiver;

