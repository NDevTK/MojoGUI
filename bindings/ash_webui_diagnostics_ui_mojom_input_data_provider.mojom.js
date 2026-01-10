// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/input_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};

ash.diagnostics.mojom.KeyEventTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.TouchDeviceTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.KeyEventSpec = { $: {} };
ash.diagnostics.mojom.TouchDeviceInfoSpec = { $: {} };
ash.diagnostics.mojom.ConnectedDevicesSpec = { $: {} };
ash.diagnostics.mojom.KeyboardObserver = {};
ash.diagnostics.mojom.KeyboardObserver.$interfaceName = 'ash.diagnostics.mojom.KeyboardObserver';
ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec = { $: {} };
ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec = { $: {} };
ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InternalDisplayPowerStateObserver = {};
ash.diagnostics.mojom.InternalDisplayPowerStateObserver.$interfaceName = 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver';
ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec = { $: {} };
ash.diagnostics.mojom.TabletModeObserver = {};
ash.diagnostics.mojom.TabletModeObserver.$interfaceName = 'ash.diagnostics.mojom.TabletModeObserver';
ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = { $: {} };
ash.diagnostics.mojom.LidStateObserver = {};
ash.diagnostics.mojom.LidStateObserver.$interfaceName = 'ash.diagnostics.mojom.LidStateObserver';
ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = { $: {} };
ash.diagnostics.mojom.ConnectedDevicesObserver = {};
ash.diagnostics.mojom.ConnectedDevicesObserver.$interfaceName = 'ash.diagnostics.mojom.ConnectedDevicesObserver';
ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec = { $: {} };
ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec = { $: {} };
ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec = { $: {} };
ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider = {};
ash.diagnostics.mojom.InputDataProvider.$interfaceName = 'ash.diagnostics.mojom.InputDataProvider';
ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec = { $: {} };
ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    ash.diagnostics.mojom.KeyEventSpec, 'ash.diagnostics.mojom.KeyEvent', [
      mojo.internal.StructField('type', 0, 0, ash.diagnostics.mojom.KeyEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_code', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('scan_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('top_row_position', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchDeviceInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.TouchDeviceInfoSpec, 'ash.diagnostics.mojom.TouchDeviceInfo', [
      mojo.internal.StructField('connection_type', 0, 0, ash.diagnostics.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.diagnostics.mojom.TouchDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('testable', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConnectedDevices
mojo.internal.Struct(
    ash.diagnostics.mojom.ConnectedDevicesSpec, 'ash.diagnostics.mojom.ConnectedDevices', [
      mojo.internal.StructField('keyboards', 0, 0, mojo.internal.Array(ash.diagnostics.mojom.KeyboardInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('touch_devices', 8, 0, mojo.internal.Array(ash.diagnostics.mojom.TouchDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeyboardObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec, 'ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ash.diagnostics.mojom.KeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec, 'ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec, 'ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_Params', [
    ],
    [[0, 8]]);

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
      [event],
      false);
  }

  onKeyEventsPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec,
      null,
      [],
      false);
  }

  onKeyEventsResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec,
      null,
      [],
      false);
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

ash.diagnostics.mojom.KeyboardObserverReceiver = class {
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
          const params = ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyEvent(params.event);
          break;
        }
        case 1: {
          const params = ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyEventsPaused();
          break;
        }
        case 2: {
          const params = ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyEventsResumed();
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.KeyboardObserverReceiver = ash.diagnostics.mojom.KeyboardObserverReceiver;

ash.diagnostics.mojom.KeyboardObserverPtr = ash.diagnostics.mojom.KeyboardObserverRemote;
ash.diagnostics.mojom.KeyboardObserverRequest = ash.diagnostics.mojom.KeyboardObserverPendingReceiver;


// Interface: InternalDisplayPowerStateObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec, 'ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_Params', [
      mojo.internal.StructField('is_display_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [is_display_on],
      false);
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

ash.diagnostics.mojom.InternalDisplayPowerStateObserverReceiver = class {
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
          const params = ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onInternalDisplayPowerStateChanged(params.is_display_on);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.InternalDisplayPowerStateObserverReceiver = ash.diagnostics.mojom.InternalDisplayPowerStateObserverReceiver;

ash.diagnostics.mojom.InternalDisplayPowerStateObserverPtr = ash.diagnostics.mojom.InternalDisplayPowerStateObserverRemote;
ash.diagnostics.mojom.InternalDisplayPowerStateObserverRequest = ash.diagnostics.mojom.InternalDisplayPowerStateObserverPendingReceiver;


// Interface: TabletModeObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec, 'ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [is_tablet_mode],
      false);
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

ash.diagnostics.mojom.TabletModeObserverReceiver = class {
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
          const params = ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabletModeChanged(params.is_tablet_mode);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.TabletModeObserverReceiver = ash.diagnostics.mojom.TabletModeObserverReceiver;

ash.diagnostics.mojom.TabletModeObserverPtr = ash.diagnostics.mojom.TabletModeObserverRemote;
ash.diagnostics.mojom.TabletModeObserverRequest = ash.diagnostics.mojom.TabletModeObserverPendingReceiver;


// Interface: LidStateObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec, 'ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_Params', [
      mojo.internal.StructField('is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [is_lid_open],
      false);
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

ash.diagnostics.mojom.LidStateObserverReceiver = class {
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
          const params = ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLidStateChanged(params.is_lid_open);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.LidStateObserverReceiver = ash.diagnostics.mojom.LidStateObserverReceiver;

ash.diagnostics.mojom.LidStateObserverPtr = ash.diagnostics.mojom.LidStateObserverRemote;
ash.diagnostics.mojom.LidStateObserverRequest = ash.diagnostics.mojom.LidStateObserverPendingReceiver;


// Interface: ConnectedDevicesObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec, 'ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_Params', [
      mojo.internal.StructField('new_keyboard', 0, 0, ash.diagnostics.mojom.KeyboardInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec, 'ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec, 'ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_Params', [
      mojo.internal.StructField('new_touch_device', 0, 0, ash.diagnostics.mojom.TouchDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec, 'ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [new_keyboard],
      false);
  }

  onKeyboardDisconnected(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec,
      null,
      [id],
      false);
  }

  onTouchDeviceConnected(new_touch_device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec,
      null,
      [new_touch_device],
      false);
  }

  onTouchDeviceDisconnected(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec,
      null,
      [id],
      false);
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

ash.diagnostics.mojom.ConnectedDevicesObserverReceiver = class {
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
          const params = ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardConnected(params.new_keyboard);
          break;
        }
        case 1: {
          const params = ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeyboardDisconnected(params.id);
          break;
        }
        case 2: {
          const params = ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTouchDeviceConnected(params.new_touch_device);
          break;
        }
        case 3: {
          const params = ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTouchDeviceDisconnected(params.id);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.ConnectedDevicesObserverReceiver = ash.diagnostics.mojom.ConnectedDevicesObserverReceiver;

ash.diagnostics.mojom.ConnectedDevicesObserverPtr = ash.diagnostics.mojom.ConnectedDevicesObserverRemote;
ash.diagnostics.mojom.ConnectedDevicesObserverRequest = ash.diagnostics.mojom.ConnectedDevicesObserverPendingReceiver;


// Interface: InputDataProvider
mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, ash.diagnostics.mojom.ConnectedDevicesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.ConnectedDevicesObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.KeyboardObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.TabletModeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveLidState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.LidStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParams', [
      mojo.internal.StructField('is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.InternalDisplayPowerStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_Params', [
      mojo.internal.StructField('evdev_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec, 'ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  observeConnectedDevices(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeKeyEvents(id, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec,
      null,
      [id, observer],
      false);
  }

  observeTabletMode(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec,
      ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer],
      false);
  }

  observeLidState(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec,
      ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec,
      [observer],
      false);
  }

  observeInternalDisplayPowerState(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec,
      null,
      [observer],
      false);
  }

  moveAppToTestingScreen(evdev_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec,
      null,
      [evdev_id],
      false);
  }

  moveAppBackToPreviousScreen() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec,
      null,
      [],
      false);
  }

  setA11yTouchPassthrough(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec,
      null,
      [enabled],
      false);
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

ash.diagnostics.mojom.InputDataProviderReceiver = class {
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
          const params = ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getConnectedDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeConnectedDevices(params.observer);
          break;
        }
        case 2: {
          const params = ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeKeyEvents(params.id, params.observer);
          break;
        }
        case 3: {
          const params = ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeTabletMode(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeLidState(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeInternalDisplayPowerState(params.observer);
          break;
        }
        case 6: {
          const params = ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveAppToTestingScreen(params.evdev_id);
          break;
        }
        case 7: {
          const params = ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveAppBackToPreviousScreen();
          break;
        }
        case 8: {
          const params = ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setA11yTouchPassthrough(params.enabled);
          break;
        }
      }
    });
  }
};

ash.diagnostics.mojom.InputDataProviderReceiver = ash.diagnostics.mojom.InputDataProviderReceiver;

ash.diagnostics.mojom.InputDataProviderPtr = ash.diagnostics.mojom.InputDataProviderRemote;
ash.diagnostics.mojom.InputDataProviderRequest = ash.diagnostics.mojom.InputDataProviderPendingReceiver;

