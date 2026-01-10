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
chromeos.network_diagnostics.mojom.RoutineTypeSpec = { $: mojo.internal.Enum() };

// Enum: RoutineVerdict
chromeos.network_diagnostics.mojom.RoutineVerdict = {
  kProblem: 0,
  kNotRun: 1,
};
chromeos.network_diagnostics.mojom.RoutineVerdictSpec = { $: mojo.internal.Enum() };

// Enum: RoutineCallSource
chromeos.network_diagnostics.mojom.RoutineCallSource = {
  kDiagnosticsUI: 0,
  kChromeNetworkPage: 1,
  kCrosHealthd: 2,
  kMetricsReporting: 3,
  kNetworkHealthSource: 4,
};
chromeos.network_diagnostics.mojom.RoutineCallSourceSpec = { $: mojo.internal.Enum() };

// Enum: LanConnectivityProblem
chromeos.network_diagnostics.mojom.LanConnectivityProblem = {
};
chromeos.network_diagnostics.mojom.LanConnectivityProblemSpec = { $: mojo.internal.Enum() };

// Enum: SignalStrengthProblem
chromeos.network_diagnostics.mojom.SignalStrengthProblem = {
};
chromeos.network_diagnostics.mojom.SignalStrengthProblemSpec = { $: mojo.internal.Enum() };

// Enum: GatewayCanBePingedProblem
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblem = {
  kFailedToPingDefaultNetwork: 0,
  kDefaultNetworkAboveLatencyThreshold: 1,
  kUnsuccessfulNonDefaultNetworksPings: 2,
  kNonDefaultNetworksAboveLatencyThreshold: 3,
};
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblemSpec = { $: mojo.internal.Enum() };

// Enum: HasSecureWiFiConnectionProblem
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblem = {
  kSecurityTypeWep8021x: 0,
  kSecurityTypeWepPsk: 1,
  kUnknownSecurityType: 2,
};
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblemSpec = { $: mojo.internal.Enum() };

// Enum: DnsResolverPresentProblem
chromeos.network_diagnostics.mojom.DnsResolverPresentProblem = {
  kMalformedNameServers: 0,
  kEmptyNameServers: 1,
};
chromeos.network_diagnostics.mojom.DnsResolverPresentProblemSpec = { $: mojo.internal.Enum() };

// Enum: DnsLatencyProblem
chromeos.network_diagnostics.mojom.DnsLatencyProblem = {
  kSlightlyAboveThreshold: 0,
  kSignificantlyAboveThreshold: 1,
};
chromeos.network_diagnostics.mojom.DnsLatencyProblemSpec = { $: mojo.internal.Enum() };

// Enum: DnsResolutionProblem
chromeos.network_diagnostics.mojom.DnsResolutionProblem = {
};
chromeos.network_diagnostics.mojom.DnsResolutionProblemSpec = { $: mojo.internal.Enum() };

// Enum: CaptivePortalProblem
chromeos.network_diagnostics.mojom.CaptivePortalProblem = {
  kUnknownPortalState: 0,
  kPortalSuspected: 1,
  kPortal: 2,
  kProxyAuthRequired: 3,
  kNoInternet: 4,
};
chromeos.network_diagnostics.mojom.CaptivePortalProblemSpec = { $: mojo.internal.Enum() };

// Enum: HttpFirewallProblem
chromeos.network_diagnostics.mojom.HttpFirewallProblem = {
  kFirewallDetected: 0,
  kPotentialFirewall: 1,
};
chromeos.network_diagnostics.mojom.HttpFirewallProblemSpec = { $: mojo.internal.Enum() };

// Enum: HttpsFirewallProblem
chromeos.network_diagnostics.mojom.HttpsFirewallProblem = {
  kFirewallDetected: 0,
  kPotentialFirewall: 1,
};
chromeos.network_diagnostics.mojom.HttpsFirewallProblemSpec = { $: mojo.internal.Enum() };

