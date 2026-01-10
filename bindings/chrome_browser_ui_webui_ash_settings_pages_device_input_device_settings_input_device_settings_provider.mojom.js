// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};
var ui = ui || {};

ash.settings.mojom.ActionTypeSpec = { $: {} };
ash.settings.mojom.ActionChoiceSpec = { $: {} };
ash.settings.mojom.KeyboardSettingsObserver = {};
ash.settings.mojom.KeyboardSettingsObserver.$interfaceName = 'ash.settings.mojom.KeyboardSettingsObserver';
ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.TouchpadSettingsObserver = {};
ash.settings.mojom.TouchpadSettingsObserver.$interfaceName = 'ash.settings.mojom.TouchpadSettingsObserver';
ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.PointingStickSettingsObserver = {};
ash.settings.mojom.PointingStickSettingsObserver.$interfaceName = 'ash.settings.mojom.PointingStickSettingsObserver';
ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.MouseSettingsObserver = {};
ash.settings.mojom.MouseSettingsObserver.$interfaceName = 'ash.settings.mojom.MouseSettingsObserver';
ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.ButtonPressObserver = {};
ash.settings.mojom.ButtonPressObserver.$interfaceName = 'ash.settings.mojom.ButtonPressObserver';
ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec = { $: {} };
ash.settings.mojom.GraphicsTabletSettingsObserver = {};
ash.settings.mojom.GraphicsTabletSettingsObserver.$interfaceName = 'ash.settings.mojom.GraphicsTabletSettingsObserver';
ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec = { $: {} };
ash.settings.mojom.KeyboardBrightnessObserver = {};
ash.settings.mojom.KeyboardBrightnessObserver.$interfaceName = 'ash.settings.mojom.KeyboardBrightnessObserver';
ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec = { $: {} };
ash.settings.mojom.KeyboardAmbientLightSensorObserver = {};
ash.settings.mojom.KeyboardAmbientLightSensorObserver.$interfaceName = 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec = { $: {} };
ash.settings.mojom.LidStateObserver = {};
ash.settings.mojom.LidStateObserver.$interfaceName = 'ash.settings.mojom.LidStateObserver';
ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider = {};
ash.settings.mojom.InputDeviceSettingsProvider.$interfaceName = 'ash.settings.mojom.InputDeviceSettingsProvider';
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec = { $: {} };
ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec = { $: {} };

// Union: ActionType
mojo.internal.Union(
    ash.settings.mojom.ActionTypeSpec, 'ash.settings.mojom.ActionType', {
      'accelerator_action': {
        'ordinal': 0,
        'type': ash.mojom.AcceleratorActionSpec.$,
        'nullable': false,
      },
      'static_shortcut_action': {
        'ordinal': 1,
        'type': ash.mojom.StaticShortcutActionSpec.$,
        'nullable': false,
      },
    });

