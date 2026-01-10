// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.mojom = ash.settings.settings.mojom || {};
var ui = ui || {};


// Union: ActionType
ash.settings.settings.mojom.mojom.ActionTypeSpec = { $: mojo.internal.Union(
    'ash.settings.mojom.ActionType', {
      'accelerator_action': {
        'ordinal': 0,
        'type': ash.mojom.AcceleratorActionSpec,
      }},
      'static_shortcut_action': {
        'ordinal': 1,
        'type': ash.mojom.StaticShortcutActionSpec,
      }},
    })
};

// Struct: ActionChoice
ash.settings.settings.mojom.mojom.ActionChoiceSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.ActionChoice',
      packedSize: 32,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: ash.settings.mojom.ActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: KeyboardSettingsObserver
ash.settings.settings.mojom.mojom.KeyboardSettingsObserver = {};

ash.settings.settings.mojom.mojom.KeyboardSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.KeyboardSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardListUpdated(keyboards) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec,
      null,
      [keyboards]);
  }

  onKeyboardPoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.mojom.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec,
      null,
      [policies]);
  }

};

ash.settings.settings.mojom.mojom.KeyboardSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardListUpdated
ash.settings.settings.mojom.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardSettingsObserver.OnKeyboardListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboards', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.KeyboardSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeyboardPoliciesUpdated
ash.settings.settings.mojom.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardSettingsObserver.OnKeyboardPoliciesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.KeyboardPoliciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.KeyboardSettingsObserverPtr = ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRemote;
ash.settings.settings.mojom.mojom.KeyboardSettingsObserverRequest = ash.settings.settings.mojom.mojom.KeyboardSettingsObserverPendingReceiver;


// Interface: TouchpadSettingsObserver
ash.settings.settings.mojom.mojom.TouchpadSettingsObserver = {};

ash.settings.settings.mojom.mojom.TouchpadSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TouchpadSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.TouchpadSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTouchpadListUpdated(touchpads) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec,
      null,
      [touchpads]);
  }

};

ash.settings.settings.mojom.mojom.TouchpadSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TouchpadSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTouchpadListUpdated
ash.settings.settings.mojom.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.TouchpadSettingsObserver.OnTouchpadListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'touchpads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.TouchpadSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.TouchpadSettingsObserverPtr = ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRemote;
ash.settings.settings.mojom.mojom.TouchpadSettingsObserverRequest = ash.settings.settings.mojom.mojom.TouchpadSettingsObserverPendingReceiver;


// Interface: PointingStickSettingsObserver
ash.settings.settings.mojom.mojom.PointingStickSettingsObserver = {};

ash.settings.settings.mojom.mojom.PointingStickSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.PointingStickSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.PointingStickSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPointingStickListUpdated(pointSticks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec,
      null,
      [pointSticks]);
  }

};

ash.settings.settings.mojom.mojom.PointingStickSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.PointingStickSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPointingStickListUpdated
ash.settings.settings.mojom.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.PointingStickSettingsObserver.OnPointingStickListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'pointSticks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.PointingStickSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.PointingStickSettingsObserverPtr = ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRemote;
ash.settings.settings.mojom.mojom.PointingStickSettingsObserverRequest = ash.settings.settings.mojom.mojom.PointingStickSettingsObserverPendingReceiver;


// Interface: MouseSettingsObserver
ash.settings.settings.mojom.mojom.MouseSettingsObserver = {};

ash.settings.settings.mojom.mojom.MouseSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.MouseSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.MouseSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.MouseSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.MouseSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.MouseSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMouseListUpdated(mice) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec,
      null,
      [mice]);
  }

  onMousePoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.mojom.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec,
      null,
      [policies]);
  }

};

