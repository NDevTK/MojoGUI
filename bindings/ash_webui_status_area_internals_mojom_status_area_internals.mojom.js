// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/status_area_internals/mojom/status_area_internals.mojom
// Module: ash.mojom.status_area_internals

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  toggleImeTray(visible) {
    return this.$.toggleImeTray(visible);
  }
  togglePaletteTray(visible) {
    return this.$.togglePaletteTray(visible);
  }
  toggleLogoutTray(visible) {
    return this.$.toggleLogoutTray(visible);
  }
  toggleVirtualKeyboardTray(visible) {
    return this.$.toggleVirtualKeyboardTray(visible);
  }
  toggleDictationTray(visible) {
    return this.$.toggleDictationTray(visible);
  }
  toggleVideoConferenceTray(visible) {
    return this.$.toggleVideoConferenceTray(visible);
  }
  toggleAnnotationTray(visible) {
    return this.$.toggleAnnotationTray(visible);
  }
  setIsInUserChildSession(in_child_session) {
    return this.$.setIsInUserChildSession(in_child_session);
  }
  triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used) {
    return this.$.triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used);
  }
  resetHmrConsentStatus() {
    return this.$.resetHmrConsentStatus();
  }
  setBatteryIcon(icon) {
    return this.$.setBatteryIcon(icon);
  }
  setBatteryPercent(percent) {
    return this.$.setBatteryPercent(percent);
  }
};

ash.mojom.status_area_internals.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  toggleImeTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  togglePaletteTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleLogoutTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleVirtualKeyboardTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleDictationTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleVideoConferenceTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  toggleAnnotationTray(visible) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec,
      null,
      [visible],
      false);
  }

  setIsInUserChildSession(in_child_session) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec,
      null,
      [in_child_session],
      false);
  }

  triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec,
      null,
      [app_id, app_name, is_camera_used, is_microphone_used],
      false);
  }

  resetHmrConsentStatus() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec,
      null,
      [],
      false);
  }

  setBatteryIcon(icon) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec,
      null,
      [icon],
      false);
  }

  setBatteryPercent(percent) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleImeTray(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec.$.structSpec);
          const result = this.impl.togglePaletteTray(params.visible);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleLogoutTray(params.visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleVirtualKeyboardTray(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleDictationTray(params.visible);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleVideoConferenceTray(params.visible);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec.$.structSpec);
          const result = this.impl.toggleAnnotationTray(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec.$.structSpec);
          const result = this.impl.setIsInUserChildSession(params.in_child_session);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec.$.structSpec);
          const result = this.impl.triggerPrivacyIndicators(params.app_id, params.app_name, params.is_camera_used, params.is_microphone_used);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec.$.structSpec);
          const result = this.impl.resetHmrConsentStatus();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec.$.structSpec);
          const result = this.impl.setBatteryIcon(params.icon);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec.$.structSpec);
          const result = this.impl.setBatteryPercent(params.percent);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.mojom.status_area_internals.PageHandlerReceiver = ash.mojom.status_area_internals.PageHandlerReceiver;

ash.mojom.status_area_internals.PageHandlerPtr = ash.mojom.status_area_internals.PageHandlerRemote;
ash.mojom.status_area_internals.PageHandlerRequest = ash.mojom.status_area_internals.PageHandlerPendingReceiver;

