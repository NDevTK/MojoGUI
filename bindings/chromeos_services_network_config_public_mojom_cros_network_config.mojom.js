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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_config = mojo.internal.bindings.chromeos.network_config || {};
mojo.internal.bindings.chromeos.network_config.mojom = mojo.internal.bindings.chromeos.network_config.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ProxyModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.MatchTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.InhibitReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ApnStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ApnIpTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ApnTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.ApnSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.SuppressionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigSpec = { $ : {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfig';
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver = {};
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverSpec = { $ : {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = { $: {} };

mojo.internal.bindings.chromeos.network_config.mojom.kMaxNumCustomApns = 10;

mojo.internal.bindings.chromeos.network_config.mojom.kNoLimit = 0;

mojo.internal.bindings.chromeos.network_config.mojom.kNoRoutingPrefix = 0;

// Enum: ActivationStateType
mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateType = {
  kUnknown: 0,
  kNotActivated: 1,
  kActivating: 2,
  kPartiallyActivated: 3,
  kActivated: 4,
  kNoService: 5,
};

// Enum: AuthenticationType
mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: HiddenSsidMode
mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidMode = {
  kAutomatic: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: ProxyMode
mojo.internal.bindings.chromeos.network_config.mojom.ProxyMode = {
  kDirect: 0,
  kAutoDetect: 1,
  kPacScript: 2,
  kFixedServers: 3,
  kSystem: 4,
};

// Enum: SecurityType
mojo.internal.bindings.chromeos.network_config.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Enum: MatchType
mojo.internal.bindings.chromeos.network_config.mojom.MatchType = {
  kNoMatch: 0,
  kHome: 1,
  kRoaming: 2,
  kUnknown: 3,
};

// Enum: VpnType
mojo.internal.bindings.chromeos.network_config.mojom.VpnType = {
  kIKEv2: 0,
  kL2TPIPsec: 1,
  kOpenVPN: 2,
  kWireGuard: 3,
  kExtension: 4,
  kArc: 5,
};

// Enum: FilterType
mojo.internal.bindings.chromeos.network_config.mojom.FilterType = {
  kActive: 0,
  kVisible: 1,
  kConfigured: 2,
  kAll: 3,
};

// Enum: StartConnectResult
mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResult = {
  kSuccess: 0,
  kInvalidGuid: 1,
  kInvalidState: 2,
  kCanceled: 3,
  kNotConfigured: 4,
  kBlocked: 5,
  kUnknown: 6,
};

// Enum: CertificateType
mojo.internal.bindings.chromeos.network_config.mojom.CertificateType = {
  kServerCA: 0,
  kUserCert: 1,
};

// Enum: InhibitReason
mojo.internal.bindings.chromeos.network_config.mojom.InhibitReason = {
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
mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnMode = {
  kOff: 0,
  kBestEffort: 1,
  kStrict: 2,
};

// Enum: ApnState
mojo.internal.bindings.chromeos.network_config.mojom.ApnState = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: ApnAuthenticationType
mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationType = {
  kAutomatic: 0,
  kPap: 1,
  kChap: 2,
};

// Enum: ApnIpType
mojo.internal.bindings.chromeos.network_config.mojom.ApnIpType = {
  kAutomatic: 0,
  kIpv4: 1,
  kIpv6: 2,
  kIpv4Ipv6: 3,
};

// Enum: ApnType
mojo.internal.bindings.chromeos.network_config.mojom.ApnType = {
  kDefault: 0,
  kAttach: 1,
  kTether: 2,
};

// Enum: ApnSource
mojo.internal.bindings.chromeos.network_config.mojom.ApnSource = {
  kModem: 0,
  kModb: 1,
  kUi: 2,
};

// Enum: Type
mojo.internal.bindings.chromeos.network_config.mojom.Type = {
  kEmail: 0,
  kDns: 1,
  kUri: 2,
};

// Enum: SuppressionType
mojo.internal.bindings.chromeos.network_config.mojom.SuppressionType = {
  kUnset: 0,
  kAllow: 1,
  kSuppress: 2,
};

// Enum: TrafficCounterSource
mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSource = {
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
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeStateProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_tether': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 4,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeManagedProperties
mojo.internal.Union(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeManagedProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$,
        'nullable': false,
      },
      'arg_tether': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 4,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeConfigProperties
mojo.internal.Union(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeConfigProperties', {
      'arg_cellular': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec.$,
        'nullable': false,
      },
      'arg_ethernet': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$,
        'nullable': false,
      },
      'arg_vpn': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec.$,
        'nullable': false,
      },
      'arg_wifi': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: SIMLockStatus
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec, 'chromeos.network_config.mojom.SIMLockStatus', [
      mojo.internal.StructField('arg_lock_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_retries_left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lock_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SIMInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec, 'chromeos.network_config.mojom.SIMInfo', [
      mojo.internal.StructField('arg_eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_slot_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_primary', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularStatePropertiesSpec, 'chromeos.network_config.mojom.CellularStateProperties', [
      mojo.internal.StructField('arg_iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activation_state', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_network_technology', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_operator', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payment_portal', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_roaming', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_locked', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_nick_name', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EthernetStatePropertiesSpec, 'chromeos.network_config.mojom.EthernetStateProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AuthenticationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TetherStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TetherStatePropertiesSpec, 'chromeos.network_config.mojom.TetherStateProperties', [
      mojo.internal.StructField('arg_carrier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_percentage', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_connected_to_host', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VPNStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VPNStatePropertiesSpec, 'chromeos.network_config.mojom.VPNStateProperties', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WiFiStatePropertiesSpec, 'chromeos.network_config.mojom.WiFiStateProperties', [
      mojo.internal.StructField('arg_bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ssid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_passpoint_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: NetworkStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkStateProperties', [
      mojo.internal.StructField('arg_connection_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_state', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_portal_state', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_portal_probe_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_mode', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type_state', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_connectable', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connect_requested', 84, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prohibited_by_policy', 84, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: DeviceStateProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec, 'chromeos.network_config.mojom.DeviceStateProperties', [
      mojo.internal.StructField('arg_ipv4_address', 0, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ipv6_address', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_imei', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_status', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.SIMLockStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sim_infos', 40, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SIMInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_inhibit_reason', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.InhibitReasonSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_state', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.DeviceStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_scanning', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sim_absent', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_managed_network_available', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_carrier_locked', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_flashing', 80, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: NetworkFilter
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec, 'chromeos.network_config.mojom.NetworkFilter', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.FilterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_type', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_limit', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ApnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec, 'chromeos.network_config.mojom.ApnProperties', [
      mojo.internal.StructField('arg_access_point_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_authentication', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnAuthenticationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_localized_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_attach', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_state', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_type', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnIpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn_types', 88, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: RoamingProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec, 'chromeos.network_config.mojom.RoamingProperties', [
      mojo.internal.StructField('arg_allow_roaming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularProviderProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec, 'chromeos.network_config.mojom.CellularProviderProperties', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_country', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FoundNetworkProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec, 'chromeos.network_config.mojom.FoundNetworkProperties', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_short_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_long_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec, 'chromeos.network_config.mojom.IPConfigProperties', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_excluded_routes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_included_routes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_search_domains', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_proxy_auto_discovery_url', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PaymentPortalProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec, 'chromeos.network_config.mojom.PaymentPortalProperties', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_post_data', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WireGuardPeerProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, 'chromeos.network_config.mojom.WireGuardPeerProperties', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_preshared_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_ips', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_persistent_keepalive_interval', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManagedBoolean
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec, 'chromeos.network_config.mojom.ManagedBoolean', [
      mojo.internal.StructField('arg_policy_source', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedInt32
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec, 'chromeos.network_config.mojom.ManagedInt32', [
      mojo.internal.StructField('arg_policy_source', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedString
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec, 'chromeos.network_config.mojom.ManagedString', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedStringList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec, 'chromeos.network_config.mojom.ManagedStringList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedApnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec, 'chromeos.network_config.mojom.ManagedApnProperties', [
      mojo.internal.StructField('arg_access_point_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_authentication', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_language', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_localized_name', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_attach', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ManagedApnList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec, 'chromeos.network_config.mojom.ManagedApnList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIssuerSubjectPattern
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern', [
      mojo.internal.StructField('arg_common_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_locality', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_organization', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_organizational_unit', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCertificatePattern
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec, 'chromeos.network_config.mojom.ManagedCertificatePattern', [
      mojo.internal.StructField('arg_enrollment_uri', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_issuer', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_issuer_ca_ref', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedEAPProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec, 'chromeos.network_config.mojom.ManagedEAPProperties', [
      mojo.internal.StructField('arg_anonymous_identity', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_identity', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_inner', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_outer', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alt_name_match', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_max', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_proactive_key_caching', 136, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 144, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ManagedSubjectAltNameMatchList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPConfigProperties', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_proxy_auto_discovery_url', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ManagedIPSecProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPSecProperties', [
      mojo.internal.StructField('arg_authentication_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_group', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ike_version', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_local_identity', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_psk', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_identity', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
    ],
    [[0, 128]]);

// Struct: ManagedL2TPProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, 'chromeos.network_config.mojom.ManagedL2TPProperties', [
      mojo.internal.StructField('arg_lcp_echo_disabled', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxyLocation
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec, 'chromeos.network_config.mojom.ManagedProxyLocation', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedManualProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec, 'chromeos.network_config.mojom.ManagedManualProxySettings', [
      mojo.internal.StructField('arg_http_proxy', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_secure_http_proxy', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ftp_proxy', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_socks', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec, 'chromeos.network_config.mojom.ManagedProxySettings', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_manual', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_exclude_domains', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pac', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedVerifyX509Properties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, 'chromeos.network_config.mojom.ManagedVerifyX509Properties', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedOpenVPNProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedOpenVPNProperties', [
      mojo.internal.StructField('arg_auth', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_retry', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_no_cache', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cipher', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pattern', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_provisioning_profile_id', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_ref', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_compression_algorithm', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_hosts', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ignore_default_route', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_key_direction', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ns_cert_type', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_port', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_proto', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_push_peer_info', 136, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_eku', 144, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_ku', 152, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_cert_tls', 160, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_reneg_sec', 168, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 176, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 184, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 192, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_cert_ref', 200, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_poll_timeout', 208, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_shaper', 216, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_challenge', 224, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_auth_contents', 232, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_remote', 240, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_min', 248, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_authentication_type', 256, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 264, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_verb', 272, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_verify_hash', 280, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_verify_x509', 288, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 304]]);

// Struct: ManagedWireGuardPeerList
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, 'chromeos.network_config.mojom.ManagedWireGuardPeerList', [
      mojo.internal.StructField('arg_active_value', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_policy_value', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedWireGuardProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, 'chromeos.network_config.mojom.ManagedWireGuardProperties', [
      mojo.internal.StructField('arg_ip_addresses', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_private_key', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_public_key', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_peers', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCellularProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedCellularPropertiesSpec, 'chromeos.network_config.mojom.ManagedCellularProperties', [
      mojo.internal.StructField('arg_activation_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ActivationStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_roaming', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_text_messages', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_apn_list', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_connect', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_apn_list', 40, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_eid', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_esn', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_family', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_firmware_revision', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_found_networks', 80, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_hardware_revision', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_home_provider', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_iccid', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_imei', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_last_good_apn', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connected_apn', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mdn', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_meid', 152, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_min', 160, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_technology', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sim_lock_type', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_payment_portal', 192, 0, mojo.internal.bindings.chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_roaming_state', 200, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_selected_apn', 208, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_serving_operator', 216, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 224, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sim_locked', 228, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_network_scan', 228, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: ManagedEthernetProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedEthernetPropertiesSpec, 'chromeos.network_config.mojom.ManagedEthernetProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedVPNProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedVPNProperties', [
      mojo.internal.StructField('arg_auto_connect', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_sec', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_l2tp', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_open_vpn', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wireguard', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManagedWiFiProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedWiFiPropertiesSpec, 'chromeos.network_config.mojom.ManagedWiFiProperties', [
      mojo.internal.StructField('arg_allow_gateway_arp_polling', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auto_connect', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frequency_list', 32, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssid', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_passpoint_id', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_passpoint_match_type', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.MatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_syncable', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_configured_by_active_user', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: UInt32Value
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec, 'chromeos.network_config.mojom.UInt32Value', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrafficCounterProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec, 'chromeos.network_config.mojom.TrafficCounterProperties', [
      mojo.internal.StructField('arg_last_reset_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_friendly_date', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_specified_reset_day', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_auto_reset', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec, 'chromeos.network_config.mojom.ManagedProperties', [
      mojo.internal.StructField('arg_connection_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address_config_type', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_configs', 40, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_metered', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers_config_type', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_settings', 80, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_portal_state', 88, 0, mojo.internal.bindings.chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_static_ip_config', 96, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_saved_ip_config', 104, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 112, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type_properties', 120, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_counter_properties', 128, 0, mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connectable', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

// Struct: AutoConnectConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec, 'chromeos.network_config.mojom.AutoConnectConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MeteredConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec, 'chromeos.network_config.mojom.MeteredConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PriorityConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec, 'chromeos.network_config.mojom.PriorityConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VpnTypeConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec, 'chromeos.network_config.mojom.VpnTypeConfig', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyLocation
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec, 'chromeos.network_config.mojom.ProxyLocation', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManualProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec, 'chromeos.network_config.mojom.ManualProxySettings', [
      mojo.internal.StructField('arg_http_proxy', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_secure_http_proxy', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ftp_proxy', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_socks', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxySettings
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec, 'chromeos.network_config.mojom.ProxySettings', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manual', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManualProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_exclude_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_pac', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EAPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec, 'chromeos.network_config.mojom.EAPConfigProperties', [
      mojo.internal.StructField('arg_anonymous_identity', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identity', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_inner', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_outer', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alt_name_match', 72, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: SubjectAltName
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.SubjectAltNameSpec, 'chromeos.network_config.mojom.SubjectAltName', [
      mojo.internal.StructField('arg_kEmail', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IPSecConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec, 'chromeos.network_config.mojom.IPSecConfigProperties', [
      mojo.internal.StructField('arg_authentication_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_group', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_local_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_psk', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_identity', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_ike_version', 80, 0, mojo.internal.Int32, 1, false, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: L2TPConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec, 'chromeos.network_config.mojom.L2TPConfigProperties', [
      mojo.internal.StructField('arg_password', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_lcp_echo_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OpenVPNConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, 'chromeos.network_config.mojom.OpenVPNConfigProperties', [
      mojo.internal.StructField('arg_client_cert_pkcs11_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_cert_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_extra_hosts', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_otp', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_pems', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_server_ca_refs', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_authentication_type', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_save_credentials', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WireGuardConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, 'chromeos.network_config.mojom.WireGuardConfigProperties', [
      mojo.internal.StructField('arg_ip_addresses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_private_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_peers', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextMessagesAllowState
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec, 'chromeos.network_config.mojom.TextMessagesAllowState', [
      mojo.internal.StructField('arg_allow_text_messages', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularConfigPropertiesSpec, 'chromeos.network_config.mojom.CellularConfigProperties', [
      mojo.internal.StructField('arg_apn', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_roaming', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.RoamingPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_text_message_allow_state', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.TextMessagesAllowStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EthernetConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.EthernetConfigPropertiesSpec, 'chromeos.network_config.mojom.EthernetConfigProperties', [
      mojo.internal.StructField('arg_authentication', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VPNConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VPNConfigPropertiesSpec, 'chromeos.network_config.mojom.VPNConfigProperties', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_sec', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_l2tp', 16, 0, mojo.internal.bindings.chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_open_vpn', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wireguard', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 40, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WiFiConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.WiFiConfigPropertiesSpec, 'chromeos.network_config.mojom.WiFiConfigProperties', [
      mojo.internal.StructField('arg_eap', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_security', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.SecurityTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 32, 0, mojo.internal.bindings.chromeos.network_config.mojom.HiddenSsidModeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec, 'chromeos.network_config.mojom.ConfigProperties', [
      mojo.internal.StructField('arg_auto_connect', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AutoConnectConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ip_address_config_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_metered', 24, 0, mojo.internal.bindings.chromeos.network_config.mojom.MeteredConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name_servers_config_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_priority', 48, 0, mojo.internal.bindings.chromeos.network_config.mojom.PriorityConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_settings', 56, 0, mojo.internal.bindings.chromeos.network_config.mojom.ProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_ip_config', 64, 0, mojo.internal.bindings.chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type_config', 72, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: CellularSimState
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec, 'chromeos.network_config.mojom.CellularSimState', [
      mojo.internal.StructField('arg_current_pin_or_puk', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_pin', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_require_pin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GlobalPolicy
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec, 'chromeos.network_config.mojom.GlobalPolicy', [
      mojo.internal.StructField('arg_blocked_hex_ssids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_text_messages', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.SuppressionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_allow_apn_modification', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cellular_sim_lock', 16, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cellular_hotspot', 16, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_cellular_networks', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_networks_to_autoconnect', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_wifi_networks_to_connect', 16, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_only_policy_wifi_networks_to_connect_if_available', 16, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dns_queries_monitored', 16, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_report_xdr_events_enabled', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_recommended_values_are_ephemeral', 17, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_created_network_configurations_are_ephemeral', 17, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VpnProvider
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec, 'chromeos.network_config.mojom.VpnProvider', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_launch_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkCertificate
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec, 'chromeos.network_config.mojom.NetworkCertificate', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.CertificateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hash', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_issued_by', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_issued_to', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pem_or_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_available_for_network_auth', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hardware_backed', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_device_wide', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AlwaysOnVpnProperties
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, 'chromeos.network_config.mojom.AlwaysOnVpnProperties', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrafficCounter
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec, 'chromeos.network_config.mojom.TrafficCounter', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rx_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tx_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrosNetworkConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.DeviceStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ManagedPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParams', [
      mojo.internal.StructField('arg_error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParams', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.CellularSimStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.GlobalPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.StartConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_Params', [
      mojo.internal.StructField('arg_providers', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParams', [
      mojo.internal.StructField('arg_providers', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParams', [
      mojo.internal.StructField('arg_server_cas', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_user_certs', 8, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParams', [
      mojo.internal.StructField('arg_vpn_types', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParams', [
      mojo.internal.StructField('arg_traffic_counters', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.TrafficCounterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_day', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_Params', [
      mojo.internal.StructField('arg_network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apn', 8, 0, mojo.internal.bindings.chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  getNetworkState(arg_guid) {
    return this.$.getNetworkState(arg_guid);
  }
  getNetworkStateList(arg_filter) {
    return this.$.getNetworkStateList(arg_filter);
  }
  getDeviceStateList() {
    return this.$.getDeviceStateList();
  }
  getManagedProperties(arg_guid) {
    return this.$.getManagedProperties(arg_guid);
  }
  setProperties(arg_guid, arg_properties) {
    return this.$.setProperties(arg_guid, arg_properties);
  }
  configureNetwork(arg_properties, arg_shared) {
    return this.$.configureNetwork(arg_properties, arg_shared);
  }
  forgetNetwork(arg_guid) {
    return this.$.forgetNetwork(arg_guid);
  }
  setNetworkTypeEnabledState(arg_type, arg_enabled) {
    return this.$.setNetworkTypeEnabledState(arg_type, arg_enabled);
  }
  setCellularSimState(arg_state) {
    return this.$.setCellularSimState(arg_state);
  }
  selectCellularMobileNetwork(arg_guid, arg_network_id) {
    return this.$.selectCellularMobileNetwork(arg_guid, arg_network_id);
  }
  requestNetworkScan(arg_type) {
    return this.$.requestNetworkScan(arg_type);
  }
  getGlobalPolicy() {
    return this.$.getGlobalPolicy();
  }
  startConnect(arg_guid) {
    return this.$.startConnect(arg_guid);
  }
  startDisconnect(arg_guid) {
    return this.$.startDisconnect(arg_guid);
  }
  setVpnProviders(arg_providers) {
    return this.$.setVpnProviders(arg_providers);
  }
  getVpnProviders() {
    return this.$.getVpnProviders();
  }
  getNetworkCertificates() {
    return this.$.getNetworkCertificates();
  }
  getAlwaysOnVpn() {
    return this.$.getAlwaysOnVpn();
  }
  setAlwaysOnVpn(arg_properties) {
    return this.$.setAlwaysOnVpn(arg_properties);
  }
  getSupportedVpnTypes() {
    return this.$.getSupportedVpnTypes();
  }
  requestTrafficCounters(arg_guid) {
    return this.$.requestTrafficCounters(arg_guid);
  }
  resetTrafficCounters(arg_guid) {
    return this.$.resetTrafficCounters(arg_guid);
  }
  setTrafficCountersResetDay(arg_guid, arg_day) {
    return this.$.setTrafficCountersResetDay(arg_guid, arg_day);
  }
  createCustomApn(arg_network_guid, arg_apn) {
    return this.$.createCustomApn(arg_network_guid, arg_apn);
  }
  createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn) {
    return this.$.createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn);
  }
  removeCustomApn(arg_network_guid, arg_apn_id) {
    return this.$.removeCustomApn(arg_network_guid, arg_apn_id);
  }
  modifyCustomApn(arg_network_guid, arg_apn) {
    return this.$.modifyCustomApn(arg_network_guid, arg_apn);
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfig', [
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

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getNetworkState(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  getNetworkStateList(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  getDeviceStateList() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      [],
      false);
  }

  getManagedProperties(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setProperties(arg_guid, arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [arg_guid, arg_properties],
      false);
  }

  configureNetwork(arg_properties, arg_shared) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [arg_properties, arg_shared],
      false);
  }

  forgetNetwork(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setNetworkTypeEnabledState(arg_type, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [arg_type, arg_enabled],
      false);
  }

  setCellularSimState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [arg_state],
      false);
  }

  selectCellularMobileNetwork(arg_guid, arg_network_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [arg_guid, arg_network_id],
      false);
  }

  requestNetworkScan(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  getGlobalPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      [],
      false);
  }

  startConnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  startDisconnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  setVpnProviders(arg_providers) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [arg_providers],
      false);
  }

  getVpnProviders() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      [],
      false);
  }

  getNetworkCertificates() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysOnVpn() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysOnVpn(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  getSupportedVpnTypes() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      [],
      false);
  }

  requestTrafficCounters(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  resetTrafficCounters(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [arg_guid],
      false);
  }

  setTrafficCountersResetDay(arg_guid, arg_day) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [arg_guid, arg_day],
      false);
  }

  createCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [arg_network_guid, arg_apn],
      false);
  }

  createExclusivelyEnabledCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [arg_network_guid, arg_apn],
      false);
  }

  removeCustomApn(arg_network_guid, arg_apn_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [arg_network_guid, arg_apn_id],
      false);
  }

  modifyCustomApn(arg_network_guid, arg_apn) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [arg_network_guid, arg_apn],
      false);
  }

};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfig',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfig', [
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkState');
          const result = this.impl.getNetworkState(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNetworkState FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkStateList');
          const result = this.impl.getNetworkStateList(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNetworkStateList FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceStateList');
          const result = this.impl.getDeviceStateList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceStateList FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getManagedProperties');
          const result = this.impl.getManagedProperties(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetManagedProperties FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProperties');
          const result = this.impl.setProperties(params.arg_guid, params.arg_properties);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetProperties FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureNetwork');
          const result = this.impl.configureNetwork(params.arg_properties, params.arg_shared);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfigureNetwork FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForgetNetwork FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkTypeEnabledState');
          const result = this.impl.setNetworkTypeEnabledState(params.arg_type, params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetNetworkTypeEnabledState FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCellularSimState');
          const result = this.impl.setCellularSimState(params.arg_state);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCellularSimState FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectCellularMobileNetwork');
          const result = this.impl.selectCellularMobileNetwork(params.arg_guid, params.arg_network_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectCellularMobileNetwork FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNetworkScan');
          const result = this.impl.requestNetworkScan(params.arg_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGlobalPolicy');
          const result = this.impl.getGlobalPolicy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGlobalPolicy FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartConnect FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartDisconnect FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVpnProviders');
          const result = this.impl.setVpnProviders(params.arg_providers);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVpnProviders');
          const result = this.impl.getVpnProviders();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVpnProviders FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkCertificates');
          const result = this.impl.getNetworkCertificates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNetworkCertificates FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysOnVpn');
          const result = this.impl.getAlwaysOnVpn();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAlwaysOnVpn FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.arg_properties);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVpnTypes');
          const result = this.impl.getSupportedVpnTypes();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSupportedVpnTypes FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTrafficCounters');
          const result = this.impl.requestTrafficCounters(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestTrafficCounters FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetTrafficCounters');
          const result = this.impl.resetTrafficCounters(params.arg_guid);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrafficCountersResetDay');
          const result = this.impl.setTrafficCountersResetDay(params.arg_guid, params.arg_day);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTrafficCountersResetDay FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCustomApn');
          const result = this.impl.createCustomApn(params.arg_network_guid, params.arg_apn);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateCustomApn FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createExclusivelyEnabledCustomApn');
          const result = this.impl.createExclusivelyEnabledCustomApn(params.arg_network_guid, params.arg_apn);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateExclusivelyEnabledCustomApn FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCustomApn');
          const result = this.impl.removeCustomApn(params.arg_network_guid, params.arg_apn_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.modifyCustomApn');
          const result = this.impl.modifyCustomApn(params.arg_network_guid, params.arg_apn);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigReceiver;

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPtr = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRemote;
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigRequest = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_Params', [
      mojo.internal.StructField('arg_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('arg_network', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_Params', [
      mojo.internal.StructField('arg_userhash', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onActiveNetworksChanged(arg_networks) {
    return this.$.onActiveNetworksChanged(arg_networks);
  }
  onNetworkStateChanged(arg_network) {
    return this.$.onNetworkStateChanged(arg_network);
  }
  onNetworkStateListChanged() {
    return this.$.onNetworkStateListChanged();
  }
  onDeviceStateListChanged() {
    return this.$.onDeviceStateListChanged();
  }
  onVpnProvidersChanged() {
    return this.$.onVpnProvidersChanged();
  }
  onNetworkCertificatesChanged() {
    return this.$.onNetworkCertificatesChanged();
  }
  onPoliciesApplied(arg_userhash) {
    return this.$.onPoliciesApplied(arg_userhash);
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfigObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onActiveNetworksChanged(arg_networks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec,
      null,
      [arg_networks],
      false);
  }

  onNetworkStateChanged(arg_network) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [arg_network],
      false);
  }

  onNetworkStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceStateListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onVpnProvidersChanged() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkCertificatesChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onPoliciesApplied(arg_userhash) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [arg_userhash],
      false);
  }

};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfigObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.network_config.mojom.CrosNetworkConfigObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworksChanged');
          const result = this.impl.onActiveNetworksChanged(params.arg_networks);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateChanged');
          const result = this.impl.onNetworkStateChanged(params.arg_network);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateListChanged');
          const result = this.impl.onNetworkStateListChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStateListChanged');
          const result = this.impl.onDeviceStateListChanged();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVpnProvidersChanged');
          const result = this.impl.onVpnProvidersChanged();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkCertificatesChanged');
          const result = this.impl.onNetworkCertificatesChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPoliciesApplied');
          const result = this.impl.onPoliciesApplied(params.arg_userhash);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver;

mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = mojo.internal.bindings.chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

