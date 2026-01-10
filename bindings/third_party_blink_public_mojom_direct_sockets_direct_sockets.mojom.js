// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/direct_sockets/direct_sockets.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DirectTCPSocketOptions
blink.mojom.mojom.DirectTCPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectTCPSocketOptions',
      packedSize: 40,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false, minVersion: 0 },
        { name: 'send_buffer_size_$flag', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' } },
        { name: 'send_buffer_size_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' } },
        { name: 'receive_buffer_size_$flag', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' } },
        { name: 'receive_buffer_size_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' } },
        { name: 'no_delay', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keep_alive_options', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TCPKeepAliveOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'dns_query_type', packedOffset: 24, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DirectConnectedUDPSocketOptions
blink.mojom.mojom.DirectConnectedUDPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectConnectedUDPSocketOptions',
      packedSize: 32,
      fields: [
        { name: 'remote_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false, minVersion: 0 },
        { name: 'send_buffer_size_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' } },
        { name: 'send_buffer_size_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' } },
        { name: 'receive_buffer_size_$flag', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' } },
        { name: 'receive_buffer_size_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' } },
        { name: 'dns_query_type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DnsQueryTypeSpec, nullable: true, minVersion: 0 },
        { name: 'multicast_time_to_live_$flag', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' } },
        { name: 'multicast_time_to_live_$value', packedOffset: 21, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' } },
        { name: 'multicast_loopback_$flag', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' } },
        { name: 'multicast_loopback_$value', packedOffset: 20, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DirectBoundUDPSocketOptions
blink.mojom.mojom.DirectBoundUDPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectBoundUDPSocketOptions',
      packedSize: 32,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'send_buffer_size_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' } },
        { name: 'send_buffer_size_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' } },
        { name: 'receive_buffer_size_$flag', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' } },
        { name: 'receive_buffer_size_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' } },
        { name: 'ipv6_only_$flag', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' } },
        { name: 'ipv6_only_$value', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' } },
        { name: 'multicast_allow_address_sharing_$flag', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'multicast_allow_address_sharing_$value', originalFieldName: 'multicast_allow_address_sharing' } },
        { name: 'multicast_allow_address_sharing_$value', packedOffset: 16, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'multicast_allow_address_sharing_$flag', originalFieldName: 'multicast_allow_address_sharing' } },
        { name: 'multicast_time_to_live_$flag', packedOffset: 16, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' } },
        { name: 'multicast_time_to_live_$value', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' } },
        { name: 'multicast_loopback_$flag', packedOffset: 16, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' } },
        { name: 'multicast_loopback_$value', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DirectTCPServerSocketOptions
blink.mojom.mojom.DirectTCPServerSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectTCPServerSocketOptions',
      packedSize: 24,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'ipv6_only_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' } },
        { name: 'ipv6_only_$value', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' } },
        { name: 'backlog_$flag', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'backlog_$value', originalFieldName: 'backlog' } },
        { name: 'backlog_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'backlog_$flag', originalFieldName: 'backlog' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: DirectSocketsService
blink.mojom.mojom.DirectSocketsService = {};

blink.mojom.mojom.DirectSocketsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DirectSocketsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DirectSocketsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DirectSocketsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DirectSocketsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DirectSocketsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openTCPSocket(options, receiver, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec,
      blink.mojom.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec,
      [options, receiver, observer]);
  }

  openConnectedUDPSocket(options, receiver, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec,
      blink.mojom.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec,
      [options, receiver, listener]);
  }

  openBoundUDPSocket(options, receiver, listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec,
      blink.mojom.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec,
      [options, receiver, listener]);
  }

  openTCPServerSocket(options, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec,
      blink.mojom.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec,
      [options, receiver]);
  }

};

blink.mojom.mojom.DirectSocketsService.getRemote = function() {
  let remote = new blink.mojom.mojom.DirectSocketsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DirectSocketsService',
    'context');
  return remote.$;
};

// ParamsSpec for OpenTCPSocket
blink.mojom.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPSocket_Params',
      packedSize: 32,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DirectTCPSocketOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'peer_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for OpenConnectedUDPSocket
blink.mojom.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenConnectedUDPSocket_Params',
      packedSize: 32,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DirectConnectedUDPSocketOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenConnectedUDPSocket_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'peer_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OpenBoundUDPSocket
blink.mojom.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenBoundUDPSocket_Params',
      packedSize: 32,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DirectBoundUDPSocketOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenBoundUDPSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenTCPServerSocket
blink.mojom.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPServerSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DirectTCPServerSocketOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DirectSocketsServicePtr = blink.mojom.mojom.DirectSocketsServiceRemote;
blink.mojom.mojom.DirectSocketsServiceRequest = blink.mojom.mojom.DirectSocketsServicePendingReceiver;

