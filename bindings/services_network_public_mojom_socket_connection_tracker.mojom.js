// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_connection_tracker.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SocketConnectionTracker
network.mojom.SocketConnectionTracker = {};

network.mojom.SocketConnectionTrackerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketConnectionTrackerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketConnectionTracker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketConnectionTrackerPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketConnectionTrackerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SocketConnectionTrackerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

network.mojom.SocketConnectionTracker.getRemote = function() {
  let remote = new network.mojom.SocketConnectionTrackerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketConnectionTracker',
    'context');
  return remote.$;
};

// Legacy compatibility
network.mojom.SocketConnectionTrackerPtr = network.mojom.SocketConnectionTrackerRemote;
network.mojom.SocketConnectionTrackerRequest = network.mojom.SocketConnectionTrackerPendingReceiver;

