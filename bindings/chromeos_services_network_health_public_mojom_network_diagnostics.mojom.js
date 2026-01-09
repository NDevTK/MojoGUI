// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_diagnostics.mojom
// Module: chromeos.network_diagnostics.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_diagnostics = chromeos.network_diagnostics || {};
chromeos.network_diagnostics.mojom = chromeos.network_diagnostics.mojom || {};


// Enum: RoutineType
chromeos.network_diagnostics.mojom.RoutineType = {
  kSignalStrength: 0,
  kGatewayCanBePinged: 1,
  kHasSecureWiFiConnection: 2,
  kDnsResolverPresent: 3,
  kDnsLatency: 4,
  kDnsResolution: 5,
  kCaptivePortal: 6,
  kHttpFirewall: 7,
  kHttpsFirewall: 8,
  kHttpsLatency: 9,
  kVideoConferencing: 10,
  kArcHttp: 11,
  kArcDnsResolution: 12,
  kArcPing: 13,
  kGoogleServicesConnectivity: 14,
};

// Enum: RoutineVerdict
chromeos.network_diagnostics.mojom.RoutineVerdict = {
};

// Enum: RoutineCallSource
chromeos.network_diagnostics.mojom.RoutineCallSource = {
};

// Enum: LanConnectivityProblem
chromeos.network_diagnostics.mojom.LanConnectivityProblem = {
};

// Enum: SignalStrengthProblem
chromeos.network_diagnostics.mojom.SignalStrengthProblem = {
};

// Enum: GatewayCanBePingedProblem
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblem = {
  hence: 0,
};

// Enum: HasSecureWiFiConnectionProblem
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblem = {
  kSecurityTypeWep8021x: 0,
  kSecurityTypeWepPsk: 1,
  kUnknownSecurityType: 2,
};

// Enum: DnsResolverPresentProblem
chromeos.network_diagnostics.mojom.DnsResolverPresentProblem = {
  kMalformedNameServers: 0,
  kEmptyNameServers: 1,
};

// Enum: DnsLatencyProblem
chromeos.network_diagnostics.mojom.DnsLatencyProblem = {
};

// Enum: DnsResolutionProblem
chromeos.network_diagnostics.mojom.DnsResolutionProblem = {
};

// Enum: CaptivePortalProblem
chromeos.network_diagnostics.mojom.CaptivePortalProblem = {
};

// Enum: HttpFirewallProblem
chromeos.network_diagnostics.mojom.HttpFirewallProblem = {
};

// Enum: HttpsFirewallProblem
chromeos.network_diagnostics.mojom.HttpsFirewallProblem = {
};

// Enum: HttpsLatencyProblem
chromeos.network_diagnostics.mojom.HttpsLatencyProblem = {
};

// Enum: VideoConferencingProblem
chromeos.network_diagnostics.mojom.VideoConferencingProblem = {
};

// Enum: ArcHttpProblem
chromeos.network_diagnostics.mojom.ArcHttpProblem = {
};

// Enum: ArcDnsResolutionProblem
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblem = {
};

// Enum: ArcPingProblem
chromeos.network_diagnostics.mojom.ArcPingProblem = {
  hence: 0,
};

// Enum: GoogleServicesConnectivityProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemType = {
  when: 0,
};

// Enum: GoogleServicesConnectivityProxyProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemType = {
};

// Struct: GoogleServicesConnectivityErrorDetails
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetails = class {
  constructor(values = {}) {
    this.error_message = values.error_message !== undefined ? values.error_message : "";
    this.enterprise = values.enterprise !== undefined ? values.enterprise : 0;
    this.resolution_message = values.resolution_message !== undefined ? values.resolution_message : "";
  }
};

// Struct: GoogleServicesConnectivityConnectionErrorInfo
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfo = class {
  constructor(values = {}) {
    this.timestamp_end = values.timestamp_end !== undefined ? values.timestamp_end : "";
  }
};

// Struct: GoogleServicesConnectivityConnectionError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionError = class {
  constructor(values = {}) {
    this.connection_info = values.connection_info !== undefined ? values.connection_info : "";
  }
};

// Struct: GoogleServicesConnectivityProxyConnectionError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionError = class {
  constructor(values = {}) {
    this.connection_info = values.connection_info !== undefined ? values.connection_info : "";
  }
};

// Struct: GoogleServicesConnectivityNoValidProxyError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyError = class {
  constructor(values = {}) {
    this.error_details = values.error_details !== undefined ? values.error_details : "";
  }
};

// Struct: HttpsLatencyResultValue
chromeos.network_diagnostics.mojom.HttpsLatencyResultValue = class {
  constructor(values = {}) {
    this.latency = values.latency !== undefined ? values.latency : null;
  }
};

// Struct: RoutineResult
chromeos.network_diagnostics.mojom.RoutineResult = class {
  constructor(values = {}) {
    this.verdict = values.verdict !== undefined ? values.verdict : null;
    this.source = values.source !== undefined ? values.source : null;
  }
};

// Interface: NetworkDiagnosticsRoutines
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines';
  }

  27(routine) {
    // Method: 27
    return new Promise((resolve) => {
      // Call: 27(routine)
      resolve({});
    });
  }

  28() {
    // Method: 28
    return new Promise((resolve) => {
      // Call: 28()
      resolve({});
    });
  }

  captivePortal(source) {
    // Method: CaptivePortal
    // Call: CaptivePortal(source)
  }

  12(source) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(source)
      resolve({});
    });
  }

  13(source) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(source)
      resolve({});
    });
  }

  14(source) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(source)
      resolve({});
    });
  }

  15(source) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(source)
      resolve({});
    });
  }

  16(source) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(source)
      resolve({});
    });
  }

  17(source) {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17(source)
      resolve({});
    });
  }

  18(source) {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18(source)
      resolve({});
    });
  }

  19(source) {
    // Method: 19
    return new Promise((resolve) => {
      // Call: 19(source)
      resolve({});
    });
  }

  20(source) {
    // Method: 20
    return new Promise((resolve) => {
      // Call: 20(source)
      resolve({});
    });
  }

  21(source) {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21(source)
      resolve({});
    });
  }

  22(source) {
    // Method: 22
    return new Promise((resolve) => {
      // Call: 22(source)
      resolve({});
    });
  }

  23(stun_server_hostname, source) {
    // Method: 23
    return new Promise((resolve) => {
      // Call: 23(stun_server_hostname, source)
      resolve({});
    });
  }

  24(source) {
    // Method: 24
    return new Promise((resolve) => {
      // Call: 24(source)
      resolve({});
    });
  }

  25(source) {
    // Method: 25
    return new Promise((resolve) => {
      // Call: 25(source)
      resolve({});
    });
  }

  26(source) {
    // Method: 26
    return new Promise((resolve) => {
      // Call: 26(source)
      resolve({});
    });
  }

  29(source) {
    // Method: 29
    return new Promise((resolve) => {
      // Call: 29(source)
      resolve({});
    });
  }

};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
