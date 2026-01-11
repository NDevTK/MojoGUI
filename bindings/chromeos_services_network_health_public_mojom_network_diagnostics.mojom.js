// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_diagnostics.mojom
// Module: chromeos.network_diagnostics.mojom

// Module namespace
var chromeos = chromeos || {};
chromeos.network_diagnostics = chromeos.network_diagnostics || {};
chromeos.network_diagnostics.mojom = chromeos.network_diagnostics.mojom || {};
var mojo_base = mojo_base || {};

chromeos.network_diagnostics.mojom.RoutineTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.RoutineVerdictSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.RoutineCallSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.LanConnectivityProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.SignalStrengthProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.DnsResolverPresentProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.DnsLatencyProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.DnsResolutionProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.CaptivePortalProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.HttpFirewallProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.HttpsFirewallProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.HttpsLatencyProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.VideoConferencingProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.ArcHttpProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.ArcPingProblemSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemSpec = { $: {} };
chromeos.network_diagnostics.mojom.RoutineProblemsSpec = { $: {} };
chromeos.network_diagnostics.mojom.RoutineResultValueSpec = { $: {} };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec = { $: {} };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec = { $: {} };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorSpec = { $: {} };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionErrorSpec = { $: {} };
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyErrorSpec = { $: {} };
chromeos.network_diagnostics.mojom.HttpsLatencyResultValueSpec = { $: {} };
chromeos.network_diagnostics.mojom.RoutineResultSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines = {};
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines.$interfaceName = 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines';
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec = { $: {} };
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec = { $: {} };

// Enum: RoutineType
chromeos.network_diagnostics.mojom.RoutineType = {
  kLanConnectivity: 0,
  kSignalStrength: 1,
  kGatewayCanBePinged: 2,
  kHasSecureWiFiConnection: 3,
  kDnsResolverPresent: 4,
  kDnsLatency: 5,
  kDnsResolution: 6,
  kCaptivePortal: 7,
  kHttpFirewall: 8,
  kHttpsFirewall: 9,
  kHttpsLatency: 10,
  kVideoConferencing: 11,
  kArcHttp: 12,
  kArcDnsResolution: 13,
  kArcPing: 14,
  kGoogleServicesConnectivity: 15,
};

// Enum: RoutineVerdict
chromeos.network_diagnostics.mojom.RoutineVerdict = {
  kNoProblem: 0,
  kProblem: 1,
  kNotRun: 2,
};

// Enum: RoutineCallSource
chromeos.network_diagnostics.mojom.RoutineCallSource = {
  kUnknown: 0,
  kDiagnosticsUI: 1,
  kChromeNetworkPage: 2,
  kCrosHealthd: 3,
  kMetricsReporting: 4,
  kNetworkHealthSource: 5,
};

// Enum: LanConnectivityProblem
chromeos.network_diagnostics.mojom.LanConnectivityProblem = {
  kNoLanConnectivity: 0,
};

// Enum: SignalStrengthProblem
chromeos.network_diagnostics.mojom.SignalStrengthProblem = {
  kWeakSignal: 0,
};

// Enum: GatewayCanBePingedProblem
chromeos.network_diagnostics.mojom.GatewayCanBePingedProblem = {
  kUnreachableGateway: 0,
  kFailedToPingDefaultNetwork: 1,
  kDefaultNetworkAboveLatencyThreshold: 2,
  kUnsuccessfulNonDefaultNetworksPings: 3,
  kNonDefaultNetworksAboveLatencyThreshold: 4,
};

// Enum: HasSecureWiFiConnectionProblem
chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblem = {
  kSecurityTypeNone: 0,
  kSecurityTypeWep8021x: 1,
  kSecurityTypeWepPsk: 2,
  kUnknownSecurityType: 3,
};

// Enum: DnsResolverPresentProblem
chromeos.network_diagnostics.mojom.DnsResolverPresentProblem = {
  kNoNameServersFound: 0,
  kMalformedNameServers: 1,
  kEmptyNameServers: 2,
};

// Enum: DnsLatencyProblem
chromeos.network_diagnostics.mojom.DnsLatencyProblem = {
  kHostResolutionFailure: 0,
  kSlightlyAboveThreshold: 1,
  kSignificantlyAboveThreshold: 2,
};

// Enum: DnsResolutionProblem
chromeos.network_diagnostics.mojom.DnsResolutionProblem = {
  kFailedToResolveHost: 0,
};

