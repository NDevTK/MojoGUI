// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
 // Module: arc.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.arc.mojom.NetworkResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.GetNetworksRequestTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.EapMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.EapPhase2MethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.KeyManagementSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.IPAddressTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.TetheringClientStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.MeteredOverrideSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.FlagSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.WifiBandSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.LohsStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.IpProtocolSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.SocketEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.QosCategorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.NetworkDetailsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec = { $: {} };
mojo.internal.bindings.arc.mojom.EapCredentialsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.IPConfigurationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.WiFiSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.LinkSpeedSpec = { $: {} };
mojo.internal.bindings.arc.mojom.WifiConfigurationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.LohsConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec = { $: {} };
mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost = {};
mojo.internal.bindings.arc.mojom.NetHost.$interfaceName = 'arc.mojom.NetHost';
mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance = {};
mojo.internal.bindings.arc.mojom.NetInstance.$interfaceName = 'arc.mojom.NetInstance';
mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec = { $: {} };

// Enum: NetworkResult
mojo.internal.bindings.arc.mojom.NetworkResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: GetNetworksRequestType
mojo.internal.bindings.arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
  MinVersion: 1,
};

// Enum: ConnectionStateType
mojo.internal.bindings.arc.mojom.ConnectionStateType = {
  CONNECTED: 0,
  CONNECTING: 1,
  NOT_CONNECTED: 2,
  PORTAL: 3,
  ONLINE: 4,
};

// Enum: EapMethod
mojo.internal.bindings.arc.mojom.EapMethod = {
  kNone: 0,
  kLeap: 1,
  kPeap: 2,
  kTls: 3,
  kTtls: 4,
};

// Enum: EapPhase2Method
mojo.internal.bindings.arc.mojom.EapPhase2Method = {
  kNone: 0,
  kPap: 1,
  kMschap: 2,
  kMschapv2: 3,
};

// Enum: KeyManagement
mojo.internal.bindings.arc.mojom.KeyManagement = {
  kNone: 0,
  kIeee8021X: 1,
  kFtEap: 2,
  kFtPsk: 3,
  kFtSae: 4,
  kWpaEap: 5,
  kWpaEapSha256: 6,
  kWpaPsk: 7,
  kSae: 8,
};

// Enum: IPAddressType
mojo.internal.bindings.arc.mojom.IPAddressType = {
  IPV4: 0,
  IPV6: 1,
};

// Enum: TetheringClientState
mojo.internal.bindings.arc.mojom.TetheringClientState = {
  CONFIRMED: 0,
  NOT_DETECTED: 1,
  SUSPECTED: 2,
};

// Enum: NetworkType
mojo.internal.bindings.arc.mojom.NetworkType = {
  CELLULAR: 0,
  ETHERNET: 1,
  VPN: 2,
  WIFI: 3,
};

// Enum: MeteredOverride
mojo.internal.bindings.arc.mojom.MeteredOverride = {
  kNone: 0,
  kMetered: 1,
  kNotmetered: 2,
};

// Enum: Flag
mojo.internal.bindings.arc.mojom.Flag = {
  UNKNOWN: 0,
  DEPRECATED_ENABLE_ARC_HOST_VPN: 1,
};

// Enum: WifiBand
mojo.internal.bindings.arc.mojom.WifiBand = {
  kUnknown: 0,
  k2Ghz: 1,
  k5Ghz: 2,
  k6Ghz: 3,
  k60Ghz: 4,
};

// Enum: LohsStatus
mojo.internal.bindings.arc.mojom.LohsStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kErrorGeneric: 2,
  kErrorIncompatibleMode: 3,
  kErrorTetheringDisallowed: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Enum: IpProtocol
mojo.internal.bindings.arc.mojom.IpProtocol = {
  kUnknown: 0,
  kTcp: 1,
  kUdp: 2,
};

// Enum: SocketEvent
mojo.internal.bindings.arc.mojom.SocketEvent = {
  kUnknown: 0,
  kOpen: 1,
  kClose: 2,
};

// Enum: QosCategory
mojo.internal.bindings.arc.mojom.QosCategory = {
  kUnknown: 0,
  kRealtimeInteractive: 1,
  kMultimediaConferencing: 2,
};

// Union: NetworkDetails
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.NetworkDetailsSpec, 'arc.mojom.NetworkDetails', {
      'arg_visible': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec.$,
        'nullable': false,
      },
      'arg_configured': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec.$,
        'nullable': false,
      },
    });

