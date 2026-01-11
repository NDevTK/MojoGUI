// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/bluetooth_internals/bluetooth_internals.mojom
// Module: mojom

// Module namespace
var mojom = mojom || {};
var bluetooth = bluetooth || {};

mojom.DebugLogsChangeHandler = {};
mojom.DebugLogsChangeHandler.$interfaceName = 'mojom.DebugLogsChangeHandler';
mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler = {};
mojom.BluetoothInternalsHandler.$interfaceName = 'mojom.BluetoothInternalsHandler';
mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec = { $: {} };
mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec = { $: {} };
mojom.BluetoothBtsnoop = {};
mojom.BluetoothBtsnoop.$interfaceName = 'mojom.BluetoothBtsnoop';
mojom.BluetoothBtsnoop_Stop_ParamsSpec = { $: {} };
mojom.BluetoothBtsnoop_Stop_ResponseParamsSpec = { $: {} };

// Interface: DebugLogsChangeHandler
mojo.internal.Struct(
    mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec, 'mojom.DebugLogsChangeHandler_ChangeDebugLogsState_Params', [
      mojo.internal.StructField('should_debug_logs_be_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.DebugLogsChangeHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.DebugLogsChangeHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.DebugLogsChangeHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.DebugLogsChangeHandlerPendingReceiver,
      handle);
    this.$ = new mojom.DebugLogsChangeHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  changeDebugLogsState(should_debug_logs_be_enabled) {
    return this.$.changeDebugLogsState(should_debug_logs_be_enabled);
  }
};

mojom.DebugLogsChangeHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DebugLogsChangeHandler', [
      { explicit: null },
    ]);
  }

  changeDebugLogsState(should_debug_logs_be_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec,
      null,
      [should_debug_logs_be_enabled],
      false);
  }

};

mojom.DebugLogsChangeHandler.getRemote = function() {
  let remote = new mojom.DebugLogsChangeHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.DebugLogsChangeHandler',
    'context');
  return remote.$;
};

mojom.DebugLogsChangeHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DebugLogsChangeHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec.$.structSpec);
          const result = this.impl.changeDebugLogsState(params.should_debug_logs_be_enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.DebugLogsChangeHandlerReceiver = mojom.DebugLogsChangeHandlerReceiver;

mojom.DebugLogsChangeHandlerPtr = mojom.DebugLogsChangeHandlerRemote;
mojom.DebugLogsChangeHandlerRequest = mojom.DebugLogsChangeHandlerPendingReceiver;


// Interface: BluetoothInternalsHandler
mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec, 'mojom.BluetoothInternalsHandler_GetAdapter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_GetAdapter_ResponseParams', [
      mojo.internal.StructField('adapter', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.AdapterRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec, 'mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParams', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(mojom.DebugLogsChangeHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('initial_toggle_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec, 'mojom.BluetoothInternalsHandler_CheckSystemPermissions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParams', [
      mojo.internal.StructField('need_location_permission', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('need_nearby_devices_permission', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('need_location_services', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_request_permissions', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec, 'mojom.BluetoothInternalsHandler_RequestSystemPermissions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec, 'mojom.BluetoothInternalsHandler_RequestLocationServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec, 'mojom.BluetoothInternalsHandler_RestartSystemBluetooth_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec, 'mojom.BluetoothInternalsHandler_StartBtsnoop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParams', [
      mojo.internal.StructField('btsnoop', 0, 0, mojo.internal.InterfaceProxy(mojom.BluetoothBtsnoopRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec, 'mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec, 'mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.BluetoothInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.BluetoothInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.BluetoothInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.BluetoothInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.BluetoothInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAdapter() {
    return this.$.getAdapter();
  }
  getDebugLogsChangeHandler() {
    return this.$.getDebugLogsChangeHandler();
  }
  checkSystemPermissions() {
    return this.$.checkSystemPermissions();
  }
  requestSystemPermissions() {
    return this.$.requestSystemPermissions();
  }
  requestLocationServices() {
    return this.$.requestLocationServices();
  }
  restartSystemBluetooth() {
    return this.$.restartSystemBluetooth();
  }
  startBtsnoop() {
    return this.$.startBtsnoop();
  }
  isBtsnoopFeatureEnabled() {
    return this.$.isBtsnoopFeatureEnabled();
  }
};

mojom.BluetoothInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BluetoothInternalsHandler', [
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

  getAdapter() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec,
      mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec,
      [],
      false);
  }

  getDebugLogsChangeHandler() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec,
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec,
      [],
      false);
  }

  checkSystemPermissions() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec,
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec,
      [],
      false);
  }

  requestSystemPermissions() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec,
      mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec,
      [],
      false);
  }

  requestLocationServices() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec,
      mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec,
      [],
      false);
  }

  restartSystemBluetooth() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec,
      mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParamsSpec,
      [],
      false);
  }

  startBtsnoop() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec,
      mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec,
      [],
      false);
  }

  isBtsnoopFeatureEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec,
      mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

