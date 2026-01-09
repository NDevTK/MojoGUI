// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/udp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: UDPSocket
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
};

network.mojom.UDPSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bind(local_addr, socket_options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.UDPSocket_Bind_ParamsSpec.$,
      network.mojom.UDPSocket_Bind_ResponseParamsSpec.$,
      [local_addr, socket_options]);
  }

  connect(remote_addr, socket_options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.UDPSocket_Connect_ParamsSpec.$,
      network.mojom.UDPSocket_Connect_ResponseParamsSpec.$,
      [remote_addr, socket_options]);
  }

  setBroadcast(broadcast) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.UDPSocket_SetBroadcast_ParamsSpec.$,
      network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec.$,
      [broadcast]);
  }

  setSendBufferSize(send_buffer_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec.$,
      network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec.$,
      [send_buffer_size]);
  }

  setReceiveBufferSize(receive_buffer_size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec.$,
      network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec.$,
      [receive_buffer_size]);
  }

  joinGroup(group_address) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.UDPSocket_JoinGroup_ParamsSpec.$,
      network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec.$,
      [group_address]);
  }

  leaveGroup(group_address) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.UDPSocket_LeaveGroup_ParamsSpec.$,
      network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec.$,
      [group_address]);
  }

  receiveMore(num_additional_datagrams) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.UDPSocket_ReceiveMore_ParamsSpec.$,
      null,
      [num_additional_datagrams]);
  }

  receiveMoreWithBufferSize(num_additional_datagrams, buffer_size) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec.$,
      null,
      [num_additional_datagrams, buffer_size]);
  }

  sendTo(dest_addr, data, traffic_annotation) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.UDPSocket_SendTo_ParamsSpec.$,
      network.mojom.UDPSocket_SendTo_ResponseParamsSpec.$,
      [dest_addr, data, traffic_annotation]);
  }

  send(data, traffic_annotation) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.UDPSocket_Send_ParamsSpec.$,
      network.mojom.UDPSocket_Send_ResponseParamsSpec.$,
      [data, traffic_annotation]);
  }

  close() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.UDPSocket_Close_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for Bind
network.mojom.UDPSocket_Bind_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Bind_Params',
      packedSize: 24,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket_options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_Bind_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Bind_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Connect
network.mojom.UDPSocket_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'socket_options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Connect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetBroadcast
network.mojom.UDPSocket_SetBroadcast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetBroadcast_Params',
      packedSize: 16,
      fields: [
        { name: 'broadcast', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_SetBroadcast_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetBroadcast_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSendBufferSize
network.mojom.UDPSocket_SetSendBufferSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetSendBufferSize_Params',
      packedSize: 16,
      fields: [
        { name: 'send_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_SetSendBufferSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetSendBufferSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetReceiveBufferSize
network.mojom.UDPSocket_SetReceiveBufferSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetReceiveBufferSize_Params',
      packedSize: 16,
      fields: [
        { name: 'receive_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_SetReceiveBufferSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SetReceiveBufferSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for JoinGroup
network.mojom.UDPSocket_JoinGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.JoinGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_JoinGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.JoinGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LeaveGroup
network.mojom.UDPSocket_LeaveGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.LeaveGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_LeaveGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.LeaveGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReceiveMore
network.mojom.UDPSocket_ReceiveMore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.ReceiveMore_Params',
      packedSize: 16,
      fields: [
        { name: 'num_additional_datagrams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReceiveMoreWithBufferSize
network.mojom.UDPSocket_ReceiveMoreWithBufferSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.ReceiveMoreWithBufferSize_Params',
      packedSize: 24,
      fields: [
        { name: 'num_additional_datagrams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buffer_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SendTo
network.mojom.UDPSocket_SendTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SendTo_Params',
      packedSize: 32,
      fields: [
        { name: 'dest_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_SendTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.SendTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Send
network.mojom.UDPSocket_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Send_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.UDPSocket_Send_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Send_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Close
network.mojom.UDPSocket_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocket.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.UDPSocketPtr = network.mojom.UDPSocketRemote;
network.mojom.UDPSocketRequest = network.mojom.UDPSocketPendingReceiver;


// Interface: UDPSocketListener
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
};

network.mojom.UDPSocketListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceived(result, src_addr, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.UDPSocketListener_OnReceived_ParamsSpec.$,
      null,
      [result, src_addr, data]);
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
}};

// ParamsSpec for OnReceived
network.mojom.UDPSocketListener_OnReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UDPSocketListener.OnReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'src_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.UDPSocketListenerPtr = network.mojom.UDPSocketListenerRemote;
network.mojom.UDPSocketListenerRequest = network.mojom.UDPSocketListenerPendingReceiver;