// Union: ArcProxyInfo
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec, 'arc.mojom.ArcProxyInfo', {
      'arg_manual_proxy': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec.$,
        'nullable': false,
      },
      'arg_pac_url_proxy': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec.$,
        'nullable': false,
      },
    });

// Struct: VisibleNetworkDetails
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec, 'arc.mojom.VisibleNetworkDetails', [
      mojo.internal.StructField('arg_bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ConfiguredNetworkDetails
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec, 'arc.mojom.ConfiguredNetworkDetails', [
      mojo.internal.StructField('arg_passphrase', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_autoconnect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 16, 0, mojo.internal.String, null, true, 33, undefined),
    ],
    [[0, 24], [33, 32]]);

// Struct: PasspointCredentials
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec, 'arc.mojom.PasspointCredentials', [
      mojo.internal.StructField('arg_domains', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_realm', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_home_ois', 16, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_required_home_ois', 24, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_roaming_consortium_ois', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_eap', 40, 0, mojo.internal.bindings.arc.mojom.EapCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_metered', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_friendly_name', 64, 0, mojo.internal.String, null, true, 22, undefined),
      mojo.internal.StructField('arg_subscription_expiration_time_ms', 72, 0, mojo.internal.Int64, 0, false, 22, undefined),
    ],
    [[0, 72], [22, 88]]);

// Struct: PasspointRemovalProperties
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec, 'arc.mojom.PasspointRemovalProperties', [
      mojo.internal.StructField('arg_fqdn', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EapCredentials
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.EapCredentialsSpec, 'arc.mojom.EapCredentials', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.bindings.arc.mojom.EapMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_phase2_method', 8, 0, mojo.internal.bindings.arc.mojom.EapPhase2MethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anonymous_identity', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_identity', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_key_management', 40, 0, mojo.internal.bindings.arc.mojom.KeyManagementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ca_certificate_pem', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_certificate_pem', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_certificate_key', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alternative_name_match_list', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match_list', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_max', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_proactive_key_caching', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_login_password', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: IPConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IPConfigurationSpec, 'arc.mojom.IPConfiguration', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.arc.mojom.IPAddressTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WiFi
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WiFiSpec, 'arc.mojom.WiFi', [
      mojo.internal.StructField('arg_bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 16, 0, mojo.internal.bindings.arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fqdn', 40, 0, mojo.internal.String, null, true, 16, undefined),
      mojo.internal.StructField('arg_is_passpoint', 48, 0, mojo.internal.Bool, false, false, 16, undefined),
      mojo.internal.StructField('arg_rssi', 50, 0, mojo.internal.Int16, 0, false, 23, undefined),
    ],
    [[0, 48], [16, 64], [23, 64]]);

// Struct: NetworkConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec, 'arc.mojom.NetworkConfiguration', [
      mojo.internal.StructField('arg_connection_state', 0, 0, mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_deprecated_ip_configs', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IPConfigurationSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.arc.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wifi', 40, 0, mojo.internal.bindings.arc.mojom.WiFiSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_tethering_client_state', 48, 0, mojo.internal.bindings.arc.mojom.TetheringClientStateSpec.$, null, false, 8, undefined),
      mojo.internal.StructField('arg_network_interface', 56, 0, mojo.internal.String, null, true, 10, undefined),
      mojo.internal.StructField('arg_is_default_network', 64, 0, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('arg_service_name', 72, 0, mojo.internal.String, null, true, 12, undefined),
      mojo.internal.StructField('arg_host_ipv4_address', 80, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_host_ipv4_gateway', 88, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_host_ipv6_global_addresses', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('arg_host_ipv6_gateway', 104, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_host_dns_addresses', 112, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('arg_host_search_domains', 120, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('arg_arc_ipv4_address', 128, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_arc_ipv4_gateway', 136, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_arc_network_interface', 144, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_host_mtu', 152, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_host_ipv4_prefix_length', 156, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_host_ipv6_prefix_length', 160, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_arc_ipv4_prefix_length', 164, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arg_is_metered', 168, 0, mojo.internal.Bool, false, false, 14, undefined),
      mojo.internal.StructField('arg_include_routes', 176, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('arg_exclude_routes', 184, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('arg_dns_proxy_addresses', 192, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 19, undefined),
      mojo.internal.StructField('arg_link_speed', 200, 0, mojo.internal.bindings.arc.mojom.LinkSpeedSpec.$, null, true, 28, undefined),
    ],
    [[0, 56], [8, 64], [10, 72], [11, 80], [12, 88], [13, 176], [14, 184], [15, 200], [19, 208], [28, 216]]);

// Struct: LinkSpeed
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LinkSpeedSpec, 'arc.mojom.LinkSpeed', [
      mojo.internal.StructField('arg_uplink_speed_kbps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_downlink_speed_kbps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WifiConfigurationSpec, 'arc.mojom.WifiConfiguration', [
      mojo.internal.StructField('arg_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 32, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_hexssid', 40, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_details', 48, 0, mojo.internal.bindings.arc.mojom.NetworkDetailsSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_eap', 56, 0, mojo.internal.bindings.arc.mojom.EapCredentialsSpec.$, null, true, 16, undefined),
      mojo.internal.StructField('arg_metered_override', 64, 0, mojo.internal.bindings.arc.mojom.MeteredOverrideSpec.$, null, false, 20, undefined),
      mojo.internal.StructField('arg_http_proxy', 72, 0, mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec.$, null, true, 20, undefined),
      mojo.internal.StructField('arg_static_ipv4_config', 80, 0, mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec.$, null, true, 20, undefined),
      mojo.internal.StructField('arg_domains', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('arg_dns_servers', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('arg_bssid_allowlist', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 26, undefined),
    ],
    [[0, 40], [1, 48], [2, 64], [16, 72], [20, 112], [26, 120]]);

// Struct: StaticIpv4Configuration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec, 'arc.mojom.StaticIpv4Configuration', [
      mojo.internal.StructField('arg_ipv4_addr', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_gateway_ipv4_addr', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_prefix_length', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PacUrlProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec, 'arc.mojom.PacUrlProxyConfig', [
      mojo.internal.StructField('arg_pac_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManualProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec, 'arc.mojom.ManualProxyConfig', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_exclusion_list', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetNetworksResponseType
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec, 'arc.mojom.GetNetworksResponseType', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_networks', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AndroidVpnConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec, 'arc.mojom.AndroidVpnConfiguration', [
      mojo.internal.StructField('arg_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ipv4_gateway', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_split_include', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_split_exclude', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_nameservers', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_domains', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tunnel_chrome_traffic', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_http_proxy', 72, 0, mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec.$, null, true, 21, undefined),
      mojo.internal.StructField('arg_mtu', 80, 0, mojo.internal.Int32, 0, false, 38, undefined),
    ],
    [[0, 80], [21, 88], [38, 96]]);

// Struct: ArcDnsResolutionTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec, 'arc.mojom.ArcDnsResolutionTestResult', [
      mojo.internal.StructField('arg_duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_successful', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcHttpTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec, 'arc.mojom.ArcHttpTestResult', [
      mojo.internal.StructField('arg_response_header_fields', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_successful', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ArcPingTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec, 'arc.mojom.ArcPingTestResult', [
      mojo.internal.StructField('arg_duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_successful', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LohsConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LohsConfigSpec, 'arc.mojom.LohsConfig', [
      mojo.internal.StructField('arg_band', 0, 0, mojo.internal.bindings.arc.mojom.WifiBandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_security_type', 8, 0, mojo.internal.bindings.arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hexssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PasspointApprovalRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec, 'arc.mojom.PasspointApprovalRequest', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_friendly_name', 16, 0, mojo.internal.String, null, true, 31, undefined),
      mojo.internal.StructField('arg_subscription_expiration_time_ms', 24, 0, mojo.internal.Int64, 0, false, 31, undefined),
    ],
    [[0, 24], [31, 40]]);

// Struct: PasspointApprovalResponse
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec, 'arc.mojom.PasspointApprovalResponse', [
      mojo.internal.StructField('arg_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SocketConnectionEvent
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec, 'arc.mojom.SocketConnectionEvent', [
      mojo.internal.StructField('arg_src_addr', 0, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dst_addr', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_proto', 16, 0, mojo.internal.bindings.arc.mojom.IpProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event', 24, 0, mojo.internal.bindings.arc.mojom.SocketEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_category', 32, 0, mojo.internal.bindings.arc.mojom.AppCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_qos_category', 40, 0, mojo.internal.bindings.arc.mojom.QosCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_src_port', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dst_port', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: NetHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec, 'arc.mojom.NetHost_StartScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_Params', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec, 'arc.mojom.NetHost_CreateNetwork_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.WifiConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_CreateNetwork_ResponseParams', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cfg', 8, 0, mojo.internal.bindings.arc.mojom.WifiConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec, 'arc.mojom.NetHost_StartConnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartConnect_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec, 'arc.mojom.NetHost_StartDisconnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec, 'arc.mojom.NetHost_GetNetworks_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.arc.mojom.GetNetworksRequestTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec, 'arc.mojom.NetHost_GetNetworks_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnConnected_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnUpdated_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec, 'arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnDisconnected_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec, 'arc.mojom.NetHost_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('arg_vpnPackage', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lockdown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_AddPasspointCredentials_Params', [
      mojo.internal.StructField('arg_credentials', 0, 0, mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_RemovePasspointCredentials_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec, 'arc.mojom.NetHost_DisconnectHostVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec, 'arc.mojom.NetHost_StartLohs_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.arc.mojom.LohsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec, 'arc.mojom.NetHost_StartLohs_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.LohsStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec, 'arc.mojom.NetHost_StopLohs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec, 'arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_Params', [
      mojo.internal.StructField('arg_is_held', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifySocketConnectionEvent_Params', [
      mojo.internal.StructField('arg_msg', 0, 0, mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_Params', [
      mojo.internal.StructField('arg_msg', 0, 0, mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.NetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.NetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.NetHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.NetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWifiEnabledState() {
    return this.$.getWifiEnabledState();
  }
  startScan() {
    return this.$.startScan();
  }
  setWifiEnabledState(arg_is_enabled) {
    return this.$.setWifiEnabledState(arg_is_enabled);
  }
  createNetwork(arg_cfg) {
    return this.$.createNetwork(arg_cfg);
  }
  forgetNetwork(arg_guid) {
    return this.$.forgetNetwork(arg_guid);
  }
  updateWifiNetwork(arg_guid, arg_cfg) {
    return this.$.updateWifiNetwork(arg_guid, arg_cfg);
  }
  startConnect(arg_guid) {
    return this.$.startConnect(arg_guid);
  }
  startDisconnect(arg_guid) {
    return this.$.startDisconnect(arg_guid);
  }
  getNetworks(arg_type) {
    return this.$.getNetworks(arg_type);
  }
  androidVpnConnected(arg_cfg) {
    return this.$.androidVpnConnected(arg_cfg);
  }
  androidVpnUpdated(arg_cfg) {
    return this.$.androidVpnUpdated(arg_cfg);
  }
  dEPRECATED_AndroidVpnStateChanged(arg_state) {
    return this.$.dEPRECATED_AndroidVpnStateChanged(arg_state);
  }
  androidVpnDisconnected() {
    return this.$.androidVpnDisconnected();
  }
  setAlwaysOnVpn(arg_vpnPackage, arg_lockdown) {
    return this.$.setAlwaysOnVpn(arg_vpnPackage, arg_lockdown);
  }
  requestPasspointAppApproval(arg_request) {
    return this.$.requestPasspointAppApproval(arg_request);
  }
  addPasspointCredentials(arg_credentials) {
    return this.$.addPasspointCredentials(arg_credentials);
  }
  removePasspointCredentials(arg_properties) {
    return this.$.removePasspointCredentials(arg_properties);
  }
  disconnectHostVpn() {
    return this.$.disconnectHostVpn();
  }
  startLohs(arg_config) {
    return this.$.startLohs(arg_config);
  }
  stopLohs() {
    return this.$.stopLohs();
  }
  notifyAndroidWifiMulticastLockChange(arg_is_held) {
    return this.$.notifyAndroidWifiMulticastLockChange(arg_is_held);
  }
  notifySocketConnectionEvent(arg_msg) {
    return this.$.notifySocketConnectionEvent(arg_msg);
  }
  notifyARCVPNSocketConnectionEvent(arg_msg) {
    return this.$.notifyARCVPNSocketConnectionEvent(arg_msg);
  }
};

mojo.internal.bindings.arc.mojom.NetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 20 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 25 },
      { explicit: 12 },
      { explicit: 26 },
      { explicit: 13 },
      { explicit: 21 },
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
    ]);
  }

  getWifiEnabledState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec,
      [],
      false);
  }

  startScan() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec,
      null,
      [],
      false);
  }

  setWifiEnabledState(arg_is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec,
      [arg_is_enabled],
      false);
  }

  createNetwork(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec,
      [arg_cfg],
      false);
  }

  forgetNetwork(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  updateWifiNetwork(arg_guid, arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec,
      [arg_guid, arg_cfg],
      false);
  }

  startConnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  startDisconnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  getNetworks(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec,
      [arg_type],
      false);
  }

  androidVpnConnected(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec,
      null,
      [arg_cfg],
      false);
  }

  androidVpnUpdated(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec,
      null,
      [arg_cfg],
      false);
  }

  dEPRECATED_AndroidVpnStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  androidVpnDisconnected() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec,
      null,
      [],
      false);
  }

  setAlwaysOnVpn(arg_vpnPackage, arg_lockdown) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec,
      null,
      [arg_vpnPackage, arg_lockdown],
      false);
  }

  requestPasspointAppApproval(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec,
      [arg_request],
      false);
  }

  addPasspointCredentials(arg_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec,
      null,
      [arg_credentials],
      false);
  }

  removePasspointCredentials(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  disconnectHostVpn() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec,
      null,
      [],
      false);
  }

  startLohs(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec,
      [arg_config],
      false);
  }

  stopLohs() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec,
      null,
      [],
      false);
  }

  notifyAndroidWifiMulticastLockChange(arg_is_held) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec,
      null,
      [arg_is_held],
      false);
  }

  notifySocketConnectionEvent(arg_msg) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec,
      null,
      [arg_msg],
      false);
  }

  notifyARCVPNSocketConnectionEvent(arg_msg) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec,
      null,
      [arg_msg],
      false);
  }

};

