// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_quality_estimator_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.NetworkQualityEstimatorManagerClient = {};
network.mojom.NetworkQualityEstimatorManagerClient.$interfaceName = 'network.mojom.NetworkQualityEstimatorManagerClient';
network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec = { $: {} };
network.mojom.NetworkQualityEstimatorManager = {};
network.mojom.NetworkQualityEstimatorManager.$interfaceName = 'network.mojom.NetworkQualityEstimatorManager';
network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec = { $: {} };

// Interface: NetworkQualityEstimatorManagerClient
mojo.internal.Struct(
    network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec, 'network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.EffectiveConnectionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('http_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('transport_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('downlink_bandwidth_kbps', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

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
      [type, http_rtt, transport_rtt, downlink_bandwidth_kbps],
      false);
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

network.mojom.NetworkQualityEstimatorManagerClientPtr = network.mojom.NetworkQualityEstimatorManagerClientRemote;
network.mojom.NetworkQualityEstimatorManagerClientRequest = network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver;


// Interface: NetworkQualityEstimatorManager
mojo.internal.Struct(
    network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec, 'network.mojom.NetworkQualityEstimatorManager_RequestNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetworkQualityEstimatorManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
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

network.mojom.NetworkQualityEstimatorManagerPtr = network.mojom.NetworkQualityEstimatorManagerRemote;
network.mojom.NetworkQualityEstimatorManagerRequest = network.mojom.NetworkQualityEstimatorManagerPendingReceiver;

