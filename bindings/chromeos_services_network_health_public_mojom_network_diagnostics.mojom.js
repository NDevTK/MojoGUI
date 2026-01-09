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
};

// Enum: HasSecureWiFiConnectionProblem
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblem = {
};

// Enum: DnsResolverPresentProblem
chromeos.network_diagnostics.mojom.DnsResolverPresentProblem = {
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
};

// Enum: GoogleServicesConnectivityProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemType = {
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

};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
