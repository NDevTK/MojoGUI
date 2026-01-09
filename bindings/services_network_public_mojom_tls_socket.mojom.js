// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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

// Legacy compatibility
network.mojom.TLSClientSocketPtr = network.mojom.TLSClientSocketRemote;
network.mojom.TLSClientSocketRequest = network.mojom.TLSClientSocketPendingReceiver;