// Struct: ActionChoice
mojo.internal.Struct(
    ash.settings.mojom.ActionChoiceSpec, 'ash.settings.mojom.ActionChoice', [
      mojo.internal.StructField('action_type', 0, 0, ash.settings.mojom.ActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeyboardSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec, 'ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_Params', [
      mojo.internal.StructField('keyboards', 0, 0, mojo.internal.Array(ash.mojom.KeyboardSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec, 'ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_Params', [
      mojo.internal.StructField('policies', 0, 0, ash.mojom.KeyboardPoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.KeyboardSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.KeyboardSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.KeyboardSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.KeyboardSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.KeyboardSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardListUpdated(keyboards) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec,
      null,
      [keyboards],
      false);
  }

  onKeyboardPoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec,
      null,
      [policies],
      false);
  }

};

ash.settings.mojom.KeyboardSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.KeyboardSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.KeyboardSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnKeyboardListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnKeyboardPoliciesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardPoliciesUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardListUpdated');
          const result = this.impl.onKeyboardListUpdated(params.keyboards);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardPoliciesUpdated');
          const result = this.impl.onKeyboardPoliciesUpdated(params.policies);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.KeyboardSettingsObserverReceiver = ash.settings.mojom.KeyboardSettingsObserverReceiver;

ash.settings.mojom.KeyboardSettingsObserverPtr = ash.settings.mojom.KeyboardSettingsObserverRemote;
ash.settings.mojom.KeyboardSettingsObserverRequest = ash.settings.mojom.KeyboardSettingsObserverPendingReceiver;


// Interface: TouchpadSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec, 'ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_Params', [
      mojo.internal.StructField('touchpads', 0, 0, mojo.internal.Array(ash.mojom.TouchpadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.TouchpadSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.TouchpadSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TouchpadSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.TouchpadSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.TouchpadSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.TouchpadSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTouchpadListUpdated(touchpads) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec,
      null,
      [touchpads],
      false);
  }

};

ash.settings.mojom.TouchpadSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.TouchpadSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TouchpadSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.TouchpadSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTouchpadListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTouchpadListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTouchpadListUpdated');
          const result = this.impl.onTouchpadListUpdated(params.touchpads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.TouchpadSettingsObserverReceiver = ash.settings.mojom.TouchpadSettingsObserverReceiver;

ash.settings.mojom.TouchpadSettingsObserverPtr = ash.settings.mojom.TouchpadSettingsObserverRemote;
ash.settings.mojom.TouchpadSettingsObserverRequest = ash.settings.mojom.TouchpadSettingsObserverPendingReceiver;


// Interface: PointingStickSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec, 'ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_Params', [
      mojo.internal.StructField('pointSticks', 0, 0, mojo.internal.Array(ash.mojom.PointingStickSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.PointingStickSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.PointingStickSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.PointingStickSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.PointingStickSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.PointingStickSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.PointingStickSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPointingStickListUpdated(pointSticks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec,
      null,
      [pointSticks],
      false);
  }

};

ash.settings.mojom.PointingStickSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.PointingStickSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.PointingStickSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.PointingStickSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPointingStickListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPointingStickListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPointingStickListUpdated');
          const result = this.impl.onPointingStickListUpdated(params.pointSticks);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.PointingStickSettingsObserverReceiver = ash.settings.mojom.PointingStickSettingsObserverReceiver;

ash.settings.mojom.PointingStickSettingsObserverPtr = ash.settings.mojom.PointingStickSettingsObserverRemote;
ash.settings.mojom.PointingStickSettingsObserverRequest = ash.settings.mojom.PointingStickSettingsObserverPendingReceiver;


// Interface: MouseSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec, 'ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_Params', [
      mojo.internal.StructField('mice', 0, 0, mojo.internal.Array(ash.mojom.MouseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec, 'ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_Params', [
      mojo.internal.StructField('policies', 0, 0, ash.mojom.MousePoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.MouseSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.MouseSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.MouseSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.MouseSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.MouseSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.MouseSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMouseListUpdated(mice) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec,
      null,
      [mice],
      false);
  }

  onMousePoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec,
      null,
      [policies],
      false);
  }

};

ash.settings.mojom.MouseSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.MouseSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.MouseSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.MouseSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMouseListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMousePoliciesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMousePoliciesUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMouseListUpdated');
          const result = this.impl.onMouseListUpdated(params.mice);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMousePoliciesUpdated');
          const result = this.impl.onMousePoliciesUpdated(params.policies);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.MouseSettingsObserverReceiver = ash.settings.mojom.MouseSettingsObserverReceiver;

ash.settings.mojom.MouseSettingsObserverPtr = ash.settings.mojom.MouseSettingsObserverRemote;
ash.settings.mojom.MouseSettingsObserverRequest = ash.settings.mojom.MouseSettingsObserverPendingReceiver;


// Interface: ButtonPressObserver
mojo.internal.Struct(
    ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec, 'ash.settings.mojom.ButtonPressObserver_OnButtonPressed_Params', [
      mojo.internal.StructField('button', 0, 0, ash.mojom.ButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.ButtonPressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.ButtonPressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.ButtonPressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.ButtonPressObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.ButtonPressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.ButtonPressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onButtonPressed(button) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec,
      null,
      [button],
      false);
  }

};

ash.settings.mojom.ButtonPressObserver.getRemote = function() {
  let remote = new ash.settings.mojom.ButtonPressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.ButtonPressObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.ButtonPressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnButtonPressed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnButtonPressed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onButtonPressed');
          const result = this.impl.onButtonPressed(params.button);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.ButtonPressObserverReceiver = ash.settings.mojom.ButtonPressObserverReceiver;

ash.settings.mojom.ButtonPressObserverPtr = ash.settings.mojom.ButtonPressObserverRemote;
ash.settings.mojom.ButtonPressObserverRequest = ash.settings.mojom.ButtonPressObserverPendingReceiver;


// Interface: GraphicsTabletSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec, 'ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_Params', [
      mojo.internal.StructField('graphics_tablets', 0, 0, mojo.internal.Array(ash.mojom.GraphicsTabletSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.GraphicsTabletSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.GraphicsTabletSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.GraphicsTabletSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.GraphicsTabletSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGraphicsTabletListUpdated(graphics_tablets) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec,
      null,
      [graphics_tablets],
      false);
  }

};

ash.settings.mojom.GraphicsTabletSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.GraphicsTabletSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.GraphicsTabletSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.GraphicsTabletSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnGraphicsTabletListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGraphicsTabletListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGraphicsTabletListUpdated');
          const result = this.impl.onGraphicsTabletListUpdated(params.graphics_tablets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.GraphicsTabletSettingsObserverReceiver = ash.settings.mojom.GraphicsTabletSettingsObserverReceiver;

ash.settings.mojom.GraphicsTabletSettingsObserverPtr = ash.settings.mojom.GraphicsTabletSettingsObserverRemote;
ash.settings.mojom.GraphicsTabletSettingsObserverRequest = ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver;


// Interface: KeyboardBrightnessObserver
mojo.internal.Struct(
    ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec, 'ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_Params', [
      mojo.internal.StructField('brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.KeyboardBrightnessObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardBrightnessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.KeyboardBrightnessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.KeyboardBrightnessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardBrightnessChanged(brightness_percent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec,
      null,
      [brightness_percent],
      false);
  }

};

ash.settings.mojom.KeyboardBrightnessObserver.getRemote = function() {
  let remote = new ash.settings.mojom.KeyboardBrightnessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardBrightnessObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.KeyboardBrightnessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnKeyboardBrightnessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardBrightnessChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardBrightnessChanged');
          const result = this.impl.onKeyboardBrightnessChanged(params.brightness_percent);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.KeyboardBrightnessObserverReceiver = ash.settings.mojom.KeyboardBrightnessObserverReceiver;

ash.settings.mojom.KeyboardBrightnessObserverPtr = ash.settings.mojom.KeyboardBrightnessObserverRemote;
ash.settings.mojom.KeyboardBrightnessObserverRequest = ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver;


// Interface: KeyboardAmbientLightSensorObserver
mojo.internal.Struct(
    ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec, 'ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_Params', [
      mojo.internal.StructField('keyboard_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [keyboard_ambient_light_sensor_enabled],
      false);
  }

};

ash.settings.mojom.KeyboardAmbientLightSensorObserver.getRemote = function() {
  let remote = new ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardAmbientLightSensorObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnKeyboardAmbientLightSensorEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardAmbientLightSensorEnabledChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardAmbientLightSensorEnabledChanged');
          const result = this.impl.onKeyboardAmbientLightSensorEnabledChanged(params.keyboard_ambient_light_sensor_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver = ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver;

ash.settings.mojom.KeyboardAmbientLightSensorObserverPtr = ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote;
ash.settings.mojom.KeyboardAmbientLightSensorObserverRequest = ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver;


// Interface: LidStateObserver
mojo.internal.Struct(
    ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec, 'ash.settings.mojom.LidStateObserver_OnLidStateChanged_Params', [
      mojo.internal.StructField('is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.LidStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.LidStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.LidStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.LidStateObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.LidStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(is_lid_open) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec,
      null,
      [is_lid_open],
      false);
  }

};

ash.settings.mojom.LidStateObserver.getRemote = function() {
  let remote = new ash.settings.mojom.LidStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.LidStateObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.LidStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnLidStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLidStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLidStateChanged');
          const result = this.impl.onLidStateChanged(params.is_lid_open);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.LidStateObserverReceiver = ash.settings.mojom.LidStateObserverReceiver;

ash.settings.mojom.LidStateObserverPtr = ash.settings.mojom.LidStateObserverRemote;
ash.settings.mojom.LidStateObserverRequest = ash.settings.mojom.LidStateObserverPendingReceiver;


// Interface: InputDeviceSettingsProvider
mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.TouchpadSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.PointingStickSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.MouseSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.GraphicsTabletSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.ButtonPressObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardBrightnessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardAmbientLightSensorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.LidStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParams', [
      mojo.internal.StructField('is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.mojom.KeyboardSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.mojom.PointingStickSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.mojom.MouseSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.mojom.TouchpadSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.mojom.GraphicsTabletSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParams', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.settings.mojom.ActionChoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParams', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.settings.mojom.ActionChoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('meta_key', 0, 0, ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParams', [
      mojo.internal.StructField('has_keyboard_backlight', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('has_ambient_light_sensor', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParams', [
      mojo.internal.StructField('is_rgb_keyboard_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_Params', [
      mojo.internal.StructField('device_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParams', [
      mojo.internal.StructField('data_url', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_Params', [
      mojo.internal.StructField('package_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.InputDeviceSettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.InputDeviceSettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.InputDeviceSettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.InputDeviceSettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeKeyboardSettings(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeTouchpadSettings(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observePointingStickSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeMouseSettings(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeGraphicsTabletSettings(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeButtonPresses(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeKeyboardBrightness(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeKeyboardAmbientLightSensor(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeLidState(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec,
      [observer],
      false);
  }

  restoreDefaultKeyboardRemappings(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec,
      null,
      [device_id],
      false);
  }

  setKeyboardSettings(device_id, settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setPointingStickSettings(device_id, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setMouseSettings(device_id, settings) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setTouchpadSettings(device_id, settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setGraphicsTabletSettings(device_id, settings) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setKeyboardBrightness(percent) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec,
      null,
      [percent],
      false);
  }

  setKeyboardAmbientLightSensorEnabled(enabled) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  startObserving(device_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec,
      null,
      [device_id],
      false);
  }

  stopObserving() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec,
      null,
      [],
      false);
  }

  getActionsForMouseButtonCustomization() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getActionsForGraphicsTabletButtonCustomization() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  hasKeyboardBacklight() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec,
      [],
      false);
  }

  hasAmbientLightSensor() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

  isRgbKeyboardSupported() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec,
      [],
      false);
  }

  recordKeyboardColorLinkClicked() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  recordKeyboardBrightnessChangeFromSlider(percent) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec,
      null,
      [percent],
      false);
  }

  getDeviceIconImage(device_key) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec,
      [device_key],
      false);
  }

  launchCompanionApp(package_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec,
      null,
      [package_id],
      false);
  }

};

ash.settings.mojom.InputDeviceSettingsProvider.getRemote = function() {
  let remote = new ash.settings.mojom.InputDeviceSettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.InputDeviceSettingsProvider',
    'context');
  return remote.$;
};

ash.settings.mojom.InputDeviceSettingsProviderReceiver = class {
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
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ObserveKeyboardSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveTouchpadSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveTouchpadSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObservePointingStickSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObservePointingStickSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ObserveMouseSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveMouseSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObserveGraphicsTabletSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveGraphicsTabletSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ObserveButtonPresses
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveButtonPresses (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ObserveKeyboardBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardBrightness (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ObserveKeyboardAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardAmbientLightSensor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ObserveLidState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveLidState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RestoreDefaultKeyboardRemappings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreDefaultKeyboardRemappings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetKeyboardSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardSettings (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetPointingStickSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPointingStickSettings (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetMouseSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMouseSettings (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetTouchpadSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTouchpadSettings (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetGraphicsTabletSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGraphicsTabletSettings (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetKeyboardBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardBrightness (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetKeyboardAmbientLightSensorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardAmbientLightSensorEnabled (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: StartObserving
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartObserving (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: StopObserving
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopObserving (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetActionsForMouseButtonCustomization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActionsForMouseButtonCustomization (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetActionsForGraphicsTabletButtonCustomization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActionsForGraphicsTabletButtonCustomization (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetMetaKeyToDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMetaKeyToDisplay (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: HasKeyboardBacklight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasKeyboardBacklight (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: HasAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasAmbientLightSensor (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: IsRgbKeyboardSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRgbKeyboardSupported (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RecordKeyboardColorLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordKeyboardColorLinkClicked (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RecordKeyboardBrightnessChangeFromSlider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordKeyboardBrightnessChangeFromSlider (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetDeviceIconImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceIconImage (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: LaunchCompanionApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchCompanionApp (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardSettings');
          const result = this.impl.observeKeyboardSettings(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeTouchpadSettings');
          const result = this.impl.observeTouchpadSettings(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observePointingStickSettings');
          const result = this.impl.observePointingStickSettings(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeMouseSettings');
          const result = this.impl.observeMouseSettings(params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeGraphicsTabletSettings');
          const result = this.impl.observeGraphicsTabletSettings(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeButtonPresses');
          const result = this.impl.observeButtonPresses(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardBrightness');
          const result = this.impl.observeKeyboardBrightness(params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardAmbientLightSensor');
          const result = this.impl.observeKeyboardAmbientLightSensor(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeLidState');
          const result = this.impl.observeLidState(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreDefaultKeyboardRemappings');
          const result = this.impl.restoreDefaultKeyboardRemappings(params.device_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardSettings');
          const result = this.impl.setKeyboardSettings(params.device_id, params.settings);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPointingStickSettings');
          const result = this.impl.setPointingStickSettings(params.device_id, params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMouseSettings');
          const result = this.impl.setMouseSettings(params.device_id, params.settings);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTouchpadSettings');
          const result = this.impl.setTouchpadSettings(params.device_id, params.settings);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setGraphicsTabletSettings');
          const result = this.impl.setGraphicsTabletSettings(params.device_id, params.settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardBrightness');
          const result = this.impl.setKeyboardBrightness(params.percent);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardAmbientLightSensorEnabled');
          const result = this.impl.setKeyboardAmbientLightSensorEnabled(params.enabled);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startObserving');
          const result = this.impl.startObserving(params.device_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopObserving');
          const result = this.impl.stopObserving();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getActionsForMouseButtonCustomization');
          const result = this.impl.getActionsForMouseButtonCustomization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getActionsForGraphicsTabletButtonCustomization');
          const result = this.impl.getActionsForGraphicsTabletButtonCustomization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMetaKeyToDisplay');
          const result = this.impl.getMetaKeyToDisplay();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasKeyboardBacklight');
          const result = this.impl.hasKeyboardBacklight();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasAmbientLightSensor');
          const result = this.impl.hasAmbientLightSensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isRgbKeyboardSupported');
          const result = this.impl.isRgbKeyboardSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordKeyboardColorLinkClicked');
          const result = this.impl.recordKeyboardColorLinkClicked();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordKeyboardBrightnessChangeFromSlider');
          const result = this.impl.recordKeyboardBrightnessChangeFromSlider(params.percent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceIconImage');
          const result = this.impl.getDeviceIconImage(params.device_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchCompanionApp');
          const result = this.impl.launchCompanionApp(params.package_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.InputDeviceSettingsProviderReceiver = ash.settings.mojom.InputDeviceSettingsProviderReceiver;

ash.settings.mojom.InputDeviceSettingsProviderPtr = ash.settings.mojom.InputDeviceSettingsProviderRemote;
ash.settings.mojom.InputDeviceSettingsProviderRequest = ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver;

