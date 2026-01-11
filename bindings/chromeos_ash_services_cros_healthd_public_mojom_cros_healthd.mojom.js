// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd.mojom
 // Module: ash.cros_healthd.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService';
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdEventService';
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdProbeService';
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec = { $: {} };

// Interface: CrosHealthdDiagnosticsService
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParams', [
      mojo.internal.StructField('arg_available_routines', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.DiagnosticRoutineEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DiagnosticRoutineCommandEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_include_output', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParams', [
      mojo.internal.StructField('arg_routine_update', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RoutineUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_Params', [
      mojo.internal.StructField('arg_percentage_used_threshold', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 6, undefined),
    ],
    [[0, 8], [6, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_Params', [
      mojo.internal.StructField('arg_expected_status', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.AcPowerStatusEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expected_power_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_Params', [
      mojo.internal.StructField('arg_wear_level_threshold', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_Params', [
      mojo.internal.StructField('arg_wear_level_threshold', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_Params', [
      mojo.internal.StructField('arg_nvme_self_test_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NvmeSelfTestTypeEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DiskReadRoutineTypeEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_length_seconds', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_file_size_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_maximum_discharge_percent_allowed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_charge_percent_required', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_Params', [
      mojo.internal.StructField('arg_max_testing_mem_kib_$value', 0, 0, mojo.internal.Uint32, 0, false, 10, { isPrimary: false, linkedValueFieldName: 'arg_max_testing_mem_kib_$flag', originalFieldName: 'arg_max_testing_mem_kib' }),
      mojo.internal.StructField('arg_max_testing_mem_kib_$flag', 4, 0, mojo.internal.Bool, false, false, 10, { isPrimary: true, linkedValueFieldName: 'arg_max_testing_mem_kib_$value', originalFieldName: 'arg_max_testing_mem_kib' }),
    ],
    [[0, 8], [10, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_Params', [
      mojo.internal.StructField('arg_stun_server_hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_Params', [
      mojo.internal.StructField('arg_target_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_LedNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_LedColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_replier', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_Params', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_volume', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mute_on', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_Params', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_gain', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_deprecated_mute_on', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_Params', [
      mojo.internal.StructField('arg_length_seconds', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_Params', [
      mojo.internal.StructField('arg_peripheral_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_Params', [
      mojo.internal.StructField('arg_timeout_seconds', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.RunRoutineResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAvailableRoutines() {
    return this.$.getAvailableRoutines();
  }
  getRoutineUpdate(arg_id, arg_command, arg_include_output) {
    return this.$.getRoutineUpdate(arg_id, arg_command, arg_include_output);
  }
  runUrandomRoutine(arg_length_seconds) {
    return this.$.runUrandomRoutine(arg_length_seconds);
  }
  runBatteryCapacityRoutine() {
    return this.$.runBatteryCapacityRoutine();
  }
  runBatteryHealthRoutine() {
    return this.$.runBatteryHealthRoutine();
  }
  runSmartctlCheckRoutine(arg_percentage_used_threshold) {
    return this.$.runSmartctlCheckRoutine(arg_percentage_used_threshold);
  }
  runAcPowerRoutine(arg_expected_status, arg_expected_power_type) {
    return this.$.runAcPowerRoutine(arg_expected_status, arg_expected_power_type);
  }
  runCpuCacheRoutine(arg_length_seconds) {
    return this.$.runCpuCacheRoutine(arg_length_seconds);
  }
  runCpuStressRoutine(arg_length_seconds) {
    return this.$.runCpuStressRoutine(arg_length_seconds);
  }
  runFloatingPointAccuracyRoutine(arg_length_seconds) {
    return this.$.runFloatingPointAccuracyRoutine(arg_length_seconds);
  }
  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(arg_wear_level_threshold) {
    return this.$.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(arg_wear_level_threshold);
  }
  dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold) {
    return this.$.dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold);
  }
  runNvmeSelfTestRoutine(arg_nvme_self_test_type) {
    return this.$.runNvmeSelfTestRoutine(arg_nvme_self_test_type);
  }
  runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb) {
    return this.$.runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb);
  }
  runPrimeSearchRoutine(arg_length_seconds) {
    return this.$.runPrimeSearchRoutine(arg_length_seconds);
  }
  runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed) {
    return this.$.runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed);
  }
  runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required) {
    return this.$.runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required);
  }
  runMemoryRoutine(arg_max_testing_mem_kib) {
    return this.$.runMemoryRoutine(arg_max_testing_mem_kib);
  }
  runLanConnectivityRoutine() {
    return this.$.runLanConnectivityRoutine();
  }
  runSignalStrengthRoutine() {
    return this.$.runSignalStrengthRoutine();
  }
  runGatewayCanBePingedRoutine() {
    return this.$.runGatewayCanBePingedRoutine();
  }
  runHasSecureWiFiConnectionRoutine() {
    return this.$.runHasSecureWiFiConnectionRoutine();
  }
  runDnsResolverPresentRoutine() {
    return this.$.runDnsResolverPresentRoutine();
  }
  runDnsLatencyRoutine() {
    return this.$.runDnsLatencyRoutine();
  }
  runDnsResolutionRoutine() {
    return this.$.runDnsResolutionRoutine();
  }
  runCaptivePortalRoutine() {
    return this.$.runCaptivePortalRoutine();
  }
  runHttpFirewallRoutine() {
    return this.$.runHttpFirewallRoutine();
  }
  runHttpsFirewallRoutine() {
    return this.$.runHttpsFirewallRoutine();
  }
  runHttpsLatencyRoutine() {
    return this.$.runHttpsLatencyRoutine();
  }
  runVideoConferencingRoutine(arg_stun_server_hostname) {
    return this.$.runVideoConferencingRoutine(arg_stun_server_hostname);
  }
  runArcHttpRoutine() {
    return this.$.runArcHttpRoutine();
  }
  runArcPingRoutine() {
    return this.$.runArcPingRoutine();
  }
  runArcDnsResolutionRoutine() {
    return this.$.runArcDnsResolutionRoutine();
  }
  runSensitiveSensorRoutine() {
    return this.$.runSensitiveSensorRoutine();
  }
  runFingerprintRoutine() {
    return this.$.runFingerprintRoutine();
  }
  runFingerprintAliveRoutine() {
    return this.$.runFingerprintAliveRoutine();
  }
  runPrivacyScreenRoutine(arg_target_state) {
    return this.$.runPrivacyScreenRoutine(arg_target_state);
  }
  dEPRECATED_RunLedLitUpRoutine(arg_name, arg_color, arg_replier) {
    return this.$.dEPRECATED_RunLedLitUpRoutine(arg_name, arg_color, arg_replier);
  }
  runEmmcLifetimeRoutine() {
    return this.$.runEmmcLifetimeRoutine();
  }
  dEPRECATED_RunAudioSetVolumeRoutine(arg_node_id, arg_volume, arg_mute_on) {
    return this.$.dEPRECATED_RunAudioSetVolumeRoutine(arg_node_id, arg_volume, arg_mute_on);
  }
  dEPRECATED_RunAudioSetGainRoutine(arg_node_id, arg_gain, arg_deprecated_mute_on) {
    return this.$.dEPRECATED_RunAudioSetGainRoutine(arg_node_id, arg_gain, arg_deprecated_mute_on);
  }
  runBluetoothPowerRoutine() {
    return this.$.runBluetoothPowerRoutine();
  }
  runBluetoothDiscoveryRoutine() {
    return this.$.runBluetoothDiscoveryRoutine();
  }
  runBluetoothScanningRoutine(arg_length_seconds) {
    return this.$.runBluetoothScanningRoutine(arg_length_seconds);
  }
  runBluetoothPairingRoutine(arg_peripheral_id) {
    return this.$.runBluetoothPairingRoutine(arg_peripheral_id);
  }
  runPowerButtonRoutine(arg_timeout_seconds) {
    return this.$.runPowerButtonRoutine(arg_timeout_seconds);
  }
  runAudioDriverRoutine() {
    return this.$.runAudioDriverRoutine();
  }
  runUfsLifetimeRoutine() {
    return this.$.runUfsLifetimeRoutine();
  }
  runFanRoutine() {
    return this.$.runFanRoutine();
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdDiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 11 },
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
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
    ]);
  }

  getAvailableRoutines() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec,
      [],
      false);
  }

  getRoutineUpdate(arg_id, arg_command, arg_include_output) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec,
      [arg_id, arg_command, arg_include_output],
      false);
  }

  runUrandomRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runBatteryCapacityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBatteryHealthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSmartctlCheckRoutine(arg_percentage_used_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec,
      [arg_percentage_used_threshold],
      false);
  }

  runAcPowerRoutine(arg_expected_status, arg_expected_power_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec,
      [arg_expected_status, arg_expected_power_type],
      false);
  }

  runCpuCacheRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runCpuStressRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runFloatingPointAccuracyRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(arg_wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec,
      [arg_wear_level_threshold],
      false);
  }

  dEPRECATED_RunNvmeWearLevelRoutine(arg_wear_level_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec,
      [arg_wear_level_threshold],
      false);
  }

  runNvmeSelfTestRoutine(arg_nvme_self_test_type) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec,
      [arg_nvme_self_test_type],
      false);
  }

  runDiskReadRoutine(arg_type, arg_length_seconds, arg_file_size_mb) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec,
      [arg_type, arg_length_seconds, arg_file_size_mb],
      false);
  }

  runPrimeSearchRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runBatteryDischargeRoutine(arg_length_seconds, arg_maximum_discharge_percent_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec,
      [arg_length_seconds, arg_maximum_discharge_percent_allowed],
      false);
  }

  runBatteryChargeRoutine(arg_length_seconds, arg_minimum_charge_percent_required) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec,
      [arg_length_seconds, arg_minimum_charge_percent_required],
      false);
  }

  runMemoryRoutine(arg_max_testing_mem_kib) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec,
      [arg_max_testing_mem_kib],
      false);
  }

  runLanConnectivityRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSignalStrengthRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runGatewayCanBePingedRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHasSecureWiFiConnectionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolverPresentRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsLatencyRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runCaptivePortalRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpFirewallRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsFirewallRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runHttpsLatencyRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runVideoConferencingRoutine(arg_stun_server_hostname) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec,
      [arg_stun_server_hostname],
      false);
  }

  runArcHttpRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcPingRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runArcDnsResolutionRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runSensitiveSensorRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFingerprintAliveRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runPrivacyScreenRoutine(arg_target_state) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec,
      [arg_target_state],
      false);
  }

  dEPRECATED_RunLedLitUpRoutine(arg_name, arg_color, arg_replier) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec,
      [arg_name, arg_color, arg_replier],
      false);
  }

  runEmmcLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_RunAudioSetVolumeRoutine(arg_node_id, arg_volume, arg_mute_on) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec,
      [arg_node_id, arg_volume, arg_mute_on],
      false);
  }

  dEPRECATED_RunAudioSetGainRoutine(arg_node_id, arg_gain, arg_deprecated_mute_on) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec,
      [arg_node_id, arg_gain, arg_deprecated_mute_on],
      false);
  }

  runBluetoothPowerRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothDiscoveryRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runBluetoothScanningRoutine(arg_length_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec,
      [arg_length_seconds],
      false);
  }

  runBluetoothPairingRoutine(arg_peripheral_id) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec,
      [arg_peripheral_id],
      false);
  }

  runPowerButtonRoutine(arg_timeout_seconds) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec,
      [arg_timeout_seconds],
      false);
  }

  runAudioDriverRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runUfsLifetimeRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec,
      [],
      false);
  }

  runFanRoutine() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdDiagnosticsService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdDiagnosticsService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 11 },
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
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 36 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
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
        
        // Try Method 0: GetAvailableRoutines
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableRoutines (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetRoutineUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRoutineUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RunUrandomRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunUrandomRoutine (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RunBatteryCapacityRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryCapacityRoutine (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RunBatteryHealthRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryHealthRoutine (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RunSmartctlCheckRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSmartctlCheckRoutine (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RunAcPowerRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAcPowerRoutine (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RunCpuCacheRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunCpuCacheRoutine (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RunCpuStressRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunCpuStressRoutine (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RunFloatingPointAccuracyRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFloatingPointAccuracyRoutine (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DEPRECATED_RunNvmeWearLevelRoutineWithThreshold
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunNvmeWearLevelRoutineWithThreshold (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DEPRECATED_RunNvmeWearLevelRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunNvmeWearLevelRoutine (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RunNvmeSelfTestRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunNvmeSelfTestRoutine (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RunDiskReadRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDiskReadRoutine (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RunPrimeSearchRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPrimeSearchRoutine (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RunBatteryDischargeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryDischargeRoutine (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RunBatteryChargeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBatteryChargeRoutine (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RunMemoryRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunMemoryRoutine (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RunLanConnectivityRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunLanConnectivityRoutine (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RunSignalStrengthRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSignalStrengthRoutine (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RunGatewayCanBePingedRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunGatewayCanBePingedRoutine (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RunHasSecureWiFiConnectionRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunHasSecureWiFiConnectionRoutine (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: RunDnsResolverPresentRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDnsResolverPresentRoutine (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RunDnsLatencyRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDnsLatencyRoutine (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: RunDnsResolutionRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunDnsResolutionRoutine (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RunCaptivePortalRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunCaptivePortalRoutine (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RunHttpFirewallRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunHttpFirewallRoutine (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: RunHttpsFirewallRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunHttpsFirewallRoutine (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: RunHttpsLatencyRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunHttpsLatencyRoutine (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: RunVideoConferencingRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunVideoConferencingRoutine (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: RunArcHttpRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunArcHttpRoutine (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: RunArcPingRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunArcPingRoutine (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: RunArcDnsResolutionRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunArcDnsResolutionRoutine (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: RunSensitiveSensorRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunSensitiveSensorRoutine (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: RunFingerprintRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFingerprintRoutine (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: RunFingerprintAliveRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFingerprintAliveRoutine (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: RunPrivacyScreenRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPrivacyScreenRoutine (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: DEPRECATED_RunLedLitUpRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunLedLitUpRoutine (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: RunEmmcLifetimeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunEmmcLifetimeRoutine (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: DEPRECATED_RunAudioSetVolumeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunAudioSetVolumeRoutine (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: DEPRECATED_RunAudioSetGainRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RunAudioSetGainRoutine (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: RunBluetoothPowerRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothPowerRoutine (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: RunBluetoothDiscoveryRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothDiscoveryRoutine (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: RunBluetoothScanningRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothScanningRoutine (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: RunBluetoothPairingRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunBluetoothPairingRoutine (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: RunPowerButtonRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPowerButtonRoutine (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: RunAudioDriverRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAudioDriverRoutine (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: RunUfsLifetimeRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunUfsLifetimeRoutine (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: RunFanRoutine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunFanRoutine (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableRoutines');
          const result = this.impl.getAvailableRoutines();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetAvailableRoutines_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailableRoutines FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRoutineUpdate');
          const result = this.impl.getRoutineUpdate(params.arg_id, params.arg_command, params.arg_include_output);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_GetRoutineUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRoutineUpdate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runUrandomRoutine');
          const result = this.impl.runUrandomRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUrandomRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunUrandomRoutine FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryCapacityRoutine');
          const result = this.impl.runBatteryCapacityRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryCapacityRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryCapacityRoutine FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryHealthRoutine');
          const result = this.impl.runBatteryHealthRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryHealthRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryHealthRoutine FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSmartctlCheckRoutine');
          const result = this.impl.runSmartctlCheckRoutine(params.arg_percentage_used_threshold);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSmartctlCheckRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSmartctlCheckRoutine FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAcPowerRoutine');
          const result = this.impl.runAcPowerRoutine(params.arg_expected_status, params.arg_expected_power_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAcPowerRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunAcPowerRoutine FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuCacheRoutine');
          const result = this.impl.runCpuCacheRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuCacheRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunCpuCacheRoutine FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCpuStressRoutine');
          const result = this.impl.runCpuStressRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCpuStressRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunCpuStressRoutine FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFloatingPointAccuracyRoutine');
          const result = this.impl.runFloatingPointAccuracyRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFloatingPointAccuracyRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFloatingPointAccuracyRoutine FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold');
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutineWithThreshold(params.arg_wear_level_threshold);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutineWithThreshold_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunNvmeWearLevelRoutineWithThreshold FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunNvmeWearLevelRoutine');
          const result = this.impl.dEPRECATED_RunNvmeWearLevelRoutine(params.arg_wear_level_threshold);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunNvmeWearLevelRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunNvmeWearLevelRoutine FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runNvmeSelfTestRoutine');
          const result = this.impl.runNvmeSelfTestRoutine(params.arg_nvme_self_test_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunNvmeSelfTestRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunNvmeSelfTestRoutine FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDiskReadRoutine');
          const result = this.impl.runDiskReadRoutine(params.arg_type, params.arg_length_seconds, params.arg_file_size_mb);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDiskReadRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDiskReadRoutine FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPrimeSearchRoutine');
          const result = this.impl.runPrimeSearchRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrimeSearchRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPrimeSearchRoutine FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryDischargeRoutine');
          const result = this.impl.runBatteryDischargeRoutine(params.arg_length_seconds, params.arg_maximum_discharge_percent_allowed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryDischargeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryDischargeRoutine FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBatteryChargeRoutine');
          const result = this.impl.runBatteryChargeRoutine(params.arg_length_seconds, params.arg_minimum_charge_percent_required);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBatteryChargeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBatteryChargeRoutine FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runMemoryRoutine');
          const result = this.impl.runMemoryRoutine(params.arg_max_testing_mem_kib);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunMemoryRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunMemoryRoutine FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runLanConnectivityRoutine');
          const result = this.impl.runLanConnectivityRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunLanConnectivityRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunLanConnectivityRoutine FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSignalStrengthRoutine');
          const result = this.impl.runSignalStrengthRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSignalStrengthRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSignalStrengthRoutine FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runGatewayCanBePingedRoutine');
          const result = this.impl.runGatewayCanBePingedRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunGatewayCanBePingedRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunGatewayCanBePingedRoutine FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runHasSecureWiFiConnectionRoutine');
          const result = this.impl.runHasSecureWiFiConnectionRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHasSecureWiFiConnectionRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunHasSecureWiFiConnectionRoutine FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolverPresentRoutine');
          const result = this.impl.runDnsResolverPresentRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolverPresentRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDnsResolverPresentRoutine FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsLatencyRoutine');
          const result = this.impl.runDnsLatencyRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsLatencyRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDnsLatencyRoutine FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runDnsResolutionRoutine');
          const result = this.impl.runDnsResolutionRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunDnsResolutionRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunDnsResolutionRoutine FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCaptivePortalRoutine');
          const result = this.impl.runCaptivePortalRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunCaptivePortalRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunCaptivePortalRoutine FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runHttpFirewallRoutine');
          const result = this.impl.runHttpFirewallRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpFirewallRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunHttpFirewallRoutine FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runHttpsFirewallRoutine');
          const result = this.impl.runHttpsFirewallRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsFirewallRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunHttpsFirewallRoutine FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runHttpsLatencyRoutine');
          const result = this.impl.runHttpsLatencyRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunHttpsLatencyRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunHttpsLatencyRoutine FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runVideoConferencingRoutine');
          const result = this.impl.runVideoConferencingRoutine(params.arg_stun_server_hostname);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunVideoConferencingRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunVideoConferencingRoutine FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runArcHttpRoutine');
          const result = this.impl.runArcHttpRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcHttpRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunArcHttpRoutine FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runArcPingRoutine');
          const result = this.impl.runArcPingRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcPingRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunArcPingRoutine FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runArcDnsResolutionRoutine');
          const result = this.impl.runArcDnsResolutionRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunArcDnsResolutionRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunArcDnsResolutionRoutine FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runSensitiveSensorRoutine');
          const result = this.impl.runSensitiveSensorRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunSensitiveSensorRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunSensitiveSensorRoutine FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFingerprintRoutine');
          const result = this.impl.runFingerprintRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFingerprintRoutine FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFingerprintAliveRoutine');
          const result = this.impl.runFingerprintAliveRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFingerprintAliveRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFingerprintAliveRoutine FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPrivacyScreenRoutine');
          const result = this.impl.runPrivacyScreenRoutine(params.arg_target_state);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPrivacyScreenRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPrivacyScreenRoutine FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunLedLitUpRoutine');
          const result = this.impl.dEPRECATED_RunLedLitUpRoutine(params.arg_name, params.arg_color, params.arg_replier);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunLedLitUpRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunLedLitUpRoutine FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runEmmcLifetimeRoutine');
          const result = this.impl.runEmmcLifetimeRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunEmmcLifetimeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunEmmcLifetimeRoutine FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunAudioSetVolumeRoutine');
          const result = this.impl.dEPRECATED_RunAudioSetVolumeRoutine(params.arg_node_id, params.arg_volume, params.arg_mute_on);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetVolumeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunAudioSetVolumeRoutine FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RunAudioSetGainRoutine');
          const result = this.impl.dEPRECATED_RunAudioSetGainRoutine(params.arg_node_id, params.arg_gain, params.arg_deprecated_mute_on);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_DEPRECATED_RunAudioSetGainRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RunAudioSetGainRoutine FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPowerRoutine');
          const result = this.impl.runBluetoothPowerRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPowerRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothPowerRoutine FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothDiscoveryRoutine');
          const result = this.impl.runBluetoothDiscoveryRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothDiscoveryRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothDiscoveryRoutine FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothScanningRoutine');
          const result = this.impl.runBluetoothScanningRoutine(params.arg_length_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothScanningRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothScanningRoutine FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBluetoothPairingRoutine');
          const result = this.impl.runBluetoothPairingRoutine(params.arg_peripheral_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunBluetoothPairingRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunBluetoothPairingRoutine FAILED:', e));
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPowerButtonRoutine');
          const result = this.impl.runPowerButtonRoutine(params.arg_timeout_seconds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunPowerButtonRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPowerButtonRoutine FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAudioDriverRoutine');
          const result = this.impl.runAudioDriverRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunAudioDriverRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunAudioDriverRoutine FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runUfsLifetimeRoutine');
          const result = this.impl.runUfsLifetimeRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunUfsLifetimeRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunUfsLifetimeRoutine FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runFanRoutine');
          const result = this.impl.runFanRoutine();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsService_RunFanRoutine_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunFanRoutine FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePtr = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServiceRequest = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdDiagnosticsServicePendingReceiver;


// Interface: CrosHealthdEventService
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdLidObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.network_health.mojom.NetworkEventsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EventCategoryEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cros_healthd.mojom.EventObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EventCategoryEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdEventService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dEPRECATED_AddBluetoothObserver(arg_observer) {
    return this.$.dEPRECATED_AddBluetoothObserver(arg_observer);
  }
  dEPRECATED_AddLidObserver(arg_observer) {
    return this.$.dEPRECATED_AddLidObserver(arg_observer);
  }
  dEPRECATED_AddPowerObserver(arg_observer) {
    return this.$.dEPRECATED_AddPowerObserver(arg_observer);
  }
  addNetworkObserver(arg_observer) {
    return this.$.addNetworkObserver(arg_observer);
  }
  dEPRECATED_AddAudioObserver(arg_observer) {
    return this.$.dEPRECATED_AddAudioObserver(arg_observer);
  }
  dEPRECATED_AddThunderboltObserver(arg_observer) {
    return this.$.dEPRECATED_AddThunderboltObserver(arg_observer);
  }
  dEPRECATED_AddUsbObserver(arg_observer) {
    return this.$.dEPRECATED_AddUsbObserver(arg_observer);
  }
  addEventObserver(arg_category, arg_observer) {
    return this.$.addEventObserver(arg_category, arg_observer);
  }
  isEventSupported(arg_category) {
    return this.$.isEventSupported(arg_category);
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdEventService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  dEPRECATED_AddBluetoothObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  dEPRECATED_AddLidObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  dEPRECATED_AddPowerObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addNetworkObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  dEPRECATED_AddAudioObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  dEPRECATED_AddThunderboltObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  dEPRECATED_AddUsbObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addEventObserver(arg_category, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec,
      null,
      [arg_category, arg_observer],
      false);
  }

  isEventSupported(arg_category) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec,
      [arg_category],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdEventService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdEventService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
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
        
        // Try Method 0: DEPRECATED_AddBluetoothObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddBluetoothObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DEPRECATED_AddLidObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddLidObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DEPRECATED_AddPowerObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddPowerObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddNetworkObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddNetworkObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DEPRECATED_AddAudioObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddAudioObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DEPRECATED_AddThunderboltObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddThunderboltObserver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DEPRECATED_AddUsbObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddUsbObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEventObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: IsEventSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEventSupported (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddBluetoothObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddBluetoothObserver');
          const result = this.impl.dEPRECATED_AddBluetoothObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddLidObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddLidObserver');
          const result = this.impl.dEPRECATED_AddLidObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddPowerObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddPowerObserver');
          const result = this.impl.dEPRECATED_AddPowerObserver(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddNetworkObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addNetworkObserver');
          const result = this.impl.addNetworkObserver(params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddAudioObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddAudioObserver');
          const result = this.impl.dEPRECATED_AddAudioObserver(params.arg_observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddThunderboltObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddThunderboltObserver');
          const result = this.impl.dEPRECATED_AddThunderboltObserver(params.arg_observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_DEPRECATED_AddUsbObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddUsbObserver');
          const result = this.impl.dEPRECATED_AddUsbObserver(params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_AddEventObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addEventObserver');
          const result = this.impl.addEventObserver(params.arg_category, params.arg_observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isEventSupported');
          const result = this.impl.isEventSupported(params.arg_category);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventService_IsEventSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsEventSupported FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServicePtr = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServiceRequest = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdEventServicePendingReceiver;


// Interface: CrosHealthdProbeService
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_Params', [
      mojo.internal.StructField('arg_process_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParams', [
      mojo.internal.StructField('arg_process_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_Params', [
      mojo.internal.StructField('arg_categories', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParams', [
      mojo.internal.StructField('arg_telemetry_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_Params', [
      mojo.internal.StructField('arg_process_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_ignore_single_process_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParams', [
      mojo.internal.StructField('arg_multiple_process_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdProbeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  probeProcessInfo(arg_process_id) {
    return this.$.probeProcessInfo(arg_process_id);
  }
  probeTelemetryInfo(arg_categories) {
    return this.$.probeTelemetryInfo(arg_categories);
  }
  probeMultipleProcessInfo(arg_process_ids, arg_ignore_single_process_error) {
    return this.$.probeMultipleProcessInfo(arg_process_ids, arg_ignore_single_process_error);
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdProbeService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  probeProcessInfo(arg_process_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec,
      [arg_process_id],
      false);
  }

  probeTelemetryInfo(arg_categories) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [arg_categories],
      false);
  }

  probeMultipleProcessInfo(arg_process_ids, arg_ignore_single_process_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec,
      mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec,
      [arg_process_ids, arg_ignore_single_process_error],
      false);
  }

};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdProbeService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdProbeService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: ProbeProcessInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProbeProcessInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ProbeTelemetryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProbeTelemetryInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ProbeMultipleProcessInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProbeMultipleProcessInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.probeProcessInfo');
          const result = this.impl.probeProcessInfo(params.arg_process_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeProcessInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProbeProcessInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.probeTelemetryInfo');
          const result = this.impl.probeTelemetryInfo(params.arg_categories);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeTelemetryInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProbeTelemetryInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.probeMultipleProcessInfo');
          const result = this.impl.probeMultipleProcessInfo(params.arg_process_ids, params.arg_ignore_single_process_error);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeService_ProbeMultipleProcessInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProbeMultipleProcessInfo FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceReceiver;

mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServicePtr = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRemote;
mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServiceRequest = mojo.internal.bindings.ash.cros_healthd.mojom.CrosHealthdProbeServicePendingReceiver;

