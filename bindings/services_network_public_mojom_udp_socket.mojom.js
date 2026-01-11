// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/udp_socket.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.UDPSocketOptionsSpec = { $: {} };
network.mojom.UDPSocket = {};
network.mojom.UDPSocket.$interfaceName = 'network.mojom.UDPSocket';
network.mojom.UDPSocket_Bind_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Bind_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Connect_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Connect_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetBroadcast_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_JoinGroup_ParamsSpec = { $: {} };
network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_LeaveGroup_ParamsSpec = { $: {} };
network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_ReceiveMore_ParamsSpec = { $: {} };
network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SendTo_ParamsSpec = { $: {} };
network.mojom.UDPSocket_SendTo_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Send_ParamsSpec = { $: {} };
network.mojom.UDPSocket_Send_ResponseParamsSpec = { $: {} };
network.mojom.UDPSocket_Close_ParamsSpec = { $: {} };
network.mojom.UDPSocketListener = {};
network.mojom.UDPSocketListener.$interfaceName = 'network.mojom.UDPSocketListener';
network.mojom.UDPSocketListener_OnReceived_ParamsSpec = { $: {} };

// Struct: UDPSocketOptions
mojo.internal.Struct(
    network.mojom.UDPSocketOptionsSpec, 'network.mojom.UDPSocketOptions', [
      mojo.internal.StructField('multicast_interface', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('multicast_time_to_live', 4, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_buffer_size', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_address_reuse', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_broadcast', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_address_sharing_for_multicast', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multicast_loopback_mode', 16, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 16, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 16, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
    ],
    [[0, 32]]);

// Interface: UDPSocket
mojo.internal.Struct(
    network.mojom.UDPSocket_Bind_ParamsSpec, 'network.mojom.UDPSocket_Bind_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_options', 8, 0, network.mojom.UDPSocketOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Bind_ResponseParamsSpec, 'network.mojom.UDPSocket_Bind_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Connect_ParamsSpec, 'network.mojom.UDPSocket_Connect_Params', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_options', 8, 0, network.mojom.UDPSocketOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Connect_ResponseParamsSpec, 'network.mojom.UDPSocket_Connect_ResponseParams', [
      mojo.internal.StructField('local_addr_out', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetBroadcast_ParamsSpec, 'network.mojom.UDPSocket_SetBroadcast_Params', [
      mojo.internal.StructField('broadcast', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec, 'network.mojom.UDPSocket_SetBroadcast_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.UDPSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.UDPSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.UDPSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_JoinGroup_ParamsSpec, 'network.mojom.UDPSocket_JoinGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec, 'network.mojom.UDPSocket_JoinGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_LeaveGroup_ParamsSpec, 'network.mojom.UDPSocket_LeaveGroup_Params', [
      mojo.internal.StructField('group_address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec, 'network.mojom.UDPSocket_LeaveGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_ReceiveMore_ParamsSpec, 'network.mojom.UDPSocket_ReceiveMore_Params', [
      mojo.internal.StructField('num_additional_datagrams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec, 'network.mojom.UDPSocket_ReceiveMoreWithBufferSize_Params', [
      mojo.internal.StructField('num_additional_datagrams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SendTo_ParamsSpec, 'network.mojom.UDPSocket_SendTo_Params', [
      mojo.internal.StructField('dest_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_SendTo_ResponseParamsSpec, 'network.mojom.UDPSocket_SendTo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Send_ParamsSpec, 'network.mojom.UDPSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Send_ResponseParamsSpec, 'network.mojom.UDPSocket_Send_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.UDPSocket_Close_ParamsSpec, 'network.mojom.UDPSocket_Close_Params', [
    ],
    [[0, 8]]);

network.mojom.UDPSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.UDPSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.UDPSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.UDPSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.UDPSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bind(local_addr, socket_options) {
    return this.$.bind(local_addr, socket_options);
  }
  connect(remote_addr, socket_options) {
    return this.$.connect(remote_addr, socket_options);
  }
  setBroadcast(broadcast) {
    return this.$.setBroadcast(broadcast);
  }
  setSendBufferSize(send_buffer_size) {
    return this.$.setSendBufferSize(send_buffer_size);
  }
  setReceiveBufferSize(receive_buffer_size) {
    return this.$.setReceiveBufferSize(receive_buffer_size);
  }
  joinGroup(group_address) {
    return this.$.joinGroup(group_address);
  }
  leaveGroup(group_address) {
    return this.$.leaveGroup(group_address);
  }
  receiveMore(num_additional_datagrams) {
    return this.$.receiveMore(num_additional_datagrams);
  }
  receiveMoreWithBufferSize(num_additional_datagrams, buffer_size) {
    return this.$.receiveMoreWithBufferSize(num_additional_datagrams, buffer_size);
  }
  sendTo(dest_addr, data, traffic_annotation) {
    return this.$.sendTo(dest_addr, data, traffic_annotation);
  }
  send(data, traffic_annotation) {
    return this.$.send(data, traffic_annotation);
  }
  close() {
    return this.$.close();
  }
};

network.mojom.UDPSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UDPSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bind(local_addr, socket_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.UDPSocket_Bind_ParamsSpec,
      network.mojom.UDPSocket_Bind_ResponseParamsSpec,
      [local_addr, socket_options],
      false);
  }

  connect(remote_addr, socket_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.UDPSocket_Connect_ParamsSpec,
      network.mojom.UDPSocket_Connect_ResponseParamsSpec,
      [remote_addr, socket_options],
      false);
  }

  setBroadcast(broadcast) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.UDPSocket_SetBroadcast_ParamsSpec,
      network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec,
      [broadcast],
      false);
  }

  setSendBufferSize(send_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size],
      false);
  }

  setReceiveBufferSize(receive_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size],
      false);
  }

  joinGroup(group_address) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.UDPSocket_JoinGroup_ParamsSpec,
      network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  leaveGroup(group_address) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.UDPSocket_LeaveGroup_ParamsSpec,
      network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec,
      [group_address],
      false);
  }

  receiveMore(num_additional_datagrams) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.UDPSocket_ReceiveMore_ParamsSpec,
      null,
      [num_additional_datagrams],
      false);
  }

  receiveMoreWithBufferSize(num_additional_datagrams, buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec,
      null,
      [num_additional_datagrams, buffer_size],
      false);
  }

  sendTo(dest_addr, data, traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.UDPSocket_SendTo_ParamsSpec,
      network.mojom.UDPSocket_SendTo_ResponseParamsSpec,
      [dest_addr, data, traffic_annotation],
      false);
  }

  send(data, traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      network.mojom.UDPSocket_Send_ParamsSpec,
      network.mojom.UDPSocket_Send_ResponseParamsSpec,
      [data, traffic_annotation],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      network.mojom.UDPSocket_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.UDPSocket.getRemote = function() {
  let remote = new network.mojom.UDPSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.UDPSocket',
    'context');
  return remote.$;
};

