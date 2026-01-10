// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/camera_app_helper.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: ScreenState
ash.camera_app.mojom.ScreenState = {
  kOn: 0,
  kOff: 1,
  kOffAuto: 2,
};
ash.camera_app.mojom.ScreenStateSpec = { $: mojo.internal.Enum() };

// Enum: LidState
ash.camera_app.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};
ash.camera_app.mojom.LidStateSpec = { $: mojo.internal.Enum() };

// Enum: WindowStateType
ash.camera_app.mojom.WindowStateType = {
  kMinimized: 0,
  kMaximized: 1,
  kFullscreen: 2,
  kRegular: 3,
};
ash.camera_app.mojom.WindowStateTypeSpec = { $: mojo.internal.Enum() };

// Enum: FileMonitorResult
ash.camera_app.mojom.FileMonitorResult = {
  kDeleted: 0,
  kCanceled: 1,
  kError: 2,
};
ash.camera_app.mojom.FileMonitorResultSpec = { $: mojo.internal.Enum() };

// Enum: StorageMonitorStatus
ash.camera_app.mojom.StorageMonitorStatus = {
  kNormal: 0,
  kLow: 1,
  kCriticallyLow: 2,
  kCanceled: 3,
  kError: 4,
};
ash.camera_app.mojom.StorageMonitorStatusSpec = { $: mojo.internal.Enum() };

// Enum: AspectRatio
ash.camera_app.mojom.AspectRatio = {
  kOthers: 0,
  k4To3: 1,
  k16To9: 2,
};
ash.camera_app.mojom.AspectRatioSpec = { $: mojo.internal.Enum() };

// Enum: FileType
ash.camera_app.mojom.FileType = {
  kPhoto: 0,
  kVideo: 1,
  kGif: 2,
};
ash.camera_app.mojom.FileTypeSpec = { $: mojo.internal.Enum() };

// Union: CaptureDestination
ash.camera_app.mojom.CaptureDestinationSpec = { $: mojo.internal.Union(
    'ash.camera_app.mojom.CaptureDestination', {
      'cloud_upload': {
        'ordinal': 0,
        'type': ash.camera_app.mojom.CloudUploadSpec,
      }},
      'local_file': {
        'ordinal': 1,
        'type': ash.camera_app.mojom.LocalFileSpec,
      }},
    })
};

// Struct: WifiConfig
ash.camera_app.mojom.WifiConfigSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WifiConfig',
      packedSize: 56,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'security', packedOffset: 32, packedBitOffset: 0, type: ash.camera_app.mojom.WifiSecurityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'eap_method', packedOffset: 36, packedBitOffset: 0, type: ash.camera_app.mojom.WifiEapMethodSpec, nullable: true, minVersion: 0 },
        { name: 'eap_phase2_method', packedOffset: 40, packedBitOffset: 0, type: ash.camera_app.mojom.WifiEapPhase2MethodSpec, nullable: true, minVersion: 0 },
        { name: 'eap_identity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'eap_anonymous_identity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: CloudUpload
ash.camera_app.mojom.CloudUploadSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CloudUpload',
      packedSize: 24,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'thumbnail', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LocalFile
ash.camera_app.mojom.LocalFileSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.LocalFile',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TabletModeMonitor
ash.camera_app.mojom.TabletModeMonitor = {};

ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.TabletModeMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.TabletModeMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.TabletModeMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.TabletModeMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.TabletModeMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.TabletModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

};

ash.camera_app.mojom.TabletModeMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.TabletModeMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.TabletModeMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.TabletModeMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.TabletModeMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.TabletModeMonitorPtr = ash.camera_app.mojom.TabletModeMonitorRemote;
ash.camera_app.mojom.TabletModeMonitorRequest = ash.camera_app.mojom.TabletModeMonitorPendingReceiver;


// Interface: ScreenStateMonitor
ash.camera_app.mojom.ScreenStateMonitor = {};

ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ScreenStateMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ScreenStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.ScreenStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ScreenStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ScreenStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.ScreenStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec,
      null,
      [state]);
  }

};

