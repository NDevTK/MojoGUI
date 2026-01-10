// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
// Module: chromeos.network_config.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

chromeos.network_config.mojom.ActivationStateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.HiddenSsidModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ProxyModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.MatchTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.VpnTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.StartConnectResultSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.InhibitReasonSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.AlwaysOnVpnModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnStateSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnAuthenticationTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnIpTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.TypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.SuppressionTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.TrafficCounterSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.SIMLockStatusSpec = { $: {} };
chromeos.network_config.mojom.SIMInfoSpec = { $: {} };
chromeos.network_config.mojom.CellularStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.EthernetStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.TetherStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.VPNStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.WiFiStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.DeviceStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkFilterSpec = { $: {} };
chromeos.network_config.mojom.ApnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.RoamingPropertiesSpec = { $: {} };
chromeos.network_config.mojom.CellularProviderPropertiesSpec = { $: {} };
chromeos.network_config.mojom.FoundNetworkPropertiesSpec = { $: {} };
chromeos.network_config.mojom.IPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.PaymentPortalPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WireGuardPeerPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedBooleanSpec = { $: {} };
chromeos.network_config.mojom.ManagedInt32Spec = { $: {} };
chromeos.network_config.mojom.ManagedStringSpec = { $: {} };
chromeos.network_config.mojom.ManagedStringListSpec = { $: {} };
chromeos.network_config.mojom.ManagedApnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedApnListSpec = { $: {} };
chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec = { $: {} };
chromeos.network_config.mojom.ManagedCertificatePatternSpec = { $: {} };
chromeos.network_config.mojom.ManagedEAPPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec = { $: {} };
chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedIPSecPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedL2TPPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedProxyLocationSpec = { $: {} };
chromeos.network_config.mojom.ManagedManualProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ManagedProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedWireGuardPeerListSpec = { $: {} };
chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedCellularPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedEthernetPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedVPNPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedWiFiPropertiesSpec = { $: {} };
chromeos.network_config.mojom.UInt32ValueSpec = { $: {} };
chromeos.network_config.mojom.TrafficCounterPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedPropertiesSpec = { $: {} };
chromeos.network_config.mojom.AutoConnectConfigSpec = { $: {} };
chromeos.network_config.mojom.MeteredConfigSpec = { $: {} };
chromeos.network_config.mojom.PriorityConfigSpec = { $: {} };
chromeos.network_config.mojom.VpnTypeConfigSpec = { $: {} };
chromeos.network_config.mojom.ProxyLocationSpec = { $: {} };
chromeos.network_config.mojom.ManualProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.EAPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.SubjectAltNameSpec = { $: {} };
chromeos.network_config.mojom.IPSecConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.L2TPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WireGuardConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.TextMessagesAllowStateSpec = { $: {} };
chromeos.network_config.mojom.CellularConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.EthernetConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.VPNConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WiFiConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.CellularSimStateSpec = { $: {} };
chromeos.network_config.mojom.GlobalPolicySpec = { $: {} };
chromeos.network_config.mojom.VpnProviderSpec = { $: {} };
chromeos.network_config.mojom.NetworkCertificateSpec = { $: {} };
chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.TrafficCounterSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig = {};
chromeos.network_config.mojom.CrosNetworkConfig.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfig';
chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver = {};
chromeos.network_config.mojom.CrosNetworkConfigObserver.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = { $: {} };

chromeos.network_config.mojom.kMaxNumCustomApns = 10;

chromeos.network_config.mojom.kNoLimit = 0;

chromeos.network_config.mojom.kNoRoutingPrefix = 0;

// Enum: ActivationStateType
chromeos.network_config.mojom.ActivationStateType = {
  kUnknown: 0,
  kNotActivated: 1,
  kActivating: 2,
  kPartiallyActivated: 3,
  kActivated: 4,
  kNoService: 5,
};

