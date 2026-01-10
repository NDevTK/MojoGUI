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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardListUpdated(params.keyboards);
          break;
        }
        case 1: {
          const params = ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardPoliciesUpdated(params.policies);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTouchpadListUpdated(params.touchpads);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPointingStickListUpdated(params.pointSticks);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMouseListUpdated(params.mice);
          break;
        }
        case 1: {
          const params = ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMousePoliciesUpdated(params.policies);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onButtonPressed(params.button);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGraphicsTabletListUpdated(params.graphics_tablets);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardBrightnessChanged(params.brightness_percent);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardAmbientLightSensorEnabledChanged(params.keyboard_ambient_light_sensor_enabled);
          break;
        }
      }
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLidStateChanged(params.is_lid_open);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeKeyboardSettings(params.observer);
          break;
        }
        case 1: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeTouchpadSettings(params.observer);
          break;
        }
        case 2: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observePointingStickSettings(params.observer);
          break;
        }
        case 3: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeMouseSettings(params.observer);
          break;
        }
        case 4: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeGraphicsTabletSettings(params.observer);
          break;
        }
        case 5: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeButtonPresses(params.observer);
          break;
        }
        case 6: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeKeyboardBrightness(params.observer);
          break;
        }
        case 7: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeKeyboardAmbientLightSensor(params.observer);
          break;
        }
        case 8: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeLidState(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreDefaultKeyboardRemappings(params.device_id);
          break;
        }
        case 10: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeyboardSettings(params.device_id, params.settings);
          break;
        }
        case 11: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPointingStickSettings(params.device_id, params.settings);
          break;
        }
        case 12: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMouseSettings(params.device_id, params.settings);
          break;
        }
        case 13: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTouchpadSettings(params.device_id, params.settings);
          break;
        }
        case 14: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setGraphicsTabletSettings(params.device_id, params.settings);
          break;
        }
        case 15: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeyboardBrightness(params.percent);
          break;
        }
        case 16: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setKeyboardAmbientLightSensorEnabled(params.enabled);
          break;
        }
        case 17: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startObserving(params.device_id);
          break;
        }
        case 18: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopObserving();
          break;
        }
        case 19: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getActionsForMouseButtonCustomization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 20: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getActionsForGraphicsTabletButtonCustomization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 21: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMetaKeyToDisplay();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 22: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasKeyboardBacklight();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 23: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasAmbientLightSensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 24: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isRgbKeyboardSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 25: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordKeyboardColorLinkClicked();
          break;
        }
        case 26: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordKeyboardBrightnessChangeFromSlider(params.percent);
          break;
        }
        case 27: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceIconImage(params.device_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 28: {
          const params = ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchCompanionApp(params.package_id);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.InputDeviceSettingsProviderReceiver = ash.settings.mojom.InputDeviceSettingsProviderReceiver;

ash.settings.mojom.InputDeviceSettingsProviderPtr = ash.settings.mojom.InputDeviceSettingsProviderRemote;
ash.settings.mojom.InputDeviceSettingsProviderRequest = ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver;