ash.camera_app.mojom.ScreenStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ScreenStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenStateMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.ScreenStateMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ScreenStateMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ScreenStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.ScreenStateMonitorPtr = ash.camera_app.mojom.ScreenStateMonitorRemote;
ash.camera_app.mojom.ScreenStateMonitorRequest = ash.camera_app.mojom.ScreenStateMonitorPendingReceiver;


// Interface: ScreenLockedMonitor
ash.camera_app.mojom.ScreenLockedMonitor = {};

ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ScreenLockedMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_screen_locked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ScreenLockedMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ScreenLockedMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.ScreenLockedMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_screen_locked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec,
      null,
      [is_screen_locked]);
  }

};

ash.camera_app.mojom.ScreenLockedMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ScreenLockedMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ScreenLockedMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.ScreenLockedMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ScreenLockedMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_screen_locked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.ScreenLockedMonitorPtr = ash.camera_app.mojom.ScreenLockedMonitorRemote;
ash.camera_app.mojom.ScreenLockedMonitorRequest = ash.camera_app.mojom.ScreenLockedMonitorPendingReceiver;


// Interface: ExternalScreenMonitor
ash.camera_app.mojom.ExternalScreenMonitor = {};

ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ExternalScreenMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'has_external_screen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.ExternalScreenMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.ExternalScreenMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.ExternalScreenMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(has_external_screen) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec,
      null,
      [has_external_screen]);
  }

};

ash.camera_app.mojom.ExternalScreenMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.ExternalScreenMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.ExternalScreenMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.ExternalScreenMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.ExternalScreenMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'has_external_screen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.ExternalScreenMonitorPtr = ash.camera_app.mojom.ExternalScreenMonitorRemote;
ash.camera_app.mojom.ExternalScreenMonitorRequest = ash.camera_app.mojom.ExternalScreenMonitorPendingReceiver;


// Interface: CameraUsageOwnershipMonitor
ash.camera_app.mojom.CameraUsageOwnershipMonitor = {};

ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraUsageOwnershipMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.CameraUsageOwnershipMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCameraUsageOwnershipChanged(has_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec,
      null,
      [has_usage]);
  }

};

ash.camera_app.mojom.CameraUsageOwnershipMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraUsageOwnershipMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for OnCameraUsageOwnershipChanged
ash.camera_app.mojom.CameraUsageOwnershipMonitor_OnCameraUsageOwnershipChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraUsageOwnershipMonitor.OnCameraUsageOwnershipChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'has_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.CameraUsageOwnershipMonitorPtr = ash.camera_app.mojom.CameraUsageOwnershipMonitorRemote;
ash.camera_app.mojom.CameraUsageOwnershipMonitorRequest = ash.camera_app.mojom.CameraUsageOwnershipMonitorPendingReceiver;


// Interface: LidStateMonitor
ash.camera_app.mojom.LidStateMonitor = {};

ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.LidStateMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'lid_status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LidStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.LidStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.LidStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.LidStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.LidStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.LidStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.LidStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(lid_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec,
      null,
      [lid_status]);
  }

};

ash.camera_app.mojom.LidStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.LidStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.LidStateMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.LidStateMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.LidStateMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'lid_status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LidStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.LidStateMonitorPtr = ash.camera_app.mojom.LidStateMonitorRemote;
ash.camera_app.mojom.LidStateMonitorRequest = ash.camera_app.mojom.LidStateMonitorPendingReceiver;


// Interface: SWPrivacySwitchMonitor
ash.camera_app.mojom.SWPrivacySwitchMonitor = {};

ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_sw_privacy_switch_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.SWPrivacySwitchMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.SWPrivacySwitchMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(is_sw_privacy_switch_on) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec,
      null,
      [is_sw_privacy_switch_on]);
  }

};

ash.camera_app.mojom.SWPrivacySwitchMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.SWPrivacySwitchMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.SWPrivacySwitchMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.SWPrivacySwitchMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.SWPrivacySwitchMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'is_sw_privacy_switch_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.SWPrivacySwitchMonitorPtr = ash.camera_app.mojom.SWPrivacySwitchMonitorRemote;
ash.camera_app.mojom.SWPrivacySwitchMonitorRequest = ash.camera_app.mojom.SWPrivacySwitchMonitorPendingReceiver;


