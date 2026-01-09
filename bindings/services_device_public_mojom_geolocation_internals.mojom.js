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
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'access_point_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GeolocationInternalsPtr = device.mojom.GeolocationInternalsRemote;
device.mojom.GeolocationInternalsRequest = device.mojom.GeolocationInternalsPendingReceiver;

