// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.EcnMarkingSpec = { $: mojo.internal.Enum() };
network.mojom.P2PReceivedPacketSpec = { $: {} };
network.mojom.P2PSendPacketSpec = { $: {} };
network.mojom.P2PNetworkNotificationClient = {};
network.mojom.P2PNetworkNotificationClient.$interfaceName = 'network.mojom.P2PNetworkNotificationClient';
network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager = {};
network.mojom.P2PSocketManager.$interfaceName = 'network.mojom.P2PSocketManager';
network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = { $: {} };
network.mojom.P2PSocketManager_CreateSocket_ParamsSpec = { $: {} };
network.mojom.P2PSocket = {};
network.mojom.P2PSocket.$interfaceName = 'network.mojom.P2PSocket';
network.mojom.P2PSocket_Send_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SendBatch_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SetOption_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient = {};
network.mojom.P2PSocketClient.$interfaceName = 'network.mojom.P2PSocketClient';
network.mojom.P2PSocketClient_SocketCreated_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_DataReceived_ParamsSpec = { $: {} };

// Enum: EcnMarking
network.mojom.EcnMarking = {
  kNotEct: 0,
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};

// Struct: P2PReceivedPacket
mojo.internal.Struct(
    network.mojom.P2PReceivedPacketSpec, 'network.mojom.P2PReceivedPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ecn', 24, 0, network.mojom.EcnMarkingSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: P2PSendPacket
mojo.internal.Struct(
    network.mojom.P2PSendPacketSpec, 'network.mojom.P2PSendPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: P2PNetworkNotificationClient
mojo.internal.Struct(
    network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec, 'network.mojom.P2PNetworkNotificationClient_NetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(network.mojom.NetworkInterfaceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_ipv4_local_address', 8, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_ipv6_local_address', 16, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

network.mojom.P2PNetworkNotificationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PNetworkNotificationClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PNetworkNotificationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PNetworkNotificationClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PNetworkNotificationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    return this.$.networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address);
  }
};

network.mojom.P2PNetworkNotificationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PNetworkNotificationClient', [
      { explicit: null },
    ]);
  }

  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec,
      null,
      [networks, default_ipv4_local_address, default_ipv6_local_address],
      false);
  }

};

network.mojom.P2PNetworkNotificationClient.getRemote = function() {
  let remote = new network.mojom.P2PNetworkNotificationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PNetworkNotificationClient',
    'context');
  return remote.$;
};

network.mojom.P2PNetworkNotificationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PNetworkNotificationClient', [
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
             decoder.decodeStructInline(network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec.$.structSpec);
          const result = this.impl.networkListChanged(params.networks, params.default_ipv4_local_address, params.default_ipv6_local_address);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.P2PNetworkNotificationClientReceiver = network.mojom.P2PNetworkNotificationClientReceiver;

network.mojom.P2PNetworkNotificationClientPtr = network.mojom.P2PNetworkNotificationClientRemote;
network.mojom.P2PNetworkNotificationClientRequest = network.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
mojo.internal.Struct(
    network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec, 'network.mojom.P2PSocketManager_StartNetworkNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.P2PNetworkNotificationClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_Params', [
      mojo.internal.StructField('host_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address_family', 8, 0, network.mojom.AddressFamilySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enable_mdns', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_ResponseParams', [
      mojo.internal.StructField('addresses', 0, 0, mojo.internal.Array(network.mojom.IPAddressSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_CreateSocket_ParamsSpec, 'network.mojom.P2PSocketManager_CreateSocket_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.P2PSocketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_range', 16, 0, network.mojom.P2PPortRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 24, 0, network.mojom.P2PHostAndIPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client', 48, 0, mojo.internal.InterfaceProxy(network.mojom.P2PSocketClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('socket', 56, 0, mojo.internal.InterfaceRequest(network.mojom.P2PSocketRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

network.mojom.P2PSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startNetworkNotifications(client) {
    return this.$.startNetworkNotifications(client);
  }
  getHostAddress(host_name, address_family, enable_mdns) {
    return this.$.getHostAddress(host_name, address_family, enable_mdns);
  }
  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    return this.$.createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket);
  }
};

network.mojom.P2PSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocketManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startNetworkNotifications(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec,
      null,
      [client],
      false);
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [host_name, address_family, enable_mdns],
      false);
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket],
      false);
  }

};

network.mojom.P2PSocketManager.getRemote = function() {
  let remote = new network.mojom.P2PSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketManager',
    'context');
  return remote.$;
};

network.mojom.P2PSocketManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocketManager', [
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
             decoder.decodeStructInline(network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocketManager_CreateSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.startNetworkNotifications(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec.$.structSpec);
          const result = this.impl.getHostAddress(params.host_name, params.address_family, params.enable_mdns);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketManager_CreateSocket_ParamsSpec.$.structSpec);
          const result = this.impl.createSocket(params.type, params.local_address, params.port_range, params.remote_address, params.traffic_annotation, params.devtools_token, params.client, params.socket);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.P2PSocketManagerReceiver = network.mojom.P2PSocketManagerReceiver;

