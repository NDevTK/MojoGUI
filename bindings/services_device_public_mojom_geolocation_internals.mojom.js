// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_internals.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.ProviderStateSpec = { $: mojo.internal.Enum() };
device.mojom.LocationProviderManagerModeSpec = { $: mojo.internal.Enum() };
device.mojom.AccessPointDataSpec = { $: {} };
device.mojom.NetworkLocationDiagnosticsSpec = { $: {} };
device.mojom.PositionCacheDiagnosticsSpec = { $: {} };
device.mojom.WifiPollingPolicyDiagnosticsSpec = { $: {} };
device.mojom.GeolocationDiagnosticsSpec = { $: {} };
device.mojom.NetworkLocationResponseSpec = { $: {} };
device.mojom.GeolocationInternalsObserver = {};
device.mojom.GeolocationInternalsObserver.$interfaceName = 'device.mojom.GeolocationInternalsObserver';
device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec = { $: {} };
device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec = { $: {} };
device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec = { $: {} };
device.mojom.GeolocationInternals = {};
device.mojom.GeolocationInternals.$interfaceName = 'device.mojom.GeolocationInternals';
device.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec = { $: {} };
device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec = { $: {} };

device.mojom.kInvalidRadioSignalStrength = -2147483648;

device.mojom.kInvalidChannel = -2147483648;

device.mojom.kInvalidSignalToNoise = -2147483648;

// Enum: ProviderState
device.mojom.ProviderState = {
  kStopped: 0,
  kHighAccuracy: 1,
  kLowAccuracy: 2,
  kBlockedBySystemPermission: 3,
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
mojo.internal.Struct(
    device.mojom.AccessPointDataSpec, 'device.mojom.AccessPointData', [
      mojo.internal.StructField('mac_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('radio_signal_strength', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('channel', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_to_noise', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NetworkLocationDiagnostics
mojo.internal.Struct(
    device.mojom.NetworkLocationDiagnosticsSpec, 'device.mojom.NetworkLocationDiagnostics', [
      mojo.internal.StructField('access_point_data', 0, 0, mojo.internal.Array(device.mojom.AccessPointDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('wifi_timestamp', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PositionCacheDiagnostics
mojo.internal.Struct(
    device.mojom.PositionCacheDiagnosticsSpec, 'device.mojom.PositionCacheDiagnostics', [
      mojo.internal.StructField('last_hit', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('last_miss', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hit_rate_$value', 16, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'hit_rate_$flag', originalFieldName: 'hit_rate' }),
      mojo.internal.StructField('last_network_result', 24, 0, device.mojom.GeopositionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cache_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('hit_rate_$flag', 36, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'hit_rate_$value', originalFieldName: 'hit_rate' }),
    ],
    [[0, 48]]);

// Struct: WifiPollingPolicyDiagnostics
mojo.internal.Struct(
    device.mojom.WifiPollingPolicyDiagnosticsSpec, 'device.mojom.WifiPollingPolicyDiagnostics', [
      mojo.internal.StructField('interval_start', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('interval_duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('polling_interval', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_interval', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('no_change_interval', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('two_no_change_interval', 40, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('no_wifi_interval', 48, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: GeolocationDiagnostics
mojo.internal.Struct(
    device.mojom.GeolocationDiagnosticsSpec, 'device.mojom.GeolocationDiagnostics', [
      mojo.internal.StructField('kStopped', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NetworkLocationResponse
mojo.internal.Struct(
    device.mojom.NetworkLocationResponseSpec, 'device.mojom.NetworkLocationResponse', [
      mojo.internal.StructField('latitude', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('longitude', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('accuracy_$value', 16, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'accuracy_$flag', originalFieldName: 'accuracy' }),
      mojo.internal.StructField('accuracy_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'accuracy_$value', originalFieldName: 'accuracy' }),
    ],
    [[0, 40]]);

// Interface: GeolocationInternalsObserver
mojo.internal.Struct(
    device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec, 'device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_Params', [
      mojo.internal.StructField('diagnostics', 0, 0, device.mojom.GeolocationDiagnosticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec, 'device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_Params', [
      mojo.internal.StructField('access_point_data', 0, 0, mojo.internal.Array(device.mojom.AccessPointDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec, 'device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_Params', [
      mojo.internal.StructField('response', 0, 0, device.mojom.NetworkLocationResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [diagnostics],
      false);
  }

  onNetworkLocationRequested(access_point_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec,
      null,
      [access_point_data],
      false);
  }

  onNetworkLocationReceived(response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec,
      null,
      [response],
      false);
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

device.mojom.GeolocationInternalsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDiagnosticsChanged(params.diagnostics);
          break;
        }
        case 1: {
          const params = device.mojom.GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkLocationRequested(params.access_point_data);
          break;
        }
        case 2: {
          const params = device.mojom.GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkLocationReceived(params.response);
          break;
        }
      }
    });
  }
};

device.mojom.GeolocationInternalsObserverReceiver = device.mojom.GeolocationInternalsObserverReceiver;

device.mojom.GeolocationInternalsObserverPtr = device.mojom.GeolocationInternalsObserverRemote;
device.mojom.GeolocationInternalsObserverRequest = device.mojom.GeolocationInternalsObserverPendingReceiver;


// Interface: GeolocationInternals
mojo.internal.Struct(
    device.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec, 'device.mojom.GeolocationInternals_AddInternalsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.GeolocationInternalsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec, 'device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParams', [
      mojo.internal.StructField('diagnostics', 0, 0, device.mojom.GeolocationDiagnosticsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
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

device.mojom.GeolocationInternalsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GeolocationInternals_AddInternalsObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addInternalsObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GeolocationInternals_AddInternalsObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.GeolocationInternalsReceiver = device.mojom.GeolocationInternalsReceiver;

device.mojom.GeolocationInternalsPtr = device.mojom.GeolocationInternalsRemote;
device.mojom.GeolocationInternalsRequest = device.mojom.GeolocationInternalsPendingReceiver;

