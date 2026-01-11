// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_bridge.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ax = ax || {};
var chromeos = chromeos || {};

arc.mojom.ArcBridgeHost = {};
arc.mojom.ArcBridgeHost.$interfaceName = 'arc.mojom.ArcBridgeHost';
arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec = { $: {} };
arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec = { $: {} };

// Interface: ArcBridgeHost
mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(ax.android.mojom.AccessibilityHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppPermissionsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppfuseInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ArcShellExecutionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ArcWifiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAudioInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AudioInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnAuthInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AuthInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BackupSettingsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BluetoothInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCameraInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CameraInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ChromeFeatureFlagsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CompatibilityModeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.DigitalGoodsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.DiskSpaceInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.EnterpriseReportingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.FileSystemInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IioSensorInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnImeInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ImeInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IntentHelperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KeymasterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(keymint.KeyMintInstanceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnKioskInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KioskInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MediaSessionInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MemoryInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MetricsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnMidisInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MidisInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NearbyShareInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNetInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NotificationsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ObbMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OemCryptoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(chromeos.payments.mojom.PaymentAppInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPipInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PipInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PolicyInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPowerInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PowerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrivacyItemsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnProcessInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ProcessInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SharesheetInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SystemStateInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SystemUiInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTimerInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TimerInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTracingInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TracingInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnTtsInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TtsInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.UsbHostInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVideoInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VolumeMounterInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WakeLockInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_Params', [
      mojo.internal.StructField('instance_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WallpaperInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec, 'arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_Params', [
      mojo.internal.StructField('instance_ptr', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WebApkInstanceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ArcBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcBridgeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcBridgeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcBridgeHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessibilityHelperInstanceReady(instance_remote) {
    return this.$.onAccessibilityHelperInstanceReady(instance_remote);
  }
  onAdbdMonitorInstanceReady(instance_remote) {
    return this.$.onAdbdMonitorInstanceReady(instance_remote);
  }
  onAppInstanceReady(instance_remote) {
    return this.$.onAppInstanceReady(instance_remote);
  }
  onAppPermissionsInstanceReady(instance_remote) {
    return this.$.onAppPermissionsInstanceReady(instance_remote);
  }
  onAppfuseInstanceReady(instance_remote) {
    return this.$.onAppfuseInstanceReady(instance_remote);
  }
  onArcShellExecutionInstanceReady(instance_remote) {
    return this.$.onArcShellExecutionInstanceReady(instance_remote);
  }
  onArcWifiInstanceReady(instance_remote) {
    return this.$.onArcWifiInstanceReady(instance_remote);
  }
  onAudioInstanceReady(instance_remote) {
    return this.$.onAudioInstanceReady(instance_remote);
  }
  onAuthInstanceReady(instance_remote) {
    return this.$.onAuthInstanceReady(instance_remote);
  }
  onBackupSettingsInstanceReady(instance_remote) {
    return this.$.onBackupSettingsInstanceReady(instance_remote);
  }
  onBluetoothInstanceReady(instance_remote) {
    return this.$.onBluetoothInstanceReady(instance_remote);
  }
  onBootPhaseMonitorInstanceReady(instance_remote) {
    return this.$.onBootPhaseMonitorInstanceReady(instance_remote);
  }
  onCameraInstanceReady(instance_remote) {
    return this.$.onCameraInstanceReady(instance_remote);
  }
  onChromeFeatureFlagsInstanceReady(instance_remote) {
    return this.$.onChromeFeatureFlagsInstanceReady(instance_remote);
  }
  onCompatibilityModeInstanceReady(instance_remote) {
    return this.$.onCompatibilityModeInstanceReady(instance_remote);
  }
  onCrashCollectorInstanceReady(instance_remote) {
    return this.$.onCrashCollectorInstanceReady(instance_remote);
  }
  onOnDeviceSafetyInstanceReady(instance_remote) {
    return this.$.onOnDeviceSafetyInstanceReady(instance_remote);
  }
  onDigitalGoodsInstanceReady(instance_remote) {
    return this.$.onDigitalGoodsInstanceReady(instance_remote);
  }
  onDiskSpaceInstanceReady(instance_remote) {
    return this.$.onDiskSpaceInstanceReady(instance_remote);
  }
  onEnterpriseReportingInstanceReady(instance_remote) {
    return this.$.onEnterpriseReportingInstanceReady(instance_remote);
  }
  onErrorNotificationInstanceReady(instance_remote) {
    return this.$.onErrorNotificationInstanceReady(instance_remote);
  }
  onFileSystemInstanceReady(instance_remote) {
    return this.$.onFileSystemInstanceReady(instance_remote);
  }
  onIioSensorInstanceReady(instance_remote) {
    return this.$.onIioSensorInstanceReady(instance_remote);
  }
  onImeInstanceReady(instance_remote) {
    return this.$.onImeInstanceReady(instance_remote);
  }
  onInputMethodManagerInstanceReady(instance_remote) {
    return this.$.onInputMethodManagerInstanceReady(instance_remote);
  }
  onIntentHelperInstanceReady(instance_remote) {
    return this.$.onIntentHelperInstanceReady(instance_remote);
  }
  onKeymasterInstanceReady(instance_remote) {
    return this.$.onKeymasterInstanceReady(instance_remote);
  }
  onKeyMintInstanceReady(instance_remote) {
    return this.$.onKeyMintInstanceReady(instance_remote);
  }
  onKioskInstanceReady(instance_remote) {
    return this.$.onKioskInstanceReady(instance_remote);
  }
  onMediaSessionInstanceReady(instance_remote) {
    return this.$.onMediaSessionInstanceReady(instance_remote);
  }
  onMemoryInstanceReady(instance_remote) {
    return this.$.onMemoryInstanceReady(instance_remote);
  }
  onMetricsInstanceReady(instance_remote) {
    return this.$.onMetricsInstanceReady(instance_remote);
  }
  onMidisInstanceReady(instance_remote) {
    return this.$.onMidisInstanceReady(instance_remote);
  }
  onNearbyShareInstanceReady(instance_remote) {
    return this.$.onNearbyShareInstanceReady(instance_remote);
  }
  onNetInstanceReady(instance_remote) {
    return this.$.onNetInstanceReady(instance_remote);
  }
  onNotificationsInstanceReady(instance_remote) {
    return this.$.onNotificationsInstanceReady(instance_remote);
  }
  onObbMounterInstanceReady(instance_remote) {
    return this.$.onObbMounterInstanceReady(instance_remote);
  }
  onOemCryptoInstanceReady(instance_remote) {
    return this.$.onOemCryptoInstanceReady(instance_remote);
  }
  onPaymentAppInstanceReady(instance_remote) {
    return this.$.onPaymentAppInstanceReady(instance_remote);
  }
  onPipInstanceReady(instance_remote) {
    return this.$.onPipInstanceReady(instance_remote);
  }
  onPolicyInstanceReady(instance_remote) {
    return this.$.onPolicyInstanceReady(instance_remote);
  }
  onPowerInstanceReady(instance_remote) {
    return this.$.onPowerInstanceReady(instance_remote);
  }
  onPrintSpoolerInstanceReady(instance_remote) {
    return this.$.onPrintSpoolerInstanceReady(instance_remote);
  }
  onPrivacyItemsInstanceReady(instance_remote) {
    return this.$.onPrivacyItemsInstanceReady(instance_remote);
  }
  onProcessInstanceReady(instance_remote) {
    return this.$.onProcessInstanceReady(instance_remote);
  }
  onScreenCaptureInstanceReady(instance_remote) {
    return this.$.onScreenCaptureInstanceReady(instance_remote);
  }
  onSharesheetInstanceReady(instance_remote) {
    return this.$.onSharesheetInstanceReady(instance_remote);
  }
  onSystemStateInstanceReady(instance_remote) {
    return this.$.onSystemStateInstanceReady(instance_remote);
  }
  onSystemUiInstanceReady(instance_remote) {
    return this.$.onSystemUiInstanceReady(instance_remote);
  }
  onTimerInstanceReady(instance_remote) {
    return this.$.onTimerInstanceReady(instance_remote);
  }
  onTracingInstanceReady(instance_remote) {
    return this.$.onTracingInstanceReady(instance_remote);
  }
  onTtsInstanceReady(instance_remote) {
    return this.$.onTtsInstanceReady(instance_remote);
  }
  onUsbHostInstanceReady(instance_remote) {
    return this.$.onUsbHostInstanceReady(instance_remote);
  }
  onVideoInstanceReady(instance_remote) {
    return this.$.onVideoInstanceReady(instance_remote);
  }
  onVolumeMounterInstanceReady(instance_remote) {
    return this.$.onVolumeMounterInstanceReady(instance_remote);
  }
  onWakeLockInstanceReady(instance_remote) {
    return this.$.onWakeLockInstanceReady(instance_remote);
  }
  onWallpaperInstanceReady(instance_remote) {
    return this.$.onWallpaperInstanceReady(instance_remote);
  }
  onWebApkInstanceReady(instance_ptr) {
    return this.$.onWebApkInstanceReady(instance_ptr);
  }
};

arc.mojom.ArcBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcBridgeHost', [
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

  onAccessibilityHelperInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAdbdMonitorInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppPermissionsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppfuseInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onArcShellExecutionInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onArcWifiInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAudioInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAuthInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBackupSettingsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBluetoothInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBootPhaseMonitorInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCameraInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onChromeFeatureFlagsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCompatibilityModeInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCrashCollectorInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onOnDeviceSafetyInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onDigitalGoodsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onDiskSpaceInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onEnterpriseReportingInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onErrorNotificationInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onFileSystemInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onIioSensorInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onImeInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onInputMethodManagerInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onIntentHelperInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKeymasterInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKeyMintInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKioskInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMediaSessionInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMemoryInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMetricsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMidisInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNearbyShareInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNetInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNotificationsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onObbMounterInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onOemCryptoInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPaymentAppInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPipInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPolicyInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPowerInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPrintSpoolerInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPrivacyItemsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onProcessInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onScreenCaptureInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSharesheetInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSystemStateInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSystemUiInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTimerInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTracingInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTtsInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onUsbHostInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onVideoInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onVolumeMounterInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWakeLockInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWallpaperInstanceReady(instance_remote) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWebApkInstanceReady(instance_ptr) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec,
      null,
      [instance_ptr],
      false);
  }

};

arc.mojom.ArcBridgeHost.getRemote = function() {
  let remote = new arc.mojom.ArcBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcBridgeHost',
    'context');
  return remote.$;
};

