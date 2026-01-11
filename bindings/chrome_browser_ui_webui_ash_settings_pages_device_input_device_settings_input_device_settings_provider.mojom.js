// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onKeyboardListUpdated(keyboards) {
    return this.$.onKeyboardListUpdated(keyboards);
  }
  onKeyboardPoliciesUpdated(policies) {
    return this.$.onKeyboardPoliciesUpdated(policies);
  }
};

ash.settings.mojom.KeyboardSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardSettingsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onKeyboardListUpdated(keyboards) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec,
      null,
      [keyboards],
      false);
  }

  onKeyboardPoliciesUpdated(policies) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardListUpdated(params.keyboards);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardPoliciesUpdated(params.policies);
          break;
        }
      }
      } catch (err) {}
    });
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
  onTouchpadListUpdated(touchpads) {
    return this.$.onTouchpadListUpdated(touchpads);
  }
};

ash.settings.mojom.TouchpadSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TouchpadSettingsObserver', [
      { explicit: null },
    ]);
  }

  onTouchpadListUpdated(touchpads) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('TouchpadSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onTouchpadListUpdated(params.touchpads);
          break;
        }
      }
      } catch (err) {}
    });
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
  onPointingStickListUpdated(pointSticks) {
    return this.$.onPointingStickListUpdated(pointSticks);
  }
};

ash.settings.mojom.PointingStickSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PointingStickSettingsObserver', [
      { explicit: null },
    ]);
  }

  onPointingStickListUpdated(pointSticks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PointingStickSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onPointingStickListUpdated(params.pointSticks);
          break;
        }
      }
      } catch (err) {}
    });
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
  onMouseListUpdated(mice) {
    return this.$.onMouseListUpdated(mice);
  }
  onMousePoliciesUpdated(policies) {
    return this.$.onMousePoliciesUpdated(policies);
  }
};

ash.settings.mojom.MouseSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MouseSettingsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMouseListUpdated(mice) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec,
      null,
      [mice],
      false);
  }

  onMousePoliciesUpdated(policies) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MouseSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseListUpdated(params.mice);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onMousePoliciesUpdated(params.policies);
          break;
        }
      }
      } catch (err) {}
    });
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
  onButtonPressed(button) {
    return this.$.onButtonPressed(button);
  }
};

ash.settings.mojom.ButtonPressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ButtonPressObserver', [
      { explicit: null },
    ]);
  }

  onButtonPressed(button) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ButtonPressObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec.$.structSpec);
          const result = this.impl.onButtonPressed(params.button);
          break;
        }
      }
      } catch (err) {}
    });
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
  onGraphicsTabletListUpdated(graphics_tablets) {
    return this.$.onGraphicsTabletListUpdated(graphics_tablets);
  }
};

ash.settings.mojom.GraphicsTabletSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphicsTabletSettingsObserver', [
      { explicit: null },
    ]);
  }

  onGraphicsTabletListUpdated(graphics_tablets) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GraphicsTabletSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onGraphicsTabletListUpdated(params.graphics_tablets);
          break;
        }
      }
      } catch (err) {}
    });
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
  onKeyboardBrightnessChanged(brightness_percent) {
    return this.$.onKeyboardBrightnessChanged(brightness_percent);
  }
};

ash.settings.mojom.KeyboardBrightnessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardBrightnessObserver', [
      { explicit: null },
    ]);
  }

  onKeyboardBrightnessChanged(brightness_percent) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardBrightnessObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardBrightnessChanged(params.brightness_percent);
          break;
        }
      }
      } catch (err) {}
    });
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
  onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled) {
    return this.$.onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled);
  }
};

ash.settings.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardAmbientLightSensorObserver', [
      { explicit: null },
    ]);
  }

  onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardAmbientLightSensorObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardAmbientLightSensorEnabledChanged(params.keyboard_ambient_light_sensor_enabled);
          break;
        }
      }
      } catch (err) {}
    });
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
  onLidStateChanged(is_lid_open) {
    return this.$.onLidStateChanged(is_lid_open);
  }
};

