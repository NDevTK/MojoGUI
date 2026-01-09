// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_quality_estimator_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkQualityEstimatorManagerClient
network.mojom.NetworkQualityEstimatorManagerClient = {};

network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkQualityEstimatorManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec,
      null,
      [type, http_rtt, transport_rtt, downlink_bandwidth_kbps]);
  }

};

network.mojom.NetworkQualityEstimatorManagerClient.getRemote = function() {
  let remote = new network.mojom.NetworkQualityEstimatorManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkQualityChanged
network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkQualityEstimatorManagerClient.OnNetworkQualityChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.EffectiveConnectionTypeSpec, nullable: false },
        { name: 'http_rtt', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'transport_rtt', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'downlink_bandwidth_kbps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkQualityEstimatorManagerClientPtr = network.mojom.NetworkQualityEstimatorManagerClientRemote;
network.mojom.NetworkQualityEstimatorManagerClientRequest = network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver;


// Interface: NetworkQualityEstimatorManager
network.mojom.NetworkQualityEstimatorManager = {};

network.mojom.NetworkQualityEstimatorManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkQualityEstimatorManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkQualityEstimatorManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkQualityEstimatorManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkQualityEstimatorManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNotifications(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec,
      null,
      [client]);
  }

};

network.mojom.NetworkQualityEstimatorManager.getRemote = function() {
  let remote = new network.mojom.NetworkQualityEstimatorManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestNotifications
network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkQualityEstimatorManager.RequestNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkQualityEstimatorManagerPtr = network.mojom.NetworkQualityEstimatorManagerRemote;
network.mojom.NetworkQualityEstimatorManagerRequest = network.mojom.NetworkQualityEstimatorManagerPendingReceiver;

