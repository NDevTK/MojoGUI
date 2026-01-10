// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TLSClientSocketOptionsSpec = { $: {} };
network.mojom.TLSClientSocket = {};
network.mojom.TLSClientSocket.$interfaceName = 'network.mojom.TLSClientSocket';

// Struct: TLSClientSocketOptions
mojo.internal.Struct(
    network.mojom.TLSClientSocketOptionsSpec, 'network.mojom.TLSClientSocketOptions', [
      mojo.internal.StructField('version_min', 0, 0, network.mojom.SSLVersionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('version_max', 8, 0, network.mojom.SSLVersionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('send_ssl_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unsafely_skip_cert_verification', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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

network.mojom.TLSClientSocketReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
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

network.mojom.TLSClientSocketReceiver = network.mojom.TLSClientSocketReceiver;

network.mojom.TLSClientSocketPtr = network.mojom.TLSClientSocketRemote;
network.mojom.TLSClientSocketRequest = network.mojom.TLSClientSocketPendingReceiver;

