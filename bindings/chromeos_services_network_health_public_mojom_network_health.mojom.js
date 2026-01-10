// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};


// Interface: NetworkEventsObserver
chromeos.network_health.mojom.NetworkEventsObserver = {};

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

// ParamsSpec for OnConnectionStateChanged
chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkEventsObserver.OnConnectionStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_health.mojom.NetworkStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSignalStrengthChanged
chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkEventsObserver.OnSignalStrengthChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_health.mojom.UInt32ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnNetworkListChanged
chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkEventsObserver.OnNetworkListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.network_health.mojom.NetworkEventsObserverPtr = chromeos.network_health.mojom.NetworkEventsObserverRemote;
chromeos.network_health.mojom.NetworkEventsObserverRequest = chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver;


// Interface: NetworkHealthService
chromeos.network_health.mojom.NetworkHealthService = {};

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

// ParamsSpec for AddObserver
chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNetworkList
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetNetworkList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetNetworkList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHealthSnapshot
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetHealthSnapshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetHealthSnapshot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_health.mojom.NetworkHealthStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRecentlyActiveNetworks
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetRecentlyActiveNetworks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthService.GetRecentlyActiveNetworks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'guids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.network_health.mojom.NetworkHealthServicePtr = chromeos.network_health.mojom.NetworkHealthServiceRemote;
chromeos.network_health.mojom.NetworkHealthServiceRequest = chromeos.network_health.mojom.NetworkHealthServicePendingReceiver;

