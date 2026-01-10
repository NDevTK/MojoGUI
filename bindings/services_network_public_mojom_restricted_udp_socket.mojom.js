// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_udp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.RestrictedUDPSocketModeSpec = { $: mojo.internal.Enum() };
network.mojom.RestrictedUDPSocketParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket = {};
network.mojom.RestrictedUDPSocket.$interfaceName = 'network.mojom.RestrictedUDPSocket';
network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_Send_ParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec = { $: {} };
network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec = { $: {} };

// Enum: RestrictedUDPSocketMode
network.mojom.RestrictedUDPSocketMode = {
  CONNECTED: 0,
  BOUND: 1,
};

// Struct: RestrictedUDPSocketParams
mojo.internal.Struct(
    network.mojom.RestrictedUDPSocketParamsSpec, 'network.mojom.RestrictedUDPSocketParams', [
      mojo.internal.StructField('socket_options', 0, 0, network.mojom.UDPSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection_tracker', 8, 0, mojo.internal.InterfaceProxy(network.mojom.SocketConnectionTrackerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RestrictedUDPSocket
mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec, 'network.mojom.RestrictedUDPSocket_JoinGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParamsSpec, 'network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec, 'network.mojom.RestrictedUDPSocket_LeaveGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec, 'network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec, 'network.mojom.RestrictedUDPSocket_ReceiveMore_Params', [
      mojo.internal.StructField('num_additional_datagrams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_Send_ParamsSpec, 'network.mojom.RestrictedUDPSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec, 'network.mojom.RestrictedUDPSocket_Send_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec, 'network.mojom.RestrictedUDPSocket_SendTo_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dest_addr', 8, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dns_query_type', 16, 0, network.mojom.DnsQueryTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec, 'network.mojom.RestrictedUDPSocket_SendTo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.RestrictedUDPSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.RestrictedUDPSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.RestrictedUDPSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.RestrictedUDPSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.RestrictedUDPSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.RestrictedUDPSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  joinGroup(group_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec,
      network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  leaveGroup(group_address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec,
      network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  receiveMore(num_additional_datagrams) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec,
      null,
      [num_additional_datagrams],
      false);
  }

  send(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.RestrictedUDPSocket_Send_ParamsSpec,
      network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec,
      [data],
      false);
  }

  sendTo(data, dest_addr, dns_query_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec,
      network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec,
      [data, dest_addr, dns_query_type],
      false);
  }

};

network.mojom.RestrictedUDPSocket.getRemote = function() {
  let remote = new network.mojom.RestrictedUDPSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.RestrictedUDPSocket',
    'context');
  return remote.$;
};

network.mojom.RestrictedUDPSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: JoinGroup
        try {
             decoder.decodeStruct(network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JoinGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: LeaveGroup
        try {
             decoder.decodeStruct(network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveGroup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ReceiveMore
        try {
             decoder.decodeStruct(network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceiveMore (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: Send
        try {
             decoder.decodeStruct(network.mojom.RestrictedUDPSocket_Send_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: SendTo
        try {
             decoder.decodeStruct(network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendTo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.joinGroup');
          const result = this.impl.joinGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.leaveGroup');
          const result = this.impl.leaveGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.receiveMore');
          const result = this.impl.receiveMore(params.num_additional_datagrams);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.RestrictedUDPSocket_Send_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendTo');
          const result = this.impl.sendTo(params.data, params.dest_addr, params.dns_query_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec);
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

network.mojom.RestrictedUDPSocketReceiver = network.mojom.RestrictedUDPSocketReceiver;

network.mojom.RestrictedUDPSocketPtr = network.mojom.RestrictedUDPSocketRemote;
network.mojom.RestrictedUDPSocketRequest = network.mojom.RestrictedUDPSocketPendingReceiver;

