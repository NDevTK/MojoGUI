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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
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
        
        // Try Method 0: ToggleImeTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleImeTray (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TogglePaletteTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TogglePaletteTray (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ToggleLogoutTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleLogoutTray (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ToggleVirtualKeyboardTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleVirtualKeyboardTray (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ToggleDictationTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleDictationTray (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ToggleVideoConferenceTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleVideoConferenceTray (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ToggleAnnotationTray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleAnnotationTray (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetIsInUserChildSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsInUserChildSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: TriggerPrivacyIndicators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerPrivacyIndicators (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ResetHmrConsentStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetHmrConsentStatus (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetBatteryIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatteryIcon (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetBatteryPercent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatteryPercent (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleImeTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleImeTray');
          const result = this.impl.toggleImeTray(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_TogglePaletteTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.togglePaletteTray');
          const result = this.impl.togglePaletteTray(params.visible);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleLogoutTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleLogoutTray');
          const result = this.impl.toggleLogoutTray(params.visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleVirtualKeyboardTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleVirtualKeyboardTray');
          const result = this.impl.toggleVirtualKeyboardTray(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleDictationTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleDictationTray');
          const result = this.impl.toggleDictationTray(params.visible);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleVideoConferenceTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleVideoConferenceTray');
          const result = this.impl.toggleVideoConferenceTray(params.visible);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ToggleAnnotationTray_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleAnnotationTray');
          const result = this.impl.toggleAnnotationTray(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetIsInUserChildSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsInUserChildSession');
          const result = this.impl.setIsInUserChildSession(params.in_child_session);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_TriggerPrivacyIndicators_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerPrivacyIndicators');
          const result = this.impl.triggerPrivacyIndicators(params.app_id, params.app_name, params.is_camera_used, params.is_microphone_used);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_ResetHmrConsentStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetHmrConsentStatus');
          const result = this.impl.resetHmrConsentStatus();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetBatteryIcon_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBatteryIcon');
          const result = this.impl.setBatteryIcon(params.icon);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.status_area_internals.PageHandler_SetBatteryPercent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBatteryPercent');
          const result = this.impl.setBatteryPercent(params.percent);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.status_area_internals.PageHandlerReceiver = ash.mojom.status_area_internals.PageHandlerReceiver;

ash.mojom.status_area_internals.PageHandlerPtr = ash.mojom.status_area_internals.PageHandlerRemote;
ash.mojom.status_area_internals.PageHandlerRequest = ash.mojom.status_area_internals.PageHandlerPendingReceiver;

