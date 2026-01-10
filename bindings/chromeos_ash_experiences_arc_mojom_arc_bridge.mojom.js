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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAccessibilityHelperInstanceReady');
          const result = this.impl.onAccessibilityHelperInstanceReady(params.instance_remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAdbdMonitorInstanceReady');
          const result = this.impl.onAdbdMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppInstanceReady');
          const result = this.impl.onAppInstanceReady(params.instance_remote);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppPermissionsInstanceReady');
          const result = this.impl.onAppPermissionsInstanceReady(params.instance_remote);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppfuseInstanceReady');
          const result = this.impl.onAppfuseInstanceReady(params.instance_remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onArcShellExecutionInstanceReady');
          const result = this.impl.onArcShellExecutionInstanceReady(params.instance_remote);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onArcWifiInstanceReady');
          const result = this.impl.onArcWifiInstanceReady(params.instance_remote);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAudioInstanceReady');
          const result = this.impl.onAudioInstanceReady(params.instance_remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAuthInstanceReady');
          const result = this.impl.onAuthInstanceReady(params.instance_remote);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onBackupSettingsInstanceReady');
          const result = this.impl.onBackupSettingsInstanceReady(params.instance_remote);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothInstanceReady');
          const result = this.impl.onBluetoothInstanceReady(params.instance_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onBootPhaseMonitorInstanceReady');
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCameraInstanceReady');
          const result = this.impl.onCameraInstanceReady(params.instance_remote);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onChromeFeatureFlagsInstanceReady');
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.instance_remote);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCompatibilityModeInstanceReady');
          const result = this.impl.onCompatibilityModeInstanceReady(params.instance_remote);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCrashCollectorInstanceReady');
          const result = this.impl.onCrashCollectorInstanceReady(params.instance_remote);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onOnDeviceSafetyInstanceReady');
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.instance_remote);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDigitalGoodsInstanceReady');
          const result = this.impl.onDigitalGoodsInstanceReady(params.instance_remote);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDiskSpaceInstanceReady');
          const result = this.impl.onDiskSpaceInstanceReady(params.instance_remote);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onEnterpriseReportingInstanceReady');
          const result = this.impl.onEnterpriseReportingInstanceReady(params.instance_remote);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onErrorNotificationInstanceReady');
          const result = this.impl.onErrorNotificationInstanceReady(params.instance_remote);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFileSystemInstanceReady');
          const result = this.impl.onFileSystemInstanceReady(params.instance_remote);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onIioSensorInstanceReady');
          const result = this.impl.onIioSensorInstanceReady(params.instance_remote);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onImeInstanceReady');
          const result = this.impl.onImeInstanceReady(params.instance_remote);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onInputMethodManagerInstanceReady');
          const result = this.impl.onInputMethodManagerInstanceReady(params.instance_remote);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onIntentHelperInstanceReady');
          const result = this.impl.onIntentHelperInstanceReady(params.instance_remote);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onKeymasterInstanceReady');
          const result = this.impl.onKeymasterInstanceReady(params.instance_remote);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onKeyMintInstanceReady');
          const result = this.impl.onKeyMintInstanceReady(params.instance_remote);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onKioskInstanceReady');
          const result = this.impl.onKioskInstanceReady(params.instance_remote);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onMediaSessionInstanceReady');
          const result = this.impl.onMediaSessionInstanceReady(params.instance_remote);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onMemoryInstanceReady');
          const result = this.impl.onMemoryInstanceReady(params.instance_remote);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onMetricsInstanceReady');
          const result = this.impl.onMetricsInstanceReady(params.instance_remote);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onMidisInstanceReady');
          const result = this.impl.onMidisInstanceReady(params.instance_remote);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onNearbyShareInstanceReady');
          const result = this.impl.onNearbyShareInstanceReady(params.instance_remote);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onNetInstanceReady');
          const result = this.impl.onNetInstanceReady(params.instance_remote);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsInstanceReady');
          const result = this.impl.onNotificationsInstanceReady(params.instance_remote);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onObbMounterInstanceReady');
          const result = this.impl.onObbMounterInstanceReady(params.instance_remote);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onOemCryptoInstanceReady');
          const result = this.impl.onOemCryptoInstanceReady(params.instance_remote);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPaymentAppInstanceReady');
          const result = this.impl.onPaymentAppInstanceReady(params.instance_remote);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPipInstanceReady');
          const result = this.impl.onPipInstanceReady(params.instance_remote);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPolicyInstanceReady');
          const result = this.impl.onPolicyInstanceReady(params.instance_remote);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPowerInstanceReady');
          const result = this.impl.onPowerInstanceReady(params.instance_remote);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPrintSpoolerInstanceReady');
          const result = this.impl.onPrintSpoolerInstanceReady(params.instance_remote);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsInstanceReady');
          const result = this.impl.onPrivacyItemsInstanceReady(params.instance_remote);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onProcessInstanceReady');
          const result = this.impl.onProcessInstanceReady(params.instance_remote);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onScreenCaptureInstanceReady');
          const result = this.impl.onScreenCaptureInstanceReady(params.instance_remote);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSharesheetInstanceReady');
          const result = this.impl.onSharesheetInstanceReady(params.instance_remote);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSystemStateInstanceReady');
          const result = this.impl.onSystemStateInstanceReady(params.instance_remote);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSystemUiInstanceReady');
          const result = this.impl.onSystemUiInstanceReady(params.instance_remote);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onTimerInstanceReady');
          const result = this.impl.onTimerInstanceReady(params.instance_remote);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onTracingInstanceReady');
          const result = this.impl.onTracingInstanceReady(params.instance_remote);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onTtsInstanceReady');
          const result = this.impl.onTtsInstanceReady(params.instance_remote);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onUsbHostInstanceReady');
          const result = this.impl.onUsbHostInstanceReady(params.instance_remote);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onVideoInstanceReady');
          const result = this.impl.onVideoInstanceReady(params.instance_remote);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onVolumeMounterInstanceReady');
          const result = this.impl.onVolumeMounterInstanceReady(params.instance_remote);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onWakeLockInstanceReady');
          const result = this.impl.onWakeLockInstanceReady(params.instance_remote);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onWallpaperInstanceReady');
          const result = this.impl.onWallpaperInstanceReady(params.instance_remote);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$, 0);
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

