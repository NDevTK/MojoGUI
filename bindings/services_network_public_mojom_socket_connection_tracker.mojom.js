// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_connection_tracker.mojom
// Module: network.mojom

'use strict';

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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.SocketConnectionTrackerReceiver = network.mojom.SocketConnectionTrackerReceiver;

network.mojom.SocketConnectionTrackerPtr = network.mojom.SocketConnectionTrackerRemote;
network.mojom.SocketConnectionTrackerRequest = network.mojom.SocketConnectionTrackerPendingReceiver;