ash.settings.settings.mojom.mojom.MouseSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.MouseSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.MouseSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMouseListUpdated
ash.settings.settings.mojom.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.MouseSettingsObserver.OnMouseListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'mice', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.MouseSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMousePoliciesUpdated
ash.settings.settings.mojom.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.MouseSettingsObserver.OnMousePoliciesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.MousePoliciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.MouseSettingsObserverPtr = ash.settings.settings.mojom.mojom.MouseSettingsObserverRemote;
ash.settings.settings.mojom.mojom.MouseSettingsObserverRequest = ash.settings.settings.mojom.mojom.MouseSettingsObserverPendingReceiver;


// Interface: ButtonPressObserver
ash.settings.settings.mojom.mojom.ButtonPressObserver = {};

ash.settings.settings.mojom.mojom.ButtonPressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.ButtonPressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.ButtonPressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.ButtonPressObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.ButtonPressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.ButtonPressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onButtonPressed(button) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec,
      null,
      [button]);
  }

};

ash.settings.settings.mojom.mojom.ButtonPressObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.ButtonPressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.ButtonPressObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnButtonPressed
ash.settings.settings.mojom.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.ButtonPressObserver.OnButtonPressed_Params',
      packedSize: 24,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.ButtonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.ButtonPressObserverPtr = ash.settings.settings.mojom.mojom.ButtonPressObserverRemote;
ash.settings.settings.mojom.mojom.ButtonPressObserverRequest = ash.settings.settings.mojom.mojom.ButtonPressObserverPendingReceiver;


// Interface: GraphicsTabletSettingsObserver
ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserver = {};

ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.GraphicsTabletSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGraphicsTabletListUpdated(graphics_tablets) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec,
      null,
      [graphics_tablets]);
  }

};

ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.GraphicsTabletSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGraphicsTabletListUpdated
ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.GraphicsTabletSettingsObserver.OnGraphicsTabletListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'graphics_tablets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.GraphicsTabletSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverPtr = ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRemote;
ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverRequest = ash.settings.settings.mojom.mojom.GraphicsTabletSettingsObserverPendingReceiver;


// Interface: KeyboardBrightnessObserver
ash.settings.settings.mojom.mojom.KeyboardBrightnessObserver = {};

ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardBrightnessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardBrightnessChanged(brightness_percent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec,
      null,
      [brightness_percent]);
  }

};

ash.settings.settings.mojom.mojom.KeyboardBrightnessObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardBrightnessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardBrightnessChanged
ash.settings.settings.mojom.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardBrightnessObserver.OnKeyboardBrightnessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverPtr = ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRemote;
ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverRequest = ash.settings.settings.mojom.mojom.KeyboardBrightnessObserverPendingReceiver;


// Interface: KeyboardAmbientLightSensorObserver
ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserver = {};

ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [keyboard_ambient_light_sensor_enabled]);
  }

};

ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardAmbientLightSensorObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardAmbientLightSensorEnabledChanged
ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardAmbientLightSensorObserver.OnKeyboardAmbientLightSensorEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboard_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverPtr = ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRemote;
ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverRequest = ash.settings.settings.mojom.mojom.KeyboardAmbientLightSensorObserverPendingReceiver;


// Interface: LidStateObserver
ash.settings.settings.mojom.mojom.LidStateObserver = {};

ash.settings.settings.mojom.mojom.LidStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.LidStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.LidStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.LidStateObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.LidStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(is_lid_open) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec,
      null,
      [is_lid_open]);
  }

};

ash.settings.settings.mojom.mojom.LidStateObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.LidStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.LidStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLidStateChanged
ash.settings.settings.mojom.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.LidStateObserver.OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.LidStateObserverPtr = ash.settings.settings.mojom.mojom.LidStateObserverRemote;
ash.settings.settings.mojom.mojom.LidStateObserverRequest = ash.settings.settings.mojom.mojom.LidStateObserverPendingReceiver;