mojo.internal.bindings.arc.mojom.NetHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.NetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.NetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 20 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 25 },
      { explicit: 12 },
      { explicit: 26 },
      { explicit: 13 },
      { explicit: 21 },
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWifiEnabledState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScan (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWifiEnabledState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNetwork (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ForgetNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetNetwork (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateWifiNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWifiNetwork (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartConnect (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartDisconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDisconnect (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetNetworks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworks (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AndroidVpnConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnConnected (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AndroidVpnUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnUpdated (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DEPRECATED_AndroidVpnStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AndroidVpnStateChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AndroidVpnDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnDisconnected (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetAlwaysOnVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysOnVpn (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RequestPasspointAppApproval
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPasspointAppApproval (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: AddPasspointCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPasspointCredentials (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RemovePasspointCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePasspointCredentials (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: DisconnectHostVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectHostVpn (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: StartLohs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartLohs (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: StopLohs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLohs (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: NotifyAndroidWifiMulticastLockChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyAndroidWifiMulticastLockChange (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: NotifySocketConnectionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySocketConnectionEvent (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: NotifyARCVPNSocketConnectionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyARCVPNSocketConnectionEvent (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWifiEnabledState');
          const result = this.impl.getWifiEnabledState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWifiEnabledState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWifiEnabledState');
          const result = this.impl.setWifiEnabledState(params.arg_is_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetWifiEnabledState FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNetwork');
          const result = this.impl.createNetwork(params.arg_cfg);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateNetwork FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForgetNetwork FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateWifiNetwork');
          const result = this.impl.updateWifiNetwork(params.arg_guid, params.arg_cfg);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateWifiNetwork FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartConnect FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartDisconnect FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworks');
          const result = this.impl.getNetworks(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNetworks FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnConnected');
          const result = this.impl.androidVpnConnected(params.arg_cfg);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnUpdated');
          const result = this.impl.androidVpnUpdated(params.arg_cfg);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AndroidVpnStateChanged');
          const result = this.impl.dEPRECATED_AndroidVpnStateChanged(params.arg_state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnDisconnected');
          const result = this.impl.androidVpnDisconnected();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.arg_vpnPackage, params.arg_lockdown);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPasspointAppApproval');
          const result = this.impl.requestPasspointAppApproval(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPasspointAppApproval FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPasspointCredentials');
          const result = this.impl.addPasspointCredentials(params.arg_credentials);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePasspointCredentials');
          const result = this.impl.removePasspointCredentials(params.arg_properties);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectHostVpn');
          const result = this.impl.disconnectHostVpn();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startLohs');
          const result = this.impl.startLohs(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartLohs FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopLohs');
          const result = this.impl.stopLohs();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyAndroidWifiMulticastLockChange');
          const result = this.impl.notifyAndroidWifiMulticastLockChange(params.arg_is_held);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySocketConnectionEvent');
          const result = this.impl.notifySocketConnectionEvent(params.arg_msg);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyARCVPNSocketConnectionEvent');
          const result = this.impl.notifyARCVPNSocketConnectionEvent(params.arg_msg);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.NetHostReceiver = mojo.internal.bindings.arc.mojom.NetHostReceiver;

mojo.internal.bindings.arc.mojom.NetHostPtr = mojo.internal.bindings.arc.mojom.NetHostRemote;
mojo.internal.bindings.arc.mojom.NetHostRequest = mojo.internal.bindings.arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec, 'arc.mojom.NetInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NetHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec, 'arc.mojom.NetInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec, 'arc.mojom.NetInstance_ScanCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.NetInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_DisconnectAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_ConfigureAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec, 'arc.mojom.NetInstance_ActiveNetworksChanged_Params', [
      mojo.internal.StructField('arg_network', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec, 'arc.mojom.NetInstance_HttpTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec, 'arc.mojom.NetInstance_HttpTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec, 'arc.mojom.NetInstance_PingTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec, 'arc.mojom.NetInstance_PingTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec, 'arc.mojom.NetInstance_SetUpFlag_Params', [
      mojo.internal.StructField('arg_flag', 0, 0, mojo.internal.bindings.arc.mojom.FlagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.NetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  scanCompleted() {
    return this.$.scanCompleted();
  }
  wifiEnabledStateChanged(arg_is_enabled) {
    return this.$.wifiEnabledStateChanged(arg_is_enabled);
  }
  disconnectAndroidVpn() {
    return this.$.disconnectAndroidVpn();
  }
  configureAndroidVpn() {
    return this.$.configureAndroidVpn();
  }
  activeNetworksChanged(arg_network) {
    return this.$.activeNetworksChanged(arg_network);
  }
  dnsResolutionTest(arg_transport_name, arg_host_name) {
    return this.$.dnsResolutionTest(arg_transport_name, arg_host_name);
  }
  httpTest(arg_transport_name, arg_url) {
    return this.$.httpTest(arg_transport_name, arg_url);
  }
  pingTest(arg_transport_name, arg_ip_address) {
    return this.$.pingTest(arg_transport_name, arg_ip_address);
  }
  setUpFlag(arg_flag, arg_value) {
    return this.$.setUpFlag(arg_flag, arg_value);
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  scanCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  wifiEnabledStateChanged(arg_is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [arg_is_enabled],
      false);
  }

  disconnectAndroidVpn() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  configureAndroidVpn() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  activeNetworksChanged(arg_network) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec,
      null,
      [arg_network],
      false);
  }

  dnsResolutionTest(arg_transport_name, arg_host_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec,
      [arg_transport_name, arg_host_name],
      false);
  }

  httpTest(arg_transport_name, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec,
      [arg_transport_name, arg_url],
      false);
  }

  pingTest(arg_transport_name, arg_ip_address) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec,
      [arg_transport_name, arg_ip_address],
      false);
  }

  setUpFlag(arg_flag, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec,
      null,
      [arg_flag, arg_value],
      false);
  }

};

mojo.internal.bindings.arc.mojom.NetInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.NetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.NetInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ScanCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanCompleted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WifiEnabledStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WifiEnabledStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisconnectAndroidVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectAndroidVpn (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ConfigureAndroidVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureAndroidVpn (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ActiveNetworksChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActiveNetworksChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DnsResolutionTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DnsResolutionTest (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HttpTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HttpTest (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: PingTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PingTest (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUpFlag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpFlag (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scanCompleted');
          const result = this.impl.scanCompleted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wifiEnabledStateChanged');
          const result = this.impl.wifiEnabledStateChanged(params.arg_is_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectAndroidVpn');
          const result = this.impl.disconnectAndroidVpn();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureAndroidVpn');
          const result = this.impl.configureAndroidVpn();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activeNetworksChanged');
          const result = this.impl.activeNetworksChanged(params.arg_network);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dnsResolutionTest');
          const result = this.impl.dnsResolutionTest(params.arg_transport_name, params.arg_host_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DnsResolutionTest FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.httpTest');
          const result = this.impl.httpTest(params.arg_transport_name, params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HttpTest FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pingTest');
          const result = this.impl.pingTest(params.arg_transport_name, params.arg_ip_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PingTest FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpFlag');
          const result = this.impl.setUpFlag(params.arg_flag, params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceReceiver = mojo.internal.bindings.arc.mojom.NetInstanceReceiver;

mojo.internal.bindings.arc.mojom.NetInstancePtr = mojo.internal.bindings.arc.mojom.NetInstanceRemote;
mojo.internal.bindings.arc.mojom.NetInstanceRequest = mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver;