// Interface: WindowStateMonitor
ash.camera_app.mojom.WindowStateMonitor = {};

ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_focus', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.WindowStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.WindowStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.WindowStateMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.WindowStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWindowStateChanged(states) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec,
      null,
      [states]);
  }

  onWindowFocusChanged(is_focus) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec,
      null,
      [is_focus]);
  }

};

ash.camera_app.mojom.WindowStateMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.WindowStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for OnWindowStateChanged
ash.camera_app.mojom.WindowStateMonitor_OnWindowStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateMonitor.OnWindowStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWindowFocusChanged
ash.camera_app.mojom.WindowStateMonitor_OnWindowFocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateMonitor.OnWindowFocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_focus', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.WindowStateMonitorPtr = ash.camera_app.mojom.WindowStateMonitorRemote;
ash.camera_app.mojom.WindowStateMonitorRequest = ash.camera_app.mojom.WindowStateMonitorPendingReceiver;


// Interface: StorageMonitor
ash.camera_app.mojom.StorageMonitor = {};

ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.StorageMonitor_Update_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.StorageMonitorStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.StorageMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.StorageMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.StorageMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.StorageMonitorPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.StorageMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.StorageMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec,
      null,
      [status]);
  }

};

ash.camera_app.mojom.StorageMonitor.getRemote = function() {
  let remote = new ash.camera_app.mojom.StorageMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.StorageMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
ash.camera_app.mojom.StorageMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.StorageMonitor.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.StorageMonitorStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.StorageMonitorPtr = ash.camera_app.mojom.StorageMonitorRemote;
ash.camera_app.mojom.StorageMonitorRequest = ash.camera_app.mojom.StorageMonitorPendingReceiver;


// Interface: WindowStateController
ash.camera_app.mojom.WindowStateController = {};

ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_AddMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_GetWindowState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_Minimize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_Restore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_Maximize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_Fullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController_Focus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.WindowStateControllerRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.WindowStateController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.WindowStateControllerPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.WindowStateControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.WindowStateControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addMonitor(monitor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec,
      [monitor]);
  }

  getWindowState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec,
      ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec,
      []);
  }

  minimize() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec,
      null,
      []);
  }

  restore() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec,
      null,
      []);
  }

  maximize() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec,
      null,
      []);
  }

  fullscreen() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec,
      null,
      []);
  }

  focus() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec,
      null,
      []);
  }

};

ash.camera_app.mojom.WindowStateController.getRemote = function() {
  let remote = new ash.camera_app.mojom.WindowStateControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.WindowStateController',
    'context');
  return remote.$;
};

// ParamsSpec for AddMonitor
ash.camera_app.mojom.WindowStateController_AddMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.AddMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_AddMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.AddMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWindowState
ash.camera_app.mojom.WindowStateController_GetWindowState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.GetWindowState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.WindowStateController_GetWindowState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.GetWindowState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.camera_app.mojom.WindowStateTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Minimize
ash.camera_app.mojom.WindowStateController_Minimize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.Minimize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Restore
ash.camera_app.mojom.WindowStateController_Restore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.Restore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Maximize
ash.camera_app.mojom.WindowStateController_Maximize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.Maximize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Fullscreen
ash.camera_app.mojom.WindowStateController_Fullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.Fullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Focus
ash.camera_app.mojom.WindowStateController_Focus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.WindowStateController.Focus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.WindowStateControllerPtr = ash.camera_app.mojom.WindowStateControllerRemote;
ash.camera_app.mojom.WindowStateControllerRequest = ash.camera_app.mojom.WindowStateControllerPendingReceiver;


