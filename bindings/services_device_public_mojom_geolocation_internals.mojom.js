// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_internals.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: ProviderState
device.mojom.ProviderState = {
};

// Enum: LocationProviderManagerMode
device.mojom.LocationProviderManagerMode = {
};

// Struct: AccessPointData
device.mojom.AccessPointData = class {
  constructor(values = {}) {
    this.mac_address = values.mac_address !== undefined ? values.mac_address : "";
    this.kInvalidRadioSignalStrength = values.kInvalidRadioSignalStrength !== undefined ? values.kInvalidRadioSignalStrength : 0;
    this.kInvalidChannel = values.kInvalidChannel !== undefined ? values.kInvalidChannel : 0;
    this.kInvalidSignalToNoise = values.kInvalidSignalToNoise !== undefined ? values.kInvalidSignalToNoise : 0;
    this.timestamp = values.timestamp !== undefined ? values.timestamp : null;
  }
};

// Struct: NetworkLocationDiagnostics
device.mojom.NetworkLocationDiagnostics = class {
  constructor(values = {}) {
    this.access_point_data = values.access_point_data !== undefined ? values.access_point_data : 0;
    this.wifi_timestamp = values.wifi_timestamp !== undefined ? values.wifi_timestamp : null;
  }
};

// Struct: PositionCacheDiagnostics
device.mojom.PositionCacheDiagnostics = class {
  constructor(values = {}) {
    this.hit_rate = values.hit_rate !== undefined ? values.hit_rate : 0;
    this.last_network_result = values.last_network_result !== undefined ? values.last_network_result : null;
  }
};

// Struct: WifiPollingPolicyDiagnostics
device.mojom.WifiPollingPolicyDiagnostics = class {
  constructor(values = {}) {
    this.no_wifi_interval = values.no_wifi_interval !== undefined ? values.no_wifi_interval : 0;
  }
};

// Struct: GeolocationDiagnostics
device.mojom.GeolocationDiagnostics = class {
  constructor(values = {}) {
    this.kStopped = values.kStopped !== undefined ? values.kStopped : null;
  }
};

// Struct: NetworkLocationResponse
device.mojom.NetworkLocationResponse = class {
  constructor(values = {}) {
    this.longitude = values.longitude !== undefined ? values.longitude : 0;
    this.accuracy = values.accuracy !== undefined ? values.accuracy : 0;
  }
};

// Interface: GeolocationInternalsObserver
device.mojom.GeolocationInternalsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GeolocationInternalsObserver';
  }

  onDiagnosticsChanged(diagnostics) {
    // Method: OnDiagnosticsChanged
    // Call: OnDiagnosticsChanged(diagnostics)
  }

  onNetworkLocationRequested(access_point_data) {
    // Method: OnNetworkLocationRequested
    // Call: OnNetworkLocationRequested(access_point_data)
  }

  onNetworkLocationReceived(response) {
    // Method: OnNetworkLocationReceived
    // Call: OnNetworkLocationReceived(response)
  }

};

device.mojom.GeolocationInternalsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GeolocationInternals
device.mojom.GeolocationInternalsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GeolocationInternals';
  }

  addInternalsObserver(observer) {
    // Method: AddInternalsObserver
    return new Promise((resolve) => {
      // Call: AddInternalsObserver(observer)
      resolve({});
    });
  }

};

device.mojom.GeolocationInternalsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