// Interface: InputDeviceSettingsProvider
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider = {};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.InputDeviceSettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeKeyboardSettings(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeTouchpadSettings(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec,
      null,
      [observer]);
  }

  observePointingStickSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeMouseSettings(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeGraphicsTabletSettings(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeButtonPresses(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyboardBrightness(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyboardAmbientLightSensor(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec,
      null,
      [observer]);
  }

  observeLidState(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec,
      [observer]);
  }

  restoreDefaultKeyboardRemappings(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec,
      null,
      [device_id]);
  }

  setKeyboardSettings(device_id, settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setPointingStickSettings(device_id, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setMouseSettings(device_id, settings) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setTouchpadSettings(device_id, settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setGraphicsTabletSettings(device_id, settings) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setKeyboardBrightness(percent) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec,
      null,
      [percent]);
  }

  setKeyboardAmbientLightSensorEnabled(enabled) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  startObserving(device_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec,
      null,
      [device_id]);
  }

  stopObserving() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec,
      null,
      []);
  }

  getActionsForMouseButtonCustomization() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec,
      []);
  }

  getActionsForGraphicsTabletButtonCustomization() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec,
      []);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      []);
  }

  hasKeyboardBacklight() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec,
      []);
  }

  hasAmbientLightSensor() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      []);
  }

  isRgbKeyboardSupported() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec,
      []);
  }

  recordKeyboardColorLinkClicked() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec,
      null,
      []);
  }

  recordKeyboardBrightnessChangeFromSlider(percent) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec,
      null,
      [percent]);
  }

  getDeviceIconImage(device_key) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec,
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec,
      [device_key]);
  }

  launchCompanionApp(package_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec,
      null,
      [package_id]);
  }

};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.InputDeviceSettingsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveKeyboardSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardSettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveTouchpadSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveTouchpadSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.TouchpadSettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObservePointingStickSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObservePointingStickSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.PointingStickSettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveMouseSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveMouseSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.MouseSettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveGraphicsTabletSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveGraphicsTabletSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.GraphicsTabletSettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveButtonPresses
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveButtonPresses_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.ButtonPressObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveKeyboardBrightness
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardBrightnessObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveKeyboardAmbientLightSensor
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardAmbientLightSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveLidState
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveLidState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.mojom.LidStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveLidState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RestoreDefaultKeyboardRemappings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RestoreDefaultKeyboardRemappings_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetKeyboardSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.KeyboardSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPointingStickSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetPointingStickSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PointingStickSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetMouseSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetMouseSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.MouseSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetTouchpadSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetTouchpadSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.TouchpadSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetGraphicsTabletSettings
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetGraphicsTabletSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.GraphicsTabletSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetKeyboardBrightness
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetKeyboardAmbientLightSensorEnabled
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardAmbientLightSensorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartObserving
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.StartObserving_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopObserving
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.StopObserving_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetActionsForMouseButtonCustomization
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForMouseButtonCustomization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForMouseButtonCustomization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.mojom.ActionChoiceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetActionsForGraphicsTabletButtonCustomization
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForGraphicsTabletButtonCustomization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForGraphicsTabletButtonCustomization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.mojom.ActionChoiceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMetaKeyToDisplay
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetMetaKeyToDisplay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetMetaKeyToDisplay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'meta_key', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.MetaKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HasKeyboardBacklight
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasKeyboardBacklight_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasKeyboardBacklight_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_keyboard_backlight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HasAmbientLightSensor
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasAmbientLightSensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_ambient_light_sensor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsRgbKeyboardSupported
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.IsRgbKeyboardSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.IsRgbKeyboardSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_rgb_keyboard_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordKeyboardColorLinkClicked
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RecordKeyboardColorLinkClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordKeyboardBrightnessChangeFromSlider
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RecordKeyboardBrightnessChangeFromSlider_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceIconImage
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetDeviceIconImage_Params',
      packedSize: 16,
      fields: [
        { name: 'device_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetDeviceIconImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LaunchCompanionApp
ash.settings.settings.mojom.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.LaunchCompanionApp_Params',
      packedSize: 16,
      fields: [
        { name: 'package_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderPtr = ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRemote;
ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderRequest = ash.settings.settings.mojom.mojom.InputDeviceSettingsProviderPendingReceiver;