// Interface: CameraAppHelper
ash.camera_app.mojom.CameraAppHelper = {};

ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_Params',
      packedSize: 24,
      fields: [
        { name: 'intent_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.CameraIntentActionSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_IsTabletMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.TabletModeMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ExternalScreenMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'placeholder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_Params',
      packedSize: 32,
      fields: [
        { name: 'file_type', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.FileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.CaptureDestinationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_Params',
      packedSize: 16,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_Params',
      packedSize: 32,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'corners', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointF, 4Spec, false), nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.RotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.StorageMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.WifiConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.LidStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.SWPrivacySwitchMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_GetEventsSender_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenLockedMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_Params',
      packedSize: 16,
      fields: [
        { name: 'pdf_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_PerformOcr_Params',
      packedSize: 24,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_Params',
      packedSize: 16,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_Params',
      packedSize: 16,
      fields: [
        { name: 'builder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.camera_app.mojom.PdfBuilderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.camera_app.mojom.CameraAppHelperRemote = class {
  static get $interfaceName() {
    return 'ash.camera_app.mojom.CameraAppHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.camera_app.mojom.CameraAppHelperPendingReceiver,
      handle);
    this.$ = new ash.camera_app.mojom.CameraAppHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.camera_app.mojom.CameraAppHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleCameraResult(intent_id, action, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec,
      [intent_id, action, data]);
  }

  isTabletMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec,
      []);
  }

  startPerfEventTrace(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec,
      null,
      [event]);
  }

  stopPerfEventTrace(event) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec,
      null,
      [event]);
  }

  setTabletMonitor(monitor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec,
      [monitor]);
  }

  setScreenStateMonitor(monitor) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec,
      [monitor]);
  }

  isMetricsAndCrashReportingEnabled() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec,
      []);
  }

  setExternalScreenMonitor(monitor) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec,
      [monitor]);
  }

  openFileInGallery(name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec,
      null,
      [name]);
  }

  openFeedbackDialog(placeholder) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec,
      null,
      [placeholder]);
  }

  openUrlInBrowser(url) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec,
      null,
      [url]);
  }

  getWindowStateController() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec,
      []);
  }

  processCapturedFile(file_type, destination) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec,
      [file_type, destination]);
  }

  monitorFileDeletion(name) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec,
      [name]);
  }

  isDocumentScannerSupported() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec,
      []);
  }

  checkDocumentModeReadiness() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec,
      []);
  }

  scanDocumentCorners(jpeg_data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec,
      [jpeg_data]);
  }

  convertToDocument(jpeg_data, corners, rotation) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec,
      [jpeg_data, corners, rotation]);
  }

  maybeTriggerSurvey() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec,
      null,
      []);
  }

  startStorageMonitor(monitor) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec,
      [monitor]);
  }

  stopStorageMonitor() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec,
      null,
      []);
  }

  openStorageManagement() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec,
      null,
      []);
  }

  openWifiDialog(config) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec,
      null,
      [config]);
  }

  setLidStateMonitor(monitor) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec,
      [monitor]);
  }

  setSWPrivacySwitchMonitor(monitor) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec,
      [monitor]);
  }

  getEventsSender() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec,
      []);
  }

  setScreenLockedMonitor(monitor) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec,
      [monitor]);
  }

  renderPdfAsJpeg(pdf_data) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec,
      [pdf_data]);
  }

  performOcr(jpeg_data) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec,
      [jpeg_data]);
  }

  performOcrInline(jpeg_data) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec,
      [jpeg_data]);
  }

  createPdfBuilder(builder) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec,
      null,
      [builder]);
  }

  getAspectRatioOrder() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec,
      ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec,
      []);
  }

};

ash.camera_app.mojom.CameraAppHelper.getRemote = function() {
  let remote = new ash.camera_app.mojom.CameraAppHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.camera_app.mojom.CameraAppHelper',
    'context');
  return remote.$;
};