mojom.BluetoothInternalsHandler.getRemote = function() {
  let remote = new mojom.BluetoothInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.BluetoothInternalsHandler',
    'context');
  return remote.$;
};

mojom.BluetoothInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BluetoothInternalsHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec.$.structSpec);
          const result = this.impl.getAdapter();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec.$.structSpec);
          const result = this.impl.getDebugLogsChangeHandler();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec.$.structSpec);
          const result = this.impl.checkSystemPermissions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec.$.structSpec);
          const result = this.impl.requestSystemPermissions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec.$.structSpec);
          const result = this.impl.requestLocationServices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec.$.structSpec);
          const result = this.impl.restartSystemBluetooth();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec.$.structSpec);
          const result = this.impl.startBtsnoop();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isBtsnoopFeatureEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.BluetoothInternalsHandlerReceiver = mojom.BluetoothInternalsHandlerReceiver;

mojom.BluetoothInternalsHandlerPtr = mojom.BluetoothInternalsHandlerRemote;
mojom.BluetoothInternalsHandlerRequest = mojom.BluetoothInternalsHandlerPendingReceiver;


// Interface: BluetoothBtsnoop
mojo.internal.Struct(
    mojom.BluetoothBtsnoop_Stop_ParamsSpec, 'mojom.BluetoothBtsnoop_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.BluetoothBtsnoop_Stop_ResponseParamsSpec, 'mojom.BluetoothBtsnoop_Stop_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.BluetoothBtsnoopPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.BluetoothBtsnoopRemote = class {
  static get $interfaceName() {
    return 'mojom.BluetoothBtsnoop';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.BluetoothBtsnoopPendingReceiver,
      handle);
    this.$ = new mojom.BluetoothBtsnoopRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  stop() {
    return this.$.stop();
  }
};

mojom.BluetoothBtsnoopRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BluetoothBtsnoop', [
      { explicit: null },
    ]);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.BluetoothBtsnoop_Stop_ParamsSpec,
      mojom.BluetoothBtsnoop_Stop_ResponseParamsSpec,
      [],
      false);
  }

};

mojom.BluetoothBtsnoop.getRemote = function() {
  let remote = new mojom.BluetoothBtsnoopRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.BluetoothBtsnoop',
    'context');
  return remote.$;
};

mojom.BluetoothBtsnoopReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BluetoothBtsnoop', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mojom.BluetoothBtsnoop_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.BluetoothBtsnoop_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.BluetoothBtsnoop_Stop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.BluetoothBtsnoopReceiver = mojom.BluetoothBtsnoopReceiver;

mojom.BluetoothBtsnoopPtr = mojom.BluetoothBtsnoopRemote;
mojom.BluetoothBtsnoopRequest = mojom.BluetoothBtsnoopPendingReceiver;

