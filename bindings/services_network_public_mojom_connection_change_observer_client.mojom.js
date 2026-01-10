// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_change_observer_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.NetworkChangeEventSpec = { $: mojo.internal.Enum() };
network.mojom.ConnectionKeepAliveConfigSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient = {};
network.mojom.ConnectionChangeObserverClient.$interfaceName = 'network.mojom.ConnectionChangeObserverClient';
network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec = { $: {} };

// Enum: NetworkChangeEvent
network.mojom.NetworkChangeEvent = {
  kSoonToDisconnect: 0,
  kDisconnected: 1,
  kConnected: 2,
  kDefaultNetworkChanged: 3,
};

// Struct: ConnectionKeepAliveConfig
mojo.internal.Struct(
    network.mojom.ConnectionKeepAliveConfigSpec, 'network.mojom.ConnectionKeepAliveConfig', [
      mojo.internal.StructField('quic_connection_options', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('idle_timeout_in_seconds', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ping_interval_in_seconds', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_connection_keep_alive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ConnectionChangeObserverClient
mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnSessionClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_Params', [
      mojo.internal.StructField('event', 0, 0, network.mojom.NetworkChangeEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_Params', [
    ],
    [[0, 8]]);

network.mojom.ConnectionChangeObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ConnectionChangeObserverClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ConnectionChangeObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ConnectionChangeObserverClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ConnectionChangeObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ConnectionChangeObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkEvent(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onConnectionFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.ConnectionChangeObserverClient.getRemote = function() {
  let remote = new network.mojom.ConnectionChangeObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ConnectionChangeObserverClient',
    'context');
  return remote.$;
};

network.mojom.ConnectionChangeObserverClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSessionClosed();
          break;
        }
        case 1: {
          const params = network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkEvent(params.event);
          break;
        }
        case 2: {
          const params = network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionFailed();
          break;
        }
      }
      }
    }});
  }
};

network.mojom.ConnectionChangeObserverClientReceiver = network.mojom.ConnectionChangeObserverClientReceiver;

network.mojom.ConnectionChangeObserverClientPtr = network.mojom.ConnectionChangeObserverClientRemote;
network.mojom.ConnectionChangeObserverClientRequest = network.mojom.ConnectionChangeObserverClientPendingReceiver;