// Enum: CaptivePortalProblem
chromeos.network_diagnostics.mojom.CaptivePortalProblem = {
  kNoActiveNetworks: 0,
  kUnknownPortalState: 1,
  kPortalSuspected: 2,
  kPortal: 3,
  kProxyAuthRequired: 4,
  kNoInternet: 5,
};

// Enum: HttpFirewallProblem
chromeos.network_diagnostics.mojom.HttpFirewallProblem = {
  kDnsResolutionFailuresAboveThreshold: 0,
  kFirewallDetected: 1,
  kPotentialFirewall: 2,
};

// Enum: HttpsFirewallProblem
chromeos.network_diagnostics.mojom.HttpsFirewallProblem = {
  kHighDnsResolutionFailureRate: 0,
  kFirewallDetected: 1,
  kPotentialFirewall: 2,
};

// Enum: HttpsLatencyProblem
chromeos.network_diagnostics.mojom.HttpsLatencyProblem = {
  kFailedDnsResolutions: 0,
  kFailedHttpsRequests: 1,
  kHighLatency: 2,
  kVeryHighLatency: 3,
};

// Enum: VideoConferencingProblem
chromeos.network_diagnostics.mojom.VideoConferencingProblem = {
  kUdpFailure: 0,
  kTcpFailure: 1,
  kMediaFailure: 2,
};

// Enum: ArcHttpProblem
chromeos.network_diagnostics.mojom.ArcHttpProblem = {
  kFailedToGetArcServiceManager: 0,
  kFailedToGetNetInstanceForHttpTest: 1,
  kHighLatency: 2,
  kVeryHighLatency: 3,
  kFailedHttpRequests: 4,
};

// Enum: ArcDnsResolutionProblem
chromeos.network_diagnostics.mojom.ArcDnsResolutionProblem = {
  kFailedToGetArcServiceManager: 0,
  kFailedToGetNetInstanceForDnsResolutionTest: 1,
  kHighLatency: 2,
  kVeryHighLatency: 3,
  kFailedDnsQueries: 4,
};

// Enum: ArcPingProblem
chromeos.network_diagnostics.mojom.ArcPingProblem = {
  kFailedToGetArcServiceManager: 0,
  kFailedToGetNetInstanceForPingTest: 1,
  kGetManagedPropertiesTimeoutFailure: 2,
  kUnreachableGateway: 3,
  kFailedToPingDefaultNetwork: 4,
  kDefaultNetworkAboveLatencyThreshold: 5,
  kUnsuccessfulNonDefaultNetworksPings: 6,
  kNonDefaultNetworksAboveLatencyThreshold: 7,
};

// Enum: GoogleServicesConnectivityProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemType = {
  kInternalError: 0,
  kUnknownError: 1,
  kConnectionFailure: 2,
  kConnectionTimeout: 3,
  kDnsResolutionError: 4,
  kSSLConnectionError: 5,
  kPeerCertificateError: 6,
  kHttpError: 7,
  kNoNetworkError: 8,
};

// Enum: GoogleServicesConnectivityProxyProblemType
chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemType = {
  kProxyDnsResolutionError: 0,
  kProxyConnectionFailure: 1,
};

// Union: GoogleServicesConnectivityProblem
mojo.internal.Union(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblem', {
      'connection_error': {
        'ordinal': 0,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorSpec.$,
        'nullable': false,
      },
      'proxy_connection_error': {
        'ordinal': 1,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionErrorSpec.$,
        'nullable': false,
      },
      'no_valid_proxy_error': {
        'ordinal': 2,
        'type': chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyErrorSpec.$,
        'nullable': false,
      },
    });

