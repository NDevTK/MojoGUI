// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_change_observer_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NetworkChangeEvent
network.mojom.NetworkChangeEvent = {
  kSoonToDisconnect: 0,
  kDisconnected: 1,
  kConnected: 2,
  kDefaultNetworkChanged: 3,
};

// Interface: ConnectionChangeObserverClient
network.mojom.ConnectionChangeObserverClient = {};

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
      network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec.$,
      null,
      []);
  }

  onNetworkEvent(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec.$,
      null,
      [event]);
  }

  onConnectionFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for OnSessionClosed
network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionChangeObserverClient.OnSessionClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkEvent
network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionChangeObserverClient.OnNetworkEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionFailed
network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionChangeObserverClient.OnConnectionFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ConnectionChangeObserverClientPtr = network.mojom.ConnectionChangeObserverClientRemote;
network.mojom.ConnectionChangeObserverClientRequest = network.mojom.ConnectionChangeObserverClientPendingReceiver;

