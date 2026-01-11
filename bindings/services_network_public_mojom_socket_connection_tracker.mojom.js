// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_connection_tracker.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SocketConnectionTracker = {};
network.mojom.SocketConnectionTracker.$interfaceName = 'network.mojom.SocketConnectionTracker';

// Interface: SocketConnectionTracker
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
    this.ordinals = window.mojoScrambler.getOrdinals('SocketConnectionTracker', [
    ]);
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

network.mojom.SocketConnectionTrackerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SocketConnectionTracker', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SocketConnectionTrackerReceiver = network.mojom.SocketConnectionTrackerReceiver;

network.mojom.SocketConnectionTrackerPtr = network.mojom.SocketConnectionTrackerRemote;
network.mojom.SocketConnectionTrackerRequest = network.mojom.SocketConnectionTrackerPendingReceiver;

