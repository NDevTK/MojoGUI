// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tcp_socket.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TCPKeepAliveOptionsSpec = { $: {} };
network.mojom.TCPConnectedSocketOptionsSpec = { $: {} };
network.mojom.TCPServerSocketOptionsSpec = { $: {} };
network.mojom.TCPBoundSocket = {};
network.mojom.TCPBoundSocket.$interfaceName = 'network.mojom.TCPBoundSocket';
network.mojom.TCPBoundSocket_Listen_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket = {};
network.mojom.TCPConnectedSocket.$interfaceName = 'network.mojom.TCPConnectedSocket';
network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec = { $: {} };
network.mojom.SocketObserver = {};
network.mojom.SocketObserver.$interfaceName = 'network.mojom.SocketObserver';
network.mojom.SocketObserver_OnReadError_ParamsSpec = { $: {} };
network.mojom.SocketObserver_OnWriteError_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket = {};
network.mojom.TCPServerSocket.$interfaceName = 'network.mojom.TCPServerSocket';
network.mojom.TCPServerSocket_Accept_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket_Accept_ResponseParamsSpec = { $: {} };

// Struct: TCPKeepAliveOptions
mojo.internal.Struct(
    network.mojom.TCPKeepAliveOptionsSpec, 'network.mojom.TCPKeepAliveOptions', [
      mojo.internal.StructField('delay', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('enable', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TCPConnectedSocketOptions
mojo.internal.Struct(
    network.mojom.TCPConnectedSocketOptionsSpec, 'network.mojom.TCPConnectedSocketOptions', [
      mojo.internal.StructField('keep_alive_options', 0, 0, network.mojom.TCPKeepAliveOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('send_buffer_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_buffer_size', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('no_delay', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TCPServerSocketOptions
mojo.internal.Struct(
    network.mojom.TCPServerSocketOptionsSpec, 'network.mojom.TCPServerSocketOptions', [
      mojo.internal.StructField('connection_tracker', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketConnectionTrackerRemote), null, true, 0, undefined),
      mojo.internal.StructField('backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
    ],
    [[0, 24]]);

// Interface: TCPBoundSocket
mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ParamsSpec, 'network.mojom.TCPBoundSocket_Listen_Params', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('backlog', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Listen_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ParamsSpec, 'network.mojom.TCPBoundSocket_Connect_Params', [
      mojo.internal.StructField('remote_addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 8, 0, network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socket', 16, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Connect_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPBoundSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPBoundSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPBoundSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPBoundSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPBoundSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  listen(backlog, socket) {
    return this.$.listen(backlog, socket);
  }
  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    return this.$.connect(remote_addr_list, tcp_connected_socket_options, socket, observer);
  }
};

network.mojom.TCPBoundSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPBoundSocket', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  listen(backlog, socket) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPBoundSocket_Listen_ParamsSpec,
      network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec,
      [backlog, socket],
      false);
  }

  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.TCPBoundSocket_Connect_ParamsSpec,
      network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec,
      [remote_addr_list, tcp_connected_socket_options, socket, observer],
      false);
  }

};

network.mojom.TCPBoundSocket.getRemote = function() {
  let remote = new network.mojom.TCPBoundSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPBoundSocket',
    'context');
  return remote.$;
};

network.mojom.TCPBoundSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPBoundSocket', [
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPBoundSocket_Listen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPBoundSocket_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPBoundSocket_Listen_ParamsSpec.$.structSpec);
          const result = this.impl.listen(params.backlog, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPBoundSocket_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.remote_addr_list, params.tcp_connected_socket_options, params.socket, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec);
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

network.mojom.TCPBoundSocketReceiver = network.mojom.TCPBoundSocketReceiver;

network.mojom.TCPBoundSocketPtr = network.mojom.TCPBoundSocketRemote;
network.mojom.TCPBoundSocketRequest = network.mojom.TCPBoundSocketPendingReceiver;


// Interface: TCPConnectedSocket
mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_Params', [
      mojo.internal.StructField('host_port_pair', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, network.mojom.TLSClientSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(network.mojom.TLSClientSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParams', [
      mojo.internal.StructField('receive_stream', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 16, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_Params', [
      mojo.internal.StructField('no_delay', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_Params', [
      mojo.internal.StructField('delay_secs', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.TCPConnectedSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPConnectedSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPConnectedSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPConnectedSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPConnectedSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer) {
    return this.$.upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer);
  }
  setSendBufferSize(send_buffer_size) {
    return this.$.setSendBufferSize(send_buffer_size);
  }
  setReceiveBufferSize(receive_buffer_size) {
    return this.$.setReceiveBufferSize(receive_buffer_size);
  }
  setNoDelay(no_delay) {
    return this.$.setNoDelay(no_delay);
  }
  setKeepAlive(enable, delay_secs) {
    return this.$.setKeepAlive(enable, delay_secs);
  }
};

network.mojom.TCPConnectedSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPConnectedSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec,
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec,
      [host_port_pair, options, traffic_annotation, receiver, observer],
      false);
  }

  setSendBufferSize(send_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size],
      false);
  }

  setReceiveBufferSize(receive_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size],
      false);
  }

  setNoDelay(no_delay) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec,
      [no_delay],
      false);
  }

  setKeepAlive(enable, delay_secs) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec,
      [enable, delay_secs],
      false);
  }

};

