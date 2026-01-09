// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/input_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: KeyEventType
ash.diagnostics.mojom.KeyEventType = {
  kPress: 0,
  kRelease: 1,
};

// Enum: TouchDeviceType
ash.diagnostics.mojom.TouchDeviceType = {
  kDirect: 0,
  kPointer: 1,
};

// Struct: KeyEvent
ash.diagnostics.mojom.KeyEventSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyEvent',
      packedSize: 16,
      fields: [
        { name: 'top_row_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TouchDeviceInfo
ash.diagnostics.mojom.TouchDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.TouchDeviceInfo',
      packedSize: 16,
      fields: [
        { name: 'testable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConnectedDevices
ash.diagnostics.mojom.ConnectedDevicesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevices',
      packedSize: 16,
      fields: [
        { name: 'touch_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KeyboardObserver
ash.diagnostics.mojom.KeyboardObserver = {};

ash.diagnostics.mojom.KeyboardObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.KeyboardObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.KeyboardObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.KeyboardObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.KeyboardObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.KeyboardObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec,
      null,
      [event]);
  }

  onKeyEventsPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec,
      null,
      []);
  }

  onKeyEventsResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec,
      null,
      []);
  }

};

ash.diagnostics.mojom.KeyboardObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.KeyboardObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.KeyboardObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyEvent
ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnKeyEventsPaused
ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEventsPaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnKeyEventsResumed
ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardObserver.OnKeyEventsResumed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.KeyboardObserverPtr = ash.diagnostics.mojom.KeyboardObserverRemote;
ash.diagnostics.mojom.KeyboardObserverRequest = ash.diagnostics.mojom.KeyboardObserverPendingReceiver;


// Interface: InternalDisplayPowerStateObserver
ash.diagnostics.mojom.InternalDisplayPowerStateObserver = {};

ash.diagnostics.mojom.InternalDisplayPowerStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.InternalDisplayPowerStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInternalDisplayPowerStateChanged(is_display_on) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec,
      null,
      [is_display_on]);
  }

};

ash.diagnostics.mojom.InternalDisplayPowerStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.InternalDisplayPowerStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnInternalDisplayPowerStateChanged
ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver.OnInternalDisplayPowerStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_display_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.InternalDisplayPowerStateObserverPtr = ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemote;
ash.diagnostics.mojom.InternalDisplayPowerStateObserverRequest = ash.diagnostics.mojom.InternalDisplayPowerStateObserverPendingReceiver;


// Interface: TabletModeObserver
ash.diagnostics.mojom.TabletModeObserver = {};

ash.diagnostics.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabletModeChanged(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

};

ash.diagnostics.mojom.TabletModeObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabletModeChanged
ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.TabletModeObserver.OnTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.TabletModeObserverPtr = ash.diagnostics.mojom.TabletModeObserverRemote;
ash.diagnostics.mojom.TabletModeObserverRequest = ash.diagnostics.mojom.TabletModeObserverPendingReceiver;


// Interface: LidStateObserver
ash.diagnostics.mojom.LidStateObserver = {};

ash.diagnostics.mojom.LidStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.LidStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.LidStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.LidStateObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.LidStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(is_lid_open) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec,
      null,
      [is_lid_open]);
  }

};

ash.diagnostics.mojom.LidStateObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.LidStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.LidStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLidStateChanged
ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.LidStateObserver.OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.LidStateObserverPtr = ash.diagnostics.mojom.LidStateObserverRemote;
ash.diagnostics.mojom.LidStateObserverRequest = ash.diagnostics.mojom.LidStateObserverPendingReceiver;


// Interface: ConnectedDevicesObserver
ash.diagnostics.mojom.ConnectedDevicesObserver = {};

ash.diagnostics.mojom.ConnectedDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.ConnectedDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.ConnectedDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.ConnectedDevicesObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.ConnectedDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.ConnectedDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeyboardConnected(new_keyboard) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec,
      null,
      [new_keyboard]);
  }

  onKeyboardDisconnected(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec,
      null,
      [id]);
  }

  onTouchDeviceConnected(new_touch_device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec,
      null,
      [new_touch_device]);
  }

  onTouchDeviceDisconnected(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec,
      null,
      [id]);
  }

};

ash.diagnostics.mojom.ConnectedDevicesObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.ConnectedDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.ConnectedDevicesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeyboardConnected
ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnKeyboardConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_keyboard', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnKeyboardDisconnected
ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnKeyboardDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTouchDeviceConnected
ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnTouchDeviceConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_touch_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTouchDeviceDisconnected
ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.ConnectedDevicesObserver.OnTouchDeviceDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.ConnectedDevicesObserverPtr = ash.diagnostics.mojom.ConnectedDevicesObserverRemote;
ash.diagnostics.mojom.ConnectedDevicesObserverRequest = ash.diagnostics.mojom.ConnectedDevicesObserverPendingReceiver;


// Interface: InputDataProvider
ash.diagnostics.mojom.InputDataProvider = {};

ash.diagnostics.mojom.InputDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.InputDataProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.InputDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.InputDataProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.InputDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.InputDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getConnectedDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec,
      ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec,
      []);
  }

  observeConnectedDevices(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec,
      null,
      [observer]);
  }

  observeKeyEvents(id, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec,
      null,
      [id, observer]);
  }

  observeTabletMode(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec,
      ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer]);
  }

  observeLidState(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec,
      ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec,
      [observer]);
  }

  observeInternalDisplayPowerState(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec,
      null,
      [observer]);
  }

  moveAppToTestingScreen(evdev_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec,
      null,
      [evdev_id]);
  }

  moveAppBackToPreviousScreen() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec,
      null,
      []);
  }

  setA11yTouchPassthrough(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec,
      null,
      [enabled]);
  }

};

ash.diagnostics.mojom.InputDataProvider.getRemote = function() {
  let remote = new ash.diagnostics.mojom.InputDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.InputDataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetConnectedDevices
ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.GetConnectedDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.GetConnectedDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveConnectedDevices
ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveConnectedDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveKeyEvents
ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveKeyEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'observer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveTabletMode
ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveTabletMode_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveLidState
ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveLidState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveLidState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_lid_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveInternalDisplayPowerState
ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.ObserveInternalDisplayPowerState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveAppToTestingScreen
ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.MoveAppToTestingScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'evdev_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveAppBackToPreviousScreen
ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.MoveAppBackToPreviousScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetA11yTouchPassthrough
ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.InputDataProvider.SetA11yTouchPassthrough_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.InputDataProviderPtr = ash.diagnostics.mojom.InputDataProviderRemote;
ash.diagnostics.mojom.InputDataProviderRequest = ash.diagnostics.mojom.InputDataProviderPendingReceiver;