// Union: RoutineProblems
mojo.internal.Union(
    chromeos.network_diagnostics.mojom.RoutineProblemsSpec, 'chromeos.network_diagnostics.mojom.RoutineProblems', {
      'lan_connectivity_problems': {
        'ordinal': 0,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.LanConnectivityProblemSpec.$, false),
        'nullable': false,
      },
      'signal_strength_problems': {
        'ordinal': 1,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.SignalStrengthProblemSpec.$, false),
        'nullable': false,
      },
      'gateway_can_be_pinged_problems': {
        'ordinal': 2,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.GatewayCanBePingedProblemSpec.$, false),
        'nullable': false,
      },
      'has_secure_wifi_connection_problems': {
        'ordinal': 3,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HasSecureWiFiConnectionProblemSpec.$, false),
        'nullable': false,
      },
      'dns_resolver_present_problems': {
        'ordinal': 4,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsResolverPresentProblemSpec.$, false),
        'nullable': false,
      },
      'dns_latency_problems': {
        'ordinal': 5,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsLatencyProblemSpec.$, false),
        'nullable': false,
      },
      'dns_resolution_problems': {
        'ordinal': 6,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.DnsResolutionProblemSpec.$, false),
        'nullable': false,
      },
      'captive_portal_problems': {
        'ordinal': 7,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.CaptivePortalProblemSpec.$, false),
        'nullable': false,
      },
      'http_firewall_problems': {
        'ordinal': 8,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpFirewallProblemSpec.$, false),
        'nullable': false,
      },
      'https_firewall_problems': {
        'ordinal': 9,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpsFirewallProblemSpec.$, false),
        'nullable': false,
      },
      'https_latency_problems': {
        'ordinal': 10,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.HttpsLatencyProblemSpec.$, false),
        'nullable': false,
      },
      'video_conferencing_problems': {
        'ordinal': 11,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.VideoConferencingProblemSpec.$, false),
        'nullable': false,
      },
      'arc_http_problems': {
        'ordinal': 12,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcHttpProblemSpec.$, false),
        'nullable': false,
      },
      'arc_dns_resolution_problems': {
        'ordinal': 13,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcDnsResolutionProblemSpec.$, false),
        'nullable': false,
      },
      'arc_ping_problems': {
        'ordinal': 14,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.ArcPingProblemSpec.$, false),
        'nullable': false,
      },
      'google_services_connectivity_problems': {
        'ordinal': 15,
        'type': mojo.internal.Array(chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemSpec.$, false),
        'nullable': false,
      },
    });

// Union: RoutineResultValue
mojo.internal.Union(
    chromeos.network_diagnostics.mojom.RoutineResultValueSpec, 'chromeos.network_diagnostics.mojom.RoutineResultValue', {
      'https_latency_result_value': {
        'ordinal': 0,
        'type': chromeos.network_diagnostics.mojom.HttpsLatencyResultValueSpec.$,
        'nullable': false,
      },
    });