network.mojom.TCPConnectedSocket.getRemote = function() {
  let remote = new network.mojom.TCPConnectedSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPConnectedSocket',
    'context');
  return remote.$;
};

network.mojom.TCPConnectedSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPConnectedSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec.$.structSpec);
          const result = this.impl.upgradeToTLS(params.host_port_pair, params.options, params.traffic_annotation, params.receiver, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec.$.structSpec);
          const result = this.impl.setSendBufferSize(params.send_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec.$.structSpec);
          const result = this.impl.setReceiveBufferSize(params.receive_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec.$.structSpec);
          const result = this.impl.setNoDelay(params.no_delay);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec.$.structSpec);
          const result = this.impl.setKeepAlive(params.enable, params.delay_secs);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec);
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

network.mojom.TCPConnectedSocketReceiver = network.mojom.TCPConnectedSocketReceiver;

network.mojom.TCPConnectedSocketPtr = network.mojom.TCPConnectedSocketRemote;
network.mojom.TCPConnectedSocketRequest = network.mojom.TCPConnectedSocketPendingReceiver;


// Interface: SocketObserver
mojo.internal.Struct(
    network.mojom.SocketObserver_OnReadError_ParamsSpec, 'network.mojom.SocketObserver_OnReadError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketObserver_OnWriteError_ParamsSpec, 'network.mojom.SocketObserver_OnWriteError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.SocketObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReadError(net_error) {
    return this.$.onReadError(net_error);
  }
  onWriteError(net_error) {
    return this.$.onWriteError(net_error);
  }
};

network.mojom.SocketObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SocketObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReadError(net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SocketObserver_OnReadError_ParamsSpec,
      null,
      [net_error],
      false);
  }

  onWriteError(net_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.SocketObserver_OnWriteError_ParamsSpec,
      null,
      [net_error],
      false);
  }

};

network.mojom.SocketObserver.getRemote = function() {
  let remote = new network.mojom.SocketObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketObserver',
    'context');
  return remote.$;
};

network.mojom.SocketObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SocketObserver', [
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketObserver_OnReadError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SocketObserver_OnWriteError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SocketObserver_OnReadError_ParamsSpec.$.structSpec);
          const result = this.impl.onReadError(params.net_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SocketObserver_OnWriteError_ParamsSpec.$.structSpec);
          const result = this.impl.onWriteError(params.net_error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SocketObserverReceiver = network.mojom.SocketObserverReceiver;

network.mojom.SocketObserverPtr = network.mojom.SocketObserverRemote;
network.mojom.SocketObserverRequest = network.mojom.SocketObserverPendingReceiver;


// Interface: TCPServerSocket
mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ParamsSpec, 'network.mojom.TCPServerSocket_Accept_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ResponseParamsSpec, 'network.mojom.TCPServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connected_socket', 8, 0, mojo.internal.InterfaceProxy(network.mojom.TCPConnectedSocketRemote), null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPServerSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPServerSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept(observer) {
    return this.$.accept(observer);
  }
};

network.mojom.TCPServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TCPServerSocket', [
      { explicit: null },
    ]);
  }

  accept(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TCPServerSocket_Accept_ParamsSpec,
      network.mojom.TCPServerSocket_Accept_ResponseParamsSpec,
      [observer],
      false);
  }

};

network.mojom.TCPServerSocket.getRemote = function() {
  let remote = new network.mojom.TCPServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPServerSocket',
    'context');
  return remote.$;
};

network.mojom.TCPServerSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TCPServerSocket', [
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TCPServerSocket_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TCPServerSocket_Accept_ParamsSpec.$.structSpec);
          const result = this.impl.accept(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TCPServerSocket_Accept_ResponseParamsSpec);
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

network.mojom.TCPServerSocketReceiver = network.mojom.TCPServerSocketReceiver;

network.mojom.TCPServerSocketPtr = network.mojom.TCPServerSocketRemote;
network.mojom.TCPServerSocketRequest = network.mojom.TCPServerSocketPendingReceiver;