network.mojom.P2PSocketManagerPtr = network.mojom.P2PSocketManagerRemote;
network.mojom.P2PSocketManagerRequest = network.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
mojo.internal.Struct(
    network.mojom.P2PSocket_Send_ParamsSpec, 'network.mojom.P2PSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SendBatch_ParamsSpec, 'network.mojom.P2PSocket_SendBatch_Params', [
      mojo.internal.StructField('packet_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SetOption_ParamsSpec, 'network.mojom.P2PSocket_SetOption_Params', [
      mojo.internal.StructField('option', 0, 0, network.mojom.P2PSocketOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.P2PSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  send(data, packet_info) {
    return this.$.send(data, packet_info);
  }
  sendBatch(packet_batch) {
    return this.$.sendBatch(packet_batch);
  }
  setOption(option, value) {
    return this.$.setOption(option, value);
  }
};

network.mojom.P2PSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  send(data, packet_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocket_Send_ParamsSpec,
      null,
      [data, packet_info],
      false);
  }

  sendBatch(packet_batch) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [packet_batch],
      false);
  }

  setOption(option, value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [option, value],
      false);
  }

};

network.mojom.P2PSocket.getRemote = function() {
  let remote = new network.mojom.P2PSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocket',
    'context');
  return remote.$;
};

network.mojom.P2PSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocket', [
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
             decoder.decodeStructInline(network.mojom.P2PSocket_Send_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocket_SendBatch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocket_SetOption_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_Send_ParamsSpec.$.structSpec);
          const result = this.impl.send(params.data, params.packet_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_SendBatch_ParamsSpec.$.structSpec);
          const result = this.impl.sendBatch(params.packet_batch);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocket_SetOption_ParamsSpec.$.structSpec);
          const result = this.impl.setOption(params.option, params.value);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.P2PSocketReceiver = network.mojom.P2PSocketReceiver;

network.mojom.P2PSocketPtr = network.mojom.P2PSocketRemote;
network.mojom.P2PSocketRequest = network.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
mojo.internal.Struct(
    network.mojom.P2PSocketClient_SocketCreated_ParamsSpec, 'network.mojom.P2PSocketClient_SocketCreated_Params', [
      mojo.internal.StructField('local_address', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendComplete_Params', [
      mojo.internal.StructField('send_metrics', 0, 0, network.mojom.P2PSendPacketMetricsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendBatchComplete_Params', [
      mojo.internal.StructField('send_metrics_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketMetricsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_DataReceived_ParamsSpec, 'network.mojom.P2PSocketClient_DataReceived_Params', [
      mojo.internal.StructField('packets', 0, 0, mojo.internal.Array(network.mojom.P2PReceivedPacketSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.P2PSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  socketCreated(local_address, remote_address) {
    return this.$.socketCreated(local_address, remote_address);
  }
  sendComplete(send_metrics) {
    return this.$.sendComplete(send_metrics);
  }
  sendBatchComplete(send_metrics_batch) {
    return this.$.sendBatchComplete(send_metrics_batch);
  }
  dataReceived(packets) {
    return this.$.dataReceived(packets);
  }
};

network.mojom.P2PSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PSocketClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  socketCreated(local_address, remote_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PSocketClient_SocketCreated_ParamsSpec,
      null,
      [local_address, remote_address],
      false);
  }

  sendComplete(send_metrics) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [send_metrics],
      false);
  }

  sendBatchComplete(send_metrics_batch) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [send_metrics_batch],
      false);
  }

  dataReceived(packets) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [packets],
      false);
  }

};

network.mojom.P2PSocketClient.getRemote = function() {
  let remote = new network.mojom.P2PSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketClient',
    'context');
  return remote.$;
};

network.mojom.P2PSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PSocketClient', [
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
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SocketCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SendComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PSocketClient_DataReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SocketCreated_ParamsSpec.$.structSpec);
          const result = this.impl.socketCreated(params.local_address, params.remote_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SendComplete_ParamsSpec.$.structSpec);
          const result = this.impl.sendComplete(params.send_metrics);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec.$.structSpec);
          const result = this.impl.sendBatchComplete(params.send_metrics_batch);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PSocketClient_DataReceived_ParamsSpec.$.structSpec);
          const result = this.impl.dataReceived(params.packets);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.P2PSocketClientReceiver = network.mojom.P2PSocketClientReceiver;

network.mojom.P2PSocketClientPtr = network.mojom.P2PSocketClientRemote;
network.mojom.P2PSocketClientRequest = network.mojom.P2PSocketClientPendingReceiver;