network.mojom.UDPSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UDPSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(network.mojom.UDPSocket_Bind_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetBroadcast_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_JoinGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_LeaveGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_SendTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Send_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.UDPSocket_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Bind_ParamsSpec.$.structSpec);
          const result = this.impl.bind(params.local_addr, params.socket_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Bind_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.remote_addr, params.socket_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetBroadcast_ParamsSpec.$.structSpec);
          const result = this.impl.setBroadcast(params.broadcast);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec.$.structSpec);
          const result = this.impl.setSendBufferSize(params.send_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec.$.structSpec);
          const result = this.impl.setReceiveBufferSize(params.receive_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_JoinGroup_ParamsSpec.$.structSpec);
          const result = this.impl.joinGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_LeaveGroup_ParamsSpec.$.structSpec);
          const result = this.impl.leaveGroup(params.group_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMore_ParamsSpec.$.structSpec);
          const result = this.impl.receiveMore(params.num_additional_datagrams);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec.$.structSpec);
          const result = this.impl.receiveMoreWithBufferSize(params.num_additional_datagrams, params.buffer_size);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_SendTo_ParamsSpec.$.structSpec);
          const result = this.impl.sendTo(params.dest_addr, params.data, params.traffic_annotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_SendTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Send_ParamsSpec.$.structSpec);
          const result = this.impl.send(params.data, params.traffic_annotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.UDPSocket_Send_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocket_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.UDPSocketReceiver = network.mojom.UDPSocketReceiver;

network.mojom.UDPSocketPtr = network.mojom.UDPSocketRemote;
network.mojom.UDPSocketRequest = network.mojom.UDPSocketPendingReceiver;


// Interface: UDPSocketListener
mojo.internal.Struct(
    network.mojom.UDPSocketListener_OnReceived_ParamsSpec, 'network.mojom.UDPSocketListener_OnReceived_Params', [
      mojo.internal.StructField('src_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

network.mojom.UDPSocketListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.UDPSocketListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.UDPSocketListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.UDPSocketListenerPendingReceiver,
      handle);
    this.$ = new network.mojom.UDPSocketListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReceived(result, src_addr, data) {
    return this.$.onReceived(result, src_addr, data);
  }
};

network.mojom.UDPSocketListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UDPSocketListener', [
      { explicit: null },
    ]);
  }

  onReceived(result, src_addr, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.UDPSocketListener_OnReceived_ParamsSpec,
      null,
      [result, src_addr, data],
      false);
  }

};

network.mojom.UDPSocketListener.getRemote = function() {
  let remote = new network.mojom.UDPSocketListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.UDPSocketListener',
    'context');
  return remote.$;
};

network.mojom.UDPSocketListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UDPSocketListener', [
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
             decoder.decodeStructInline(network.mojom.UDPSocketListener_OnReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.UDPSocketListener_OnReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onReceived(params.result, params.src_addr, params.data);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.UDPSocketListenerReceiver = network.mojom.UDPSocketListenerReceiver;

network.mojom.UDPSocketListenerPtr = network.mojom.UDPSocketListenerRemote;
network.mojom.UDPSocketListenerRequest = network.mojom.UDPSocketListenerPendingReceiver;