// ParamsSpec for HandleCameraResult
ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.HandleCameraResult_Params',
      packedSize: 24,
      fields: [
        { name: 'intent_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.CameraIntentActionSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_HandleCameraResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.HandleCameraResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsTabletMode
ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsTabletMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartPerfEventTrace
ash.camera_app.mojom.CameraAppHelper_StartPerfEventTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.StartPerfEventTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopPerfEventTrace
ash.camera_app.mojom.CameraAppHelper_StopPerfEventTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.StopPerfEventTrace_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTabletMonitor
ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetTabletMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.TabletModeMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetTabletMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetTabletMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenStateMonitor
ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetScreenStateMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetScreenStateMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetScreenStateMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initial_state', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.ScreenStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsMetricsAndCrashReportingEnabled
ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsMetricsAndCrashReportingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsMetricsAndCrashReportingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsMetricsAndCrashReportingEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetExternalScreenMonitor
ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetExternalScreenMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ExternalScreenMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetExternalScreenMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetExternalScreenMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_external_screen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFileInGallery
ash.camera_app.mojom.CameraAppHelper_OpenFileInGallery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.OpenFileInGallery_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.camera_app.mojom.CameraAppHelper_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.OpenFeedbackDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'placeholder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenUrlInBrowser
ash.camera_app.mojom.CameraAppHelper_OpenUrlInBrowser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.OpenUrlInBrowser_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWindowStateController
ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetWindowStateController_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetWindowStateController_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetWindowStateController_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.WindowStateControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessCapturedFile
ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ProcessCapturedFile_Params',
      packedSize: 32,
      fields: [
        { name: 'file_type', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.FileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.CaptureDestinationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ProcessCapturedFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ProcessCapturedFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MonitorFileDeletion
ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.MonitorFileDeletion_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_MonitorFileDeletion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.MonitorFileDeletion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.FileMonitorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsDocumentScannerSupported
ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsDocumentScannerSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_IsDocumentScannerSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.IsDocumentScannerSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckDocumentModeReadiness
ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.CheckDocumentModeReadiness_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_CheckDocumentModeReadiness_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.CheckDocumentModeReadiness_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_loaded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScanDocumentCorners
ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ScanDocumentCorners_Params',
      packedSize: 16,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ScanDocumentCorners_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ScanDocumentCorners_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'corners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConvertToDocument
ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ConvertToDocument_Params',
      packedSize: 32,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'corners', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointF, 4Spec, false), nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.RotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_ConvertToDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.ConvertToDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'doc_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MaybeTriggerSurvey
ash.camera_app.mojom.CameraAppHelper_MaybeTriggerSurvey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.MaybeTriggerSurvey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartStorageMonitor
ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.StartStorageMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.StorageMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_StartStorageMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.StartStorageMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initial_status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.StorageMonitorStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopStorageMonitor
ash.camera_app.mojom.CameraAppHelper_StopStorageMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.StopStorageMonitor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenStorageManagement
ash.camera_app.mojom.CameraAppHelper_OpenStorageManagement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.OpenStorageManagement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenWifiDialog
ash.camera_app.mojom.CameraAppHelper_OpenWifiDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.OpenWifiDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.WifiConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLidStateMonitor
ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetLidStateMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.LidStateMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetLidStateMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetLidStateMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'lid_status', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.LidStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSWPrivacySwitchMonitor
ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetSWPrivacySwitchMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.SWPrivacySwitchMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetSWPrivacySwitchMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetSWPrivacySwitchMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_sw_privacy_switch_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetEventsSender
ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetEventsSender_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetEventsSender_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetEventsSender_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events_sender', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.EventsSenderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenLockedMonitor
ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetScreenLockedMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.camera_app.mojom.ScreenLockedMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_SetScreenLockedMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.SetScreenLockedMonitor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_screen_locked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenderPdfAsJpeg
ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.RenderPdfAsJpeg_Params',
      packedSize: 16,
      fields: [
        { name: 'pdf_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_RenderPdfAsJpeg_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.RenderPdfAsJpeg_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformOcr
ash.camera_app.mojom.CameraAppHelper_PerformOcr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.PerformOcr_Params',
      packedSize: 24,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_PerformOcr_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.PerformOcr_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ocr_result', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformOcrInline
ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.PerformOcrInline_Params',
      packedSize: 16,
      fields: [
        { name: 'jpeg_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_PerformOcrInline_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.PerformOcrInline_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ocr_result', packedOffset: 0, packedBitOffset: 0, type: ash.camera_app.mojom.OcrResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreatePdfBuilder
ash.camera_app.mojom.CameraAppHelper_CreatePdfBuilder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.CreatePdfBuilder_Params',
      packedSize: 16,
      fields: [
        { name: 'builder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.camera_app.mojom.PdfBuilderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAspectRatioOrder
ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetAspectRatioOrder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.camera_app.mojom.CameraAppHelper_GetAspectRatioOrder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.CameraAppHelper.GetAspectRatioOrder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'order', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.camera_app.mojom.AspectRatioSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.camera_app.mojom.CameraAppHelperPtr = ash.camera_app.mojom.CameraAppHelperRemote;
ash.camera_app.mojom.CameraAppHelperRequest = ash.camera_app.mojom.CameraAppHelperPendingReceiver;

