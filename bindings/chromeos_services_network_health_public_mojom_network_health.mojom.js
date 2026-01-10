// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};
var chromeos = chromeos || {};
var services = services || {};

chromeos.network_health.mojom.NetworkEventsObserver = {};
chromeos.network_health.mojom.NetworkEventsObserver.$interfaceName = 'chromeos.network_health.mojom.NetworkEventsObserver';
chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService = {};
chromeos.network_health.mojom.NetworkHealthService.$interfaceName = 'chromeos.network_health.mojom.NetworkHealthService';
chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec = { $: {} };

// Interface: NetworkEventsObserver
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, chromeos.network_health.mojom.NetworkStateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 8, 0, chromeos.network_health.mojom.UInt32ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkEventsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionStateChanged(guid, state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec,
      null,
      [guid, state]);
  }

  onSignalStrengthChanged(guid, signal_strength) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec,
      null,
      [guid, signal_strength]);
  }

  onNetworkListChanged(networks) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [networks]);
  }

};

chromeos.network_health.mojom.NetworkEventsObserver.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkEventsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkEventsObserver',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkEventsObserverPtr = chromeos.network_health.mojom.NetworkEventsObserverRemote;
chromeos.network_health.mojom.NetworkEventsObserverRequest = chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver;


// Interface: NetworkHealthService
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParams', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_health.mojom.NetworkHealthStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParams', [
      mojo.internal.StructField('guids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkHealthServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkHealthService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkHealthServicePendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getNetworkList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec,
      []);
  }

  getHealthSnapshot() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec,
      []);
  }

  getRecentlyActiveNetworks() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec,
      []);
  }

};

chromeos.network_health.mojom.NetworkHealthService.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkHealthServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkHealthService',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkHealthServicePtr = chromeos.network_health.mojom.NetworkHealthServiceRemote;
chromeos.network_health.mojom.NetworkHealthServiceRequest = chromeos.network_health.mojom.NetworkHealthServicePendingReceiver;