arc.mojom.ArcBridgeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcBridgeHost', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAccessibilityHelperInstanceReady(params.instance_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAdbdMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAppInstanceReady(params.instance_remote);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAppPermissionsInstanceReady(params.instance_remote);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAppfuseInstanceReady(params.instance_remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onArcShellExecutionInstanceReady(params.instance_remote);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onArcWifiInstanceReady(params.instance_remote);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAudioInstanceReady(params.instance_remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onAuthInstanceReady(params.instance_remote);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onBackupSettingsInstanceReady(params.instance_remote);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onBluetoothInstanceReady(params.instance_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onCameraInstanceReady(params.instance_remote);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.instance_remote);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onCompatibilityModeInstanceReady(params.instance_remote);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onCrashCollectorInstanceReady(params.instance_remote);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.instance_remote);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onDigitalGoodsInstanceReady(params.instance_remote);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onDiskSpaceInstanceReady(params.instance_remote);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onEnterpriseReportingInstanceReady(params.instance_remote);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onErrorNotificationInstanceReady(params.instance_remote);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onFileSystemInstanceReady(params.instance_remote);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onIioSensorInstanceReady(params.instance_remote);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onImeInstanceReady(params.instance_remote);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onInputMethodManagerInstanceReady(params.instance_remote);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onIntentHelperInstanceReady(params.instance_remote);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onKeymasterInstanceReady(params.instance_remote);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyMintInstanceReady(params.instance_remote);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onKioskInstanceReady(params.instance_remote);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaSessionInstanceReady(params.instance_remote);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onMemoryInstanceReady(params.instance_remote);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onMetricsInstanceReady(params.instance_remote);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onMidisInstanceReady(params.instance_remote);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onNearbyShareInstanceReady(params.instance_remote);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onNetInstanceReady(params.instance_remote);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationsInstanceReady(params.instance_remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onObbMounterInstanceReady(params.instance_remote);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onOemCryptoInstanceReady(params.instance_remote);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPaymentAppInstanceReady(params.instance_remote);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPipInstanceReady(params.instance_remote);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPolicyInstanceReady(params.instance_remote);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPowerInstanceReady(params.instance_remote);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPrintSpoolerInstanceReady(params.instance_remote);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPrivacyItemsInstanceReady(params.instance_remote);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onProcessInstanceReady(params.instance_remote);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onScreenCaptureInstanceReady(params.instance_remote);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onSharesheetInstanceReady(params.instance_remote);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onSystemStateInstanceReady(params.instance_remote);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onSystemUiInstanceReady(params.instance_remote);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onTimerInstanceReady(params.instance_remote);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onTracingInstanceReady(params.instance_remote);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onTtsInstanceReady(params.instance_remote);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onUsbHostInstanceReady(params.instance_remote);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onVideoInstanceReady(params.instance_remote);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onVolumeMounterInstanceReady(params.instance_remote);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onWakeLockInstanceReady(params.instance_remote);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onWallpaperInstanceReady(params.instance_remote);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.structSpec);
          const result = this.impl.onWebApkInstanceReady(params.instance_ptr);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.ArcBridgeHostReceiver = arc.mojom.ArcBridgeHostReceiver;

arc.mojom.ArcBridgeHostPtr = arc.mojom.ArcBridgeHostRemote;
arc.mojom.ArcBridgeHostRequest = arc.mojom.ArcBridgeHostPendingReceiver;

