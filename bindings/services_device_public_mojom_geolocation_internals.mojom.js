// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_internals.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: ProviderState
device.mojom.ProviderState = {
  kHighAccuracy: 0,
  kLowAccuracy: 1,
  kBlockedBySystemPermission: 2,
};

// Enum: LocationProviderManagerMode
device.mojom.LocationProviderManagerMode = {
  kNetworkOnly: 0,
  kPlatformOnly: 1,
  kCustomOnly: 2,
  kHybridPlatform: 3,
  kHybridFallbackNetwork: 4,
  kHybridPlatform2: 5,
};

// Struct: AccessPointData
device.mojom.AccessPointDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.AccessPointData',
      packedSize: 40,
      fields: [
        { name: 'mac_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'radio_signal_strength', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'channel', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signal_to_noise', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkLocationDiagnostics
device.mojom.NetworkLocationDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NetworkLocationDiagnostics',
      packedSize: 24,
      fields: [
        { name: 'access_point_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'wifi_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PositionCacheDiagnostics
device.mojom.PositionCacheDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PositionCacheDiagnostics',
      packedSize: 48,
      fields: [
        { name: 'last_hit', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'last_miss', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'hit_rate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'last_network_result', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'cache_size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiPollingPolicyDiagnostics
device.mojom.WifiPollingPolicyDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WifiPollingPolicyDiagnostics',
      packedSize: 64,
      fields: [
        { name: 'interval_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'interval_duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'polling_interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'default_interval', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'no_change_interval', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'two_no_change_interval', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'no_wifi_interval', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GeolocationDiagnostics
device.mojom.GeolocationDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationDiagnostics',
      packedSize: 16,
      fields: [
        { name: 'kStopped', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkLocationResponse
device.mojom.NetworkLocationResponseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NetworkLocationResponse',
      packedSize: 32,
      fields: [
        { name: 'latitude', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'longitude', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'accuracy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: GeolocationInternalsObserver
device.mojom.GeolocationInternalsObserver = {};

device.mojom.GeolocationInternalsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationInternalsObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationInternalsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationInternalsObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationInternalsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationInternalsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDiagnosticsChanged(diagnostics) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec,
      null,
      [diagnostics]);
  }

  onNetworkLocationRequested(access_point_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec,
      null,
      [access_point_data]);
  }

  onNetworkLocationReceived(response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec,
      null,
      [response]);
  }

};

device.mojom.GeolocationInternalsObserver.getRemote = function() {
  let remote = new device.mojom.GeolocationInternalsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationInternalsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDiagnosticsChanged
device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnDiagnosticsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeolocationDiagnosticsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkLocationRequested
device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnNetworkLocationRequested_Params',
      packedSize: 16,
      fields: [
        { name: 'access_point_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkLocationReceived
device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnNetworkLocationReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NetworkLocationResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GeolocationInternalsObserverPtr = device.mojom.GeolocationInternalsObserverRemote;
device.mojom.GeolocationInternalsObserverRequest = device.mojom.GeolocationInternalsObserverPendingReceiver;


// Interface: GeolocationInternals
device.mojom.GeolocationInternals = {};

device.mojom.GeolocationInternalsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationInternalsRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationInternals';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationInternalsPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationInternalsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationInternalsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addInternalsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec,
      device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec,
      [observer]);
  }

};

device.mojom.GeolocationInternals.getRemote = function() {
  let remote = new device.mojom.GeolocationInternalsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationInternals',
    'context');
  return remote.$;
};

// ParamsSpec for AddInternalsObserver
device.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternals.AddInternalsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternals.AddInternalsObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeolocationDiagnosticsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GeolocationInternalsPtr = device.mojom.GeolocationInternalsRemote;
device.mojom.GeolocationInternalsRequest = device.mojom.GeolocationInternalsPendingReceiver;

