// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/status_area_internals/mojom/status_area_internals.mojom
// Module: ash.mojom.status_area_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.status_area_internals = ash.mojom.status_area_internals || {};

ash.mojom.status_area_internals.BatteryIconSpec = { $: mojo.internal.Enum() };
ash.mojom.status_area_internals.PageHandler = {};
ash.mojom.status_area_internals.PageHandler.$interfaceName = 'ash.mojom.status_area_internals.PageHandler';
ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec = { $: {} };
ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec = { $: {} };

// Enum: BatteryIcon
ash.mojom.status_area_internals.BatteryIcon = {
  kDefault: 0,
  kXIcon: 1,
  kUnreliableIcon: 2,
  kBoltIcon: 3,
  kBatterySaverPlusIcon: 4,
};

// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleImeTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_Params', [
      mojo.internal.StructField('in_child_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_camera_used', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_microphone_used', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_Params', [
      mojo.internal.StructField('icon', 0, 0, ash.mojom.status_area_internals.BatteryIconSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec, 'ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [visible],
      false);
  }

  togglePaletteTray(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleLogoutTray(visible) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleVirtualKeyboardTray(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleDictationTray(visible) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleVideoConferenceTray(visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleAnnotationTray(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  setIsInUserChildSession(in_child_session) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec,
      null,
      [in_child_session],
      false);
  }

  triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec,
      null,
      [app_id, app_name, is_camera_used, is_microphone_used],
      false);
  }

  resetHmrConsentStatus() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec,
      null,
      [],
      false);
  }

  setBatteryIcon(icon) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec,
      null,
      [icon],
      false);
  }

  setBatteryPercent(percent) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec,
      null,
      [percent],
      false);
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

ash.mojom.status_area_internals.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleImeTray(params.visible);
          break;
        }
        case 1: {
          const params = ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.togglePaletteTray(params.visible);
          break;
        }
        case 2: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleLogoutTray(params.visible);
          break;
        }
        case 3: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleVirtualKeyboardTray(params.visible);
          break;
        }
        case 4: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleDictationTray(params.visible);
          break;
        }
        case 5: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleVideoConferenceTray(params.visible);
          break;
        }
        case 6: {
          const params = ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleAnnotationTray(params.visible);
          break;
        }
        case 7: {
          const params = ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsInUserChildSession(params.in_child_session);
          break;
        }
        case 8: {
          const params = ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerPrivacyIndicators(params.app_id, params.app_name, params.is_camera_used, params.is_microphone_used);
          break;
        }
        case 9: {
          const params = ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetHmrConsentStatus();
          break;
        }
        case 10: {
          const params = ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBatteryIcon(params.icon);
          break;
        }
        case 11: {
          const params = ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBatteryPercent(params.percent);
          break;
        }
      }
    });
  }
};

ash.mojom.status_area_internals.PageHandlerReceiver = ash.mojom.status_area_internals.PageHandlerReceiver;

ash.mojom.status_area_internals.PageHandlerPtr = ash.mojom.status_area_internals.PageHandlerRemote;
ash.mojom.status_area_internals.PageHandlerRequest = ash.mojom.status_area_internals.PageHandlerPendingReceiver;

