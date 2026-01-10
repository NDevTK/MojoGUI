// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TLSClientSocketOptions
network.mojom.mojom.TLSClientSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TLSClientSocketOptions',
      packedSize: 24,
      fields: [
        { name: 'version_min', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SSLVersionSpec, nullable: false, minVersion: 0 },
        { name: 'version_max', packedOffset: 4, packedBitOffset: 0, type: network.mojom.SSLVersionSpec, nullable: false, minVersion: 0 },
        { name: 'send_ssl_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unsafely_skip_cert_verification', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TLSClientSocket
network.mojom.mojom.TLSClientSocket = {};

network.mojom.mojom.TLSClientSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.TLSClientSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TLSClientSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.TLSClientSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.TLSClientSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.TLSClientSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.mojom.TLSClientSocket.getRemote = function() {
  let remote = new network.mojom.mojom.TLSClientSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TLSClientSocket',
    'context');
  return remote.$;
};

// Legacy compatibility
network.mojom.mojom.TLSClientSocketPtr = network.mojom.mojom.TLSClientSocketRemote;
network.mojom.mojom.TLSClientSocketRequest = network.mojom.mojom.TLSClientSocketPendingReceiver;

