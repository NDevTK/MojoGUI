// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/keep_alive.mojom
// Module: extensions

// Module namespace
var extensions = extensions || {};

extensions.KeepAlive = {};
extensions.KeepAlive.$interfaceName = 'extensions.KeepAlive';

// Interface: KeepAlive
extensions.KeepAlivePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.KeepAliveRemote = class {
  static get $interfaceName() {
    return 'extensions.KeepAlive';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.KeepAlivePendingReceiver,
      handle);
    this.$ = new extensions.KeepAliveRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.KeepAliveRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeepAlive', [
    ]);
  }

};

extensions.KeepAlive.getRemote = function() {
  let remote = new extensions.KeepAliveRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.KeepAlive',
    'context');
  return remote.$;
};

extensions.KeepAliveReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeepAlive', [
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

extensions.KeepAliveReceiver = extensions.KeepAliveReceiver;

extensions.KeepAlivePtr = extensions.KeepAliveRemote;
extensions.KeepAliveRequest = extensions.KeepAlivePendingReceiver;

