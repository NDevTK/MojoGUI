// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_bridge.mojom
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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.arc.mojom.ArcBridgeHost = {};
mojo.internal.bindings.arc.mojom.ArcBridgeHostSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost.$interfaceName = 'arc.mojom.ArcBridgeHost';
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec = { $: {} };

// Interface: ArcBridgeHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ax.android.mojom.AccessibilityHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AdbdMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppPermissionsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppfuseInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ArcShellExecutionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ArcWifiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAudioInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AudioInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAuthInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AuthInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BackupSettingsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BluetoothInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.BootPhaseMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCameraInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CameraInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ChromeFeatureFlagsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CompatibilityModeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.CrashCollectorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.OnDeviceSafetyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.DigitalGoodsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.EnterpriseReportingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ErrorNotificationInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.FileSystemInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.IioSensorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnImeInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ImeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.InputMethodManagerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.IntentHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.keymint.KeyMintInstanceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKioskInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KioskInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MediaSessionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MemoryInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MetricsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMidisInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.MidisInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NearbyShareInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNetInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NotificationsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ObbMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.payments.mojom.PaymentAppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPipInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PipInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PolicyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPowerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PowerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PrintSpoolerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnProcessInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ProcessInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SharesheetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SystemStateInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.SystemUiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTimerInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TimerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTracingInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TracingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTtsInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.TtsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.UsbHostInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVideoInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VideoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WakeLockInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WallpaperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_Params', [
      mojo.internal.StructField('arg_instance_ptr', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.WebApkInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcBridgeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ArcBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessibilityHelperInstanceReady(arg_instance_remote) {
    return this.$.onAccessibilityHelperInstanceReady(arg_instance_remote);
  }
  onAdbdMonitorInstanceReady(arg_instance_remote) {
    return this.$.onAdbdMonitorInstanceReady(arg_instance_remote);
  }
  onAppInstanceReady(arg_instance_remote) {
    return this.$.onAppInstanceReady(arg_instance_remote);
  }
  onAppPermissionsInstanceReady(arg_instance_remote) {
    return this.$.onAppPermissionsInstanceReady(arg_instance_remote);
  }
  onAppfuseInstanceReady(arg_instance_remote) {
    return this.$.onAppfuseInstanceReady(arg_instance_remote);
  }
  onArcShellExecutionInstanceReady(arg_instance_remote) {
    return this.$.onArcShellExecutionInstanceReady(arg_instance_remote);
  }
  onArcWifiInstanceReady(arg_instance_remote) {
    return this.$.onArcWifiInstanceReady(arg_instance_remote);
  }
  onAudioInstanceReady(arg_instance_remote) {
    return this.$.onAudioInstanceReady(arg_instance_remote);
  }
  onAuthInstanceReady(arg_instance_remote) {
    return this.$.onAuthInstanceReady(arg_instance_remote);
  }
  onBackupSettingsInstanceReady(arg_instance_remote) {
    return this.$.onBackupSettingsInstanceReady(arg_instance_remote);
  }
  onBluetoothInstanceReady(arg_instance_remote) {
    return this.$.onBluetoothInstanceReady(arg_instance_remote);
  }
  onBootPhaseMonitorInstanceReady(arg_instance_remote) {
    return this.$.onBootPhaseMonitorInstanceReady(arg_instance_remote);
  }
  onCameraInstanceReady(arg_instance_remote) {
    return this.$.onCameraInstanceReady(arg_instance_remote);
  }
  onChromeFeatureFlagsInstanceReady(arg_instance_remote) {
    return this.$.onChromeFeatureFlagsInstanceReady(arg_instance_remote);
  }
  onCompatibilityModeInstanceReady(arg_instance_remote) {
    return this.$.onCompatibilityModeInstanceReady(arg_instance_remote);
  }
  onCrashCollectorInstanceReady(arg_instance_remote) {
    return this.$.onCrashCollectorInstanceReady(arg_instance_remote);
  }
  onOnDeviceSafetyInstanceReady(arg_instance_remote) {
    return this.$.onOnDeviceSafetyInstanceReady(arg_instance_remote);
  }
  onDigitalGoodsInstanceReady(arg_instance_remote) {
    return this.$.onDigitalGoodsInstanceReady(arg_instance_remote);
  }
  onDiskSpaceInstanceReady(arg_instance_remote) {
    return this.$.onDiskSpaceInstanceReady(arg_instance_remote);
  }
  onEnterpriseReportingInstanceReady(arg_instance_remote) {
    return this.$.onEnterpriseReportingInstanceReady(arg_instance_remote);
  }
  onErrorNotificationInstanceReady(arg_instance_remote) {
    return this.$.onErrorNotificationInstanceReady(arg_instance_remote);
  }
  onFileSystemInstanceReady(arg_instance_remote) {
    return this.$.onFileSystemInstanceReady(arg_instance_remote);
  }
  onIioSensorInstanceReady(arg_instance_remote) {
    return this.$.onIioSensorInstanceReady(arg_instance_remote);
  }
  onImeInstanceReady(arg_instance_remote) {
    return this.$.onImeInstanceReady(arg_instance_remote);
  }
  onInputMethodManagerInstanceReady(arg_instance_remote) {
    return this.$.onInputMethodManagerInstanceReady(arg_instance_remote);
  }
  onIntentHelperInstanceReady(arg_instance_remote) {
    return this.$.onIntentHelperInstanceReady(arg_instance_remote);
  }
  onKeymasterInstanceReady(arg_instance_remote) {
    return this.$.onKeymasterInstanceReady(arg_instance_remote);
  }
  onKeyMintInstanceReady(arg_instance_remote) {
    return this.$.onKeyMintInstanceReady(arg_instance_remote);
  }
  onKioskInstanceReady(arg_instance_remote) {
    return this.$.onKioskInstanceReady(arg_instance_remote);
  }
  onMediaSessionInstanceReady(arg_instance_remote) {
    return this.$.onMediaSessionInstanceReady(arg_instance_remote);
  }
  onMemoryInstanceReady(arg_instance_remote) {
    return this.$.onMemoryInstanceReady(arg_instance_remote);
  }
  onMetricsInstanceReady(arg_instance_remote) {
    return this.$.onMetricsInstanceReady(arg_instance_remote);
  }
  onMidisInstanceReady(arg_instance_remote) {
    return this.$.onMidisInstanceReady(arg_instance_remote);
  }
  onNearbyShareInstanceReady(arg_instance_remote) {
    return this.$.onNearbyShareInstanceReady(arg_instance_remote);
  }
  onNetInstanceReady(arg_instance_remote) {
    return this.$.onNetInstanceReady(arg_instance_remote);
  }
  onNotificationsInstanceReady(arg_instance_remote) {
    return this.$.onNotificationsInstanceReady(arg_instance_remote);
  }
  onObbMounterInstanceReady(arg_instance_remote) {
    return this.$.onObbMounterInstanceReady(arg_instance_remote);
  }
  onOemCryptoInstanceReady(arg_instance_remote) {
    return this.$.onOemCryptoInstanceReady(arg_instance_remote);
  }
  onPaymentAppInstanceReady(arg_instance_remote) {
    return this.$.onPaymentAppInstanceReady(arg_instance_remote);
  }
  onPipInstanceReady(arg_instance_remote) {
    return this.$.onPipInstanceReady(arg_instance_remote);
  }
  onPolicyInstanceReady(arg_instance_remote) {
    return this.$.onPolicyInstanceReady(arg_instance_remote);
  }
  onPowerInstanceReady(arg_instance_remote) {
    return this.$.onPowerInstanceReady(arg_instance_remote);
  }
  onPrintSpoolerInstanceReady(arg_instance_remote) {
    return this.$.onPrintSpoolerInstanceReady(arg_instance_remote);
  }
  onPrivacyItemsInstanceReady(arg_instance_remote) {
    return this.$.onPrivacyItemsInstanceReady(arg_instance_remote);
  }
  onProcessInstanceReady(arg_instance_remote) {
    return this.$.onProcessInstanceReady(arg_instance_remote);
  }
  onScreenCaptureInstanceReady(arg_instance_remote) {
    return this.$.onScreenCaptureInstanceReady(arg_instance_remote);
  }
  onSharesheetInstanceReady(arg_instance_remote) {
    return this.$.onSharesheetInstanceReady(arg_instance_remote);
  }
  onSystemStateInstanceReady(arg_instance_remote) {
    return this.$.onSystemStateInstanceReady(arg_instance_remote);
  }
  onSystemUiInstanceReady(arg_instance_remote) {
    return this.$.onSystemUiInstanceReady(arg_instance_remote);
  }
  onTimerInstanceReady(arg_instance_remote) {
    return this.$.onTimerInstanceReady(arg_instance_remote);
  }
  onTracingInstanceReady(arg_instance_remote) {
    return this.$.onTracingInstanceReady(arg_instance_remote);
  }
  onTtsInstanceReady(arg_instance_remote) {
    return this.$.onTtsInstanceReady(arg_instance_remote);
  }
  onUsbHostInstanceReady(arg_instance_remote) {
    return this.$.onUsbHostInstanceReady(arg_instance_remote);
  }
  onVideoInstanceReady(arg_instance_remote) {
    return this.$.onVideoInstanceReady(arg_instance_remote);
  }
  onVolumeMounterInstanceReady(arg_instance_remote) {
    return this.$.onVolumeMounterInstanceReady(arg_instance_remote);
  }
  onWakeLockInstanceReady(arg_instance_remote) {
    return this.$.onWakeLockInstanceReady(arg_instance_remote);
  }
  onWallpaperInstanceReady(arg_instance_remote) {
    return this.$.onWallpaperInstanceReady(arg_instance_remote);
  }
  onWebApkInstanceReady(arg_instance_ptr) {
    return this.$.onWebApkInstanceReady(arg_instance_ptr);
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ArcBridgeHost', [
      { explicit: 127 },
      { explicit: 158 },
      { explicit: 100 },
      { explicit: 149 },
      { explicit: 145 },
      { explicit: 174 },
      { explicit: 171 },
      { explicit: 115 },
      { explicit: 106 },
      { explicit: 138 },
      { explicit: 113 },
      { explicit: 125 },
      { explicit: 151 },
      { explicit: 170 },
      { explicit: 161 },
      { explicit: 112 },
      { explicit: 173 },
      { explicit: 156 },
      { explicit: 144 },
      { explicit: 122 },
      { explicit: 172 },
      { explicit: 119 },
      { explicit: 159 },
      { explicit: 110 },
      { explicit: 143 },
      { explicit: 111 },
      { explicit: 152 },
      { explicit: 168 },
      { explicit: 175 },
      { explicit: 148 },
      { explicit: 164 },
      { explicit: 116 },
      { explicit: 135 },
      { explicit: 163 },
      { explicit: 108 },
      { explicit: 102 },
      { explicit: 120 },
      { explicit: 133 },
      { explicit: 155 },
      { explicit: 146 },
      { explicit: 114 },
      { explicit: 103 },
      { explicit: 150 },
      { explicit: 166 },
      { explicit: 104 },
      { explicit: 140 },
      { explicit: 157 },
      { explicit: 169 },
      { explicit: 167 },
      { explicit: 141 },
      { explicit: 128 },
      { explicit: 123 },
      { explicit: 139 },
      { explicit: 107 },
      { explicit: 131 },
      { explicit: 142 },
      { explicit: 124 },
      { explicit: 162 },
    ]);
  }

  onAccessibilityHelperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAdbdMonitorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppPermissionsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAppfuseInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onArcShellExecutionInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onArcWifiInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAudioInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onAuthInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBackupSettingsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBluetoothInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onBootPhaseMonitorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCameraInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onChromeFeatureFlagsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCompatibilityModeInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onCrashCollectorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onOnDeviceSafetyInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onDigitalGoodsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onDiskSpaceInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onEnterpriseReportingInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onErrorNotificationInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onFileSystemInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onIioSensorInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onImeInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onInputMethodManagerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onIntentHelperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKeymasterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKeyMintInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onKioskInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMediaSessionInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMemoryInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMetricsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onMidisInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNearbyShareInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNetInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onNotificationsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onObbMounterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onOemCryptoInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPaymentAppInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPipInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPolicyInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPowerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPrintSpoolerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onPrivacyItemsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onProcessInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onScreenCaptureInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSharesheetInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSystemStateInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onSystemUiInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTimerInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTracingInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onTtsInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onUsbHostInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onVideoInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onVolumeMounterInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWakeLockInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWallpaperInstanceReady(arg_instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec,
      null,
      [arg_instance_remote],
      false);
  }

  onWebApkInstanceReady(arg_instance_ptr) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec,
      null,
      [arg_instance_ptr],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ArcBridgeHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcBridgeHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ArcBridgeHost', [
      { explicit: 127 },
      { explicit: 158 },
      { explicit: 100 },
      { explicit: 149 },
      { explicit: 145 },
      { explicit: 174 },
      { explicit: 171 },
      { explicit: 115 },
      { explicit: 106 },
      { explicit: 138 },
      { explicit: 113 },
      { explicit: 125 },
      { explicit: 151 },
      { explicit: 170 },
      { explicit: 161 },
      { explicit: 112 },
      { explicit: 173 },
      { explicit: 156 },
      { explicit: 144 },
      { explicit: 122 },
      { explicit: 172 },
      { explicit: 119 },
      { explicit: 159 },
      { explicit: 110 },
      { explicit: 143 },
      { explicit: 111 },
      { explicit: 152 },
      { explicit: 168 },
      { explicit: 175 },
      { explicit: 148 },
      { explicit: 164 },
      { explicit: 116 },
      { explicit: 135 },
      { explicit: 163 },
      { explicit: 108 },
      { explicit: 102 },
      { explicit: 120 },
      { explicit: 133 },
      { explicit: 155 },
      { explicit: 146 },
      { explicit: 114 },
      { explicit: 103 },
      { explicit: 150 },
      { explicit: 166 },
      { explicit: 104 },
      { explicit: 140 },
      { explicit: 157 },
      { explicit: 169 },
      { explicit: 167 },
      { explicit: 141 },
      { explicit: 128 },
      { explicit: 123 },
      { explicit: 139 },
      { explicit: 107 },
      { explicit: 131 },
      { explicit: 142 },
      { explicit: 124 },
      { explicit: 162 },
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
        
        // Try Method 0: OnAccessibilityHelperInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccessibilityHelperInstanceReady (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAdbdMonitorInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAdbdMonitorInstanceReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAppInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppInstanceReady (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnAppPermissionsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppPermissionsInstanceReady (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnAppfuseInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppfuseInstanceReady (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnArcShellExecutionInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnArcShellExecutionInstanceReady (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnArcWifiInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnArcWifiInstanceReady (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnAudioInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioInstanceReady (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnAuthInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthInstanceReady (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnBackupSettingsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackupSettingsInstanceReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnBluetoothInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBluetoothInstanceReady (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnBootPhaseMonitorInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBootPhaseMonitorInstanceReady (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnCameraInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraInstanceReady (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnChromeFeatureFlagsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnChromeFeatureFlagsInstanceReady (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnCompatibilityModeInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompatibilityModeInstanceReady (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnCrashCollectorInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCrashCollectorInstanceReady (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnOnDeviceSafetyInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOnDeviceSafetyInstanceReady (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnDigitalGoodsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDigitalGoodsInstanceReady (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnDiskSpaceInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDiskSpaceInstanceReady (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OnEnterpriseReportingInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnterpriseReportingInstanceReady (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: OnErrorNotificationInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnErrorNotificationInstanceReady (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: OnFileSystemInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFileSystemInstanceReady (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: OnIioSensorInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIioSensorInstanceReady (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OnImeInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImeInstanceReady (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: OnInputMethodManagerInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInputMethodManagerInstanceReady (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: OnIntentHelperInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIntentHelperInstanceReady (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: OnKeymasterInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeymasterInstanceReady (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: OnKeyMintInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyMintInstanceReady (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: OnKioskInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKioskInstanceReady (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: OnMediaSessionInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaSessionInstanceReady (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: OnMemoryInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMemoryInstanceReady (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: OnMetricsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetricsInstanceReady (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: OnMidisInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMidisInstanceReady (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: OnNearbyShareInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNearbyShareInstanceReady (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: OnNetInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetInstanceReady (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: OnNotificationsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationsInstanceReady (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: OnObbMounterInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnObbMounterInstanceReady (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: OnOemCryptoInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOemCryptoInstanceReady (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: OnPaymentAppInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaymentAppInstanceReady (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: OnPipInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPipInstanceReady (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: OnPolicyInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPolicyInstanceReady (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: OnPowerInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPowerInstanceReady (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: OnPrintSpoolerInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintSpoolerInstanceReady (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: OnPrivacyItemsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrivacyItemsInstanceReady (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: OnProcessInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProcessInstanceReady (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: OnScreenCaptureInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenCaptureInstanceReady (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: OnSharesheetInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharesheetInstanceReady (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: OnSystemStateInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemStateInstanceReady (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: OnSystemUiInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemUiInstanceReady (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: OnTimerInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimerInstanceReady (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: OnTracingInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTracingInstanceReady (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: OnTtsInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTtsInstanceReady (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: OnUsbHostInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUsbHostInstanceReady (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: OnVideoInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoInstanceReady (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: OnVolumeMounterInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVolumeMounterInstanceReady (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
           }
        }
        // Try Method 55: OnWakeLockInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWakeLockInstanceReady (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 55 failed:', e);
           }
        }
        // Try Method 56: OnWallpaperInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWallpaperInstanceReady (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 56 failed:', e);
           }
        }
        // Try Method 57: OnWebApkInstanceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebApkInstanceReady (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 57 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccessibilityHelperInstanceReady');
          const result = this.impl.onAccessibilityHelperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAdbdMonitorInstanceReady');
          const result = this.impl.onAdbdMonitorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppInstanceReady');
          const result = this.impl.onAppInstanceReady(params.arg_instance_remote);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppPermissionsInstanceReady');
          const result = this.impl.onAppPermissionsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppfuseInstanceReady');
          const result = this.impl.onAppfuseInstanceReady(params.arg_instance_remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onArcShellExecutionInstanceReady');
          const result = this.impl.onArcShellExecutionInstanceReady(params.arg_instance_remote);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onArcWifiInstanceReady');
          const result = this.impl.onArcWifiInstanceReady(params.arg_instance_remote);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioInstanceReady');
          const result = this.impl.onAudioInstanceReady(params.arg_instance_remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthInstanceReady');
          const result = this.impl.onAuthInstanceReady(params.arg_instance_remote);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackupSettingsInstanceReady');
          const result = this.impl.onBackupSettingsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothInstanceReady');
          const result = this.impl.onBluetoothInstanceReady(params.arg_instance_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBootPhaseMonitorInstanceReady');
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCameraInstanceReady');
          const result = this.impl.onCameraInstanceReady(params.arg_instance_remote);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onChromeFeatureFlagsInstanceReady');
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompatibilityModeInstanceReady');
          const result = this.impl.onCompatibilityModeInstanceReady(params.arg_instance_remote);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCrashCollectorInstanceReady');
          const result = this.impl.onCrashCollectorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOnDeviceSafetyInstanceReady');
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.arg_instance_remote);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDigitalGoodsInstanceReady');
          const result = this.impl.onDigitalGoodsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDiskSpaceInstanceReady');
          const result = this.impl.onDiskSpaceInstanceReady(params.arg_instance_remote);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnterpriseReportingInstanceReady');
          const result = this.impl.onEnterpriseReportingInstanceReady(params.arg_instance_remote);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onErrorNotificationInstanceReady');
          const result = this.impl.onErrorNotificationInstanceReady(params.arg_instance_remote);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFileSystemInstanceReady');
          const result = this.impl.onFileSystemInstanceReady(params.arg_instance_remote);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIioSensorInstanceReady');
          const result = this.impl.onIioSensorInstanceReady(params.arg_instance_remote);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImeInstanceReady');
          const result = this.impl.onImeInstanceReady(params.arg_instance_remote);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInputMethodManagerInstanceReady');
          const result = this.impl.onInputMethodManagerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIntentHelperInstanceReady');
          const result = this.impl.onIntentHelperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeymasterInstanceReady');
          const result = this.impl.onKeymasterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyMintInstanceReady');
          const result = this.impl.onKeyMintInstanceReady(params.arg_instance_remote);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKioskInstanceReady');
          const result = this.impl.onKioskInstanceReady(params.arg_instance_remote);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMediaSessionInstanceReady');
          const result = this.impl.onMediaSessionInstanceReady(params.arg_instance_remote);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMemoryInstanceReady');
          const result = this.impl.onMemoryInstanceReady(params.arg_instance_remote);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMetricsInstanceReady');
          const result = this.impl.onMetricsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMidisInstanceReady');
          const result = this.impl.onMidisInstanceReady(params.arg_instance_remote);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNearbyShareInstanceReady');
          const result = this.impl.onNearbyShareInstanceReady(params.arg_instance_remote);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetInstanceReady');
          const result = this.impl.onNetInstanceReady(params.arg_instance_remote);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsInstanceReady');
          const result = this.impl.onNotificationsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onObbMounterInstanceReady');
          const result = this.impl.onObbMounterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOemCryptoInstanceReady');
          const result = this.impl.onOemCryptoInstanceReady(params.arg_instance_remote);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPaymentAppInstanceReady');
          const result = this.impl.onPaymentAppInstanceReady(params.arg_instance_remote);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPipInstanceReady');
          const result = this.impl.onPipInstanceReady(params.arg_instance_remote);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPolicyInstanceReady');
          const result = this.impl.onPolicyInstanceReady(params.arg_instance_remote);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPowerInstanceReady');
          const result = this.impl.onPowerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintSpoolerInstanceReady');
          const result = this.impl.onPrintSpoolerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsInstanceReady');
          const result = this.impl.onPrivacyItemsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProcessInstanceReady');
          const result = this.impl.onProcessInstanceReady(params.arg_instance_remote);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenCaptureInstanceReady');
          const result = this.impl.onScreenCaptureInstanceReady(params.arg_instance_remote);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharesheetInstanceReady');
          const result = this.impl.onSharesheetInstanceReady(params.arg_instance_remote);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemStateInstanceReady');
          const result = this.impl.onSystemStateInstanceReady(params.arg_instance_remote);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemUiInstanceReady');
          const result = this.impl.onSystemUiInstanceReady(params.arg_instance_remote);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTimerInstanceReady');
          const result = this.impl.onTimerInstanceReady(params.arg_instance_remote);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTracingInstanceReady');
          const result = this.impl.onTracingInstanceReady(params.arg_instance_remote);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTtsInstanceReady');
          const result = this.impl.onTtsInstanceReady(params.arg_instance_remote);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUsbHostInstanceReady');
          const result = this.impl.onUsbHostInstanceReady(params.arg_instance_remote);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoInstanceReady');
          const result = this.impl.onVideoInstanceReady(params.arg_instance_remote);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVolumeMounterInstanceReady');
          const result = this.impl.onVolumeMounterInstanceReady(params.arg_instance_remote);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWakeLockInstanceReady');
          const result = this.impl.onWakeLockInstanceReady(params.arg_instance_remote);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperInstanceReady');
          const result = this.impl.onWallpaperInstanceReady(params.arg_instance_remote);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebApkInstanceReady');
          const result = this.impl.onWebApkInstanceReady(params.arg_instance_ptr);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver = mojo.internal.bindings.arc.mojom.ArcBridgeHostReceiver;

mojo.internal.bindings.arc.mojom.ArcBridgeHostPtr = mojo.internal.bindings.arc.mojom.ArcBridgeHostRemote;
mojo.internal.bindings.arc.mojom.ArcBridgeHostRequest = mojo.internal.bindings.arc.mojom.ArcBridgeHostPendingReceiver;

