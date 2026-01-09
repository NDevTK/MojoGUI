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
  kProblem: 0,
  kNotRun: 1,
};

// Enum: RoutineCallSource
chromeos.network_diagnostics.mojom.RoutineCallSource = {
  kDiagnosticsUI: 0,
  kChromeNetworkPage: 1,
  kCrosHealthd: 2,
  kMetricsReporting: 3,
  kNetworkHealthSource: 4,
};

// Enum: LanConnectivityProblem
chromeos.network_diagnostics.mojom.LanConnectivityProblem = {
};

// Enum: SignalStrengthProblem
chromeos.network_diagnostics.mojom.SignalStrengthProblem = {
};

// Enum: GatewayCanBePingedProblem
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblem = {
  kFailedToPingDefaultNetwork: 0,
  kDefaultNetworkAboveLatencyThreshold: 1,
  kUnsuccessfulNonDefaultNetworksPings: 2,
  kNonDefaultNetworksAboveLatencyThreshold: 3,
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
  kSlightlyAboveThreshold: 0,
  kSignificantlyAboveThreshold: 1,
};

// Enum: DnsResolutionProblem
chromeos.network_diagnostics.mojom.DnsResolutionProblem = {
};

// Enum: CaptivePortalProblem
chromeos.network_diagnostics.mojom.CaptivePortalProblem = {
  kUnknownPortalState: 0,
  kPortalSuspected: 1,
  kPortal: 2,
  kProxyAuthRequired: 3,
  kNoInternet: 4,
};

// Enum: HttpFirewallProblem
chromeos.network_diagnostics.mojom.HttpFirewallProblem = {
  kFirewallDetected: 0,
  kPotentialFirewall: 1,
};

// Enum: HttpsFirewallProblem
chromeos.network_diagnostics.mojom.HttpsFirewallProblem = {
  kFirewallDetected: 0,
  kPotentialFirewall: 1,
};

// Enum: HttpsLatencyProblem
chromeos.network_diagnostics.mojom.HttpsLatencyProblem = {
  kFailedHttpsRequests: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
};

// Enum: VideoConferencingProblem
chromeos.network_diagnostics.mojom.VideoConferencingProblem = {
  kTcpFailure: 0,
  kMediaFailure: 1,
};

// Enum: ArcHttpProblem
chromeos.network_diagnostics.mojom.ArcHttpProblem = {
  kFailedToGetNetInstanceForHttpTest: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
  kFailedHttpRequests: 3,
};

// Enum: ArcDnsResolutionProblem
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblem = {
  kFailedToGetNetInstanceForDnsResolutionTest: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
  kFailedDnsQueries: 3,
};

// Enum: ArcPingProblem
chromeos.network_diagnostics.mojom.ArcPingProblem = {
  kFailedToGetNetInstanceForPingTest: 0,
  kGetManagedPropertiesTimeoutFailure: 1,
  kUnreachableGateway: 2,
  kFailedToPingDefaultNetwork: 3,
  kDefaultNetworkAboveLatencyThreshold: 4,
  kUnsuccessfulNonDefaultNetworksPings: 5,
  kNonDefaultNetworksAboveLatencyThreshold: 6,
};

// Enum: GoogleServicesConnectivityProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemType = {
  kUnknownError: 0,
  kConnectionFailure: 1,
  kConnectionTimeout: 2,
  kDnsResolutionError: 3,
  kSSLConnectionError: 4,
  kPeerCertificateError: 5,
  kHttpError: 6,
  kNoNetworkError: 7,
};

// Enum: GoogleServicesConnectivityProxyProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemType = {
  kProxyConnectionFailure: 0,
};

// Struct: GoogleServicesConnectivityErrorDetails
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetails',
      packedSize: 24,
      fields: [
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'resolution_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GoogleServicesConnectivityConnectionErrorInfo
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfo',
      packedSize: 40,
      fields: [
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error_details', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec, nullable: false },
        { name: 'timestamp_start', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'timestamp_end', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GoogleServicesConnectivityConnectionError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionError',
      packedSize: 32,
      fields: [
        { name: 'problem_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemTypeSpec, nullable: false },
        { name: 'proxy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'connection_info', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GoogleServicesConnectivityProxyConnectionError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionErrorSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionError',
      packedSize: 32,
      fields: [
        { name: 'problem_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemTypeSpec, nullable: false },
        { name: 'proxy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'connection_info', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GoogleServicesConnectivityNoValidProxyError
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyErrorSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyError',
      packedSize: 32,
      fields: [
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'proxy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_details', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HttpsLatencyResultValue
chromeos.network_diagnostics.mojom.HttpsLatencyResultValueSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.HttpsLatencyResultValue',
      packedSize: 16,
      fields: [
        { name: 'latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RoutineResult
chromeos.network_diagnostics.mojom.RoutineResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.RoutineResult',
      packedSize: 32,
      fields: [
        { name: 'verdict', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineVerdictSpec, nullable: false },
        { name: 'problems', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineProblemsSpec, nullable: false },
        { name: 'timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NetworkDiagnosticsRoutines
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines = {};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPendingReceiver,
      handle);
    this.$ = new chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.getRemote = function() {
  let remote = new chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPtr = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemote;
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRequest = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPendingReceiver;