ash.settings.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LidStateObserver', [
      { explicit: null },
    ]);
  }

  onLidStateChanged(is_lid_open) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('LidStateObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onLidStateChanged(params.is_lid_open);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.settings.mojom.LidStateObserverReceiver = ash.settings.mojom.LidStateObserverReceiver;

ash.settings.mojom.LidStateObserverPtr = ash.settings.mojom.LidStateObserverRemote;
ash.settings.mojom.LidStateObserverRequest = ash.settings.mojom.LidStateObserverPendingReceiver;


// Interface: InputDeviceSettingsProvider
mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.TouchpadSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.PointingStickSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.MouseSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.GraphicsTabletSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.ButtonPressObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardBrightnessObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.LidStateObserverRemote), null, false, 0, undefined),
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
  observeKeyboardSettings(observer) {
    return this.$.observeKeyboardSettings(observer);
  }
  observeTouchpadSettings(observer) {
    return this.$.observeTouchpadSettings(observer);
  }
  observePointingStickSettings(observer) {
    return this.$.observePointingStickSettings(observer);
  }
  observeMouseSettings(observer) {
    return this.$.observeMouseSettings(observer);
  }
  observeGraphicsTabletSettings(observer) {
    return this.$.observeGraphicsTabletSettings(observer);
  }
  observeButtonPresses(observer) {
    return this.$.observeButtonPresses(observer);
  }
  observeKeyboardBrightness(observer) {
    return this.$.observeKeyboardBrightness(observer);
  }
  observeKeyboardAmbientLightSensor(observer) {
    return this.$.observeKeyboardAmbientLightSensor(observer);
  }
  observeLidState(observer) {
    return this.$.observeLidState(observer);
  }
  restoreDefaultKeyboardRemappings(device_id) {
    return this.$.restoreDefaultKeyboardRemappings(device_id);
  }
  setKeyboardSettings(device_id, settings) {
    return this.$.setKeyboardSettings(device_id, settings);
  }
  setPointingStickSettings(device_id, settings) {
    return this.$.setPointingStickSettings(device_id, settings);
  }
  setMouseSettings(device_id, settings) {
    return this.$.setMouseSettings(device_id, settings);
  }
  setTouchpadSettings(device_id, settings) {
    return this.$.setTouchpadSettings(device_id, settings);
  }
  setGraphicsTabletSettings(device_id, settings) {
    return this.$.setGraphicsTabletSettings(device_id, settings);
  }
  setKeyboardBrightness(percent) {
    return this.$.setKeyboardBrightness(percent);
  }
  setKeyboardAmbientLightSensorEnabled(enabled) {
    return this.$.setKeyboardAmbientLightSensorEnabled(enabled);
  }
  startObserving(device_id) {
    return this.$.startObserving(device_id);
  }
  stopObserving() {
    return this.$.stopObserving();
  }
  getActionsForMouseButtonCustomization() {
    return this.$.getActionsForMouseButtonCustomization();
  }
  getActionsForGraphicsTabletButtonCustomization() {
    return this.$.getActionsForGraphicsTabletButtonCustomization();
  }
  getMetaKeyToDisplay() {
    return this.$.getMetaKeyToDisplay();
  }
  hasKeyboardBacklight() {
    return this.$.hasKeyboardBacklight();
  }
  hasAmbientLightSensor() {
    return this.$.hasAmbientLightSensor();
  }
  isRgbKeyboardSupported() {
    return this.$.isRgbKeyboardSupported();
  }
  recordKeyboardColorLinkClicked() {
    return this.$.recordKeyboardColorLinkClicked();
  }
  recordKeyboardBrightnessChangeFromSlider(percent) {
    return this.$.recordKeyboardBrightnessChangeFromSlider(percent);
  }
  getDeviceIconImage(device_key) {
    return this.$.getDeviceIconImage(device_key);
  }
  launchCompanionApp(package_id) {
    return this.$.launchCompanionApp(package_id);
  }
};

ash.settings.mojom.InputDeviceSettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputDeviceSettingsProvider', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  observeKeyboardSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeTouchpadSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observePointingStickSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeMouseSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeGraphicsTabletSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeButtonPresses(observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeKeyboardBrightness(observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeKeyboardAmbientLightSensor(observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeLidState(observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec,
      [observer],
      false);
  }

  restoreDefaultKeyboardRemappings(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec,
      null,
      [device_id],
      false);
  }

  setKeyboardSettings(device_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setPointingStickSettings(device_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setMouseSettings(device_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setTouchpadSettings(device_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setGraphicsTabletSettings(device_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec,
      null,
      [device_id, settings],
      false);
  }

  setKeyboardBrightness(percent) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec,
      null,
      [percent],
      false);
  }

  setKeyboardAmbientLightSensorEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  startObserving(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec,
      null,
      [device_id],
      false);
  }

  stopObserving() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec,
      null,
      [],
      false);
  }

  getActionsForMouseButtonCustomization() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getActionsForGraphicsTabletButtonCustomization() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  hasKeyboardBacklight() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec,
      [],
      false);
  }

  hasAmbientLightSensor() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

  isRgbKeyboardSupported() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec,
      [],
      false);
  }

  recordKeyboardColorLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  recordKeyboardBrightnessChangeFromSlider(percent) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec,
      null,
      [percent],
      false);
  }

  getDeviceIconImage(device_key) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec,
      [device_key],
      false);
  }

  launchCompanionApp(package_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('InputDeviceSettingsProvider', [
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
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec.$.structSpec);
          const result = this.impl.observeKeyboardSettings(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec.$.structSpec);
          const result = this.impl.observeTouchpadSettings(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec.$.structSpec);
          const result = this.impl.observePointingStickSettings(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec.$.structSpec);
          const result = this.impl.observeMouseSettings(params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec.$.structSpec);
          const result = this.impl.observeGraphicsTabletSettings(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec.$.structSpec);
          const result = this.impl.observeButtonPresses(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec.$.structSpec);
          const result = this.impl.observeKeyboardBrightness(params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec.$.structSpec);
          const result = this.impl.observeKeyboardAmbientLightSensor(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec.$.structSpec);
          const result = this.impl.restoreDefaultKeyboardRemappings(params.device_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setKeyboardSettings(params.device_id, params.settings);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setPointingStickSettings(params.device_id, params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setMouseSettings(params.device_id, params.settings);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setTouchpadSettings(params.device_id, params.settings);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec.$.structSpec);
          const result = this.impl.setGraphicsTabletSettings(params.device_id, params.settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec.$.structSpec);
          const result = this.impl.setKeyboardBrightness(params.percent);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setKeyboardAmbientLightSensorEnabled(params.enabled);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec.$.structSpec);
          const result = this.impl.startObserving(params.device_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec.$.structSpec);
          const result = this.impl.stopObserving();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec.$.structSpec);
          const result = this.impl.recordKeyboardColorLinkClicked();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec.$.structSpec);
          const result = this.impl.recordKeyboardBrightnessChangeFromSlider(params.percent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec.$.structSpec);
          const result = this.impl.launchCompanionApp(params.package_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.settings.mojom.InputDeviceSettingsProviderReceiver = ash.settings.mojom.InputDeviceSettingsProviderReceiver;

ash.settings.mojom.InputDeviceSettingsProviderPtr = ash.settings.mojom.InputDeviceSettingsProviderRemote;
ash.settings.mojom.InputDeviceSettingsProviderRequest = ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver;