// Struct: GoogleServicesConnectivityErrorDetails
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetails', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resolution_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GoogleServicesConnectivityConnectionErrorInfo
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfo', [
      mojo.internal.StructField('hostname', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_details', 8, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp_start', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timestamp_end', 24, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GoogleServicesConnectivityConnectionError
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionError', [
      mojo.internal.StructField('problem_type', 0, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProblemTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxy', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('connection_info', 16, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GoogleServicesConnectivityProxyConnectionError
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionErrorSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyConnectionError', [
      mojo.internal.StructField('problem_type', 0, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityProxyProblemTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxy', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_info', 16, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityConnectionErrorInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GoogleServicesConnectivityNoValidProxyError
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyErrorSpec, 'chromeos.network_diagnostics.mojom.GoogleServicesConnectivityNoValidProxyError', [
      mojo.internal.StructField('hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('proxy', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('error_details', 16, 0, chromeos.network_diagnostics.mojom.GoogleServicesConnectivityErrorDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HttpsLatencyResultValue
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.HttpsLatencyResultValueSpec, 'chromeos.network_diagnostics.mojom.HttpsLatencyResultValue', [
      mojo.internal.StructField('latency', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RoutineResult
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.RoutineResultSpec, 'chromeos.network_diagnostics.mojom.RoutineResult', [
      mojo.internal.StructField('verdict', 0, 0, chromeos.network_diagnostics.mojom.RoutineVerdictSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('problems', 8, 0, chromeos.network_diagnostics.mojom.RoutineProblemsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result_value', 24, 0, chromeos.network_diagnostics.mojom.RoutineResultValueSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('source', 32, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, false, 2, undefined),
    ],
    [[0, 32], [1, 40], [2, 48]]);

// Interface: NetworkDiagnosticsRoutines
mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_Params', [
      mojo.internal.StructField('routine', 0, 0, chromeos.network_diagnostics.mojom.RoutineTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Map(chromeos.network_diagnostics.mojom.RoutineTypeSpec.$, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_Params', [
      mojo.internal.StructField('stun_server_hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source', 8, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_Params', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_diagnostics.mojom.RoutineCallSourceSpec.$, null, true, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

mojo.internal.Struct(
    chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec, 'chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_diagnostics.mojom.RoutineResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getResult(routine) {
    return this.$.getResult(routine);
  }
  getAllResults() {
    return this.$.getAllResults();
  }
  runLanConnectivity(source) {
    return this.$.runLanConnectivity(source);
  }
  runSignalStrength(source) {
    return this.$.runSignalStrength(source);
  }
  runGatewayCanBePinged(source) {
    return this.$.runGatewayCanBePinged(source);
  }
  runHasSecureWiFiConnection(source) {
    return this.$.runHasSecureWiFiConnection(source);
  }
  runDnsResolverPresent(source) {
    return this.$.runDnsResolverPresent(source);
  }
  runDnsLatency(source) {
    return this.$.runDnsLatency(source);
  }
  runDnsResolution(source) {
    return this.$.runDnsResolution(source);
  }
  runCaptivePortal(source) {
    return this.$.runCaptivePortal(source);
  }
  runHttpFirewall(source) {
    return this.$.runHttpFirewall(source);
  }
  runHttpsFirewall(source) {
    return this.$.runHttpsFirewall(source);
  }
  runHttpsLatency(source) {
    return this.$.runHttpsLatency(source);
  }
  runVideoConferencing(stun_server_hostname, source) {
    return this.$.runVideoConferencing(stun_server_hostname, source);
  }
  runArcHttp(source) {
    return this.$.runArcHttp(source);
  }
  runArcPing(source) {
    return this.$.runArcPing(source);
  }
  runArcDnsResolution(source) {
    return this.$.runArcDnsResolution(source);
  }
  runGoogleServicesConnectivity(source) {
    return this.$.runGoogleServicesConnectivity(source);
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnosticsRoutines', [
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 29 },
    ]);
  }

  getResult(routine) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec,
      [routine],
      false);
  }

  getAllResults() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec,
      [],
      false);
  }

  runLanConnectivity(source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec,
      [source],
      false);
  }

  runSignalStrength(source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec,
      [source],
      false);
  }

  runGatewayCanBePinged(source) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec,
      [source],
      false);
  }

  runHasSecureWiFiConnection(source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec,
      [source],
      false);
  }

  runDnsResolverPresent(source) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec,
      [source],
      false);
  }

  runDnsLatency(source) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec,
      [source],
      false);
  }

  runDnsResolution(source) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec,
      [source],
      false);
  }

  runCaptivePortal(source) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec,
      [source],
      false);
  }

  runHttpFirewall(source) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec,
      [source],
      false);
  }

  runHttpsFirewall(source) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec,
      [source],
      false);
  }

  runHttpsLatency(source) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec,
      [source],
      false);
  }

  runVideoConferencing(stun_server_hostname, source) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec,
      [stun_server_hostname, source],
      false);
  }

  runArcHttp(source) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec,
      [source],
      false);
  }

  runArcPing(source) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec,
      [source],
      false);
  }

  runArcDnsResolution(source) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec,
      [source],
      false);
  }

  runGoogleServicesConnectivity(source) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec,
      chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec,
      [source],
      false);
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

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkDiagnosticsRoutines', [
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 29 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ParamsSpec.$.structSpec);
          const result = this.impl.getResult(params.routine);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ParamsSpec.$.structSpec);
          const result = this.impl.getAllResults();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_GetAllResults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ParamsSpec.$.structSpec);
          const result = this.impl.runLanConnectivity(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunLanConnectivity_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ParamsSpec.$.structSpec);
          const result = this.impl.runSignalStrength(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunSignalStrength_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ParamsSpec.$.structSpec);
          const result = this.impl.runGatewayCanBePinged(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGatewayCanBePinged_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ParamsSpec.$.structSpec);
          const result = this.impl.runHasSecureWiFiConnection(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHasSecureWiFiConnection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsResolverPresent(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolverPresent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsLatency(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsLatency_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ParamsSpec.$.structSpec);
          const result = this.impl.runDnsResolution(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunDnsResolution_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ParamsSpec.$.structSpec);
          const result = this.impl.runCaptivePortal(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunCaptivePortal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpFirewall(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpFirewall_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpsFirewall(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsFirewall_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ParamsSpec.$.structSpec);
          const result = this.impl.runHttpsLatency(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunHttpsLatency_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ParamsSpec.$.structSpec);
          const result = this.impl.runVideoConferencing(params.stun_server_hostname, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunVideoConferencing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ParamsSpec.$.structSpec);
          const result = this.impl.runArcHttp(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcHttp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ParamsSpec.$.structSpec);
          const result = this.impl.runArcPing(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcPing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ParamsSpec.$.structSpec);
          const result = this.impl.runArcDnsResolution(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunArcDnsResolution_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ParamsSpec.$.structSpec);
          const result = this.impl.runGoogleServicesConnectivity(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines_RunGoogleServicesConnectivity_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesReceiver = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesReceiver;

chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPtr = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRemote;
chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesRequest = chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutinesPendingReceiver;

