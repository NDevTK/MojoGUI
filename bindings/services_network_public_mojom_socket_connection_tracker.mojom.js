// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_connection_tracker.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SocketConnectionTracker
network.mojom.mojom.SocketConnectionTracker = {};

network.mojom.mojom.SocketConnectionTrackerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.SocketConnectionTrackerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketConnectionTracker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.SocketConnectionTrackerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.SocketConnectionTrackerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.SocketConnectionTrackerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.mojom.SocketConnectionTracker.getRemote = function() {
  let remote = new network.mojom.mojom.SocketConnectionTrackerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketConnectionTracker',
    'context');
  return remote.$;
};

// Legacy compatibility
network.mojom.mojom.SocketConnectionTrackerPtr = network.mojom.mojom.SocketConnectionTrackerRemote;
network.mojom.mojom.SocketConnectionTrackerRequest = network.mojom.mojom.SocketConnectionTrackerPendingReceiver;

