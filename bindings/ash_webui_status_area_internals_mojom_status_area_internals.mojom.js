// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/status_area_internals/mojom/status_area_internals.mojom
// Module: ash.mojom.status_area_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.status_area_internals = ash.mojom.status_area_internals || {};


// Enum: BatteryIcon
ash.mojom.status_area_internals.BatteryIcon = {
  kDefault: 0,
  kXIcon: 1,
  kUnreliableIcon: 2,
  kBoltIcon: 3,
  kBatterySaverPlusIcon: 4,
};
ash.mojom.status_area_internals.BatteryIconSpec = { $: mojo.internal.Enum() };

// Interface: PageHandler
ash.mojom.status_area_internals.PageHandler = {};

ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleImeTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_Params',
      packedSize: 16,
      fields: [
        { name: 'in_child_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_Params',
      packedSize: 32,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_camera_used', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_microphone_used', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_Params',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.status_area_internals.BatteryIconSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.status_area_internals.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.status_area_internals.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.status_area_internals.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.status_area_internals.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.status_area_internals.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.status_area_internals.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  toggleImeTray(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec,
      null,
      [visible]);
  }

  togglePaletteTray(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec,
      null,
      [visible]);
  }

  toggleLogoutTray(visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec,
      null,
      [visible]);
  }

  toggleVirtualKeyboardTray(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec,
      null,
      [visible]);
  }

  toggleDictationTray(visible) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec,
      null,
      [visible]);
  }

  toggleVideoConferenceTray(visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec,
      null,
      [visible]);
  }

  toggleAnnotationTray(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec,
      null,
      [visible]);
  }

  setIsInUserChildSession(in_child_session) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec,
      null,
      [in_child_session]);
  }

  triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec,
      null,
      [app_id, app_name, is_camera_used, is_microphone_used]);
  }

  resetHmrConsentStatus() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec,
      null,
      []);
  }

  setBatteryIcon(icon) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec,
      null,
      [icon]);
  }

  setBatteryPercent(percent) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec,
      null,
      [percent]);
  }

};

ash.mojom.status_area_internals.PageHandler.getRemote = function() {
  let remote = new ash.mojom.status_area_internals.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.status_area_internals.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ToggleImeTray
ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleImeTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TogglePaletteTray
ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.TogglePaletteTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleLogoutTray
ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleLogoutTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleVirtualKeyboardTray
ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleVirtualKeyboardTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleDictationTray
ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleDictationTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleVideoConferenceTray
ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleVideoConferenceTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleAnnotationTray
ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ToggleAnnotationTray_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsInUserChildSession
ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.SetIsInUserChildSession_Params',
      packedSize: 16,
      fields: [
        { name: 'in_child_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerPrivacyIndicators
ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.TriggerPrivacyIndicators_Params',
      packedSize: 32,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_camera_used', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_microphone_used', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResetHmrConsentStatus
ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.ResetHmrConsentStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetBatteryIcon
ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.SetBatteryIcon_Params',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.status_area_internals.BatteryIconSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBatteryPercent
ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.status_area_internals.PageHandler.SetBatteryPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.status_area_internals.PageHandlerPtr = ash.mojom.status_area_internals.PageHandlerRemote;
ash.mojom.status_area_internals.PageHandlerRequest = ash.mojom.status_area_internals.PageHandlerPendingReceiver;

