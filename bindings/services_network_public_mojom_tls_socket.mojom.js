// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.TLSClientSocketOptionsSpec = { $: {} };
network.mojom.TLSClientSocket = {};
network.mojom.TLSClientSocket.$interfaceName = 'network.mojom.TLSClientSocket';

// Struct: TLSClientSocketOptions
mojo.internal.Struct(
    network.mojom.TLSClientSocketOptionsSpec, 'network.mojom.TLSClientSocketOptions', [
      mojo.internal.StructField('version_min', 0, 0, network.mojom.SSLVersionSpec, 0, false, 0, undefined),
      mojo.internal.StructField('version_max', 4, 0, network.mojom.SSLVersionSpec, 0, false, 0, undefined),
      mojo.internal.StructField('send_ssl_info', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unsafely_skip_cert_verification', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TLSClientSocket
network.mojom.TLSClientSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TLSClientSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TLSClientSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TLSClientSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TLSClientSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TLSClientSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.TLSClientSocket.getRemote = function() {
  let remote = new network.mojom.TLSClientSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TLSClientSocket',
    'context');
  return remote.$;
};

network.mojom.TLSClientSocketPtr = network.mojom.TLSClientSocketRemote;
network.mojom.TLSClientSocketRequest = network.mojom.TLSClientSocketPendingReceiver;