// Enum: HttpsLatencyProblem
chromeos.network_diagnostics.mojom.HttpsLatencyProblem = {
  kFailedHttpsRequests: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
};
chromeos.network_diagnostics.mojom.HttpsLatencyProblemSpec = { $: mojo.internal.Enum() };

// Enum: VideoConferencingProblem
chromeos.network_diagnostics.mojom.VideoConferencingProblem = {
  kTcpFailure: 0,
  kMediaFailure: 1,
};
chromeos.network_diagnostics.mojom.VideoConferencingProblemSpec = { $: mojo.internal.Enum() };

// Enum: ArcHttpProblem
chromeos.network_diagnostics.mojom.ArcHttpProblem = {
  kFailedToGetNetInstanceForHttpTest: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
  kFailedHttpRequests: 3,
};
chromeos.network_diagnostics.mojom.ArcHttpProblemSpec = { $: mojo.internal.Enum() };

// Enum: ArcDnsResolutionProblem
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblem = {
  kFailedToGetNetInstanceForDnsResolutionTest: 0,
  kHighLatency: 1,
  kVeryHighLatency: 2,
  kFailedDnsQueries: 3,
};
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblemSpec = { $: mojo.internal.Enum() };

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
chromeos.network_diagnostics.mojom.ArcPingProblemSpec = { $: mojo.internal.Enum() };

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
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemTypeSpec = { $: mojo.internal.Enum() };

// Enum: GoogleServicesConnectivityProxyProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemType = {
  kProxyConnectionFailure: 0,
};
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemTypeSpec = { $: mojo.internal.Enum() };

// Union: GoogleServicesConnectivityProblem
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemSpec = { $: mojo.internal.Union(
    'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblem', {
      'connection_error': {
        'ordinal': 0,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorSpec,
      }},
      'proxy_connection_error': {
        'ordinal': 1,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionErrorSpec,
      }},
      'no_valid_proxy_error': {
        'ordinal': 2,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyErrorSpec,
      }},
    })
};

// Union: RoutineProblems
chromeos.network_diagnostics.mojom.RoutineProblemsSpec = { $: mojo.internal.Union(
    'chromeos.network_diagnostics.mojom.RoutineProblems', {
      'lan_connectivity_problems': {
        'ordinal': 0,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.LanConnectivityProblemSpec, false),
      }},
      'signal_strength_problems': {
        'ordinal': 1,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.SignalStrengthProblemSpec, false),
      }},
      'gateway_can_be_pinged_problems': {
        'ordinal': 2,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.GatewayCanBePingedProblemSpec, false),
      }},
      'has_secure_wifi_connection_problems': {
        'ordinal': 3,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblemSpec, false),
      }},
      'dns_resolver_present_problems': {
        'ordinal': 4,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsResolverPresentProblemSpec, false),
      }},
      'dns_latency_problems': {
        'ordinal': 5,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsLatencyProblemSpec, false),
      }},
      'dns_resolution_problems': {
        'ordinal': 6,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsResolutionProblemSpec, false),
      }},
      'captive_portal_problems': {
        'ordinal': 7,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.CaptivePortalProblemSpec, false),
      }},
      'http_firewall_problems': {
        'ordinal': 8,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpFirewallProblemSpec, false),
      }},
      'https_firewall_problems': {
        'ordinal': 9,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpsFirewallProblemSpec, false),
      }},
      'https_latency_problems': {
        'ordinal': 10,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpsLatencyProblemSpec, false),
      }},
      'video_conferencing_problems': {
        'ordinal': 11,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.VideoConferencingProblemSpec, false),
      }},
      'arc_http_problems': {
        'ordinal': 12,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcHttpProblemSpec, false),
      }},
      'arc_dns_resolution_problems': {
        'ordinal': 13,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcDnsResolutionProblemSpec, false),
      }},
      'arc_ping_problems': {
        'ordinal': 14,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcPingProblemSpec, false),
      }},
      'google_services_connectivity_problems': {
        'ordinal': 15,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemSpec, false),
      }},
    })
};

