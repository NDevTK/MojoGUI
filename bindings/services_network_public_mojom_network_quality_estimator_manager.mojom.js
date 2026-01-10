// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_quality_estimator_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkQualityEstimatorManagerClient
network.mojom.mojom.NetworkQualityEstimatorManagerClient = {};

network.mojom.mojom.NetworkQualityEstimatorManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkQualityEstimatorManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkQualityEstimatorManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec,
      null,
      [type, http_rtt, transport_rtt, downlink_bandwidth_kbps]);
  }

};

network.mojom.mojom.NetworkQualityEstimatorManagerClient.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkQualityEstimatorManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnNetworkQualityChanged
network.mojom.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkQualityEstimatorManagerClient.OnNetworkQualityChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.EffectiveConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'http_rtt', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'transport_rtt', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'downlink_bandwidth_kbps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkQualityEstimatorManagerClientPtr = network.mojom.mojom.NetworkQualityEstimatorManagerClientRemote;
network.mojom.mojom.NetworkQualityEstimatorManagerClientRequest = network.mojom.mojom.NetworkQualityEstimatorManagerClientPendingReceiver;


// Interface: NetworkQualityEstimatorManager
network.mojom.mojom.NetworkQualityEstimatorManager = {};

network.mojom.mojom.NetworkQualityEstimatorManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkQualityEstimatorManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkQualityEstimatorManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkQualityEstimatorManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkQualityEstimatorManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestNotifications(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec,
      null,
      [client]);
  }

};

network.mojom.mojom.NetworkQualityEstimatorManager.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkQualityEstimatorManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestNotifications
network.mojom.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkQualityEstimatorManager.RequestNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkQualityEstimatorManagerPtr = network.mojom.mojom.NetworkQualityEstimatorManagerRemote;
network.mojom.mojom.NetworkQualityEstimatorManagerRequest = network.mojom.mojom.NetworkQualityEstimatorManagerPendingReceiver;

