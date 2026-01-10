// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_bridge.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ArcBridgeHost
arc.mojom.mojom.ArcBridgeHost = {};

arc.mojom.mojom.ArcBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ArcBridgeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcBridgeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ArcBridgeHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ArcBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ArcBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAccessibilityHelperInstanceReady(instance_remote) {
    // Ordinal: 127
    return this.proxy.sendMessage(
      127,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAdbdMonitorInstanceReady(instance_remote) {
    // Ordinal: 158
    return this.proxy.sendMessage(
      158,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAppInstanceReady(instance_remote) {
    // Ordinal: 100
    return this.proxy.sendMessage(
      100,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAppPermissionsInstanceReady(instance_remote) {
    // Ordinal: 149
    return this.proxy.sendMessage(
      149,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAppfuseInstanceReady(instance_remote) {
    // Ordinal: 145
    return this.proxy.sendMessage(
      145,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onArcShellExecutionInstanceReady(instance_remote) {
    // Ordinal: 174
    return this.proxy.sendMessage(
      174,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onArcWifiInstanceReady(instance_remote) {
    // Ordinal: 171
    return this.proxy.sendMessage(
      171,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAudioInstanceReady(instance_remote) {
    // Ordinal: 115
    return this.proxy.sendMessage(
      115,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onAuthInstanceReady(instance_remote) {
    // Ordinal: 106
    return this.proxy.sendMessage(
      106,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onBackupSettingsInstanceReady(instance_remote) {
    // Ordinal: 138
    return this.proxy.sendMessage(
      138,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onBluetoothInstanceReady(instance_remote) {
    // Ordinal: 113
    return this.proxy.sendMessage(
      113,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onBootPhaseMonitorInstanceReady(instance_remote) {
    // Ordinal: 125
    return this.proxy.sendMessage(
      125,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onCameraInstanceReady(instance_remote) {
    // Ordinal: 151
    return this.proxy.sendMessage(
      151,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onChromeFeatureFlagsInstanceReady(instance_remote) {
    // Ordinal: 170
    return this.proxy.sendMessage(
      170,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onCompatibilityModeInstanceReady(instance_remote) {
    // Ordinal: 161
    return this.proxy.sendMessage(
      161,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onCrashCollectorInstanceReady(instance_remote) {
    // Ordinal: 112
    return this.proxy.sendMessage(
      112,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onOnDeviceSafetyInstanceReady(instance_remote) {
    // Ordinal: 173
    return this.proxy.sendMessage(
      173,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onDigitalGoodsInstanceReady(instance_remote) {
    // Ordinal: 156
    return this.proxy.sendMessage(
      156,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onDiskSpaceInstanceReady(instance_remote) {
    // Ordinal: 144
    return this.proxy.sendMessage(
      144,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onEnterpriseReportingInstanceReady(instance_remote) {
    // Ordinal: 122
    return this.proxy.sendMessage(
      122,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onErrorNotificationInstanceReady(instance_remote) {
    // Ordinal: 172
    return this.proxy.sendMessage(
      172,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onFileSystemInstanceReady(instance_remote) {
    // Ordinal: 119
    return this.proxy.sendMessage(
      119,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onIioSensorInstanceReady(instance_remote) {
    // Ordinal: 159
    return this.proxy.sendMessage(
      159,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onImeInstanceReady(instance_remote) {
    // Ordinal: 110
    return this.proxy.sendMessage(
      110,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onInputMethodManagerInstanceReady(instance_remote) {
    // Ordinal: 143
    return this.proxy.sendMessage(
      143,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onIntentHelperInstanceReady(instance_remote) {
    // Ordinal: 111
    return this.proxy.sendMessage(
      111,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onKeymasterInstanceReady(instance_remote) {
    // Ordinal: 152
    return this.proxy.sendMessage(
      152,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onKeyMintInstanceReady(instance_remote) {
    // Ordinal: 168
    return this.proxy.sendMessage(
      168,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onKioskInstanceReady(instance_remote) {
    // Ordinal: 175
    return this.proxy.sendMessage(
      175,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onMediaSessionInstanceReady(instance_remote) {
    // Ordinal: 148
    return this.proxy.sendMessage(
      148,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onMemoryInstanceReady(instance_remote) {
    // Ordinal: 164
    return this.proxy.sendMessage(
      164,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onMetricsInstanceReady(instance_remote) {
    // Ordinal: 116
    return this.proxy.sendMessage(
      116,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onMidisInstanceReady(instance_remote) {
    // Ordinal: 135
    return this.proxy.sendMessage(
      135,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onNearbyShareInstanceReady(instance_remote) {
    // Ordinal: 163
    return this.proxy.sendMessage(
      163,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onNetInstanceReady(instance_remote) {
    // Ordinal: 108
    return this.proxy.sendMessage(
      108,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onNotificationsInstanceReady(instance_remote) {
    // Ordinal: 102
    return this.proxy.sendMessage(
      102,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onObbMounterInstanceReady(instance_remote) {
    // Ordinal: 120
    return this.proxy.sendMessage(
      120,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onOemCryptoInstanceReady(instance_remote) {
    // Ordinal: 133
    return this.proxy.sendMessage(
      133,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPaymentAppInstanceReady(instance_remote) {
    // Ordinal: 155
    return this.proxy.sendMessage(
      155,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPipInstanceReady(instance_remote) {
    // Ordinal: 146
    return this.proxy.sendMessage(
      146,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPolicyInstanceReady(instance_remote) {
    // Ordinal: 114
    return this.proxy.sendMessage(
      114,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPowerInstanceReady(instance_remote) {
    // Ordinal: 103
    return this.proxy.sendMessage(
      103,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPrintSpoolerInstanceReady(instance_remote) {
    // Ordinal: 150
    return this.proxy.sendMessage(
      150,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onPrivacyItemsInstanceReady(instance_remote) {
    // Ordinal: 166
    return this.proxy.sendMessage(
      166,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onProcessInstanceReady(instance_remote) {
    // Ordinal: 104
    return this.proxy.sendMessage(
      104,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onScreenCaptureInstanceReady(instance_remote) {
    // Ordinal: 140
    return this.proxy.sendMessage(
      140,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onSharesheetInstanceReady(instance_remote) {
    // Ordinal: 157
    return this.proxy.sendMessage(
      157,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onSystemStateInstanceReady(instance_remote) {
    // Ordinal: 169
    return this.proxy.sendMessage(
      169,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onSystemUiInstanceReady(instance_remote) {
    // Ordinal: 167
    return this.proxy.sendMessage(
      167,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onTimerInstanceReady(instance_remote) {
    // Ordinal: 141
    return this.proxy.sendMessage(
      141,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onTracingInstanceReady(instance_remote) {
    // Ordinal: 128
    return this.proxy.sendMessage(
      128,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onTtsInstanceReady(instance_remote) {
    // Ordinal: 123
    return this.proxy.sendMessage(
      123,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onUsbHostInstanceReady(instance_remote) {
    // Ordinal: 139
    return this.proxy.sendMessage(
      139,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onVideoInstanceReady(instance_remote) {
    // Ordinal: 107
    return this.proxy.sendMessage(
      107,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onVolumeMounterInstanceReady(instance_remote) {
    // Ordinal: 131
    return this.proxy.sendMessage(
      131,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onWakeLockInstanceReady(instance_remote) {
    // Ordinal: 142
    return this.proxy.sendMessage(
      142,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onWallpaperInstanceReady(instance_remote) {
    // Ordinal: 124
    return this.proxy.sendMessage(
      124,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec,
      null,
      [instance_remote]);
  }

  onWebApkInstanceReady(instance_ptr) {
    // Ordinal: 162
    return this.proxy.sendMessage(
      162,  // ordinal
      arc.mojom.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec,
      null,
      [instance_ptr]);
  }

};

arc.mojom.mojom.ArcBridgeHost.getRemote = function() {
  let remote = new arc.mojom.mojom.ArcBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcBridgeHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnAccessibilityHelperInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAccessibilityHelperInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAccessibilityHelperInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ax.android.mojom.AccessibilityHelperInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAdbdMonitorInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAdbdMonitorInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAdbdMonitorInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAppInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAppInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AppInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppPermissionsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAppPermissionsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAppPermissionsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AppPermissionsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppfuseInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAppfuseInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAppfuseInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AppfuseInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnArcShellExecutionInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnArcShellExecutionInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnArcShellExecutionInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ArcShellExecutionInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnArcWifiInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnArcWifiInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnArcWifiInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ArcWifiInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAudioInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAudioInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAudioInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AudioInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAuthInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnAuthInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnAuthInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AuthInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBackupSettingsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnBackupSettingsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnBackupSettingsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.BackupSettingsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBluetoothInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnBluetoothInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnBluetoothInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.BluetoothInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBootPhaseMonitorInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnBootPhaseMonitorInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnBootPhaseMonitorInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCameraInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnCameraInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnCameraInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.CameraInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnChromeFeatureFlagsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnChromeFeatureFlagsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnChromeFeatureFlagsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ChromeFeatureFlagsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCompatibilityModeInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnCompatibilityModeInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnCompatibilityModeInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.CompatibilityModeInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCrashCollectorInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnCrashCollectorInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnCrashCollectorInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOnDeviceSafetyInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnOnDeviceSafetyInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnOnDeviceSafetyInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDigitalGoodsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnDigitalGoodsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnDigitalGoodsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.DigitalGoodsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDiskSpaceInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnDiskSpaceInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnDiskSpaceInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.DiskSpaceInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEnterpriseReportingInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnEnterpriseReportingInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnEnterpriseReportingInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.EnterpriseReportingInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnErrorNotificationInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnErrorNotificationInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnErrorNotificationInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ErrorNotificationInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFileSystemInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnFileSystemInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnFileSystemInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.FileSystemInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIioSensorInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnIioSensorInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnIioSensorInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.IioSensorInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnImeInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnImeInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnImeInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ImeInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnInputMethodManagerInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnInputMethodManagerInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnInputMethodManagerInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIntentHelperInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnIntentHelperInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnIntentHelperInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.IntentHelperInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeymasterInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnKeymasterInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnKeymasterInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.KeymasterInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeyMintInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnKeyMintInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnKeyMintInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(keymint.KeyMintInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKioskInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnKioskInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnKioskInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.KioskInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMediaSessionInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnMediaSessionInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnMediaSessionInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.MediaSessionInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMemoryInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnMemoryInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnMemoryInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.MemoryInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMetricsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnMetricsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnMetricsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.MetricsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMidisInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnMidisInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnMidisInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.MidisInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNearbyShareInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnNearbyShareInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnNearbyShareInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.NearbyShareInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNetInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnNetInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnNetInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.NetInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnNotificationsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnNotificationsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.NotificationsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnObbMounterInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnObbMounterInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnObbMounterInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ObbMounterInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOemCryptoInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnOemCryptoInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnOemCryptoInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.OemCryptoInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPaymentAppInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPaymentAppInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPaymentAppInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.payments.mojom.PaymentAppInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPipInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPipInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPipInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PipInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPolicyInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPolicyInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPolicyInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PolicyInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPowerInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPowerInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPowerInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PowerInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPrintSpoolerInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPrintSpoolerInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPrintSpoolerInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPrivacyItemsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnPrivacyItemsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnPrivacyItemsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrivacyItemsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnProcessInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnProcessInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnProcessInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ProcessInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreenCaptureInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnScreenCaptureInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnScreenCaptureInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ScreenCaptureInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSharesheetInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnSharesheetInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnSharesheetInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SharesheetInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSystemStateInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnSystemStateInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnSystemStateInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SystemStateInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSystemUiInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnSystemUiInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnSystemUiInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SystemUiInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTimerInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnTimerInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnTimerInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.TimerInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTracingInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnTracingInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnTracingInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.TracingInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTtsInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnTtsInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnTtsInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.TtsInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnUsbHostInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnUsbHostInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnUsbHostInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.UsbHostInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVideoInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnVideoInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnVideoInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.VideoInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnVolumeMounterInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnVolumeMounterInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnVolumeMounterInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.VolumeMounterInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWakeLockInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnWakeLockInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnWakeLockInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.WakeLockInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWallpaperInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnWallpaperInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnWallpaperInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.WallpaperInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWebApkInstanceReady
arc.mojom.mojom.ArcBridgeHost_OnWebApkInstanceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBridgeHost.OnWebApkInstanceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'instance_ptr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.WebApkInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ArcBridgeHostPtr = arc.mojom.mojom.ArcBridgeHostRemote;
arc.mojom.mojom.ArcBridgeHostRequest = arc.mojom.mojom.ArcBridgeHostPendingReceiver;

