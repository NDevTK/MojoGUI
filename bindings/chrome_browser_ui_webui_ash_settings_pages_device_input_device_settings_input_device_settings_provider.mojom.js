// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Struct: ActionChoice
ash.settings.mojom.ActionChoiceSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.ActionChoice',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KeyboardSettingsObserver
ash.settings.mojom.KeyboardSettingsObserver = {};

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
      [keyboards]);
  }

  onKeyboardPoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec,
      null,
      [policies]);
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

// ParamsSpec for OnKeyboardListUpdated
ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardSettingsObserver.OnKeyboardListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboards', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnKeyboardPoliciesUpdated
ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardSettingsObserver.OnKeyboardPoliciesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.KeyboardSettingsObserverPtr = ash.settings.mojom.KeyboardSettingsObserverRemote;
ash.settings.mojom.KeyboardSettingsObserverRequest = ash.settings.mojom.KeyboardSettingsObserverPendingReceiver;


// Interface: TouchpadSettingsObserver
ash.settings.mojom.TouchpadSettingsObserver = {};

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
      [touchpads]);
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

// ParamsSpec for OnTouchpadListUpdated
ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.TouchpadSettingsObserver.OnTouchpadListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'touchpads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.TouchpadSettingsObserverPtr = ash.settings.mojom.TouchpadSettingsObserverRemote;
ash.settings.mojom.TouchpadSettingsObserverRequest = ash.settings.mojom.TouchpadSettingsObserverPendingReceiver;


// Interface: PointingStickSettingsObserver
ash.settings.mojom.PointingStickSettingsObserver = {};

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
      [pointSticks]);
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

// ParamsSpec for OnPointingStickListUpdated
ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.PointingStickSettingsObserver.OnPointingStickListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'pointSticks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.PointingStickSettingsObserverPtr = ash.settings.mojom.PointingStickSettingsObserverRemote;
ash.settings.mojom.PointingStickSettingsObserverRequest = ash.settings.mojom.PointingStickSettingsObserverPendingReceiver;


// Interface: MouseSettingsObserver
ash.settings.mojom.MouseSettingsObserver = {};

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
      [mice]);
  }

  onMousePoliciesUpdated(policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec,
      null,
      [policies]);
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

// ParamsSpec for OnMouseListUpdated
ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.MouseSettingsObserver.OnMouseListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'mice', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMousePoliciesUpdated
ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.MouseSettingsObserver.OnMousePoliciesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.MouseSettingsObserverPtr = ash.settings.mojom.MouseSettingsObserverRemote;
ash.settings.mojom.MouseSettingsObserverRequest = ash.settings.mojom.MouseSettingsObserverPendingReceiver;


// Interface: ButtonPressObserver
ash.settings.mojom.ButtonPressObserver = {};

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
      [button]);
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

// ParamsSpec for OnButtonPressed
ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.ButtonPressObserver.OnButtonPressed_Params',
      packedSize: 16,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.ButtonPressObserverPtr = ash.settings.mojom.ButtonPressObserverRemote;
ash.settings.mojom.ButtonPressObserverRequest = ash.settings.mojom.ButtonPressObserverPendingReceiver;


// Interface: GraphicsTabletSettingsObserver
ash.settings.mojom.GraphicsTabletSettingsObserver = {};

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
      [graphics_tablets]);
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

// ParamsSpec for OnGraphicsTabletListUpdated
ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.GraphicsTabletSettingsObserver.OnGraphicsTabletListUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'graphics_tablets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.GraphicsTabletSettingsObserverPtr = ash.settings.mojom.GraphicsTabletSettingsObserverRemote;
ash.settings.mojom.GraphicsTabletSettingsObserverRequest = ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver;


// Interface: KeyboardBrightnessObserver
ash.settings.mojom.KeyboardBrightnessObserver = {};

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
      [brightness_percent]);
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

// ParamsSpec for OnKeyboardBrightnessChanged
ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardBrightnessObserver.OnKeyboardBrightnessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.KeyboardBrightnessObserverPtr = ash.settings.mojom.KeyboardBrightnessObserverRemote;
ash.settings.mojom.KeyboardBrightnessObserverRequest = ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver;


// Interface: KeyboardAmbientLightSensorObserver
ash.settings.mojom.KeyboardAmbientLightSensorObserver = {};

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
      [keyboard_ambient_light_sensor_enabled]);
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

// ParamsSpec for OnKeyboardAmbientLightSensorEnabledChanged
ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.KeyboardAmbientLightSensorObserver.OnKeyboardAmbientLightSensorEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboard_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.KeyboardAmbientLightSensorObserverPtr = ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote;
ash.settings.mojom.KeyboardAmbientLightSensorObserverRequest = ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver;


