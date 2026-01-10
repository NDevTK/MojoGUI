// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_bridge.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.ArcBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAccessibilityHelperInstanceReady(instance_remote) {
    // Ordinal: 127
    return this.proxy.sendMessage(
      127,  // ordinal
      arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAdbdMonitorInstanceReady(instance_remote) {
    // Ordinal: 158
    return this.proxy.sendMessage(
      158,  // ordinal
      arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppInstanceReady(instance_remote) {
    // Ordinal: 100
    return this.proxy.sendMessage(
      100,  // ordinal
      arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppPermissionsInstanceReady(instance_remote) {
    // Ordinal: 149
    return this.proxy.sendMessage(
      149,  // ordinal
      arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAppfuseInstanceReady(instance_remote) {
    // Ordinal: 145
    return this.proxy.sendMessage(
      145,  // ordinal
      arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onArcShellExecutionInstanceReady(instance_remote) {
    // Ordinal: 174
    return this.proxy.sendMessage(
      174,  // ordinal
      arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onArcWifiInstanceReady(instance_remote) {
    // Ordinal: 171
    return this.proxy.sendMessage(
      171,  // ordinal
      arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAudioInstanceReady(instance_remote) {
    // Ordinal: 115
    return this.proxy.sendMessage(
      115,  // ordinal
      arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onAuthInstanceReady(instance_remote) {
    // Ordinal: 106
    return this.proxy.sendMessage(
      106,  // ordinal
      arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBackupSettingsInstanceReady(instance_remote) {
    // Ordinal: 138
    return this.proxy.sendMessage(
      138,  // ordinal
      arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBluetoothInstanceReady(instance_remote) {
    // Ordinal: 113
    return this.proxy.sendMessage(
      113,  // ordinal
      arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onBootPhaseMonitorInstanceReady(instance_remote) {
    // Ordinal: 125
    return this.proxy.sendMessage(
      125,  // ordinal
      arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCameraInstanceReady(instance_remote) {
    // Ordinal: 151
    return this.proxy.sendMessage(
      151,  // ordinal
      arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onChromeFeatureFlagsInstanceReady(instance_remote) {
    // Ordinal: 170
    return this.proxy.sendMessage(
      170,  // ordinal
      arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCompatibilityModeInstanceReady(instance_remote) {
    // Ordinal: 161
    return this.proxy.sendMessage(
      161,  // ordinal
      arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onCrashCollectorInstanceReady(instance_remote) {
    // Ordinal: 112
    return this.proxy.sendMessage(
      112,  // ordinal
      arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onOnDeviceSafetyInstanceReady(instance_remote) {
    // Ordinal: 173
    return this.proxy.sendMessage(
      173,  // ordinal
      arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onDigitalGoodsInstanceReady(instance_remote) {
    // Ordinal: 156
    return this.proxy.sendMessage(
      156,  // ordinal
      arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onDiskSpaceInstanceReady(instance_remote) {
    // Ordinal: 144
    return this.proxy.sendMessage(
      144,  // ordinal
      arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onEnterpriseReportingInstanceReady(instance_remote) {
    // Ordinal: 122
    return this.proxy.sendMessage(
      122,  // ordinal
      arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onErrorNotificationInstanceReady(instance_remote) {
    // Ordinal: 172
    return this.proxy.sendMessage(
      172,  // ordinal
      arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onFileSystemInstanceReady(instance_remote) {
    // Ordinal: 119
    return this.proxy.sendMessage(
      119,  // ordinal
      arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onIioSensorInstanceReady(instance_remote) {
    // Ordinal: 159
    return this.proxy.sendMessage(
      159,  // ordinal
      arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onImeInstanceReady(instance_remote) {
    // Ordinal: 110
    return this.proxy.sendMessage(
      110,  // ordinal
      arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onInputMethodManagerInstanceReady(instance_remote) {
    // Ordinal: 143
    return this.proxy.sendMessage(
      143,  // ordinal
      arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onIntentHelperInstanceReady(instance_remote) {
    // Ordinal: 111
    return this.proxy.sendMessage(
      111,  // ordinal
      arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKeymasterInstanceReady(instance_remote) {
    // Ordinal: 152
    return this.proxy.sendMessage(
      152,  // ordinal
      arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKeyMintInstanceReady(instance_remote) {
    // Ordinal: 168
    return this.proxy.sendMessage(
      168,  // ordinal
      arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onKioskInstanceReady(instance_remote) {
    // Ordinal: 175
    return this.proxy.sendMessage(
      175,  // ordinal
      arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMediaSessionInstanceReady(instance_remote) {
    // Ordinal: 148
    return this.proxy.sendMessage(
      148,  // ordinal
      arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMemoryInstanceReady(instance_remote) {
    // Ordinal: 164
    return this.proxy.sendMessage(
      164,  // ordinal
      arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMetricsInstanceReady(instance_remote) {
    // Ordinal: 116
    return this.proxy.sendMessage(
      116,  // ordinal
      arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onMidisInstanceReady(instance_remote) {
    // Ordinal: 135
    return this.proxy.sendMessage(
      135,  // ordinal
      arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNearbyShareInstanceReady(instance_remote) {
    // Ordinal: 163
    return this.proxy.sendMessage(
      163,  // ordinal
      arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNetInstanceReady(instance_remote) {
    // Ordinal: 108
    return this.proxy.sendMessage(
      108,  // ordinal
      arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onNotificationsInstanceReady(instance_remote) {
    // Ordinal: 102
    return this.proxy.sendMessage(
      102,  // ordinal
      arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onObbMounterInstanceReady(instance_remote) {
    // Ordinal: 120
    return this.proxy.sendMessage(
      120,  // ordinal
      arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onOemCryptoInstanceReady(instance_remote) {
    // Ordinal: 133
    return this.proxy.sendMessage(
      133,  // ordinal
      arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPaymentAppInstanceReady(instance_remote) {
    // Ordinal: 155
    return this.proxy.sendMessage(
      155,  // ordinal
      arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPipInstanceReady(instance_remote) {
    // Ordinal: 146
    return this.proxy.sendMessage(
      146,  // ordinal
      arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPolicyInstanceReady(instance_remote) {
    // Ordinal: 114
    return this.proxy.sendMessage(
      114,  // ordinal
      arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPowerInstanceReady(instance_remote) {
    // Ordinal: 103
    return this.proxy.sendMessage(
      103,  // ordinal
      arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPrintSpoolerInstanceReady(instance_remote) {
    // Ordinal: 150
    return this.proxy.sendMessage(
      150,  // ordinal
      arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onPrivacyItemsInstanceReady(instance_remote) {
    // Ordinal: 166
    return this.proxy.sendMessage(
      166,  // ordinal
      arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onProcessInstanceReady(instance_remote) {
    // Ordinal: 104
    return this.proxy.sendMessage(
      104,  // ordinal
      arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onScreenCaptureInstanceReady(instance_remote) {
    // Ordinal: 140
    return this.proxy.sendMessage(
      140,  // ordinal
      arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSharesheetInstanceReady(instance_remote) {
    // Ordinal: 157
    return this.proxy.sendMessage(
      157,  // ordinal
      arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSystemStateInstanceReady(instance_remote) {
    // Ordinal: 169
    return this.proxy.sendMessage(
      169,  // ordinal
      arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onSystemUiInstanceReady(instance_remote) {
    // Ordinal: 167
    return this.proxy.sendMessage(
      167,  // ordinal
      arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTimerInstanceReady(instance_remote) {
    // Ordinal: 141
    return this.proxy.sendMessage(
      141,  // ordinal
      arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTracingInstanceReady(instance_remote) {
    // Ordinal: 128
    return this.proxy.sendMessage(
      128,  // ordinal
      arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onTtsInstanceReady(instance_remote) {
    // Ordinal: 123
    return this.proxy.sendMessage(
      123,  // ordinal
      arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onUsbHostInstanceReady(instance_remote) {
    // Ordinal: 139
    return this.proxy.sendMessage(
      139,  // ordinal
      arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onVideoInstanceReady(instance_remote) {
    // Ordinal: 107
    return this.proxy.sendMessage(
      107,  // ordinal
      arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onVolumeMounterInstanceReady(instance_remote) {
    // Ordinal: 131
    return this.proxy.sendMessage(
      131,  // ordinal
      arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWakeLockInstanceReady(instance_remote) {
    // Ordinal: 142
    return this.proxy.sendMessage(
      142,  // ordinal
      arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWallpaperInstanceReady(instance_remote) {
    // Ordinal: 124
    return this.proxy.sendMessage(
      124,  // ordinal
      arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec,
      null,
      [instance_remote],
      false);
  }

  onWebApkInstanceReady(instance_ptr) {
    // Ordinal: 162
    return this.proxy.sendMessage(
      162,  // ordinal
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
    this.ordinalMap.set(127, 0); // Default ordinal 127 -> Index 0
    this.ordinalMap.set(158, 1); // Default ordinal 158 -> Index 1
    this.ordinalMap.set(100, 2); // Default ordinal 100 -> Index 2
    this.ordinalMap.set(149, 3); // Default ordinal 149 -> Index 3
    this.ordinalMap.set(145, 4); // Default ordinal 145 -> Index 4
    this.ordinalMap.set(174, 5); // Default ordinal 174 -> Index 5
    this.ordinalMap.set(171, 6); // Default ordinal 171 -> Index 6
    this.ordinalMap.set(115, 7); // Default ordinal 115 -> Index 7
    this.ordinalMap.set(106, 8); // Default ordinal 106 -> Index 8
    this.ordinalMap.set(138, 9); // Default ordinal 138 -> Index 9
    this.ordinalMap.set(113, 10); // Default ordinal 113 -> Index 10
    this.ordinalMap.set(125, 11); // Default ordinal 125 -> Index 11
    this.ordinalMap.set(151, 12); // Default ordinal 151 -> Index 12
    this.ordinalMap.set(170, 13); // Default ordinal 170 -> Index 13
    this.ordinalMap.set(161, 14); // Default ordinal 161 -> Index 14
    this.ordinalMap.set(112, 15); // Default ordinal 112 -> Index 15
    this.ordinalMap.set(173, 16); // Default ordinal 173 -> Index 16
    this.ordinalMap.set(156, 17); // Default ordinal 156 -> Index 17
    this.ordinalMap.set(144, 18); // Default ordinal 144 -> Index 18
    this.ordinalMap.set(122, 19); // Default ordinal 122 -> Index 19
    this.ordinalMap.set(172, 20); // Default ordinal 172 -> Index 20
    this.ordinalMap.set(119, 21); // Default ordinal 119 -> Index 21
    this.ordinalMap.set(159, 22); // Default ordinal 159 -> Index 22
    this.ordinalMap.set(110, 23); // Default ordinal 110 -> Index 23
    this.ordinalMap.set(143, 24); // Default ordinal 143 -> Index 24
    this.ordinalMap.set(111, 25); // Default ordinal 111 -> Index 25
    this.ordinalMap.set(152, 26); // Default ordinal 152 -> Index 26
    this.ordinalMap.set(168, 27); // Default ordinal 168 -> Index 27
    this.ordinalMap.set(175, 28); // Default ordinal 175 -> Index 28
    this.ordinalMap.set(148, 29); // Default ordinal 148 -> Index 29
    this.ordinalMap.set(164, 30); // Default ordinal 164 -> Index 30
    this.ordinalMap.set(116, 31); // Default ordinal 116 -> Index 31
    this.ordinalMap.set(135, 32); // Default ordinal 135 -> Index 32
    this.ordinalMap.set(163, 33); // Default ordinal 163 -> Index 33
    this.ordinalMap.set(108, 34); // Default ordinal 108 -> Index 34
    this.ordinalMap.set(102, 35); // Default ordinal 102 -> Index 35
    this.ordinalMap.set(120, 36); // Default ordinal 120 -> Index 36
    this.ordinalMap.set(133, 37); // Default ordinal 133 -> Index 37
    this.ordinalMap.set(155, 38); // Default ordinal 155 -> Index 38
    this.ordinalMap.set(146, 39); // Default ordinal 146 -> Index 39
    this.ordinalMap.set(114, 40); // Default ordinal 114 -> Index 40
    this.ordinalMap.set(103, 41); // Default ordinal 103 -> Index 41
    this.ordinalMap.set(150, 42); // Default ordinal 150 -> Index 42
    this.ordinalMap.set(166, 43); // Default ordinal 166 -> Index 43
    this.ordinalMap.set(104, 44); // Default ordinal 104 -> Index 44
    this.ordinalMap.set(140, 45); // Default ordinal 140 -> Index 45
    this.ordinalMap.set(157, 46); // Default ordinal 157 -> Index 46
    this.ordinalMap.set(169, 47); // Default ordinal 169 -> Index 47
    this.ordinalMap.set(167, 48); // Default ordinal 167 -> Index 48
    this.ordinalMap.set(141, 49); // Default ordinal 141 -> Index 49
    this.ordinalMap.set(128, 50); // Default ordinal 128 -> Index 50
    this.ordinalMap.set(123, 51); // Default ordinal 123 -> Index 51
    this.ordinalMap.set(139, 52); // Default ordinal 139 -> Index 52
    this.ordinalMap.set(107, 53); // Default ordinal 107 -> Index 53
    this.ordinalMap.set(131, 54); // Default ordinal 131 -> Index 54
    this.ordinalMap.set(142, 55); // Default ordinal 142 -> Index 55
    this.ordinalMap.set(124, 56); // Default ordinal 124 -> Index 56
    this.ordinalMap.set(162, 57); // Default ordinal 162 -> Index 57
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAccessibilityHelperInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccessibilityHelperInstanceReady (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnAdbdMonitorInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAdbdMonitorInstanceReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnAppInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppInstanceReady (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnAppPermissionsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppPermissionsInstanceReady (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnAppfuseInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppfuseInstanceReady (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: OnArcShellExecutionInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnArcShellExecutionInstanceReady (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: OnArcWifiInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnArcWifiInstanceReady (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: OnAudioInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioInstanceReady (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: OnAuthInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthInstanceReady (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: OnBackupSettingsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackupSettingsInstanceReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: OnBluetoothInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBluetoothInstanceReady (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: OnBootPhaseMonitorInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBootPhaseMonitorInstanceReady (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: OnCameraInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraInstanceReady (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: OnChromeFeatureFlagsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnChromeFeatureFlagsInstanceReady (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: OnCompatibilityModeInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompatibilityModeInstanceReady (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: OnCrashCollectorInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCrashCollectorInstanceReady (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: OnOnDeviceSafetyInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOnDeviceSafetyInstanceReady (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 17: OnDigitalGoodsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDigitalGoodsInstanceReady (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 18: OnDiskSpaceInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDiskSpaceInstanceReady (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 19: OnEnterpriseReportingInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnterpriseReportingInstanceReady (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 20: OnErrorNotificationInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnErrorNotificationInstanceReady (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 21: OnFileSystemInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFileSystemInstanceReady (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 22: OnIioSensorInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIioSensorInstanceReady (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 23: OnImeInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImeInstanceReady (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 24: OnInputMethodManagerInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInputMethodManagerInstanceReady (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 25: OnIntentHelperInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIntentHelperInstanceReady (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 26: OnKeymasterInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeymasterInstanceReady (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 27: OnKeyMintInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyMintInstanceReady (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 28: OnKioskInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKioskInstanceReady (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 29: OnMediaSessionInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaSessionInstanceReady (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 30: OnMemoryInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMemoryInstanceReady (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 31: OnMetricsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetricsInstanceReady (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 32: OnMidisInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMidisInstanceReady (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 33: OnNearbyShareInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNearbyShareInstanceReady (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 34: OnNetInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetInstanceReady (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 35: OnNotificationsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationsInstanceReady (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 36: OnObbMounterInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnObbMounterInstanceReady (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 37: OnOemCryptoInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOemCryptoInstanceReady (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 38: OnPaymentAppInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaymentAppInstanceReady (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 39: OnPipInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPipInstanceReady (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 40: OnPolicyInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPolicyInstanceReady (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 41: OnPowerInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPowerInstanceReady (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 42: OnPrintSpoolerInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintSpoolerInstanceReady (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 43: OnPrivacyItemsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrivacyItemsInstanceReady (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 44: OnProcessInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProcessInstanceReady (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 45: OnScreenCaptureInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenCaptureInstanceReady (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 46: OnSharesheetInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharesheetInstanceReady (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 47: OnSystemStateInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemStateInstanceReady (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 48: OnSystemUiInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemUiInstanceReady (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 49: OnTimerInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimerInstanceReady (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 50: OnTracingInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTracingInstanceReady (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 51: OnTtsInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTtsInstanceReady (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 52: OnUsbHostInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUsbHostInstanceReady (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 53: OnVideoInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoInstanceReady (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 54: OnVolumeMounterInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVolumeMounterInstanceReady (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 55: OnWakeLockInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWakeLockInstanceReady (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 56: OnWallpaperInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWallpaperInstanceReady (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 57: OnWebApkInstanceReady
        try {
             decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebApkInstanceReady (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAccessibilityHelperInstanceReady');
          const result = this.impl.onAccessibilityHelperInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAdbdMonitorInstanceReady');
          const result = this.impl.onAdbdMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppInstanceReady');
          const result = this.impl.onAppInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppPermissionsInstanceReady');
          const result = this.impl.onAppPermissionsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppfuseInstanceReady');
          const result = this.impl.onAppfuseInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onArcShellExecutionInstanceReady');
          const result = this.impl.onArcShellExecutionInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onArcWifiInstanceReady');
          const result = this.impl.onArcWifiInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAudioInstanceReady');
          const result = this.impl.onAudioInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAuthInstanceReady');
          const result = this.impl.onAuthInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackupSettingsInstanceReady');
          const result = this.impl.onBackupSettingsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothInstanceReady');
          const result = this.impl.onBluetoothInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBootPhaseMonitorInstanceReady');
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCameraInstanceReady');
          const result = this.impl.onCameraInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onChromeFeatureFlagsInstanceReady');
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCompatibilityModeInstanceReady');
          const result = this.impl.onCompatibilityModeInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCrashCollectorInstanceReady');
          const result = this.impl.onCrashCollectorInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOnDeviceSafetyInstanceReady');
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDigitalGoodsInstanceReady');
          const result = this.impl.onDigitalGoodsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDiskSpaceInstanceReady');
          const result = this.impl.onDiskSpaceInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEnterpriseReportingInstanceReady');
          const result = this.impl.onEnterpriseReportingInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onErrorNotificationInstanceReady');
          const result = this.impl.onErrorNotificationInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFileSystemInstanceReady');
          const result = this.impl.onFileSystemInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIioSensorInstanceReady');
          const result = this.impl.onIioSensorInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImeInstanceReady');
          const result = this.impl.onImeInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInputMethodManagerInstanceReady');
          const result = this.impl.onInputMethodManagerInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIntentHelperInstanceReady');
          const result = this.impl.onIntentHelperInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeymasterInstanceReady');
          const result = this.impl.onKeymasterInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyMintInstanceReady');
          const result = this.impl.onKeyMintInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKioskInstanceReady');
          const result = this.impl.onKioskInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMediaSessionInstanceReady');
          const result = this.impl.onMediaSessionInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMemoryInstanceReady');
          const result = this.impl.onMemoryInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMetricsInstanceReady');
          const result = this.impl.onMetricsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMidisInstanceReady');
          const result = this.impl.onMidisInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNearbyShareInstanceReady');
          const result = this.impl.onNearbyShareInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetInstanceReady');
          const result = this.impl.onNetInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsInstanceReady');
          const result = this.impl.onNotificationsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onObbMounterInstanceReady');
          const result = this.impl.onObbMounterInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onOemCryptoInstanceReady');
          const result = this.impl.onOemCryptoInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPaymentAppInstanceReady');
          const result = this.impl.onPaymentAppInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPipInstanceReady');
          const result = this.impl.onPipInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPolicyInstanceReady');
          const result = this.impl.onPolicyInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPowerInstanceReady');
          const result = this.impl.onPowerInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPrintSpoolerInstanceReady');
          const result = this.impl.onPrintSpoolerInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsInstanceReady');
          const result = this.impl.onPrivacyItemsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProcessInstanceReady');
          const result = this.impl.onProcessInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScreenCaptureInstanceReady');
          const result = this.impl.onScreenCaptureInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSharesheetInstanceReady');
          const result = this.impl.onSharesheetInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSystemStateInstanceReady');
          const result = this.impl.onSystemStateInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSystemUiInstanceReady');
          const result = this.impl.onSystemUiInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTimerInstanceReady');
          const result = this.impl.onTimerInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTracingInstanceReady');
          const result = this.impl.onTracingInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTtsInstanceReady');
          const result = this.impl.onTtsInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onUsbHostInstanceReady');
          const result = this.impl.onUsbHostInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVideoInstanceReady');
          const result = this.impl.onVideoInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVolumeMounterInstanceReady');
          const result = this.impl.onVolumeMounterInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWakeLockInstanceReady');
          const result = this.impl.onWakeLockInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperInstanceReady');
          const result = this.impl.onWallpaperInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWebApkInstanceReady');
          const result = this.impl.onWebApkInstanceReady(params.instance_ptr);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ArcBridgeHostReceiver = arc.mojom.ArcBridgeHostReceiver;

arc.mojom.ArcBridgeHostPtr = arc.mojom.ArcBridgeHostRemote;
arc.mojom.ArcBridgeHostRequest = arc.mojom.ArcBridgeHostPendingReceiver;

