// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_broker.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SocketBroker = {};
network.mojom.SocketBroker.$interfaceName = 'network.mojom.SocketBroker';
network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec = { $: {} };
network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec = { $: {} };

// Interface: SocketBroker
mojo.internal.Struct(
    network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec, 'network.mojom.SocketBroker_CreateTcpSocket_Params', [
      mojo.internal.StructField('address_family', 0, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec, 'network.mojom.SocketBroker_CreateTcpSocket_ResponseParams', [
      mojo.internal.StructField('created_socket', 0, 0, network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rv', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec, 'network.mojom.SocketBroker_CreateUdpSocket_Params', [
      mojo.internal.StructField('address_family', 0, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec, 'network.mojom.SocketBroker_CreateUdpSocket_ResponseParams', [
      mojo.internal.StructField('created_socket', 0, 0, network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rv', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.SocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketBrokerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketBrokerPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createTcpSocket(address_family) {
    return this.$.createTcpSocket(address_family);
  }
  createUdpSocket(address_family) {
    return this.$.createUdpSocket(address_family);
  }
};

network.mojom.SocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SocketBroker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createTcpSocket(address_family) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec,
      [address_family],
      false);
  }

  createUdpSocket(address_family) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec,
      [address_family],
      false);
  }

};

network.mojom.SocketBroker.getRemote = function() {
  let remote = new network.mojom.SocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketBroker',
    'context');
  return remote.$;
};

network.mojom.SocketBrokerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SocketBroker', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec.$.structSpec);
          const result = this.impl.createTcpSocket(params.address_family);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec.$.structSpec);
          const result = this.impl.createUdpSocket(params.address_family);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SocketBrokerReceiver = network.mojom.SocketBrokerReceiver;

network.mojom.SocketBrokerPtr = network.mojom.SocketBrokerRemote;
network.mojom.SocketBrokerRequest = network.mojom.SocketBrokerPendingReceiver;