// Interface: LidStateObserver
ash.settings.mojom.LidStateObserver = {};

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
      [is_lid_open]);
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

// ParamsSpec for OnLidStateChanged
ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.LidStateObserver.OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.LidStateObserverPtr = ash.settings.mojom.LidStateObserverRemote;
ash.settings.mojom.LidStateObserverRequest = ash.settings.mojom.LidStateObserverPendingReceiver;


// Interface: InputDeviceSettingsProvider
ash.settings.mojom.InputDeviceSettingsProvider = {};

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
      [observer]);
  }

  observeTouchpadSettings(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec,
      null,
      [observer]);
  }

  observePointingStickSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeMouseSettings(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeGraphicsTabletSettings(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec,
      null,
      [observer]);
  }

  observeButtonPresses(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyboardBrightness(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyboardAmbientLightSensor(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec,
      null,
      [observer]);
  }

  observeLidState(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec,
      [observer]);
  }

  restoreDefaultKeyboardRemappings(device_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec,
      null,
      [device_id]);
  }

  setKeyboardSettings(device_id, settings) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setPointingStickSettings(device_id, settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setMouseSettings(device_id, settings) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setTouchpadSettings(device_id, settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setGraphicsTabletSettings(device_id, settings) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec,
      null,
      [device_id, settings]);
  }

  setKeyboardBrightness(percent) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec,
      null,
      [percent]);
  }

  setKeyboardAmbientLightSensorEnabled(enabled) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  startObserving(device_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec,
      null,
      [device_id]);
  }

  stopObserving() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec,
      null,
      []);
  }

  getActionsForMouseButtonCustomization() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec,
      []);
  }

  getActionsForGraphicsTabletButtonCustomization() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec,
      []);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      []);
  }

  hasKeyboardBacklight() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec,
      []);
  }

  hasAmbientLightSensor() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      []);
  }

  isRgbKeyboardSupported() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec,
      []);
  }

  recordKeyboardColorLinkClicked() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec,
      null,
      []);
  }

  recordKeyboardBrightnessChangeFromSlider(percent) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec,
      null,
      [percent]);
  }

  getDeviceIconImage(device_key) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec,
      ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec,
      [device_key]);
  }

  launchCompanionApp(package_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec,
      null,
      [package_id]);
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

// ParamsSpec for ObserveKeyboardSettings
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveTouchpadSettings
ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveTouchpadSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObservePointingStickSettings
ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObservePointingStickSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveMouseSettings
ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveMouseSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveGraphicsTabletSettings
ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveGraphicsTabletSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveButtonPresses
ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveButtonPresses_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveKeyboardBrightness
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveKeyboardAmbientLightSensor
ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveKeyboardAmbientLightSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveLidState
ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveLidState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.ObserveLidState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreDefaultKeyboardRemappings
ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RestoreDefaultKeyboardRemappings_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetKeyboardSettings
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPointingStickSettings
ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetPointingStickSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMouseSettings
ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetMouseSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTouchpadSettings
ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetTouchpadSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetGraphicsTabletSettings
ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetGraphicsTabletSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetKeyboardBrightness
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetKeyboardAmbientLightSensorEnabled
ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.SetKeyboardAmbientLightSensorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartObserving
ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.StartObserving_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopObserving
ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.StopObserving_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetActionsForMouseButtonCustomization
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForMouseButtonCustomization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForMouseButtonCustomization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetActionsForGraphicsTabletButtonCustomization
ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForGraphicsTabletButtonCustomization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetActionsForGraphicsTabletButtonCustomization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMetaKeyToDisplay
ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetMetaKeyToDisplay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetMetaKeyToDisplay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'meta_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasKeyboardBacklight
ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasKeyboardBacklight_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasKeyboardBacklight_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_keyboard_backlight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasAmbientLightSensor
ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasAmbientLightSensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.HasAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_ambient_light_sensor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsRgbKeyboardSupported
ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.IsRgbKeyboardSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.IsRgbKeyboardSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_rgb_keyboard_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordKeyboardColorLinkClicked
ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RecordKeyboardColorLinkClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordKeyboardBrightnessChangeFromSlider
ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.RecordKeyboardBrightnessChangeFromSlider_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceIconImage
ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetDeviceIconImage_Params',
      packedSize: 16,
      fields: [
        { name: 'device_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.GetDeviceIconImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LaunchCompanionApp
ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.InputDeviceSettingsProvider.LaunchCompanionApp_Params',
      packedSize: 16,
      fields: [
        { name: 'package_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.InputDeviceSettingsProviderPtr = ash.settings.mojom.InputDeviceSettingsProviderRemote;
ash.settings.mojom.InputDeviceSettingsProviderRequest = ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver;

