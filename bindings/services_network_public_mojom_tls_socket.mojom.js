// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

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
    this.ordinals = window.mojoScrambler.getOrdinals('TLSClientSocket', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('TLSClientSocket', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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

network.mojom.TLSClientSocketReceiver = network.mojom.TLSClientSocketReceiver;

network.mojom.TLSClientSocketPtr = network.mojom.TLSClientSocketRemote;
network.mojom.TLSClientSocketRequest = network.mojom.TLSClientSocketPendingReceiver;

