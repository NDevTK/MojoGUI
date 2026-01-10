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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 127: {
          const params = arc.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAccessibilityHelperInstanceReady(params.instance_remote);
          break;
        }
        case 158: {
          const params = arc.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAdbdMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 100: {
          const params = arc.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAppInstanceReady(params.instance_remote);
          break;
        }
        case 149: {
          const params = arc.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAppPermissionsInstanceReady(params.instance_remote);
          break;
        }
        case 145: {
          const params = arc.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAppfuseInstanceReady(params.instance_remote);
          break;
        }
        case 174: {
          const params = arc.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onArcShellExecutionInstanceReady(params.instance_remote);
          break;
        }
        case 171: {
          const params = arc.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onArcWifiInstanceReady(params.instance_remote);
          break;
        }
        case 115: {
          const params = arc.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAudioInstanceReady(params.instance_remote);
          break;
        }
        case 106: {
          const params = arc.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAuthInstanceReady(params.instance_remote);
          break;
        }
        case 138: {
          const params = arc.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackupSettingsInstanceReady(params.instance_remote);
          break;
        }
        case 113: {
          const params = arc.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBluetoothInstanceReady(params.instance_remote);
          break;
        }
        case 125: {
          const params = arc.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBootPhaseMonitorInstanceReady(params.instance_remote);
          break;
        }
        case 151: {
          const params = arc.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCameraInstanceReady(params.instance_remote);
          break;
        }
        case 170: {
          const params = arc.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onChromeFeatureFlagsInstanceReady(params.instance_remote);
          break;
        }
        case 161: {
          const params = arc.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCompatibilityModeInstanceReady(params.instance_remote);
          break;
        }
        case 112: {
          const params = arc.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCrashCollectorInstanceReady(params.instance_remote);
          break;
        }
        case 173: {
          const params = arc.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onOnDeviceSafetyInstanceReady(params.instance_remote);
          break;
        }
        case 156: {
          const params = arc.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDigitalGoodsInstanceReady(params.instance_remote);
          break;
        }
        case 144: {
          const params = arc.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDiskSpaceInstanceReady(params.instance_remote);
          break;
        }
        case 122: {
          const params = arc.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEnterpriseReportingInstanceReady(params.instance_remote);
          break;
        }
        case 172: {
          const params = arc.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onErrorNotificationInstanceReady(params.instance_remote);
          break;
        }
        case 119: {
          const params = arc.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFileSystemInstanceReady(params.instance_remote);
          break;
        }
        case 159: {
          const params = arc.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIioSensorInstanceReady(params.instance_remote);
          break;
        }
        case 110: {
          const params = arc.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImeInstanceReady(params.instance_remote);
          break;
        }
        case 143: {
          const params = arc.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onInputMethodManagerInstanceReady(params.instance_remote);
          break;
        }
        case 111: {
          const params = arc.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onIntentHelperInstanceReady(params.instance_remote);
          break;
        }
        case 152: {
          const params = arc.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeymasterInstanceReady(params.instance_remote);
          break;
        }
        case 168: {
          const params = arc.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyMintInstanceReady(params.instance_remote);
          break;
        }
        case 175: {
          const params = arc.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKioskInstanceReady(params.instance_remote);
          break;
        }
        case 148: {
          const params = arc.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMediaSessionInstanceReady(params.instance_remote);
          break;
        }
        case 164: {
          const params = arc.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMemoryInstanceReady(params.instance_remote);
          break;
        }
        case 116: {
          const params = arc.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMetricsInstanceReady(params.instance_remote);
          break;
        }
        case 135: {
          const params = arc.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMidisInstanceReady(params.instance_remote);
          break;
        }
        case 163: {
          const params = arc.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNearbyShareInstanceReady(params.instance_remote);
          break;
        }
        case 108: {
          const params = arc.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetInstanceReady(params.instance_remote);
          break;
        }
        case 102: {
          const params = arc.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNotificationsInstanceReady(params.instance_remote);
          break;
        }
        case 120: {
          const params = arc.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onObbMounterInstanceReady(params.instance_remote);
          break;
        }
        case 133: {
          const params = arc.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onOemCryptoInstanceReady(params.instance_remote);
          break;
        }
        case 155: {
          const params = arc.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPaymentAppInstanceReady(params.instance_remote);
          break;
        }
        case 146: {
          const params = arc.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPipInstanceReady(params.instance_remote);
          break;
        }
        case 114: {
          const params = arc.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPolicyInstanceReady(params.instance_remote);
          break;
        }
        case 103: {
          const params = arc.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPowerInstanceReady(params.instance_remote);
          break;
        }
        case 150: {
          const params = arc.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrintSpoolerInstanceReady(params.instance_remote);
          break;
        }
        case 166: {
          const params = arc.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrivacyItemsInstanceReady(params.instance_remote);
          break;
        }
        case 104: {
          const params = arc.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onProcessInstanceReady(params.instance_remote);
          break;
        }
        case 140: {
          const params = arc.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenCaptureInstanceReady(params.instance_remote);
          break;
        }
        case 157: {
          const params = arc.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSharesheetInstanceReady(params.instance_remote);
          break;
        }
        case 169: {
          const params = arc.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSystemStateInstanceReady(params.instance_remote);
          break;
        }
        case 167: {
          const params = arc.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSystemUiInstanceReady(params.instance_remote);
          break;
        }
        case 141: {
          const params = arc.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTimerInstanceReady(params.instance_remote);
          break;
        }
        case 128: {
          const params = arc.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTracingInstanceReady(params.instance_remote);
          break;
        }
        case 123: {
          const params = arc.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTtsInstanceReady(params.instance_remote);
          break;
        }
        case 139: {
          const params = arc.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUsbHostInstanceReady(params.instance_remote);
          break;
        }
        case 107: {
          const params = arc.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoInstanceReady(params.instance_remote);
          break;
        }
        case 131: {
          const params = arc.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVolumeMounterInstanceReady(params.instance_remote);
          break;
        }
        case 142: {
          const params = arc.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWakeLockInstanceReady(params.instance_remote);
          break;
        }
        case 124: {
          const params = arc.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWallpaperInstanceReady(params.instance_remote);
          break;
        }
        case 162: {
          const params = arc.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWebApkInstanceReady(params.instance_ptr);
          break;
        }
      }
    }});
  }
};

arc.mojom.ArcBridgeHostReceiver = arc.mojom.ArcBridgeHostReceiver;

arc.mojom.ArcBridgeHostPtr = arc.mojom.ArcBridgeHostRemote;
arc.mojom.ArcBridgeHostRequest = arc.mojom.ArcBridgeHostPendingReceiver;