// Enum: AuthenticationType
chromeos.network_config.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: HiddenSsidMode
chromeos.network_config.mojom.HiddenSsidMode = {
  kAutomatic: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: ProxyMode
chromeos.network_config.mojom.ProxyMode = {
  kDirect: 0,
  kAutoDetect: 1,
  kPacScript: 2,
  kFixedServers: 3,
  kSystem: 4,
};

// Enum: SecurityType
chromeos.network_config.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Enum: MatchType
chromeos.network_config.mojom.MatchType = {
  kNoMatch: 0,
  kHome: 1,
  kRoaming: 2,
  kUnknown: 3,
};

// Enum: VpnType
chromeos.network_config.mojom.VpnType = {
  kIKEv2: 0,
  kL2TPIPsec: 1,
  kOpenVPN: 2,
  kWireGuard: 3,
  kExtension: 4,
  kArc: 5,
};

// Enum: FilterType
chromeos.network_config.mojom.FilterType = {
  kActive: 0,
  kVisible: 1,
  kConfigured: 2,
  kAll: 3,
};

// Enum: StartConnectResult
chromeos.network_config.mojom.StartConnectResult = {
  kSuccess: 0,
  kInvalidGuid: 1,
  kInvalidState: 2,
  kCanceled: 3,
  kNotConfigured: 4,
  kBlocked: 5,
  kUnknown: 6,
};

// Enum: CertificateType
chromeos.network_config.mojom.CertificateType = {
  kServerCA: 0,
  kUserCert: 1,
};

// Enum: InhibitReason
chromeos.network_config.mojom.InhibitReason = {
  kNotInhibited: 0,
  kInstallingProfile: 1,
  kRenamingProfile: 2,
  kRemovingProfile: 3,
  kConnectingToProfile: 4,
  kRefreshingProfileList: 5,
  kResettingEuiccMemory: 6,
  kDisablingProfile: 7,
  kRequestingAvailableProfiles: 8,
};

// Enum: AlwaysOnVpnMode
chromeos.network_config.mojom.AlwaysOnVpnMode = {
  kOff: 0,
  kBestEffort: 1,
  kStrict: 2,
};

// Enum: ApnState
chromeos.network_config.mojom.ApnState = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: ApnAuthenticationType
chromeos.network_config.mojom.ApnAuthenticationType = {
  kAutomatic: 0,
  kPap: 1,
  kChap: 2,
};

// Enum: ApnIpType
chromeos.network_config.mojom.ApnIpType = {
  kAutomatic: 0,
  kIpv4: 1,
  kIpv6: 2,
  kIpv4Ipv6: 3,
};

// Enum: ApnType
chromeos.network_config.mojom.ApnType = {
  kDefault: 0,
  kAttach: 1,
  kTether: 2,
};

// Enum: ApnSource
chromeos.network_config.mojom.ApnSource = {
  kModem: 0,
  kModb: 1,
  kUi: 2,
};

// Enum: Type
chromeos.network_config.mojom.Type = {
  kEmail: 0,
  kDns: 1,
  kUri: 2,
};

// Enum: SuppressionType
chromeos.network_config.mojom.SuppressionType = {
  kUnset: 0,
  kAllow: 1,
  kSuppress: 2,
};

// Enum: TrafficCounterSource
chromeos.network_config.mojom.TrafficCounterSource = {
  kUnknown: 0,
  kChrome: 1,
  kUser: 2,
  kArc: 3,
  kCrosvm: 4,
  kPluginvm: 5,
  kUpdateEngine: 6,
  kVpn: 7,
  kSystem: 8,
};

// Union: NetworkTypeStateProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeStateProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.CellularStatePropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetStatePropertiesSpec.$,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.VPNStatePropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.WiFiStatePropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeManagedProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeManagedProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeConfigProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeConfigProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.CellularConfigPropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.VPNConfigPropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: SIMLockStatus
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMLockStatusSpec, 'chromeos.network_config.mojom.SIMLockStatus', [
      mojo.internal.StructField('lock_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('retries_left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('lock_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SIMInfo
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMInfoSpec, 'chromeos.network_config.mojom.SIMInfo', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('slot_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_primary', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularStatePropertiesSpec, 'chromeos.network_config.mojom.CellularStateProperties', [
      mojo.internal.StructField('iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activation_state', 16, 0, chromeos.network_config.mojom.ActivationStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('network_technology', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_operator', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 48, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('roaming', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_lock_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_nick_name', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetStatePropertiesSpec, 'chromeos.network_config.mojom.EthernetStateProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.AuthenticationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TetherStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TetherStatePropertiesSpec, 'chromeos.network_config.mojom.TetherStateProperties', [
      mojo.internal.StructField('carrier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('battery_percentage', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_connected_to_host', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VPNStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNStatePropertiesSpec, 'chromeos.network_config.mojom.VPNStateProperties', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiStatePropertiesSpec, 'chromeos.network_config.mojom.WiFiStateProperties', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('visible', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: NetworkStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkStateProperties', [
      mojo.internal.StructField('connection_state', 0, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_state', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('portal_state', 32, 0, chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('portal_probe_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_mode', 48, 0, chromeos.network_config.mojom.ProxyModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 56, 0, chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type_state', 72, 0, chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('connectable', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connect_requested', 84, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prohibited_by_policy', 84, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: DeviceStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.DeviceStatePropertiesSpec, 'chromeos.network_config.mojom.DeviceStateProperties', [
      mojo.internal.StructField('ipv4_address', 0, 0, network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ipv6_address', 8, 0, network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('imei', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sim_lock_status', 32, 0, chromeos.network_config.mojom.SIMLockStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sim_infos', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.SIMInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('inhibit_reason', 48, 0, chromeos.network_config.mojom.InhibitReasonSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('device_state', 56, 0, chromeos.network_config.mojom.DeviceStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serial', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('scanning', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_absent', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed_network_available', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_carrier_locked', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_flashing', 80, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: NetworkFilter
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkFilterSpec, 'chromeos.network_config.mojom.NetworkFilter', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.FilterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_type', 8, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('limit', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ApnPropertiesSpec, 'chromeos.network_config.mojom.ApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('authentication', 16, 0, chromeos.network_config.mojom.ApnAuthenticationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('attach', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('state', 72, 0, chromeos.network_config.mojom.ApnStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_type', 80, 0, chromeos.network_config.mojom.ApnIpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('apn_types', 88, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 96, 0, chromeos.network_config.mojom.ApnSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: RoamingProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.RoamingPropertiesSpec, 'chromeos.network_config.mojom.RoamingProperties', [
      mojo.internal.StructField('allow_roaming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularProviderProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularProviderPropertiesSpec, 'chromeos.network_config.mojom.CellularProviderProperties', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('country', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FoundNetworkProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.FoundNetworkPropertiesSpec, 'chromeos.network_config.mojom.FoundNetworkProperties', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('short_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('long_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.IPConfigPropertiesSpec, 'chromeos.network_config.mojom.IPConfigProperties', [
      mojo.internal.StructField('gateway', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('excluded_routes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('included_routes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('name_servers', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('search_domains', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('type', 48, 0, chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PaymentPortalProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.PaymentPortalPropertiesSpec, 'chromeos.network_config.mojom.PaymentPortalProperties', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('post_data', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WireGuardPeerProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, 'chromeos.network_config.mojom.WireGuardPeerProperties', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preshared_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_ips', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('endpoint', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('persistent_keepalive_interval', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManagedBoolean
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedBooleanSpec, 'chromeos.network_config.mojom.ManagedBoolean', [
      mojo.internal.StructField('policy_source', 0, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('active_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedInt32
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedInt32Spec, 'chromeos.network_config.mojom.ManagedInt32', [
      mojo.internal.StructField('policy_source', 0, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('active_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedString
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringSpec, 'chromeos.network_config.mojom.ManagedString', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedStringList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringListSpec, 'chromeos.network_config.mojom.ManagedStringList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnPropertiesSpec, 'chromeos.network_config.mojom.ManagedApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('authentication', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('language', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('attach', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ManagedApnList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnListSpec, 'chromeos.network_config.mojom.ManagedApnList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIssuerSubjectPattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern', [
      mojo.internal.StructField('common_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('locality', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('organization', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('organizational_unit', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCertificatePattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCertificatePatternSpec, 'chromeos.network_config.mojom.ManagedCertificatePattern', [
      mojo.internal.StructField('enrollment_uri', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issuer', 8, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issuer_ca_ref', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject', 24, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedEAPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEAPPropertiesSpec, 'chromeos.network_config.mojom.ManagedEAPProperties', [
      mojo.internal.StructField('anonymous_identity', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match', 48, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('identity', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('inner', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('outer', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 80, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 96, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 112, 0, chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject_match', 120, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_max', 128, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('use_proactive_key_caching', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 144, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ManagedSubjectAltNameMatchList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPConfigProperties', [
      mojo.internal.StructField('gateway', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name_servers', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 24, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 32, 0, chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ManagedIPSecProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPSecProperties', [
      mojo.internal.StructField('authentication_type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap', 48, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 64, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('local_identity', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('psk', 80, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 88, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 96, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 112, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
    ],
    [[0, 128]]);

// Struct: ManagedL2TPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, 'chromeos.network_config.mojom.ManagedL2TPProperties', [
      mojo.internal.StructField('lcp_echo_disabled', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxyLocation
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxyLocationSpec, 'chromeos.network_config.mojom.ManagedProxyLocation', [
      mojo.internal.StructField('host', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedManualProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedManualProxySettingsSpec, 'chromeos.network_config.mojom.ManagedManualProxySettings', [
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxySettingsSpec, 'chromeos.network_config.mojom.ManagedProxySettings', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('exclude_domains', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pac', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedVerifyX509Properties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, 'chromeos.network_config.mojom.ManagedVerifyX509Properties', [
      mojo.internal.StructField('name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedOpenVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedOpenVPNProperties', [
      mojo.internal.StructField('auth', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auth_retry', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auth_no_cache', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cipher', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 40, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('compression_algorithm', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('extra_hosts', 80, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ignore_default_route', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('key_direction', 96, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ns_cert_type', 104, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 112, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('port', 120, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('proto', 128, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('push_peer_info', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_eku', 144, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_ku', 152, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_tls', 160, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reneg_sec', 168, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 176, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 184, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 192, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_cert_ref', 200, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_poll_timeout', 208, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('shaper', 216, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('static_challenge', 224, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_auth_contents', 232, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_remote', 240, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_min', 248, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 256, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 264, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verb', 272, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verify_hash', 280, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verify_x509', 288, 0, chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 304]]);

// Struct: ManagedWireGuardPeerList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, 'chromeos.network_config.mojom.ManagedWireGuardPeerList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedWireGuardProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, 'chromeos.network_config.mojom.ManagedWireGuardProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('public_key', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peers', 24, 0, chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCellularProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCellularPropertiesSpec, 'chromeos.network_config.mojom.ManagedCellularProperties', [
      mojo.internal.StructField('activation_state', 0, 0, chromeos.network_config.mojom.ActivationStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_roaming', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('apn_list', 24, 0, chromeos.network_config.mojom.ManagedApnListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 32, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('custom_apn_list', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('eid', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('esn', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('family', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('firmware_revision', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('found_networks', 80, 0, mojo.internal.Array(chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('hardware_revision', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('home_provider', 96, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('iccid', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('imei', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('last_good_apn', 120, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connected_apn', 128, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mdn', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('meid', 152, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('min', 160, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('model_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('network_technology', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 192, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('roaming_state', 200, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selected_apn', 208, 0, chromeos.network_config.mojom.ManagedApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('serving_operator', 216, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 224, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 228, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_network_scan', 228, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: ManagedEthernetProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEthernetPropertiesSpec, 'chromeos.network_config.mojom.ManagedEthernetProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedVPNProperties', [
      mojo.internal.StructField('auto_connect', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('host', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 16, 0, chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 24, 0, chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 32, 0, chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 40, 0, chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('provider_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('provider_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManagedWiFiProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWiFiPropertiesSpec, 'chromeos.network_config.mojom.ManagedWiFiProperties', [
      mojo.internal.StructField('allow_gateway_arp_polling', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frequency_list', 32, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('hex_ssid', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('security', 72, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('passpoint_match_type', 88, 0, chromeos.network_config.mojom.MatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_syncable', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_configured_by_active_user', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: UInt32Value
mojo.internal.Struct(
    chromeos.network_config.mojom.UInt32ValueSpec, 'chromeos.network_config.mojom.UInt32Value', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrafficCounterProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterPropertiesSpec, 'chromeos.network_config.mojom.TrafficCounterProperties', [
      mojo.internal.StructField('last_reset_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('friendly_date', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('user_specified_reset_day', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('auto_reset', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedPropertiesSpec, 'chromeos.network_config.mojom.ManagedProperties', [
      mojo.internal.StructField('connection_state', 0, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_configs', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.IPConfigPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('metered', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 72, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 80, 0, chromeos.network_config.mojom.ManagedProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('portal_state', 88, 0, chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('static_ip_config', 96, 0, chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('saved_ip_config', 104, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 112, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type_properties', 120, 0, chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_counter_properties', 128, 0, chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connectable', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

// Struct: AutoConnectConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.AutoConnectConfigSpec, 'chromeos.network_config.mojom.AutoConnectConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MeteredConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.MeteredConfigSpec, 'chromeos.network_config.mojom.MeteredConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PriorityConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.PriorityConfigSpec, 'chromeos.network_config.mojom.PriorityConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VpnTypeConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.VpnTypeConfigSpec, 'chromeos.network_config.mojom.VpnTypeConfig', [
      mojo.internal.StructField('value', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyLocation
mojo.internal.Struct(
    chromeos.network_config.mojom.ProxyLocationSpec, 'chromeos.network_config.mojom.ProxyLocation', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManualProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManualProxySettingsSpec, 'chromeos.network_config.mojom.ManualProxySettings', [
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ProxySettingsSpec, 'chromeos.network_config.mojom.ProxySettings', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManualProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('exclude_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('pac', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EAPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EAPConfigPropertiesSpec, 'chromeos.network_config.mojom.EAPConfigProperties', [
      mojo.internal.StructField('anonymous_identity', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('identity', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('inner', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('outer', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 72, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('subject_match', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_system_cas', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: SubjectAltName
mojo.internal.Struct(
    chromeos.network_config.mojom.SubjectAltNameSpec, 'chromeos.network_config.mojom.SubjectAltName', [
      mojo.internal.StructField('kEmail', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IPSecConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.IPSecConfigPropertiesSpec, 'chromeos.network_config.mojom.IPSecConfigProperties', [
      mojo.internal.StructField('authentication_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('local_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('psk', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 80, 0, mojo.internal.Int32, 1, false, 0, undefined),
      mojo.internal.StructField('save_credentials', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: L2TPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.L2TPConfigPropertiesSpec, 'chromeos.network_config.mojom.L2TPConfigProperties', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lcp_echo_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OpenVPNConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, 'chromeos.network_config.mojom.OpenVPNConfigProperties', [
      mojo.internal.StructField('client_cert_pkcs11_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_hosts', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('otp', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WireGuardConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, 'chromeos.network_config.mojom.WireGuardConfigProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('peers', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextMessagesAllowState
mojo.internal.Struct(
    chromeos.network_config.mojom.TextMessagesAllowStateSpec, 'chromeos.network_config.mojom.TextMessagesAllowState', [
      mojo.internal.StructField('allow_text_messages', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularConfigPropertiesSpec, 'chromeos.network_config.mojom.CellularConfigProperties', [
      mojo.internal.StructField('apn', 0, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('roaming', 8, 0, chromeos.network_config.mojom.RoamingPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('text_message_allow_state', 16, 0, chromeos.network_config.mojom.TextMessagesAllowStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EthernetConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetConfigPropertiesSpec, 'chromeos.network_config.mojom.EthernetConfigProperties', [
      mojo.internal.StructField('authentication', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VPNConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNConfigPropertiesSpec, 'chromeos.network_config.mojom.VPNConfigProperties', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 8, 0, chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 16, 0, chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 24, 0, chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 32, 0, chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 40, 0, chromeos.network_config.mojom.VpnTypeConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WiFiConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiConfigPropertiesSpec, 'chromeos.network_config.mojom.WiFiConfigProperties', [
      mojo.internal.StructField('eap', 0, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('security', 24, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 32, 0, chromeos.network_config.mojom.HiddenSsidModeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ConfigPropertiesSpec, 'chromeos.network_config.mojom.ConfigProperties', [
      mojo.internal.StructField('auto_connect', 0, 0, chromeos.network_config.mojom.AutoConnectConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('metered', 24, 0, chromeos.network_config.mojom.MeteredConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, chromeos.network_config.mojom.PriorityConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 56, 0, chromeos.network_config.mojom.ProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('static_ip_config', 64, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type_config', 72, 0, chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: CellularSimState
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularSimStateSpec, 'chromeos.network_config.mojom.CellularSimState', [
      mojo.internal.StructField('current_pin_or_puk', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_pin', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('require_pin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GlobalPolicy
mojo.internal.Struct(
    chromeos.network_config.mojom.GlobalPolicySpec, 'chromeos.network_config.mojom.GlobalPolicy', [
      mojo.internal.StructField('blocked_hex_ssids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 8, 0, chromeos.network_config.mojom.SuppressionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('allow_apn_modification', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_sim_lock', 16, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_hotspot', 16, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_cellular_networks', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_networks_to_autoconnect', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect', 16, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect_if_available', 16, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dns_queries_monitored', 16, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_xdr_events_enabled', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recommended_values_are_ephemeral', 17, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_created_network_configurations_are_ephemeral', 17, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VpnProvider
mojo.internal.Struct(
    chromeos.network_config.mojom.VpnProviderSpec, 'chromeos.network_config.mojom.VpnProvider', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_launch_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkCertificate
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkCertificateSpec, 'chromeos.network_config.mojom.NetworkCertificate', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.CertificateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hash', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_by', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_to', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pem_or_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('available_for_network_auth', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hardware_backed', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_wide', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AlwaysOnVpnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, 'chromeos.network_config.mojom.AlwaysOnVpnProperties', [
      mojo.internal.StructField('mode', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrafficCounter
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterSpec, 'chromeos.network_config.mojom.TrafficCounter', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_config.mojom.TrafficCounterSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rx_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tx_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrosNetworkConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_config.mojom.CrosNetworkConfigObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_Params', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.NetworkFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.DeviceStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.ManagedPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParams', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_Params', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_config.mojom.CellularSimStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.GlobalPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.StartConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_Params', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParams', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParams', [
      mojo.internal.StructField('server_cas', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_certs', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParams', [
      mojo.internal.StructField('vpn_types', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParams', [
      mojo.internal.StructField('traffic_counters', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.TrafficCounterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('day', 8, 0, chromeos.network_config.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosNetworkConfig', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getNetworkState(guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [guid],
      false);
  }

  getNetworkStateList(filter) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [filter],
      false);
  }

  getDeviceStateList() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      [],
      false);
  }

  getManagedProperties(guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [guid],
      false);
  }

  setProperties(guid, properties) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [guid, properties],
      false);
  }

  configureNetwork(properties, shared) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [properties, shared],
      false);
  }

  forgetNetwork(guid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [guid],
      false);
  }

  setNetworkTypeEnabledState(type, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [type, enabled],
      false);
  }

  setCellularSimState(state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [state],
      false);
  }

  selectCellularMobileNetwork(guid, network_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [guid, network_id],
      false);
  }

  requestNetworkScan(type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [type],
      false);
  }

  getGlobalPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      [],
      false);
  }

  startConnect(guid) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [guid],
      false);
  }

  startDisconnect(guid) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [guid],
      false);
  }

  setVpnProviders(providers) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [providers],
      false);
  }

  getVpnProviders() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      [],
      false);
  }

  getNetworkCertificates() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysOnVpn() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysOnVpn(properties) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [properties],
      false);
  }

  getSupportedVpnTypes() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      [],
      false);
  }

  requestTrafficCounters(guid) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [guid],
      false);
  }

  resetTrafficCounters(guid) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [guid],
      false);
  }

  setTrafficCountersResetDay(guid, day) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [guid, day],
      false);
  }

  createCustomApn(network_guid, apn) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [network_guid, apn],
      false);
  }

  createExclusivelyEnabledCustomApn(network_guid, apn) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [network_guid, apn],
      false);
  }

  removeCustomApn(network_guid, apn_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [network_guid, apn_id],
      false);
  }

  modifyCustomApn(network_guid, apn) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [network_guid, apn],
      false);
  }

};

chromeos.network_config.mojom.CrosNetworkConfig.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfig',
    'context');
  return remote.$;
};

chromeos.network_config.mojom.CrosNetworkConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosNetworkConfig', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetNetworkState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetNetworkStateList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkStateList (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetDeviceStateList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceStateList (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetManagedProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetManagedProperties (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProperties (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ConfigureNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureNetwork (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ForgetNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetNetwork (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetNetworkTypeEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkTypeEnabledState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetCellularSimState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCellularSimState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SelectCellularMobileNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectCellularMobileNetwork (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RequestNetworkScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNetworkScan (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetGlobalPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGlobalPolicy (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: StartConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartConnect (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: StartDisconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDisconnect (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetVpnProviders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVpnProviders (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GetVpnProviders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVpnProviders (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetNetworkCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkCertificates (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GetAlwaysOnVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysOnVpn (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetAlwaysOnVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysOnVpn (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetSupportedVpnTypes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedVpnTypes (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RequestTrafficCounters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTrafficCounters (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ResetTrafficCounters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetTrafficCounters (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetTrafficCountersResetDay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrafficCountersResetDay (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: CreateCustomApn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCustomApn (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: CreateExclusivelyEnabledCustomApn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateExclusivelyEnabledCustomApn (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RemoveCustomApn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCustomApn (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: ModifyCustomApn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ModifyCustomApn (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
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
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkState');
          const result = this.impl.getNetworkState(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkStateList');
          const result = this.impl.getNetworkStateList(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceStateList');
          const result = this.impl.getDeviceStateList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagedProperties');
          const result = this.impl.getManagedProperties(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProperties');
          const result = this.impl.setProperties(params.guid, params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureNetwork');
          const result = this.impl.configureNetwork(params.properties, params.shared);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkTypeEnabledState');
          const result = this.impl.setNetworkTypeEnabledState(params.type, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCellularSimState');
          const result = this.impl.setCellularSimState(params.state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectCellularMobileNetwork');
          const result = this.impl.selectCellularMobileNetwork(params.guid, params.network_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNetworkScan');
          const result = this.impl.requestNetworkScan(params.type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGlobalPolicy');
          const result = this.impl.getGlobalPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVpnProviders');
          const result = this.impl.setVpnProviders(params.providers);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVpnProviders');
          const result = this.impl.getVpnProviders();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkCertificates');
          const result = this.impl.getNetworkCertificates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysOnVpn');
          const result = this.impl.getAlwaysOnVpn();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.properties);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVpnTypes');
          const result = this.impl.getSupportedVpnTypes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTrafficCounters');
          const result = this.impl.requestTrafficCounters(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetTrafficCounters');
          const result = this.impl.resetTrafficCounters(params.guid);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrafficCountersResetDay');
          const result = this.impl.setTrafficCountersResetDay(params.guid, params.day);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCustomApn');
          const result = this.impl.createCustomApn(params.network_guid, params.apn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createExclusivelyEnabledCustomApn');
          const result = this.impl.createExclusivelyEnabledCustomApn(params.network_guid, params.apn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCustomApn');
          const result = this.impl.removeCustomApn(params.network_guid, params.apn_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.modifyCustomApn');
          const result = this.impl.modifyCustomApn(params.network_guid, params.apn);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.network_config.mojom.CrosNetworkConfigReceiver = chromeos.network_config.mojom.CrosNetworkConfigReceiver;

chromeos.network_config.mojom.CrosNetworkConfigPtr = chromeos.network_config.mojom.CrosNetworkConfigRemote;
chromeos.network_config.mojom.CrosNetworkConfigRequest = chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('network', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_Params', [
      mojo.internal.StructField('userhash', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosNetworkConfigObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onActiveNetworksChanged(networks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec,
      null,
      [networks],
      false);
  }

  onNetworkStateChanged(network) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network],
      false);
  }

  onNetworkStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onVpnProvidersChanged() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkCertificatesChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onPoliciesApplied(userhash) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [userhash],
      false);
  }

};

chromeos.network_config.mojom.CrosNetworkConfigObserver.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfigObserver',
    'context');
  return remote.$;
};

chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosNetworkConfigObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: OnActiveNetworksChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActiveNetworksChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNetworkStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnNetworkStateListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkStateListChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDeviceStateListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceStateListChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnVpnProvidersChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVpnProvidersChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnNetworkCertificatesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkCertificatesChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPoliciesApplied
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPoliciesApplied (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworksChanged');
          const result = this.impl.onActiveNetworksChanged(params.networks);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateChanged');
          const result = this.impl.onNetworkStateChanged(params.network);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateListChanged');
          const result = this.impl.onNetworkStateListChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStateListChanged');
          const result = this.impl.onDeviceStateListChanged();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVpnProvidersChanged');
          const result = this.impl.onVpnProvidersChanged();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkCertificatesChanged');
          const result = this.impl.onNetworkCertificatesChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPoliciesApplied');
          const result = this.impl.onPoliciesApplied(params.userhash);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver;

chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

