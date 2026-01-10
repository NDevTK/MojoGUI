// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_broker.mojom
// Module: network.mojom

'use strict';

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
};

network.mojom.SocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTcpSocket(address_family) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec,
      [address_family],
      false);
  }

  createUdpSocket(address_family) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: CreateTcpSocket
        try {
             decoder.decodeStruct(network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTcpSocket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: CreateUdpSocket
        try {
             decoder.decodeStruct(network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUdpSocket (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createTcpSocket');
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
          const params = decoder.decodeStruct(network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createUdpSocket');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.SocketBrokerReceiver = network.mojom.SocketBrokerReceiver;

network.mojom.SocketBrokerPtr = network.mojom.SocketBrokerRemote;
network.mojom.SocketBrokerRequest = network.mojom.SocketBrokerPendingReceiver;

