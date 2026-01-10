// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/input_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.diagnostics.mojom = ash.diagnostics.diagnostics.mojom || {};


// Enum: KeyEventType
ash.diagnostics.diagnostics.mojom.mojom.KeyEventType = {
  kPress: 0,
  kRelease: 1,
};
ash.diagnostics.diagnostics.mojom.mojom.KeyEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: TouchDeviceType
ash.diagnostics.diagnostics.mojom.mojom.TouchDeviceType = {
  kDirect: 0,
  kPointer: 1,
};
ash.diagnostics.diagnostics.mojom.mojom.TouchDeviceTypeSpec = { $: mojo.internal.Enum() };

// Struct: KeyEvent
ash.diagnostics.diagnostics.mojom.mojom.KeyEventSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyEvent',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: ash.diagnostics.mojom.KeyEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'key_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'scan_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'top_row_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TouchDeviceInfo
ash.diagnostics.diagnostics.mojom.mojom.TouchDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.TouchDeviceInfo',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'connection_type', packedOffset: 12, packedBitOffset: 0, type: ash.diagnostics.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ash.diagnostics.mojom.TouchDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'testable', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConnectedDevices
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevices',
      packedSize: 24,
      fields: [
        { name: 'keyboards', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.diagnostics.mojom.KeyboardInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'touch_devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.diagnostics.mojom.TouchDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: KeyboardObserver
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.KeyboardObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec,
      null,
      [event]);
  }

  onKeyEventsPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec,
      null,
      []);
  }

  onKeyEventsResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec,
      null,
      []);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.KeyboardObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyEvent
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.KeyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeyEventsPaused
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEventsPaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnKeyEventsResumed
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEventsResumed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.KeyboardObserverPendingReceiver;


// Interface: InternalDisplayPowerStateObserver
ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInternalDisplayPowerStateChanged(is_display_on) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec,
      null,
      [is_display_on]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.InternalDisplayPowerStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnInternalDisplayPowerStateChanged
ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver.OnInternalDisplayPowerStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_display_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.InternalDisplayPowerStateObserverPendingReceiver;


// Interface: TabletModeObserver
ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabletModeChanged(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabletModeChanged
ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.TabletModeObserver.OnTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.TabletModeObserverPendingReceiver;


// Interface: LidStateObserver
ash.diagnostics.diagnostics.mojom.mojom.LidStateObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.LidStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(is_lid_open) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec,
      null,
      [is_lid_open]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.LidStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.LidStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLidStateChanged
ash.diagnostics.diagnostics.mojom.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.LidStateObserver.OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.LidStateObserverPendingReceiver;


// Interface: ConnectedDevicesObserver
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.ConnectedDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardConnected(new_keyboard) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec,
      null,
      [new_keyboard]);
  }

  onKeyboardDisconnected(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec,
      null,
      [id]);
  }

  onTouchDeviceConnected(new_touch_device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec,
      null,
      [new_touch_device]);
  }

  onTouchDeviceDisconnected(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec,
      null,
      [id]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.ConnectedDevicesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardConnected
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnKeyboardConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_keyboard', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.KeyboardInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeyboardDisconnected
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnKeyboardDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTouchDeviceConnected
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnTouchDeviceConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_touch_device', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.TouchDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTouchDeviceDisconnected
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnTouchDeviceDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.ConnectedDevicesObserverPendingReceiver;


// Interface: InputDataProvider
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider = {};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.InputDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getConnectedDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec,
      []);
  }

  observeConnectedDevices(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyEvents(id, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec,
      null,
      [id, observer]);
  }

  observeTabletMode(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer]);
  }

  observeLidState(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveLidState_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec,
      [observer]);
  }

  observeInternalDisplayPowerState(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec,
      null,
      [observer]);
  }

  moveAppToTestingScreen(evdev_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec,
      null,
      [evdev_id]);
  }

  moveAppBackToPreviousScreen() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec,
      null,
      []);
  }

  setA11yTouchPassthrough(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec,
      null,
      [enabled]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.InputDataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetConnectedDevices
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.GetConnectedDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.GetConnectedDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.ConnectedDevicesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveConnectedDevices
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveConnectedDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.ConnectedDevicesObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveKeyEvents
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveKeyEvents_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.KeyboardObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ObserveTabletMode
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveTabletMode_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.TabletModeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveLidState
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveLidState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveLidState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.LidStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveLidState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveInternalDisplayPowerState
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveInternalDisplayPowerState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveAppToTestingScreen
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.MoveAppToTestingScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'evdev_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveAppBackToPreviousScreen
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.MoveAppBackToPreviousScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetA11yTouchPassthrough
ash.diagnostics.diagnostics.mojom.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.SetA11yTouchPassthrough_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderPtr = ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRemote;
ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderRequest = ash.diagnostics.diagnostics.mojom.mojom.InputDataProviderPendingReceiver;

