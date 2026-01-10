// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_internals.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.mojom.kInvalidRadioSignalStrength = -2147483648;

device.mojom.mojom.kInvalidChannel = -2147483648;

device.mojom.mojom.kInvalidSignalToNoise = -2147483648;

// Enum: ProviderState
device.mojom.mojom.ProviderState = {
  kHighAccuracy: 0,
  kLowAccuracy: 1,
  kBlockedBySystemPermission: 2,
};
device.mojom.mojom.ProviderStateSpec = { $: mojo.internal.Enum() };

// Enum: LocationProviderManagerMode
device.mojom.mojom.LocationProviderManagerMode = {
  kNetworkOnly: 0,
  kPlatformOnly: 1,
  kCustomOnly: 2,
  kHybridPlatform: 3,
  kHybridFallbackNetwork: 4,
  kHybridPlatform2: 5,
};
device.mojom.mojom.LocationProviderManagerModeSpec = { $: mojo.internal.Enum() };

// Struct: AccessPointData
device.mojom.mojom.AccessPointDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.AccessPointData',
      packedSize: 40,
      fields: [
        { name: 'mac_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'radio_signal_strength', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'channel', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'signal_to_noise', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: NetworkLocationDiagnostics
device.mojom.mojom.NetworkLocationDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NetworkLocationDiagnostics',
      packedSize: 24,
      fields: [
        { name: 'access_point_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.AccessPointDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'wifi_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PositionCacheDiagnostics
device.mojom.mojom.PositionCacheDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PositionCacheDiagnostics',
      packedSize: 56,
      fields: [
        { name: 'cache_size', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'last_hit', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'last_miss', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'hit_rate_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'hit_rate_$value', originalFieldName: 'hit_rate' } },
        { name: 'hit_rate_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'hit_rate_$flag', originalFieldName: 'hit_rate' } },
        { name: 'last_network_result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeopositionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: WifiPollingPolicyDiagnostics
device.mojom.mojom.WifiPollingPolicyDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WifiPollingPolicyDiagnostics',
      packedSize: 64,
      fields: [
        { name: 'interval_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'interval_duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'polling_interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'default_interval', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'no_change_interval', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'two_no_change_interval', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'no_wifi_interval', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: GeolocationDiagnostics
device.mojom.mojom.GeolocationDiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationDiagnostics',
      packedSize: 16,
      fields: [
        { name: 'kStopped', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NetworkLocationResponse
device.mojom.mojom.NetworkLocationResponseSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NetworkLocationResponse',
      packedSize: 40,
      fields: [
        { name: 'latitude', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'longitude', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'accuracy_$flag', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'accuracy_$value', originalFieldName: 'accuracy' } },
        { name: 'accuracy_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'accuracy_$flag', originalFieldName: 'accuracy' } },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: GeolocationInternalsObserver
device.mojom.mojom.GeolocationInternalsObserver = {};

device.mojom.mojom.GeolocationInternalsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GeolocationInternalsObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationInternalsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GeolocationInternalsObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GeolocationInternalsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GeolocationInternalsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDiagnosticsChanged(diagnostics) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec,
      null,
      [diagnostics]);
  }

  onNetworkLocationRequested(access_point_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec,
      null,
      [access_point_data]);
  }

  onNetworkLocationReceived(response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec,
      null,
      [response]);
  }

};

device.mojom.mojom.GeolocationInternalsObserver.getRemote = function() {
  let remote = new device.mojom.mojom.GeolocationInternalsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationInternalsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDiagnosticsChanged
device.mojom.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnDiagnosticsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeolocationDiagnosticsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNetworkLocationRequested
device.mojom.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnNetworkLocationRequested_Params',
      packedSize: 16,
      fields: [
        { name: 'access_point_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.AccessPointDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNetworkLocationReceived
device.mojom.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternalsObserver.OnNetworkLocationReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NetworkLocationResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GeolocationInternalsObserverPtr = device.mojom.mojom.GeolocationInternalsObserverRemote;
device.mojom.mojom.GeolocationInternalsObserverRequest = device.mojom.mojom.GeolocationInternalsObserverPendingReceiver;


// Interface: GeolocationInternals
device.mojom.mojom.GeolocationInternals = {};

device.mojom.mojom.GeolocationInternalsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GeolocationInternalsRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationInternals';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GeolocationInternalsPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GeolocationInternalsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GeolocationInternalsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addInternalsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec,
      device.mojom.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec,
      [observer]);
  }

};

device.mojom.mojom.GeolocationInternals.getRemote = function() {
  let remote = new device.mojom.mojom.GeolocationInternalsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationInternals',
    'context');
  return remote.$;
};

// ParamsSpec for AddInternalsObserver
device.mojom.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternals.AddInternalsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.GeolocationInternalsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationInternals.AddInternalsObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeolocationDiagnosticsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GeolocationInternalsPtr = device.mojom.mojom.GeolocationInternalsRemote;
device.mojom.mojom.GeolocationInternalsRequest = device.mojom.mojom.GeolocationInternalsPendingReceiver;

