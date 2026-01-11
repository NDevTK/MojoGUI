// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_socket_factory.mojom
// Module: sharing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

sharing.mojom.TcpSocketFactory = {};
sharing.mojom.TcpSocketFactory.$interfaceName = 'sharing.mojom.TcpSocketFactory';
sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec = { $: {} };

// Interface: TcpSocketFactory
mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, sharing.mojom.TcpServerSocketPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 24, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('backlog', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_Params', [
      mojo.internal.StructField('timeout', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_addr_list', 16, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 24, 0, network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 40, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

sharing.mojom.TcpSocketFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.TcpSocketFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.TcpSocketFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.TcpSocketFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.TcpSocketFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket) {
    return this.$.createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket);
  }
  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    return this.$.createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer);
  }
};

sharing.mojom.TcpSocketFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TcpSocketFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, port, backlog, traffic_annotation, socket],
      false);
  }

  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec,
      [timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer],
      false);
  }

};

sharing.mojom.TcpSocketFactory.getRemote = function() {
  let remote = new sharing.mojom.TcpSocketFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.TcpSocketFactory',
    'context');
  return remote.$;
};

sharing.mojom.TcpSocketFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TcpSocketFactory', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec.$.structSpec);
          const result = this.impl.createTCPServerSocket(params.local_addr, params.port, params.backlog, params.traffic_annotation, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec.$.structSpec);
          const result = this.impl.createTCPConnectedSocket(params.timeout, params.local_addr, params.remote_addr_list, params.tcp_connected_socket_options, params.traffic_annotation, params.socket, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec);
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

sharing.mojom.TcpSocketFactoryReceiver = sharing.mojom.TcpSocketFactoryReceiver;

sharing.mojom.TcpSocketFactoryPtr = sharing.mojom.TcpSocketFactoryRemote;
sharing.mojom.TcpSocketFactoryRequest = sharing.mojom.TcpSocketFactoryPendingReceiver;

