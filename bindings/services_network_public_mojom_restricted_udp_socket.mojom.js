// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_udp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: RestrictedUDPSocketMode
network.mojom.RestrictedUDPSocketMode = {
  CONNECTED: 0,
  BOUND: 1,
};

// Struct: RestrictedUDPSocketParams
network.mojom.RestrictedUDPSocketParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocketParams',
      packedSize: 24,
      fields: [
        { name: 'socket_options', packedOffset: 0, packedBitOffset: 0, type: network.mojom.UDPSocketOptionsSpec, nullable: true },
        { name: 'connection_tracker', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: RestrictedUDPSocket
network.mojom.RestrictedUDPSocket = {};

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
      [group_address]);
  }

  leaveGroup(group_address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec,
      network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec,
      [group_address]);
  }

  receiveMore(num_additional_datagrams) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec,
      null,
      [num_additional_datagrams]);
  }

  send(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.RestrictedUDPSocket_Send_ParamsSpec,
      network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec,
      [data]);
  }

  sendTo(data, dest_addr, dns_query_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec,
      network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec,
      [data, dest_addr, dns_query_type]);
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

// ParamsSpec for JoinGroup
network.mojom.RestrictedUDPSocket_JoinGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.JoinGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.RestrictedUDPSocket_JoinGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.JoinGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LeaveGroup
network.mojom.RestrictedUDPSocket_LeaveGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.LeaveGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.RestrictedUDPSocket_LeaveGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.LeaveGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReceiveMore
network.mojom.RestrictedUDPSocket_ReceiveMore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.ReceiveMore_Params',
      packedSize: 16,
      fields: [
        { name: 'num_additional_datagrams', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Send
network.mojom.RestrictedUDPSocket_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.Send_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.RestrictedUDPSocket_Send_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.Send_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendTo
network.mojom.RestrictedUDPSocket_SendTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.SendTo_Params',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'dest_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'dns_query_type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.RestrictedUDPSocket_SendTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedUDPSocket.SendTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.RestrictedUDPSocketPtr = network.mojom.RestrictedUDPSocketRemote;
network.mojom.RestrictedUDPSocketRequest = network.mojom.RestrictedUDPSocketPendingReceiver;