// Union: RoutineResultValue
chromeos.network_diagnostics.mojom.RoutineResultValueSpec = { $: mojo.internal.Union(
    'chromeos.network_diagnostics.mojom.RoutineResultValue', {
      'https_latency_result_value': {
        'ordinal': 0,
        'type': chromeos.network_diagnostics.mojom.HttpsLatencyResultValueSpec,
      }},
    })
};

// Struct: GoogleServicesConnectivityErrorDetails
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetails',
      packedSize: 24,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resolution_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_details', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp_start', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'timestamp_end', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'problem_type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemTypeSpec, nullable: false, minVersion: 0 },
        { name: 'proxy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'connection_info', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'problem_type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemTypeSpec, nullable: false, minVersion: 0 },
        { name: 'proxy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_info', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'proxy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'error_details', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RoutineResult
chromeos.network_diagnostics.mojom.RoutineResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.RoutineResult',
      packedSize: 56,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineVerdictSpec, nullable: false, minVersion: 0 },
        { name: 'problems', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineProblemsSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'result_value', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultValueSpec, nullable: true, minVersion: 1 },
        { name: 'source', packedOffset: 4, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 56}, {version: 2, packedSize: 56}]
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

  getResult(routine) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec,
      [routine]);
  }

  getAllResults() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec,
      []);
  }

  runLanConnectivity(source) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec,
      [source]);
  }

  runSignalStrength(source) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec,
      [source]);
  }

  runGatewayCanBePinged(source) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec,
      [source]);
  }

  runHasSecureWiFiConnection(source) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec,
      [source]);
  }

  runDnsResolverPresent(source) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec,
      [source]);
  }

  runDnsLatency(source) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec,
      [source]);
  }

  runDnsResolution(source) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec,
      [source]);
  }

  runCaptivePortal(source) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec,
      [source]);
  }

  runHttpFirewall(source) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec,
      [source]);
  }

  runHttpsFirewall(source) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec,
      [source]);
  }

  runHttpsLatency(source) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec,
      [source]);
  }

  runVideoConferencing(stun_server_hostname, source) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec,
      [stun_server_hostname, source]);
  }

  runArcHttp(source) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec,
      [source]);
  }

  runArcPing(source) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec,
      [source]);
  }

  runArcDnsResolution(source) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec,
      [source]);
  }

  runGoogleServicesConnectivity(source) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec,
      [source]);
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

// ParamsSpec for GetResult
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.GetResult_Params',
      packedSize: 16,
      fields: [
        { name: 'routine', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.GetResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllResults
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.GetAllResults_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.GetAllResults_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(chromeos.network_diagnostics.mojom.RoutineTypeSpec, chromeos.network_diagnostics.mojom.RoutineResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunLanConnectivity
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunLanConnectivity_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunLanConnectivity_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunSignalStrength
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunSignalStrength_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunSignalStrength_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunGatewayCanBePinged
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunGatewayCanBePinged_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunGatewayCanBePinged_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHasSecureWiFiConnection
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHasSecureWiFiConnection_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHasSecureWiFiConnection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolverPresent
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsResolverPresent_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsResolverPresent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsLatency
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsLatency_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsLatency_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunDnsResolution
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunDnsResolution_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCaptivePortal
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunCaptivePortal_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunCaptivePortal_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpFirewall
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpFirewall_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpFirewall_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpsFirewall
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpsFirewall_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpsFirewall_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunHttpsLatency
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpsLatency_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunHttpsLatency_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunVideoConferencing
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunVideoConferencing_Params',
      packedSize: 24,
      fields: [
        { name: 'stun_server_hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunVideoConferencing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcHttp
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcHttp_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcHttp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcPing
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcPing_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcPing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunArcDnsResolution
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcDnsResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunArcDnsResolution_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunGoogleServicesConnectivity
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunGoogleServicesConnectivity_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineCallSourceSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.RunGoogleServicesConnectivity_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_diagnostics.mojom.RoutineResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPtr = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemote;
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRequest = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPendingReceiver;

