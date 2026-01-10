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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: OnKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnKeyEventsPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyEventsPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnKeyEventsResumed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyEventsResumed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyEvent');
          const result = this.impl.onKeyEvent(params.event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsPaused_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyEventsPaused');
          const result = this.impl.onKeyEventsPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.KeyboardObserver_OnKeyEventsResumed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyEventsResumed');
          const result = this.impl.onKeyEventsResumed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
        
        // Try Method 0: OnInternalDisplayPowerStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInternalDisplayPowerStateChanged (0)');
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InternalDisplayPowerStateObserver_OnInternalDisplayPowerStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInternalDisplayPowerStateChanged');
          const result = this.impl.onInternalDisplayPowerStateChanged(params.is_display_on);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
        
        // Try Method 0: OnTabletModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabletModeChanged (0)');
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTabletModeChanged');
          const result = this.impl.onTabletModeChanged(params.is_tablet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
             decoder.decodeStruct(ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$, message.header.headerSize);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: OnKeyboardConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardConnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnKeyboardDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardDisconnected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnTouchDeviceConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTouchDeviceConnected (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnTouchDeviceDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTouchDeviceDisconnected (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardConnected');
          const result = this.impl.onKeyboardConnected(params.new_keyboard);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnKeyboardDisconnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardDisconnected');
          const result = this.impl.onKeyboardDisconnected(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTouchDeviceConnected');
          const result = this.impl.onTouchDeviceConnected(params.new_touch_device);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.ConnectedDevicesObserver_OnTouchDeviceDisconnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTouchDeviceDisconnected');
          const result = this.impl.onTouchDeviceDisconnected(params.id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
        
        // Try Method 0: GetConnectedDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConnectedDevices (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveConnectedDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveConnectedDevices (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObserveKeyEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyEvents (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ObserveTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveTabletMode (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObserveLidState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveLidState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ObserveInternalDisplayPowerState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveInternalDisplayPowerState (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: MoveAppToTestingScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveAppToTestingScreen (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: MoveAppBackToPreviousScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveAppBackToPreviousScreen (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetA11yTouchPassthrough
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetA11yTouchPassthrough (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_GetConnectedDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getConnectedDevices');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveConnectedDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeConnectedDevices');
          const result = this.impl.observeConnectedDevices(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveKeyEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeKeyEvents');
          const result = this.impl.observeKeyEvents(params.id, params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveTabletMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeTabletMode');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveLidState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeLidState');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_ObserveInternalDisplayPowerState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.observeInternalDisplayPowerState');
          const result = this.impl.observeInternalDisplayPowerState(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_MoveAppToTestingScreen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.moveAppToTestingScreen');
          const result = this.impl.moveAppToTestingScreen(params.evdev_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_MoveAppBackToPreviousScreen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.moveAppBackToPreviousScreen');
          const result = this.impl.moveAppBackToPreviousScreen();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.diagnostics.mojom.InputDataProvider_SetA11yTouchPassthrough_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setA11yTouchPassthrough');
          const result = this.impl.setA11yTouchPassthrough(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.diagnostics.mojom.InputDataProviderReceiver = ash.diagnostics.mojom.InputDataProviderReceiver;

ash.diagnostics.mojom.InputDataProviderPtr = ash.diagnostics.mojom.InputDataProviderRemote;
ash.diagnostics.mojom.InputDataProviderRequest = ash.diagnostics.mojom.InputDataProviderPendingReceiver;

